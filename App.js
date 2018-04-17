import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import Android from './Android/App'
import Ios from './IOS/App'
import * as firebase from 'firebase';
// import { Permissions, Notifications } from 'expo';
import { setTimeout } from 'core-js/library/web/timers';
//firebase config 
const config = {
  apiKey: "AIzaSyDBSIKRbJ-z_IKlRAkqN8z_WalJsdOm9wY",
  authDomain: "broadcastlist-14cbe.firebaseapp.com",
  databaseURL: "https://broadcastlist-14cbe.firebaseio.com",
  projectId: "broadcastlist-14cbe",
  storageBucket: "broadcastlist-14cbe.appspot.com",
  messagingSenderId: "1016623347025"
};
//firebase initilization
firebase.initializeApp(config)

export default class App extends React.Component {


  render() {
    //splash screen 
    console.log(Platform.OS)
    if (Platform.OS === 'android') {
     return <Android />
    }
    return <Ios/>;
  }
}