import React, {PureComponent} from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';

class CustomTabs extends React.Component {
  state = {
    items: [
      {tabName: 'Rooms', routeName: 'RoomList', index: 0},
      {tabName: 'My Entry', routeName: 'MyEntry', index: 1},
    ],
  };
  onTabPressed = (_routeName, index) => {
    if (index === 0) {
      this.props.navigation.navigate('RoomList');
    } else {
      this.props.navigation.navigate('MyEntry');
    }
  };

  render() {
    const {index} = this.props.navigation.state;

    return (
      <View style={styles.mainConatiner}>
        {console.warn(index)}
        {this.state.items.map((item) => {
          return (
            <TouchableOpacity
              style={styles.buttonStyle}
              key={item.index}
              onPress={() => this.onTabPressed(item.routeName, item.index)}>
              <Image
                source={
                  item.index === 1
                    ? require('../../images/profileImageICon.png')
                    : require('../../images/homeLogo.jpg')
                }
                style={{width: 35, height: 35}}
                resizeMode="contain"
              />
              <Text
                style={
                  index === item.index ? styles.textBoldStyle : styles.textStyle
                }>
                {item.tabName}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainConatiner: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: 'white',
    elevation: 5,
  },
  buttonStyle: {
    margin: 10,
    alignContent: 'center',
    alignItems: 'center',
  },
  textBoldStyle: {textAlign: 'center', fontSize: 18, fontWeight: 'bold'},
  textStyle: {textAlign: 'center', fontSize: 18},
});

export default CustomTabs;
