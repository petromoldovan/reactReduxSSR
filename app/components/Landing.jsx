import React from 'react';
import Header from './Header';


class Landing extends React.Component {
    componentDidMount() {
        const {testFlight} = this.props;

        if (testFlight && testFlight instanceof Function) testFlight();
    }

    onButtonClick = () => {
        alert("yeaaaaah")
    }

    render() {
        return (
            <div >
                <Header />
                Works well
                <button onClick={()=>this.onButtonClick()}>click me</button>
            </div>
        );
    }
}

export default Landing;
