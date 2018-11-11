import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import NaverMap from 'react-naver-map'
import makerPng from '../../../imgs/maker.png'
import Typography from '@material-ui/core/Typography';

//
// const fetchJsFromCDN = (src, externals = []) => {
//   new Promise((resolve, reject) => {
//     const script = document.createElement('script')
//     script.setAttribute('src', src)
//     script.addEventListener('load', () => {
//       resolve(externals.map(key => {
//         const ext = window[key]
//         typeof ext === 'undefined' && console.warn(`No external named '${key}' in window`)
//         return ext
//       }))
//     })
//     script.addEventListener('error', reject)
//     document.body.appendChild(script)
//   })
// }
//
// fetchJsFromCDN('https://openapi.map.naver.com/openapi/v3/maps.js?clientId=exHOlMI_E80u2vYh3YeT&submodules=geocoder', ['eruda']).then(([eruda]) => eruda.init())

const styles  = theme => ({
  root: {
        width: '90%',
        maxWidth: 700,
        margin: 'auto',
        // textAlign: 'center'
    }
})

const InfoMain = ({classes}) => {
    const CLIENT_ID = 'exHOlMI_E80u2vYh3YeT'
    return  (
        <div className={classes.root}>
            <Typography variant="h5" gutterBottom>
                대연점
            </Typography>
            <NaverMap
                clientId = {CLIENT_ID}
                style={{width:'500px', height:'300px', maxWidth: '90%', margin: 'auto'}}
                initialPosition={{lat:35.1363403, lng:129.08251240000007}}
                initialZoom={11}
                onInit={(map, naver) => {}}  // map: naver map object, naver: window.naver object
                onBoundChange={(bounds) => {}}  // bounds: naver.maps.LatLngBounds
                onMapClick={(event) => {}}  // event: PointerEvent
                submodules={['drawing','geocoder']}
            >
                <NaverMap.Marker
                    key={1}
                    id={1} // unique marker id: required
                    lat={35.1363403}
                    lng={129.08251240000007}
                    onClick={({id, event}) => {}}  // id: given id, event: PointerEvent
                    icon={{
                        url: makerPng,
                        size:{width:20,height:32},
                        scaledSize:{width:20,height:32},
                        anchor: {x:12, y:32}
                    }}
                    shape={{coords: [0,12, 12,0, 24,12, 12,32, 0,12], type: 'poly'}}  // click mask shape
                />
            </NaverMap>
        </div>
    )
}

export default withStyles(styles)(InfoMain)