(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b67fb49"],{"0162":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{staticClass:"new-tweet-modal",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.handleCommentSubmit(t.tweet.TweetId)}}},[a("div",{staticClass:"new-text-box"},[a("div",{staticClass:"close-btn"},[a("button",[a("img",{attrs:{src:r("214b"),alt:""},on:{click:t.handleShowModalClick}})])]),a("div",{staticClass:"to-reply-user"},[a("div",{staticClass:"to-reply-user_pic"},[a("img",{staticClass:"user-pic",attrs:{src:t._f("emptyImage")(t.tweet.User&&t.tweet.User.avatar),alt:""}}),a("div",{staticClass:"connecting-line"})]),a("div",{staticClass:"to-reply-user-info"},[a("div",{staticClass:"to-reply-user-info_info"},[a("p",{staticClass:"to-reply-user-name"},[t._v(" "+t._s(t.tweet.User&&t.tweet.User.name)+" "),a("span",[t._v("@"+t._s(t.tweet.User&&t.tweet.User.account)+" • ")]),a("span",[t._v(t._s(t._f("fromNow")(t.tweet&&t.tweet.createdAt)))])])]),a("div",{staticClass:"to-reply-user-tweet_text"},[t._v(" "+t._s(t.tweet&&t.tweet.description)+" ")]),a("p",{staticClass:"reply-to"},[t._v(" 回覆給 "),a("span",[t._v("@"+t._s(t.tweet.User&&t.tweet.User.account))])])])]),a("div",{staticClass:"text-box"},[a("div",{staticClass:"user-info"},[a("img",{staticClass:"user-pic",attrs:{src:t._f("emptyImage")(t.currentUser&&t.currentUser.avatar),alt:""}})]),a("div",{staticClass:"text-area"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"form-control",attrs:{rows:"3",maxlength:"141",placeholder:"推你的回覆"},domProps:{value:t.text},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.resetEmpty.apply(null,arguments)},input:function(e){e.target.composing||(t.text=e.target.value)}}}),a("span",{staticClass:"limiter"},[t._v(t._s(t.charactersLeft))])])]),a("div",{staticClass:"tweet-btn"},[t.text.length>=140?a("p",{staticClass:"error-txt"},[t._v("字數不可超過 140 字")]):t._e(),t.submitEmptyField?a("p",{staticClass:"error-txt"},[t._v("內容不可空白")]):t._e(),a("button",{staticClass:"save-btn",attrs:{type:"submit",disabled:t.isProcessing}},[t._v(" "+t._s(t.isProcessing?"發送中...":"推文")+" ")])])])])},s=[],n=r("5530"),i=r("1da1"),c=(r("96cf"),r("a9e3"),r("2ca0"),r("2f62")),o=r("6ad5"),l=r("ac0d"),u=r("6783"),d=r("5fad"),p={name:"ReplyTweetModal",mixins:[l["a"],l["b"]],props:{initialShowReplyModal:{type:Boolean,required:!0},initialTweetId:{type:Number,require:!0}},data:function(){return{showReplyModal:!1,text:"",tweetId:"",tweet:{},submitEmptyField:!1,currentUser:{}}},created:function(){this.fetchData(),this.getCurrentUser()},methods:{fetchData:function(){this.showReplyModal=this.initialShowReplyModal,this.tweetId=this.initialTweetId,this.fetchTweet(this.tweetId)},fetchTweet:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u["a"].getTweet(t);case 3:a=r.sent,s=a.data,e.tweet=Object(n["a"])({},s),r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](0),console.log("error",r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()},handleCommentSubmit:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(e.text.length){r.next=3;break}return e.submitEmptyField=!0,r.abrupt("return");case 3:if(!(e.text.length>140)){r.next=5;break}return r.abrupt("return");case 5:return r.prev=5,r.next=8,u["a"].replyTweet({tweetId:e.tweetId,comment:e.text});case 8:if(a=r.sent,s=a.data,"success"===s.status){r.next=12;break}throw new Error(s.message);case 12:if(e.handleShowModalClick(),!e.$route.path.startsWith("/reply")){r.next=16;break}return e.$router.push("/usermain"),r.abrupt("return");case 16:e.$router.push("/reply/".concat(t)),r.next=22;break;case 19:r.prev=19,r.t0=r["catch"](5),console.log(r.t0);case 22:case"end":return r.stop()}}),r,null,[[5,19]])})))()},getCurrentUser:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d["a"].getCurrentUser();case 3:if(r=e.sent,a=r.data,s=r.statusText,"OK"===s){e.next=7;break}throw new Error(s);case 7:t.currentUser=a,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()},handleShowModalClick:function(){this.showReplyModal=!1,this.$emit("show-reply-modal")},resetEmpty:function(){this.submitEmptyField=!1}},computed:Object(n["a"])({charactersLeft:function(){var t=this.text.length,e=140;return e-t+" / "+e+"剩餘字數"}},Object(c["c"])({isProcessing:o["o"]}))},f=p,h=(r("ab6d"),r("2877")),v=Object(h["a"])(f,a,s,!1,null,"8453fc46",null);e["a"]=v.exports},"214b":function(t,e,r){t.exports=r.p+"img/icon_close.883c7712.svg"},2892:function(t,e,r){"use strict";r("b0a2")},"2ca0":function(t,e,r){"use strict";var a=r("23e7"),s=r("e330"),n=r("06cf").f,i=r("50c4"),c=r("577e"),o=r("5a34"),l=r("1d80"),u=r("ab13"),d=r("c430"),p=s("".startsWith),f=s("".slice),h=Math.min,v=u("startsWith"),m=!d&&!v&&!!function(){var t=n(String.prototype,"startsWith");return t&&!t.writable}();a({target:"String",proto:!0,forced:!m&&!v},{startsWith:function(t){var e=c(l(this));o(t);var r=i(h(arguments.length>1?arguments[1]:void 0,e.length)),a=c(t);return p?p(e,a,r):f(e,r,r+a.length)===a}})},"2e1d":function(t,e,r){"use strict";r("a266")},"408a":function(t,e,r){var a=r("e330");t.exports=a(1..valueOf)},5482:function(t,e,r){t.exports=r.p+"img/icon_reply.3d73bb6d.svg"},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var a=r("e330"),s=r("1d80"),n=r("577e"),i=r("5899"),c=a("".replace),o="["+i+"]",l=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),d=function(t){return function(e){var r=n(s(e));return 1&t&&(r=c(r,l,"")),2&t&&(r=c(r,u,"")),r}};t.exports={start:d(1),end:d(2),trim:d(3)}},"5ead":function(t,e,r){t.exports=r.p+"img/icon_like.1702499b.svg"},"60e2":function(t,e,r){"use strict";var a=r("ad2d");e["a"]={getLikes:function(t){return a["a"].get("/users/".concat(t,"/likes"))},postLike:function(t){return a["a"].post("/tweets/".concat(t,"/like"))},deleteLike:function(t){return a["a"].post("/tweets/".concat(t,"/unlike"))}}},8624:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{staticClass:"new-tweet-modal",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleTweetSubmit.apply(null,arguments)}}},[a("div",{staticClass:"new-text-box"},[a("div",{staticClass:"close-btn"},[a("button",[a("img",{attrs:{src:r("214b"),alt:""},on:{click:t.handleShowModalClick}})])]),a("div",{staticClass:"text-box"},[a("div",{staticClass:"user-info"},[a("img",{staticClass:"user-pic",attrs:{src:t._f("emptyImage")(t.currentUserPic),alt:""}})]),a("div",{staticClass:"text-area"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"form-control",attrs:{rows:"3",maxlength:"141",placeholder:"有什麽新鮮事？"},domProps:{value:t.text},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.resetEmpty.apply(null,arguments)},input:function(e){e.target.composing||(t.text=e.target.value)}}}),a("span",{staticClass:"limiter"},[t._v(t._s(t.charactersLeft))])])]),a("div",{staticClass:"tweet-btn"},[t.text.length>=140?a("p",[t._v("字數不可超過 140 字")]):t._e(),t.submitEmptyField?a("p",[t._v("內容不可空白")]):t._e(),a("button",[t._v("推文")])])])])},s=[],n=r("5530"),i=r("1da1"),c=(r("96cf"),r("2f62")),o=r("6ad5"),l=r("ac0d"),u=r("5fad"),d=r("6783"),p={mixins:[l["a"]],props:{initialShowModal:{type:Boolean,required:!0}},data:function(){return{showModal:"",limit:-1,text:"",currentUserId:"",submitEmptyField:!1,currentUserPic:{}}},created:function(){this.fetchData(),this.fetchCurrentUser()},methods:{fetchData:function(){this.showModal=this.initialShowModal},fetchCurrentUser:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,a,s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u["a"].getCurrentUser();case 3:r=e.sent,a=r.data,s=a.avatar,n=a.id,t.currentUserId=n,t.currentUserPic=s,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log("error",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},handleShowModalClick:function(){this.showModal?(this.showModal=!1,this.$emit("show-modal")):(this.showModal=!0,this.$emit("show-modal"))},handleTweetSubmit:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.text.length){e.next=3;break}return t.submitEmptyField=!0,e.abrupt("return");case 3:if(!(t.text.length>140)){e.next=5;break}return e.abrupt("return");case 5:return e.prev=5,e.next=8,d["a"].postOneUserTweet({description:t.text});case 8:if(r=e.sent,a=r.data,"success"===a.status){e.next=12;break}throw new Error(a.message);case 12:t.$emit("updateData"),e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](5),console.log("error",e.t0);case 18:case"end":return e.stop()}}),e,null,[[5,15]])})))()},resetEmpty:function(){this.submitEmptyField=!1}},computed:Object(n["a"])({charactersLeft:function(){var t=this.text.length,e=140;return e-t+" / "+e+"剩餘字數"}},Object(c["c"])({getCurrentUser:o["k"]}))},f=p,h=(r("2892"),r("2877")),v=Object(h["a"])(f,a,s,!1,null,"7ee6236e",null);e["a"]=v.exports},"9a31":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"popular-wrapper"},[r("div",{staticClass:"popular-header"},[t._v("Popular")]),t._l(t.getTopUsers,(function(e){return r("div",{key:e.UserId,staticClass:"popular-card"},[r("img",{staticClass:"hoverStyle",attrs:{src:t._f("emptyImage")(e.avatar),alt:"user avatar"},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.redirectToUser(e.UserId)}}}),r("div",{staticClass:"popular-card_info"},[r("p",{staticClass:"user-name"},[t._v(t._s(e.name))]),r("p",{staticClass:"user-info"},[t._v("@"+t._s(e.account))])]),e.isFollowed?r("div",{staticClass:"follow-btn"},[r("button",{staticClass:"following-btn",class:{disabled:t.currentUserId===e.UserId},attrs:{disabled:t.currentUserId===e.UserId},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.cancel(e.UserId)}}},[t._v(" 正在跟隨 ")])]):r("div",{staticClass:"follow-btn"},[r("button",{staticClass:"follower-btn",class:{disabled:t.currentUserId===e.UserId},attrs:{disabled:t.currentUserId===e.UserId},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.post(e.UserId)}}},[t._v(" 跟隨 ")])])])}))],2)},s=[],n=r("1da1"),i=r("5530"),c=(r("96cf"),r("2f62")),o=r("ac0d"),l=r("5fad"),u=r("6ad5"),d={name:"Popular",mixins:[o["a"]],data:function(){return{currentUserId:""}},created:function(){this.setTopUsers(),this.getCurrentUser()},methods:Object(i["a"])(Object(i["a"])({cancel:function(t){var e=this.$route.params.id;this.cancelFollow({followingId:t,userId:e}),this.$emit("updateCancelView",t)},post:function(t){var e=this.$route.params.id;this.postFollowship({followingId:t,userId:e}),this.$emit("updateFollowView",t)}},Object(c["b"])({setTopUsers:u["T"],postFollowship:u["z"],cancelFollow:u["d"]})),{},{getCurrentUser:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l["a"].getCurrentUser();case 3:if(r=e.sent,a=r.data,s=r.statusText,"OK"===s){e.next=7;break}throw new Error(s);case 7:t.currentUserId=a.id,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()},redirectToUser:function(t){this.$router.push({name:"user",params:{id:t}})}}),computed:Object(i["a"])({},Object(c["c"])({getTopUsers:u["u"]}))},p=d,f=(r("2e1d"),r("2877")),h=Object(f["a"])(p,a,s,!1,null,"b409dbfc",null);e["a"]=h.exports},"9dd4":function(t,e,r){t.exports=r.p+"img/Logo_small.21c0a93a.svg"},a266:function(t,e,r){},a357:function(t,e,r){t.exports=r.p+"img/icon_chat.6e17a436.svg"},a9e3:function(t,e,r){"use strict";var a=r("83ab"),s=r("da84"),n=r("e330"),i=r("94ca"),c=r("6eeb"),o=r("1a2d"),l=r("7156"),u=r("3a9b"),d=r("d9b5"),p=r("c04e"),f=r("d039"),h=r("241c").f,v=r("06cf").f,m=r("9bf2").f,b=r("408a"),g=r("58a8").trim,w="Number",x=s[w],C=x.prototype,_=s.TypeError,k=n("".slice),U=n("".charCodeAt),I=function(t){var e=p(t,"number");return"bigint"==typeof e?e:y(e)},y=function(t){var e,r,a,s,n,i,c,o,l=p(t,"number");if(d(l))throw _("Cannot convert a Symbol value to a number");if("string"==typeof l&&l.length>2)if(l=g(l),e=U(l,0),43===e||45===e){if(r=U(l,2),88===r||120===r)return NaN}else if(48===e){switch(U(l,1)){case 66:case 98:a=2,s=49;break;case 79:case 111:a=8,s=55;break;default:return+l}for(n=k(l,2),i=n.length,c=0;c<i;c++)if(o=U(n,c),o<48||o>s)return NaN;return parseInt(n,a)}return+l};if(i(w,!x(" 0o1")||!x("0b1")||x("+0x1"))){for(var E,O=function(t){var e=arguments.length<1?0:x(I(t)),r=this;return u(C,r)&&f((function(){b(r)}))?l(Object(e),r,O):e},M=a?h(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),T=0;M.length>T;T++)o(x,E=M[T])&&!o(O,E)&&m(O,E,v(x,E));O.prototype=C,C.constructor=O,c(s,w,O)}},ab6d:function(t,e,r){"use strict";r("b5ad")},b0a2:function(t,e,r){},b5ad:function(t,e,r){},bf0d:function(t,e,r){t.exports=r.p+"img/icon_cog.2ff65de4.svg"},c4cd:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar-wrapper"},[a("ul",{staticClass:"nav-links"},[a("li",[a("router-link",{attrs:{to:"#"}},[a("img",{staticClass:"logo",attrs:{src:r("9dd4"),alt:""}})])],1),a("li",[a("router-link",{attrs:{to:{name:"UserMain"}}},[a("div",{staticClass:"nav-link"},[a("img",{staticClass:"filter-orange",attrs:{src:r("dffc"),alt:""}}),a("p",{staticClass:"nav-link_text"},[t._v("首頁")])])])],1),a("li",[a("router-link",{attrs:{to:{name:"user",params:{id:t.currentUserId}}}},[a("div",{staticClass:"nav-link"},[a("img",{staticClass:"filter-orange",attrs:{src:r("8f36"),alt:""}}),a("p",{staticClass:"nav-link_text"},[t._v("個人資料")])])])],1),a("li",[a("router-link",{attrs:{to:{name:"public-room"}}},[a("div",{staticClass:"nav-link"},[a("img",{staticClass:"filter-orange",attrs:{src:r("a357"),alt:""}}),a("p",{staticClass:"nav-link_text"},[t._v("公開聊天室")])])])],1),a("li",[a("router-link",{attrs:{to:{name:"user-setting"}}},[a("div",{staticClass:"nav-link"},[a("img",{staticClass:"filter-orange",attrs:{src:r("bf0d"),alt:""}}),a("p",{staticClass:"nav-link_text"},[t._v("設定")])])])],1),a("li",{staticClass:"nav-link"},[a("button",{on:{click:t.handleShowModalClick}},[t._v("推文")])])]),a("div",{staticClass:"logout",on:{click:t.logout}},[a("router-link",{attrs:{to:"#"}},[a("div",{staticClass:"nav-link"},[a("img",{staticClass:"filter-orange",attrs:{src:r("f667"),alt:""}}),a("p",{staticClass:"nav-link_text"},[t._v("登出")])])])],1)])},s=[],n=r("1da1"),i=r("5530"),c=(r("96cf"),r("2f62")),o=r("6ad5"),l=r("5fad"),u={name:"Sidebar",props:{initialShowModal:{type:Boolean,required:!0}},data:function(){return{showModal:"",currentUserId:""}},created:function(){this.getCurrentUser()},methods:Object(i["a"])(Object(i["a"])({},Object(c["b"])({revokeAuthentication:o["H"]})),{},{logout:function(){this.revokeAuthentication(),this.$router.push("/login")},handleShowModalClick:function(){this.showModal=!0,this.$emit("show-modal")},getCurrentUser:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l["a"].getCurrentUser();case 3:if(r=e.sent,a=r.data,s=r.statusText,"OK"===s){e.next=7;break}throw new Error(s);case 7:t.currentUserId=a.id,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()}})},d=u,p=(r("c9ce"),r("2877")),f=Object(p["a"])(d,a,s,!1,null,"23a5645b",null);e["a"]=f.exports},c92c:function(t,e,r){t.exports=r.p+"img/icon_like_fill.7e3617b7.svg"},c9ce:function(t,e,r){"use strict";r("cc13")},cc13:function(t,e,r){}}]);
//# sourceMappingURL=chunk-7b67fb49.8c9180d6.js.map