import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import Weather from "./Weather"; //Weather 파일을 Weather로 호출
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "d98bfe42caa2a0e87721c5e20e10ae4a";

export default class extends React.Component {
  state = {
    isLoading: true,
  };

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };

  getWeather = async (potato, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${potato}&lon=${longitude}&appid=${API_KEY}&units=metric`
    ); //openWeather Doc에 unit of measurement를 보면 &units=metric를 url에 추가해야 섭씨로 나온다
    this.setState({ isLoading: false, temp: data.main.temp }); //data Object의 temp값을 temp에 넣고, isLoading값을 false로 (getLocation async함수에서 옮겨옴)
  };

  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp } = this.state; // state에 temp 선언
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} />; // Weather파일에 temp값을 Math.round로 정수로 보내준다
  }
}
