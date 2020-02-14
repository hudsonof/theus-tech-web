import React, { Component } from 'react';

import Header from '../Header';
import Menu from '../Menu';
import SocialBar from '../SocialBar';
import Footer from '../Footer';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Menu />
                <SocialBar />
                <Footer />
            </div>
        );
    }
}