import {Post, Get} from "./requester";

export default class Updater{

    constructor(queryUrl, collectUrl) {
        this.queryUrl = queryUrl;
        this.collectUrl = collectUrl;
        this.stoped= false;
        this.draw = false;
        this.cOk = (res)=>{};
        this.qOk = (res)=>{};
    }

    stop(){
        this.stoped = true;
        window.clearTimeout(this.t1);
        window.clearTimeout(this.t2);
    }

    start() {
        //Call query endpoint
        Post(this.queryUrl)
            .then(res => {
                if (this.stoped) return;

                if (res.data === undefined || res.data.len === 0) {

                    this.t1 = window.setTimeout(() => {
                        this.start();
                    }, 5000);

                    console.error("Bad data received!", res);

                } else {

                    const rid = res.data.map(x => x.rid);
                    if(this.draw === false){
                        this.qOk(res);
                        this.draw = true;
                    }

                    this.t1 = window.setTimeout(() => {
                        this.collect(rid, "sqlsrv");
                    }, 5000);
                }


            })
            .catch(error => console.error(error));
    }

    collect(rid, p){
        Get(this.collectUrl + "?rid=" + rid.join(";") + "&p=" + p)
            .then(res => {
                if (this.stoped) return;

                if(res.data === undefined){
                    this.t2 = window.setTimeout(() => {
                        this.start();
                    }, 5000);

                    console.error("Bad data received!", res);

                }else{
                    this.cOk(res);
                    this.t2 = window.setTimeout(() => {
                        this.start();
                    }, 15000);

                }

            })
            .catch(error => console.error(error));
    }

    setHandlers(qOk, cOk){
        this.qOk = qOk;
        this.cOk = cOk;
    }
}