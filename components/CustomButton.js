import { Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CustomButton = ({ScreenName, children}) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate(`${ScreenName}`)}>
      {children}
    </Pressable>
  );
};

export default CustomButton;
