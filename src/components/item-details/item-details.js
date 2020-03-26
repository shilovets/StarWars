import React, {Component} from 'react';

import './item-details.css';

import ErrorIndicator from "../error-indicator";
import Spinner from '../spinner';

const Record = ({item, field, label}) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    );
};

export default class ItemDetails extends Component {

    state = {
        item: null,
        image: null,
        loading: true,
        error: false
    };

    componentDidMount() {
        this.updateItem();
    };

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    };

    UNSAFE_componentWillUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) { //обязательно! Без этого никуда!
            this.setState({
                loading: true
            })
        }
    };

    updateItem() {
        const {itemId, getData, getImageURL} = this.props;
        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    image: getImageURL(item),
                    loading: false
                })
            })
            .catch((err) => {
                this.setState({
                    loading: false,
                    error: true
                })
            });
    };

    render() {
        const {item, image, error, loading} = this.state;

        if (!item) {
            return <span>Select a item from a list</span>;
        }
        const {name} = item;

        return (

            <div className="item-details card">
                {error ? <ErrorIndicator/> : null}
                {loading ? <Spinner/> : null}
                {!(loading || error)
                    ? <React.Fragment>
                        <img className="item-image"
                             src={image}
                             alt="item"/>

                        <div className="card-body">
                            <h4>{name}</h4>
                            <ul className="list-group list-group-flush">
                                {
                                    React.Children.map(this.props.children, (child) => {
                                        return React.cloneElement(child, {item});
                                    })
                                }
                            </ul>
                        </div>
                    </React.Fragment>
                    : null}
            </div>
        );
    };
};

export {
    Record
};