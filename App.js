import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.purpleView} />
      <View style={styles.greenView} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  purpleView: {
    flex: .35,
    backgroundColor: "purple"
  },
  greenView: {
    flex: 7,
    backgroundColor: "green"
  }
});
