import { ImageSourcePropType } from "react-native";

export const Assets = {
    logo: require('../assets/images/logo.png'),
    QNB: require('../assets/images/QNB.png')
} satisfies Record<string, ImageSourcePropType>;