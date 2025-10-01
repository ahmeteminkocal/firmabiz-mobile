import { Button } from '@/components/atoms/button';
import { Text } from '@/components/atoms/text';
import { verifySchema } from '@/lib/services/validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'expo-router';
import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { type TextStyle, View } from 'react-native';
import OtpField from './OtpField';

const RESEND_CODE_INTERVAL_SECONDS = 30;

const TABULAR_NUMBERS_STYLE: TextStyle = { fontVariant: ['tabular-nums'] };

export function VerifyEmailForm() {

  const router = useRouter();

  const { countdown, restartCountdown } = useCountdown(RESEND_CODE_INTERVAL_SECONDS);

  const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm({
      resolver: yupResolver(verifySchema)
  });


  return (
    <View className="flex-1 rounded-t-[35px] bg-background w-full self-stretch gap-6 p-8">
      <View className="gap-6">
        <View className="gap-4">
          <Text className='text-xs text-label'>Code</Text>
          <Controller
            control={control}
            name='code'
            render={({field: { onChange, value } }) => (
              <>
                <OtpField
                  value={value}
                  onChange={onChange}
                  error={errors.code?.message}
                />
              </>
              
            )}
          />
          <Button
            variant="link"
            disabled={countdown > 0}
            onPress={() => {
              // TODO: Resend code
              restartCountdown();
            }}>
            <Text className="text-center text-xs">
              Didn&apos;t receive the code? Resend{' '}
              {countdown > 0 ? (
                <Text className="text-xs" style={TABULAR_NUMBERS_STYLE}>
                  ({countdown})
                </Text>
              ) : null}
            </Text>
          </Button>
        </View>
        <View className="gap-3">
          <Button className="w-full" onPress={
            handleSubmit(data => {
              router.dismissAll()
              router.push('/(protected)/(tabs)/home')
            })}>
            <Text>Continue</Text>
          </Button>
          <Button
            variant="link"
            className="mx-auto"
            onPress={() => {
              router.back()
            }}>
            <Text>Cancel</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}

function useCountdown(seconds = 30) {
  const [countdown, setCountdown] = React.useState(seconds);
  const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);

  const startCountdown = React.useCallback(() => {
    setCountdown(seconds);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, [seconds]);

  React.useEffect(() => {
    startCountdown();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startCountdown]);

  return { countdown, restartCountdown: startCountdown };
}
