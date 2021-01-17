import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

const PrivacyPolicy = (props) => {
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.subConatiner}>
        <Image
          source={require('../../images/lottery-logo.jpg')}
          style={styles.logoSize}
        />
        <Text style={{fontSize: 18, padding: 10}}>WELCOME TO</Text>
        <Text style={{fontSize: 18, fontWeight: 'bold', padding: 5}}>
          LOTTERY
        </Text>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Privacy Policy</Text>
        <ScrollView>
          <Text style={styles.privacyPoicyText}>
            {
              'Lottery App values your privacy\nand takes it seriously. We have\ncreated this Privacy Policy to\nadvise you of what information\nwe collect when you visit our\nsite, why we collect it, and how\nit is used. This Privacy Policy\nexplains the data collection and\nuse practices of the Lottery App\nmobile applications (Lottery); it\n does not apply to other sites\n, products, or services. The terms\n“you,” “your,” and “yours” refer'
            }
          </Text>
        </ScrollView>
      </View>
      <View>
        <TouchableOpacity style={styles.buttonContainer} onPress={props.onAcceptAndContinue}> 
          <Text
            style={styles.buttonText}>
            Accept & continue
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: 'white'},
  subConatiner: {
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    elevation: 2,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  logoSize: {
    height: 60,
    width: 100,
    borderRadius: 30,
    padding: 10,
    margin: 10,
  },
  privacyPoicyText: {
    margin: 10,
    padding: 10,
    fontSize: 16,

    textAlign: 'center',
    letterSpacing: 1,
  },
  buttonContainer: {
    alignSelf: 'center',
    backgroundColor: '#377849',
    padding: 12,
    width: '90%',
    borderRadius: 10,
    elevation:2,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
export default PrivacyPolicy;
