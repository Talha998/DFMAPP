import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground , StyleSheet } from 'react-native';
import styles from '../styles';

const FirstScreen = () => {
  return (
    <ImageBackground source={require('../../assets/images/abstract1.png')} style={styles.background}>
    <View style={styles.container}>
      {/* Logo */}
      <View>
      <Image
        source={require('../../assets/images/SAMGREEN.png')} // apne logo ka path lagaye
         resizeMode="contain"
        style={styles.logo}
      />

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Button 1</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Button 2</Text>
        </TouchableOpacity>
      </View>
      </View>
      <View>
      {/* Bottom Text */}
      <View style={styles.bottomContainer}>
        <View style={styles.bottomLinks}>
          <Text style={styles.bottomLinkText}>Server URL</Text>
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
