import { View, Text, ImageBackground, Image, KeyboardAvoidingView } from "react-native"
import { useState } from "react";
import  { Style } from "../styles/Style";
import CustomInput from "../components/ui/CustomInput";
import CustomButton from "../components/ui/CustomButton";
import { StackScreenProps } from "@react-navigation/stack";
import { ScrollView } from "react-native-gesture-handler";

// type Props = StackScreenProps<any, 'Login'>

type Props = StackScreenProps<any>

interface FormDataType {
    pseudo : string;
    mdp: string
}

interface FormErrorType {
    pseudo ?: string;
    mdp ?: string
}

const Login: React.FC<Props> = ({ navigation }) => {

    const [formData, setFormData] = useState<FormDataType>({
            pseudo: '',
            mdp: '',
        })
    const [errors, setErros] = useState<FormErrorType>({})

    return(
        <ImageBackground
            source={require('../assets/image/backgroundLogin.jpeg')}
            resizeMode="cover"
            style={{flex: 1}}
        >
            <View 
                style={{ flex: 1 }}
            >
                <View
                    style={[Style.mainContainer, Style.centered]}
                >
                        <View style={[{width: '90%'}, Style.centered]}>
                            <Image
                                source={require('../assets/image/logoAgbc-two.png')}
                                style={Style.largeLogo}
                                resizeMode="contain" 
                            />
                            <CustomInput 
                                label="Mon pseudo"
                                onChangeText={ (text) => setFormData({...formData, pseudo: text})}
                                value={formData.pseudo}
                                error={errors.pseudo}
                            />
                            <CustomInput 
                                label="Mot de passe"
                                onChangeText={ (text) => setFormData({...formData, mdp: text})}
                                value={formData.mdp}
                                error={errors.mdp}
                                secureTextEntry={true}
                                isPassword={true}
                            />
                            <CustomButton
                                title="Continuer"
                                onPress={() => navigation.replace("MainApp")}
                            />
                            <Text style={[Style.textWhite, Style.mb10]}>Mot de passe oublié ?</Text>
                            <CustomButton
                                title="S'inscrire"
                                onPress={() => navigation.replace("Register")}
                            />
                            <Text style={[Style.textWhite, Style.mb10]}>Ou s'inscrire avec: </Text>
                            <View style={Style.rowGap}>
                                <View style={[Style.iconCircle, Style.centered]}>
                                    <Image
                                        resizeMode="contain"
                                        style={[Style.smallImg]}
                                        source={require('../assets/image/ggl.png')}
                                    />
                                </View>
                                <View style={[Style.iconCircle, Style.centered]}>
                                    <Image
                                        resizeMode="contain"
                                        style={[Style.smallImg]}
                                        source={require('../assets/image/fb.png')}
                                    />
                                </View>
                            </View>
                        </View>
                {/* </View> */}
                </View>
            </View>
        </ImageBackground>
    )
}

export default Login;