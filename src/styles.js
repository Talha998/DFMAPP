import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    paddingVertical: 30, // top and bottom padding
    paddingHorizontal: 20, // horizontal padding
    justifyContent: 'space-between', // space between elements
  },  
  logo: {
    color: 'white',
    fontSize: 24,
    marginBottom: 10,
    marginTop: 45 // margin below the logo
  },
  buttonContainer: {
    justifyContent: 'flex-start', // align buttons to the start (top) of the container
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 5, // margin between buttons
  },
  buttonText: {
    color: 'green',
    fontSize: 16,
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
}); 

export default styles;
