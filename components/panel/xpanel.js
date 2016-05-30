import React, {Component} from 'react';

class Xpanel extends Component {
    render() {
        console.log('render xpanel')
        const {title,height}=this.props;
        return (
            <div className={'x_panel tile '+height}>
                <div className="x_title">
                    <h2>{title}</h2>    
                    <div className="clearfix"></div>
                </div>
                <div className="x_content">        
                    {this.props.children}
                </div>
            </div>
        );
    }
}
export default Xpanel;