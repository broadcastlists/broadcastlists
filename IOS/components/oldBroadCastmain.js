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
let indent = []

export default class Main extends Component {

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
      }}>    Old Broadcasts
       
      </Text>
      <Button style={{ 
      marginTop:(Dimensions.get('window').height-(Dimensions.get('window').height*.85+(h+10)))/2-(Dimensions.get('window').height*.038978)/2,
      borderWidth:0,
      height:Dimensions.get('window').height*.038978,
      width:Dimensions.get('window').height*.038978,
      right:15,
      
      position:'absolute',
    }} onPress={() => {
      indent=[]
      this.props.navigation.goBack()
      }
    }> <Ionicons name="ios-close-outline" size={Dimensions.get('window').height*.038978+15} color="#252525" />
    </Button>
    </View>
          <ScrollView showsVerticalScrollIndicator={false} refreshControl={
        <RefreshControl
          refreshing={this.state.refreshing}
      onRefresh={this._onRefresh.bind(this)}/>}  >
     <View style={styles.innerScreen}>
              
             
          
             
           {indent}

         


           </View>
          </ScrollView>
          
        </View>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      refreshing: true,
      isLoading:true,
    };
   console.log(props);
fetch('https://broadcast-lists.herokuapp.com/old')
.then((response) => response.json())
.then((responseJson) => {
  indent = []
  for(let i =1;i< responseJson.length;i++)
  {
    
indent.push(
<View key={i} style={{flex:.1,flexDirection:'row',borderBottomColor: '#DCDCDC',
borderBottomWidth:2,
}}>

<Text style={{color: 'black',
fontSize: 20,
fontWeight: 'bold',
marginHorizontal:15,
justifyContent: 'center',
alignItems: 'center',marginVertical:(Dimensions.get('window').height*.05)/2}}
onPress={() => {
props.navigation.navigate("oldBroadcastView", {screen: "oldBroadcastView",sno:responseJson[i].sno}) } }>Broadcast #{responseJson[i].sno}</Text>
</View>
)
  }

  this.setState({
    dataSource: responseJson,
    refreshing:false,
    isLoading:false,
  });

})
.catch((error) =>{
  // console.error(error);
});
  }

  _onRefresh() {
    this.setState({refreshing: true});
    fetch('https://broadcast-lists.herokuapp.com/old')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        refreshing:false,
        dataSource: responseJson,
      });

    })
    .catch((error) =>{
      // console.error(error);
    });
  }
  static navigationOptions = {
    title: "oldBroadcastMain"
  }

 
}








