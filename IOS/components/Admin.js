import React, { Component } from 'react';
import {
  
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';

import styles from '../styles';

export default class Admin extends Component {
  render(){
    if(this.props.name == "Supriya paul")
    {
    return (
      <View style={{flex:.11,flexDirection:'row',borderBottomColor: '#DCDCDC',
      borderBottomWidth:2,
  }}>

  <Image source={require("../images/0.jpg")} style={{width:35,height:35,borderRadius:17.5,marginHorizontal:15,marginVertical:(Dimensions.get('window').height*.05-17.5)/2}}></Image>

  
      
      <Text style={{color: 'black',
      fontSize: 18,
      fontWeight: 'bold',
      justifyContent: 'center',
      alignItems: 'center',marginVertical:(Dimensions.get('window').height*.05)/2}}>{this.props.name}</Text>


      <Text style={{color: 'black',
      fontSize: 18,
      marginVertical:(Dimensions.get('window').height*.05)/2,
      // marginHorizontal:Dimensions.get('window').width*.335,
      textAlign: 'right',
      justifyContent: 'center',
      marginRight:15,
      flex:1,
      alignItems: 'center',}}>{this.props.time}</Text>



          </View>
        
    );
  }
  else
  {

    return (
      <View style={{flex:.11,flexDirection:'row',borderBottomColor: '#DCDCDC',
      borderBottomWidth:2,
  }}>

<Image source={require("../images/profilePic.jpeg")} style={{width:35,height:35,borderRadius:17.5,marginHorizontal:15,marginVertical:(Dimensions.get('window').height*.05-17.5)/2}}></Image>

      <Text style={{color: 'black',
      fontSize: 18,
      fontWeight: 'bold',
      justifyContent: 'center',
      alignItems: 'center',marginVertical:(Dimensions.get('window').height*.05)/2}}>{this.props.name}</Text>


      <Text style={{color: 'black',
      fontSize: 18,
      marginVertical:(Dimensions.get('window').height*.05)/2,
      // marginHorizontal:Dimensions.get('window').width*.335,
      textAlign: 'right',
      justifyContent: 'center',
      marginRight:15,
      flex:1,
      alignItems: 'center',}}>{this.props.time}</Text>



          </View>
        
    );

  }
  }
}

