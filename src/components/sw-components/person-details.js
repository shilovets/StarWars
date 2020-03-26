import React from 'react';
import {withSwapiService} from '../hoc-helper/with-swapi-service';

import ItemDetails, {Record} from "../item-details";


const PersonDetails = ({itemId, swapiService}) => {
    const {getPerson, getPersonImage} = swapiService;
    return (
        <ItemDetails
            itemId={itemId}
            getData={getPerson}
            getImageURL={getPersonImage}
        >

            <Record field={'gender'} label={'Gender'}/>
            <Record field={'birthYear'} label={'Birth Year'}/>
            <Record field={'eyeColor'} label={'Eye Color'}/>

        </ItemDetails>
    );
};

export default withSwapiService(PersonDetails);