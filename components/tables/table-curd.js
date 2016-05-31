import React, {Component} from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import ModalForm from '../modal/modal-form';
import ModalSimple from '../modal/modal-simple';
import MyForm from '../form/form'
class TableSelect extends Component {
    render() {
        const {query, onChange} = this.props;
        return (
            <div>
                {query.map((item, index) => {
                    switch (item.type) {
                        case 'text':
                            return (
                                <div className="col-md-4 col-sm-4 col-xs-12 form-group " key={index}>
                                    <label className="control-label col-md-5 col-xs-12" >{item.text}
                                    </label>
                                    <div className="col-md-7 col-xs-12">
                                        <input type="text" className="form-control" name={item.name} value={this.props[item.name]}  onChange={onChange}/>
                                    </div>
                                </div>)
                        case 'date':
                        case 'dateRange':
                            return (
                                <div className="col-md-4 col-sm-4 col-xs-12 form-group" key={index}>
                                    <label className="control-label col-md-5 col-xs-12">{item.text}
                                    </label>
                                    <div className="col-md-7 col-xs-12">
                                        <input type="text" className="form-control has-feedback-left" id={item.name} value={this.props[item.name]}/>
                                        <span className="fa fa-calendar-o form-control-feedback left" aria-hidden="true"></span>
                                    </div>
                                </div>)
                        case 'dropdown':
                            return (
                                <div className="col-md-4 col-sm-4 col-xs-12 form-group" key={index}>
                                    <label className="control-label col-md-5 col-xs-12">{item.text}</label>
                                    <div className="col-md-7 col-xs-12">
                                        <select className="form-control" onChange={onChange} name={item.name}>
                                            {item.options.map((oitem, oindex) => {
                                                return <option key={oindex}>{oitem}</option>
                                            }) }
                                        </select>
                                    </div>
                                </div>)
                        default:
                            return null;
                    }
                }) }
            </div>
        )
    }
}
export default class TableCurd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            model: '',
            modalIsOpen: false,
            disabled: true,
            id: '',
            keys: [],
            queries: {},
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
        this.toggleModal = this.toggleModal.bind(this);
        this.onRowSelect = this.onRowSelect.bind(this);
        this.onSelectAll = this.onSelectAll.bind(this);
        this.onConfirmModal = this.onConfirmModal.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onGetData(page, sizePerPage) {
        console.log(page, sizePerPage)
        this.onAjax();
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
                <a onClick={() => this.toggleModal(true, '删除', row.id) }  href="javascript:;">删除</a>
                &nbsp; <a onClick={() => this.toggleModal(true, '编辑', row.id) } href="javascript:;">编辑</a>
            </div>
        )
    }
    toggleModal(bool, model, id) {
        this.setState({ modalIsOpen: bool, model: model, id: id })
    }
    onConfirmModal() {
        this.onAjax(this.props.url + '/' + this.state.id, 'delete', (result, status) => {
            this.setState({ data: result, modalIsOpen: false })
        });
    }
    onEdit() {
    }
    onAdd() {
    }
    onSelect() {
        this.onAjax(this.props.url, 'get', this.state.queries, (result, status) => {
            this.setState({ data: result })
        });
    }
    onAjax(url, method, data, cb) {
        $.ajax({
            url: url,
            data: data,
            dataType: 'json',
            method: method
        }).done((result, status, xhr) => {
            cb && cb(result, xhr.status);
        });
    }
    onChange(e) {
        console.dir(e.target.name)
        const selects = Object.assign({}, this.state.queries);
        selects[e.target.name] = e.target.value;
        this.setState({ queries: selects });
    }
    renderBtns() {
        //多项删除
        // const delbtn = this.props.multiple ? (<div className="col-md-4 col-xs-12">
        //     <button type="button" className="btn btn-danger btn-block" disabled={this.state.disabled} onClick={this.onDel}>删除</button>
        // </div>) : null;
        return (
            <div className="form-group">
                <div className="col-lg-3 col-md-4  col-xs-12 col-lg-offset-9 col-md-offset-8">
                    <div className=" col-md-6  col-xs-12">
                        <a className="btn btn-info btn-block" onClick={() => this.toggleModal(true, '添加') }>添加</a>
                    </div>
                    <div className=" col-md-6  col-xs-12">
                        <a className="btn btn-success btn-block" onClick={this.onSelect }>查询</a>
                    </div>
                </div>
            </div>
        )
    }
    renderModal() {
        return (this.state.model === '删除' ?
            (<ModalSimple modalIsOpen={this.state.modalIsOpen} onCloseModal={() => this.toggleModal(false) } title={this.state.model} onConfirmModal={this.onConfirmModal}>
                <p>确认要删除吗？</p>
            </ModalSimple>) : (<ModalForm modalIsOpen={this.state.modalIsOpen} onCloseModal={() => this.toggleModal(false) } title={this.state.model}>
                <MyForm model={this.props.model}/>
            </ModalForm>))
    }
    render() {
        const {query, model} = this.props;
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
        return (
            <div>
                <form className="form-horizontal">
                    <TableSelect query={query} onChange={this.onChange}/>
                    {this.renderBtns() }
                </form>
                <BootstrapTable data={this.state.data}  hover={true} striped={true} condensed={true} pagination={true}  options={options}>
                    <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" className="table_header" width="50">id</TableHeaderColumn>
                    {model.map((item, index) => {
                        return <TableHeaderColumn dataField={item.dataField} className="table_header" key={index}>{item.name}</TableHeaderColumn>
                    }) }
                    <TableHeaderColumn dataField=""  className="table_header" dataFormat={this.onDataFormat} width="100">操作</TableHeaderColumn>
                </BootstrapTable>
                {this.renderModal()}
            </div>
        )
    }
    componentWillMount() {
        const {query} = this.props;
        for (let i = 0; i < query.length; i++) {
            this.state.queries[[query[i].name]] = '';
        }
        this.forceUpdate();
    }

    componentDidMount() {
        const {query} = this.props;
        for (let i = 0; i < query.length; i++) {
            if (query[i].type === 'date') {
                $('#' + query[i].name).daterangepicker({
                    "singleDatePicker": true,
                    "locale": {
                        "format": "YYYY/MM/DD",
                        "daysOfWeek": [
                            "日",
                            "一",
                            "二",
                            "三",
                            "四",
                            "五",
                            "六"
                        ],
                        "monthNames": [
                            "一月",
                            "二月",
                            "三月",
                            "四月",
                            "五月",
                            "六月",
                            "七月",
                            "八月",
                            "九月",
                            "十月",
                            "十一月",
                            "十二月"
                        ],
                        "firstDay": 1
                    },
                    calender_style: "picker_4"
                }, (start, end, label) => {
                    this.state.queries[query[i].name] = start.format('YYYY/MM/DD');
                    this.forceUpdate();
                });
            }

        }


    }




}