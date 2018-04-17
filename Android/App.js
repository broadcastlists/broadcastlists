import React from 'react';
import { Image, Dimensions, View, StatusBar } from 'react-native';
import Router from './router/index';
import Router1 from './router/index1';
import * as firebase from 'firebase';
// import { Permissions, Notifications } from 'expo';
import { setTimeout } from 'core-js/library/web/timers';
//firebase config 



export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      registered: false,
      loading: true,
    };
  }
// before rensering any component 
async  componentDidMount() {                      
   await firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
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
  }
 
  render() {
    //splash screen  8
    if (this.state.loading == true) {
      return (
        <View style={{    backgroundColor: '#fff',
      }}>
   
           <Image style={{marginHorizontal:Dimensions.get('screen').width*.47,marginVertical:Dimensions.get('screen').height*.48,width:Dimensions.get('screen').width*.07,height:Dimensions.get('screen').height*.042}}
         source={require('./images/giphy.gif')}
       ></Image>
       </View>
      );
    }
// if user hasnt opened an app then show opening 3 page screen 
    if (this.state.registered == false) {
       return <Router1 style={{fontFamily: 'San Francisco'}}/>;
      
    }
// if user has opened an app then show main today broadcast screen  
    return <Router style={{fontFamily: 'San Francisco'}}/>;
  }
}

