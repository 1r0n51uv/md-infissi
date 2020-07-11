import React, {Component} from 'react';
import firebase, {onLog} from "firebase";
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton';
//import {ProgressBar} from "react-bootstrap";
//import ResponsiveGallery from 'react-responsive-gallery';


class ShowroomEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            avatar: "",
            isUploading: false,
            progress: 0,
            showGallery: false,
            images: []
        }
    }




    componentDidMount() {
        this.updateGallery();
    }

    updateGallery = () => {
        let ph = [];
        firebase.storage().ref('showroom').listAll().then(res => {
            res.items.map(val => {
                val.getDownloadURL().then(dw => {
                    ph.push({src: dw})
                }).then(() => {
                    this.setState({images: ph, showGallery: true}, () => {
                        //console.log(this.state.images)
                    })
                })
            });
        })
    }


    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
    handleProgress = progress => this.setState({ progress });
    handleUploadError = error => {
        this.setState({ isUploading: false });
    };

    handleUploadSuccess = filename => {
        this.setState({ avatar: filename, progress: 100, isUploading: false });
        firebase
            .storage()
            .ref("showroom")
            .child(filename)
            .getDownloadURL()
            .then(url => {
                this.updateGallery()
            });
    };

    removeImage = () => {

    }

    render() {

        return (
            <div>
                <section className="banner_area" data-stellar-background-ratio="0.5">
                    <h2>Showroom Editor</h2>
                </section>

                <section className="about_us_area about_us_2 row center-block text-center" style={{marginTop: '5%'}}>

                    <div className="form-group">

                        <CustomUploadButton
                            accept="image/*"
                            name="avatar"
                            storageRef={firebase.storage().ref("showroom")}
                            onUploadStart={this.handleUploadStart}
                            onUploadError={this.handleUploadError}
                            onUploadSuccess={this.handleUploadSuccess}
                            onProgress={this.handleProgress}
                            style={{backgroundColor: 'green', color: 'white', padding: 10, borderRadius: 4}}
                        >
                            Carica Foto
                        </CustomUploadButton>
                        {//this.state.isUploading && <ProgressBar now={this.state.progress}/>
                             }

                    </div>

                    <hr/>
                    <div className="container">

                        {//<ResponsiveGallery useLightBox={true} images={this.state.images}/>
                        }
                    </div>

                </section>

            </div>
        );
    }
}

export default ShowroomEditor;
