import React from 'react';
import {withRouter} from 'react-router-dom';

import {PersonDetails, PersonList} from "../sw-components";
import {Row} from "../row/row";

const PeoplePage = ({match, history}) => {

    const {id} = match.params;
    return (
        <React.Fragment>
            <h1>People</h1>
            <Row
                left={<PersonList onItemSelected={(id) => history.push(id)}/>}
                right={<PersonDetails itemId={id}/>}
            />
        </React.Fragment>
    );
};

export default withRouter(PeoplePage);