export const contacts = {
async postcontact(data) {
    try {
      const res = await this.$axios.$post(`/application/create`,data);
      return res;
    } catch (e) {
      return e.response;
    }
  }
}