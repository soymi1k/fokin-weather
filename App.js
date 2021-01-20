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

  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync(); //위치값 유저 허가 대기 await 은 기다리라는 뜻 (async()) = "wait for it" getCurrentPositionAsync()만 실행했을 때 먼저 permission 받으라고 경고가 뜸
      const {
        coords : {latitude, longitude} //현재 위치값의 정보를 coords로 상수에 저장 (es6를 이용해getCurrentPositionAsync()의 object값의 위도 경도를 바로 저장한다
      } = await Location.getCurrentPositionAsync(); 
      this.getWeather(latitude, longitude); // async함수 getWeather의 latitude, longtitude 인자값으로 보낸다
      this.setState({isLoading: false}); 
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  }

  getWeather = async(potato, longitude) =>{  //this.getWeather로부터 받은 인자값은 순서는 상관있지만 인자값의 명칭은 뭐로해도 상관없다.
    console.log(potato)
    const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${potato}&lon=${longitude}&appid=${API_KEY}`) //axios라이브러리를 사용해서 api 호출 `(백틱)을사용해야 인자값을 동적변수로 넣을 수 있다. 
    console.log(data);
  };
  
  componentDidMount(){
    this.getLocation(); // componentDidMount로 페이지 로딩후 getLocation async함수를 호출
  }
  render(){
    const {isLoading} = this.state; //state로 isLoading을 선언과 함께 보낸다
    return isLoading ? <Loading />: null; //조건문 (isLoading이 참일땐 Loading파일을 불러오고 거짓이면 null (공백)을 띄운다)
  } 
}
