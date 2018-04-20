import React from 'react';

import { StackNavigator } from 'react-navigation';
import opening from './../components/opening';
import opening2 from './../components/opening2';
import opening3 from './../components/opening3';
import notification from './../components/notification'
import oldBroadCastmain from './../components/oldBroadCastmain';
import oldBroadcastView from './../components/oldBroadcastView';
import main from './index';

const Router = StackNavigator({
    opening: { screen: opening},
    opening2: { screen: opening2},
    opening3: { screen: opening3},
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

