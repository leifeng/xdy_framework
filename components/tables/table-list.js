import React, {Component} from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class TableList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    name: "Item name 1",
                    price: 100
                },
                {
                    id: 2,
                    name: "Item name 2",
                    price: 100
                }, {
                    id: 3,
                    name: "Item name 2",
                    price: 100
                }, {
                    id: 4,
                    name: "Item name 2",
                    price: 100
                }, {
                    id: 5,
                    name: "Item name 2",
                    price: 100
                }, {
                    id: 6,
                    name: "Item name 2",
                    price: 100
                }, {
                    id: 7,
                    name: "Item name 2",
                    price: 100
                }, {
                    id: 8,
                    name: "Item name 2",
                    price: 100
                }, {
                    id: 9,
                    name: "Item name 2",
                    price: 100
                }, {
                    id: 10,
                    name: "Item name 2",
                    price: 100
                }, {
                    id: 11,
                    name: "Item name 2",
                    price: 100
                }]
        }
    }

    onGetData(page, sizePerPage) {
        console.log(page, sizePerPage)
    }

    render() {

        const options = {
            page: 0,
            noDataText: '没有数据',
            sizePerPageList: [10, 50],
            sizePerPage: 10,
            onPageChange: this.handlePageChange
        }
        return (<BootstrapTable data={this.state.data}  hover={true} striped={true} condensed={true} pagination={true}  options={options}>
            <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" className="table_header ">Product ID</TableHeaderColumn>
            <TableHeaderColumn dataField="name" className="table_header">Product Name</TableHeaderColumn>
            <TableHeaderColumn dataField="price"  className="table_header ">Product Price</TableHeaderColumn>
        </BootstrapTable>)
    }
}