import React, {Component} from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import ModalForm from '../modal/modal-form';
import ModalSimple from '../modal/modal-simple';
import MyForm from '../form/form'

export default class TableCurd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            model: '',
            modalIsOpen: false,
            disabled: true,
            keys: [],
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
        this.onDataFormat = this.onDataFormat.bind(this);
        this.onOpenModal = this.onOpenModal.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
        this.onRowSelect = this.onRowSelect.bind(this);
        this.onSelectAll = this.onSelectAll.bind(this);
        this.onDel = this.onDel.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onEdit = this.onEdit.bind(this);
    }

    onGetData(page, sizePerPage) {
        console.log(page, sizePerPage)
    }

    onRowSelect(row, isSelected) {
        const keys = this.state.keys;
        var _keys = [];

        if (isSelected) {
            _keys = [...keys, row.id];
        } else {
            _keys = keys.filter(function (item) {
                return item !== row.id;
            });
        }
        this.setState({ disabled: _keys.length === 0, keys: _keys });
    }

    onSelectAll(isSelected, currentSelectedAndDisplayData) {
        if (isSelected) {
            const _keys = [];
            currentSelectedAndDisplayData.map((item) => {
                _keys.push(item.id);
            })
            this.setState({ disabled: !isSelected, keys: _keys });
        } else {
            this.setState({ disabled: isSelected, keys: [] });
        }

    }
    onDataFormat(cell, row) {
        return (
            <div>
                <a onClick={this.onDel} data-id={row.id} href="javascript:;">删除</a>
                &nbsp; <a onClick={this.onEdit} data-id={row.id} href="javascript:;">编辑</a>
            </div>
        )
    }
    onOpenModal() {
        this.setState({ modalIsOpen: true });
    }
    onCloseModal() {
        this.setState({ modalIsOpen: false });
    }
    onEdit(e) {
        this.setState({ modalIsOpen: true, model: '编辑' });
        console.log(e.target)
    }
    onAdd() {
        this.setState({ modalIsOpen: true, model: '添加' });
    }
    onDel() {
        this.setState({ modalIsOpen: true, model: '删除' });
    }
    render() {
        console.log('render,table')
        const selectRowProp = {
            mode: "checkbox",
            bgColor: "rgba(38, 185, 154, 0.07)",
            onSelect: this.onRowSelect,
            onSelectAll: this.onSelectAll
        };
        const options = {
            page: 0,
            noDataText: '没有数据',
            sizePerPageList: [10, 50],
            sizePerPage: 10,
            onPageChange: this.handlePageChange
        }
        const modal = (this.state.model === '删除' ? 
        (<ModalSimple modalIsOpen={this.state.modalIsOpen} onCloseModal={this.onCloseModal} title={this.state.model}>
            <p>确认要删除吗？</p>
        </ModalSimple>) : (<ModalForm modalIsOpen={this.state.modalIsOpen} onCloseModal={this.onCloseModal} title={this.state.model}>
            <MyForm/>
        </ModalForm>))
        return (
            <div>
                <form className="form-horizontal">

                    <div className="col-md-4 col-sm-4 col-xs-12 form-group ">
                        <label className="control-label col-md-5 col-xs-12" for="inputSuccess2">开始时间 <span className="required">*</span>
                        </label>
                        <div className="col-md-7 col-xs-12">
                            <input type="text" className="form-control" id="inputSuccess2" placeholder="First Name"/>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12 form-group">
                        <label className="control-label col-md-5 col-xs-12">下拉菜单</label>
                        <div className="col-md-7 col-xs-12">
                            <select className="form-control">
                                <option>Choose option</option>
                                <option>Option one</option>
                                <option>Option two</option>
                                <option>Option three</option>
                                <option>Option four</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12 form-group">
                        <label className="control-label col-md-5 col-xs-12" for="first-name">开始时间 <span className="required">*</span>
                        </label>
                        <div className="col-md-7 col-xs-12">
                            <input type="text" className="form-control has-feedback-left" id="single_cal1" placeholder="时间选择" aria-describedby="inputSuccess2Status"/>
                            <span className="fa fa-calendar-o form-control-feedback left" aria-hidden="true"></span>
                            <span id="inputSuccess2Status" className="sr-only">(success) </span>
                        </div>
                    </div>
                    <div className="col-xs-12 form-group">
                        <div className="col-lg-3 col-md-4  col-xs-12 col-lg-offset-9 col-md-offset-8">
                            <div className=" col-md-4  col-xs-12">
                                <a className="btn btn-info btn-block" onClick={this.onAdd}>添加</a>
                            </div>
                            <div className="col-md-4 col-xs-12">
                                <button type="button" className="btn btn-danger btn-block" disabled={this.state.disabled} onClick={this.onDel}>删除</button>
                            </div>
                            <div className=" col-md-4  col-xs-12">
                                <button type="button" className="btn btn-success btn-block">查询</button>
                            </div>
                        </div>

                    </div>
                </form>
                <BootstrapTable data={this.state.data}  hover={true} striped={true} condensed={true} pagination={true} selectRow={selectRowProp} options={options}>
                    <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" className="table_header ">Product ID</TableHeaderColumn>
                    <TableHeaderColumn dataField="name" className="table_header">Product Name</TableHeaderColumn>
                    <TableHeaderColumn dataField="price"  className="table_header">Product Price</TableHeaderColumn>
                    <TableHeaderColumn dataField=""  className="table_header" dataFormat={this.onDataFormat} width="100">操作</TableHeaderColumn>
                </BootstrapTable>
                {modal}
            </div>
        )
    }

    componentDidMount() {
        $('#single_cal1').daterangepicker({
            singleDatePicker: true,
            calender_style: "picker_4"
        }, function (start, end, label) {
            console.log(start.toISOString(), end.toISOString(), label);
        });

    }




}