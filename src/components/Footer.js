import React, {Component} from 'react';

class Footer extends Component {

  render(){

    return(

    <footer className = "page-footer blue-grey darken-3">
      <div className = "container">
          <div className = "row">
            <div className = "col s12 m4 l2"></div>
            <div className = "col s12 m2 l4"></div>
            <div className = "col s12 m6 l6">
                <ul>
                  <br/>
                  <a className="waves-effect waves-light btn black-text text-lighten-4 white" href="tel:9843984723" target="_blank" rel="noopener noreferrer"><i class="material-icons left">phone</i>Call Us!</a>
                <br/>
                <br/>
                      <a className="waves-effect waves-light btn black-text text-lighten-4 white" href="mailto:utkarshdhy@gmail.com" target="_blank" rel="noopener noreferrer"><i class="material-icons left" style = {{fontSize : '1.5em'}}>email</i>Email us!</a>
                      <h5 className = "cyan-blue text-lighten-4"> Made with <i className = "material-icons cyan-blue text-lighten-4">local_cafe </i> by ProBots </h5>
                </ul>
              </div>
            </div>
         </div>
     </footer>
        )
  }
}
export default Footer;
