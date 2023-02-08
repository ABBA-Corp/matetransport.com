export const actions = {
  async postLead({}, payload) {
    const res = await this.$axios.$post(`/leads/create`, payload.data, {
      headers: {
        Language: payload.currentLang,
      },
    });
    return res;
  },
};
