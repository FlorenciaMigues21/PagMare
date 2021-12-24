import React, { Component } from 'react';
import { GMap } from 'primereact/gmap';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Toast } from 'primereact/toast';
import { loadGoogleMaps, removeGoogleMaps } from './GoogleMaps';

export class GMapClass extends Component {

    constructor(props) {
        super(props);

        this.state = {
            googleMapsReady: false,
            dialogVisible: false,
            markerTitle: '',
            draggableMarker: false,
            overlays: null,
            selectedPosition: null
        };

        this.onMapClick = this.onMapClick.bind(this);
        this.onOverlayClick = this.onOverlayClick.bind(this);
        this.handleDragEnd = this.handleDragEnd.bind(this);
        this.onMapReady = this.onMapReady.bind(this);
        this.onHide = this.onHide.bind(this);
        this.addMarker = this.addMarker.bind(this);
    }

    componentDidMount() {
        loadGoogleMaps(() => {
            this.setState({ googleMapsReady: true });
        });
    }

    componentWillUnmount() {
        removeGoogleMaps();
    }

    onMapClick(event) {
        this.setState({
            dialogVisible: true,
            selectedPosition: event.latLng
        });
    }

    onOverlayClick(event) {
        let isMarker = event.overlay.getTitle !== undefined;

        if(isMarker) {
            let title = event.overlay.getTitle();
            this.infoWindow = this.infoWindow||new window.google.maps.InfoWindow();
            this.infoWindow.setContent('<div>' + title + '</div>');
            this.infoWindow.open(event.map, event.overlay);
            event.map.setCenter(event.overlay.getPosition());

            this.toast.show({severity:'info', summary:'Marker Selected', detail: title});
        }
        else {
            this.toast.show({severity:'info', summary:'Shape Selected', detail: ''});
        }
    }

    handleDragEnd(event) {
        this.toast.show({severity:'info', summary:'Marker Dragged', detail: event.overlay.getTitle()});
    }

    addMarker() {
        let newMarker = new window.google.maps.Marker({
            position: {
                lat: this.state.selectedPosition.lat(),
                lng: this.state.selectedPosition.lng()
            },
            title: this.state.markerTitle,
            draggable: this.state.draggableMarker
        });

        this.setState({
            overlays: [...this.state.overlays, newMarker],
            dialogVisible: false,
            draggableMarker: false,
            markerTitle: ''
        });
    }

    onMapReady(event) {
        this.setState({
            overlays: [
                new  window.google.maps.Marker({position: {lat: -34.960604852426236, lng: -54.94182811285069}, title:"MARÉ"}),
            ]
        })
    }

    onHide(event) {
        this.setState({dialogVisible: false});
    }

    render() {
        const options = {
            center: {lat: -34.960604852426236, lng: -54.94182811285069},
            zoom: 15
        };

        const footer = <div>
            <Button label="Yes" icon="pi pi-check" onClick={this.addMarker} />
            <Button label="No" icon="pi pi-times" onClick={this.onHide} />
        </div>;

        return (
            <div>
                <Toast ref={(el) => { this.toast = el; }}></Toast>

                {
                    this.state.googleMapsReady && (
                        <div className="card">
                            <GMap overlays={this.state.overlays} options={options} style={{width: '100%', minHeight: '320px'}} onMapReady={this.onMapReady}
                                  onMapClick={this.onMapClick} onOverlayClick={this.onOverlayClick} onOverlayDragEnd={this.handleDragEnd} />
                        </div>
                    )
                }

                <Dialog header="New Location" visible={this.state.dialogVisible} width="300px" modal footer={footer} onHide={this.onHide}>
                    <div className="p-grid p-fluid">
                        <div className="p-col-2" style={{paddingTop:'.75em'}}><label htmlFor="title">Label</label></div>
                        <div className="p-col-10"><InputText type="text" id="title" value={this.state.markerTitle} onChange={(e) => this.setState({markerTitle: e.target.value})} /></div>

                        <div className="p-col-2" style={{paddingTop:'.75em'}}>Lat</div>
                        <div className="p-col-10"><InputText readOnly value={this.state.selectedPosition ? this.state.selectedPosition.lat() : ''} /></div>

                        <div className="p-col-2" style={{paddingTop:'.75em'}}>Lng</div>
                        <div className="p-col-10"><InputText readOnly value={this.state.selectedPosition ? this.state.selectedPosition.lng() : ''} /></div>

                        <div className="p-col-2" style={{paddingTop:'.75em'}}><label htmlFor="drg">Drag</label></div>
                        <div className="p-col-10"><Checkbox checked={this.state.draggableMarker} onChange={(event) => this.setState({draggableMarker: event.checked})}/></div>
                    </div>
                </Dialog>
            </div>
        );
    }
}