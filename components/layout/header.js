import React, {Component} from 'react';

class Header extends Component {

    constructor() {
        super();
    }

    render() {
        const {username} = this.props;
        return (
            <div className="top_nav">
                <div className="nav_menu">
                    <nav className="" role="navigation">
                        <div className="nav toggle">
                            <a id="menu_toggle"><i className="fa fa-bars"></i></a>
                        </div>

                        <ul className="nav navbar-nav navbar-right">
                            <li className="">
                                <a href="javascript:;" className="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                    <img src="images/img.jpg" alt=""/>{username}
                                    <span className=" fa fa-angle-down"></span>
                                </a>
                                <ul className="dropdown-menu dropdown-usermenu pull-right">
                                    <li>
                                        <a href="login.html"><i className="fa fa-sign-out pull-right"></i> 退出账号</a>
                                    </li>
                                </ul>
                            </li>

                            <li role="presentation" className="dropdown">
                                <a href="javascript:;" className="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
                                    <i className="fa fa-envelope-o"></i>
                                    <span className="badge bg-green">6</span>
                                </a>
                                <ul id="menu1" className="dropdown-menu list-unstyled msg_list" role="menu">
                                    <li>
                                        <a>
                                            <span className="image">
                                                <img src="images/img.jpg" alt="Profile Image"/>
                                            </span>
                                            <span>
                                                <span>John Smith</span>
                                                <span className="time">3 mins ago</span>
                                            </span>
                                            <span className="message">
                                                Film festivals used to be do -or-die moments for movie makers.They were where...
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <div className="text-center">
                                            <a href="inbox.html">
                                                <strong>See All Alerts</strong>
                                                <i className="fa fa-angle-right"></i>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </nav>
                </div>

            </div>
        );
    }

    componentDidMount() {
        onHeaderDidMount();
    }

}

Header.defaultProps = {
    username: 'zcl'
}
export default Header;