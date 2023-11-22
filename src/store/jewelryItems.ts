import { create } from 'zustand';
import { IJewelry } from '@/app/page';

interface IStore {
  jewelryItems: IJewelry[] | null;
  setJewelryItems: (items: IJewelry[]) => void;
}

const useItemsStore = create<IStore>((set) => ({
  jewelryItems: [],
  setJewelryItems: (items) => set({ jewelryItems: items }),
}));

export default useItemsStore;
