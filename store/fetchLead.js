export const actions = {
  async postLead({}, payload) {
    const res = await this.$axios.$post(`/leads/create`, payload.data, {
      headers: {
        Language: payload.currentLang,
      },
    });
    return res;
  },
  async editLead({}, payload) {
    const res = await this.$axios.$put(
      `/leads/${payload.leadId}/edit`,
      payload.data,
      {
        headers: {
          Language: payload.currentLang,
        },
      }
    );
    return res;
  },
  async getLead({}, payload) {
    const res = await this.$axios.$get(`/leads/${payload.leadId}`, {
      headers: {
        Language: payload.currentLang,
      },
    });
    return res;
  },
};
