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
        panelUrl: 'https://panel.asal.webagent.ir',
        productsCats: null,
        products: null,
        product: null,
    },
    mutations: {
        getProductCats(state) {
            axios.get(state.panelUrl + '/api/category/product')
                .then((response) => {
                    state.productsCats = response.data;
                }).catch();
        },
        getProducts(state, id) {
            axios.get(state.panelUrl + '/api/product?cat=' + id)
                .then((response) => {
                    state.products = response.data;
                }).catch();
        },
        getProduct(state, id) {
            axios.get(state.panelUrl + '/api/product/' + id)
                .then((response) => {
                    state.product = response.data.product;
                }).catch();
        }
    },
    actions: {
        getProductCats(context) {
            context.commit('getProductCats');
        },
        getProducts(context) {
            context.commit('getProducts');
        },
        getProduct(context) {
            context.commit('getProduct');
        },
    }
})
