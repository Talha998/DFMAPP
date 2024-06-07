import React , {useState} from 'react';
import { View, Text, Image, TouchableOpacity, TextInput ,    ImageBackground , StyleSheet , Modal } from 'react-native';
import styles from '../styles';

const FirstScreen = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleModal = () => {
      setIsModalVisible(!isModalVisible);
    };
  return (
    <>
    <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Server URL Text */}
            <View style={styles.serverURLContainer}>
                
              <Text style={styles.serverURL}>Server URL</Text>
            </View>

            {/* Input Field */}
          <View style={styles.modalContent_rt}>
          <View>
            <TextInput
              placeholder="Server URL"
              placeholderTextColor="#00544d"
              style={styles.inputf1}
            />
            </View>

            {/* Text */}
            <Text style={styles.bottomTextf1}>
              Please refer to the email you have received with your login credentials or contact your administrator for the server URL.
            </Text>

            {/* Buttons */}
            <View style={styles.buttonContainerf1}>
                <View>
              <TouchableOpacity  onPress={toggleModal} style={styles.buttonf1}>
                <Text style={styles.buttonTextf1}>Cancel</Text>
              </TouchableOpacity>
              </View>
              <View>
              <TouchableOpacity style={[styles.buttonf1]}>
                <Text style={[styles.buttonTextf2]}>Submit</Text>
              </TouchableOpacity>
              </View>
            </View>

            {/* Close Button */}
           
          </View>
        </View>
        </View>
      </Modal>
    <ImageBackground source={require('../../assets/images/abstract1.png')} style={styles.background}>
    <View style={styles.container}>
      {/* Logo */}
      <View>
      <View style={styles.logoContainer}>
      <Image
        source={require('../../assets/images/SAMGREEN.png')} // apne logo ka path lagaye
         resizeMode="contain"
        style={styles.logo}
      />
    
  </View>
      {/* Buttons */}
      <View style={styles.btn1}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login / Register</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Theme Setting</Text>
        </TouchableOpacity>
      </View>
      </View>
      </View>
      <View>
      {/* Bottom Text */}
      <View style={styles.bottomContainer}>
        <View style={styles.bottomLinks}>
        <TouchableOpacity onPress={toggleModal}>
          <Text style={styles.bottomLinkText}>Server URL</Text>
          </TouchableOpacity>
          <Text style={styles.bottomLinkText}> | </Text>
          <Text style={styles.bottomLinkText}>Privacy Policy</Text>
          <Text style={styles.bottomLinkText}> | </Text>
          <Text style={styles.bottomLinkText}>Language</Text>
        </View>
        <Text style={styles.bottomText}>SAM Controls 2024. All rights reserved</Text>
      </View>
      </View>
    </View>
        </ImageBackground>
        </>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'green',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   logo: {
//     width: 100,  // apne logo ke dimension yahan adjust karen
//     height: 100,  // apne logo ke dimension yahan adjust karen
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: 'white',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     marginVertical: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'green',
//     fontSize: 16,
//   },
//   bottomContainer: {
//     position: 'absolute',
//     bottom: 20,
//     alignItems: 'center',
//   },
//   bottomLinks: {
//     flexDirection: 'row',
//     marginBottom: 10,
//   },
//   bottomText: {
//     color: 'white',
//   },
// });

export default FirstScreen;
