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
    },
    Deck: function Deck() {
      return __webpack_require__.e(/*! import() */ "resources_js_Components_Deck_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../Components/Deck.vue */ "./resources/js/Components/Deck.vue"));
    }
  },
  data: function data() {
    return {
      players: [],
      number_of_players: 0,
      me: null,
      hand: [],
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
      });
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Game.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Game.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.containe{\r\n  width: 100;\r\n  height: 100;\n}\n.container {  \r\n  height: 100vh;\r\n  width: 100vw;\r\n  display: grid; \r\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr; \r\n  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; \r\n  gap: 0px 0px; \r\n  grid-template-areas: \r\n    \". . player1 . .\"\r\n    \". cardField1 cardField1 cardField1 .\"\r\n    \". cardField1 cardField1 cardField1 .\"\r\n    \". playField playField playField .\"\r\n    \". playField playField playField .\"\r\n    \". cardField0 cardField0 cardField0 .\"\r\n    \". cardField0 cardField0 cardField0 .\"\r\n    \". . player0 . .\";\n}\n.player0 {\r\n  grid-area: player0; \r\n  justify-items: center;\r\n  align-items: center;\n}\n.player1 { grid-area: player1;\r\n  justify-items: center;\r\n  align-items: center;\n}\n.cardField0 { \r\n  grid-area: cardField0; \r\n  display: grid; \r\n  grid-template-columns: 1fr 1fr 1fr 1fr; \r\n  grid-template-rows: 1fr 1fr; \r\n  gap: 0px 0px; \r\n  grid-template-areas: \r\n    \"player0card6 player0card0 player0card1 player0card5\"\r\n    \"player0card7 player0card2 player0card3 player0card4\"; \r\n    /* start output from top */\n}\n.cardField1 { \r\n  grid-area: cardField1; \r\n  display: grid; \r\n  grid-template-columns: 1fr 1fr 1fr 1fr; \r\n  grid-template-rows: 1fr 1fr; \r\n  gap: 0px 0px; \r\n  grid-template-areas: \r\n    \"player1card6 player1card0 player1card1 player1card5\"\r\n    \"player1card7 player1card2 player1card3 player1card4\";\n}\n.player0card0 { grid-area: player0card0;\n}\n.player0card1 { grid-area: player0card1;\n}\n.player0card2 { grid-area: player0card2;\n}\n.player0card3 { grid-area: player0card3;\n}\n.player0card4 { grid-area: player0card4;\n}\n.player0card5 { grid-area: player0card5;\n}\n.player0card6 { grid-area: player0card6;\n}\n.player0card7 { grid-area: player0card7;\n}\n.player1card0 { grid-area: player1card0;\n}\n.player1card1 { grid-area: player1card1;\n}\n.player1card2 { grid-area: player1card2;\n}\n.player1card3 { grid-area: player1card3;\n}\n.player1card4 { grid-area: player1card4;\n}\n.player1card5 { grid-area: player1card5;\n}\n.player1card6 { grid-area: player1card6;\n}\n.player1card7 { grid-area: player1card7;\n}\n.playerIcon {\r\n  justify-items: center;\r\n  align-items: center;\n}\n.playField {\r\n    grid-area: playField; \r\n    display: flex;\r\n    align-items: center;\n}\n.left {\r\n    justify-content: left;\n}\n.right {\r\n    justify-content: right;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Game.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Game.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Game.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Game.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
/* harmony import */ var _Game_vue_vue_type_template_id_1deb7a1b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game.vue?vue&type=template&id=1deb7a1b& */ "./resources/js/Pages/Game.vue?vue&type=template&id=1deb7a1b&");
/* harmony import */ var _Game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Game.vue?vue&type=script&lang=js&");
/* harmony import */ var _Game_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Game.vue?vue&type=style&index=0&lang=css& */ "./resources/js/Pages/Game.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Game_vue_vue_type_template_id_1deb7a1b___WEBPACK_IMPORTED_MODULE_0__.render,
  _Game_vue_vue_type_template_id_1deb7a1b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
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

/***/ "./resources/js/Pages/Game.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/Game.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Game.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Game.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/Pages/Game.vue?vue&type=template&id=1deb7a1b&":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/Game.vue?vue&type=template&id=1deb7a1b& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_template_id_1deb7a1b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_template_id_1deb7a1b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_template_id_1deb7a1b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Game.vue?vue&type=template&id=1deb7a1b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Game.vue?vue&type=template&id=1deb7a1b&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Game.vue?vue&type=template&id=1deb7a1b&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Game.vue?vue&type=template&id=1deb7a1b& ***!
  \***********************************************************************************************************************************************************************************************************/
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
        _vm._l(_vm.players, function (player, index) {
          return _c("PlayerField", {
            key: "player" + player.id,
            class: "cardField" + index,
            attrs: { player: player, index: index },
          })
        }),
        _vm._v(" "),
        _c("Deck", { attrs: { side: "left" } }),
        _vm._v(" "),
        _c("Deck", { attrs: { side: "right" } }),
      ],
      2
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);