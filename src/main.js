import Vue from 'vue'
import App from './App.vue'

import vueCustomElement from 'vue-custom-element';


import firebase from 'firebase/app'
import 'firebase/firestore'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


Vue.config.productionTip = false
export const db = firebase.initializeApp({
  apiKey: "AIzaSyC91hlRDnOPRebLZl0jXahmIgn3J3lDIzw",
  authDomain: "vue-gallery-4470c.firebaseapp.com",
  projectId: "vue-gallery-4470c",
  storageBucket: "vue-gallery-4470c.appspot.com",
  messagingSenderId: "986604494503",
  appId: "1:986604494503:web:3249897ac236f6ac94c582"
}).firestore();

/* Bind firebase to your Vue instance */
Vue.prototype.$firebase = firebase;
Vue.use(vueCustomElement);
//
// new Vue({
//   render: h => h(App),
// }).$mount('#app')
Vue.customElement('my-custom-element', App, {
  shadow: true,
  beforeCreateVueInstance(root) {
    const rootNode = root.el.getRootNode();

    if (rootNode instanceof ShadowRoot) {
      console.debug('shadowRoot found! Using as root node ');
      // eslint-disable-next-line no-param-reassign
      root.shadowRoot = rootNode;
    } else {
      console.debug('shadowRoot not found! Using document head ');
      // eslint-disable-next-line no-param-reassign
      root.shadowRoot = document.head;
    }

    return root;
  },
});

