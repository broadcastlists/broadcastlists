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
export default class Main extends Component {


    constructor(props) {
      console.log(props)
        super(props);
        this.state = {
          py:props,
          refreshing: true,
          isLoading:true,
        };
        let sno = props.navigation.state.params.sno
        fetch('https://broadcast-lists.herokuapp.com/find/'+sno)
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            dataSource: responseJson[0].data,
            time: responseJson[0].date,
            refreshing:false,
            isLoading:false,
              user: responseJson[0].user
          }, function(){
              
          });
  
        })
        .catch((error) =>{
          // console.error(error);
        });
      }

      _onRefresh() {
        this.setState({refreshing: true});
        let sno = this.state.py.navigation.state.params.sno        
        fetch('https://broadcast-lists.herokuapp.com/find/'+sno)
        .then((response) => response.json())
        .then((responseJson) => {
            
            
          this.setState({
            isLoading: false,
            refreshing:false,
            dataSource: responseJson[0].data,
            time:responseJson[0].date,
            user:responseJson[0].user,
            
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
   
           <Image style={{marginHorizontal:Dimensions.get('screen').width*.47,marginVertical:Dimensions.get('screen').height*.48,width:Dimensions.get('screen').width*.07,height:Dimensions.get('screen').height*.042}}
         source={require('../images/giphy.gif')}
       ></Image>
       </View>);
    }
    return (
        <View style={styles.parentScreen}>
       <View stylw={{flexDirection: 'row',flex:1}}> 
          <Text style={{   color: '#252525',
      fontSize: Dimensions.get('window').height*.038978,
      fontWeight: 'bold',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:(Dimensions.get('window').height-(Dimensions.get('window').height*.85+(30)))/2-(Dimensions.get('window').height*.038978)/2,
      }}>    Old Broadcast
       
      </Text>
      <Button style={{ 
      marginTop:(Dimensions.get('window').height-(Dimensions.get('window').height*.85+(30)))/2-(Dimensions.get('window').height*.038978)/2,
      borderWidth:0,
      height:Dimensions.get('window').height*.038978,
      width:Dimensions.get('window').height*.038978,
      right:15,
      
      position:'absolute',
    }} onPress={() => {
     if(this.state.user == "Supriya Paul")
     {
      navigate("oldBroadCastmain", {screen: "oldBroadCastmain",user:"Supriya Paul"})
      }
     else
     {
      navigate("oldBroadCastmain", {screen: "oldBroadCastmain",user:"Palak Zatakia"})
    } }
   } > <MaterialCommunityIcons name="backup-restore" size={Dimensions.get('window').height*.038978}  color="#252525"/>
    </Button>
    </View>
          <ScrollView showsVerticalScrollIndicator={false} refreshControl={
        <RefreshControl
          refreshing={this.state.refreshing}
      onRefresh={this._onRefresh.bind(this)}/>}  >
     <View style={styles.innerScreen}>

             <Admin time={this.state.time} name={this.state.user}/>
            
              <BroadCast data={
            this.state.dataSource}
              navigate = {navigate}
    />
           </View>
          </ScrollView>
          
        </View>
    );
  }
}

