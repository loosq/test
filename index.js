import {createApp} from "vue";
import App from "./App.vue";
import {createStore} from 'vuex';
const a = "1"

const store = createStore({
    state() {
        return {
            data: {}
        }
    }
})

const app = createApp(App);
app.use(store);
app.mount("#app");
