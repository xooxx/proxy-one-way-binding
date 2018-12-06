import React, { Component } from 'react';
import Grid from "./Grid";
import Updater from "../updater"


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rows: [
                /*{
                    columns: [
                        {
                            size: "md-6",
                            portlet: {
                                icon: "fa fa-opencart font-dark",
                                name: "MyMonolith UK",
                                table: {
                                    headers: [
                                        {name: "Store Name", width: "101px"},
                                        {name: "Today Sales", width: "65px"}
                                    ],
                                    rows: [
                                        {id: "1", name: "Mix1", sum: "162,700 €"},
                                        {id: "2", name: "Mix2", sum: "1,200,000 €"},
                                        {id: "3", name: "Mix3", sum: "162,700 €"},
                                        {id: "4", name: "Mix4", sum: "1,200,000 €"}
                                    ]
                                }
                            }
                        }
                    ]
                }*/
            ]
        };

    }

    componentDidMount() {
        this.updater = new Updater("/tests/instantcash/query","/tests/instantcash/collect");
        this.updater.setHandlers( (res)=> {

            let n = 0;
            const rows = [];
            for(let i = 0; i< res.data.length; i++){

                if(n === 0){
                    rows.push({ columns: [] });
                }

                const lri = rows.length -1;
                rows[lri].columns.push({
                    size: "md-6",
                    portlet: {
                        icon: "fa fa-opencart font-dark",
                        name: res.data[i].name,
                        table: {
                            headers: [
                                {name: "Store Name", width: "101px"},
                                {name: "Today Sales", width: "65px"}
                            ],
                            rows: []
                        }
                    }
                });

                for(let y = 0; y< res.data[i].peers.length; y++){
                    const lci = rows[lri].columns.length -1;
                    rows[lri].columns[lci].rows.push({
                        id: res.data[i].peers[y].id,
                        name: res.data[i].peers[y].name,
                        sum: "-"
                    });
                }

                n = n+1;
                if(n === 2){ n = 0; }

            }

            this.setState({rows:  rows});

        }, (res)=> {

            const rows = [...this.state.rows];

            for(let i = 0; i< res.data.length; i++){
                const peers = res.data[i].peers;

                for(let x=0; x<peers.length; x++){
                    const peerId = peers[x].id,
                        results  = peers[x].results;

                    if(results.length > 0){
                        for(let y = 0; y< rows.length; y++){
                            const column = rows[y].columns.find((column) => {
                                return column.rows.find((row) => {
                                    return row.id === peerId;
                                });
                            });

                            if(column !== undefined) {
                                //TODO: show animation :)
                                const index = column.rows.findIndex((row) => {
                                    return row.id === peerId;
                                });
                                column.rows[index] = Object.assign({},column.rows[index]);
                                column.rows[index].sum = results[0].totalamount;
                                break;
                            }
                        }
                    }
                }
            }

            this.setState({
                rows: rows
            });

        });
        this.updater.start();
    }

    componentWillUnmount() {
        this.updater.stop();
    }

    render() {

        return (
            <Grid rows={this.state.rows}/>
        );
    }
}

export default App;