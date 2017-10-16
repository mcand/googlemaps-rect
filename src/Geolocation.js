import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import FieldGroup from './FieldGroup';
import Map from './Map';
import {GOOGLE_MAP_URL} from './Configuration';

class Geolocation extends React.Component {
    constructor(){
        super();
        this.state = {url: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e){
        this.setState({url: e.target.value})
    }

    handleClick(){
        console.log(this.state.url);
    }

    render(){
        const { url } = this.state;
        return(
            <div>
                <h1 className="text-center">Geolocation Component</h1>
                <Grid>
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
                            <Button bsStyle="primary" bsSize="large" onClick={this.handleClick}>Locate</Button>
                            <Button bsStyle="primary" bsSize="large">My Location</Button>
                            <Button bsStyle="danger" bsSize="large">Reset</Button>
                        </div>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <div className="v-space"></div>
                            <Map
                                googleMapURL={GOOGLE_MAP_URL}
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `400px` }} />}
                                mapElement={<div style={{ height: `100%` }} />}
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Geolocation;