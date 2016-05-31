import React, {Component} from 'react';
import { Link } from 'react-router'

class Sidebar extends Component {
    constructor() {
        super();
    }
    render() {
        const {menus} = this.props;
        return (
            <div className="col-md-3 left_col">
                <div className="left_col scroll-view">
                    <div className="navbar nav_title">
                        <a href="index.html" className="site_title"><i className="fa fa-paw"></i> <span>Gentellela Alela!</span></a>
                    </div>

                    <div className="clearfix"></div>

                    <br/>

                    <div  className="main_menu_side hidden-print main_menu">
                        <div className="menu_section">

                            <ul className="nav side-menu" id="sidebar">
                                {menus.map((item, index) => {
                                    if (item.childs.length === 0) {
                                        return <li key={index}><Link to={item.link}><i className="fa fa-laptop"></i>{item.name}</Link></li>
                                    } else {
                                        return <li key={index}><a><i className="fa fa-home"></i>{item.name}<span className="fa fa-chevron-down"></span></a>
                                            <ul className="nav child_menu">
                                                {item.childs.map((child, childIndex) => {
                                                    return <li key={childIndex}><Link to={child.link}>{child.name}</Link></li>
                                                }) }
                                            </ul>
                                        </li>
                                    }
                                }) }
                            </ul>
                        </div>
                    </div>

                    <div className="sidebar-footer hidden-small">
                        <a data-toggle="tooltip" data-placement="top" title="" data-original-title="Settings">
                            <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
                        </a>
                        <a data-toggle="tooltip" data-placement="top" title="" data-original-title="FullScreen">
                            <span className="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
                        </a>
                        <a data-toggle="tooltip" data-placement="top" title="" data-original-title="Lock">
                            <span className="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
                        </a>
                        <a data-toggle="tooltip" data-placement="top" title="" data-original-title="Logout">
                            <span className="glyphicon glyphicon-off" aria-hidden="true"></span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount() {
        onSideDidMount();
    }
}
Sidebar.defaultProps = {
    menus: [
        { id: 1, link: '/index', name: '首页', childs: [] },
        {
            id: 2, link: '/index', name: '首页2', childs: [
                { id: 3, link: '/a', name: 'a' },
                { id: 4, link: '/b', name: 'b' }
            ]
        },
    ]
}
// Sidebar.propTypes = {
//     menus: React.propTypes.object
// }
export default Sidebar;
var a = [
    { id: 1, parentid: 0, name: '1', link: '/index' },
    { id: 2, parentid: 0, name: '2', link: '' },
    { id: 3, parentid: 0, name: '3' },
    { id: 4, parentid: 1, name: '4' },
    { id: 5, parentid: 1, name: '5' },
    { id: 6, parentid: 1, name: '6' },
    { id: 7, parentid: 2, name: '7' }
];
// var b=[];
// for(var i=0;i<a.length;i++){
//  if(a[i].parentid===0){
//    b[i]={id:a[i].id,name:a[i].name,childs:[]};
//  } else{
//    b[(a[i].parentid)-1].childs.push({id:a[i].id,name:a[i].name});
//  }
// }
// console.dir(b);