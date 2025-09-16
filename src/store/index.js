import {createStore} from 'vuex'

export default createStore({
    // state: {
    // },
    // getters: {
    // },
    // mutations: {
    // },
    // actions: {
    // },
    // modules: {
    // }
    state: {
        panelUrl: 'http://localhost:8000',
        // panelUrl: 'https://dev-amadeh.ir:8084',
        contents: null,
        content: null,
    },
    mutations: {
        getContents(state,id) {
            axios.get(state.panelUrl + '/api/get/contents/'+id)
                .then((response) => {
                    state.contents = response.data;
                }).catch();
        },
        getContent(state, slug) {
            axios.get(state.panelUrl + '/api/get/content/' + slug)
                .then((response) => {
                    state.content = response.data;
                }).catch();
        },

    },
    actions: {
        getContents(context) {
            context.commit('getContents');
        },
        getContent(context) {
            context.commit('getContent');
        },
    }
})
