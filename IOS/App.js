import React from 'react';
import { Image, Dimensions } from 'react-native';
import Router from './router/index';
import Router1 from './router/index1';
import * as firebase from 'firebase';
import { Permissions, Notifications } from 'expo';
import { GoogleAnalyticsTracker } from "react-native-google-analytics-bridge";
import { setTimeout } from 'core-js/library/web/timers';
//firebase config 
export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      registered: false,
      loading: true,
    };
    setTimeout(() => {
this.setState({loading:false});
    },3000)
  }
// before rensering any component 
async  componentDidMount() {
  await firebase.auth().signInAnonymously();     
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );                         
    firebase.auth().onAuthStateChanged(function(user) {
      console.log(user);
      if (user && existingStatus == 'granted') {
        // User is signed in.
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        this.setState({
        registered:true,
      loading: false,
      
      });
        // ...
      } else {
        this.setState({
        registered:false,
      loading: false,
      
      });
      }
   
    }.bind(this));


    let tracker = new GoogleAnalyticsTracker("UA-116749563-1");

  }
 
  render() {
    //splash screen 
    if (this.state.loading == true) {
      return <Image style={{height:Dimensions.get('screen').height,width:Dimensions.get('screen').width}}
      source={require('./images/X.png')}
      ></Image> ;
    }
// if user hasnt opened an app then show opening 3 page screen 
    if (this.state.registered == false) {
       return <Router1 style={{fontFamily: 'San Francisco'}}/>;
      
    }
// if user has opened an app then show main today broadcast screen  
    return <Router style={{fontFamily: 'San Francisco'}}/>;
  }
}
