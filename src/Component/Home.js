import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native';

import EmailAndPasswordPopup from './popup/EmailAndPasswordPopup';
import LoadingPopup from './popup/isLoadingPopup';
const Home = (props) => {
  return (
    <View style={{flex: 1}}>
      <EmailAndPasswordPopup
        visible={props.isPopup}
        email={props.email}
        password={props.password}
        onChangeText={props.onChangeText}
        onLoginPress={props.onLoginPress}
        isLogin={props.isLogin}
      />
      <LoadingPopup isLoading={props.isLoading} />
      <ImageBackground
        source={require('../../images/backgroung.png')}
        style={{height: '100%', width: '100%', marginBottom: -150}}>
        <View style={{marginTop: 40}}>
          <Image
            source={require('../../images/lottery-logo.jpg')}
            style={styles.logoSize}
          />
          <Text style={styles.welcomeText}>Welcome!</Text>
          <Text style={styles.smallText}>Nice to See You!</Text>
        </View>
      </ImageBackground>

      <TouchableOpacity
        style={styles.buttonsStyles}
        onPress={props.onClickGoogleLogin}>
        {
          <Image
            source={require('../../images/gLogo.jpg')}
            style={styles.buttonLogo}
          />
        }
        <Text style={styles.buttonText}>Login with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonsStyles}
        onPress={props.onClickFbLogin}>
        <Image
          source={require('../../images/fLogo.jpg')}
          style={styles.buttonLogo}
        />
        <Text style={styles.buttonText}>Login with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsStyles: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    justifyContent: 'center',
    width: '70%',
    alignSelf: 'center',
    borderRadius: 5,
  },
  buttonLogo: {height: 30, width: 30},
  buttonText: {marginLeft: 10, textAlign: 'center', padding: 4},
  logoSize: {
    height: 60,
    width: 100,
    borderRadius: 30,
    padding: 10,
    margin: 10,
  },
  welcomeText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    marginLeft: 10,
  },
  smallText: {
    color: 'grey',
    marginLeft: 10,
  },
});
export default Home;
