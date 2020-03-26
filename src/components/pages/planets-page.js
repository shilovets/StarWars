import React, {Component} from 'react';
import {PlanetDetails, PlanetList} from "../sw-components";
import {Row} from "../row/row";

export default class PlanetsPage extends Component {
    state = {
        selectedItem: null
    };

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem});
    };

    render() {
        return (
            <React.Fragment>
                <h1>Planets</h1>
                <Row
                    left={<PlanetList onItemSelected={this.onItemSelected}/>}
                    right={<PlanetDetails itemId={this.state.selectedItem}/>}
                />
            </React.Fragment>
        );
    };
};