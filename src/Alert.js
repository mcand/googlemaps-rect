import React from 'react';
import { Alert, Button } from 'react-bootstrap';

class AlertInstance extends React.Component{
    constructor(){
        super();
        this.handleAlertDismiss = this. handleAlertDismiss.bind(this);
        // this.state = {alertVisible: false }
    }


    render(){
        const  {hasError, type, title, message} = this.props;
        if (this.props.hasError) {
            return(
                <Alert bsStyle={type} onDismiss={this.handleAlertDismiss}>
                    <h4> {title} </h4>
                    <p> {message} </p>
                </Alert>
            );
        }
        return(<div></div>)
    }

    handleAlertDismiss = () => {
        const { alertVisible } = this.props;
        this.setState({alertVisible: false});       
    }


}
export default AlertInstance;