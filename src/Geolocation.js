import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import FieldGroup from './FieldGroup';
import MyFancyMap from './Map';
import axios from 'axios';
import {GOOGLE_MAP_URL, API_LOCATION} from './Configuration';
import validateURL from './validateUrl';
import Alert from './Alert';

class Geolocation extends React.Component {
    constructor(){
        super();
        this.state = { url: '', latitude: 0, longitude: 0, hasError: false, mylat: null, mylong: null };
        this.handleChange = this.handleChange.bind(this);
        this.handleSiteClick = this.handleSiteClick.bind(this);
        this.handleLocationClick = this.handleLocationClick.bind(this);
        this.handleReset = this.handleReset.bind(this); 
    }

    handleChange(e){
        this.setState({url: e.target.value})
    }

    handleLocationClick(){
        axios.get(`${API_LOCATION}`)
        .then(res => {
            this.setState({mylat: res.data["latitude"], mylong: res.data["longitude"], hasError: false});
        })
        .catch(function (error) {
            if (error.response) {       
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              console.log(error.request);
            } else {
              console.log('Error', error.message);
            }
            console.log(error.config);
          });
    }

    handleReset(){
        this.setState({mylat: this.state.latitude, mylong: this.state.longitude});
    }

    handleSiteClick(){
        if (validateURL(this.state.url)){
            axios.get(`${API_LOCATION}${this.state.url}`)
            .then(res => {
                this.setState({latitude: res.data["latitude"], longitude: res.data["longitude"], hasError: false});

            })
            .catch(function (error) {
                if (error.response) {
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                } else if (error.request) {
                  console.log(error.request);
                } else {
                  console.log('Error', error.message);
                }
                console.log(error.config);
              });
        } else {
            this.setState({hasError: true});
        }
        
    }

    render(){
        const { url, latitude, longitude, hasError, mylat, mylong} = this.state;

        return(
            <div>
                <h1 className="text-center">Geolocation Component</h1>
                <Grid>
                <Row className="show-grid">
                        <Col md={12}>
                            <Alert hasError={hasError} type="danger" title="Invalid URL" message="You have entered an invalid URL!" />
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col md={12}>
                            <form>
                                <FieldGroup
                                    id="url"
                                    type="text"
                                    placeholder="Enter URL"
                                    bsSize="large"
                                    onChange={this.handleChange}
                                />
                            </form>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <div className="text-center">
                            <Button id="locate" bsStyle="primary" bsSize="large" onClick={this.handleSiteClick}>Locate</Button>
                            <Button id="mylocation" bsStyle="primary" bsSize="large" onClick={this.handleLocationClick}>My Location</Button>
                            <Button id="reset" bsStyle="danger" bsSize="large" onClick={this.handleReset}>Reset</Button>
                        </div>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <div className="v-space"></div>
                            <MyFancyMap latitude={latitude} longitude={longitude}  mylat={mylat} mylong={mylong}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Geolocation;