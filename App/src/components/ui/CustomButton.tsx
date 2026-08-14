import { TouchableOpacity, View, Text, Platform, UIManager, LayoutAnimation, ActivityIndicator } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import  { Style, COLORS} from "../../styles/Style";


interface CustomButtonProps {
    title: string;
    onPress: () => void; // Don't return anything
    isLoading : boolean
}

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, isLoading = false}) => {
    const handlePress = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        onPress();
    }
    return(
        <TouchableOpacity 
            //onPress={onPress}
            onPress={isLoading ? undefined : handlePress} // On utilise handlePress pour l'animation
            style={{
                 width : isLoading ? 48 : '100%',
                 alignSelf: "center",
                 height: 48
                 //transition: 'all 0.3s ease-in-out
                }}
        >
             <LinearGradient
                colors={COLORS.active}
                style={[{ borderRadius: isLoading ? 24 : 10, height: 48}, Style.centered]}
            >
                    {isLoading ? (
                    <ActivityIndicator size="small" color="#FFFFFF" />
                ) : (
                    <Text style={[Style.textWhite, Style.fontSerif]}>{title}</Text>
                )}
            </LinearGradient>
        </TouchableOpacity>
            
    )
}

export default CustomButton;