import React, { Component } from 'react';
import Portlet from "./Portlet";
import Table from "./Table";

const Row = props => {
    const columns = props.columns.map((column, index) => {
        return (
            <div key={index} className={"col-" + column.size}>
                <Portlet icon={column.portlet.icon} name={column.portlet.name}>
                    <Table headers={column.portlet.table.headers} rows={column.portlet.table.rows}/>
                </Portlet>
            </div>
        );
    });

    return (
        <div className="row">
            {columns}
        </div>
    );
};



class Grid extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return this.props.rows.map((row, index) => {
            return (
                <Row key={index} columns={row.columns} />
            );
        });
    }
}

export default Grid;