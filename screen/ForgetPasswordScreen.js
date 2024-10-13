import { Image, StyleSheet, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CustomButton from "../components/CustomButton";

const ForgetPasswordScreen = ({ navigation }) => {
  function handleSubmit() {
    navigation.navigate("Home");
  }
  return (
    <View style={styles.container}>
      <View style={styles.hr}></View>
      <View style={styles.content}>
        <Image style={styles.logo} source={require("../assets/contact.png")} />
        <Text style={styles.text}>Contact your admin</Text>
        <Text style={styles.textStyle}>
          Password can only be reset by your admin. Contact the admin and
          request them to reset your password.
        </Text>
        <Text style={styles.textStyle}>
          For the admins assistance - to reset the password the admin will have
          to:
        </Text>
        <Text style={styles.textStyle}>
          Open Q2Pay → Settings → Users → Select user → Reset password
        </Text>
        <Text style={styles.textStyle}>Password reset successfully?</Text>
      </View>
      <View>
        <CustomButton onPress={handleSubmit}>
          <Text style={styles.btn}>Log In</Text>
        </CustomButton>
      </View>
    </View>
  );
};

export default ForgetPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1C396C",
  },
  content: {
    flex: 1,
    padding: hp(2),
  },
  logo: {
    width: wp(90),
    height: hp(30),
    resizeMode: "contain",
  },
  text: {
    fontWeight: "600",
    fontSize: hp("3%"),
    letterSpacing: 0,
    color: "#FFFFFF",
    textAlign: "center",
    marginVertical: hp(4),
    lineHeight: hp("3%"),
    fontFamily: "open-sans-semibold",
  },
  textStyle: {
    fontSize: hp(2),
    lineHeight: hp("3%"),
    fontFamily: "open-sans",
    letterSpacing: 0,
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: hp(3),
  },
  btn: {
    padding: 10,
    backgroundColor: "#69B76F",
    opacity: 1,
    textAlign: "center",
    fontSize: wp(5),
    fontWeight: "600",
    color: "#F9F9F9",
    width: wp(100),
  },
  hr: {
    width: wp("100%"),
    height: 1,
    backgroundColor: "grey",
    marginVertical: hp(5),
    opacity: 0.7,
  },
});
