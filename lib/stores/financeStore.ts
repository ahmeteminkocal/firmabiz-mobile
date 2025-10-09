import { create } from 'zustand';

export type Section = 'wired' | 'crypto' | 'other';
export type TransactionType = 'withdrawal' | 'deposit';

interface FinanceState {
    section: Section;
    type: TransactionType;
    setParams: ({section, type}: FinanceParams) => void;
}

type FinanceParams = {
    section: Section;
    type: TransactionType;
};

export const useFinanceStore = create<FinanceState>()((set) => ({
    section: 'wired',
    type: 'withdrawal',
    setParams: ({section, type}: FinanceParams) => {
        set({section: section , type: type});
    }
}));