import React, { Component } from 'react';
import app from '../../utils/firebaseUtils';

import FileUploader from "react-firebase-file-uploader";

import './styles.css';

export default class Main extends Component {
    state = {
        filenames: [],
        downloadURLs: [],
        galeria: [],
        isUploading: false,
        uploadProgress: 0
    };

    handleUploadStart = () =>
        this.setState({
            isUploading: true,
            uploadProgress: 0
        });

    handleProgress = progress =>
        this.setState({
            uploadProgress: progress
        });

    handleUploadError = error => {
        this.setState({
            isUploading: false
            // Todo: handle error
        });
        console.error(error);
    };

    handleUploadSuccess = async filename => {
        try {
            const downloadURL = await app
                .storage()
                .ref("galeria")
                .child(filename)
                .getDownloadURL();

            let imageId = downloadURL.substring(downloadURL.indexOf("token=") + 6);

            app.database().ref("galeria/" + imageId).set({
                imageId: imageId,
                original: downloadURL,
                data: new Date().toLocaleDateString("pt-BR"),
                user: app.auth().currentUser.email
            })

            this.setState(oldState => ({
                filenames: [...oldState.filenames, filename],
                downloadURLs: [...oldState.downloadURLs, downloadURL],
                uploadProgress: 100,
                isUploading: false
            }));
        } catch (error) {
            console.log(error);
        }

    };

    render() {
        return (
            <div className="admin container">
                <div className="card">
                    <div className="card-body">
                        <p>Admin</p>
                        <p>Bem vindo, {app.auth().currentUser.email}</p>

                        <div className="imageSender">
                            <label className="btn btn-success btn-block">
                                Selecione as fotos
                                <FileUploader
                                    hidden
                                    accept="image/*"
                                    name="image-uploader-multiple"
                                    randomizeFilename
                                    storageRef={app.storage().ref("galeria")}
                                    onUploadStart={this.handleUploadStart}
                                    onUploadError={this.handleUploadError}
                                    onUploadSuccess={this.handleUploadSuccess}
                                    onProgress={this.handleProgress}
                                    multiple
                                />
                            </label>
                            <p>Progress: {this.state.uploadProgress}</p>

                            <p>Filenames: {this.state.filenames.length}</p>

                            {console.log(new Date())}

                        </div>

                        <button onClick={() => app.auth().signOut()} className="btn btn-primary btn-block btn-space-top">Sair</button>
                    </div>
                </div>
            </div>
        );
    }
}