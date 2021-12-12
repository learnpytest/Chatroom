<template>
  <div class="container">
    <div class="new-tweet-modal" v-if="showModal">
      <NewTweetModal :initialShowModal="showModal" @show-modal="modalToggle" />
    </div>

    <div class="public-chat-modal"></div>
    <div class="public-chat">
      <div class="sidebar">
        <Sidebar :initialShowModal="showModal" @show-modal="modalToggle" />
      </div>
      <div class="online-users">
        <div class="header">
          <div class="header-info">
            <p>上線使用者 (5)</p>
          </div>
        </div>

        <div class="active-users">
          <div class="active-user">
            <img src="./../assets/images/Photo_user1.png" alt="" />
            <p class="user-name">Jess</p>

            <p class="user-id">@jess</p>
          </div>
        </div>
      </div>
      <div class="chat-room"><ChatRoom /></div>
    </div>
  </div>
</template>
<script>
import Sidebar from "../modules/user/Sidebar.vue";
import NewTweetModal from "../modules/user/NewTweetModal.vue";
import ChatRoom from "../modules/user/ChatRoom.vue";

// import io from "socket.io-client";

export default {
  components: {
    Sidebar,
    NewTweetModal,
    ChatRoom,
  },
  beforeRouteUpdate() {
    this.$socket.connect();
  },
  sockets: {
    connect() {
      console.log("socket connected");
    },
    disconnect() {
      console.log("socket disconnected!!!!!!!!!!!");
    },
    users: function (data) {
      this.users = data;
    },
    userConnected: function (data) {
      this.messages.push(data);
    },
    userDisconnected: function (data) {
      this.messages.push(data);
    },
    chatMessage: function (data) {
      this.messages.push(data);
    },
    allMessages: function (data) {
      console.log("publichroom.js allMessages", data);
    },
  },
  data() {
    return {
      showModal: false,
      showReplyModal: false,
    };
  },
  mounted() {
    this.$socket.on("allMessages", (obj) => {
      console.log(obj);
    });
    // io.on("allMessages", (obj) => {
    //   console.log(obj);
    // });
  },
  created() {},
  methods: {
    modalToggle() {
      if (!this.showModal) {
        this.showModal = true;
      } else {
        this.showModal = false;
      }
    },

    replyModalToggle(tweetId) {
      if (!this.showReplyModal) {
        this.replyTweetId = tweetId;
        this.showReplyModal = true;
      } else {
        this.replyTweetId = "";
        this.showReplyModal = false;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";
.new-tweet-modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  height: 100%;
}
.active-user {
  display: flex;
  padding: 15px 10px 15px 10px;
  font-size: 14px;
  border-bottom: 1px solid $gray-75;
  cursor: pointer;
  word-break: break-all;
  display: flex;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .user-name {
    font-weight: var(--fw-bold);
    margin-right: 5px;
  }
  .user-id {
    color: $gray-600;
  }
}

.public-chat {
  display: flex;
  flex-flow: row nowrap;
  justify-content: right;
  height: 100%;
  overflow-y: scroll;
}
.container {
  height: 100%;
  overflow-y: hidden;
}
.sidebar {
  width: 18%;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
}
.online-users {
  width: 30%;
  border-left: 1px solid $gray-75;
  border-right: 1px solid $gray-75;
  margin-left: 30px;
}
.chat-room {
  width: 44.5%;
}
.header {
  display: flex;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid $gray-75;
  padding-left: 15px;
  font-weight: var(--fw-bolder);
  background-color: $white;
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
</style>
