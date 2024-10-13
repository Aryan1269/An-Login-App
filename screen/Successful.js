import { Image, StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Successful = ({ navigation }) => {
  function handleSubmit() {
    navigation.replace("Welcome");
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageSection}>
        <View style={styles.hr}></View>
        <Image style={styles.logo} source={require("../assets/login.png")} />
        <Text style={styles.textStl}>
          It is mandatory for you to set a new password, which is not the same
          as the password provided by the admin.
        </Text>
      </View>
      <View style={styles.content}>
        <Image
          style={styles.logoS}
          source={require("../assets/successful.png")}
        />
        <Text style={styles.text}>Password reset successfully!</Text>
        <Text style={styles.textStyle}>
          Your password has been successfully reset.Click below to Login with
          new credential
        </Text>
      </View>
      <CustomButton onPress={handleSubmit}>
        <Text style={styles.btn}>Log In</Text>
      </CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C396C",
  },
  logo: {
    width: hp(20),
    height: hp("32%"),
    opacity: 0.7,
    marginBottom: 5,
    resizeMode: "contain",
  },
  logoS: {
    width: hp(10),
    height: hp("20%"),
    resizeMode: "contain",
  },
  textStl: {
    color: "white",
    textAlign: "center",
    width: wp(80),
    fontFamily: "open-sans",
  },
  btn: {
    padding: 10,
    backgroundColor: "#69B76F",
    opacity: 1,
    textAlign: "center",
    fontSize: hp(2.5),
    fontWeight: "600",
    color: "#F9F9F9",
  },
  imageSection: {
    height: hp("50"),
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    alignItems: "center",
    borderTopRightRadius: wp(8),
    borderTopLeftRadius: wp(8),
    backgroundColor: "#fff",
  },
  hr: {
    width: wp("100%"),
    height: 1,
    backgroundColor: "grey",
    marginVertical: hp(2),
    opacity: 0.7,
  },
  text: {
    textAlign: "center",
    fontSize: hp(2),
    fontWeight: "600",
    marginBottom: hp(2),
    lineHeight: hp(2),
    fontFamily: "open-sans-semibold",
  },
  textStyle: {
    textAlign: "center",
    fontSize: hp(1.8),
    paddingHorizontal: 10,
    fontFamily: "open-sans",
  },
});

export default Successful;
