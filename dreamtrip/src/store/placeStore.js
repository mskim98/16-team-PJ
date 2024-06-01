import create from "zustand";

const usePlaceStore = create((set) => ({
  placeData: null,
  setPlaceData: (data) => set({ placeData: data }),
}));

export default usePlaceStore;
