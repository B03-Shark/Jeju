import { create } from 'zustand';

const useUserStore = create((set) => ({
  user: localStorage.getItem('user') ?? null,
  setUser: (user) => set({ user: user })
}));

export default useUserStore;
