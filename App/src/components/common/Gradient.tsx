import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { COLORS } from "../../styles/Style"


interface GradientProps {
    children : React.ReactNode
    colors?: string[]; 
    style?: StyleProp<ViewStyle>
}

const Gradient: React.FC<GradientProps> = ({
    children,
    colors = COLORS.active,
    style
}) => {
    return(
        <LinearGradient
                        start={{ x: 0, y : 0}}
                        end={{ x: 1, y: 0}}
                        colors={colors}
                        style={style}
                        locations={[ 0, 1]}
        >
            {children}
        </LinearGradient>
    )
}

export default Gradient;