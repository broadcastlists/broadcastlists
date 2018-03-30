import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  RefreshControl,  
  Linking,  
} from 'react-native';
import Button from 'apsl-react-native-button'
import * as firebase from 'firebase';
import Admin from './Admin';
import BroadCast from './BroadCast';
import styles from '../styles';


export default class Main extends Component {


    constructor(props) {
        super(props);
        this.state = {
          refreshing: true,
          isLoading:true,
        };
        fetch('https://broadcast-lists.herokuapp.com/')
        .then((response) => response.json())
        .then((responseJson) => {
  time = "14h";
  console.log(time);
          this.setState({
            dataSource: responseJson[0].data,
            time,
            refreshing:false,
            isLoading:false,
          }, function(){
              
          });
  
        })
        .catch((error) =>{
          console.error(error);
        });
      }

      _onRefresh() {
        this.setState({refreshing: true});
        fetch('https://broadcast-lists.herokuapp.com/')
        .then((response) => response.json())
        .then((responseJson) => {
            time = "14h";
            
          this.setState({
            isLoading: false,
            refreshing:false,
            dataSource: responseJson[0].data,
            time
          }, function(){

          });
  
        })
        .catch((error) =>{
          console.error(error);
        });
      }

      static navigationOptions = {
        title: "OldBroadCastmain"
      }
  render(){
    const { navigate } = this.props.navigation
    
    if (this.state.isLoading == true) {
      return <Image style={{marginHorizontal:100,marginVertical:246,width:175,height:175}}
      source={require('../images/giphy.gif')}
      ></Image>;
    }
    return (
        <View style={styles.parentScreen}>
         <View>
          <Text style={{   color: '#252525',
      fontSize: 26,
      fontWeight: 'bold',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:14,marginBottom:5,}}>    Old Broadcast
       
      </Text>
      <Button style={{height:20,width:20,}} onPress={() => {
       this.props.navigation.goBack()
      }
    }>X</Button>
    </View>
      
          <ScrollView showsVerticalScrollIndicator={false} refreshControl={
        <RefreshControl
          refreshing={this.state.refreshing}
      onRefresh={this._onRefresh.bind(this)}/>}>
      <View style={styles.innerScreen} >





      <View style={{flex:.09,flexDirection:'row',marginTop:10,marginBottom:8,borderBottomColor: '#DCDCDC',
      borderBottomWidth:2,
  }}>
  <Button style={{height:20,width:20,}} onPress={() => {
       navigate("main", {screen: "main"})
      }
    }>
       <Text style={{color: 'black',
      fontSize: 18,
      fontWeight: 'bold',
      justifyContent: 'center',
      alignItems: 'center',marginVertical:7}}>Broadcast</Text>
      {/* <Text style={{color: 'black',
      fontSize: 18,
      marginVertical:7,
      marginHorizontal:145,
      justifyContent: 'center',
      alignItems: 'center',}}>1d</Text> */}
      </Button>
          </View>



          <View style={{flex:.09,flexDirection:'row',marginTop:10,marginBottom:8,borderBottomColor: '#DCDCDC',
      borderBottomWidth:2,
  }}>
       <Text style={{color: 'black',
      fontSize: 18,
      fontWeight: 'bold',
      justifyContent: 'center',
      alignItems: 'center',marginVertical:7}}>Broadcast</Text>
      <Text style={{color: 'black',
      fontSize: 18,
      marginVertical:7,
      marginHorizontal:145,
      justifyContent: 'center',
      alignItems: 'center',}}>1d</Text>
          </View>





            </View>
          </ScrollView>
        </View>
    );
  }
}

