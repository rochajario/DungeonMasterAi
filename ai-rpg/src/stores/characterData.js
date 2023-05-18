import { defineStore } from 'pinia';

export const useCharacterStore = defineStore('character', {
  state: () => ({
    name: '',
    race: '',
    gender: '',
    backgroundStory: '',
    strength: null,
    dexterity: null,
    intelligence: null,
    wisdom: null,
    charisma: null,
  }),

  getters: {
    getCharacterData(state) {
      return {
        name: state.name,
        race: state.race,
        gender: state.gender,
        backgroundStory: state.backgroundStory,
        strength: state.strength,
        dexterity: state.dexterity,
        intelligence: state.intelligence,
        wisdom: state.wisdom,
        charisma: state.charisma,
      }
    },
    characterReady(state) {
      return (
        state.name &&
        state.race &&
        state.gender &&
        state.backgroundStory &&
        state.strength &&
        state.dexterity &&
        state.intelligence &&
        state.wisdom &&
        state.charisma
      )
    }
  },

  actions: {
    setCharacterData(payload) {
      this.user = payload.user;
      this.race = payload.race;
      this.gender = payload.gender;
      this.backgroundStory = payload.backgroundStory;
    }
  }
})
