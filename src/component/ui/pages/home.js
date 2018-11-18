import "react-image-gallery/styles/css/image-gallery.css";
import React from 'react'
import ImageGallery from 'react-image-gallery';
import {withStyles} from "@material-ui/core/styles/index";
import s1 from '../../../imgs/slider/s1.jpg'
import s2 from '../../../imgs/slider/s2.jpg'
import s3 from '../../../imgs/slider/s3.jpg'

class Home extends React.Component {

  render() {
    const { classes } = this.props;

    const images = [
      {
        original: s1,
        thumbnail: s1,
        description: '창의력 뿜뿜 온몸으로 쉐잇킷 쒜이킷 미술',
      },
      {
        original: s2,
        thumbnail: s2,
        description: '직접 만들고 스토리가 있고 상상이 나발이되고',
      },
      {
        original: s3,
        thumbnail: s3,
        description: '창의력 대장 웅진 싱크빅도 쫄아서 안옴',
      }
    ]

    return (
        <div className={classes.slider}>
          <ImageGallery items={images} showBullets={true} autoPlay={true} showThumbnails={false} slideInterval={5000} />
        </div>
    )
  }
}

const styles = theme => ({
  slider: {
      //flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      maxWidth: '640px',
      textAlign: 'center',
      margin: 'auto',
  },
});

export default withStyles(styles)(Home);