import React, { Component } from 'react';

import './styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Button, Collapse } from 'react-bootstrap';
import Gallery from '../Gallery';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.handleCollapseRelease = this.handleCollapseRelease.bind(this);
        this.handleCollapseShows = this.handleCollapseShows.bind(this);
        this.handleCollapseFotos = this.handleCollapseFotos.bind(this);
        this.state = {
            collapseRelease: false,
            collapseShows: false,
            collapseFotos: false
        };
    }
    handleCollapseRelease() {
        this.setState({
            collapseRelease: !this.state.collapseRelease,
            collapseShows: false,
            collapseFotos: false

        });
    }
    handleCollapseShows() {
        this.setState({
            collapseShows: !this.state.collapseShows,
            collapseRelease: false,
            collapseFotos: false
        });
    }
    handleCollapseFotos() {
        this.setState({
            collapseFotos: !this.state.collapseFotos,
            collapseShows: false,
            collapseRelease: false
        });
    }
    render() {
        return (
            <div id="mainContent" className="menu">
                <Button className="btn btn-block btn-info btn-collapse"
                    onClick={this.handleCollapseRelease}
                >Release <FontAwesomeIcon icon={faChevronDown} /></Button>
                <Collapse in={this.state.collapseRelease}>
                    <div id="collapseRelease">
                        <div className="card card-body">
                            <p>TheusTech, é natural de São Caetano do Sul/SP. Apaixonado por música, iniciou sua carreira
                                buscando por novas tendências.</p>
                            <p>Em seus Sets apresentado nas festa katavento, Forbidden, Fry tech, Love Tech,Low, Mixed, Endless
                                vem agradando e encantando seu público.</p>
                            <p>O artista não cansa de surpreender com seu talento e profissionalismo, destacando-se pela técnica
                                apurada de mixagem, vasto repertorio musical e Feeling apurado para sonorizar e animar qualquer
                                tipo de público.</p>
                            <p>Seus Set’s são compostos por Bass House, Tech House, Techno.</p>
                        </div>
                    </div>
                </Collapse>

                <Button className="btn btn-block btn-info btn-collapse"
                    onClick={this.handleCollapseShows}
                >Apresentações <FontAwesomeIcon icon={faChevronDown} /></Button>
                <Collapse in={this.state.collapseShows}>
                    <div className="collapse" id="collapseShows" data-parent="#mainContent">
                        <div className="card card-body">
                            Forbidden 1
                            <iframe
                                title="Forbidden 1"
                                width='100%'
                                height='315'
                                src='https://www.youtube.com/embed/ZAVLOxnY8xo'
                                frameBorder='0'
                                allowFullScreen></iframe>
                            <br />
                            Forbidden 2
                            <iframe
                                title="Forbidden 2"
                                width='100%'
                                height='315'
                                src='https://www.youtube.com/embed/6WhL8JRSzE0'
                                frameBorder='0'
                                allowFullScreen></iframe>
                            <br />
                            Live LoveTech
                            <iframe
                                title="Live LoveTech"
                                width='100%'
                                height='315'
                                src='https://www.youtube.com/embed/dxRg_HpuCHA'
                                frameBorder='0'
                                allowFullScreen></iframe>
                            <br />
                            Festa do Saudações
                            <iframe
                                title="Festa do Saudações"
                                width='100%'
                                height='315'
                                src='https://www.youtube.com/embed/LIdbIFFEBV8'
                                frameBorder='0'
                                allowFullScreen></iframe>
                            <br />
                            Coconut
                            <iframe
                                title="Coconut"
                                width='100%'
                                height='315'
                                src='https://www.youtube.com/embed/g2iRUHku3tc'
                                frameBorder='0'
                                allowFullScreen></iframe>
                            <br />
                            Hobby
                            <iframe
                                title="Hobby"
                                width='100%'
                                height='315'
                                src='https://www.youtube.com/embed/r0N9fHrF6Co'
                                frameBorder='0'
                                allowFullScreen></iframe>
                            <br />
                            Sunrise - Almeida Tabacaria
                            <iframe
                                title="Sunrise - Almeida Tabacaria"
                                width='100%'
                                height='315'
                                src='https://www.youtube.com/embed/CFIvUwvlfkA'
                                frameBorder='0'
                                allowFullScreen></iframe>
                            <br />
                            Sunrise - Almeida Tabacaria 2
                            <iframe
                                title="Sunrise - Almeida Tabacaria 2"
                                width='100%'
                                height='315'
                                src='https://www.youtube.com/embed/VQj9KO9B7xk'
                                frameBorder='0'
                                allowFullScreen></iframe>
                            <br />
                            Sunrise - Almeida Tabacaria 4
                            <iframe
                                title="Sunrise - Almeida Tabacaria 4"
                                width='100%'
                                height='315'
                                src='https://www.youtube.com/embed/vo8XZhUo9cE'
                                frameBorder='0'
                                allowFullScreen></iframe>
                            <br />
                            Endless PVT
                            <iframe
                                title="Endless PVT"
                                width='100%'
                                height='315'
                                src='https://www.youtube.com/embed/HwXN3MQCLC0'
                                frameBorder='0'
                                allowFullScreen></iframe>
                            <br />
                            Mixed
                            <iframe
                                title="Mixed"
                                width='100%'
                                height='315'
                                src='https://www.youtube.com/embed/v0-vfRZzKkE'
                                frameBorder='0'
                                allowFullScreen></iframe>
                            <br />
                            Mixed 2
                            <iframe
                                title="Mixed 2"
                                width='100%'
                                height='315'
                                src='https://www.youtube.com/embed/bV9Kv8UOSwU'
                                frameBorder='0'
                                allowFullScreen></iframe>
                            <br />
                            Lovetech
                            <iframe
                                title="Lovetech"
                                width='100%'
                                height='315'
                                src='https://www.youtube.com/embed/7xQWzI2ERiQ'
                                frameBorder='0'
                                allowFullScreen></iframe>
                            <br />
                            Lovetech 2
                            <iframe
                                title="Lovetech 2"
                                width='100%'
                                height='315'
                                src='https://www.youtube.com/embed/aXtHzESXR4w'
                                frameBorder='0'
                                allowFullScreen></iframe>
                            <br />
                            Lovetech 3
                            <iframe
                                title="Lovetech 3"
                                width='100%'
                                height='315'
                                src='https://www.youtube.com/embed/-ggpYaw2nDk'
                                frameBorder='0'
                                allowFullScreen></iframe>
                            <br />
                            Frytech
                            <iframe
                                title="Frytech"
                                width='100%'
                                height='315'
                                src='https://www.youtube.com/embed/xdH1yKp56g0'
                                frameBorder='0'
                                allowFullScreen></iframe>
                            <br />
                        </div>
                    </div>
                </Collapse>

                <Button className="btn btn-block btn-info btn-collapse"
                    onClick={this.handleCollapseFotos}
                >Fotos <FontAwesomeIcon icon={faChevronDown} /></Button>
                <Collapse in={this.state.collapseFotos}>
                    <div id="collapseFotos" className="card card-body">
                        <Gallery />
                    </div>
                </Collapse>

                <a href="https://www.youtube.com/channel/UC-vFXimWXa4VG_9L1aM0qTg" className="btn btn-block btn-info btn-space" role="button" aria-pressed="true">Live Set</a>

                <a href="https://api.whatsapp.com/send?phone=5511973034263" className="btn btn-block btn-info btn-space" role="button"
                    aria-pressed="true">Contato</a>
            </div>
        );
    }
}

export default Menu;