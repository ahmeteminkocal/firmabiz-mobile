import MainAppHeader from '@/components/ui/MainAppHeader';
import { useNavigation } from 'expo-router';
import { useEffect } from "react";

type UseAppHeaderProps = {
  title: string;
  bottom?: boolean;
};

export function useAppHeader({ title, bottom = true }: UseAppHeaderProps) {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <MainAppHeader title={title} bottom={bottom} />,
    });
  }, [navigation, title, bottom]);
}