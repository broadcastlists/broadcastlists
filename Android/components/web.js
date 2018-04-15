import React, { Component } from 'react';
import {
  Text,
  WebView,
  Image,
  TouchableOpacity,
  ScrollView,
  RefreshControl,  
  Linking,
  Button,
  Dimensions,  
  View,
} from 'react-native';
import * as firebase from 'firebase';
import Admin from './Admin';
import BroadCast from './BroadCast';
import styles from '../styles';


export default class web extends Component {
      static navigationOptions = {
        title: "Web"
      }
  render(){
   
       return(
         <View style={{marginTop: 25,height:Dimensions.get('window').height*.92}}>
           <WebView 
           source={{uri: this.props.navigation.state.params.link}}/> 
              <Button title= 'X' onPress= {() => this.props.navigation.goBack()} style={{marginTop:50}}></Button>           
             </View>
    );
  }
}

