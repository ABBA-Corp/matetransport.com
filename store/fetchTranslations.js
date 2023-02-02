export const actions = {
  async getTranslations({}, langCode) {
    const res = await this.$axios.$get(`/articles`, {
      headers: {
        Language: langCode,
      },
    });
    return res;
  },
};
