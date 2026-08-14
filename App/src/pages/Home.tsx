import React from "react";
import { View, Text} from "react-native";
import TopNavigation from "../navigation/TopNavigation";
import  { Style } from "../styles/Style";
import { Games } from "../data/Game";
import Carousel from "../components/ui/Carousel";
import Pagination from "../components/ui/Pagination";
import Animated, { useSharedValue, useAnimatedScrollHandler } from "react-native-reanimated";
import PlayerCard from "../components/cards/PlayerCard";
import { FakeDataPlayerCard } from "../data/FakeDataPlayerCard";
import { StackScreenProps } from "@react-navigation/stack";
import { MainStackParamList } from "navigation/StackNavigator";

type Props = StackScreenProps<MainStackParamList, 'Accueil'>
const Home = ({ navigation }: Props) => {

    const scrollX = useSharedValue(1)
    const onScrollHandler = useAnimatedScrollHandler({
                onScroll: (e) => {
                    scrollX.value = e.contentOffset.x; 
                }
            });

    return(
        <View style={Style.screenContainer}>
             <TopNavigation dataShowSearch={true} dataNavigator={navigation} />
             <Animated.FlatList
                data={Games}
                keyExtractor={ (i) => i.id.toString() }
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                onScroll={onScrollHandler}
                scrollEventThrottle={16}
                // renderItem={Slider}
                renderItem={({ item }) => <Carousel item={item} />}
                style={{ flexGrow: 0 }} // ✅ empêche de s’étendre verticalement
             />
            
            <Pagination
                items={Games} 
                scrollX={scrollX}
            />
            <View style={[Style.listSection, Style.centered]}>
                <Text style={[ Style.fontSerif, Style.textCenter ]}>
                    Listes des joueurs en cours pour la Compétition casse Ferme
                </Text>
                    <Animated.FlatList 
                        data={FakeDataPlayerCard}
                        keyExtractor={ (i) => i.id.toString() }
                        showsVerticalScrollIndicator={true}
                        renderItem={({ item }) => (
                            <PlayerCard item={item} />
                        )}
                        ItemSeparatorComponent={() => (
                            <View style={{ height: 15 }} />  // espace vertical de 15px
                        )}
                        contentContainerStyle={{
                            paddingBottom: 130, // espace en bas pour éviter que le dernier soit collé
                        }}
                        nestedScrollEnabled={true}  // ✅ important quand on a un scroll dans une vue déjà scrollable
                        style={{ flex: 1 }}         // ✅ permet de prendre tout l’espace restant et scroller
                        scrollEventThrottle={16}
                        
                    />
            </View>
        </View>
    )
}

export default Home;