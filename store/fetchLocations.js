export const actions = {
  async getStates({}, langCode) {
    const res = await this.$axios.$get(`/states`);
    return res.results;
  },
  async getCities({}, payload) {
    const res = await this.$axios.$get(`/cities`, {
      params: { make: payload, page_size: 60 },
    });
    return res.results;
  },
};
