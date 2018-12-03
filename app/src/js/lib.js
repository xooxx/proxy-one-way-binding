
/* One way binding */

export function bind(c, elem) {
    return new Proxy(elem, {
        set: function (obj, prop, value) {
            obj[prop] = value;
            c.present();
            return true;
        },
        get: function (obj, prop) {
            return obj[prop];
        }
    });
}

export class Collection {
    constructor(c, Type, ...elem) {
        const arr = [];
        arr.push = function () {
            for (let i = 0, l = arguments.length; i < l; i++) {
                this[this.length] = new Type(c, arguments[i], i + 1);
            }
            return this.length;
        };
        arr.render = function () {
            let out = "";
            for (let o of arr) {
                out = out.concat(o.render());
            }
            return out;
        };

        arr.push(...elem);
        return bind(c, arr);
    }
}

export class Component {
    constructor(Type, node, data) {
        this.data = new Type(this, data);
        this.node = node;
        this.present();
    }

    present() {
        if (this.timerId) {
            clearTimeout(this.timerId);
        }
        this.timerId = setTimeout(() => {
            this.node.innerHTML = `
                      ${this.data.render()}
                    `;
            this.timerId = null;
        }, 100);
    }
}