import { create } from "zustand";

const useFilterStore = create((set) => ({
  filterValue: [],
  setFilterValue: (e:any) => set({ filterValue: e }),

  resetFilterValue: () =>
    set(() => ({
      filterValue: []
    }))

}));


export default useFilterStore;
