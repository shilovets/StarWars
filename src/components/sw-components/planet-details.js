import React from 'react';
import {withSwapiService} from "../hoc-helper/with-swapi-service";

import ItemDetails, {Record} from "../item-details";

const PlanetDetails = ({itemId, swapiService}) => {
    const {getPlanet, getPlanetImage} = swapiService;

    return (
        <ItemDetails
            itemId={itemId}
            getData={getPlanet}
            getImageURL={getPlanetImage}
        >

            <Record field={'population'} label={'Population'}/>
            <Record field={'rotationPeriod'} label={'Rotation Period'}/>
            <Record field={'diameter'} label={'Diameter'}/>

        </ItemDetails>
    );
};

export default withSwapiService(PlanetDetails);