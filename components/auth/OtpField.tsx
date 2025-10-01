import { Text } from '@/components/atoms/text';
import { THEME } from "@/lib/theme";
import { StyleSheet } from "react-native";
import { OtpInput } from "react-native-otp-entry";

export function OtpField({
    digits = 6,
    value,
    onChange,
    error
} :
    {digits?: number, value: string, onChange: (text: string) => void, error: string | undefined}) {
    return (
      <>
        <OtpInput
          numberOfDigits={digits}
          focusColor="blue"
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
              pinCodeContainerStyle: error? styles.errorPinCodeContainer : styles.pinCodeContainer,
              pinCodeTextStyle: error? styles.errorPinCodeText : styles.pinCodeText,
              focusedPinCodeContainerStyle: error? styles.errorPinCodeContainer : styles.activePinCodeContainer,
              placeholderTextStyle: styles.placeholderText,
              filledPinCodeContainerStyle: error? styles.errorPinCodeContainer : styles.filledPinCodeContainer,
              disabledPinCodeContainerStyle: styles.disabledPinCodeContainer,
          }}/>  
        {error && <Text className='ml-1 text-xs text-destructive'>{error}</Text>}
      </>
    )
}

export default OtpField

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pinCodeContainer: {
    width: 44,
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: THEME.input, 
    justifyContent: "center",
    alignItems: "center",
  },
  errorPinCodeContainer: {
    width: 44,
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: THEME.destructive, 
    justifyContent: "center",
    alignItems: "center",
  },
  pinCodeText: {
    fontSize: 20,
    color: THEME.label, 
  },
  errorPinCodeText: {
    fontSize: 20,
    color: THEME.destructive, 
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
});

