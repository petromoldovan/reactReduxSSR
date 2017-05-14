import React from 'react';

class App extends React.Component {
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
                Works?
                <button onClick={()=>this.onButtonClick()}>click me</button>
            </div>
        );
    }
}

export default App;
