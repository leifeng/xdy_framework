import React, {Component} from 'react';
import Formsy from 'formsy-react';
import MyInput from'./input'

class MyForm extends Component {
    constructor() {
        super();
        this.state = {
            canSubmit: false
        }
        this.enableButton = this.enableButton.bind(this);
        this.disableButton = this.disableButton.bind(this);
    }

    enableButton() {
        this.setState({ canSubmit: true })
    }
    disableButton() {
        this.setState({ canSubmit: false })
    }
    submit(model) {
        console.log(model)
    }
    render() {
        return (
            <Formsy.Form onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton} className="">
                {this.props.model.map((item, index) => {
                    return <MyInput key={index} name={item.dataField} title={item.name} validations={item.valid} validationError={item.validError} required={item.require} type={item.type}/>
                })}
                <div className="form-group">
                    <div className="col-md-2">
                        <button type="submit" className="btn btn-success" disabled={!this.state.canSubmit}>保存</button>
                    </div>
                </div>
            </Formsy.Form>

        )
    }
}

export default MyForm;