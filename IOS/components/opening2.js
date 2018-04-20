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
      title: "opening2"
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
            source={require('../images/indexFinger.png')}
            ></Image> 
          <View style={styles.viewHeading}> 
            <Text style={styles.textHeading}>One Broadcast Everyday.</Text>
          </View>
          <View style={styles.viewNormal}>
          <Text style={styles.textNormal}>Some of the best articles, essays and book excerpts you'll ever read.</Text>
  </View>  
  <Button onPress={ () => {
       navigate("opening3", {screen: "opening3"})

    }} style={styles.imgBottom}>  <Image
	  
	  source={require('../images/rightArrow.png')}
    ></Image>
    </Button>
        </View>
    );
  }
}
