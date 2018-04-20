import {
  StyleSheet,
  Dimensions
} from 'react-native';

let h,p
if(Dimensions.get('window').height === 667)
{
  h=20
  p=.85
}
else
{
  h=44
  p=.82
}

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
    bottom: Dimensions.get('window').height*.05,
right:Dimensions.get('window').width*.059,
    position: 'absolute',
    borderWidth:0,
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
    marginTop:(Dimensions.get('window').height-(Dimensions.get('window').height*.85+(h+10)))/2-(Dimensions.get('window').height*.038978)/2,
    marginLeft: 10,
    marginRight: 10,
    marginBottom:10,
    width: Dimensions.get('window').width*.946,
    backgroundColor: '#fff',
    // position:'absolute',
    borderRadius: 10,
    height: Dimensions.get('window').height*p,
  },

});