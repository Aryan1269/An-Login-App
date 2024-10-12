import { StyleSheet, Text, View } from 'react-native';
import UpperSection from '../components/UpperSection';
import BottomSection from '../components/BottomSection';
import CustomButton from '../components/CustomButton';

const Login = () => {
  return (
    <View style={styles.container}>
        <UpperSection/>
        <BottomSection/>
        <CustomButton>
            <Text style={styles.btn}>Log In</Text>
        </CustomButton>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C396C", 
  },
  btn: {
    padding: 10,
    backgroundColor: "#707070",
    opacity: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: '600',
    color: "#DADADA",
  },
});