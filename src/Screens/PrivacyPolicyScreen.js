import React, {PureComponent} from 'react';
import PrivacyPolicy from '../Component/PribacyPolicy';

class PrivacyPolicyScreen extends PureComponent {
  static navigationOptions = {
    headerShown: false,
  };
  onAcceptAndContinue = () =>{
    this.props.navigation.navigate('RoomList');
  }
  render() {
    return <PrivacyPolicy 
    onAcceptAndContinue={this.onAcceptAndContinue}
    />;
  }
}

export default PrivacyPolicyScreen;
