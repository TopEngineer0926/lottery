import React, {PureComponent} from 'react';
import RoomList from '../Component/RoomList';
import {getApi} from '../FetchAPI/FetchAPI';
import {getRoomsList, paypal} from '../FetchAPI/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ToastAndroid} from 'react-native';

class RoomsListScreen extends PureComponent {
  static navigationOptions = {
    headerShown: false,
  };
  state = {
    isLoading: false,
    roomState: true,
    data: [],
    afterResponse: true,
    paymentPopup: false,
    currentRoom: [],
    isPaypalPopup: false,
    paypalUri: '',
  };
  componentDidMount() {
    this.getRoomList();
  }
  getRoomList = () => {
    let response = getApi(getRoomsList, ``);
    response
      .then((result) => result.json())
      .then((jsonResult) => {
        if (jsonResult.status === '200') {
          var afterResponse = jsonResult.data.length <= 0;

          this.setState({
            data: jsonResult.data,
            afterResponse: afterResponse,
          });
        }
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  navigateToProfile = () => {
    this.props.navigation.navigate('Profile', {data: '1'});
  };
  onRefresh = () => {
    this.getRoomList();
  };

  paypalPaymentMethod = () => {
    let id = this.state.currentRoom.roomId;
    let amount = this.state.currentRoom.entry;
    AsyncStorage.getItem('email').then((email) => {
      let response = getApi(paypal, `amount=${amount}&id=${id}&email=${email}`);
      response
        .then((result) => result.json())
        .then((jsonResult) => {
          this.setState({
            isLoading: false,
          });
          if (jsonResult.status === '200') {
            this.setState({
              paypalUri: jsonResult.link,
              isPaypalPopup: true,
            });
          }
        })
        .catch((error) => {
          this.setState({
            isLoading: false,
          });
          console.warn(error);
        });
    });
  };

  render() {
    return (
      <RoomList
        isLoading={this.state.isLoading}
        roomState={this.state.roomStates}
        data={this.state.data}
        navigateToProfile={this.navigateToProfile}
        afterResponse={this.state.afterResponse}
        onRefresh={this.onRefresh}
        onScroll={this.onScroll}
        OnEntry={(item) => {
          //console.warn(item)
          this.setState({
            paymentPopup: true,
            currentRoom: item,
          });
        }}
        paymentPopup={this.state.paymentPopup}
        closePaymentPopup={() => {
          this.setState({
            paymentPopup: false,
          });
        }}
        paymentSeletor={(val) => {
          this.setState({
            paymentPopup: false,
            isLoading: true,
          });
          if (val === 'paypal') {
            this.paypalPaymentMethod();
          } else {
            this.setState({
              isLoading: false,
            });
            ToastAndroid.show('Comming Soon', ToastAndroid.LONG);
          }
        }}
        paypalUri={this.state.paypalUri}
        isPaypalPopup={this.state.isPaypalPopup}
        closeWebView={() =>
          this.setState({
            isPaypalPopup: false,
          })
        }
      />
    );
  }
}

export default RoomsListScreen;
