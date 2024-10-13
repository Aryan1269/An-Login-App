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

const Login = ({ navigation }) => {
  const [inputValue, setInputValue] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState(false);
  const [Btn, setBtn] = useState(true);

  async function handleSubmit() {
    if (!inputValue || !password) {
      return setError("All Fields are rquired");
    }
    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.EXPO_PUBLIC_API_KEY}`,
        {
          email: inputValue.trim(),
          password: password.trim(),
          returnSecureToken: true,
        }
      );
      const idToken = response.data.idToken;
      const userId = response.data.localId;

      const userDataResponse = await axios.get(
        `https://assignment-732c7-default-rtdb.firebaseio.com/user/${userId}.json`
      );

      if (userDataResponse.data) {
        if (userDataResponse.data.passwordReset) {
          navigation.replace("Welcome");
        } else {
          navigation.replace("RestPassword", { idToken, userId });
        }
      } else {
        await axios.put(
          `https://assignment-732c7-default-rtdb.firebaseio.com/user/${userId}.json`,
          {
            passwordReset: false,
          }
        );
        navigation.replace("RestPassword", { idToken, userId });
      }
    } catch (e) {
      setError(e.response.data.error.message);
    }
  }

  useEffect(() => {
    if (inputValue && password) {
      setBtn(false);
      setError("");
    } else {
      setBtn(true);
    }
  }, [inputValue, password]);

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
            label="Password"
            value={password}
            onChangeText={setpassword}
            autoCapitalize="none"
          />
          {error ? <Text style={{ color: "red" }}>{error}</Text> : ""}
          <CustomButton onPress={() => navigation.navigate("ForgotPassword")}>
            <Text
              style={{
                color: "blue",
                marginTop: 10,
                fontFamily: "open-sans",
              }}
            >
              Forgot Password?
            </Text>
          </CustomButton>
        </View>
      </ScrollView>
      <CustomButton onPress={handleSubmit}>
        <Text style={Btn ? styles.btn : styles.btnOk}>Log In</Text>
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
    width: wp("85%"),
    height: hp("40%"),
    opacity: 0.7,
    resizeMode: "contain",
  },
  btn: {
    padding: 10,
    backgroundColor: "#707070",
    opacity: 1,
    textAlign: "center",
    fontSize: wp(5),
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
    paddingHorizontal: wp(5),
    paddingTop: hp(10),
    borderTopRightRadius: wp(8),
    borderTopLeftRadius: wp(8),
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  hr: {
    width: wp("100%"),
    height: 1,
    backgroundColor: "grey",
    marginVertical: hp(5),
    opacity: 0.7,
  },
});

export default Login;
