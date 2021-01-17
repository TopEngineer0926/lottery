import React, {PureComponent} from 'react';
import Profile from '../Component/Profile';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';

class ProfileScreen extends PureComponent {
  static navigationOptions = {
    headerShown: false,
    email: '',
  };
  componentDidMount() {
    AsyncStorage.getItem('email').then((val) => {
      this.setState({email:val})
    });
  }
  state = {
    roomState: true,
    data: [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        prizePool: '$1000',
        roomId: 'xxxxx',
        entry: '$10',
        percentage: '60%',
      },
    ],
  };
  onBackClick = () => {
    //   console.warn(this.props.navigation.getParam('data'));
    //   if(this.props.navigation.getParam('data')===1){

    //   }else if(this.props.navigation.getParam('data')===2){
    //     this.props.navigation.navigate('MyEntry');
    //   }
    this.props.navigation.navigate('RoomList');
  };
  onLogoutPressed = ()=>{
    AsyncStorage.clear().then(()=>{
      RNRestart.Restart();
    })
  }
  render() {
    return (
      <Profile
        roomState={this.state.roomStates}
        data={this.state.data}
        onBackClick={this.onBackClick}
        email={this.state.email}
        onLogoutPressed={this.onLogoutPressed}
      />
    );
  }
}

export default ProfileScreen;
