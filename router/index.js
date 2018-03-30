import React from 'react';

import { StackNavigator } from 'react-navigation';
import opening from './../components/opening';
import main from './../components/main';
import oldBroadCastmain from './../components/oldBroadCastmain';
import oldBroadcastView from './../components/oldBroadcastView';

const Router = StackNavigator({
    opening: { screen: opening},
    main: { screen: main},
    oldBroadCastmain: { screen: oldBroadCastmain},
    oldBroadcastView: { screen: oldBroadcastView},
},{
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
    initialRouteName : 'main',
   mode: 'modal',
});
(props) => { console.log(props.data) }
export default Router;


