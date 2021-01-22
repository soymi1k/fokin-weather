import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Mist: {
    iconName: "weather-cloudy",
    gradient: ["#8CA6DB", "#B993D6"],
  },
  Thunderstorm: {
    iconName: "weather-light",
    gradient: ["#373B44", "#4286f4"],
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#2ebf91", "#8360c3"],
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#19547b", "#ffd89b"],
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#403B4A", "#E7E9BB"],
  },
  Atmosphere: {
    iconName: "weather-sunny-alert",
    gradient: ["#1D4350", "#A43931"],
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#77A1D3", "#79CBCA", "#E684AE"],
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#4e4376", "#2b5876"],
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#292E49", "#536976", "#BBD2C5"],
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#753a88", "#cc2b5e"],
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}ºc</Text>
      </View>
      <View style={styles.halfContainer} />
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
