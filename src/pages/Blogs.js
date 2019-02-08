import React, {Component, Fragment} from 'react';
import appStore from '../store/appstore.js';
import { Link } from 'react-router-dom';
import * as remoteActions from '../scripts/remoteActions.js';
import { observer } from 'mobx-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import fire from '../scripts/fire.js';
import firebase from 'firebase';
var db =fire.firestore();

class Blogs extends Component{

  constructor(props){
    super(props)
    this.state=({
      //add shit
      message:[]

    })
  }
// handleClick(){
//
//     var fund1=Number(this.state.fundx);
//     var fundy=Number(this.state.fund) + fund1
//     this.setState({
//       fund: fundy,
//       fundx:0
//     })
//
//     alert ("You donated"+fund1 +"Thank YOU!")
// }


  grouping(){
    console.log(1)
    db.collection("campaign").where("anyblog", "==", true)
    .get()
    .then((querySnapshot)=> {
      var arrId = []
      var arrName=[]
      var finalArr=[]
      var lamba=0
        querySnapshot.forEach((doc)=> {
            // doc.data() is never undefined for query doc snapshots

            var campId= doc.data().cid
            var campName= doc.data().name
            var blog= doc.data().testimonials
            var know="CAMPAIGN: "+ campName+ "\n"+"\n"+ "TESTIMONIAL:"+"\n"+blog;
            arrId.push(campId) //id
            arrName.push(know)
          });

            var result =  arrName.reduce((result, field, index)=> {
              lamba=lamba+1;
              result[arrId[index]] = field;
              var key=arrId[index]
              var value= field
              var dict={
                [arrId[index]]: value
              }
              console.log(key)
                finalArr.push(dict)
                // finalArr.push({result})


              return result;
            }, {})
            this.setState({
              message: finalArr
            });

            console.log(this.state.message)
            })
            .catch(function(error) {
            console.log("Error getting documents: ", error);
            });
          }


  componentDidMount(){
         remoteActions.setListenerOnAuthChange();
         this.grouping();
    }

render(){
  return(

    <Fragment>

      {



                  <Fragment>

                      <Header/>
                      <h1>BLOG!</h1>

                      <br/><br/>

                      <ul>

                      {

                        this.state.message.map((m, i)=>{
                          console.log("hello121")
                          for(var x in m){
                            var y= m[x]
                            console.log(x)
                          }

                          return(

                          <li>
                          <div>
                          <pre key={i}>
                          <div class="row">
                            <div class="col s12 m6">
                              <div class="card blue-grey darken-1">
                                <div class="card-content white-text">

                                  <p><b>{y}</b></p>
                                </div>

                              </div>
                            </div>
                          </div>
                          </pre></div></li>
                        )
                        })
                  }
                  </ul>

                          <Footer/>
                  </Fragment>


          


      }

    </Fragment>


  )
}

}
export default observer(Blogs)
