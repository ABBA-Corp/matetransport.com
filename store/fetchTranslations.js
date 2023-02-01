export const actions = {
  async getTranslations({}, langCode) {
    const res = await this.$axios.$get(`/articles`, {
      headers: {
        language: langCode,
        "Access-Control-Request-Headers":
          "X-CSRF-Token, X-Requested-With,language, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
        "Access-Control-Allow-Headers":
          "X-CSRF-Token, X-Requested-With,language, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
      },
    });
    return res;
  },
};
