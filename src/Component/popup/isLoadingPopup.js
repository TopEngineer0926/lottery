import React from 'react';
import {View, Text, Modal, StyleSheet, ActivityIndicator} from 'react-native';

const EmailAndPasswordPopup = (props) => {
  return (
    <Modal visible={props.isLoading} animationType={'slide'} transparent={true}>
      <View style={styles.mainContainer}>
        <View style={styles.boxContainer}>
          <View style={{margin:5,padding:10}}>
          <ActivityIndicator size="large" color="#326fa8" />
          </View>

          <View style={{padding:10}}>
            <Text style={{textAlign: 'center',color:'white'}}>please wait...</Text>
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
    width: '70%',
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
