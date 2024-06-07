import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    paddingVertical: 20, // top and bottom padding
    paddingHorizontal: 30, // horizontal padding
    justifyContent: 'space-between', // space between elements
  },  
   logoContainer: {
     alignItems: 'center',
  },
  logo: {
    color: 'white',
    fontSize: 24,
    marginBottom: 10,
    width:"100%",
    marginTop: "45%" // margin below the logo
  },
  buttonContainer: {
    justifyContent: 'flex-start', // align buttons to the start (top) of the container
  },
  btn1: {
    marginTop: "7%"
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20, // margin between buttons
     
  },
  buttonText: {
    textAlign:"center",
    color: '#00544d',
    fontSize: 16,
     fontWeight: '700',
    fontFamily: 'YourCustomFontFamily',
  },
  bottomContainer: {
    alignItems: 'center',
  },
  bottomLinks: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  bottomLinkText: {
    color: 'white',
    marginRight: 5, // space between bottom links
  },
  bottomText: {
    color: 'white',
  },
 
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 8
  },
  modalContent: {
    backgroundColor: 'white',
    width: '80%',
    padding: 0,
    borderRadius: 10,
    alignItems: 'center',
    
  },
  serverURLContainer: {
    backgroundColor: '#00544d',
    paddingVertical: 20,
    // paddingHorizontal: 20,
    marginBottom: 0,
    borderRadius: 0,
    alignSelf: 'stretch',
     borderTopLeftRadius: 8,  // Apply border radius to top-left corner
    borderTopRightRadius: 8, // Apply border radius to top-right corner
  },
  serverURL: {
    color: 'white',
    textAlign: 'center',
    
  },
  inputf1: {
    backgroundColor: 'white',
    width: '100%',
    borderWidth: 2,
    borderColor: '#00544d',
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
    textAlign: 'center',
    color: '#00544d',
  },
  buttonTextf1: {
      color: 'white',
    textAlign: 'center'
  },
  buttonTextf2: {
    color: 'white',
    textAlign: 'center'
  },
  buttonContainerf1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  buttonf1: {
    backgroundColor: '#00544d',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius:10
    // flex: 1, // Use flex: 1 to take equal space
    // marginHorizontal: 5, // Add margin between buttons
    // alignItems: 'center',
    // justifyContent: 'center', // Center vertically
  
  },
  bottomTextf1: {
    color: 'black',
    textAlign: 'justify',
    lineHeight: 20,
    marginBottom: 20,
    fontWeight: "500",
    fontSize:15
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    color: 'black', // Change this to white if needed
  },
  modalContent_rt :{
    padding: 10
  }
}); 

export default styles;
