import React from 'react';
import Loader from 'react-loader-spinner';
export default class App extends React.Component {
    //other logic
    render() {
        return <Loader type='Hearts' color='red' height={80} width={80} />;
    }
}
