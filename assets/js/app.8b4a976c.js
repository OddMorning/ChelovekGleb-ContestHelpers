(function(t){function e(e){for(var r,i,s=e[0],l=e[1],c=e[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/ChelovekGleb-ContestHelpers/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"057f":function(t,e,n){t.exports={container:"content_container_2XZVx",component:"content_component_1QkIJ"}},2378:function(t,e,n){t.exports={container:"animatedBackgroundOption_container_j2KQV",checkbox:"animatedBackgroundOption_checkbox_21o25"}},2779:function(t,e,n){"use strict";var r=n("2378"),o=n.n(r);n.d(e,"default",(function(){return o.a}))},"2b41":function(t,e,n){t.exports={container:"index_container_JqJLS",resultContainer:"index_resultContainer_1wpxd",blackListContainer:"index_blackListContainer_QNby9",controlContainer:"index_controlContainer_10aQP",buttons:"index_buttons_jqLSR",filters:"index_filters_O5lwz",textarea:"index_textarea_2GJUi"}},"31cd":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.container},[n("div",{class:t.$style.stateContainer},[n("div",{domProps:{textContent:t._s("Логин:")}}),t.login&&"ok"===t.authState?n("div",{class:t.$style.login,domProps:{textContent:t._s(t.login)}}):n("div",{class:[t.$style.stateIcon,t.$style[t.authState]]}),t.errorMsg?[n("div",{domProps:{textContent:t._s("Ошибка:")}}),n("div",{domProps:{textContent:t._s(t.errorMsg)}})]:t._e()],2),n("div",{class:t.$style.buttonsContainer},[t.$store.state.isAuthenticated?n("gButton",{attrs:{caption:"Отозвать токен"},on:{click:t.revokeToken}}):n("gButton",{attrs:{caption:"Авторизоваться"},on:{click:t.doAuth}})],1)])},o=[],a=n("1da1"),i=n("a79e"),s={components:{gButton:()=>Promise.resolve().then(n.bind(null,"32d9"))},data:()=>({authState:"noAuth",login:"",errorMsg:"",twitch:null}),mounted(){var t=this;return Object(a["a"])((function*(){const e=yield t.$store.dispatch("getTwitchController");t.twitch=e,e.user.token?(t.authState="waiting",yield e.checkToken(),e.user.ok?(t.authState="ok",t.login=e.user.name,t.$store.state.isAuthenticated=!0):(t.authState="error",t.errorMsg=e.user.errorMsg,t.$store.state.isAuthenticated=!1,delete i["a"].token)):t.authState="noAuth"}))()},methods:{doAuth(){var t=this;return Object(a["a"])((function*(){t.twitch.auth({scope:["channel:read:redemptions","channel:read:subscriptions","channel:manage:redemptions"]})}))()},revokeToken(){var t=this;return Object(a["a"])((function*(){t.twitch.revokeToken(),t.authState="noAuth",t.login="",t.$store.state.isAuthenticated=!1,delete i["a"].token}))()}}},l=s,c=n("b3f4"),u=n("2877");function d(t){this["$style"]=c["default"].locals||c["default"]}var p=Object(u["a"])(l,r,o,!1,d,null,null);e["default"]=p.exports},"32d9":function(t,e,n){"use strict";n.r(e);var r=function(){var t,e=this,n=e.$createElement,r=e._self._c||n;return r("button",e._g(e._b({class:[e.$style.container,(t={},t[e.$style.nowrap]=e.nowrap,t[e.$style.active]=e.active,t)]},"button",e.$attrs,!1),e.$listeners),[e._v(" "+e._s(e.caption)+" ")])},o=[],a={props:{caption:{type:String,default:null},nowrap:{type:Boolean,default:null},active:{type:Boolean,default:null}}},i=a,s=n("3c21"),l=n("2877");function c(t){this["$style"]=s["default"].locals||s["default"]}var u=Object(l["a"])(i,r,o,!1,c,null,null);e["default"]=u.exports},3307:function(t,e,n){t.exports={container:"gButton_container_38-OD",active:"gButton_active_3VvNt",nowrap:"gButton_nowrap_3oxt5"}},3612:function(t,e,n){t.exports={container:"index_container_1ctnu",stateContainer:"index_stateContainer_Kdhrh",login:"index_login_2dweu",buttonsContainer:"index_buttonsContainer_1mwlu",stateIcon:"index_stateIcon_AkqWm",noAuth:"index_noAuth_3y-tk",waiting:"index_waiting_26PqX",error:"index_error_3o6D0"}},"3c21":function(t,e,n){"use strict";var r=n("3307"),o=n.n(r);n.d(e,"default",(function(){return o.a}))},"3e54":function(t,e,n){var r={"./auth/index.vue":"31cd","./randomizer/index.vue":"4ab5","./rewards/index.vue":"8605","./subs/index.vue":"5085"};function o(t){return Promise.resolve().then((function(){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}var o=r[t];return n(o)}))}o.keys=function(){return Object.keys(r)},o.id="3e54",t.exports=o},"4ab5":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.container},[n("iframe",{class:t.$style.iframe,attrs:{src:t.url}})])},o=[],a={data:()=>({url:"https://randomus.ru/list"})},i=a,s=n("b6b3"),l=n("2877");function c(t){this["$style"]=s["default"].locals||s["default"]}var u=Object(l["a"])(i,r,o,!1,c,null,null);e["default"]=u.exports},5085:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.container},[n("gContainer",{class:t.$style.resultContainer,attrs:{caption:"Результат"}},[n("gTextarea",{ref:"result",class:t.$style.textarea,attrs:{placeholder:"[ пусто ]",disabled:""},model:{value:t.input.result,callback:function(e){t.$set(t.input,"result",e)},expression:"input.result"}})],1),n("gContainer",{class:t.$style.blackListContainer,attrs:{caption:"Чёрный список"}},[n("gTextarea",{class:t.$style.textarea,attrs:{placeholder:"Список имён, которые будут исключены из результата"},on:{input:t.onBlacklistEdit},model:{value:t.input.blacklist,callback:function(e){t.$set(t.input,"blacklist",e)},expression:"input.blacklist"}})],1),n("div",{class:t.$style.controlContainer},[n("div",{class:t.$style.buttons},[n("gButton",{class:t.$style.refreshSubsBtn,attrs:{caption:"Обновить"},on:{click:t.getSubs}}),n("CopyButton",{class:t.$style.copyBtn,attrs:{target:function(){return t.$refs.result}}})],1),n("div",{class:t.$style.filters},[n("gButton",{attrs:{caption:t.conf.tier1?"[×] Tier 1":"[ ] Tier 1",nowrap:""},on:{click:function(e){return t.toggleConf("tier1")}}}),n("gButton",{attrs:{caption:t.conf.tier2?"[×] Tier 2":"[ ] Tier 2",nowrap:""},on:{click:function(e){return t.toggleConf("tier2")}}}),n("gButton",{attrs:{caption:t.conf.tier3?"[×] Tier 3":"[ ] Tier 3",nowrap:""},on:{click:function(e){return t.toggleConf("tier3")}}})],1)])],1)},o=[],a=(n("28a5"),n("1da1")),i=n("a79e"),s={components:{CopyButton:()=>Promise.resolve().then(n.bind(null,"f09b")),gButton:()=>Promise.resolve().then(n.bind(null,"32d9")),gContainer:()=>Promise.resolve().then(n.bind(null,"de27")),gTextarea:()=>Promise.resolve().then(n.bind(null,"b8aa"))},data:()=>({input:{blacklist:"",result:""},conf:{tier1:!0,tier2:!0,tier3:!0},resultRaw:null,twitch:null}),mounted(){var t=this;return Object(a["a"])((function*(){const e=yield t.$store.dispatch("getTwitchController");t.twitch=e;const n=null!==i["a"].blacklist;t.input.blacklist=n?i["a"].blacklist:e.user.name,yield t.getSubs()}))()},methods:{getSubs(){var t=this;return Object(a["a"])((function*(){try{t.input.result="( Получаю список подписчиков... )";const e=yield t.twitch.api("subscriptions",{query:{first:100,broadcaster_id:t.twitch.user.id}});if(!e.ok)return t.input.result="Что-то пошло не так при обращении к API:\n\n"+e.err,void t.$set(t,"resultRaw",{});t.$set(t,"resultRaw",e.data),t.processResult()}catch(e){t.input.result="Что-то пошло не так при обработке запроса:\n\n"+e.message}}))()},toggleConf(t){this.conf[t]=!this.conf[t],this.processResult()},onBlacklistEdit(t){i["a"].blacklist=t,this.processResult()},processResult(){const t=this.input.blacklist.split("\n"),e=this.resultRaw.filter(e=>{const n="1000"===e.tier,r="2000"===e.tier,o="3000"===e.tier,a=t.includes(e.user_name);let i=!0;return n&&(i=i&&this.conf.tier1),r&&(i=i&&this.conf.tier2),o&&(i=i&&this.conf.tier3),a&&(i=!1),i}).map(t=>t.user_name).join("\n");this.input.result=e}}},l=s,c=n("f913"),u=n("2877");function d(t){this["$style"]=c["default"].locals||c["default"]}var p=Object(u["a"])(l,r,o,!1,d,null,null);e["default"]=p.exports},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("1da1"),o=n("2b0e"),a=function(){var t,e=this,n=e.$createElement,r=e._self._c||n;return r("div",{class:(t={},t[e.$style.animatedBackground]=e.isBackgroundAnimated,t),attrs:{id:e.$style.app}},[r("Header"),r("Content"),e.showFooter?r("Footer"):e._e()],1)},i=[],s={components:{Header:()=>Promise.resolve().then(n.bind(null,"f613")),Content:()=>Promise.resolve().then(n.bind(null,"d903")),Footer:()=>Promise.resolve().then(n.bind(null,"d4c6"))},computed:{isBackgroundAnimated(){return this.$store.state.isBackgroundAnimated},showFooter(){return"auth"===this.$store.state.currentTab}},watch:{isBackgroundAnimated:{immediate:!0,handler(t){const e=this.$style.animatedBackground;t?document.body.classList.add(e):document.body.classList.remove(e)}}}},l=s,c=n("e24a"),u=n("2877");function d(t){this["$style"]=c["default"].locals||c["default"]}var p=Object(u["a"])(l,a,i,!1,d,null,null),f=p.exports,h=n("3835"),b=(n("28a5"),n("ac6a"),n("6b54"),n("ade3"));function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(n,!0).forEach((function(e){Object(b["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t){return new Promise(e=>setTimeout(e,t))}var y=class{constructor(t){let e=t.clientId,n=t.token;this.clientId=e,this.user={ok:!1,id:null,name:null,token:n,expiresIn:null,errorMsg:null}}api(t){var e=arguments,n=this;return Object(r["a"])((function*(){let r=e.length>1&&void 0!==e[1]?e[1]:{},o=!1,a=null,i={ok:!1,data:[]};console.log("[API] [%s]\n===> %o",t,r);do{let e={};a&&(e.after=a),r.query&&(e=m({},e,{},r.query));const s=m({},r,{query:e});r.body&&(s.body=r.body),console.log("[API] [%s]\n--\x3e %o",t,s);const l=yield n._api(t,s);if(yield g(250),console.log("[API] [%s]\n<-- %o",t,l),l.ok){const t=!(l.res.pagination&&l.res.pagination.cursor);i.data.push(...l.res.data),t?(o=!0,i.ok=!0):a=l.res.pagination.cursor}else o=!0,i=l}while(!o);return console.log("[API] [%s]\n<=== %o",t,i),i}))()}_api(t){var e=arguments,n=this;return Object(r["a"])((function*(){let r=e.length>1&&void 0!==e[1]?e[1]:{};const o={method:r.method||"GET",headers:{authorization:"Bearer "+n.user.token,"client-id":n.clientId}};r.method;let a,i=`https://api.twitch.tv/helix/${t}/`;if(r.query){const t=new URLSearchParams(r.query).toString();i+="?"+t}r.headers&&(o.headers=m({},o.headers,{},r.headers)),r.body&&(o.headers["Content-Type"]="application/json",o.body=JSON.stringify(r.body));try{const t=yield fetch(i,o),e=yield t.json();if(!t.ok)throw new Error(JSON.stringify(e));a={ok:!0,res:e}}catch(s){a={ok:!1,err:s.message}}return a}))()}checkToken(){var t=this;return Object(r["a"])((function*(){const e=t.user.token;let n;try{const r=yield fetch("https://id.twitch.tv/oauth2/validate",{headers:{authorization:"Bearer "+e}});if(n=yield r.json(),!r.ok)throw new Error(n.message);t.user={ok:!0,id:n.user_id,name:n.login,token:e,expiresIn:n.expires_in,errorMsg:null}}catch(r){t.user={ok:!1,id:null,name:null,token:null,expiresIn:null,errorMsg:r.message}}return console.log("[API] [validate]\n %o",{raw:n,parsed:t.user}),t.user.ok}))()}auth(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.scope,n=t.inNewWindow;if(!e)throw new Error('"scope" is missing!');const r=new URLSearchParams({client_id:this.clientId,response_type:"token",redirect_uri:location.origin+location.pathname,scope:e.join(" ")}).toString(),o="https://id.twitch.tv/oauth2/authorize?"+r;n?window.open(o,"_blank"):location.href=o}revokeToken(){var t=this;return Object(r["a"])((function*(){const e=new URLSearchParams({client_id:t.clientId,token:t.user.token}).toString(),n=yield fetch("https://id.twitch.tv/oauth2/revoke?"+e,{method:"POST"});return console.log("resp",n),n.ok?(t.user={ok:!1,id:null,name:null,token:null,expiresIn:null,errorMsg:null},!0):(alert("Не удалось отозвать токен"),!1)}))()}},_=n("a79e");function k(t){const e={};for(const n of t.slice(1).split("&")){const t=n.split("="),r=Object(h["a"])(t,2),o=r[0],a=r[1];e[o]=decodeURIComponent(a)}return e}function w(){return x.apply(this,arguments)}function x(){return x=Object(r["a"])((function*(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e="75rb88i37m9kha2q2toaha4g82zn8h",n=t.access_token||_["a"].token,r=new y({clientId:e,token:n});return t.access_token&&(_["a"].token=n),r})),x.apply(this,arguments)}var $=Object(r["a"])((function*(){const t=location.hash,e=t?k(t):{},n=yield w(e);return{hash:e,twitchController:n}})),O=n("2f62"),C=function(){var t=Object(r["a"])((function*(t){let e=t.initialData;o["a"].use(O["a"]);const n=e.twitchController,r=new O["a"].Store({state:{isAuthenticated:!1,isBackgroundAnimated:!0,currentTab:"auth"},actions:{getTwitchController(t){return n},selectTab(t,e){t.state.currentTab=e}}});return r}));return function(e){return t.apply(this,arguments)}}();o["a"].config.productionTip=!1;const j=function(){var t=Object(r["a"])((function*(){const t=yield $(),e=yield C({initialData:t});new o["a"]({store:e,render:t=>t(f)}).$mount("#app")}));return function(){return t.apply(this,arguments)}}();j().catch(t=>console.error("Failed to init app:",t))},"62fb":function(t,e,n){"use strict";var r=n("a0be"),o=n.n(r);n.d(e,"default",(function(){return o.a}))},8605:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.container},[n("gContainer",{class:t.$style.resultContainer,attrs:{caption:"Результат"}},[n("gTextarea",{ref:"result",class:t.$style.textarea,attrs:{placeholder:"[ пусто ]",disabled:""},model:{value:t.input.result,callback:function(e){t.$set(t.input,"result",e)},expression:"input.result"}})],1),n("div",{class:t.$style.controlContainer},[n("div",{class:t.$style.buttons},[n("gButton",{attrs:{caption:"Обновить"},on:{click:t.getAll}}),n("CopyButton",{class:t.$style.copyBtn,attrs:{target:function(){return t.$refs.result}}})],1),n("div",{class:t.$style.filters},[n("gButton",{attrs:{caption:t.filters.onlyUniqueNames?"[×] Без повторений":"[ ] Без повторений",title:"Исключить повторяющиеся имена",nowrap:""},on:{click:function(e){return t.toggleFilter("onlyUniqueNames")}}}),t.hasRewards?t._l(t.rewards,(function(e,r){return n("gButton",{key:r,attrs:{caption:e.enabled?"[×] "+e.title:"[ ] "+e.title,title:e.prompt,nowrap:""},on:{click:function(n){return t.toggleReward(e)}}})})):t._e(),n("gButton",{class:t.$style.addRewardBtn,attrs:{caption:"Создать награду",title:"Создать новую награду, к которой приложение будет иметь доступ",nowrap:""},on:{click:t.createReward}})],2)])],1)},o=[],a=n("1da1"),i={components:{CopyButton:()=>Promise.resolve().then(n.bind(null,"f09b")),gButton:()=>Promise.resolve().then(n.bind(null,"32d9")),gContainer:()=>Promise.resolve().then(n.bind(null,"de27")),gTextarea:()=>Promise.resolve().then(n.bind(null,"b8aa"))},data:()=>({input:{result:""},filters:{onlyUniqueNames:!1},rewards:[],rewardRedemptions:[],twitch:null}),computed:{hasRewards(){return!!this.rewards.length}},mounted(){var t=this;return Object(a["a"])((function*(){const e=yield t.$store.dispatch("getTwitchController");t.twitch=e,yield t.getAll()}))()},methods:{getAll(){var t=this;return Object(a["a"])((function*(){yield t.getRewards(),yield t.getRewardRedemptions()}))()},createReward(){var t=this;return Object(a["a"])((function*(){const e=prompt("Из-за ограничений Twitch API приложение может иметь доступ только к собственным наградам.\n\nСозданные награды можно активировать, редактировать или удалить в панели управления канала.\n\nВведите название новой награды:");if(!e)return;const n=yield t.twitch.api("channel_points/custom_rewards",{method:"POST",query:{broadcaster_id:t.twitch.user.id},body:{title:e,prompt:"(создано через приложение инструментов для конкурса)",cost:100,is_enabled:!1}});n.ok?yield t.getRewards():t.input.result="Что-то пошло не так при обращении к API:\n\n"+n.err}))()},getRewards(){var t=this;return Object(a["a"])((function*(){try{const e=t.input.result;t.input.result="( Получаю список наград... )",t.$set(t,"rewards",[]);const n=yield t.twitch.api("channel_points/custom_rewards",{query:{broadcaster_id:t.twitch.user.id,only_manageable_rewards:!0}});if(!n.ok)return void(t.input.result="Что-то пошло не так при обращении к API:\n\n"+n.err);const r=n.data.map(t=>({id:t.id,title:t.title,prompt:t.prompt,enabled:t.is_enabled}));t.$set(t,"rewards",r),e&&(t.input.result=e)}catch(e){t.input.result="Что-то пошло не так при обработке запроса:\n\n"+e.message}}))()},getRewardRedemptions(){var t=this;return Object(a["a"])((function*(){try{t.input.result="( Получаю список запросов на награды... )",t.$set(t,"rewardRedemptions",[]);for(const e of t.rewards){const n=yield t.twitch.api("channel_points/custom_rewards/redemptions",{query:{first:50,broadcaster_id:t.twitch.user.id,reward_id:e.id,status:"UNFULFILLED"}});if(!n.ok)return void(t.input.result="Что-то пошло не так при обращении к API:\n\n"+n.err);const r=n.data.map(t=>({id:t.id,rewardId:t.reward.id,userName:t.user_name,userInput:t.user_input,status:t.status,date:new Date(t.redeemed_at)}));t.rewardRedemptions.push(...r)}t.processResult()}catch(e){t.input.result="Что-то пошло не так при обработке запроса:\n\n"+e.message}}))()},toggleFilter(t){this.filters[t]=!this.filters[t],this.processResult()},toggleReward(t){t.enabled=!t.enabled,this.processResult()},processResult(){const t=this.rewards.filter(t=>t.enabled).map(t=>t.id);let e=this.rewardRedemptions;e=e.filter((e,n,r)=>{const o=t.includes(e.rewardId),a=o;return a}).map(t=>t.userName),this.filters.onlyUniqueNames&&(e=e.filter((t,e,n)=>n.indexOf(t)===e)),this.input.result=e.join("\n")}}},s=i,l=n("e098"),c=n("2877");function u(t){this["$style"]=l["default"].locals||l["default"]}var d=Object(c["a"])(s,r,o,!1,u,null,null);e["default"]=d.exports},"87e0":function(t,e,n){"use strict";var r=n("057f"),o=n.n(r);n.d(e,"default",(function(){return o.a}))},8987:function(t,e,n){t.exports={animatedBackground:"App_animatedBackground_Bi1nn",background:"App_background_1pY6v",app:"App_app_3cl75"}},9505:function(t,e,n){t.exports={container:"index_container_2SQMD",iframe:"index_iframe_3Zge-"}},"955a":function(t,e,n){t.exports={container:"index_container_3r6t6",resultContainer:"index_resultContainer_30vPi",blackListContainer:"index_blackListContainer_3eMwc",controlContainer:"index_controlContainer_33d79",buttons:"index_buttons_2H3K_",filters:"index_filters_22i3g",textarea:"index_textarea_19J-h"}},a0be:function(t,e,n){t.exports={container:"gContainer_container_3h8Ox",caption:"gContainer_caption_dsJxw",content:"gContainer_content_1lTim"}},a11e:function(t,e,n){var r={"./auth/index.vue":"31cd","./randomizer/index.vue":"4ab5","./rewards/index.vue":"8605","./subs/index.vue":"5085"};function o(t){var e=a(t);return n(e)}function a(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=a,t.exports=o,o.id="a11e"},a398:function(t,e,n){"use strict";var r=n("b332"),o=n.n(r);n.d(e,"default",(function(){return o.a}))},a5ae:function(t,e,n){"use strict";var r=n("dc8c"),o=n.n(r);n.d(e,"default",(function(){return o.a}))},a79e:function(t,e,n){"use strict";const r=new Proxy({},{get(t,e){const n=JSON.parse(localStorage.getItem(e));return n},set(t,e,n){return localStorage.setItem(e,JSON.stringify(n)),!0},deleteProperty(t,e){return localStorage.removeItem(e),!0}});e["a"]=r},a9b0:function(t,e,n){t.exports={container:"gTextarea_container_1dWIn"}},b332:function(t,e,n){t.exports={container:"footer_container_8FSkW",aboutLink:"footer_aboutLink_2IyZ9"}},b3f4:function(t,e,n){"use strict";var r=n("3612"),o=n.n(r);n.d(e,"default",(function(){return o.a}))},b6b3:function(t,e,n){"use strict";var r=n("9505"),o=n.n(r);n.d(e,"default",(function(){return o.a}))},b8aa:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],class:t.$style.container,attrs:{spellcheck:"false"},domProps:{value:t.value},on:{input:[function(e){e.target.composing||(t.value=e.target.value)},function(e){return t.$emit("input",t.value)}]}})},o=[],a={props:{value:{type:String,default:null}}},i=a,s=n("d021"),l=n("2877");function c(t){this["$style"]=s["default"].locals||s["default"]}var u=Object(l["a"])(i,r,o,!1,c,null,null);e["default"]=u.exports},d021:function(t,e,n){"use strict";var r=n("a9b0"),o=n.n(r);n.d(e,"default",(function(){return o.a}))},d4c6:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.container},[n("AnimatedBackgroundOption",{model:{value:t.isBackgroundAnimated,callback:function(e){t.isBackgroundAnimated=e},expression:"isBackgroundAnimated"}}),n("div"),n("div",[t._v(" Специально для "),n("a",{class:t.$style.aboutLink,attrs:{target:"_blank",href:"https://www.twitch.tv/chelovekgleb"},domProps:{textContent:t._s("@chelovekgleb")}})])],1)},o=[],a={components:{AnimatedBackgroundOption:()=>Promise.resolve().then(n.bind(null,"f663"))},computed:{isBackgroundAnimated:{get(){return this.$store.state.isBackgroundAnimated},set(t){this.$store.state.isBackgroundAnimated=t}}}},i=a,s=n("a398"),l=n("2877");function c(t){this["$style"]=s["default"].locals||s["default"]}var u=Object(l["a"])(i,r,o,!1,c,null,null);e["default"]=u.exports},d903:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.container},[n("KeepAlive",[n(t.currentTab,{tag:"Component",class:t.$style.component})],1)],1)},o=[];n("a481"),n("ac6a");const a=n("a11e"),i={};for(const f of a.keys()){const t=f.replace("./","").replace("/index.vue","");i[t]=()=>n("3e54")(`./${t}/index.vue`)}var s={components:i,computed:{currentTab(){return this.$store.state.currentTab}}},l=s,c=n("87e0"),u=n("2877");function d(t){this["$style"]=c["default"].locals||c["default"]}var p=Object(u["a"])(l,r,o,!1,d,null,null);e["default"]=p.exports},dc8c:function(t,e,n){t.exports={container:"header_container_3xbMC",tab:"header_tab_cKG2y",active:"header_active_1Uw4l",locked:"header_locked_Hxd5i"}},de27:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._g(t._b({class:t.$style.container},"div",t.$attrs,!1),t.$listeners),[n("div",{class:t.$style.caption,domProps:{textContent:t._s(t.caption)}}),n("div",{class:[t.$style.content,t.innerClass]},[t._t("default")],2)])},o=[],a={props:{innerClass:{type:[Object,Array,String],default:null},caption:{type:String,default:null}}},i=a,s=n("62fb"),l=n("2877");function c(t){this["$style"]=s["default"].locals||s["default"]}var u=Object(l["a"])(i,r,o,!1,c,null,null);e["default"]=u.exports},e098:function(t,e,n){"use strict";var r=n("2b41"),o=n.n(r);n.d(e,"default",(function(){return o.a}))},e24a:function(t,e,n){"use strict";var r=n("8987"),o=n.n(r);n.d(e,"default",(function(){return o.a}))},f09b:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("gButton",{attrs:{caption:t.buttonCaption},on:{click:t.copyFromTarget}})},o=[],a={props:{target:{type:Function,required:!0}},components:{gButton:()=>Promise.resolve().then(n.bind(null,"32d9"))},data:()=>({buttonCaption:""}),mounted(){this.setCopyButtonText("copy")},methods:{setCopyButtonText(t){let e;switch(t){case"copy":e="Копировать";break;case"copied":e="Скопировано!";break;case"error":e="Не удалось скопировать";break}this.buttonCaption=e},copyFromTarget(){let t=this.target();t._isVue&&(t=t.$el);const e=t.disabled;e&&(t.disabled=!1),t.focus(),t.select();const n=document.execCommand("copy");window.getSelection&&(window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges()),e&&(t.disabled=!0),n?(this.setCopyButtonText("copied"),setTimeout(()=>{this.setCopyButtonText("copy")},750)):this.setCopyButtonText("error")}}},i=a,s=n("2877"),l=Object(s["a"])(i,r,o,!1,null,null,null);e["default"]=l.exports},f613:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.container},t._l(t.tabs,(function(e,r){var o;return n("button",{key:r,class:[t.$style.tab,(o={},o[t.$style.active]=t.tab===e.tab,o[t.$style.locked]=!t.$store.state.isAuthenticated&&"auth"!==e.tab,o)],domProps:{textContent:t._s(e.name)},on:{click:function(n){return t.selectTab(e.tab)}}})})),0)},o=[],a={data:()=>({tabs:[{tab:"auth",name:"Авторизация"},{tab:"subs",name:"Подписчики"},{tab:"rewards",name:"Награды"},{tab:"randomizer",name:"Рандомайзер"}]}),computed:{tab(){return this.$store.state.currentTab}},methods:{selectTab(t){this.$store.dispatch("selectTab",t)}}},i=a,s=n("a5ae"),l=n("2877");function c(t){this["$style"]=s["default"].locals||s["default"]}var u=Object(l["a"])(i,r,o,!1,c,null,null);e["default"]=u.exports},f663:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{class:t.$style.container},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],ref:"checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.value)?t._i(t.value,null)>-1:t.value},on:{click:function(e){return t.updateValue(t.$refs.checkbox.checked)},change:function(e){var n=t.value,r=e.target,o=!!r.checked;if(Array.isArray(n)){var a=null,i=t._i(n,a);r.checked?i<0&&(t.value=n.concat([a])):i>-1&&(t.value=n.slice(0,i).concat(n.slice(i+1)))}else t.value=o}}}),t._v(" Анимированный фон ")])},o=[],a=n("a79e"),i={props:{value:{type:Boolean,retuired:!0}},mounted(){const t="boolean"!==typeof a["a"].isBackgroundAnimated||a["a"].isBackgroundAnimated;this.updateValue(t)},methods:{updateValue(t){const e="undefined"===typeof t?this.$refs.checkbox.checked:t;a["a"].isBackgroundAnimated=e,this.$emit("input",e)}}},s=i,l=n("2779"),c=n("2877");function u(t){this["$style"]=l["default"].locals||l["default"]}var d=Object(c["a"])(s,r,o,!1,u,null,null);e["default"]=d.exports},f913:function(t,e,n){"use strict";var r=n("955a"),o=n.n(r);n.d(e,"default",(function(){return o.a}))}});