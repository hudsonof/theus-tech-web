import React from 'react';

import './styles.css';

import ImageGallery from 'react-image-gallery';
import FirebaseService from '../../services/FirebaseService';

class Gallery extends React.Component {
    state = {
        images: []
    };

    componentDidMount() {
        FirebaseService.getDataList('galeria', 100, (dataReceived) => {
            if (dataReceived.length > 0) {
                this.setState({ images: dataReceived })
            }

        });
    }

    render() {
        if (this.state.images.length > 0) {
            return <ImageGallery items={this.state.images} slideInterval={2000} showThumbnails={false} showIndex={true} />;
        } else {
            return <p>Erro ao carregar imagens...</p>;
        }
    }
}

export default Gallery;