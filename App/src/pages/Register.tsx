import { View, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, ActivityIndicator } from "react-native"
import  { Style } from "../styles/Style";
import CustomInput from "../components/ui/CustomInput";
import CustomButton from "../components/ui/CustomButton";
import { useState } from "react";
import { validationRegister } from "../utils/validation";
import CustomHeader from "../components/ui/CustomHeader";
import SwitchToggle from "../components/ui/SwitchToggle";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MainStackParamList } from "navigation/StackNavigator";
import CustomSelect from "../components/ui/CustomSelect";
import CustomeDate from "../components/ui/CustomeDate";

interface FormDataType {
    pseudo : string;
    age : string; //need conversion into number 
    mdp : string;
    confirmMdp : string;
    nationality: string;
    team: string
}

interface FormErrorType {
    pseudo ?: string;
    age ?: string;
    mdp ?: string;
    confirmMdp ?: string;
    nationality ?: string;
    team ?: string
}


const Register = () => {
    // 1. Définis des petites listes de test en haut de ton fichier Register (hors du composant)
    const countriesOptions = [
        { label: 'France', value: 'FR' },
        { label: 'Algérie', value: 'DZ' },
        { label: 'Nigéria', value: 'NG' },
    ];

    const clubsOptions = [
        { label: 'Paris Saint-Germain', value: 'PSG' },
        { label: 'Olympique de Marseille', value: 'OM' },
        { label: 'Real Madrid', value: 'RM' },
    ];
    const navigation = useNavigation<NavigationProp<MainStackParamList>>()
    const [formData, setFormData] = useState<FormDataType>({
        pseudo: '',
        age: '',
        mdp: '',
        confirmMdp: '',
        nationality: '',
        team: ''
    })
    const [errors, setErros] = useState<FormErrorType>({})
    const [loading, setLoading] = useState(false);
    const handleRegister = async () => {

        if (loading) return;
        setLoading(true);
        const validation = validationRegister(formData)
        console.log("StepOne")
        if(!validation.isValid){
            console.log("Les erreurs de validation sont :", validation.errors)
            setErros(validation.errors)
            setLoading(false);
            return;
        }
        console.log("StepTwo")
        // Simulation d'un appel réseau (API) avant la navigation
        try {
            // Remplacer ce setTimeout par votre vrai appel API (ex: axios ou fetch)
            await new Promise(resolve => setTimeout(resolve, 2000));
            console.log("StepThree")
            // Si tout est bon, on navigue
            navigation.navigate('UserPicture')
        } catch (error) {
            console.log("AnotherWay")
            console.error(error);
        } finally {
            setLoading(false)
            console.log("AnotherWayTwo")
        }
    }

    // Récupère l'année en cours (ici 2026)
    const currentYear = new Date().getFullYear(); 

    // Fonction pour calculer l'âge à partir de la chaîne "JJ/MM/AAAA"
    const getAgeLabel = (dateString: string) => {
        if (!dateString) return "0 an";
    
    // On extrait l'année de la chaîne "JJ/MM/AAAA"
    const parts = dateString.split('/');
    const birthYear = parseInt(parts[2], 10);
    
    const age = currentYear - birthYear;
    return `${age} ${age > 1 ? 'ans' : 'an'}`;
};

    return(
        <KeyboardAvoidingView
            style={{flex : 1}}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                 <View style={[Style.centered, {flex : 1}]}>    
                    <CustomHeader
                        title="Inscription"
                        showIconRight={false}
                        textHeader="Veuillez Remplir les champs ci-dessous pour vous enregistrer"
                        onBackPress={ () => navigation.navigate('Login') }
                    />
                    <ScrollView 
                            style={[Style.stepContainer, Style.pt30]}
                            showsVerticalScrollIndicator={false}
                            keyboardShouldPersistTaps="handled"
                            contentContainerStyle={{ paddingBottom: 80 }}
                    >
                        <View style={{
                            marginBottom: 10
                        }}>
                            <SwitchToggle/>
                        </View>
                        <View style={Style.rowGap}>
                            <View style={Style.mainContainer}>
                                <CustomInput
                                    label="Votre pseudo" 
                                    value={formData.pseudo}
                                    onChangeText={ (text) => setFormData({...formData, pseudo: text})}
                                    error={errors.pseudo}
                                />
                            </View>
                            <View style={Style.mainContainer}>
                                <CustomSelect 
                                    label="Nationalité..."
                                    value={formData.nationality}   
                                    options={clubsOptions}
                                    onValueChange={ (val) => setFormData({...formData, nationality: val}) }                 
                                />
                            </View>
                        </View>
                        <CustomeDate
                            label={`date de naissance (${getAgeLabel(formData.age)})`}
                            value={formData.age}
                            onChangeDate={(formattedDate) => setFormData({ ...formData, age: formattedDate})}       
                        />
                        <CustomSelect 
                            label="Club..."  
                            value={formData.team}
                            options={countriesOptions}    
                            onValueChange={ (val) => setFormData({...formData, team: val}) }                    
                        />
                        <CustomInput
                            label="Mot de passe"
                            value={formData.mdp}
                            onChangeText={ (text) => setFormData({...formData, mdp: text})}
                            error={errors.mdp}
                            secureTextEntry={true}
                            isPassword={true}
                        />
                        <CustomInput
                            label="Confirmation Mot de passe"
                            value={formData.confirmMdp}
                            onChangeText={ (text) => setFormData({...formData, confirmMdp: text})}
                            error={errors.confirmMdp}
                            secureTextEntry={true}
                            isPassword={true}
                        />
                    </ScrollView>
                     <View style={{
                        paddingHorizontal : 20,
                        paddingBottom: 25,
                        width: "100%",
                    }}>
                        <CustomButton
                                //title= {loading ? <ActivityIndicator size="large"/> : "Se connecter"}
                                title="Se connecter"
                                onPress={handleRegister} 
                                isLoading={loading}
                        />
                    </View>
            </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default Register;