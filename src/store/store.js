import create from "zustand";

const useStore = create((set, get) => ({
  isLoading: true,
  setIsLoading: (value) =>
    set(() => ({
      isLoading: value,
    })),
  numberLoaded: 0,
  setNumberLoaded: (val) => set((state) => ({numberLoaded: state.numberLoaded + val})),
  list: [],
  setList: (list) =>
    set(() => ({
      list: list,
      filteredListOne: list,
      filteredListTwo: list,
      selectionOne: list[Math.floor(Math.random() * list.length)],
      selectionTwo: list[Math.floor(Math.random() * list.length)],
    })),
  filters: {
    tabOne: {
      search: "",
      type: "all",
      generation: "all",
    },
    tabTwo: {
      search: "",
      type: "all",
      generation: "all",
    },
    updateFilter: (tabId, dataType, dataVal) => {
      set((state) => {
        return {
          filters: {
            ...state.filters,
            [tabId]: { ...state.filters[tabId], [dataType]: dataVal },
          },
        };
      });
    },
    runFilter: (tabId) => {
      set((state) => {
        const tempArr = [];
        state.list.map((item) => {
          const tempGenSplit = item.generation.url.split("/");
          const containsName = item.name.includes(state.filters[tabId].search.toLowerCase());
          const containsType =
            item.types.length > 1 &&
            item.types[1].type.name === state.filters[tabId].type
              ? true
              : item.types[0].type.name === state.filters[tabId].type
              ? true
              : state.filters[tabId].type === "all"
              ? true
              : false;
          const containsGen =
            tempGenSplit[tempGenSplit.length - 2] ===
            state.filters[tabId].generation
              ? true
              : state.filters[tabId].generation === "all"
              ? true
              : false;

          if (containsName && containsType && containsGen) {
            tempArr.push(item);
          }
        });
        if (tabId === "tabOne") return { filteredListOne: tempArr };
        if (tabId === "tabTwo") return { filteredListTwo: tempArr };
      });
    },
  },
  filteredListOne: [],
  filteredListTwo: [],
  selectionOne: {},
  selectionTwo: {},
  selectPokemon: (tabId, pokemonId) => {
    const pokemonInfo = get().list[pokemonId];
    const tab = tabId === "tabOne" ? "selectionOne" : "selectionTwo";

    set({
      [tab]: {
        ...pokemonInfo,
      },
    });
  },
  displayAbilityInfo: false,
  setDisplayAbilityInfo: () => set((state) => ({
          displayAbilityInfo: !state.displayAbilityInfo,
        })),
  abilityText: "Loading...",
  setAbilityText: async (abilityName) => {
    const res = await fetch(`https://pokeapi.co/api/v2/ability/${abilityName}`);
    const abilityData = await res.json();

    const textEnglish = (ability) => ability.language.name === "en";

    const text = abilityData.effect_entries.length > 0
      ? abilityData.effect_entries[
          abilityData.effect_entries.findIndex(textEnglish)
        ].short_effect
      : "N/A"

    set({
      abilityText: text,
    });
  },
  clearAbilityText: () => set({ abilityText: "Loading..." }),
}));

export { useStore };
