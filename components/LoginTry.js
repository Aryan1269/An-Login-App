import { Image, StyleSheet, Text, View } from "react-native";
import CustomInput from "./CustomInput";
import { useState } from "react";
import CustomButton from "./CustomButton";

const Login = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.imageSection}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
      </View>
      <View style={styles.content}>
        <CustomInput
          label="User Id"
          value={inputValue}
          onChangeText={setInputValue}
          autoCapitalize="none"
        />
        <CustomInput
          label="User Id"
          value={inputValue}
          onChangeText={setInputValue}
          autoCapitalize="none"
        />
        <CustomButton ScreenName="ForgotPassword">
          <Text style={{ color: "blue", marginTop: 10 }}>Forgot Password?</Text>
        </CustomButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C396C", // Optional: Background color for the entire container
  },
  logo: {
    width: 250,
    height: 250,
    opacity: 0.7,
  },
  imageSection: {
    // flex : 1,
    // height : 552,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    padding: 20,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: "#fff", // Set background color for visibility of border radius
    overflow: "hidden", // Ensures that the content inside respects the border radius
  },
});

export default Login;
