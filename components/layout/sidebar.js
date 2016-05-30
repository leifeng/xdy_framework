import React, {Component} from 'react';
import { Link } from 'react-router'
class Sidebar extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="col-md-3 left_col">
                <div className="left_col scroll-view">
                    <div className="navbar nav_title">
                        <a href="index.html" className="site_title"><i className="fa fa-paw"></i> <span>Gentellela Alela!</span></a>
                    </div>

                    <div className="clearfix"></div>

                    <div className="profile">
                        <div className="profile_pic">
                            <img src="images/img.jpg" alt="..." className="img-circle profile_img"/>
                        </div>
                        <div className="profile_info">
                            <span>Welcome, </span>
                            <h2>John Doe</h2>
                        </div>
                    </div>

                    <br/>

                    <div  className="main_menu_side hidden-print main_menu">
                        <div className="menu_section">
                            <h3>General</h3>
                            <ul className="nav side-menu" id="sidebar">
                                <li>
                                    <a><i className="fa fa-home"></i> Home <span className="fa fa-chevron-down"></span></a>
                                    <ul className="nav child_menu">
                                        <li><Link to="/index">Dashboard</Link>
                                        </li>
                                        <li><Link to="/a1">Dashboard2</Link>
                                        </li>
                                        <li><a href="index3.html">Dashboard3</a>
                                        </li>
                                    </ul>
                                </li>
                                <li><a><i className="fa fa-edit"></i> Forms <span className="fa fa-chevron-down"></span></a>
                                    <ul className="nav child_menu">
                                        <li><Link to="/a">a</Link>
                                        </li>
                                        <li><Link to="/b">b</Link>
                                        </li>
                                        <li><a href="form_validation.html">Form Validation</a>
                                        </li>
                                        <li><a href="form_wizards.html">Form Wizard</a>
                                        </li>
                                        <li><a href="form_upload.html">Form Upload</a>
                                        </li>
                                        <li><a href="form_buttons.html">Form Buttons</a>
                                        </li>
                                    </ul>
                                </li>
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

export default Sidebar;