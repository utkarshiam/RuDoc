import React, {Component, Fragment} from 'react';
import * as remoteActions from '../scripts/remoteActions.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import appStore from '../store/appstore.js';
import { observer } from 'mobx-react';
import M from 'materialize-css/dist/js/materialize.min.js';
import fire from '../scripts/fire.js';
import randomstring from 'randomstring';
var db =fire.firestore();

class Database extends Component {

  constructor(props){
    super(props)
    this.state={
      Disease:null,
      Region: null,
      campId: null
      //add users

    }
  }
  handleClick(){
    var Disease= this.state.Disease;
    var Region= this.state.Region;



    var campId= randomstring.generate();


       // doc.data() is never undefined for query doc snapshots


   db.collection("Database").add({
     cid: campId,
     Disease,
     Region
     })
 .then(function(docRef) {
     console.log("Document written with ID: ", docRef.id);
 })
 .catch(function(error) {
     console.error("Error adding document: ", error);
 });

 this.setState({
   campName: "",
   budget: 0,
   info: "",
   location: "",
   date: "",
   status: false

 })

}

componentDidMount(){
       remoteActions.setListenerOnAuthChange()
  }
  componentDidUpdate(){
    M.AutoInit();
    M.updateTextFields();
  }
  render(){
    return(
      <Fragment>

        {

          appStore.auth.isLoggedIn ?
            (
              <Fragment>
              <Header/>


                  <span class="black-text name"><h1>Add to Database</h1></span>

                  <br/>
                  <br/>
                  <br/>
                          <div class="row">
                            <form class="col s12">
                              <div class="row">
                                <div class="input-field col s12">
                                  <input value={this.state.Region} id="email"  class="active" onChange={(e)=>{
                                    this.setState({
                                      Region: e.target.value
                                    })
                                  }}/>

                                  <span class="helper-text " data-error="wrong" data-success="right"><font color="green">Campaign-Region</font></span>
                                </div>
                              </div>
                              <div class="row">
                                <div class="input-field col s12">
                                  <input value={this.state.Disease} id="email"  class="active" onChange={(e)=>{
                                    this.setState({
                                      Disease: e.target.value
                                    })
                                  }}/>

                                  <span class="helper-text " data-error="wrong" data-success="right"><font color="green">Disease found in an individual</font></span>
                                </div>

                              </div>

                              
                            </form>
                            <button class="btn waves-effect waves-light center-align" type="submit" name="action" onClick={()=>{this.handleClick()}}>Submit
                            <i class="material-icons right">send</i>
                          </button>
                          </div>

                          <Footer/>
              </Fragment>
            )
          :
            (
                <Link to='/'><h1> Let's Sign-in First</h1></Link>
            )
        }
      </Fragment>

    )
  }

}
export default observer(Database);
