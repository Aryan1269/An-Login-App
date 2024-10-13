import * as React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import ForgetPasswordScreen from "./screen/ForgetPasswordScreen";
import Login from "./screen/Login";
import RestPassword from "./screen/RestPassword";
import Successful from "./screen/Successful";
import WelcomeScreen from "./screen/WelcomScreen";

const Stack = createNativeStackNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-semibold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
  });
};

function App() {
  const [fontLoaded, setFontLoaded] = React.useState(false);

  React.useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await fetchFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setFontLoaded(true);
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle='light-content' />
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Home" component={Login} />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgetPasswordScreen}
            />
            <Stack.Screen name="RestPassword" component={RestPassword} />
            <Stack.Screen name="Successful" component={Successful} />
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
