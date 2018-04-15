    import React, { Component } from 'react';
    import Main from './main';
    import {
      Image,
      Dimensions,
      View,
      
    } from 'react-native';
   import { Permissions, Notifications } from 'expo';
    import * as firebase from 'firebase';
    import Button from 'apsl-react-native-button'
    
    
    export default class Notification extends Component {
      //navigation
        static navigationOptions = {
          title: "Notification"
        }
        constructor(props) {
            super(props);
            this.state = {
                val:true,
              };


            (async () => { 
             
                const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
                finalStatus = status;
                if(finalStatus == 'granted')
                {
                  console.log(finalStatus)              
                  this.props.navigation.navigate('main', {screen: "main"})
                }
          let token = await Notifications.getExpoPushTokenAsync();
          console.log(firebase.auth().currentUser)
             userID = firebase.auth().currentUser.uid;
            await firebase.database().ref('/users/' + userID).update({ token: token });
           
            })();
            }

      render(){
    //navigate
        const { navigate } = this.props.navigation
        return(
          <View>
            <Image style={{height:Dimensions.get('screen').height,width:Dimensions.get('screen').width}}
            source={require('./../images/notification.png')}
            ></Image> 
            
  </View>);
       
      }
    }
    