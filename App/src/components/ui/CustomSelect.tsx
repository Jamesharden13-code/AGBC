import { Animated, TextInputProps } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import Dropdown from 'react-native-input-select';
import BaseInputWrapper from "../../components/common/BaseInputWrapper";

interface CustomSelectProps extends TextInputProps {
    label: string;
    error?: string;
    value?: any;
    // options?: {label : string, value: any}[];
    options: {label : string, value: any}[];
    onValueChange?: (value: any) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
    label,
    error = '',
    value,
    options,
    onValueChange,
    //options = []
}) => {

    //const [club, setClub] = useState<any>(value);
    const [selectedValue, setSeletedValue] = useState<any>(value)

    // Synchronise l'état local si le "value" du parent change (ex: reset de formulaire)
    useEffect(() =>{
        setSeletedValue(value)
    }, [value])


    const stringValue = String(value);
    // const isActive = club !== undefined && club !== null && club !== '';
    const isActive = selectedValue !== undefined && selectedValue !== null && selectedValue !== '';
    const animatedValue = useRef(new Animated.Value(value ? 1 : 0)).current;    

    return(
        <>
        <BaseInputWrapper label={label} error={error} isActive={isActive}>
            <Dropdown
                    placeholder=""
                    options={options}
                    //selectedValue={club}
                    selectedValue={selectedValue}
                    onValueChange={(val: any) => {
                        //setClub(val);
                        setSeletedValue(val);
                        if (onValueChange) onValueChange(val);
                    }}
                    dropdownStyle={{
                            borderWidth: 0.2,
                            backgroundColor: "#FFF",
                            minHeight: 50,
                    }}
                    dropdownContainerStyle={{
                        justifyContent: "center",
                        alignItems: "center",
                        minHeight: 50,
                    }}
                    dropdownIconStyle={{
                    top: undefined, 
                }}
            />
        </BaseInputWrapper>
        </>
    );
}

export default CustomSelect;