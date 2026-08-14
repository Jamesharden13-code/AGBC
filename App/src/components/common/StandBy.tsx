import React from "react";
import { View, Image, Text, ImageSourcePropType } from "react-native";
import { Style } from "../../styles/Style";

interface StandByProps {
    imageSource?: ImageSourcePropType,
    title?: string,
    subtitle?: string
}

const StandBy : React.FC<StandByProps> = ({
    imageSource = require("../../assets/image/standBy.png"),
    title = "Page en Cours de Production",
    subtitle = "Cette fonctionnalité est actuellement en développement"
}) => {   
    return(
         <View style={{
                        height: '100%',
                        width: 'auto',
                        justifyContent: 'center',
                        alignItems: 'center'
                   }}>
                        <View style={{
                            position: 'relative',
                            height: '95%',
                            width: '90%',
                            padding: 20,
                            alignItems: 'center'
                        }}>
                            <View style={{
                                marginBottom: 20,
                                width: '100%',
                                alignItems: 'center',
                            }}>
                                <Image 
                                    source={imageSource}
                                    style={{
                                        width: 300,
                                        height: 300,
                                        aspectRatio: 1,      // garde le ratio carré (300x300)
                                        resizeMode: 'contain'
                                    }}
                                />
                            </View>
                            <View style={[Style.centered, {marginBottom: 20}]}>
                                <Text style={[Style.fontSerif , {fontSize : 27}, Style.textCenter]}>
                                    {title}
                                </Text>
                            </View>
                            <View>
                                 <Text style={[Style.fontSerif, Style.textCenter]}>
                                    {subtitle}
                                </Text>
                            </View>
        
                        </View>
                   </View>
    )
}

export default StandBy;