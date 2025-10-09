import { create } from 'zustand';
import { FinanceManagement } from '../types';

interface FinanceManagementState {
    section: FinanceManagement,
    setSection: (section: FinanceManagement) => void
}

export const useManagementStore = create<FinanceManagementState>()((set) => ({
    section: FinanceManagement.WireTransferSettings,
    setSection: (section: FinanceManagement) => {
        set({section: section});
    }
}));