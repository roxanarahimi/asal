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
        // serverUrl: 'http://localhost:8000',
        serverUrl: 'https://dev-amadeh.ir:8084',
        storageUrl: 'https://dev-amadeh.ir:8084/storage/',
        contents: null,
        content: null,
        banners: null,
    },
    mutations: {
        getContents(state,id) {
            axios.get(state.serverUrl + '/api/get/contents/'+id)
                .then((response) => {
                    state.contents = response.data;
                }).catch();
        },
        getContent(state, slug) {
            axios.get(state.serverUrl + '/api/get/content/' + slug)
                .then((response) => {
                    state.content = response.data;
                }).catch();
        },
        getBanners(state) {
            axios.get(state.serverUrl + '/api/get/banners/')
                .then((response) => {
                    state.banners = response.data;
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
        getBanners(context) {
            context.commit('getBanners');
        },
    }
})
