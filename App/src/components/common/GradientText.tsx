import MaskedView from "@react-native-masked-view/masked-view";
import Gradient from "./Gradient";
import { Text, StyleProp, TextStyle } from "react-native";

interface GradientTextProps {
    text: string;
    style: StyleProp<TextStyle>
}

const GradientText: React.FC<GradientTextProps> = ({ text, style }) => {
    return(
            <MaskedView maskElement={<Text style={[style, { backgroundColor: 'transparent', flexDirection: 'row' }]}>{text}</Text>}>
                <Gradient
                    style={{ alignSelf: "flex-start" }}
                >
                    <Text style={[style,{ opacity: 0 }]}>{text}</Text>
                </Gradient>
            </MaskedView>
    )
}

export default GradientText;