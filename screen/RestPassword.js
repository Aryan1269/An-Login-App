import { useEffect, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import axios from "axios";

const RestPassword = ({ navigation, route }) => {
  const { idToken, userId } = route.params;
  const [oldpassword, setoldpassword] = useState("");
  const [NewPassword, setNewPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [Btn, setBtn] = useState(false);

  useEffect(() => {
    if (
      NewPassword.length > 0 &&
      ConfirmPassword.length > 0 &&
      oldpassword.length > 0
    ) {
      setBtn(true);
      setError(
        NewPassword !== ConfirmPassword ? "Passwords do not match!" : null
      );
    } else {
      setBtn(false);
      setError(false);
    }
  }, [NewPassword, ConfirmPassword, oldpassword]);

  async function handleSubmit() {
    if (!oldpassword || !NewPassword || !ConfirmPassword) {
      return setError("All fields are required!");
    }
    if (NewPassword.trim() !== ConfirmPassword.trim()) {
      return setError("Passwords do not match!");
    }
    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.EXPO_PUBLIC_API_KEY}`,
        {
          idToken: idToken,
          password: NewPassword.trim(),
          returnSecureToken: true,
        }
      );

      await axios.patch(
        `${process.env.EXPO_PUBLIC_API_URL}/user/${userId}.json`,
        {
          passwordReset: true,
        }
      );

      navigation.replace("Successful");
    } catch (e) {
      setError(e.response.data.error.message);
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.imageSection}>
          <View style={styles.hr}></View>
          <Image style={styles.logo} source={require("../assets/login.png")} />
          <Text style={styles.textStl}>
            It is mandatory for you to set a new password, which is not the same
            as the password provided by the admin.
          </Text>
        </View>
        <View style={styles.content}>
          <Text
            style={{
              color: "black",
              fontSize: hp(2.5),
              fontWeight: "600",
              marginTop: hp(5),
              marginBottom: hp(2.5),
              fontFamily: "open-sans-semibold",
            }}
          >
            Set new Password
          </Text>
          <CustomInput
            label="Old Password"
            value={oldpassword}
            onChangeText={setoldpassword}
            autoCapitalize="none"
          />
          <CustomInput
            label="New Password"
            value={NewPassword}
            onChangeText={setNewPassword}
            autoCapitalize="none"
          />
          <CustomInput
            label="Confirm Password"
            value={ConfirmPassword}
            onChangeText={setConfirmPassword}
            autoCapitalize="none"
          />
          {error ? (
            <Text style={{ color: "red" }}>{error}</Text>
          ) : (
            ConfirmPassword.length > 0 && (
              <View style={styles.successMessageContainer}>
                <Image
                  style={{
                    resizeMode: "contain",
                    height: hp(2.5),
                    width: hp(2.5),
                  }}
                  source={require("../assets/right.png")}
                />
                <Text style={{ color: "#1D1D1D" }}>
                  Allow user to set their own password on first login.
                </Text>
              </View>
            )
          )}
        </View>
      </ScrollView>
      <CustomButton onPress={handleSubmit}>
        <Text style={!Btn ? styles.btn : styles.btnOk}>Log In</Text>
      </CustomButton>
    </KeyboardAvoidingView>
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
  textStl: {
    color: "white",
    textAlign: "center",
    width: wp(80),
    fontFamily: "open-sans-semibold",
  },
  btn: {
    padding: 10,
    backgroundColor: "#707070",
    opacity: 1,
    textAlign: "center",
    fontSize: hp(2.5),
    fontWeight: "600",
    color: "#DADADA",
  },
  btnOk: {
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
    paddingHorizontal: hp(2),
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
  successMessageContainer: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "start",
    alignItems: "center",
  },
});

export default RestPassword;
