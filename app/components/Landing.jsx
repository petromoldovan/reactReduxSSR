import React from 'react';
import Header from './Header';


class Landing extends React.Component {
    componentDidMount() {
        const {loadLandingTest} = this.props;

        if (loadLandingTest && loadLandingTest instanceof Function) loadLandingTest();
    }

    onButtonClick = () => {
        alert("fire")
    }

    render() {
        return (
            <div >
                <Header />
                <p>Landing page</p>
                <button onClick={()=>this.onButtonClick()}>click me</button>
            </div>
        );
    }
}

export default Landing;
