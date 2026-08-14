import GradientIcon from "../common/GradientIcon";
import { View, Text, TouchableOpacity } from "react-native";
import  { Style } from "../../styles/Style";


interface CustomHeaderProps {
    title : string
    showIconRight? : boolean
    textHeader: string
    onBackPress?: () => void;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ title, showIconRight = false, textHeader, onBackPress}) => {
    return(
          <View style={[Style.centered, Style.pt10]}>
                 <View style={{ alignItems: 'center', width: '100%'}}>
                    <View style={[Style.row, {width: '100%', alignItems: 'center'}]}>
                        <TouchableOpacity onPress={onBackPress}>
                            <View style={{ width: 50, alignItems: 'flex-start', marginLeft: 20 }}>
                                <GradientIcon
                                    name="arrow-left"
                                    size={20}
                                    type="font-awesome"
                                />
                            </View>
                        </TouchableOpacity>
                        <View style={{ flex: 1, alignItems: 'center'}}>
                            <Text style={[Style.titleMs, Style.fontSerif]}>{title}</Text>
                        </View>
                        <TouchableOpacity>
                            <View style={{ width: 50, alignItems: 'flex-end', marginRight: 20 }}>
                                {
                                    showIconRight ? 
                                        <GradientIcon
                                            name="close"
                                            size={20}
                                            type="font-awesome"   
                                        />
                                        :   null
                                }
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[Style.centered, { width: '80%'}]}>
                        <Text style={[Style.pt10, Style.fontSerif, {textAlign: 'center'}]}>{textHeader}</Text>
                    </View>
                </View>
          </View>
    )
}
 export default CustomHeader;