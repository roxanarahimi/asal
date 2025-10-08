import { createStore } from 'vuex'
import {useRoute} from "vue-router/dist/vue-router";

export default createStore({
    state: {
        serverUrl: 'https://dev-amadeh.ir:8084',
        storageUrl: 'https://dev-amadeh.ir:8084/storage/',
        contents: null,
        content: null,
        banners: null,
        searchResult: null,
        id: useRoute()?.params.id,
        slug: useRoute()?.params.slug,
        userToken: null, // This will hold the user token (for Authorization headers)
    },
    mutations: {
        setContents(state, contents) {
            state.contents = contents;
        },
        setContent(state, content) {
            state.content = content;
        },
        setBanners(state, banners) {
            state.banners = banners;
        },
        setSearchResult(state, searchResult) {
            state.searchResult = searchResult;
        },
        setUserToken(state, token) {
            state.userToken = token;
        }
    },
    actions: {
        // This function sets the headers for each fetch request
        async setFetchHeaders({ state }) {
            const headers = {
                'Content-Type': 'application/json',
                Accept: "application/json",
                "User-Agent": "PostmanRuntime/7.39.0", // mimic Postman
            };

            if (state.userToken) {
                headers['Authorization'] = `Bearer ${state.userToken}`;
            }

            return headers;
        },

        // Fetch contents from the API
        async getContents({ commit, dispatch, state }, id) {
            const headers = await dispatch('setFetchHeaders');

            try {
                const response = await fetch(`${state.serverUrl}/api/get/contents/${id}`, {
                    method: 'GET',
                    headers: headers,
                });

                if (!response.ok) {
                    throw new Error('Error fetching contents');
                }

                const data = await response.json();
                commit('setContents', data);
            } catch (error) {
                console.error('Error fetching contents:', error);
            }
        },
        // Fetch a specific content using slug
        async getContent({ commit, dispatch, state }, slug) {
            const headers = await dispatch('setFetchHeaders');

            try {
                const response = await fetch(`${state.serverUrl}/api/get/content/${slug}`, {
                    method: 'GET',
                    headers: headers,
                });

                if (!response.ok) {
                    throw new Error('Error fetching contents');
                }

                const data = await response.json();
                commit('setContent', data);
            } catch (error) {
                console.error('Error fetching contents:', error);
            }
        },

        // Fetch banners from the API
        async getBanners({ commit, state }) {
            const headers = await this.dispatch('setFetchHeaders');

            try {
                const response = await fetch(state.serverUrl + '/api/get/banners', {
                    method: 'GET',
                    headers: headers,
                });

                if (!response.ok) {
                    throw new Error('Error fetching banners');
                }

                const data = await response.json();
                commit('setBanners', data);  // Commit the data to the state
            } catch (error) {
                console.error('Error fetching banners:', error);
            }
        },
  // Fetch search result from the API
        async getSearchResult({ commit, dispatch, state }, term) {
            const headers = await this.dispatch('setFetchHeaders');

            try {
                const response = await fetch(`${state.serverUrl}/api/search?term=${term}`, {
                    method: 'GET',
                    headers: headers,
                });

                if (!response.ok) {
                    throw new Error('Error fetching search result');
                }

                const data = await response.json();
                commit('setSearchResult', data);  // Commit the data to the state
            } catch (error) {
                console.error('Error fetching search result:', error);
            }
        },

        // Example to set the user token (if necessary)
        setUserToken({ commit }, token) {
            commit('setUserToken', token);
        },
    },
});
