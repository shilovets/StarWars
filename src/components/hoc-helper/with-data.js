import React, {Component} from 'react';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const withData = (View, getData) => {
    return class extends Component {

        state = {
            data: null,
            error: false
        };

        componentDidMount() {
            getData()
                .then((data) => {
                    this.setState({
                        data
                    });
                })
                .catch((err) => {
                    this.setState({
                        error: true
                    });
                });
        };

        render() {
            const {data, error} = this.state;

            if (!data) {
                return <Spinner/>;
            }

            if (!error) {
                return <View {...this.props} data={data}/>
            } else {
                return <ErrorIndicator/>
            }
        };
    };
};

export default withData;