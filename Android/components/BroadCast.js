import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
  Dimensions,
  Button,
} from 'react-native';



const IMAGES_MAX_WIDTH = Dimensions.get('window').width - 50;
const CUSTOM_STYLES = {};
const CUSTOM_RENDERERS = {
  // a: (href) => 
};
const DEFAULT_PROPS = {
    htmlStyles: CUSTOM_STYLES,
    renderers: CUSTOM_RENDERERS,
    imagesMaxWidth: IMAGES_MAX_WIDTH,
    onLinkPress: (evt, href) => { nav('web',{ link: href } ); },
    debug: true
};

import HTML from 'react-native-render-html';

import styles from '../styles';

export default class BroadCast extends Component {
  render(){
    nav = this.props.navigate;    
    return (
      <ScrollView style={{marginHorizontal:20,marginVertical:10,}} showsVerticalScrollIndicator={false} >
    <HTML html={this.props.data} {...DEFAULT_PROPS} />
          </ScrollView>
        
    );
  }
}

