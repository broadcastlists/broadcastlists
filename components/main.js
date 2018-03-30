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
} from 'react-native';
import { Permissions, Notifications } from 'expo';
import Button from 'apsl-react-native-button'
import * as firebase from 'firebase';
import Admin from './Admin';
import BroadCast from './BroadCast';
import styles from '../styles';
import { title } from 'change-case';


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
          this.setState({
            dataSource: responseJson[0].data,
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
        fetch('https://broadcast-lists.herokuapp.com/')
        .then((response) => response.json())
        .then((responseJson) => {
            
            
          this.setState({
            isLoading: false,
            refreshing:false,
            dataSource: responseJson[0].data,
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
    // const { navigate } = this.props.navigation
    
    if (this.state.isLoading == true) {
      return <Image style={{marginHorizontal:Dimensions.get('screen').width*.45,marginVertical:Dimensions.get('screen').height*.47,width:Dimensions.get('screen').width*.1,height:Dimensions.get('screen').height*.06}}
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
      marginTop:14,marginBottom:5,}}>    Today's Broadcast
       
      </Text>
      {/* <Button style={{height:20,width:20,}} onPress={() => {
       navigate("oldBroadCastmain", {screen: "oldBroadCastmain",mode:'card'})
      }
    }>old</Button> */}
    </View>
          <ScrollView showsVerticalScrollIndicator={false} refreshControl={
        <RefreshControl
          refreshing={this.state.refreshing}
      onRefresh={this._onRefresh.bind(this)}/>}>
      <View style={styles.innerScreen} >
              <Admin time={this.state.time}/>
            
            <BroadCast data={
            this.state.dataSource
    }/>
            </View>
          </ScrollView>
        </View>
    );
  }
}

