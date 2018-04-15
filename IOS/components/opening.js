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
import Swiper from 'react-native-swiper';
import styles from '../styles';
import * as firebase from 'firebase';

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={{height:20,backgroundColor:'#fff'}}>
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
      <Swiper style={styles.wrapper} showsButtons={true} showsPagination={false} loop={false} nextButton= {
      <Image
	  style={styles.imgBottom}
	  source={require('../images/rightArrow.png')}
    ></Image>
   } prevButton= {<TouchableOpacity disabled></TouchableOpacity>}>
   
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
			  
        </View>




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
        </View>
		
		
		
		
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
     style={{width:Dimensions.get('window').width*.883-1,height:Dimensions.get('window').height*.1-1,marginHorizontal:Dimensions.get('window').width*.059,bottom:Dimensions.get('window').height*.03,position:'absolute'}}>
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
