import { createStore } from 'vuex'

export default createStore({
    state: {
        serverUrl: 'https://dev-amadeh.ir:8084',
        storageUrl: 'https://dev-amadeh.ir:8084/storage/',
        contents: null,
        content: null,
        banners: null,
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
        async getContents({ commit, state }) {
            const headers = await this.dispatch('setFetchHeaders');

            try {
                const response = await fetch(state.serverUrl + '/api/get/contents/' + state.contents, {
                    method: 'GET',
                    headers: headers,
                });

                if (!response.ok) {
                    throw new Error('Error fetching contents');
                }

                const data = await response.json();
                commit('setContents', data);  // Commit the data to the state
            } catch (error) {
                console.error('Error fetching contents:', error);
            }
        },

        // Fetch a specific content using slug
        async getContent({ commit, state }) {
            const headers = await this.dispatch('setFetchHeaders');

            try {
                const response = await fetch(state.serverUrl + '/api/get/content/' + state.content, {
                    method: 'GET',
                    headers: headers,
                });

                if (!response.ok) {
                    throw new Error('Error fetching content');
                }

                const data = await response.json();
                commit('setContent', data);  // Commit the data to the state
            } catch (error) {
                console.error('Error fetching content:', error);
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

        // Example to set the user token (if necessary)
        setUserToken({ commit }, token) {
            commit('setUserToken', token);
        },
    },
});
