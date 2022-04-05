import getRandomInt from "@/helpers/getRandomInt";

export const incrementRandomInt = async ({ commit }) => {
  commit("setLoading", true);
  const rndmInt = await getRandomInt();
  commit("incrementBy", rndmInt);
  commit("setLoading", false);
};
