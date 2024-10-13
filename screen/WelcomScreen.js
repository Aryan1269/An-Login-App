import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Our App!</Text>
      <Text style={styles.messageText}>
        We're glad to have you here.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1C396C",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    fontFamily : 'open-sans-semibold',
    marginBottom: 10,
  },
  messageText: {
    fontSize: 16,
    color: "#DADADA", 
    textAlign: "center",
    paddingHorizontal: 20, 
    fontFamily : 'open-sans'
  },
});

export default WelcomeScreen;
