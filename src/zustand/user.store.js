import { create } from 'zustand';

const useUserStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user: user })
}));

export default useUserStore;
