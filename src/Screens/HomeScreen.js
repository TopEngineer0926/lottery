import React, {PureComponent} from 'react';
import Home from '../Component/Home';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {postApi} from '../FetchAPI/FetchAPI';
import {login} from '../FetchAPI/Api';
import {ToastAndroid} from 'react-native';

class LoginScreen extends PureComponent {
  static navigationOptions = {
    headerShown: false,
  };
  componentDidMount() {
    AsyncStorage.getItem('email').then((val) => {
      this.setState({
        isLoading: false,
      });
      if (val !== null) {
        this.props.navigation.navigate('RoomList');
      }
    });
  }
  componentWillUnmount() {}
  state = {
    email: '',
    password: '',
    isPopup: false,
    isLoading: true,
  };
  onClickGoogleLogin = () => {
    this.setState({
      isPopup: true,
    });
  };
  onClickFbLogin = () => {
    this.setState({
      isPopup: true,
    });
  };

  loginToApp = () => {
    this.setState({
      isLoading: true,
    });
    const email = this.state.email;
    const password = this.state.password;

    var formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    var response = postApi(login, formData);
    response
      .then((result) => result.json())
      .then((jsonResult) => {
        this.setState({
          isLoading: false,
        });
        if (jsonResult.status === '200') {
          ToastAndroid.show(jsonResult.result, ToastAndroid.LONG);
        } else {
          ToastAndroid.show('Welcome back to Lottery App', ToastAndroid.LONG);
        }
        AsyncStorage.setItem('email', email);
        AsyncStorage.setItem('password', password);
        console.warn("ahsan")
        this.props.navigation.navigate('PrivacyPolicy');
      })
      .catch((error) => {
        ToastAndroid.show('Sorry! unable to Login', ToastAndroid.LONG);
      });
  };
  render() {
    return (
      <Home
        onClickGoogleLogin={this.onClickGoogleLogin}
        onClickFbLogin={this.onClickFbLogin}
        email={this.state.email}
        password={this.state.password}
        isPopup={this.state.isPopup}
        onChangeText={(data) => {
          this.setState(data);
          if (
            this.state.password.length >= 8 &&
            this.state.email.indexOf('@') >= 0
          ) {
            this.setState({
              isLogin: true,
            });
          } else {
            this.setState({
              isLogin: false,
            });
          }
        }}
        onLoginPress={() => {
          this.setState({
            isPopup: false,
          });
          this.loginToApp();
        }}
        isLogin={this.state.isLogin}
        isLoading={this.state.isLoading}
      />
    );
  }
}

export default LoginScreen;
