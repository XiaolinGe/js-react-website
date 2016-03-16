import { default as React, Component } from "react";
import { GoogleMapLoader, GoogleMap, InfoWindow, Marker } from "react-google-maps";

/*
 *
 *  Add <script src="https://maps.googleapis.com/maps/api/js"></script>
 *  to your HTML to provide google.maps reference
 *
 *  @author: @chiwoojo
 */
export default class Map extends Component {


  //Toggle to 'true' to show InfoWindow and re-renders component
  handleMarkerClick(marker) {
    marker.showInfo = true;
    this.setState(this.state);
  }

  handleMarkerClose(marker) {
    marker.showInfo = false;
    this.setState(this.state);
  }



  render() {
    let state = {
      center: {
        lat: -36.801060,
        lng: 174.747563,
      },

      //array of objects of markers
      markers: [
        {
          position: new google.maps.LatLng(-36.801060, 174.747563),
          showInfo: false
        }
      ]
    }
    return (

      <GoogleMapLoader
      containerElement={
        <div
        {...this.props}
        style={{
          height: '100%'
        }} >
        </div>
      }
      googleMapElement={
        <GoogleMap
        center={state.center}
        defaultZoom={14}
        ref='map'>

        {state.markers.map((marker, index) =>

          {

            const ref = `marker_${index}`;

            return ( <Marker
              key={index}
              ref={ref}
              position={marker.position}
              onClick={this.handleMarkerClick.bind(this, marker)} >

              {/*
                  Show info window only if the 'showInfo' key of the marker is true.
                  That is, when the Marker pin has been clicked and 'handleMarkerClick' has been
                  Successfully fired.
                */}
              {marker.showInfo ? this.renderInfoWindow(ref, marker) : null}

              </Marker>
            );

          })
        }

        </GoogleMap>
      }

      /> //end of GoogleMapLoader

    );
  }
}
