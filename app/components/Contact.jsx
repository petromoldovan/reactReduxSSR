import React from 'react';

import Header from './Header';


class Contact extends React.Component {
    componentDidMount() {
        const {loadContactTest} = this.props;

        if (loadContactTest && loadContactTest instanceof Function) loadContactTest();
    }

    render() {
        return (
            <div>
                <Header />
                <p>This is Contact</p>
            </div>
        );
    }
}

export default Contact;
