import React from "react";
import { Text, View, Image, ImageBackground, ImageSourcePropType } from "react-native";
import  { Style } from "../../styles/Style";
import CardStyle from "../../styles/CardStyle";

interface PlayerItem {
    pseudo: string;
    points: number | string;
    image: ImageSourcePropType
}

interface PlayerCardProps {
    item : PlayerItem
}

const PlayerCard: React.FC<PlayerCardProps> = ({item}) => {
    return(
        <View style={CardStyle.cardContainer}>
            <ImageBackground 
                source={require('../../assets/image/Frame1.png')}
                resizeMode="cover"
                style={[Style.centered, Style.mainContainer, Style.row, {width : '100%'}]}>
                <View style={CardStyle.playerImageContainer}>
                    <Image
                        style={CardStyle.playerImage}
                        source={item.image}
                    />
                </View>
                <View style={Style.centered}>
                    <Image
                        resizeMode="contain"
                        style={[CardStyle.cueImage, Style.centered]}
                        source={require('../../assets/image/QB.png')}
                    />
                </View>
                <View style={[CardStyle.cardContent, Style.centered]}>
                    <Text style={[Style.titleMedium, Style.fontSerif, Style.textWhite]}>
                        {item.pseudo}
                    </Text>
                    <View style={CardStyle.separator}>
                    </View>
                    <Text style={[Style.titleSmall, Style.fontSerif, Style.textWhite]}>
                        {item.points} points
                    </Text>
                </View>
            </ImageBackground>
        </View>
    )
}

export default PlayerCard;