import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { User } from '../stores/authStore';

// Keys
const _USER_KEY = 'app_user';
const _ABILITIES_KEY = 'user_abilities';
const _ROLES_KEY = 'user_roles';

//
// USER
//
export const saveUser = async (user: User): Promise<void> => {

  const serialized = JSON.stringify({
    ...user,
    expiryDate: user.expiryDate.toISOString(),
  });

  await SecureStore.setItemAsync(_USER_KEY, serialized);
};

export const getUser = async (): Promise<User | null> => {
  const stored = await SecureStore.getItemAsync(_USER_KEY);
  if (!stored) return null;

  try {
    const parsed = JSON.parse(stored);

    return {
      ...parsed,
      expiryDate: new Date(parsed.expiryDate),
    } as User;
  } catch (e) {
    console.error('Failed to parse stored user', e);
    return null;
  }
};

export const deleteUser = async (): Promise<void> => {
  try {
    await SecureStore.deleteItemAsync(_USER_KEY);
    await AsyncStorage.removeItem(_ABILITIES_KEY);
    await AsyncStorage.removeItem(_ROLES_KEY);
  } catch (error) {
    return;
  }
};

//
// ABILITIES
//
export const setAbilities = async (abilities: string[]): Promise<void> => {
  await AsyncStorage.setItem(_ABILITIES_KEY, JSON.stringify(abilities ?? []));
};

export const getAbilities = async (): Promise<string[] | null> => {
  const stored = await AsyncStorage.getItem(_ABILITIES_KEY);
  if (!stored) return null;
  try {
    return JSON.parse(stored) as string[];
  } catch {
    return null;
  }
};

//
//  ROLES
//
export const setRoles = async (roles: string[]): Promise<void> => {
  await AsyncStorage.setItem(_ROLES_KEY, JSON.stringify(roles ?? []));
};

export const getRoles = async (): Promise<string[] | null> => {
  const stored = await AsyncStorage.getItem(_ROLES_KEY);
  if (!stored) return null;
  try {
    return JSON.parse(stored) as string[];
  } catch {
    return null;
  }
};