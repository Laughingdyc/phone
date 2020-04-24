const state = {
    currentUser: null
}

const getters = {
    urrentUser : state => state.currentUser
}

const mutations = {


    // 更改用户的状态信息
    userStatus (state, data) {
        if(data){
            state.currentUser = data;
            state.isLogin = true;
        }else{
            state.isLogin = false;
            state.currentUser = null;
        }
    }
}

const actions = {
    setUser ({commit}, user) {
        commit("userStatus", user)
    }
}
export default{
    state,
    getters,
    mutations,
    actions
}