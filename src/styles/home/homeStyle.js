import {StyleSheet} from 'react-native';

const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,

    height: 250,
    flex: 1,
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  navbar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'red',
    alignItems: 'center',
  },
  navbarCenter: {
    flex: 1,
    alignItems: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  story: {
    flex: 2,
    backgroundColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  imgCircleStory: {
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
    backgroundColor: 'blue',
    marginRight: 10,
  },
  section: {
    flex: 1,

    backgroundColor: 'gray',
  },
  card: {
    flex: 1,

    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
    },
    rowAvatar: {
      backgroundColor: 'red',
      flexDirection: 'row',
      width: 120,
      justifyContent: 'space-evenly',
    },
    img: {
      width: '100%',
      height: 300,
      backgroundColor: 'black',
    },
    imgIcon: {
      flex: 1,
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'red',
      imgIconList: {
        width: 120,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      },
      
    },
    comment:{
      flex:1,
      padding:10,
      flexDirection:"column",
      spaceBetween:{
        flexDirection:"row",
        justifyContent:"space-between",
      },
      list:{
        flexDirection:"row",
      },
      listInput:{
        width:200,
        flexDirection:"row",
       
      }
    }
  },
});

export default homeStyle;
