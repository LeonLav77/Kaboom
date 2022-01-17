"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Lobby_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Lobby.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Lobby.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    PlayerIcon: function PlayerIcon() {
      return __webpack_require__.e(/*! import() */ "resources_js_Components_PlayerIcon_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../Components/PlayerIcon.vue */ "./resources/js/Components/PlayerIcon.vue"));
    }
  },
  data: function data() {
    return {
      players: [],
      number_of_players: 0,
      me: null,
      owner: null,
      countDown: 10
    };
  },
  mounted: function mounted() {
    var _this = this;

    window.Echo.leave();
    axios.post('/api/lobbyInfo/' + this.$route.params.id).then(function (response) {
      _this.owner = response.data.user;
      _this.number_of_players = response.data.number_of_players;
    });
    axios.post('/api/userInfo').then(function (response) {
      _this.me = response.data;
    });
    var channel = window.Echo.join('lobby.' + this.$route.params.id);
    channel.here(function (users) {
      users.forEach(function (user) {
        _this.players.push(user);
      });
      console.log(_this.me); // if you are the owner of the lobby put owner true

      if (_this.me.id == _this.owner.id) {
        _this.owner = true; // alert('You are the owner of this lobby');
      }
    });
    channel.joining(function (user) {
      _this.players.push(user); // $('#player-icon-'+user.id).addClass('animated bounceIn');


      var no_of_players = _this.players.length;

      if (no_of_players == _this.number_of_players && _this.owner == true) {
        axios.post('/api/startCountdown', {
          lobby_id: _this.$route.params.id
        }).then(function (response) {
          console.log(response.data);
        });
      } // check if lobby is full, if yes start count down

    });
    channel.leaving(function (user) {
      _this.players.splice(_this.players.indexOf(user), 1);
    });
    channel.error(function (err) {
      console.log(err);
    });
    channel.listen('StartCountdown', function (data) {
      _this.countDownTimer();
    });
    channel.listen('StartGame', function (data) {
      _this.$router.push('/game/' + _this.$route.params.id);
    }); // SHOULD PROBABLY REGISTER ALL EVENTS UNDER SAME CHANNEL
  },
  methods: {
    countDownTimer: function countDownTimer() {
      var _this2 = this;

      if (this.countDown > 0) {
        setTimeout(function () {
          _this2.countDown -= 1;

          _this2.countDownTimer();
        }, 1000);
      } else {
        // if you are the leader you should start
        if (this.owner == true) {
          axios.post('/api/startGame', {
            lobby_id: this.$route.params.id
          }).then(function (response) {
            console.log(response.data);
          });
        }
      }
    }
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    // if going to the game then next()
    if (to.path == '/game/') {
      next();
    }

    var answer = window.confirm('Do you want to leave the lobby?');

    if (answer) {
      window.Echo.leave();
      next();
    } else {
      next(false);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Lobby.vue?vue&type=style&index=0&id=27b0fe06&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Lobby.vue?vue&type=style&index=0&id=27b0fe06&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.wrapper[data-v-27b0fe06] {\n      margin: 20px auto;\n      width:400px;\n      height:400px;\n      display:grid;\n      grid-template-columns: 200px 200px;\n      grid-row: auto auto;\n      grid-column-gap: 20px;\n      grid-row-gap: 20px;\n}\n.playerIcon[data-v-27b0fe06] {\n      background-color:#333;\n      padding:20px;\n      border-radius:10px;\n      color:#fff;\n      display:flex;\n      align-items:center;\n      justify-content:center;\n      font-size:40px;\n      font-family:sans-serif;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Lobby.vue?vue&type=style&index=0&id=27b0fe06&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Lobby.vue?vue&type=style&index=0&id=27b0fe06&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Lobby_vue_vue_type_style_index_0_id_27b0fe06_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Lobby.vue?vue&type=style&index=0&id=27b0fe06&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Lobby.vue?vue&type=style&index=0&id=27b0fe06&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Lobby_vue_vue_type_style_index_0_id_27b0fe06_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Lobby_vue_vue_type_style_index_0_id_27b0fe06_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Pages/Lobby.vue":
/*!**************************************!*\
  !*** ./resources/js/Pages/Lobby.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Lobby_vue_vue_type_template_id_27b0fe06_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lobby.vue?vue&type=template&id=27b0fe06&scoped=true& */ "./resources/js/Pages/Lobby.vue?vue&type=template&id=27b0fe06&scoped=true&");
/* harmony import */ var _Lobby_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Lobby.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Lobby.vue?vue&type=script&lang=js&");
/* harmony import */ var _Lobby_vue_vue_type_style_index_0_id_27b0fe06_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Lobby.vue?vue&type=style&index=0&id=27b0fe06&scoped=true&lang=css& */ "./resources/js/Pages/Lobby.vue?vue&type=style&index=0&id=27b0fe06&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Lobby_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Lobby_vue_vue_type_template_id_27b0fe06_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Lobby_vue_vue_type_template_id_27b0fe06_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "27b0fe06",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Lobby.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Lobby.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/Pages/Lobby.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lobby_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Lobby.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Lobby.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lobby_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Lobby.vue?vue&type=style&index=0&id=27b0fe06&scoped=true&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Pages/Lobby.vue?vue&type=style&index=0&id=27b0fe06&scoped=true&lang=css& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Lobby_vue_vue_type_style_index_0_id_27b0fe06_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Lobby.vue?vue&type=style&index=0&id=27b0fe06&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Lobby.vue?vue&type=style&index=0&id=27b0fe06&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/Pages/Lobby.vue?vue&type=template&id=27b0fe06&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/Lobby.vue?vue&type=template&id=27b0fe06&scoped=true& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Lobby_vue_vue_type_template_id_27b0fe06_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Lobby_vue_vue_type_template_id_27b0fe06_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Lobby_vue_vue_type_template_id_27b0fe06_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Lobby.vue?vue&type=template&id=27b0fe06&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Lobby.vue?vue&type=template&id=27b0fe06&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Lobby.vue?vue&type=template&id=27b0fe06&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Lobby.vue?vue&type=template&id=27b0fe06&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "wrapper" },
    [
      _vm._l(_vm.players, function (player, index) {
        return _c("PlayerIcon", { key: index, attrs: { player: player } })
      }),
      _vm._v(" "),
      _c("div", { attrs: { id: "countdownTimer" } }, [
        _c("div", { attrs: { id: "countdown" } }, [
          _c("div", { attrs: { id: "countdown-text" } }, [
            _c("span", { attrs: { id: "countdown-time" } }, [
              _vm._v(_vm._s(_vm.countDown)),
            ]),
            _vm._v(" "),
            _c("span", { attrs: { id: "countdown-text-label" } }, [
              _vm._v("seconds"),
            ]),
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "countdown-button",
              attrs: { id: "countdown" },
              on: {
                click: function ($event) {
                  return _vm.countDownTimer()
                },
              },
            },
            [_vm._v("Start")]
          ),
        ]),
      ]),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);