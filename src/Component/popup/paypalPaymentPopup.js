import React from 'react';
import {Modal, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {WebView} from 'react-native-webview';
const PaypalPaymentPopup = (props) => {
  return (
    <Modal
      visible={props.isPaypalPopup}
      animationType={'slide'}
      >
      <TouchableOpacity onPress={props.closeWebView} style={{alignItems:'flex-end'}}>
        <Text>close</Text>
      </TouchableOpacity>
      <WebView
        source={{
          uri: props.paypalUri,
        }}
        style={{flex: 1}}
      />
    </Modal>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  boxContainer: {
    alignSelf: 'center',
    width: '90%',
    borderRadius: 5,
    backgroundColor: 'white',
  },
});
export default PaypalPaymentPopup;
