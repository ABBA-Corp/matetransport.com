export const actions = {
  async getCheckEmail({}, payload) {
    const res = await this.$axios.$get(
      `https://emailvalidation.abstractapi.com/v1/?api_key=23abd342220d436cb7815bd3b3ece350&email=${payload}`
    );
    return res;
  },
};
