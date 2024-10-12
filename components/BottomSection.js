import { StyleSheet, Text, View } from "react-native";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { useState } from "react";

const BottomSection = () => {
    const [inputValue, setInputValue] = useState("");
  return (
    <View style={styles.content}>
      <CustomInput
        label="User Id"
        value={inputValue}
        onChangeText={setInputValue}
        autoCapitalize="none"
      />
      <CustomInput
        label="password"
        value={inputValue}
        onChangeText={setInputValue}
        autoCapitalize="none"
      />
      <CustomButton ScreenName="ForgotPassword">
        <Text style={{ color: "blue", marginTop: 40 }}>Forgot Password?</Text>
      </CustomButton>
    </View>
  );
};

export default BottomSection;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection : 'column',
    justifyContent : "center",
   
    padding: 20,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
});
