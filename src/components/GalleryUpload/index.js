import React, { Component } from 'react';
import { Redirect } from "react-router";
import app from '../../utils/firebaseUtils';

import './styles.css';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.handleAdminHome = this.handleAdminHome.bind(this);
    }

    handleAdminHome() {
        return <Redirect to="/admin" />;
    }

    render() {
        return (
            <div className="admin container">
                <div className="card">
                    <div className="card-body">
                        <p>Enviar Fotos para Galeria</p>

                        <button onClick={this.handleAdminHome} className="btn btn-primary btn-block">Voltar</button>
                        <button onClick={() => app.auth().signOut()} className="btn btn-primary btn-block btn-space-top">Sair</button>
                    </div>
                </div>
            </div>
        );
    }
}