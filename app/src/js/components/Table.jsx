import React, { Component } from 'react';

const TableHeader = props => {
    const headers = props.headers.map((header, index) => {
        return (
            <th key={index} rowSpan="1" colSpan="1" style={{width: header.width}}>{header.name}</th>
        );
    });

    return <thead><tr>{headers}</tr></thead>;
};

const TableBody = props => {
    const rows = props.rows.map((row, index) => {
        return (
            <tr role="row" key={index} className={index % 2 ? "odd" : "even"}>
                <td>{row.name}</td>
                <td style={{ fontWeight: row.updated ? 'bold': 'normal'}}>{row.sum}</td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
};

class Table extends Component {
    render() {
        const { headers, rows } = this.props;
        return (
            <div className="table-scrollable">
                <table className="table table-striped table-bordered dt-responsive">
                    <TableHeader headers={headers} />
                    <TableBody rows={rows} />
                </table>
            </div>
        );
    }
}

export default Table;