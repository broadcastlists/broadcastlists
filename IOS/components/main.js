import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  RefreshControl,  
  Linking,
  Dimensions,
  StatusBar,
} from 'react-native';
import { Ionicons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { Permissions, Notifications } from 'expo';
import Button from 'apsl-react-native-button'
import * as firebase from 'firebase';
import Admin from './Admin';
import Swiper from 'react-native-swiper'
import BroadCast from './BroadCast';
import styles from '../styles';
import { title } from 'change-case';
let h
if(Dimensions.get('window').height === 667)
{
  h=20
  mh=.47
  mv=.48
  wh=.042
  ww=.07

}
else
{
  h=44

  mh=.45
  ww=.1
  mv=.475
  wh=.05
  
}
const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={{height:h,backgroundColor:'#fff'}}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);
export default class Main extends Component {


    constructor(props) {
        super(props);
        this.state = {
          refreshing: true,
          isLoading:true,
        };

        fetch('https://broadcast-lists.herokuapp.com/supriya')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            dataSourcesupriya: responseJson[0].data,
            time: responseJson[0].date,
            refreshing:false,
            isLoading:false,
          }, function(){
              
          });
  
        })
        .catch((error) =>{
          // console.error(error);
        });

        fetch('https://broadcast-lists.herokuapp.com/palak')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            dataSourcepalak: responseJson[0].data,
            time: responseJson[0].date,
            refreshing:false,
            isLoading:false,
          }, function(){
              
          });
  
        })
        .catch((error) =>{
          // console.error(error);
        });
      }

      _onRefresh() {
        this.setState({refreshing: true});
        fetch('https://broadcast-lists.herokuapp.com/supriya')
        .then((response) => response.json())
        .then((responseJson) => {
            
          this.setState({
            isLoading: false,
            refreshing:false,
            dataSourcesupriya: responseJson[0].data,
            time:responseJson[0].date,
          });
  
        })
        .catch((error) =>{
          // console.error(error);
        });

        fetch('https://broadcast-lists.herokuapp.com/palak')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            refreshing:false,
            dataSourcepalak: responseJson[0].data,
            time:responseJson[0].date,
          });
  
        })
        .catch((error) =>{
          // console.error(error);
        });
      }
      static navigationOptions = {
        title: "main"
      }

     

  render(){
    const { navigate } = this.props.navigation
    
    if (this.state.isLoading == true) {
      return (
        <View style={{    backgroundColor: '#fff',
      }}>
          <MyStatusBar backgroundColor="#fff" barStyle="dark-content" />
   
           <Image style={{
             marginHorizontal:Dimensions.get('screen').width*mh,
             marginVertical:Dimensions.get('screen').height*mv,
             width:Dimensions.get('screen').width*ww,
             height:Dimensions.get('screen').height*wh
            }}
         source={require('../images/giphy.gif')}
       ></Image>
       </View>);
    }
    return (

        <View style={styles.parentScreen}>
       <MyStatusBar backgroundColor="#fff" barStyle="dark-content" />
       <View stylw={{flexDirection: 'row',flex:1}}> 
          <Text style={{   color: '#252525',
      fontSize: Dimensions.get('window').height*.038978,
      fontWeight: 'bold',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:(Dimensions.get('window').height-(Dimensions.get('window').height*.85+(h+10)))/2-(Dimensions.get('window').height*.038978)/2,
      }}>    Today's Broadcast
       
      </Text>
      
    </View>

    {/* <Swiper style={styles.wrapper} showsButtons={false} showsPagination={true} loop={false}> */}
    
    <ScrollView
          contentContainerStyle={styles.wrapper}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          directionalLockEnabled
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
          onRefresh={this._onRefresh.bind(this)}/>}
        >
{/* -----------------1------------------ */}
          <ScrollView showsVerticalScrollIndicator={false}   >
     <View style={styles.innerScreen}>





              <View style={{flex:.11,flexDirection:'row',borderBottomColor: '#DCDCDC',
      borderBottomWidth:2,
  }}>

      <Image source={require("../images/profilePic.jpeg")} style={{width:35,height:35,borderRadius:17.5,marginHorizontal:15,marginVertical:(Dimensions.get('window').height*.05-17.5)/2}}></Image>
      
      
      
      <Text style={{color: 'black',
      fontSize: 18,
      fontWeight: 'bold',
      justifyContent: 'center',
      alignItems: 'center',marginVertical:(Dimensions.get('window').height*.04)/2}}>Palak Zatakia</Text>

<Button style={{ 
  marginVertical:(Dimensions.get('window').height*.04)/2,
  borderWidth:0,
  height:Dimensions.get('window').height*.038978,
  width:Dimensions.get('window').height*.038978,
  right:15,
  alignItems:'center',
  position:'absolute',
}} onPress={() => {
   navigate("oldBroadCastmain", {screen: "oldBroadCastmain",user : "Palak Zatakia"})
  }
}> <MaterialCommunityIcons name="backup-restore" size={Dimensions.get('window').height*.038978}  color="#252525"/>
</Button>



          </View>
              <BroadCast data={
            this.state.dataSourcepalak}
              navigate = {navigate}
    />
           </View>
          </ScrollView>
          
{/* -----------------1------------------ */}


{/* -----------------1------------------ */}
          <ScrollView showsVerticalScrollIndicator={false} >
     <View style={styles.innerScreen}>

     <View style={{flex:.11,flexDirection:'row',borderBottomColor: '#DCDCDC',
      borderBottomWidth:2,
  }}>

      <Image source={require("../images/0.jpg")} style={{width:35,height:35,borderRadius:17.5,marginHorizontal:15,marginVertical:(Dimensions.get('window').height*.05-17.5)/2}}></Image>
      
      
      
      <Text style={{color: 'black',
      fontSize: 18,
      fontWeight: 'bold',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical:(Dimensions.get('window').height*.04)/2}}>Supriya Paul</Text>

<Button style={{ 
  marginVertical:(Dimensions.get('window').height*.04)/2,
   borderWidth:0,
  height:Dimensions.get('window').height*.038978,
  width:Dimensions.get('window').height*.038978,
  right:15,
  
  position:'absolute',
}} onPress={() => {
   navigate("oldBroadCastmain", {screen: "oldBroadCastmain",user:"Supriya Paul"})
  }
}> <MaterialCommunityIcons name="backup-restore" size={Dimensions.get('window').height*.038978}  color="#252525"/>
</Button>


          </View>



            
              <BroadCast data={
            this.state.dataSourcesupriya}
              navigate = {navigate}
    />
           </View>
          </ScrollView>
          
{/* -----------------1------------------ */}

{/* </Swiper> */}
        </ScrollView>
        </View>
    );
  }
}

