"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Home.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Home.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  name: 'home',
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)({
    count: function count(state) {
      return state.count;
    }
  })),
  mounted: function mounted() {
    // disconnect from all channels
    window.Echo.leave();
    window.Echo.channel('channel').listen('Hello', function (e) {
      console.log(e);
    });
  },
  methods: {
    joinGame: function joinGame() {
      var _this = this;

      // redirect to /game/join
      axios.post('/api/lobby/join', {
        numberOfPlayers: 2
      }).then(function (response) {
        _this.$router.push('/lobby/' + response.data.id);
      });
    },
    login: function login() {
      axios.post('/api/login', {
        email: 'leonlav77@gmail.com',
        password: 'password'
      }).then(function (response) {
        console.log(response.data);
      });
    },
    login2: function login2() {
      axios.post('/api/login', {
        email: 'leonlav7@gmail.com',
        password: 'password'
      }).then(function (response) {
        console.log(response.data);
      });
    },
    login3: function login3() {
      axios.post('/api/login', {
        email: 'leonlav@gmail.com',
        password: 'password'
      }).then(function (response) {
        console.log(response.data);
      });
    },
    register: function register() {
      axios.post('/api/register', {
        name: 'username',
        email: 'leonlav77@gmail.com',
        password: 'password',
        password_confirmation: 'password'
      }).then(function (response) {
        console.log(response.data);
      });
    },
    register2: function register2() {
      axios.post('/api/register', {
        name: 'usernam',
        email: 'leonlav7@gmail.com',
        password: 'password',
        password_confirmation: 'password'
      }).then(function (response) {
        console.log(response.data);
      });
    },
    register3: function register3() {
      axios.post('/api/register', {
        name: 'userna',
        email: 'leonlav@gmail.com',
        password: 'password',
        password_confirmation: 'password'
      }).then(function (response) {
        console.log(response.data);
      });
    },
    logout: function logout() {
      axios.post('/api/logout').then(function (response) {
        console.log(response.data);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/Pages/Home.vue":
/*!*************************************!*\
  !*** ./resources/js/Pages/Home.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_6a63e488___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=6a63e488& */ "./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Home.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_6a63e488___WEBPACK_IMPORTED_MODULE_0__.render,
  _Home_vue_vue_type_template_id_6a63e488___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Home.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Home.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488&":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_6a63e488___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_6a63e488___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_6a63e488___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=template&id=6a63e488& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488& ***!
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
  return _c("div", { staticClass: "home" }, [
    _c(
      "button",
      {
        staticClass: "btn",
        on: {
          click: function ($event) {
            return _vm.$store.commit("INCREMENT")
          },
        },
      },
      [_vm._v("INCREMENT")]
    ),
    _vm._v(" "),
    _c(
      "button",
      {
        on: {
          click: function ($event) {
            return _vm.joinGame(71)
          },
        },
      },
      [_vm._v("Join game")]
    ),
    _vm._v(" "),
    _c(
      "button",
      {
        on: {
          click: function ($event) {
            return _vm.login()
          },
        },
      },
      [_vm._v("login")]
    ),
    _vm._v(" "),
    _c(
      "button",
      {
        on: {
          click: function ($event) {
            return _vm.register()
          },
        },
      },
      [_vm._v("register")]
    ),
    _vm._v(" "),
    _c(
      "button",
      {
        on: {
          click: function ($event) {
            return _vm.login2()
          },
        },
      },
      [_vm._v("login2")]
    ),
    _vm._v(" "),
    _c(
      "button",
      {
        on: {
          click: function ($event) {
            return _vm.register2()
          },
        },
      },
      [_vm._v("register2")]
    ),
    _vm._v(" "),
    _c(
      "button",
      {
        on: {
          click: function ($event) {
            return _vm.login3()
          },
        },
      },
      [_vm._v("login2")]
    ),
    _vm._v(" "),
    _c(
      "button",
      {
        on: {
          click: function ($event) {
            return _vm.register3()
          },
        },
      },
      [_vm._v("register2")]
    ),
    _vm._v(" "),
    _c(
      "button",
      {
        on: {
          click: function ($event) {
            return _vm.logout()
          },
        },
      },
      [_vm._v("logout")]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);