import * as SecureStore from 'expo-secure-store';


export const getAuthToken = async () => SecureStore.getItemAsync(_AUTH_TOKEN);

export const setAuthToken = async (value: string) => SecureStore.setItemAsync(_AUTH_TOKEN, value);

const _AUTH_TOKEN = 'AUTH_TOKEN'