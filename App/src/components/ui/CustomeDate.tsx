import {TextInputProps, TextInput } from "react-native";
import  { Style } from "../../styles/Style";
import { useState } from "react";
import DatePicker from 'react-native-date-picker';
import { formatDate } from "../../constants/InputConstants";
import BaseInputWrapper from "../../components/common/BaseInputWrapper";

interface CustomeDateProps extends TextInputProps {
    label: string;
    error?: string;
    onChangeDate: (formattedDate: string) => void;
}

const CustomeDate: React.FC<CustomeDateProps>  = ({
        onChangeText,
        value,
        label,
        onPress,
        secureTextEntry = false,
        error = '',
        onChangeDate,
        ...props
}) => {

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [isFocused , setIsFocused] = useState(false);
    // Conversion de value en string pour la comparaison
    const stringValue = value ? String(value) : '';
    const isActive = isFocused || stringValue.trim() !== ''
   

    return(
       <>
             <BaseInputWrapper error={error} isActive={isActive} label={label}>
                <TextInput
                                {...props}
                                onChangeText={onChangeText}
                                value={stringValue}
                                style={[Style.fontSerif, {left: 14, height: 50, paddingTop: (isFocused || value !== '') ? 12 : 0}]}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                                onPress={() => setOpen(true)}
                        />
                        <DatePicker
                                mode="date"
                                modal
                                open={open}
                                date={date}
                                onConfirm={(selectedDate) => {
                                setOpen(false)
                                setDate(selectedDate)
                                console.log('response date: ' + date)
                                setIsFocused(true)
                                //formatted date
                                const formatted = formatDate(selectedDate)
                                onChangeDate(formatted)
                                }}
                                onCancel={() => {
                                setOpen(false)
                                setIsFocused(false)
                                }}
                        />
             </BaseInputWrapper>
        </>
    )
}

export default CustomeDate;