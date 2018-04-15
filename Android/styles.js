import {
  StyleSheet,
  Dimensions
} from 'react-native';

export default styles = StyleSheet.create({
  wrapper: {
height:Dimensions.get('window').height,

  },
  slide1: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imgTop: {
    marginTop: Dimensions.get('window').height*.195,
    marginHorizontal: Dimensions.get('window').width*.056,
    marginBottom: Dimensions.get('window').height*.03148,
  },
  imgBottom: {
    // marginVertical:20,
    // marginHorizontal:20,
    height: Dimensions.get('window').height*.10045,
    width: Dimensions.get('window').width*.17867,
    marginHorizontal: Dimensions.get('window').width*.048,
    marginTop: Dimensions.get('window').height*.8047976,
      //  height:50,
    // width: 50,
    // right: 20,
    // top: 10,
    // top:200,
  },
  textHeading: {
    color: '#252525',
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textNormal: {
    color: '#252525',
    fontSize: 24,
    fontWeight: 'normal',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewHeading: {
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
    marginTop: 20,
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
    marginHorizontal: Dimensions.get('window').width*.0267,
    marginVertical: Dimensions.get('window').height*.015,
    backgroundColor: '#fff',
    borderRadius: 10,
    height: Dimensions.get('window').height*.85,
  },

});