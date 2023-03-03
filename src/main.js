import { createApp } from "vue";
import { createPinia } from "pinia";

import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

import '@mdi/font/css/materialdesignicons.css'

import App from "./App.vue";
import router from "./router";

//import "./assets/main.css";

const firebaseConfig = {
    apiKey: "AIzaSyD5Qj2oFhGJxASEHhma-jqYa9XZKQ1Is4c",
    authDomain: "vue-jeabbabe-project.firebaseapp.com",
    databaseURL: "https://vue-jeabbabe-project-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "vue-jeabbabe-project",
    storageBucket: "vue-jeabbabe-project.appspot.com",
    messagingSenderId: "31845234159",
    appId: "1:31845234159:web:c04d02dc4e4dac218e721a",
    measurementId: "G-E7H7F6WT7Y"
}

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App);

app.use(createPinia());
app.use(vuetify);
app.use(router);

const firebase = initializeApp(firebaseConfig);

app.mount("#app");

export const db = getFirestore(firebase);

export default createVuetify({
    icons: {
      defaultSet: 'mdi', // This is already the default value - only for display purposes
    },
  })
