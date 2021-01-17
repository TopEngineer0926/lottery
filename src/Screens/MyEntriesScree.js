import React, {PureComponent} from 'react';
import MyEntry from '../Component/MyEntry';

import {getMyRoomsEntryList} from '../FetchAPI/Api';
import {getApi} from '../FetchAPI/FetchAPI';

import AsyncStorage from '@react-native-async-storage/async-storage';

class MyRntryScreen extends PureComponent {
  static navigationOptions = {
    headerShown: false,
  };
  state = {
    roomState: true,
    data: [],
    isLoading: true,
  };

  componentDidMount()  {
    this.getMyRoomsEntryList()
  }

  getMyRoomsEntryList = () => {
    this.setState({
      isLoading: true,
    });
    AsyncStorage.getItem('email').then((email) => {
      let response = getApi(getMyRoomsEntryList, `email=${email}`);
      response
        .then((result) => result.json())
        .then((jsonResult) => {
          this.setState({
            isLoading: false,
          });
          if (jsonResult.status === '200') {
            console.warn("ab",jsonResult.data)
            this.setState({
              data: jsonResult.data,
            });
          }
        })
        .catch((error) => {
          this.setState({
            isLoading: false,
          });
          console.warn('error', error);
        });
    });
  };

  navigateToProfile = () => {
    this.props.navigation.navigate('Profile', {data: 2});
  };

  render() {
    return (
      <MyEntry
        isLoading={this.state.isLoading}
        roomState={this.state.roomStates}
        data={this.state.data}
        navigateToProfile={this.navigateToProfile}
        isLoading={this.state.isLoading}
        goBack={() => this.props.navigation.navigate('RoomList')}
      />
    );
  }
}

export default MyRntryScreen;
