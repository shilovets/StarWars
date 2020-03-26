import React, {Component} from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import {SwapiService} from "../../services/swapi-service";
import {SwapiServiceProvider} from "../swapi-service-context";

import "./app.css";

import Header from "../header";
import ErrorIndicator from "../error-indicator";
import ErrorBoundry from "../error-boundry/error-boundry";
import RandomPlanet from "../random-planet";
import {
    PeoplePage,
    PlanetsPage,
    StarshipsPage,
    SecretPage,
    LoginPage
} from "../pages";
import StarshipDetails from "../sw-components/starship-details";


export default class App extends Component {
    swapiService = new SwapiService();

    state = {
        selectedItemId: null,
        isLoggedIn: false
    };

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>
        }

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <BrowserRouter>
                        <div className='container'>
                            <Header/>
                            <RandomPlanet/>
                            <Switch>
                                <Route path='/'
                                       exact
                                       render={() => <h2 className='welcome'>Welcome to STAR WARS world</h2>}/>
                                <Route path='/people/:id?' component={PeoplePage}/>
                                <Route path='/planets/' component={PlanetsPage}/>
                                <Route path='/starships/' exact component={StarshipsPage}/>
                                <Route path='/starships/:id'
                                       render={({match}) => {
                                           const {id} = match.params;
                                           return <StarshipDetails itemId={id}/>
                                       }}/>
                                <Route path='/secret'
                                       render={() => (
                                           <SecretPage isLoggedIn={this.state.isLoggedIn}/>
                                       )}/>
                                <Route path='/login'
                                       render={() => (
                                           <LoginPage isLoggedIn={this.state.isLoggedIn} onLogin={this.onLogin}/>
                                       )}/>
                                <Route render={() => <h1>Page not found</h1>}/>
                                {/*без path роут работает и будет отображать контент при несуществующем пути*/}
                                {/*<Redirect to='/'/> перенаправление пользователя на домашнюю страницу*/}
                            </Switch>
                        </div>
                    </BrowserRouter>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    };
};

