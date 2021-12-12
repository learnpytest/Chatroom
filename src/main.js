import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import './assets/scss/reset.scss'
import store from "./store";

import VueSocketIO from "vue-socket.io";
import {
  io
} from "socket.io-client";
// const socket = io("http://localhost:3000");

Vue.config.productionTip = false;
const socketOptions = {
  autoConnect: true,
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
  forceNew: true,
  allowUpgrades: false,
  pingTimeout: 30000,
  transports: ["websocket", "polling"],
};

// const socket = io("http://localhost:3000", socketOptions);
const socket = io(
  "http://2dd8-2001-b011-e-59a3-9de1-69a7-7562-a92f.ngrok.io/",
  socketOptions
);

socket.onAny((event, ...args) => {
  console.log("main.js收到的資訊", event, args);
});

// socket.emit("message", "Hello user");

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: socket,
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_",
    },
  })
);

Vue.directive("focus", {
  inserted: function (el) {
    el.focus();
    console.log(el);
  },
});

export const vm = new Vue({
  router,
  store,
  sockets: {
    connecting() {
      console.log("main.js Socket connecting");
    },
    disconnect() {
      console.log("main.js Socket Disconnect");
    },
    connect_failed() {
      console.log("main.js Socket connect failed");
    },
    connect() {
      console.log("main.js socket connected in main.js");
    },
    messageNotify: function (data) {
      console.log("main.js messageNotifydata", data);
    },
    subscribeNotify: function (data) {
      console.log("main.js subscribeNotify", data);
    },
    reactionNotify: function (data) {
      console.log("main.js reactionNotify", data);
    },
    allMessages: function (data) {
      console.log("main.js allMessages", data);
      store.state.allMessages = [...data];
    },
    newMessage: function (obj) {
      console.log("main.js newMessage", obj);
      store.state.allMessages.push({
        ...obj
      });
      console.log("store state", store.state.allMessages);
    },
  },
  render: (h) => h(App),
}).$mount("#app");

export default socket;