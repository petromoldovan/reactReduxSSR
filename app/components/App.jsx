import React from 'react';

class App extends React.Component {
    componentDidMount() {
        const {testFlight} = this.props;

        if (testFlight && testFlight instanceof Function) testFlight();
    }

    render() {
        return (
            <div>
                Works!
            </div>
        );
    }
}

export default App;
