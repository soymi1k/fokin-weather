import React from 'react';
import {Alert} from "react-native";
import Loading from "./Loading";
import * as Location from 'expo-location';
import axios from 'axios';

const API_KEY = "d98bfe42caa2a0e87721c5e20e10ae4a"

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async(latitude, longitude) =>{
    const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
    console.log(data);
  };
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync(); //위치값 유저 허가 대기 await 은 기다리라는 뜻 (async()) = "wait for it" getCurrentPositionAsync()만 실행했을 때 먼저 permission 받으라고 경고가 뜸
      const {
        coords : {latitude, longitude} 
      } = await Location.getCurrentPositionAsync(); //현재 위치값의 정보를 coords로 상수에 저장 (es6를 이용해getCurrentPositionAsync()의 coords 오브젝트 값을 바로 저장한다)
      this.getWeather(latitude, longitude)

      this.setState({isLoading: false});
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  }
  componentDidMount(){
    this.getLocation(); // componentDidMount로 페이지 로딩후 getLocation 함수를 호출
  }
  render(){
    const {isLoading} = this.state;
    return isLoading ? <Loading />: null;
  } 
}
