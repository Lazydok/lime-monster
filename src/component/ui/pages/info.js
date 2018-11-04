import React from 'react'
import {
    Map as NaverMap,
    withNavermaps,
    loadNavermapsScript,
} from 'react-naver-maps'
import Loadable from 'react-loadable'

const CLIENT_ID = 'exHOlMI_E80u2vYh3YeT'

class App extends React.Component {
  constructor (props) {
    super(props);

    const navermaps = window.naver.maps;

    this.state = {
      zoom: 12,
      center: new navermaps.LatLng(37.3595704, 127.105399)
    }
  }

  render () {
    return (
      <NaverMap
        style={{ width: "400px", height: "400px", margin: "auto", maxWidth: "90%"}}

        zoom={this.state.zoom}
        onZoomChanged={(zoom) => { this.setState({ zoom })}}

        center={this.state.center}
        onCenterChanged={(center) => {this.setState({ center })}}
      />
    )
  }
}

const InfoMain = Loadable({
  loader() {
    return loadNavermapsScript({ clientId: CLIENT_ID })
  },

  render (navermaps, props) {
    return <App navermaps={navermaps} {...props} />
  },

  loading(props) {
    if (props.error) {
      return <div>Error!</div>;
    } else if (props.pastDelay) {
      return <div>Loading...</div>;
    } else {
      return null;
    }
  }
})

export default InfoMain