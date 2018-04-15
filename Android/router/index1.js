import React from 'react';

import { StackNavigator } from 'react-navigation';
import opening from './../components/opening';
import main from './../components/main';
import oldBroadCastmain from './../components/oldBroadCastmain';
import oldBroadcastView from './../components/oldBroadcastView';
import web from './../components/web'

const Router = StackNavigator({
    opening: { screen: opening},
    main: { screen: main},
    oldBroadCastmain: { screen: oldBroadCastmain},
    oldBroadcastView: { screen: oldBroadcastView},
    web:{screen: web},
    
},{
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
    initialRouteName : 'opening',  
});
(props) => { console.log(props.data) }
export default Router;

