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
            <Text style={styles.textNormal}>I share something amazing to read every day.</Text>
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
            <Text style={styles.textNormal}>Some of the best articles, essays and book excerpts you'll ever read.</Text>
          </View>  
        </View>
		
		
		
		
		<View style={styles.slide1}>
            <Image
            style={styles.imgTop}
            source={require('../images/selfie.png')}
            ></Image> 
          <View style={styles.viewHeading}> 
            <Text style={styles.textHeading}>You'll get Notifications.</Text>
          </View>
          <View style={styles.viewNormal}>
            <Text style={styles.textNormal}>I'll notify you every time I send a new broadcast.</Text>
          </View>
     <Button onPress={ async () => {
         await firebase.auth().signInAnonymously(); 
       this.props.navigation.navigate('main', {screen: "main"})
     
    }}
     style={{width:Dimensions.get('window').width*.883-1,height:Dimensions.get('window').height*.1-1,marginHorizontal:Dimensions.get('window').width*.059,marginTop:Dimensions.get('window').height*.130}}>
          <Image
          style={{width:Dimensions.get('window').width*.883,height:Dimensions.get('window').height*.1}}
    source={require('../images/boardingButton2.png')}
    
	  ></Image>
    </Button>			  
        </View>
      </Swiper>
    );
  }
}
