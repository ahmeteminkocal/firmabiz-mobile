import { get, put } from '@/lib/services/apiClient';
import { create } from 'zustand';
import { setAuthToken } from '@/lib/services/storageClient';

interface AuthState {
    loading: boolean;
    error: boolean;
    data?: User;
    login: (payload: LoginPayload) => Promise<void | undefined>;
}

export const useAuthStore = create<AuthState>()((set) => ({
    loading: false,
    error: false,

    login: async (payload: LoginPayload): Promise<void | undefined> => {
        try {
            set({loading: true, error: false});
            let response: LoginResponse = await put<LoginResponse>('/login', payload);
            set({loading: false, data: response.user});
            setAuthToken(response.token);
            
        } catch (error) {
            set({loading: false, error: true, data: undefined});
        }
    }
}))


interface User {
    id: string;
    name: string;
    email: string;
}


interface LoginPayload {
    email: string;
    password: string;
}

interface LoginResponse {
    user: User;
    token: string;
}

export { User, LoginPayload, LoginResponse }