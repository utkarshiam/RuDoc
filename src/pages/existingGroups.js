import React, {Component, Fragment} from 'react';
import * as remoteActions from '../scripts/remoteActions.js';
import Header from '../components/Header.js';
import { Link } from 'react-router-dom';
import appStore from '../store/appstore.js';
import { observer } from 'mobx-react';
import M from 'materialize-css/dist/js/materialize.min.js';
import fire from '../scripts/fire.js';
import randomstring from 'randomstring';
var db =fire.firestore();

class existingGroups extends Component{

  constructor(props){
    super(props)
    this.state=({
      arr:[]
    })
  }
  componentDidMount(){
         remoteActions.setListenerOnAuthChange()
    }

  showGroups(){
    console.log("hello")

    db.collection("users").where("uid", "==", appStore.currentUser.uid)
    .get()
    .then((querySnapshot)=> {
        querySnapshot.forEach((doc)=> {
            // doc.data() is never undefined for query doc snapshots
            var campDict= doc.data().camps;
            var arrGroup=[]
            for(var x in campDict){
              arrGroup.push({
                [x]: campDict[x]
              })
            }
            this.setState({
              arr: arrGroup
            })
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
  }
  render(){
    return(
      <Fragment>
        {
            appStore.auth.isLoggedIn ?
              ( <Fragment>
                <Header/>
                <br/>
                <button className='btn blue-grey darken-3' onClick={()=>{this.showGroups()}}>Click to show existing Fundraisers and Write testimonials!</button>
                <ul class="collection white">
                {
                  this.state.arr.map(function(m, i){

                      for(var x in m){
                        var y= m[x]
                      }
                      return(
                        <li>
                        <div>
                        <pre key={i}>
                        <div class="row">
                          <div class="col s12 m6">
                            <div class="card blue-grey darken-1">
                              <div class="card-content white-text">

                                <p><b>Fundraiser Program:- {y}</b></p>
                              </div>
                              <div class="card-action">
                                <Link to={"/existingGroups/"+x}>Write about this experience!</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        </pre></div></li>
          )
        })
      }
                </ul></Fragment>
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
export default observer(existingGroups);
