import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Mist: {
    iconName: "weather-cloudy",
    gradient: ["#8CA6DB", "#B993D6"],
    title: "Mist!",
    subtitle: "It's like you have no glasses on.",
  },
  Thunderstorm: {
    iconName: "weather-light",
    gradient: ["#373B44", "#4286f4"],
    title: "Thunderstorm in the house",
    subtitle: "Actually, outside of the house",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#2ebf91", "#8360c3"],
    title: "Drizzle",
    subtitle: "Is like rain, but gay 🏳️‍🌈",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#19547b", "#ffd89b"],
    title: "Raining like a MF",
    subtitle: "For more info look outside",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#403B4A", "#E7E9BB"],
    title: "Cold as balls",
    subtitle: "Do you want to build a snowman? Fuck no.",
  },
  Atmosphere: {
    iconName: "weather-sunny-alert",
    gradient: ["#1D4350", "#A43931"],
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#77A1D3", "#79CBCA", "#E684AE"],
    title: "Sunny as fuck",
    subtitle: "Go get your ass burnt",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#4e4376", "#2b5876"],
    title: "Cloud",
    subtitle: "This is Blumeing time",
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#292E49", "#536976", "#BBD2C5"],
    title: "Haze",
    subtitle: "Just don't go outside.",
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#753a88", "#cc2b5e"],
    title: "Dusty",
    subtitle: "Thanks a lot China 🖕🏻",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
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
      <View style={styles.textContainer}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
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
    // justifyContent: "center",
    // alignItems: "center",
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
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
    textAlign: "left",
  },
  subtitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 24,
    textAlign: "left",
  },
  textContainer: {
    alignItems: "flex-start",
    paddingHorizontal: 40,
    justifyContent: "center",
    flex: 1,
  },
});
