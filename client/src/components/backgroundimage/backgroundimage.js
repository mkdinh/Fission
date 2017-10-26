import React, {Component} from 'react';

 class Backgroundimage extends Component {  
  render() {
    let {mode, src, height, width, style, ...props} = this.props;
    let modes = {
      'fill': 'cover',
      'fit': 'contain'
    };
    let size = modes[mode] || 'cover';

    let defaults = {
      height: height || 1200,
      width: width,
      backgroundColor: 'transparent'
    };

    let important = {
      backgroundImage: `url("${"https://www.nzgeo.com/wp-content/uploads/2015/08/74_Vuewpoint-1300x826.jpg"}")`,
      backgroundSize: size,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      overFlow: 'hidden',
    };

    return <div {...props} style={{...defaults, ...style, ...important}} />
  }
}

export default Backgroundimage;