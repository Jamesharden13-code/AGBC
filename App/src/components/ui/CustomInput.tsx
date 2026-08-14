import {Animated, TextInput, TextInputProps, TouchableOpacity } from "react-native";
import  { Style } from "../../styles/Style";
import { useRef, useState } from "react";
import GradientIcon from "../../components/common/GradientIcon";
import BaseInputWrapper from "../../components/common/BaseInputWrapper";

interface CustomInputProps extends TextInputProps {
    label: string;
    error?: string;
    isPassword ?: boolean
}

const CustomInput: React.FC<CustomInputProps> = ({
        onChangeText,
        isPassword,
        value,
        label,
        onPress,
        secureTextEntry = false,
        error = '',
        ...props
}) => {
    const [isFocused , setIsFocused] = useState(false);
    // Conversion de value en string pour la comparaison
    const stringValue = String(value);
    const isActive = isFocused || (stringValue !== '' && stringValue !== undefined)
    const [hidePassword, setHidePassword] = useState(true);

    return(
        <>
        <BaseInputWrapper label={label} error={error} isActive={isActive}>
            <TextInput
                            {...props}
                            onChangeText={onChangeText}
                            value={stringValue}
                            secureTextEntry={isPassword ? hidePassword : false}
                            //secureTextEntry= {secureTextEntry}
                            style={[Style.fontSerif, {left: 14, height: 50, paddingTop: (isFocused || value !== '') ? 12 : 0}]}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                />
                    {
                        isPassword ? (
                            <TouchableOpacity 
                                style={Style.iconContainer}
                                onPress={() => setHidePassword(!hidePassword)}
                            >
                                <GradientIcon 
                                    name={hidePassword ? "eye-slash" : "eye"}
                                    size={20}
                                    type="font-awesome"
                                />
                            </TouchableOpacity>
                        ) : null
                    }
        </BaseInputWrapper>
        </>
        
    )
}

export default CustomInput;