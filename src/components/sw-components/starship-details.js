import React from 'react';
import {withSwapiService} from "../hoc-helper/with-swapi-service";

import ItemDetails, {Record} from "../item-details";

const StarshipDetails = ({itemId, swapiService}) => {
    const {getStarship, getStarshipImage} = swapiService;

    return (
        <ItemDetails
            itemId={itemId}
            getData={getStarship}
            getImageURL={getStarshipImage}
        >

            <Record field={'model'} label={'Model'}/>
            <Record field={'manufacturer'} label={'Manufacturer'}/>
            <Record field={'costInCredits'} label={'Cost in credits'}/>
            <Record field={'length'} label={'Length'}/>
            <Record field={'crew'} label={'Crew'}/>
            <Record field={'passengers'} label={'Passengers'}/>
            <Record field={'cargoCapacity'} label={'Cargo Capacity'}/>

        </ItemDetails>
    );
};

export default withSwapiService(StarshipDetails);