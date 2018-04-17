import React from 'react';

import { StackNavigator } from 'react-navigation';
import opening from './../components/opening';
import notification from './../components/notification'
import oldBroadCastmain from './../components/oldBroadCastmain';
import oldBroadcastView from './../components/oldBroadcastView';
import main from './index';

const Router = StackNavigator({
    opening: { screen: opening},
    main: { screen: main},
    notification: { screen: notification},
    oldBroadCastmain: { screen: oldBroadCastmain},
    oldBroadcastView: { screen: oldBroadcastView},
    
},{
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
    initialRouteName : 'opening',  
});
(props) => { console.log(props.data) }
export default Router;

