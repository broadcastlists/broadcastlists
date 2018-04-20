import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import Button from 'apsl-react-native-button'
import styles from '../styles';
import * as firebase from 'firebase';
let h
if(Dimensions.get('window').height === 667)
{
  h=20
  q=Dimensions.get('window').width*.883
  p=Dimensions.get('window').height*.09
}
else
{
  h=44
  q=Dimensions.get('window').width*.883
  p=Dimensions.get('window').height*.05
}
const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={{height:h,backgroundColor:'#fff'}}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

export default class Opening extends Component {
  //navigation
    static navigationOptions = {
      title: "opening"
    }
    

  //  render
  render(){
//navigate
    const { navigate } = this.props.navigation
    return (
    
		
		<View style={styles.slide1}>
    <MyStatusBar backgroundColor="#171295" barStyle="dark-content" />

            <Image
            style={styles.imgTop}
            source={require('../images/selfie.png')}
            ></Image> 
          <View style={styles.viewHeading}> 
            <Text style={styles.textHeading}>Turn On Notifications.</Text>
          </View>
          <View style={styles.viewNormal}>
            <Text style={styles.textNormal}>So that you can stay upto date with my broadcasts.</Text>
          </View>
     <Button onPress={ () => {
       navigate("notification", {screen: "notification"})

    }}
     style={{width:q-1,height:p-1,marginHorizontal:Dimensions.get('window').width*.059,bottom:Dimensions.get('window').height*.03,position:'absolute'}}>
          <Image
          style={{width:q,height:p}}
    source={require('../images/boardingButton2.png')}
    
	  ></Image>
    </Button>

			  
        </View>
    );
  }
}
