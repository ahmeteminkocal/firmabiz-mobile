import { THEME } from "@/lib/theme";
import { StyleSheet } from "react-native";
import { OtpInput } from "react-native-otp-entry";

export function OtpField({
    digits = 6,
    value,
    onChange
} :
    {digits?: number, value: string, onChange: (text: string) => void}) {
    return (
      <OtpInput
        numberOfDigits={digits}
        focusColor="blue"
        // autoFocus={false}
        hideStick={true}
        blurOnFilled={false}
        disabled={false}
        type="numeric"
        secureTextEntry={false}
        focusStickBlinkingDuration={500}
        onTextChange={onChange}
        onFilled={(text) => {}}
        textInputProps={{
            accessibilityLabel: "One-Time Password",
            value: value
        }}
        textProps={{
            accessibilityRole: "text",
            accessibilityLabel: "OTP digit",
            allowFontScaling: false,
        }}
        theme={{
            containerStyle: styles.container,
            pinCodeContainerStyle: styles.pinCodeContainer,
            pinCodeTextStyle: styles.pinCodeText,
            focusStickStyle: styles.focusStick,
            focusedPinCodeContainerStyle: styles.activePinCodeContainer,
            placeholderTextStyle: styles.placeholderText,
            filledPinCodeContainerStyle: styles.filledPinCodeContainer,
            disabledPinCodeContainerStyle: styles.disabledPinCodeContainer,
        }}
    />  
    )
}

export default OtpField

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12, //
  },
  pinCodeContainer: {
    width: 56,
    height: 56,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: THEME.input, 
    justifyContent: "center",
    alignItems: "center",
  },
  pinCodeText: {
    fontSize: 22,
    fontWeight: "600",
    color: "black", 
  },
  focusStick: {
    width: 2,
    height: 28,
    backgroundColor: THEME.primary, 
  },
  activePinCodeContainer: {
    borderColor: THEME.primary, 
  },
  placeholderText: {
    fontSize: 22,
    color: THEME.input,
  },
  filledPinCodeContainer: {
    borderColor: THEME.input, 
  },
  disabledPinCodeContainer: {
    borderColor: THEME.input,
    backgroundColor: THEME.muted,
  },
  errorPinCodeContainer: {
    borderColor: THEME.destructive, 
  },
  errorPinCodeText: {
    color: THEME.destructive,
  },
});

