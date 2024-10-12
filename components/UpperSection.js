import { Image, StyleSheet, Text, View } from 'react-native';

const UpperSection = () => {
  return (
    <View style={styles.imageSection}>
        <View style={styles.hr}></View>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
    </View>
  );
};

export default UpperSection;

const styles = StyleSheet.create({
    hr:{
        width : "100%",
        height : 1,
        backgroundColor : 'grey',
        marginVertical: 20,
        opacity : 0.7,
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
});