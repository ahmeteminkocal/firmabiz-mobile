import { failure, success } from '@/components/atoms/toast';
import { AxiosResponse } from 'axios';
import { create } from 'zustand';
import { post } from '../services/apiClient';
import { deleteUser, getUser, saveUser, setAbilities, setRoles } from '../services/storageClient';

interface AuthState {
    loading: boolean;
    error: boolean;
    user?: User;
    loginPayload?: LoginPayload;
    login: (payload: LoginPayload, onSuccess?: () => void, onFailure?: () => void) => Promise<void | undefined>;
    verify: (payload: VerifyPayload, onSuccess?: () => void, onFailure?: () => void) => Promise<void | undefined>;
    isAuthenticated: (onSuccess?: () => void, onFailure?: () => void) => Promise<void | undefined>;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
    loading: false,
    error: false,

    login: async (payload: LoginPayload, onSuccess?: () => void, onFailure?: () => void): Promise<void | undefined> => {
        try {
            set({loading: true, error: false, loginPayload: undefined});
            const response: AxiosResponse = await post('/user/login', payload);
            set({loading: false, loginPayload: payload});
            success(response.data?.message, false);
            onSuccess?.()
        } catch (error) {
            set({loading: false, error: true});
            failure(`${error}`, false);
            onFailure?.();
        }
    },

    verify: async (payload: VerifyPayload, onSuccess?: () => void, onFailure?: () => void): Promise<void | undefined> => {
        try {
            set({loading: true, error: false});
            let response: any = await post('/user/login', payload);
            const data = getUserData(response)
            set({loading: false, user: data.user, loginPayload: undefined});
            console.log(JSON.stringify(response.data.token, null, 4));
            saveUser(data.user);
            setAbilities(data.abilities);
            setRoles(data.roles);
            onSuccess?.();
        } catch (error) {
            set({loading: false, error: true});
            failure(`${error}`, false);
            onFailure?.();
        }
    },

    isAuthenticated: async (onSuccess?: () => void, onFailure?: () => void): Promise<void | undefined> => {
        try {
            const user = await getUser();
            if (user?.token) {
                if(user.expiryDate > new Date()) {
                    set({user: user})
                    onSuccess?.();
                    return;
                } else {
                    await deleteUser();
                }
            }
            onFailure?.();
        } catch (error) {
            onFailure?.();
        }
    },

    logout: () => set({user: undefined})
}))

function getUserData(response: any) {
    return {
        user: {
            name: response.data.user.name, 
            email: response.data.user.email,
            token: response.data.token.plainTextToken,
            expiryDate: new Date(response.data.token.accessToken.expires_at),
        },
        abilities: response.data.token.accessToken.abilities,
        roles: response.data.role_list
    }
} 


export interface User {
    name: string;
    email: string;

    token: string;
    expiryDate: Date;
}


interface LoginPayload {
    email: string;
    password: string;
}

interface VerifyPayload {
    email: string;
    password: string;
    tfa: string
}