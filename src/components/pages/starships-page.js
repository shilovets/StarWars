import React from 'react';
import {StarshipList} from "../sw-components";
import {withRouter} from 'react-router-dom';

const StarshipsPage = ({history}) => {
    return (
        <React.Fragment>
            <h1>Starships</h1>
            <StarshipList
                onItemSelected={(id) => history.push(id)}/>
        </React.Fragment>
    );
};

export default withRouter(StarshipsPage);