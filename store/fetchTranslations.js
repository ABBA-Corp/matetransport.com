export const actions = {
  async getTranslations({}, langCode) {
    const res = await this.$axios.$get(`/articles`);
    return res;
  },
};
