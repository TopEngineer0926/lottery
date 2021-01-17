import React, {PureComponent} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from 'react-native';
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
          <Text style={{color: '#cfcfcf', textAlign: 'center'}}>Status</Text>
          <TouchableOpacity>
            <Text style={styles.greenText}>{this.props.item.status}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const MyRntry = (props) => {
  const roomItem = ({item}) => <FlatListComponent item={item} />;
  return (
    <View style={{flex: 1}}>
      <LoadingPopup isLoading={props.isLoading} />
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={{
            margin: 10,
            backgroundColor: 'white',
            borderRadius: 40,
            elevation: 2,
          }}
          onPress={props.goBack}>
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
        <TouchableOpacity onPress={() => props.navigateToProfile()}>
          <Image
            source={require('../../images/profileIcon.png')}
            style={{width: 50, height: 50, backgroundColor: 'white'}}
          />
        </TouchableOpacity>
      </View>

      {props.data.length > 0 ? (
        <View>
          <View style={{margin: 10}}>
            <Text style={{fontSize: 22, color: '#c9c9c9'}}>My Entries</Text>
          </View>
          <SafeAreaView>
            <FlatList
              data={props.data}
              renderItem={roomItem}
              keyExtractor={(item) => String(item.roomId)}
            />
          </SafeAreaView>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize:16,fontWeight:'bold'}}>No Entries...</Text>
        </View>
      )}
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
export default MyRntry;
