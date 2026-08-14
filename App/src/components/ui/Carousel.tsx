import React, {useState} from "react";
import { View, Text, Image, Dimensions, ImageSourcePropType, } from "react-native";
import  { Style } from "../../styles/Style";

interface CarouselItem {
    image: ImageSourcePropType;
    title: string;
}

interface CarouselProps {
    item : CarouselItem
}


const { width } = Dimensions.get("screen");
const Carousel: React.FC<CarouselProps> = ({item}) => {
        const [paginationIndex , setPaginationIndex] = useState(0);
    
    return(
        <View style={[Style.divCaroussel,Style.centered , { width: width  }]} >  
            <Image
                style={Style.gameImage}
                source={item.image}
            />
            <View style={[Style.gameInfoOverlay, Style.centered]}>
                <Text style={[Style.textWhite, Style.titleLarge, Style.fontSerif]}>
                    {item.title}
                </Text>
                <Text  style={[Style.textWhite, Style.textXSmall, Style.fontSerif]}>
                    Ce mode de Jeu oppose deux joueurs dans un duek chronométré.
                </Text>                    
            </View>
        </View>
    )
}

export default Carousel;