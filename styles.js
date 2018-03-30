import {
  StyleSheet,
  Dimensions
} from 'react-native';

export default styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imgTop: {
    marginTop: 130,
    marginHorizontal: 21,
    marginBottom: 25
  },
  imgBottom: {
    // marginVertical:20,
    // marginHorizontal:20,
    height: 67,
    width: 67,
    right: 18,
    top: 270,
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
    marginHorizontal: 30,
    justifyContent: 'center',
    marginBottom: 65
  },
  viewNormal: {
    marginHorizontal: 30,
    justifyContent: 'center'
  },
  buttonStyle: {
    backgroundColor: 'grey',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 22,
    marginHorizontal: 20,
    marginTop: 100,

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
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 580,
  },

});