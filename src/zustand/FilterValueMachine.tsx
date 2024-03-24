import { create } from "zustand";

const useFilterMachineStore = create((set) => ({
  filterMachineValue: [],
  setFilterMachineValue: (e: any) => set({ filterMachineValue: e }),

  resetFilterMachineValue: () =>
    set(() => ({
      filterMachineValue: []
    }))
}));

export default useFilterMachineStore;
