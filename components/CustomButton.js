import { Pressable} from "react-native";


const CustomButton = ({onPress, children}) => {


  return (
    <Pressable onPress={onPress}>
      {children}
    </Pressable>
  );
};

export default CustomButton;
