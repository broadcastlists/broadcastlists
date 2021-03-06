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
}
else
{
  h=44
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
            source={require('../images/raisingHand.png')}
            ></Image> 
          <View style={styles.viewHeading}> 
            <Text style={styles.textHeading}>Hey there! I'm Palak.</Text>
          </View>
          <View style={styles.viewNormal}>
            <Text style={styles.textNormal}>I share something amazing to read every day.</Text>
          </View>
        <Button onPress={ () => {
       navigate("opening2", {screen: "opening2"})

    }} style={styles.imgBottom}>  <Image
	  source={require('../images/rightArrow.png')}
    ></Image>
    </Button>
        </View>
    );
  }
}
