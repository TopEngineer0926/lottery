import React from 'react';
import {View, Text, Modal, StyleSheet, Image,TouchableOpacity} from 'react-native';

const PaymentMethodPopup = (props) => {
  return (
    <Modal
      visible={props.paymentPopup}
      animationType={'slide'}
      transparent={true}
      onRequestClose={props.closePaymentPopup}>
      <View style={styles.mainContainer}>
        <View style={styles.boxContainer}>
          <Text
            style={{
              textAlign: 'center',
              padding: 10,
              margin: 10,
              fontWeight: 'bold',
              fontSize: 18,
            }}>
            Payment Method
          </Text>
          
          <TouchableOpacity
            style={styles.conatainer}
            onPress={()=>props.paymentSeletor("paypal")}
          >
            <Image
              source={require('../../../images/paypal.png')}
              style={styles.imageStyle}
              resizeMode="contain"
            />
            <Text style={styles.textStyle}>Pay with Paypal</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.conatainer}
            onPress={()=>props.paymentSeletor("card")}>
            <Image
              source={require('../../../images/cardPayment.png')}
              style={styles.imageStyle}
              resizeMode="contain"
            />
            <Text style={styles.textStyle}>Pay with Card</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.conatainer, {marginBottom: 50}]}
            onPress={() => props.paymentSeletor('sim')}>
            <Image
              source={require('../../../images/sim.png')}
              style={styles.imageStyle}
              resizeMode="contain"
            />
            <Text style={styles.textStyle}>Pay with Sims</Text>
          </TouchableOpacity>
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
    borderRadius: 5,
    backgroundColor: 'white',
  },
  conatainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    margin: 10,
    alignSelf: 'center',
    borderRadius: 20,
    elevation: 2,
    backgroundColor: '#f2f2f2',
  },
  textStyle: {
    textAlign: 'center',
    color: 'black',
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageStyle: {
    width: 35,
    height: 35,
    padding: 5,
  },
});

export default PaymentMethodPopup;
