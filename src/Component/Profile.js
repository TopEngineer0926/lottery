import React from 'react';
import {Text, TouchableOpacity, View, Image, StyleSheet} from 'react-native';

const profile = (props) => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => props.onBackClick()}
          style={{
            margin: 10,
            backgroundColor: 'white',
            borderRadius: 40,
            elevation: 2,
          }}>
          <Image
            source={require('../../images/backIcon.png')}
            style={styles.logoSize}
            resizeMode={'stretch'}
          />
        </TouchableOpacity>
        <Image
          source={require('../../images/lottery-logo.jpg')}
          style={styles.logoSize1}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../images/profileIcon.png')}
          style={{height: 100, width: 100}}
        />
        <Text>{props.email}</Text>
        <Text>
          {'TOtal Winging:' + (props.totalWinning ? props.totalWinning : '0')}
        </Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity style={styles.ButtonStyle}>
          <Text style={styles.ButtonTextStyle}>Account Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonStyle}>
          <Text style={styles.ButtonTextStyle}>About Lottery</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ButtonStyle}
          onPress={props.onLogoutPressed}>
          <Text style={styles.ButtonTextStyle}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ButtonStyle: {
    margin: 10,
    padding: 20,
    width: 200,
    borderRadius: 10,
    elevation: 2,
    backgroundColor: 'white',
  },
  ButtonTextStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 1,
  },
  logoSize: {
    height: 30,
    width: 30,
    margin: 10,
  },
  logoSize1: {
    height: 50,
    width: 80,
    borderRadius: 30,
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: 'grey',
  },
  roomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    elevation: 2,
  },
  greenText: {
    backgroundColor: '#25a15d',
    padding: 5,
    textAlign: 'center',
    marginTop: 5,
    width: 90,
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 10,
  },
});
export default profile;
