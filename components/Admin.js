import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import styles from '../styles';

export default class Admin extends Component {
  render(){
    return (
      <View style={{flex:.09,flexDirection:'row',marginTop:10,marginBottom:8,borderBottomColor: '#DCDCDC',
      borderBottomWidth:2,
  }}>
      <Image source={require('../images/profilePic.jpeg')} style={{width:35,height:35,borderRadius:17.5,marginHorizontal:15,}}></Image>
      <Text style={{color: 'black',
      fontSize: 18,
      fontWeight: 'bold',
      justifyContent: 'center',
      alignItems: 'center',marginVertical:9}}>Read This Today</Text>
      <Text style={{color: 'black',
      fontSize: 18,
      marginVertical:9,
      marginHorizontal:120,
      justifyContent: 'center',
      alignItems: 'center',}}>{this.props.time}</Text>
          </View>
        
    );
  }
}

