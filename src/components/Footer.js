import React, {Component} from 'react';

class Footer extends Component {

  render(){

    return(

    <footer className = "page-footer blue-grey darken-3">
      <div className = "container">
          <div className = "row">
            <div className = "col s12 m8 l8">
          <div style={{width: '800px', height: '250px'}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14022.026050865115!2d77.5703169!3d28.5244915!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1fc8dccb532d3714!2sSNU+Dining+Hall+2+(DH2)!5e0!3m2!1sen!2sin!4v1549659842276"></iframe>
            </div>
            </div>
            <div className = "col s12 m4 l4">
                <ul>
                  <br/>
                  <a className="waves-effect waves-light btn black-text text-lighten-4 white" href="tel:9843984723" target="_blank" rel="noopener noreferrer"><i class="material-icons left">phone</i>Call Us!</a>
                <br/>
                <br/>
                      <a className="waves-effect waves-light btn black-text text-lighten-4 white" href="mailto:utkarshdhy@gmail.com" target="_blank" rel="noopener noreferrer"><i class="material-icons left" style = {{fontSize : '1.5em'}}>email</i>Email us!</a>
                      <h6 className = "cyan-blue text-lighten-4"> Made with <i className = "material-icons cyan-blue text-lighten-4">local_cafe </i> by ProBots </h6>
                </ul>
              </div>
            </div>
         </div>
     </footer>
        )
  }
}
export default Footer;
