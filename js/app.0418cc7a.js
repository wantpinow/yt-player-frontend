(function(e){function t(t){for(var a,i,o=t[0],l=t[1],u=t[2],d=0,m=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);c&&c(t);while(m.length)m.shift()();return n.push.apply(n,u||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],a=!0,o=1;o<s.length;o++){var l=s[o];0!==r[l]&&(a=!1)}a&&(n.splice(t--,1),e=i(i.s=s[0]))}return e}var a={},r={app:0},n=[];function i(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=a,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(s,a,function(t){return e[t]}.bind(null,a));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=l;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";s("85ec")},"56d7":function(e,t,s){"use strict";s.r(t),s.d(t,"api_route",(function(){return he}));s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("b-navbar",{scopedSlots:e._u([{key:"brand",fn:function(){return[s("b-navbar-item",{attrs:{tag:"router-link",to:{name:"Home"}}},[s("b-icon",{staticClass:"mr-4",attrs:{icon:"play"}}),s("strong",[e._v("Video Player")])],1)]},proxy:!0},{key:"start",fn:function(){return[s("b-navbar-dropdown",{attrs:{label:"Content"}},[s("b-navbar-item",{attrs:{tag:"router-link",to:{name:"AddVideo"}}},[s("b-icon",{staticClass:"mr-2",attrs:{pack:"fas",icon:"plus",size:"is-small"}}),e._v("Add New Video ")],1),s("b-navbar-item",{attrs:{href:"#"}},[s("b-icon",{staticClass:"mr-2",attrs:{pack:"fas",icon:"dice-five",size:"is-small"}}),e._v("Random Video ")],1),s("b-navbar-item",{attrs:{tag:"router-link",to:{name:"AllVideos"}}},[s("b-icon",{staticClass:"mr-2",attrs:{pack:"fas",icon:"video",size:"is-small"}}),e._v("Full Library ")],1)],1),s("b-navbar-item",{attrs:{tag:"router-link",to:{name:"About"}}},[e._v(" About ")])]},proxy:!0},{key:"end",fn:function(){return[s("b-navbar-item",{attrs:{tag:"div"}},[s("div",{staticClass:"buttons"},[s("div",{directives:[{name:"show",rawName:"v-show",value:!e.user,expression:"!user"}]},[s("b-button",{attrs:{tag:"router-link",to:{name:"Register"},type:"is-link"}},[e._v(" Register ")]),s("b-button",{attrs:{tag:"router-link",to:{name:"Login"},type:"is-link"}},[e._v(" Login ")])],1),s("div",{directives:[{name:"show",rawName:"v-show",value:e.user,expression:"user"}]},[s("b-button",{attrs:{type:"is-link"},on:{click:e.logout}},[e._v(" Logout ")])],1)])])]},proxy:!0}])}),s("router-view",{staticClass:"mt-5"})],1)},n=[],i=s("8c4f"),o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[e._v(" Welcome home!!! "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.user,expression:"user"}]},[e._v("It's nice to see you again "+e._s(e.user.username))])])},l=[],u=s("2f62"),c={name:"Home",computed:Object(u["b"])(["user"])},d=c,m=s("2877"),p=Object(m["a"])(d,o,l,!1,null,null,null),f=p.exports,v=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},b=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"about"},[s("h1",[e._v("This is an about page")])])}],h={},_=Object(m["a"])(h,v,b,!1,null,null,null),g=_.exports,y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-one-third is-offset-one-third"},[e._m(0),s("div",{staticClass:"hero is-primary"},[s("div",{staticClass:"hero-body mx-6 my-4"},[s("form",{on:{submit:e.loginUser}},[s("b-field",{staticClass:"mb-5",scopedSlots:e._u([{key:"label",fn:function(){return[s("h5",{staticClass:"title is-6"},[e._v("Username")])]},proxy:!0}])},[s("b-input",{attrs:{placeholder:"Enter Username..."},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),s("b-field",{staticClass:"mb-5",scopedSlots:e._u([{key:"label",fn:function(){return[s("h5",{staticClass:"title is-6"},[e._v("Password")])]},proxy:!0}])},[s("b-input",{attrs:{type:"password",placeholder:"Enter Password...","password-reveal":""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),s("hr",{staticClass:"mt-6"}),s("div",{staticClass:"buttons mt-6 is-centered"},[s("b-button",{attrs:{"native-type":"submit",type:"is-primary",inverted:""}},[e._v("Login")])],1)],1)])])])])},w=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"hero is-primary mb-4"},[s("div",{staticClass:"hero-body"},[s("p",{staticClass:"title"},[e._v("Login")]),s("p",{staticClass:"subtitle"},[e._v("Enter your username and password below.")])])])}],C=s("bc3a"),k=s.n(C);function x(e){var t=he+"auth/register";return k.a.post(t,{username:e.username,password:e.password})}function O(e){var t=he+"auth/login";return k.a.post(t,{username:e.username,password:e.password})}var P={data:function(){return{username:"",password:""}},methods:{loginUser:function(e){var t=this;e.preventDefault();var s={username:this.username,password:this.password};O(s).then((function(e){console.log(e),t.$store.commit("setUserToken",e.data.token),t.$store.commit("setUser",e.data.user),se.push({name:"Home"})}),(function(e){t.$buefy.toast.open({duration:5e3,message:"Username / Password are incorrect, try again.",position:"is-bottom",type:"is-danger"})}))},checkPassword:function(e){return""!=e}}},V=P,j=Object(m["a"])(V,y,w,!1,null,"69c0cea9",null),E=j.exports,U=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-half is-offset-one-quarter"},[e._m(0),s("div",{staticClass:"hero is-primary"},[s("div",{staticClass:"hero-body mx-6 my-4"},[s("form",{on:{submit:e.registerUser}},[s("b-field",{staticClass:"mb-5",scopedSlots:e._u([{key:"label",fn:function(){return[s("h5",{staticClass:"title is-6"},[e._v("Username")])]},proxy:!0}])},[s("b-input",{attrs:{placeholder:"Enter Username..."},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),s("b-field",{staticClass:"mb-5",scopedSlots:e._u([{key:"label",fn:function(){return[s("h5",{staticClass:"title is-6"},[e._v("Password")])]},proxy:!0}])},[s("b-input",{attrs:{type:"password",placeholder:"Enter Password...","password-reveal":""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),s("hr",{staticClass:"mt-6"}),s("div",{staticClass:"buttons mt-6 is-centered"},[s("b-button",{attrs:{"native-type":"submit",type:"is-primary",inverted:""}},[e._v("Register")])],1)],1)])])])])},$=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"hero is-primary mb-4"},[s("div",{staticClass:"hero-body"},[s("p",{staticClass:"title"},[e._v("Register")]),s("p",{staticClass:"subtitle"},[e._v("Enter a username and password below")])])])}],A={data:function(){return{username:"",password:""}},methods:{registerUser:function(e){var t=this;e.preventDefault();var s={username:this.username,password:this.password};this.checkPassword(s.password)?x(s).then((function(e){se.push({name:"Login"})}),(function(e){t.$buefy.toast.open({duration:5e3,message:"Could not register account, username already exists",position:"is-bottom",type:"is-danger"})})):this.$buefy.toast.open({duration:5e3,message:"Password must be XYZ",position:"is-bottom",type:"is-danger"})},checkPassword:function(e){return""!=e}}},L=A,T=Object(m["a"])(L,U,$,!1,null,"07c3e223",null),S=T.exports,R=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-half"},e._l(e.all_videos,(function(e){return s("div",{key:e.id},[s("VideoCard",{attrs:{params:e}})],1)})),0)])])},z=[],D=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card"},[e._v(" "+e._s(e.params.title)+" "),s("b-image",{attrs:{src:e.params.thumbnail_url,alt:"A random image",ratio:"6by4"}})],1)},N=[],H={props:["params"]},I=H,M=Object(m["a"])(I,D,N,!1,null,"eab77aa8",null),Y=M.exports,q={name:"AllVideos",components:{VideoCard:Y},data:function(){return{all_videos:[]}},mounted:function(){var e=this,t=this.api_route+"content/videos";k.a.get(t).then((function(t){e.all_videos=t.data}),(function(e){console.log(e)}))}},J=q,F=Object(m["a"])(J,R,z,!1,null,"77b51ea2",null),G=F.exports,W=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"columns"},[s("div",{staticClass:"card p-4 column is-half is-offset-one-quarter"},[s("h3",{staticClass:"subtitle is-3"},[e._v("Add New Video")]),s("hr"),s("section",[s("b-field",{attrs:{horizontal:"",label:"URL",type:e.url_message_type,message:e.error_message}},[s("b-input",{attrs:{placeholder:"Enter YouTube URL...",autocomplete:"off",disabled:!!e.url_verified,expanded:""},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:e.url_verified,expression:"url_verified"}]},[s("b-field",{attrs:{horizontal:"",label:"Title"}},[s("b-input",{attrs:{expanded:"",disabled:""},model:{value:e.video_title,callback:function(t){e.video_title=t},expression:"video_title"}})],1),s("b-field",{attrs:{horizontal:"",label:"Author"}},[s("b-input",{attrs:{expanded:"",disabled:""},model:{value:e.video_author,callback:function(t){e.video_author=t},expression:"video_author"}})],1),s("b-image",{attrs:{src:e.thumbnail_url,ratio:""}})],1),s("b-field",{staticClass:"mt-5"},[s("p",{staticClass:"control"},[s("b-button",{attrs:{label:e.url_verified?"Add to Database":"Get Video Data",type:"is-primary",loading:e.loading},on:{click:e.submitVideo}})],1)])],1)])])},X=[],Z=(s("b64b"),s("d3b7"),s("ac1f"),s("3ca3"),s("1276"),s("ddb0"),s("2b3d"),{name:"AddVideo",data:function(){return{url:"",loading:!1,error_message:"",url_message_type:"none",url_verified:!1,thumbnail_url:"",video_title:"",video_author:""}},methods:{submitVideo:function(){this.url_verified?this.addVideo():this.getVideoData()},addVideo:function(){var e=this;this.loading=!0;var t=this.api_route+"content/video",s=1,a=new URLSearchParams(this.url.split("?")[1]),r=a.get("v");k.a.post(t,{title:this.video_title,author:this.video_author,url:this.url,thumbnail_url:this.thumbnail_url,user_id:s,youtube_id:r}).then((function(t){0===Object.keys(t.data).length?e.$buefy.toast.open({message:"Video Already Exists",type:"is-warning"}):e.$buefy.toast.open({message:"Added Video: ".concat(t.data.title),type:"is-success"})}),(function(t){console.log(t),e.$buefy.toast.open({message:"Error. Could not add video",type:"is-danger"})})),this.url_verified=!1,this.url_message_type="none",this.url="",this.loading=!1},getVideoData:function(){var e=this;this.loading=!0;var t=new URLSearchParams(this.url.split("?")[1]),s=t.get("v");if(""==this.url)this.error_message="Please enter a YouTube URL",this.url_message_type="is-danger",this.url_verified=!1,this.loading=!1;else if(null==s)this.error_message="Invalid YouTube URL",this.url_message_type="is-danger",this.url_verified=!1,this.loading=!1;else{var a=this.api_route+"content/video/metadata/"+s;k.a.get(a).then((function(t){0===Object.keys(t.data).length?(e.error_message="Error collecting Video Title/Thumbnail",e.url_verified=!1,e.url_message_type="is-danger"):(e.thumbnail_url=t.data.thumbnail_url,e.video_title=t.data.title,e.video_author=t.data.author,e.error_message="",e.url_message_type="is-success",e.url_verified=!0),e.loading=!1}),(function(e){console.log(e)}))}}}}),B=Z,K=Object(m["a"])(B,W,X,!1,null,"43334fde",null),Q=K.exports;a["a"].use(i["a"]);var ee=[{path:"/",name:"Home",component:f},{path:"/about",name:"About",component:g},{path:"/login",name:"Login",component:E},{path:"/register",name:"Register",component:S},{path:"/video",name:"AllVideos",component:G},{path:"/add_video",name:"AddVideo",component:Q}],te=new i["a"]({routes:ee}),se=te,ae={computed:Object(u["b"])(["user"]),methods:{logout:function(){this.$store.dispatch("logout"),se.push({name:"Home"})}}},re=ae,ne=(s("034f"),Object(m["a"])(re,r,n,!1,null,null,null)),ie=ne.exports,oe={user:!1,user_token:!1},le={user:function(e){return e.user},userToken:function(e){return e.user_token}},ue={logout:function(e){var t=e.commit;t("setUserToken",!1),t("setUser",!1)}},ce={setUserToken:function(e,t){return e.user_token=t},setUser:function(e,t){return e.user=t}},de={state:oe,getters:le,actions:ue,mutations:ce};a["a"].use(u["a"]);var me=new u["a"].Store({state:{},mutations:{},actions:{},modules:{user:de}}),pe=s("289d"),fe=(s("5abe"),s("ecee")),ve=s("c074"),be=s("ad3d");fe["c"].add(ve["a"]),a["a"].component("vue-fontawesome",be["a"]),a["a"].mixin({data:function(){return{get api_route(){return"https://wantpinow.pythonanywhere.com/"}}}});var he="https://wantpinow.pythonanywhere.com/";a["a"].use(pe["a"],{defaultIconComponent:"vue-fontawesome",defaultIconPack:"fas",customIconPacks:{fas:{sizes:{default:"lg","is-small":"1x","is-medium":"2x","is-large":"3x"},iconPrefix:""}}}),a["a"].config.productionTip=!1,new a["a"]({router:se,store:me,render:function(e){return e(ie)}}).$mount("#app")},"85ec":function(e,t,s){}});
//# sourceMappingURL=app.0418cc7a.js.map