"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Game_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Game.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Game.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
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
    },
    Card: function Card() {
      return __webpack_require__.e(/*! import() */ "resources_js_Components_Card_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../Components/Card.vue */ "./resources/js/Components/Card.vue"));
    },
    PlayerField: function PlayerField() {
      return __webpack_require__.e(/*! import() */ "resources_js_Components_PlayerField_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../Components/PlayerField.vue */ "./resources/js/Components/PlayerField.vue"));
    }
  },
  data: function data() {
    return {
      players: [],
      number_of_players: 0,
      me: null,
      hand: [],
      player: {
        name: '',
        id: '',
        cards: [],
        photo: ''
      },
      card: {
        value: '',
        color: '',
        suit: '',
        backsides: 'http://127.0.0.1:8000/storage/Cards/card_backsides.png',
        frontside: ''
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios.post('/api/userInfo').then(function (response) {
      _this.me = response.data; // console.log(this.me);

      var gameUserChannel = window.Echo["private"]('game.' + _this.$route.params.id + '_user.' + _this.me.id);
      gameUserChannel.listen('DealCards', function (e) {
        // console.log(e.hand);
        _this.hand = e.hand;
      });
      window.Echo.leave();
      var mainchannel = window.Echo.join('game.' + _this.$route.params.id);
      mainchannel.here(function (users) {
        _this.dealCards();

        users.forEach(function (user) {
          // console.log(user);
          user.hand = [_this.card, _this.card, _this.card, _this.card]; // this.players[user.id].push(user);

          _this.players.push(user);
        });
      });
      mainchannel.joining(function (user) {
        user.hand = [_this.card, _this.card, _this.card, _this.card]; // this.players[user.id].push(user);

        _this.players.push(user);
      });
      mainchannel.leaving(function (user) {
        _this.players.splice(_this.players.indexOf(user), 1);
      });
      mainchannel.error(function (err) {
        console.log(err);
      }); // subscribe to gameMoves channel

      var gameMovesChannel = window.Echo.channel('moves.' + _this.$route.params.id);
      gameMovesChannel.listen('Move', function (e) {// console.log(e);
      });
    });
  },
  methods: {
    dealCards: function dealCards() {
      axios.post('/api/dealCards', {
        game_id: this.$route.params.id
      }).then(function (response) {// console.log(response.data);
      });
    },
    logg: function logg() {
      // find user by id in players array
      for (var i = 0; i < this.players.length; i++) {
        if (this.players[i].id == this.me.id) {
          console.log(this.players[i].hand);
        }
      }

      console.log(this.players);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Game.vue?vue&type=style&index=0&id=1deb7a1b&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Game.vue?vue&type=style&index=0&id=1deb7a1b&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.containe[data-v-1deb7a1b]{\r\n  width: 100;\r\n  height: 100;\n}\n.container[data-v-1deb7a1b] {  \r\n  height: 100vh;\r\n  width: 100vw;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\r\n  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\r\n  grid-auto-columns: 1fr;\r\n  gap: 0px 0px;\r\n  grid-auto-flow: row;\n}\n.player0[data-v-1deb7a1b] { grid-area: 8 / 4 / 10 / 6;\n}\n.player1[data-v-1deb7a1b] { grid-area: 1 / 4 / 3 / 6;\n}\n.player1card0[data-v-1deb7a1b] { grid-area: 6 / 4 / 7 / 5;\n}\n.player1card1[data-v-1deb7a1b] { grid-area: 6 / 5 / 7 / 6;\n}\n.player1card2[data-v-1deb7a1b] { grid-area: 7 / 4 / 8 / 5;\n}\n.player1card3[data-v-1deb7a1b] { grid-area: 7 / 5 / 8 / 6;\n}\n.player1card4[data-v-1deb7a1b] { grid-area: 7 / 6 / 8 / 7;\n}\n.player1card5[data-v-1deb7a1b] { grid-area: 6 / 6 / 7 / 7;\n}\n.player1card6[data-v-1deb7a1b] { grid-area: 6 / 3 / 7 / 4;\n}\n.player1card7[data-v-1deb7a1b] { grid-area: 7 / 3 / 8 / 4;\n}\n.player2card0[data-v-1deb7a1b] { grid-area: 4 / 5 / 5 / 6;\n}\n.player2card1[data-v-1deb7a1b] { grid-area: 4 / 4 / 5 / 5;\n}\n.player2card2[data-v-1deb7a1b] { grid-area: 3 / 5 / 4 / 6;\n}\n.player2card3[data-v-1deb7a1b] { grid-area: 3 / 4 / 4 / 5;\n}\n.player2card4[data-v-1deb7a1b] { grid-area: 3 / 3 / 4 / 4;\n}\n.player2card5[data-v-1deb7a1b] { grid-area: 4 / 3 / 5 / 4;\n}\n.player2card6[data-v-1deb7a1b] { grid-area: 4 / 6 / 5 / 7;\n}\n.player2card7[data-v-1deb7a1b] { grid-area: 3 / 6 / 4 / 7;\n}\n.playerField1[data-v-1deb7a1b] { grid-area: 6 / 3 / 10 / 7;\n}\n.playerField2[data-v-1deb7a1b] { grid-area: 1 / 3 / 5 / 7;\n}\n.playerIcon[data-v-1deb7a1b] {\r\n        background-color:#333;\r\n        padding:20px;\r\n        border-radius:10px;\r\n        color:#fff;\r\n        display:flex;\r\n        align-items:center;\r\n        justify-content:center;\r\n        font-size:40px;\r\n        font-family:sans-serif;\n}\r\n\r\n\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Game.vue?vue&type=style&index=0&id=1deb7a1b&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Game.vue?vue&type=style&index=0&id=1deb7a1b&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_style_index_0_id_1deb7a1b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Game.vue?vue&type=style&index=0&id=1deb7a1b&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Game.vue?vue&type=style&index=0&id=1deb7a1b&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_style_index_0_id_1deb7a1b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_style_index_0_id_1deb7a1b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Pages/Game.vue":
/*!*************************************!*\
  !*** ./resources/js/Pages/Game.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Game_vue_vue_type_template_id_1deb7a1b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game.vue?vue&type=template&id=1deb7a1b&scoped=true& */ "./resources/js/Pages/Game.vue?vue&type=template&id=1deb7a1b&scoped=true&");
/* harmony import */ var _Game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Game.vue?vue&type=script&lang=js&");
/* harmony import */ var _Game_vue_vue_type_style_index_0_id_1deb7a1b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Game.vue?vue&type=style&index=0&id=1deb7a1b&scoped=true&lang=css& */ "./resources/js/Pages/Game.vue?vue&type=style&index=0&id=1deb7a1b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Game_vue_vue_type_template_id_1deb7a1b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Game_vue_vue_type_template_id_1deb7a1b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1deb7a1b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Game.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Game.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/Game.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Game.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Game.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Game.vue?vue&type=style&index=0&id=1deb7a1b&scoped=true&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Pages/Game.vue?vue&type=style&index=0&id=1deb7a1b&scoped=true&lang=css& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_style_index_0_id_1deb7a1b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Game.vue?vue&type=style&index=0&id=1deb7a1b&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Game.vue?vue&type=style&index=0&id=1deb7a1b&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/Pages/Game.vue?vue&type=template&id=1deb7a1b&scoped=true&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Game.vue?vue&type=template&id=1deb7a1b&scoped=true& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_template_id_1deb7a1b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_template_id_1deb7a1b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_template_id_1deb7a1b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Game.vue?vue&type=template&id=1deb7a1b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Game.vue?vue&type=template&id=1deb7a1b&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Game.vue?vue&type=template&id=1deb7a1b&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Game.vue?vue&type=template&id=1deb7a1b&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "containe" }, [
    _c(
      "div",
      { staticClass: "container" },
      [
        _vm._l(_vm.players, function (player, index) {
          return _c(
            "div",
            {
              key: player.id,
              class: "player" + index,
              on: {
                click: function ($event) {
                  return _vm.logg()
                },
              },
            },
            [
              player
                ? _c("PlayerIcon", { attrs: { player: player, index: index } })
                : _vm._e(),
            ],
            1
          )
        }),
        _vm._v(" "),
        _vm._l(_vm.hand, function (card, index) {
          return _c("Card", {
            key: index,
            class: "player1card" + index,
            attrs: { card: card, index: index },
          })
        }),
        _vm._v(" "),
        _vm._l(_vm.hand, function (card, index) {
          return _c("Card", {
            key: index + 10,
            class: "player2card" + index,
            attrs: { card: card, index: index },
          })
        }),
      ],
      2
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);