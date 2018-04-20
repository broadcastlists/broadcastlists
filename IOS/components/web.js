import React, { Component } from 'react';
import {
  Text,
  WebView,
  Image,
  TouchableOpacity,
  ScrollView,
  RefreshControl,  
  Linking,
  Dimensions,  
  View,
  StatusBar,
} from 'react-native';
import Button from 'apsl-react-native-button'
import * as firebase from 'firebase';
import Admin from './Admin';
import BroadCast from './BroadCast';
import styles from '../styles';
let h
let p
if(Dimensions.get('window').height === 667)
{
  h=20
  p=20
}
else
{
  h=44
  p=54
}
const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={{height:h,backgroundColor:'black'}}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);
export default class web extends Component {
      static navigationOptions = {
        title: "Web"
      }
  render(){
       return(
          <View style={{backgroundColor:'black'}}>

            <MyStatusBar backgroundColor='black' barStyle='dark-content' />

            <View  
                style={{overflow:'hidden',height:Dimensions.get('window').height-(p+52.5),backgroundColor:'black',borderRadius:5,borderWidth:1}}>
                <WebView
                source={{uri: this.props.navigation.state.params.link}}>
                </WebView>
            </View>
            
            <Button 
                style={{height:52.5,width:Dimensions.get('window').width}}
                 title= 'Close' onPress= {() => this.props.navigation.goBack()}>
                <Image 
                style={{height:52.5,width:Dimensions.get('window').width}}
                source={require('../images/closeButton.png')} ></Image>
            </Button>
            

          </View>
    );
  }
}

