import React, {PureComponent} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  ScrollView,
} from 'react-native';

import PaymentMethodPopup from './popup/PaymentSelectionPopup';
import PayPalPopup from './popup/paypalPaymentPopup';
import LoadingPopup from './popup/isLoadingPopup';


class FlatListComponent extends PureComponent {
  render() {
    return (
      <View style={styles.roomContainer}>
        <View>
          <Text style={{color: '#cfcfcf'}}>Prize Pool</Text>
          <Text style={{marginBottom: 6, fontSize: 15, fontWeight: 'bold'}}>
            {this.props.item.prizePool}
          </Text>

          <Text>{'Room id: ' + this.props.item.roomId} </Text>
        </View>
        <View>
          <Text style={{color: '#cfcfcf', textAlign: 'center'}}>Entry</Text>
          <TouchableOpacity onPress={() => this.props.OnEntry(this.props.item)}>
            <Text style={styles.greenText}>{this.props.item.entry}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const RomomList = (props) => {
  let scrollRef = React.createRef();
  const roomItem = ({item}) => (
    <FlatListComponent item={item} OnEntry={(val)=>props.OnEntry(val)} />
  );
  return (
    <View style={{flex: 1}}>
      <LoadingPopup isLoading={props.isLoading} />
      <PaymentMethodPopup 
          paymentPopup={props.paymentPopup}
          closePaymentPopup={props.closePaymentPopup}
          paymentSeletor={(val)=>props.paymentSeletor(val)}
      />
      <PayPalPopup 
        paypalUri={props.paypalUri}
        isPaypalPopup={props.isPaypalPopup}
        closeWebView={props.closeWebView}
      />
      <View style={styles.headerContainer}>
        <Image
          source={require('../../images/lottery-logo.jpg')}
          style={styles.logoSize}
        />
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Room List</Text>

        <TouchableOpacity onPress={() => props.navigateToProfile()}>
          <Image
            source={require('../../images/profileIcon.png')}
            style={{width: 50, height: 50, backgroundColor: 'white'}}
          />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        {props.data.length === 0 || props.afterResponse ? (
          props.afterResponse ? (
            <View style={styles.loaderContainer}>
              <ActivityIndicator
                style={{alignSelf: 'center'}}
                size="large"
                color="#326fa8"
              />
            </View>
          ) : (
            <View style={styles.loaderContainer}>
              <Text style={styles.sooryText}>
                Sorry! No Active Lottery Room
              </Text>
            </View>
          )
        ) : (
          <ScrollView
            style={{flex: 1}}
            refreshControl={
              <RefreshControl refreshing={false} onRefresh={props.onRefresh} />
            }>
            <FlatList
              data={props.data}
              renderItem={roomItem}
              keyExtractor={(item) => String(item.roomId)}
              ref={scrollRef}
            />
          </ScrollView>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 1,
  },
  logoSize: {
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
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  sooryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'grey',
  },
});
export default RomomList;
