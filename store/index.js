export const state = () => ({
  staticInfo: [],
  dataLoader: false,
});
export const mutations = {
  getInfo(state, payload) {
    state.staticInfo = payload;
  },
};
