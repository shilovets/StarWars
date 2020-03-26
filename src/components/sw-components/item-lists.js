import React from 'react';
import {SwapiService} from "../../services/swapi-service";

import withData from "../hoc-helper/with-data";
import ItemList from "../item-list";

const swapiSevice = new SwapiService();

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = swapiSevice;

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        );
    };
};

const renderName = ({name}) => <span>{name}</span>;


const PersonList = withData(
                                withChildFunction(ItemList, renderName),
                                getAllPeople);
const PlanetList = withData(
                                withChildFunction(ItemList, renderName),
                                getAllPlanets);
const StarshipList = withData(
                                withChildFunction(ItemList, renderName),
                                getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
};