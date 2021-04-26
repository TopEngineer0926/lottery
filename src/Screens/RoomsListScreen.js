import React, { PureComponent } from "react";
import RoomList from "../Component/RoomList";
import { getApi ,postApi} from "../FetchAPI/FetchAPI";
import { getRoomsList, paypal, stripePayment } from "../FetchAPI/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ToastAndroid } from "react-native";

import stripe from "tipsi-stripe";
stripe.setOptions({
  publishableKey:
    "pk_test_51IAuVeBY3Y4hXzH6F8oUgf9eFZCXHOhlAsnIzKObsy0NPK1g0MjhMySOvEWZT6HmLjdMKVnvyU6byCRwgrTrWGUX00kevXDs1u",
});
class RoomsListScreen extends PureComponent {
  static navigationOptions = {
    headerShown: false,
  };
  state = {
    /** stripe payment */
    token: null,
    loading: false,
    /** stripe payment */
    isLoading: false,
    roomState: true,
    data: [],
    afterResponse: true,
    paymentPopup: false,
    currentRoom: [],
    isPaypalPopup: false,
    paypalUri: "",
  };
  componentDidMount() {
    this.getRoomList();
  }

  getRoomList = () => {
    let response = getApi(getRoomsList, ``);
    response
      .then((result) => result.json())
      .then((jsonResult) => {
        if (jsonResult.status === "200") {
          var afterResponse = jsonResult.data.length <= 0;

          this.setState({
            data: jsonResult.data,
            afterResponse: afterResponse,
          });
        }
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  navigateToProfile = () => {
    this.props.navigation.navigate("Profile", { data: "1" });
  };
  onRefresh = () => {
    this.getRoomList();
  };

  paypalPaymentMethod = () => {
    let id = this.state.currentRoom.roomId;
    let amount = this.state.currentRoom.entry;
    AsyncStorage.getItem("email").then((email) => {
      let response = getApi(paypal, `amount=${amount}&id=${id}&email=${email}`);
      response
        .then((result) => result.json())
        .then((jsonResult) => {
          this.setState({
            isLoading: false,
          });
          if (jsonResult.status === "200") {
            this.setState({
              paypalUri: jsonResult.link,
              isPaypalPopup: true,
            });
          }
        })
        .catch((error) => {
          this.setState({
            isLoading: false,
          });
          console.warn(error);
        });
    });
  };

  /** stripe payment function */
  handleCardPayPress = async () => {
    
    try {
      this.setState({
        loading: true,
        token: null
      });
      const token = await stripe.paymentRequestWithCardForm();
      
      this.setState({
        token: token["id"],
        loading: false,
      });
      console.warn("token",token)
      //this.doPaymentWithCard();
    } catch (error) {
      console.log("handleCardPayPress Error ", error);
      //setLoading(false);
      this.setState({
        loading: false,
      });
    }
  };

  doPaymentWithCard = () => {
    console.warn('function called')
    this.setState({ isLoading: true });
    let id = this.state.currentRoom.roomId;
    let amount = this.state.currentRoom.entry;
    let token = this.state.token;
    var formData = new FormData();
    formData.append("amount", amount);
    formData.append("id", id);
    formData.append("token", token);

    AsyncStorage.getItem("email").then((email) => {
      formData.append("email", email);
      var response = postApi(stripePayment, formData);
      response
        .then((result) => result.json())
        .then((jsonResult) => {
          this.setState({ isLoading: false });
          console.warn(jsonResult);
        })
        .catch((error) => {
          ToastAndroid.show(error, ToastAndroid.LONG);
        });
    });
    
  };

  render() {
    return (
      <RoomList
        isLoading={this.state.isLoading}
        roomState={this.state.roomStates}
        data={this.state.data}
        navigateToProfile={this.navigateToProfile}
        afterResponse={this.state.afterResponse}
        onRefresh={this.onRefresh}
        onScroll={this.onScroll}
        OnEntry={(item) => {
          //console.warn(item)
          this.setState({
            paymentPopup: true,
            currentRoom: item,
          });
        }}
        paymentPopup={this.state.paymentPopup}
        closePaymentPopup={() => {
          this.setState({
            paymentPopup: false,
          });
        }}
        paymentSeletor={(val) => {
          this.setState({
            paymentPopup: false,
            isLoading: true,
          });
          if (val === "paypal") {
            this.paypalPaymentMethod();
          } else if (val === "card") {
            this.setState({
              isLoading: false,
            });
            this.handleCardPayPress();
          } else {
            this.setState({
              isLoading: false,
            });
            ToastAndroid.show("Comming Soon", ToastAndroid.LONG);
          }
        }}
        paypalUri={this.state.paypalUri}
        isPaypalPopup={this.state.isPaypalPopup}
        closeWebView={() =>
          this.setState({
            isPaypalPopup: false,
          })
        }
      />
    );
  }
}

export default RoomsListScreen;
