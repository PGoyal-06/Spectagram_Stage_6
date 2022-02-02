import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Platform,
  SafeAreaView,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import * as Google from 'expo-google-app-auth';
import firebase from 'firebase';

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

let customFonts = {
  'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
};

export default class LoginScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        fontsLoaded: false,
      };
    }
  
    async _loadFontsAsync() {
      await Font.loadAsync(customFonts);
      this.setState({ fontsLoaded: true });
    }
  
    componentDidMount() {
      this._loadFontsAsync();
    }
    signInWithGoogleAsync = async () => {
        try {
          const result = await Google.logInAsync({
            behaviour: 'web',
            androidClientId:
              '870376050039-4esbhfmcvvlq911pm9igj2mkaed6sumf.apps.googleusercontent.com',
            iosClientId:
              '870376050039-0lntl5uk9rukcqdv678muefjhrojvnp9.apps.googleusercontent.com',
            scopes: ['profile', 'email'],
          });
    
          if (result.type === 'success') {
            this.onSignIn(result);
            return result.accessToken;
          } else {
            return { cancelled: true };
          }
        } catch (e) {
          console.log(e.message);
          return { error: true };
        }
      };

      render() {
        if (!this.state.fontsLoaded) {
          return <AppLoading />;
        } else {
          return (
            <View style={styles.container}>
              <SafeAreaView style={styles.droidSafeArea} />
              <View style={styles.appTitle}>
                <Image
                  source={require('../assets/logo.png')}
                  style={styles.appIcon}></Image>
                <Text style={styles.appTitleText}>{`Storytelling\nApp`}</Text>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.signInWithGoogleAsync()}>
                  <Image
                    source={require('../assets/google_icon.png')}
                    style={styles.googleIcon}></Image>
                  <Text style={styles.googleText}> Sign In With Google </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.cloudContainer}>
                <Image
                  source={require('../assets/cloud.png')}
                  style={styles.cloudImage}></Image>
              </View>
            </View>
          );
        }
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#15193c',
    },
    droidSafeArea: {
      marginTop:
        Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
    },
    appTitle: {
      flex: 0.4,
      justifyContent: 'center',
      alignItems: 'center',
    },
    appIcon: {
      width: RFValue(130),
      height: RFValue(130),
      resizeMode: 'contain',
    },
    appTitleText: {
      color: 'white',
      textAlign: 'center',
      fontSize: RFValue(40),
      fontFamily: 'Bubblegum-Sans',
    },
    buttonContainer: {
      flex: 0.3,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      width: RFValue(250),
      height: RFValue(50),
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      borderRadius: RFValue(30),
      backgroundColor: 'white',
    },
    googleIcon: {
      width: RFValue(30),
      height: RFValue(30),
      resizeMode: 'contain',
    },
    googleText: {
      color: 'black',
      fontSize: RFValue(20),
      fontFamily: 'Bubblegum-Sans',
    },
    cloudContainer: { flex: 0.3 },
    cloudImage: {
      position: 'absolute',
      width: '100%',
      resizeMode: 'contain',
      bottom: RFValue(-5),
    },
  });
  