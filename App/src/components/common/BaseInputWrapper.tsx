import  { Style, COLORS} from "../../styles/Style";
import { useRef, useEffect } from "react";
import { View, Text, Animated } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import LinearGradient from "react-native-linear-gradient";
import { getGradientLabel } from "../../constants/InputConstants";
import InputStyle from "../../styles/InputStyle";

interface BaseInputWrapperProps {
    label: string;
    error?: string;
    isActive: boolean;
    children: React.ReactNode;
}

const BaseInputWrapper: React.FC<BaseInputWrapperProps> = ({
    label,
    error,
    isActive,
    children
}) => {

    const colorsGradient = getGradientLabel(error, isActive)
    const animatedValue = useRef(new Animated.Value(isActive ? 1 : 0)).current;
    const animatedLabelStyle = {
            top: animatedValue.interpolate({ 
                inputRange: [0, 1],
                outputRange: [14, -2]
            })
        }
    
        const animatedTextStyle = {
            fontFamily: Style.fontSerif.fontFamily,
            fontSize: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [13, 12]
            }),
        };

    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: isActive ? 1 : 0,
            duration: 200,
            useNativeDriver: false,
        }).start();
    }, [isActive]);

    return(
         <>
             <LinearGradient
                colors={colorsGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[{ marginBottom: (error ? 30 : 20)}, InputStyle.container]}
            > 
                <View style={InputStyle.innerContainer}>
                    <Animated.View
                        pointerEvents="none"
                        style={[InputStyle.labelContainer, animatedLabelStyle]}
                    >
                        <MaskedView
                            maskElement={
                                <Animated.Text style={animatedTextStyle}> {label} </Animated.Text> }>
                                <LinearGradient
                                    colors={colorsGradient}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                >
                                <Animated.Text style={[Style.fontSerif, {opacity: 0} ]}>
                                    {label}
                                </Animated.Text>
                            </LinearGradient>
                        </MaskedView>   
                    </Animated.View>
                        {children}
                    {
                        error ? (
                            <Animated.View>
                                <MaskedView
                                    maskElement={
                                        <Animated.Text style={[Style.fontSerif, { flex: 1 }]}>
                                            {error}
                                        </Animated.Text >
                                    }
                                >
                                    <LinearGradient
                                        colors={COLORS.alert}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 0 }}
                                    >
                                        <Text style={[Style.fontSerif,{opacity: 0}]}>
                                            {error}
                                        </Text >
                                    </LinearGradient>
                                </MaskedView>
                            </Animated.View>
                        ) : null
                    }
                </View>
        </LinearGradient>  
        </>
    )

}

export default BaseInputWrapper;