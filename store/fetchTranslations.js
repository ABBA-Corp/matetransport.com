export const actions = {
  async getTranslations({}, lang) {
    const res = await this.$axios.$get(`/translations`, {
      headers: {
        language: lang,
      },
    });
    return res;
  },
};
