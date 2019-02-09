import React, {Component, Fragment} from 'react';
import appStore from '../store/appstore.js';
import { Link } from 'react-router-dom';
import * as remoteActions from '../scripts/remoteActions.js';
import { observer } from 'mobx-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import fire from '../scripts/fire.js';
import M from 'materialize-css/dist/js/materialize.min.js';
import logo from './logouse.png';
import gareeb1 from './gareeb1.jpg';
import gareeb2 from './gareeb2.png';
import gareeb3 from './gareeb3.jpeg';
import gareeb4 from './gareeb4.jpg';
import gareeb5 from './gareeb5.jpg';
import gareeb6 from './gareeb6.jpg';
import gareeb7 from './photo7.jpg';
import gareeb8 from './gareeb8.jpg';


const h2s = {

  textAlign : 'center',
  fontFamily : 'Railway',
  fontWeight : 'bold',

}

const imgs = {
  maxWidth : '100%',
  height : '260px'
}

var dB =fire.firestore();
class Home extends Component{

componentDidMount(){
    // remoteActions.setListenerOnAuthChange()
    document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems,{'indicators' : true, 'interval': 1600, 'height':400});
  });
    document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
  });

}
checkAndRetrive(){
   dB.collection("users").where("uid", "==", appStore.currentUser.uid)
  .get()
  .then(function(querySnapshot){
    console.log(querySnapshot);
    if(querySnapshot.empty){
      // doc.data() is never undefined for query doc snapshots


dB.collection("users").add({
    name: appStore.currentUser.displayName,
    uid: appStore.currentUser.uid,
    camps: {}
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

    }
    else{

  console.log("Document exists:");

    }


  })

}

    render(){
      return(
        <Fragment>
        <Header/>

            {
              appStore.auth.isLoggedIn ?

                (
                  <Fragment>
                {

                                this.checkAndRetrive()


                              }



        <img class="responsive-img" src={logo}/>

        <div className = "container">

        <h2 className = "center-align" style = {h2s}> Our Vision </h2>

        <h5 style = {h2s} className = "cyan-text darken-2"> "To improve health and foster other human rights with those most in need by accompanying communities, while educating and inspiring others to action." </h5>


 <br/>
          <div className = "row">
          <div className = "col s12 m6 l6">
         <img src={gareeb7} style = {imgs}/>
         </div>
         <div className = "col s12 m6 l6">
         <img src={gareeb8} style = {imgs}/>
         </div>
         </div>


        <h2 style = {h2s}> Fund Raising </h2>

        <p> Though many of us are health professionals, our solutions extend far beyond the medical. We volunteer our time and expertise in communities that invite us to join them. </p>
        <a className='white btn pulse black-text'><Link to="/MsgPage">Donate Now!</Link></a>
        </div>
        <br/>
        <div className = "container">

        <h2 style = {h2s}>Some of our projects </h2>

        <div className = "row">
        <div className = "col s12 m6 l6">
        <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src={gareeb6} style = {imgs}/>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Saaf Safaai<i class="material-icons right">more_vert</i></span>
      <p><Link to ="/MsgPage/WvUEWFW1beagxr0nN6UcMa0okeDpfK2P">Donate for us!</Link></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Saaf Safaai<i class="material-icons right">close</i></span>
      <p>Please help us LMAO</p>
    </div>
  </div>
  </div>
          <div className = "col s12 m6 l6">

 <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src={gareeb4} style = {imgs}/>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">hello<i class="material-icons right">more_vert</i></span>
      <p><Link to ="/MsgPage/WesQB4NxshWDvActlv9qjEtGK1R0QnSC">Donate for us!</Link></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">hello<i class="material-icons right">close</i></span>
      <p>Please help us LMAO</p>
    </div>
  </div>
  </div>
  </div>

  </div>


  <Footer/>
  </Fragment>
                )
              :
                (
                  <Fragment>
                



        <img class="responsive-img" src={logo}/>

        <div className = "container">

        <h2 className = "center-align" style = {h2s}> Our Vision </h2>

        <h5 style = {h2s} className = "cyan-text darken-2"> "To improve health and foster other human rights with those most in need by accompanying communities, while educating and inspiring others to action." </h5>


 <br/>
          <div className = "row">
          <div className = "col s12 m6 l6">
         <img src={gareeb7} style = {imgs}/>
         </div>
         <div className = "col s12 m6 l6">
         <img src={gareeb8} style = {imgs}/>
         </div>
         </div>


        <h2 style = {h2s}> Fund Raising </h2>

        <p> Though many of us are health professionals, our solutions extend far beyond the medical. We volunteer our time and expertise in communities that invite us to join them. </p>
        <a className='white btn pulse black-text'><Link to="/MsgPage">Donate Now!</Link></a>
        </div>
        <br/>
        <div className = "container">

        <h2 style = {h2s}>Some of our projects </h2>

        <div className = "row">
        <div className = "col s12 m6 l6">
        <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src={gareeb6} style = {imgs}/>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Saaf Safaai<i class="material-icons right">more_vert</i></span>
      <p><Link to ="/MsgPage/WvUEWFW1beagxr0nN6UcMa0okeDpfK2P">Donate for us!</Link></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Saaf Safaai<i class="material-icons right">close</i></span>
      <p>Please help us LMAO</p>
    </div>
  </div>
  </div>
          <div className = "col s12 m6 l6">

 <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src={gareeb4} style = {imgs}/>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">hello<i class="material-icons right">more_vert</i></span>
      <p><Link to ="/MsgPage/WesQB4NxshWDvActlv9qjEtGK1R0QnSC">Donate for us!</Link></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">hello<i class="material-icons right">close</i></span>
      <p>Please help us LMAO</p>
    </div>
  </div>
  </div>
  </div>

  </div>


  <Footer/>
  </Fragment>

                )




            }

        </Fragment>
      )
    }
}


export default observer(Home);
