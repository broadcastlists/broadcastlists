import {
  StyleSheet,
  Dimensions
} from 'react-native';

export default styles = StyleSheet.create({
  wrapper: {
height:Dimensions.get('screen').height,

  },
  slide1: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imgTop: {
    marginTop: Dimensions.get('window').height*.195,
    marginHorizontal: Dimensions.get('window').width*.056,
    width:Dimensions.get('window').height*.1799,
    height:Dimensions.get('window').height*.1799,
    position: 'absolute',
  },
  imgBottom: {
    // marginVertical:20,
    // marginHorizontal:20,
    // height: Dimensions.get('window').height*.10045,
    // width: Dimensions.get('window').width*.17867,
    right: Dimensions.get('window').width*.048,
    // top: Dimensions.get('window').height*.4047976,
    bottom: Dimensions.get('window').height*.455*-1,
    position: 'absolute',
    // top:200,
  },
  textHeading: {
    color: '#252525',
    fontSize: Dimensions.get('window').width*.08,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textNormal: {
    color: '#252525',
    fontSize: Dimensions.get('window').width*.064,
    fontWeight: 'normal',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewHeading: {
    marginTop:Dimensions.get('window').height*.4,
    marginHorizontal: Dimensions.get('window').width*.08,
    justifyContent: 'center',
    marginBottom: Dimensions.get('window').height*.09745
  },
  viewNormal: {
    marginHorizontal: Dimensions.get('window').width*.08,
    justifyContent: 'center'
  },
  buttonStyle: {
    backgroundColor: 'grey',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: Dimensions.get('window').width*.05867,
    marginHorizontal: Dimensions.get('window').width*.05333,
    marginTop: Dimensions.get('window').height*.15,

  },
  parentScreen: {
    flex: 1,
    backgroundColor: '#DCDCDC',
  },
  innerScreen: {
    //shadow open
    // shadowColor: '#000000',
    // shadowRadius: 2,
    // shadowOpacity: .1,
    //shadow close 
    flex: 1,
    marginTop:(Dimensions.get('window').height-(Dimensions.get('window').height*.85+30))/2-(Dimensions.get('window').height*.038978)/2,
    marginLeft: 10,
    marginRight: 10,
    marginBottom:10,
    width: Dimensions.get('window').width*.946,
    backgroundColor: '#fff',
    // position:'absolute',
    borderRadius: 10,
    height: Dimensions.get('window').height*.85,
  },

});