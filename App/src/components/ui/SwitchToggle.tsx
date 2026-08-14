import { Text, TouchableOpacity } from "react-native";
import  { Style, COLORS } from "../../styles/Style"
import LinearGradient from "react-native-linear-gradient";
import { useState } from "react";
import { SwitchToggleStyle } from "../../styles/SwitchToggleStyle";
import GradientIcon from "../common/GradientIcon";


interface ToggleButtonProps {
    type : 'H'| 'F';
    label : string;
    icon : string;
    onPress : () => void;
    isActive : boolean
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ type, label, icon, onPress, isActive }) => {
        //const isActive = gender === type;
        return(
            <TouchableOpacity 
                        style={{ flex: 1 }}
                        //onPress={() => setGender(type)}
                        onPress={onPress}
                        disabled={isActive}
                        activeOpacity={0.7} // Optionnel : adoucit l'effet de l'opacité
                    >
                        <LinearGradient
                            colors={isActive ? COLORS.active : COLORS.inactive}
                            style={[ Style.centered,SwitchToggleStyle.gradientBtn , Style.rowGap]}
                        >
                            <GradientIcon 
                                name={icon}
                                type="font-awesome"
                                size={20}
                                colors={COLORS.inactive}
                            />
                            <Text style={[ isActive ? Style.textWhite : Style.textGray , Style.fontSerif]}>
                                {label}  
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
        )
}

interface SwitchToggleProps {
    onGenderChange?: (gender: 'H' | 'F') => void;
}

const SwitchToggle: React.FC<SwitchToggleProps> = ({onGenderChange}) =>{
    const [gender, setGender] = useState<'H' | 'F'>('H'); 
    const handlePress = (type: 'H' | 'F') => {
        setGender(type);
        if (onGenderChange) {
            onGenderChange(type);
        }
    };
    return(
        <LinearGradient 
            colors={['#D1D1D1', '#AFAFAF']}
            style={[SwitchToggleStyle.container, Style.mb10, Style.row, Style.centered]}>
                    <ToggleButton type="H" label="Homme" icon="mars" isActive={gender === 'H'} onPress={ () => handlePress('H')}/>
                    <ToggleButton type="F" label="Femme" icon="venus" isActive={gender === 'F'} onPress={ () => handlePress('F')}/>
        </LinearGradient>
    )
}

export default SwitchToggle;