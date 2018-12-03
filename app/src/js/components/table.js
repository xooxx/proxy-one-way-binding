import { Collection, bind } from '../lib';

class Bootstrap {
    constructor(c, data) {
        this.rows = new Collection(c, BootstrapRow, ...data.rows);
        return bind(c, this);
    }

    render() {
        return `
              ${this.rows.render()}
            `;
    }
}

class BootstrapRow {

    constructor(c, data) {

        this.columns = new Collection(c, BootstrapCol, ...data.columns);
        return bind(c, this);
    }

    render() {
        return `
              <div class="row">
                ${this.columns.render()}
             </div>
            `;
    }
}

class BootstrapCol {

    constructor(c, data) {
        this.size = data.size;
        this.name = data.name;
        this.icon = "fa fa-opencart font-dark";
        this.headers = new Collection(c, TableHeader, ...data.headers);
        this.rows = new Collection(c, TableRow, ...data.rows);
        return bind(c, this);
    }

    render() {
        return `
            <div class="col-${this.size}">
                <div class="portlet light bordered">
                    <div class="portlet-title">
                        <div class="caption font-dark">
                            <i class="${this.icon}"></i>
                            <span class="caption-subject bold uppercase">${this.name}</span>
                        </div>
                    </div>
                    <div class="portlet-body">
                        <div class="dataTables_wrapper no-footer">
                            <div class="table-scrollable">
                                <table class="table table-striped table-bordered dt-responsive" width="100%" role="grid" style="width: 100%;">
                                    <thead>
                                        <tr role="row">
                                            ${this.headers.render()}
                                        </tr>
                                    </thead>
                                    <tbody>
                                           ${this.rows.render()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
    }
}

class TableHeader {
    constructor(c, data) {

        this.name = data.name;
        return bind(c, this);
    }

    render() {
        return `
            <th rowspan="1" colspan="1" style="width: 101px;" aria-sort="ascending">
                ${this.name}
            </th>
        `;
    }
}

class TableRow {
    constructor(c, row, n) {

        this.name = row.name;
        this.sum = row.sum;
        this.className = n % 2 ? "odd" : "even";
        return bind(c, this);
    }

    render() {
        return `
            <tr role="row" class="${this.className}">
                <td>${this.name}</td>
                <td>${this.sum}</td>
            </tr>
        `;
    }
}

export default Bootstrap;
