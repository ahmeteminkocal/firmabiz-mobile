import { ImageSourcePropType } from "react-native";

export const Assets = {
    logo: require('../assets/images/logo.png'),
    // success: require('../assets/images/success.svg'),
    // failure: require('../assets/images/failure.svg'),
    // pending: require('../assets/images/pending.svg'),
} satisfies Record<string, ImageSourcePropType>;