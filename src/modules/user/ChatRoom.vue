﻿<template>
  <div class="chat-room-wrapper">
    <div class="header">
      <div class="header-info">
        <p>公開聊天室</p>
      </div>
    </div>
    <div class="chat-wrapper" v-for="(item, index) in allMessages" :key="index">
      <!-- <div class="online-box center">
        <span class="online-text">Jess 上線</span>
      </div> -->

      <div class="reply-box" v-if="item.name !== currentUser.name">
        <div class="reply-text-info bottom-align">
          <img
            class="user-pic"
            src="./../../assets/images/Photo_user2.png"
            alt=""
          />
          <div class="reply-text-time">
            <div class="reply-text">{{ item.message }}</div>
          </div>
        </div>
        <p class="reply-time">下午6:02</p>
      </div>

      <div v-if="item.name === currentUser.name" class="sent-box right">
        <div class="sent-text">{{ item.message }}</div>
        <p class="sent-time">下午6:02</p>
      </div>
      <!-- <div class="online-box center">
        <span class="online-text">Jess 下線</span>
      </div> -->
    </div>
    <div class="chat-field">
      <input
        type="text"
        id="sendtxt"
        placeholder="輸入訊息..."
        v-model="temp.message"
      />
      <button class="sendBtn" @click="sendMessage">
        <img src="./../../assets/images/send_button.png" />
      </button>
    </div>
  </div>
</template>
<script>
import socket from "../../main";
import { mapState } from "vuex";
import currentUserAPI from "@/apis/currentUserAPI";

export default {
  name: "ChatRooom",
  data() {
    return {
      messages: [],
      userName: [],
      temp: {
        message: "",
        name: "",
      },
      isNewuserComeIn: false,
      currentUser: {},
    };
  },
  methods: {
    sendMessage() {
      // emit事件給server
      this.temp.name = this.currentUser.name;
      socket.emit("message", this.temp);
      this.temp.message = "";
    },
    async fetchCurrentUser() {
      try {
        const res = await currentUserAPI.getCurrentUser();
        const { data, statusText } = res;

        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        this.currentUser = { ...data };
      } catch (err) {
        console.log(err);
      }
    },
  },
  created() {
    this.fetchCurrentUser();
    // this.messages = [...this.$store.state.allMessages];
    // this.userName = [...this.$store.state.allMessages.map(msg=>msg.name)]
  },
  computed: {
    ...mapState({
      // allMessages: (state) => state.allMessages,
      allMessages: "allMessages",
    }),
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";

.bottom-align {
  display: flex;
  flex-flow: row nowrap;
  align-items: end;
}

.reply-box {
  margin: 10px 0;
}

.reply-text {
  background-color: $gray-75;
  padding: 12px 15px;
  border-radius: 30px 30px 30px 0px;
}

.reply-time {
  text-align: left;
  margin-left: 50px;
  font-size: 13px;
  color: $gray-600;
}

.online-text {
  background-color: $gray-100;
  color: $gray-600;
  padding: 7px 10px;
  border-radius: 100px;
}

.sent-time {
  font-size: 13px;
  color: $gray-600;
}

.sent-box {
  margin: 10px 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: end;
}
.sent-text {
  background-color: $orange-100;
  padding: 13px 10px;
  color: $white;
  border-radius: 30px 30px 0px 30px;
}

.center {
  text-align: center;
  margin: 10px 0;
}

.chat-wrapper {
  height: 100%;
  padding: 15px;
}

.chat-room-wrapper {
  height: 100%;
  // display: flex;
  // flex-flow: column;
  // justify-content: space-between;
}

.chat-field {
  border-top: 1px solid $gray-75;
  padding: 11px 20px;
  position: sticky;
  position: -webkit-fixed;
  bottom: 0;
  display: flex;
  flex-flow: row nowrap;
  height: 60px;
  input {
    border: 1px solid $gray-75;
    border-radius: 100px;
    padding: 0 15px;
    background-color: $gray-100;
  }
  button {
    width: 5%;
  }
  img {
    width: 20px;
    height: 20px;
    margin: 0 auto;
  }
  #sendtxt {
    width: 100%;
  }
}

.header {
  display: flex;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid $gray-75;
  padding-left: 15px;
  font-weight: var(--fw-bolder);
  width: 100%;
  .header-info {
    :nth-child(2) {
      font-size: 13px;
      color: $gray-600;
      font-weight: var(--fw-normal);
    }
  }

  img {
    width: 20px;
    height: 20px;
    margin-right: 40px;
  }
  img:hover {
    cursor: pointer;
  }
}

.user-pic {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
</style>
