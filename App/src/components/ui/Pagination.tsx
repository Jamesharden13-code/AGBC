import React from "react";
import { View, Dimensions } from "react-native";
import  { Style } from "../../styles/Style";
import { ImageSliderType } from "../../data/Game"
import Animated, { useAnimatedStyle, interpolate, Extrapolate, SharedValue } from "react-native-reanimated";

type Props = {
    items: ImageSliderType[],
    PaginationIndex?: number,
    scrollX: SharedValue<number>,
}

const { width } = Dimensions.get("screen");

// const Pagination = ({items, scrollX}: Props) => {
const Pagination: React.FC<Props> = ({items, scrollX}) => {
    return(
        <View style={[Style.centered, Style.row , { position: 'relative'}]}>
            {items.map((_,index) => {
                const animatedStyle = useAnimatedStyle(() => {
                const inputRange = [
                    (index - 1) * width,
                    index * width,
                    (index + 1) * width,
                ];

                const scale = interpolate(
                    scrollX.value,
                    inputRange,
                    [0.8, 1.4, 0.8], // le point au centre est plus grand
                    Extrapolate.CLAMP
                );

                const opacity = interpolate(
                    scrollX.value,
                    inputRange,
                    [0.4, 1, 0.4], // point actif plus visible
                    Extrapolate.CLAMP
                );

                return {
                    transform: [{ scale }],
                    opacity,
                };
                });

                return(
                    <Animated.View key={index} style={[Style.carouselDot, animatedStyle]} />
                )
            })}
        </View>
    )
}

export default Pagination;