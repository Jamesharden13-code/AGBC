import MaskedView from "@react-native-masked-view/masked-view";
import Gradient from "./Gradient";
import { Icon } from "react-native-elements";

interface GradientIconProps {
    name: string;
    size: number;
    type: string;
    colors?: string[];
    onPress?:  () => void;
}

const GradientIcon: React.FC<GradientIconProps> = ({name , size, type, onPress, colors}) => {
    return(
        <MaskedView
                    maskElement={
                        <Icon
                            name={name}
                            size={size}
                            type={type}
                            color="black"
                            onPress={onPress}
                        />
                    }
                >
                    <Gradient
                        style={{ alignSelf: "flex-start" }}
                        colors={colors}
                    >
                        <Icon 
                            name={name}
                            size={size}
                            type={type}
                            color="transparent"
                            onPress={onPress}
                        />
                    </Gradient>
                </MaskedView>
    )
}

export default GradientIcon;