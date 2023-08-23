import { StyleSheet, StatusBar } from 'react-native';

const isIOS = Platform.OS === 'ios' ? true : false
export default StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      padding: 20,
      marginTop: isIOS ? StatusBar.currentHeight + 40 || 0 : 0
    },
    fullWidthContainer: {
      flex: 0,
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      padding: 20,
      height: '20px'
    },
    headerStyle: {
      flex: 0,
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      padding: 20,
      height: '20px',
    },
    elevation: {
      elevation: 20,
      shadowColor: '#52006A',
    },
    leftContent: {
      flex: 1,
    },
    rightContent: {
      flex: 1,
      alignItems: 'flex-end',
    },
    scrollViewDefault: {
      flex: 2,
      // backgroundColor: 'green',
      width: '100%'
    },
    heading: {
      fontSize: 24,
      color: '#007BFF',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    modalHeading: {
      fontSize: 20,
      marginBottom: 10,
    },
    label: {
      fontSize: 16,
      marginBottom: 5,
      alignSelf: 'flex-start',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
      width: '100%',
    },
    tasksContainer: {
      maxHeight: '40%', // Set a maximum height for the ScrollView
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
      width: '100%', // Expand to full width
    },

  });

