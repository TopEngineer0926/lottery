import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

const EmailAndPasswordPopup = (props) => {
  return (
    <Modal
      onRequestClose={props.close}
      visible={props.visible}
      animationType={'slide'}
      transparent={true}>
      <View style={styles.mainContainer}>
        <View style={styles.boxContainer}>
          <View style={styles.headingContainer}>
            <Text style={styles.headingText}>Login</Text>
          </View>
          <View style={{margin: 10, padding: 10}}>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={(val) => props.onChangeText({email: val})}
              value={props.email}
              placeholder={'Email'}
            />
            <TextInput
              style={styles.textInputStyle}
              onChangeText={(val) => props.onChangeText({password: val})}
              value={props.password}
              placeholder={'Password'}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                if(props.isLogin){
                  props.onLoginPress();
                }else{
                  ToastAndroid.show("Please Enter Valid Email&Password",ToastAndroid.LONG)
                }
                
              }}
              style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
    backgroundColor: 'white',
    borderRadius: 5,
  },
  textInputStyle: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 5,
    padding: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    margin: 10,
    padding: 10,
    width: 200,
    borderRadius: 10,
    elevation: 1,
    backgroundColor: '#75afff',
  },
  buttonText: {textAlign: 'center', fontSize: 16},
  headingContainer: {alignContent: 'center', alignItems: 'center', margin: 10},
  headingText: {fontSize: 20, fontWeight: 'bold'},
});

export default EmailAndPasswordPopup;
