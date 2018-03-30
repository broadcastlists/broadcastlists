import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Button from 'apsl-react-native-button'
import Swiper from 'react-native-swiper';
import styles from '../styles';
import * as firebase from 'firebase';


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
      <Swiper style={styles.wrapper} showsButtons={true} showsPagination={false} loop={false} nextButton= {
      <Image
	  style={styles.imgBottom}
	  source={require('../images/rightArrow.png')}
    ></Image>
   } prevButton= {<TouchableOpacity disabled></TouchableOpacity>}>
        <View style={styles.slide1}>
            <Image
            style={styles.imgTop}
            source={require('../images/raisingHand.png')}
            ></Image> 
          <View style={styles.viewHeading}> 
            <Text style={styles.textHeading}>Hey there! I'm Palak.</Text>
          </View>
          <View style={styles.viewNormal}>
            <Text style={styles.textNormal}>I share something amazing to read everyday.</Text>
          </View>
			  
        </View>




        <View style={styles.slide1}>
            <Image
            style={styles.imgTop}
            source={require('../images/indexFinger.png')}
            ></Image> 
          <View style={styles.viewHeading}> 
            <Text style={styles.textHeading}>One Broadcast Everyday.</Text>
          </View>
          <View style={styles.viewNormal}>
            <Text style={styles.textNormal}>A tiny roundup of good articles, essays and book excerts.</Text>
          </View>  
        </View>
		
		
		
		
		<View style={styles.slide1}>
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
     style={{width:330,height:66,marginHorizontal:22,marginTop:148}}>
          <Image
          style={{width:331,height:67}}
    source={require('../images/boardingButton2.png')}
    
	  ></Image>
    </Button>

			  
        </View>
      </Swiper>
    );
  }
}
