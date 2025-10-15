import { failure, success } from '@/components/atoms/toast';
import { AxiosResponse } from 'axios';
import { create } from 'zustand';
import { post } from '../services/apiClient';
import { setAuthToken } from '../services/storageClient';

interface AuthState {
    loading: boolean;
    error: boolean;
    data?: User;
    loginPayload?: LoginPayload;
    login: (payload: LoginPayload, onSuccess?: () => void, onFailure?: () => void) => Promise<void | undefined>;
    verify: (payload: VerifyPayload, onSuccess?: () => void, onFailure?: () => void) => Promise<void | undefined>;
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
            set({loading: false, data: {name: response.data.user.name, email: response.data.user.email}, loginPayload: undefined});
            setAuthToken(response.data?.token?.plainTextToken);
            onSuccess?.();
        } catch (error) {
            set({loading: false, error: true});
            failure(`${error}`, false);
            onFailure?.();
        }
    }
}))


interface User {
    name: string;
    email: string;
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