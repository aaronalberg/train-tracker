import React from 'react';
import './MapFrame.css';

class MapFrame extends React.Component {

    componentDidMount(){
        var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

        mapboxgl.accessToken = 'pk.eyJ1Ijoic2lyYWpjaG9rc2hpIiwiYSI6ImNrNjFmeTBmbzAzOWwzZHFuczgxNmh4NmMifQ.Kk4yTbSADM3CRqlUzq8OvA';
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-87.6785,41.9432],
            zoom: 14
        });
        // Add geolocate control to the map.
        map.addControl(
            new mapboxgl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true
                },
                trackUserLocation: true
            }), 'bottom-right'
        );

        map.addControl(new mapboxgl.NavigationControl(), 'top-right');

        // setTimeout(function() {
        //     document.getElementsByClassName("mapboxgl-ctrl-geolocate")[0].click();
        //     },100);
    }

    render() {
        return (
            <div id="map" />
        );
    }
}

export default MapFrame;