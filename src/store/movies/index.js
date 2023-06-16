import state from "./state";
import * as actions from "./actions";
import * as getters from "./getters";
import * as mutations from "./mutations";

const moviesModule = {
  namespaced: true,
  getters,
  actions,
  mutations,
  state,
};

export default moviesModule;
