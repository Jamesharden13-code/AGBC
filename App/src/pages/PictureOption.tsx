import { View, Text, Image, Alert } from "react-native";
import { Style, COLORS } from "../styles/Style";
import CustomButton from "../components/ui/CustomButton";
import CustomHeader from "../components/ui/CustomHeader";
import { useState } from "react";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

const PictureOption = ({navigation}) => {

    const [ imageUri, setImageUri ] = useState(null)
    const [loading, setLoading] = useState(false);

    // Configuration commune pour la caméra et la galerie
    const options = {
        mediaType: 'photo',
        quality: 0.7,
        includeBase64: false,
    };

    const openGallery = () => {
        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log("L'utilisateur a annulé");
            } else if (response.errorCode) {
                Alert.alert("Erreur", response.errorMessage);
            } else if (response.assets && response.assets.length > 0) {
                setImageUri(response.assets[0].uri);
            }
        })
    }

    const takePicture = () => {
        launchCamera(options, (response) =>{
            if (response.didCancel) {
                console.log("L'utilisateur a annulé");
            } else if (response.errorCode) {
                Alert.alert("Erreur", response.errorMessage);
            } else if (response.assets && response.assets.length > 0) {
                setImageUri(response.assets[0].uri);
            }
        })
    }
 
    // Boîte de dialogue de sélection
    const showImageOptions = () => {
        Alert.alert(
            "Options de photo",
            "Choisissez d'où provient votre photo de profil :",
            [
                { text: "Prendre une photo", onPress: takePicture },
                { text: "Choisir depuis la galerie", onPress: openGallery },
                { text: "Annuler", style: "cancel" }
            ]
        );
    };


    return(
        <View style={{ flex: 1}}>
                <CustomHeader
                    title="Photo de profil"
                    showIconRight={true}
                    textHeader="Cette partie est optionnelle"
                    onBackPress={ () => navigation.goBack() }
                />  
            <View style={[Style.centered, {flex: 1}]}>
                <Image
                    // source={require('../assets/image/backgroundLogin.jpeg')}
                    // style={[Style.bigCircle]}
                    // resizeMode="cover" 
                    source={imageUri ? { uri: imageUri } : require('../assets/image/backgroundLogin.jpeg')}
                    style={[Style.bigCircle]}
                    resizeMode="cover"
                />
            </View>
            <View style={{
                paddingHorizontal : 20,
                paddingBottom: 20,
                width: "100%"
            }}>
                {/* <CustomButton
                        title="Ajout Photo"
                        onPress={() => navigation.replace("MainApp")}
                /> */}
                <CustomButton
                    title={imageUri ? "Continuer" : "Ajout Photo"} 
                    onPress={() => {
                        if (!imageUri) {
                            showImageOptions();
                        } else {
                            navigation.replace("MainApp");
                        }
                    }}
                />
            </View>
        </View>

    )
}

export default PictureOption;