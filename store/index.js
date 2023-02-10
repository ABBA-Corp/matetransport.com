export const state = () => ({
  staticInfo: [],
  dataLoader: false,
  translations: {},
});
export const mutations = {
  getInfo(state, payload) {
    state.staticInfo = payload;
  },
  getTranslations(state, payload) {
    state.translations = payload;
  },
};
