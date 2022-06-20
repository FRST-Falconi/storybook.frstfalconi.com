'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var reactI18next = require('react-i18next');
var material = require('@mui/material');
var styled = require('styled-components');
var Button$2 = require('@mui/material/Button');
var Menu = require('@mui/material/Menu');
var MenuItem = require('@mui/material/MenuItem');
var Card = require('@mui/material/Card');
var Stepper = require('@mui/material/Stepper');
var FormControl = require('@mui/material/FormControl');
var Select = require('@mui/material/Select');
var CheckIcon = require('@mui/icons-material/Check');
var LoginIcon = require('@mui/icons-material/Login');
var Box = require('@mui/material/Box');
var Step = require('@mui/material/Step');
var CardActions = require('@mui/material/CardActions');
var StepConnector = require('@mui/material/StepConnector');
var styles = require('@mui/material/styles');
var Select$1 = require('react-select');
var data = require('@emoji-mart/data');
var emojiMart = require('emoji-mart');
var de = require('@emoji-mart/data/i18n/de.json');
var en = require('@emoji-mart/data/i18n/en.json');
var fr = require('@emoji-mart/data/i18n/fr.json');
var it = require('@emoji-mart/data/i18n/it.json');
var pl = require('@emoji-mart/data/i18n/pl.json');
var pt = require('@emoji-mart/data/i18n/pt.json');
var ru = require('@emoji-mart/data/i18n/ru.json');
var zh = require('@emoji-mart/data/i18n/zh.json');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button$2);
var Menu__default = /*#__PURE__*/_interopDefaultLegacy(Menu);
var MenuItem__default = /*#__PURE__*/_interopDefaultLegacy(MenuItem);
var Card__default = /*#__PURE__*/_interopDefaultLegacy(Card);
var Stepper__default = /*#__PURE__*/_interopDefaultLegacy(Stepper);
var FormControl__default = /*#__PURE__*/_interopDefaultLegacy(FormControl);
var Select__default = /*#__PURE__*/_interopDefaultLegacy(Select);
var CheckIcon__default = /*#__PURE__*/_interopDefaultLegacy(CheckIcon);
var LoginIcon__default = /*#__PURE__*/_interopDefaultLegacy(LoginIcon);
var Box__default = /*#__PURE__*/_interopDefaultLegacy(Box);
var Step__default = /*#__PURE__*/_interopDefaultLegacy(Step);
var CardActions__default = /*#__PURE__*/_interopDefaultLegacy(CardActions);
var StepConnector__default = /*#__PURE__*/_interopDefaultLegacy(StepConnector);
var Select__default$1 = /*#__PURE__*/_interopDefaultLegacy(Select$1);
var data__default = /*#__PURE__*/_interopDefaultLegacy(data);
var de__namespace = /*#__PURE__*/_interopNamespace(de);
var en__namespace = /*#__PURE__*/_interopNamespace(en);
var fr__namespace = /*#__PURE__*/_interopNamespace(fr);
var it__namespace = /*#__PURE__*/_interopNamespace(it);
var pl__namespace = /*#__PURE__*/_interopNamespace(pl);
var pt__namespace = /*#__PURE__*/_interopNamespace(pt);
var ru__namespace = /*#__PURE__*/_interopNamespace(ru);
var zh__namespace = /*#__PURE__*/_interopNamespace(zh);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$7 = "/* DEFAULTS */\n@import url('https://fonts.googleapis.com/css?family=Work+Sans:regular,bold,italic&subset=latin,latin-ext');\n@import url('https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400&family=Work+Sans:wght@700&display=swap');\n\nhtml,\nbody {\n  padding: 0;\n  margin: 0;\n  font-family: Work Sans !important;\n  font-weight: 500 !important;\n}\n\np {\n  margin: 0px;\n}\n\nbr {\n  display: block;\n  margin: 8px 0;\n}\n\n* {\n  box-sizing: border-box;\n  outline: none;\n}\n\n.avatar {\n  vertical-align: middle;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n\n.ellipsis {\n  overflow: hidden !important;\n  white-space: nowrap !important;\n  text-overflow: ellipsis !important;\n  display: inline-block !important;\n}\n\n.tag {\n  border-radius: 13px;\n  min-height: 24px;\n  text-align: center;\n  font-size: 14px;\n  line-height: 16px;\n  display: inline-block;\n}\n\n.content {\n  padding: 24px !important;\n  border-radius: inherit;\n}\n\n.fixedBottom {\n  position: absolute !important;\n  bottom: 0px !important;\n  right: 0px !important;\n}\n\n.innerContent {\n  padding: 0px 24px 0px 24px !important;\n  border-radius: inherit;\n}\n\n.centeredVertically {\n  display: inline-flex;\n  align-items: center;\n}\n\n.cardContent {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  box-shadow: none !important;\n  border: 1px solid #c4c4c4;\n  background-color: #fff;\n  box-sizing: border-box !important;\n  border-radius: 8px !important;\n  padding: 24px !important;\n}\n\n.cardContentNoMargin {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  box-shadow: none !important;\n  border: 1px solid #c4c4c4;\n  background-color: #fff;\n  box-sizing: border-box !important;\n  border-radius: 8px !important;\n}\n\n.cardTopRightConner {\n  float: right;\n  border-radius: 0px 8px;\n}\n\n.frstButton {\n  color: #fff;\n  font-weight: bold !important;\n  background-color: #ff4d0d;\n  border-color: #ff4d0d;\n  height: 48px !important;\n  font-size: 16px !important;\n  padding-left: 16px !important;\n  padding-right: 16px !important;\n  padding-top: 18px !important;\n  padding-bottom: 18px !important;\n  text-transform: none !important;\n  border-radius: 5px 5px 5px 5px !important;\n  box-shadow: 0 2px 0 rgb(0 0 0 / 2%) !important;\n}\n\n.blue {\n  border: 1px solid #e8e8e8 !important;\n  background-color: #fff !important;\n  color: #0645ad !important;\n}\n\n.shimmer {\n  background: #f6f7f8;\n  background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #c4c4c4 40%, #c4c4c4 100%);\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  position: relative;\n  color: transparent;\n\n  -webkit-animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-animation-name: placeholderShimmer;\n  -webkit-animation-timing-function: linear;\n}\n\n@keyframes placeholderShimmer {\n  0% {\n    background-position: -468px 0;\n  }\n\n  100% {\n    background-position: 468px 0;\n  }\n}\n";
styleInject(css_248z$7);

function EditIcon() {
    return (jsxRuntime.jsx("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.1788 1.92286C16.3858 1.71638 16.667 1.6 16.9607 1.6C17.2544 1.6 17.5356 1.71638 17.7426 1.92286C17.9496 2.12928 18.0654 2.4088 18.0654 2.69981C18.0654 2.99083 17.9496 3.27034 17.7426 3.47676L9.5855 11.6127C9.4439 11.7539 9.26546 11.8543 9.07141 11.9027C8.26586 12.1036 7.52969 11.3753 7.73154 10.57C7.78007 10.3765 7.88036 10.1997 8.02166 10.0588L16.1788 1.92286ZM16.9607 0C16.244 0 15.5563 0.283939 15.0489 0.790021L6.5187 9.29803C6.41591 9.40055 6.34296 9.52912 6.30766 9.66994L5.40975 13.2523C5.34143 13.5248 5.42113 13.8133 5.61971 14.0121C5.81829 14.2109 6.10663 14.291 6.3793 14.223L9.97094 13.3274C10.1114 13.2924 10.2398 13.2199 10.3423 13.1176L18.8725 4.6096C19.38 4.10345 19.6654 3.41652 19.6654 2.69981C19.6654 1.9831 19.38 1.29617 18.8725 0.790021C18.3651 0.283939 17.6774 0 16.9607 0ZM2.59582 1.89842C1.90804 1.89842 1.24801 2.17091 0.761035 2.65662C0.273994 3.1424 0 3.80169 0 4.48958V17.0277C0 17.7156 0.273995 18.3749 0.761035 18.8607C1.24801 19.3464 1.90804 19.6188 2.59582 19.6188H15.1666C15.8544 19.6188 16.5144 19.3464 17.0014 18.8607C17.4884 18.3749 17.7624 17.7156 17.7624 17.0277V10.7586C17.7624 10.3168 17.4042 9.95864 16.9624 9.95864C16.5206 9.95864 16.1624 10.3168 16.1624 10.7586V17.0277C16.1624 17.2899 16.058 17.5418 15.8715 17.7278C15.6849 17.9139 15.4314 18.0189 15.1666 18.0189H2.59582C2.33104 18.0189 2.07753 17.9139 1.89093 17.7278C1.70441 17.5418 1.6 17.2899 1.6 17.0277V4.48958C1.6 4.22738 1.70441 3.9755 1.89093 3.78946C2.07753 3.60335 2.33104 3.49842 2.59582 3.49842H8.8812C9.32303 3.49842 9.6812 3.14025 9.6812 2.69842C9.6812 2.25659 9.32303 1.89842 8.8812 1.89842H2.59582Z", fill: "#0645AD" }, void 0) }, void 0));
}
function WarningIcon$1() {
    return (jsxRuntime.jsx("svg", { width: "24", height: "20", viewBox: "0 0 24 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M22.9209 17.2636L12.8305 0.814496C12.1589 -0.281702 11.0604 -0.266316 10.3889 0.829881L0.298445 17.2567C-0.37312 18.3537 0.128439 19.2006 1.41311 19.2006H21.8055C23.0909 19.2006 23.5925 18.359 22.9209 17.2636ZM11.6012 4.45541C12.2474 4.45541 12.7474 5.16929 12.7143 6.04163L12.5097 11.2988C12.4766 12.1703 12.0666 12.8842 11.5989 12.8842C11.1312 12.8842 10.7204 12.1703 10.6873 11.2988L10.485 6.04163C10.4519 5.16929 10.9535 4.45541 11.6012 4.45541ZM11.6012 16.8444C10.7858 16.8444 10.2265 16.2482 10.2435 15.4335C10.2435 14.6012 10.8043 14.0227 11.6012 14.0227C12.432 14.0227 12.9574 14.6012 12.9751 15.4335C12.9751 16.2482 12.432 16.8444 11.6012 16.8444Z", fill: "#F3D224" }, void 0) }, void 0));
}
function CheckboxChecked() {
    return (jsxRuntime.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("rect", { x: "0.5", y: "0.5", width: "15", height: "15", rx: "1.5", fill: "#F35F24", stroke: "#F35F24" }, void 0), jsxRuntime.jsx("path", { d: "M13 4L6.125 11L3 7.81818", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, void 0)] }, void 0));
}
function CheckboxEmpty() {
    return (jsxRuntime.jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("rect", { x: "0.6", y: "0.6", width: "14.8", height: "14.8", rx: "1.4", fill: "white", stroke: "#A6A6A6", strokeWidth: "1.2" }, void 0) }, void 0));
}
function AlertCicle({ fill }) {
    return (jsxRuntime.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", stroke: fill ?? "#FF0000", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, void 0), jsxRuntime.jsx("path", { d: "M12 8V12", stroke: fill ?? "#FF0000", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, void 0), jsxRuntime.jsx("path", { d: "M12 16H12.01", stroke: fill ?? "#FF0000", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, void 0)] }, void 0));
}
function DoubleCheck({ fill }) {
    return (jsxRuntime.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M1.33301 8L4.83301 11.3333L6.58301 9.33333", stroke: fill ?? "#FFF", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }, void 0), jsxRuntime.jsx("path", { d: "M5.33301 8.00033L8.83301 11.3337L14.6663 4.66699", stroke: fill ?? "#FFF", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }, void 0), jsxRuntime.jsx("path", { d: "M10.6663 4.66699L8.33301 7.33366", stroke: fill ?? "#FFF", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }, void 0)] }, void 0));
}
function WithoutTrail({ fill }) {
    return (jsxRuntime.jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M14.2607 1.73828C12.6084 0.0859375 9.93457 0.0859375 8.28418 1.73828L6.3916 3.63086L7.3877 4.62695L9.28027 2.73438C10.3311 1.68359 12.1045 1.57227 13.2646 2.73438C14.4268 3.89648 14.3154 5.66797 13.2646 6.71875L11.3721 8.61133L12.3701 9.60938L14.2627 7.7168C15.9111 6.06445 15.9111 3.39062 14.2607 1.73828ZM6.71973 13.2656C5.66895 14.3164 3.89551 14.4277 2.73535 13.2656C1.57324 12.1035 1.68457 10.332 2.73535 9.28125L4.62793 7.38867L3.62988 6.39063L1.7373 8.2832C0.0849609 9.93555 0.0849609 12.6094 1.7373 14.2598C3.38965 15.9102 6.06348 15.9121 7.71387 14.2598L9.60645 12.3672L8.61035 11.3711L6.71973 13.2656ZM3.08301 2.08984C3.05364 2.06077 3.01398 2.04445 2.97266 2.04445C2.93133 2.04445 2.89167 2.06077 2.8623 2.08984L2.08887 2.86328C2.05979 2.89265 2.04348 2.93231 2.04348 2.97363C2.04348 3.01496 2.05979 3.05462 2.08887 3.08398L12.917 13.9121C12.9775 13.9727 13.0771 13.9727 13.1377 13.9121L13.9111 13.1387C13.9717 13.0781 13.9717 12.9785 13.9111 12.918L3.08301 2.08984Z", fill: fill ? fill : '#222222' }, void 0) }, void 0));
}
function MoreDotsHorizontal({ fill }) {
    return (jsxRuntime.jsxs("svg", { width: "20", height: "4", viewBox: "0 0 20 4", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3Z", stroke: fill ?? "#FFF", strokeWidth: "2" }, void 0), jsxRuntime.jsx("path", { d: "M10 3C10.5523 3 11 2.55228 11 2C11 1.44772 10.5523 1 10 1C9.44772 1 9 1.44772 9 2C9 2.55228 9.44772 3 10 3Z", stroke: fill ?? "#FFF", strokeWidth: "2" }, void 0), jsxRuntime.jsx("path", { d: "M18 3C18.5523 3 19 2.55228 19 2C19 1.44772 18.5523 1 18 1C17.4477 1 17 1.44772 17 2C17 2.55228 17.4477 3 18 3Z", stroke: fill ?? "#FFF", strokeWidth: "2" }, void 0)] }, void 0));
}
function Mail({ fill }) {
    return (jsxRuntime.jsx("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M18.125 3.125H1.875C1.5293 3.125 1.25 3.4043 1.25 3.75V16.25C1.25 16.5957 1.5293 16.875 1.875 16.875H18.125C18.4707 16.875 18.75 16.5957 18.75 16.25V3.75C18.75 3.4043 18.4707 3.125 18.125 3.125ZM17.3438 5.28906V15.4688H2.65625V5.28906L2.11719 4.86914L2.88477 3.88281L3.7207 4.5332H16.2812L17.1172 3.88281L17.8848 4.86914L17.3438 5.28906ZM16.2812 4.53125L10 9.41406L3.71875 4.53125L2.88281 3.88086L2.11523 4.86719L2.6543 5.28711L9.32617 10.4746C9.51805 10.6237 9.7541 10.7046 9.99707 10.7046C10.24 10.7046 10.4761 10.6237 10.668 10.4746L17.3438 5.28906L17.8828 4.86914L17.1152 3.88281L16.2812 4.53125Z", fill: fill ? fill : "#222222" }, void 0) }, void 0));
}
function Dot({ fill }) {
    return (jsxRuntime.jsx("svg", { width: "4", height: "4", viewBox: "0 0 4 4", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M2 4C1.46957 4 0.960859 3.78929 0.585786 3.41421C0.210713 3.03914 0 2.53043 0 2C0 1.46957 0.210713 0.960859 0.585786 0.585786C0.960859 0.210713 1.46957 0 2 0C2.53043 0 3.03914 0.210713 3.41421 0.585786C3.78929 0.960859 4 1.46957 4 2C4 2.53043 3.78929 3.03914 3.41421 3.41421C3.03914 3.78929 2.53043 4 2 4Z", fill: fill ?? "#FFF", strokeWidth: "2" }, void 0) }, void 0));
}
function Brain({ fill }) {
    return (jsxRuntime.jsx("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M5.9594 2.51021C6.65273 1.97021 7.5594 1.67188 8.46023 1.67188C8.9994 1.67188 9.43523 1.85688 9.76607 2.15104C9.85523 2.23021 9.9344 2.31604 10.0052 2.40437C10.0761 2.31604 10.1552 2.23021 10.2444 2.15104C10.5752 1.85688 11.0111 1.67188 11.5502 1.67188C12.4511 1.67188 13.3586 1.97021 14.0502 2.51021C14.5902 2.92938 15.0127 3.50854 15.1786 4.20771C15.5286 4.26604 15.8394 4.44438 16.0911 4.68021C16.4911 5.05604 16.7769 5.59937 16.9561 6.15854C17.1386 6.72604 17.2294 7.36354 17.2019 7.97604C17.1877 8.28937 17.1419 8.60937 17.0544 8.91521L17.1086 8.94021C17.4169 9.08521 17.6669 9.31271 17.8544 9.61521C18.2086 10.186 18.3336 11.0077 18.3336 12.0552C18.3336 13.2594 17.8727 14.0769 17.2811 14.5844C16.9729 14.8487 16.6122 15.0447 16.2227 15.1594C16.0814 15.8106 15.791 16.4202 15.3744 16.9402C14.7719 17.6935 13.8352 18.3302 12.5769 18.3302C11.5686 18.3302 10.7744 17.7719 10.2644 17.2385C10.174 17.1432 10.0878 17.044 10.0061 16.941C9.92408 17.0437 9.83761 17.1427 9.7469 17.2377C9.2369 17.7727 8.44273 18.3302 7.4344 18.3302C6.17523 18.3302 5.23857 17.6935 4.6369 16.9402C4.21964 16.4203 3.92868 15.8107 3.7869 15.1594C3.39774 15.0446 3.03732 14.8486 2.7294 14.5844C2.13773 14.076 1.67773 13.2594 1.67773 12.0552C1.67773 11.0077 1.80273 10.186 2.15607 9.61521C2.34353 9.30442 2.62315 9.05976 2.95607 8.91521C2.87045 8.60897 2.82095 8.29378 2.80857 7.97604C2.78107 7.36354 2.8719 6.72604 3.0544 6.15854C3.23357 5.60021 3.51857 5.05604 3.9194 4.68021C4.17009 4.43586 4.48767 4.27141 4.8319 4.20771C4.99857 3.50771 5.42023 2.92938 5.9594 2.51021ZM6.72773 3.49604C6.27273 3.85021 6.00607 4.32187 6.00607 4.86521C6.00599 4.96419 5.98241 5.06173 5.93726 5.14982C5.89211 5.2379 5.82669 5.314 5.74638 5.37186C5.66607 5.42971 5.57316 5.46766 5.47532 5.48259C5.37747 5.49751 5.27748 5.48899 5.18357 5.45771C5.0694 5.41937 4.94857 5.42854 4.77523 5.59187C4.5819 5.77271 4.38607 6.10021 4.2444 6.54021C4.10269 6.98592 4.03953 7.45287 4.05773 7.92021C4.07857 8.38354 4.18857 8.76854 4.3619 9.02854C4.39058 9.07162 4.41381 9.11808 4.43107 9.16687H5.33273C5.9327 9.16675 6.51049 9.3937 6.94999 9.80212C7.38948 10.2105 7.65811 10.7702 7.7019 11.3685C8.06089 11.5118 8.35893 11.7753 8.54501 12.1141C8.7311 12.4529 8.79366 12.8458 8.72199 13.2256C8.65032 13.6054 8.44887 13.9485 8.15213 14.1961C7.85538 14.4438 7.48179 14.5806 7.09529 14.5832C6.70879 14.5857 6.33341 14.4539 6.03341 14.2102C5.7334 13.9665 5.52742 13.6261 5.45071 13.2473C5.37401 12.8685 5.43135 12.4748 5.61292 12.1336C5.7945 11.7924 6.08901 11.5249 6.44607 11.3769C6.40649 11.1099 6.27227 10.8661 6.06789 10.6899C5.86351 10.5136 5.6026 10.4168 5.33273 10.4169H3.14523C3.02023 10.7069 2.92773 11.2077 2.92773 12.0552C2.92773 12.906 3.2369 13.3727 3.54357 13.636C3.8794 13.9235 4.24857 13.9985 4.35523 13.9985C4.52099 13.9985 4.67997 14.0644 4.79718 14.1816C4.91439 14.2988 4.98023 14.4578 4.98023 14.6235C4.98023 14.9735 5.17357 15.6094 5.61357 16.1594C6.0369 16.6902 6.64023 17.0802 7.4344 17.0802C7.96523 17.0802 8.45357 16.7819 8.84273 16.3752C9.03107 16.1769 9.17773 15.971 9.2744 15.8044C9.31098 15.742 9.34301 15.6772 9.37023 15.6102L9.37523 15.5985V7.70854H8.62857C8.48352 8.0671 8.21829 8.36404 7.87832 8.54849C7.53836 8.73294 7.14482 8.7934 6.76516 8.71952C6.38551 8.64564 6.04336 8.44201 5.79737 8.14354C5.55138 7.84506 5.41686 7.47032 5.41686 7.08354C5.41686 6.69676 5.55138 6.32202 5.79737 6.02355C6.04336 5.72507 6.38551 5.52145 6.76516 5.44756C7.14482 5.37368 7.53836 5.43415 7.87832 5.61859C8.21829 5.80304 8.48352 6.09999 8.62857 6.45854H9.37523V4.34354L9.37273 4.29604C9.35848 4.03939 9.30798 3.78604 9.22273 3.54354C9.14773 3.34354 9.05023 3.18771 8.93523 3.08521C8.83273 2.99354 8.69107 2.92188 8.46023 2.92188C7.8219 2.92188 7.1894 3.13688 6.7269 3.49688L6.72773 3.49604ZM10.6361 14.1669V15.5985L10.6402 15.6102C10.6569 15.6544 10.6886 15.7202 10.7369 15.8044C10.8327 15.971 10.9794 16.1769 11.1686 16.3752C11.5569 16.7819 12.0461 17.0802 12.5769 17.0802C13.3702 17.0802 13.9736 16.6902 14.3977 16.1594C14.8369 15.6094 15.0311 14.9727 15.0311 14.6235C15.0311 14.4578 15.0969 14.2988 15.2141 14.1816C15.3313 14.0644 15.4903 13.9985 15.6561 13.9985C15.7627 13.9985 16.1311 13.9235 16.4677 13.636C16.7736 13.3727 17.0827 12.906 17.0827 12.0552C17.0827 11.0485 16.9511 10.5302 16.7919 10.2744C16.7421 10.1859 16.6665 10.1147 16.5752 10.0702C16.4911 10.0302 16.3644 10.0002 16.1686 10.0002C16.0554 10.0002 15.9445 9.96949 15.8474 9.91136C15.7504 9.85322 15.6709 9.76985 15.6176 9.67011C15.5642 9.57038 15.5389 9.45802 15.5443 9.34504C15.5498 9.23205 15.5858 9.12266 15.6486 9.02854C15.8219 8.76771 15.9319 8.38354 15.9536 7.92021C15.9715 7.45282 15.908 6.98587 15.7661 6.54021C15.6244 6.10021 15.4286 5.77354 15.2361 5.59187C15.0619 5.42854 14.9411 5.41937 14.8277 5.45771C14.7338 5.48915 14.6337 5.4978 14.5357 5.48295C14.4378 5.46811 14.3448 5.43018 14.2643 5.37231C14.1839 5.31444 14.1184 5.23827 14.0732 5.15011C14.028 5.06194 14.0044 4.96429 14.0044 4.86521C14.0044 4.32187 13.7377 3.85021 13.2827 3.49604C12.8219 3.13688 12.1886 2.92104 11.5494 2.92104C11.3194 2.92104 11.1786 2.99354 11.0752 3.08437C10.9448 3.21232 10.8465 3.3694 10.7886 3.54271C10.6951 3.79975 10.6436 4.07015 10.6361 4.34354V12.9169H11.1661C11.4644 12.9169 11.7506 12.7983 11.9616 12.5874C12.1725 12.3764 12.2911 12.0902 12.2911 11.7919V10.296C11.9325 10.151 11.6356 9.88577 11.4511 9.5458C11.2667 9.20583 11.2062 8.8123 11.2801 8.43264C11.354 8.05298 11.5576 7.71084 11.8561 7.46485C12.1545 7.21886 12.5293 7.08433 12.9161 7.08433C13.3028 7.08433 13.6776 7.21886 13.9761 7.46485C14.2745 7.71084 14.4782 8.05298 14.552 8.43264C14.6259 8.8123 14.5655 9.20583 14.381 9.5458C14.1966 9.88577 13.8996 10.151 13.5411 10.296V11.7919C13.5411 12.4218 13.2908 13.0259 12.8454 13.4713C12.4 13.9167 11.796 14.1669 11.1661 14.1669H10.6361ZM7.08273 6.66687C6.97223 6.66687 6.86625 6.71077 6.78811 6.78891C6.70997 6.86705 6.66607 6.97303 6.66607 7.08354C6.66607 7.19405 6.70997 7.30003 6.78811 7.37817C6.86625 7.45631 6.97223 7.50021 7.08273 7.50021C7.19324 7.50021 7.29922 7.45631 7.37736 7.37817C7.4555 7.30003 7.4994 7.19405 7.4994 7.08354C7.4994 6.97303 7.4555 6.86705 7.37736 6.78891C7.29922 6.71077 7.19324 6.66687 7.08273 6.66687ZM6.66607 12.9169C6.66607 13.0274 6.70997 13.1334 6.78811 13.2115C6.86625 13.2896 6.97223 13.3335 7.08273 13.3335C7.19324 13.3335 7.29922 13.2896 7.37736 13.2115C7.4555 13.1334 7.4994 13.0274 7.4994 12.9169C7.4994 12.8064 7.4555 12.7004 7.37736 12.6222C7.29922 12.5441 7.19324 12.5002 7.08273 12.5002C6.97223 12.5002 6.86625 12.5441 6.78811 12.6222C6.70997 12.7004 6.66607 12.8064 6.66607 12.9169ZM12.4994 8.75021C12.4994 8.86071 12.5433 8.9667 12.6214 9.04484C12.6996 9.12298 12.8056 9.16687 12.9161 9.16687C13.0266 9.16687 13.1326 9.12298 13.2107 9.04484C13.2888 8.9667 13.3327 8.86071 13.3327 8.75021C13.3327 8.6397 13.2888 8.53372 13.2107 8.45558C13.1326 8.37744 13.0266 8.33354 12.9161 8.33354C12.8056 8.33354 12.6996 8.37744 12.6214 8.45558C12.5433 8.53372 12.4994 8.6397 12.4994 8.75021Z", fill: fill ? fill : "#222222" }, void 0) }, void 0));
}
function EyeOff({ fill }) {
    return (jsxRuntime.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M9.41335 9.41319C9.23026 9.60969 9.00945 9.76729 8.76412 9.8766C8.51879 9.98591 8.25396 10.0447 7.98541 10.0494C7.71687 10.0542 7.45013 10.0048 7.20109 9.90418C6.95206 9.80359 6.72583 9.65387 6.53592 9.46396C6.346 9.27404 6.19628 9.04782 6.09569 8.79878C5.9951 8.54975 5.9457 8.283 5.95044 8.01446C5.95518 7.74592 6.01396 7.48108 6.12327 7.23575C6.23258 6.99042 6.39019 6.76962 6.58669 6.58652M11.96 11.9599C10.8204 12.8285 9.43276 13.3098 8.00002 13.3332C3.33335 13.3332 0.666687 7.99985 0.666687 7.99985C1.49595 6.45445 2.64611 5.10426 4.04002 4.03985L11.96 11.9599ZM6.60002 2.82652C7.05891 2.71911 7.52873 2.66541 8.00002 2.66652C12.6667 2.66652 15.3334 7.99985 15.3334 7.99985C14.9287 8.75693 14.4461 9.46968 13.8934 10.1265L6.60002 2.82652Z", stroke: fill ?? "#FFF", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }, void 0), jsxRuntime.jsx("path", { d: "M0.666687 0.666504L15.3334 15.3332", stroke: fill ?? "#FFF", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }, void 0)] }, void 0));
}
function SmileOutlined({ fill }) {
    return (jsxRuntime.jsx("svg", { width: "22", height: "22", viewBox: "0 0 22 22", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M5.75 8.86719C5.75 9.16556 5.86853 9.4517 6.0795 9.66268C6.29048 9.87366 6.57663 9.99219 6.875 9.99219C7.17337 9.99219 7.45952 9.87366 7.6705 9.66268C7.88147 9.4517 8 9.16556 8 8.86719C8 8.56882 7.88147 8.28267 7.6705 8.07169C7.45952 7.86071 7.17337 7.74219 6.875 7.74219C6.57663 7.74219 6.29048 7.86071 6.0795 8.07169C5.86853 8.28267 5.75 8.56882 5.75 8.86719ZM14 8.86719C14 9.16556 14.1185 9.4517 14.3295 9.66268C14.5405 9.87366 14.8266 9.99219 15.125 9.99219C15.4234 9.99219 15.7095 9.87366 15.9205 9.66268C16.1315 9.4517 16.25 9.16556 16.25 8.86719C16.25 8.56882 16.1315 8.28267 15.9205 8.07169C15.7095 7.86071 15.4234 7.74219 15.125 7.74219C14.8266 7.74219 14.5405 7.86071 14.3295 8.07169C14.1185 8.28267 14 8.56882 14 8.86719ZM11 0.5C5.20156 0.5 0.5 5.20156 0.5 11C0.5 16.7984 5.20156 21.5 11 21.5C16.7984 21.5 21.5 16.7984 21.5 11C21.5 5.20156 16.7984 0.5 11 0.5ZM17.1641 17.1641C16.3625 17.9656 15.4297 18.5938 14.3914 19.0344C13.3203 19.4891 12.1789 19.7188 11 19.7188C9.82109 19.7188 8.67969 19.4891 7.60625 19.0344C6.56954 18.5965 5.62785 17.9613 4.83359 17.1641C4.03203 16.3625 3.40391 15.4297 2.96328 14.3914C2.51094 13.3203 2.28125 12.1789 2.28125 11C2.28125 9.82109 2.51094 8.67969 2.96562 7.60625C3.40346 6.56954 4.03868 5.62785 4.83594 4.83359C5.6375 4.03203 6.57031 3.40391 7.60859 2.96328C8.67969 2.51094 9.82109 2.28125 11 2.28125C12.1789 2.28125 13.3203 2.51094 14.3937 2.96562C15.4305 3.40346 16.3721 4.03868 17.1664 4.83594C17.968 5.6375 18.5961 6.57031 19.0367 7.60859C19.4891 8.67969 19.7188 9.82109 19.7188 11C19.7188 12.1789 19.4891 13.3203 19.0344 14.3937C18.5971 15.4301 17.9618 16.3711 17.1641 17.1641ZM14.5625 11.4922H13.4352C13.3367 11.4922 13.2523 11.5672 13.2453 11.6656C13.1562 12.8258 12.1836 13.7422 11 13.7422C9.81641 13.7422 8.84141 12.8258 8.75469 11.6656C8.74766 11.5672 8.66328 11.4922 8.56484 11.4922H7.4375C7.41207 11.4922 7.3869 11.4973 7.36351 11.5073C7.34013 11.5173 7.31903 11.532 7.30149 11.5504C7.28395 11.5688 7.27034 11.5906 7.26149 11.6144C7.25264 11.6383 7.24873 11.6637 7.25 11.6891C7.35313 13.6648 8.99609 15.2422 11 15.2422C13.0039 15.2422 14.6469 13.6648 14.75 11.6891C14.7513 11.6637 14.7474 11.6383 14.7385 11.6144C14.7297 11.5906 14.716 11.5688 14.6985 11.5504C14.681 11.532 14.6599 11.5173 14.6365 11.5073C14.6131 11.4973 14.5879 11.4922 14.5625 11.4922Z", fill: fill ?? "#FFF" }, void 0) }, void 0));
}
function CheckInCicle({ fill, stroke, customColor_1, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ?? "21", height: height ?? "20", viewBox: "0 0 21 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M20 10C20 15.5176 15.5281 20 10.0001 20C4.47195 20 0 15.5176 0 10C0 4.48239 4.47195 0 10.0001 0C15.5281 0 20 4.48239 20 10Z", fill: customColor_1 ?? "#222" }, void 0), jsxRuntime.jsx("path", { d: "M19.7557 10C19.7557 15.2417 15.4598 19.5 10.1494 19.5C4.83889 19.5 0.542969 15.2417 0.542969 10C0.542969 4.75827 4.83889 0.5 10.1494 0.5C15.4598 0.5 19.7557 4.75827 19.7557 10Z", stroke: stroke ?? "#FFF" }, void 0), jsxRuntime.jsx("path", { d: "M14.05 5L15.39 5.94L9.58 14.32H8.24L5 9.78L6.34 8.53L8.91 10.93L14.05 5Z", fill: fill ?? "#FFF" }, void 0)] }, void 0));
}
function CloseInCicle({ fill, stroke, customColor_1, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ?? "21", height: height ?? "20", viewBox: "0 0 21 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M20 10C20 15.5176 15.7517 20 10.5001 20C5.24835 20 1 15.5176 1 10C1 4.48239 5.24835 0 10.5001 0C15.7517 0 20 4.48239 20 10Z", fill: customColor_1 ?? "#222" }, void 0), jsxRuntime.jsx("path", { d: "M20.2997 10C20.2997 15.2417 16.0038 19.5 10.6933 19.5C5.38284 19.5 1.08691 15.2417 1.08691 10C1.08691 4.75827 5.38284 0.5 10.6933 0.5C16.0038 0.5 20.2997 4.75827 20.2997 10Z", stroke: stroke ?? "#F00" }, void 0), jsxRuntime.jsx("path", { d: "M15.9 6.41L12.36 9.95L15.9 13.49L14.49 14.9L10.95 11.37L7.42 14.9L6 13.48L9.53 9.95L6 6.42L7.42 5L10.95 8.53L14.49 5L15.9 6.41Z", fill: fill ?? "#F00" }, void 0)] }, void 0));
}
function RocketIconCommentaryBox({ fill, stroke, customColor_1, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ?? "32", height: height ?? "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("circle", { cx: "16", cy: "16", r: "16", fill: fill ?? "#FF4D0D" }, void 0), jsxRuntime.jsx("path", { d: "M9.15576 18.991C8.89873 19.3902 8.69092 19.8195 8.54053 20.2652H10.8593V17.2766C10.1812 17.7195 9.60147 18.302 9.15576 18.991V18.991ZM21.1405 17.2766V20.2652H23.4593C23.3089 19.8195 23.1011 19.3902 22.844 18.991C22.4032 18.306 21.8227 17.7218 21.1405 17.2766V17.2766ZM19.3905 10.7168L15.9999 6.69727L12.6093 10.7168V20.2652H19.3905V10.7168V10.7168ZM15.9999 14.2496C15.6564 14.2426 15.3294 14.1012 15.089 13.8559C14.8486 13.6105 14.7139 13.2806 14.7139 12.9371C14.7139 12.5936 14.8486 12.2637 15.089 12.0184C15.3294 11.773 15.6564 11.6316 15.9999 11.6246C16.3434 11.6316 16.6704 11.773 16.9108 12.0184C17.1512 12.2637 17.2859 12.5936 17.2859 12.9371C17.2859 13.2806 17.1512 13.6105 16.9108 13.8559C16.6704 14.1012 16.3434 14.2426 15.9999 14.2496Z", fill: "white", fillOpacity: "0.35" }, void 0), jsxRuntime.jsx("path", { d: "M25.625 22.125C25.625 19.0734 23.8367 16.4375 21.25 15.2098V10.6762C21.25 10.2633 21.1051 9.86406 20.8371 9.54961L16.6699 4.60859C16.4949 4.40078 16.2461 4.29688 16 4.29688C15.7539 4.29688 15.5051 4.40078 15.3301 4.60859L11.1629 9.54961C10.8967 9.86471 10.7505 10.2637 10.75 10.6762V15.2098C8.16328 16.4375 6.375 19.0734 6.375 22.125H10.6543C10.5914 22.3219 10.5586 22.5352 10.5586 22.7758C10.5586 23.3801 10.7664 23.9707 11.1437 24.4383C11.4518 24.8207 11.8597 25.1103 12.3223 25.275C12.9539 26.7516 14.3895 27.7031 16 27.7031C16.7957 27.7031 17.5668 27.468 18.2258 27.025C18.8711 26.593 19.3715 25.9887 19.675 25.275C20.1374 25.1113 20.5454 24.8226 20.8535 24.441C21.2314 23.9692 21.4377 23.383 21.4387 22.7785C21.4387 22.5488 21.4086 22.3301 21.3539 22.1277L25.625 22.125ZM10.8594 20.2656H8.54062C8.69102 19.8199 8.89883 19.3906 9.15586 18.9914C9.60156 18.3023 10.1813 17.7199 10.8594 17.277V20.2656ZM12.6094 15.2098V10.7172L16 6.69766L19.3906 10.7172V20.2656H12.6094V15.2098ZM19.1746 23.443C19.0324 23.525 18.8684 23.5578 18.707 23.5359L18.1738 23.4703L18.0973 24.0008C17.9496 25.0371 17.0473 25.8191 16 25.8191C14.9527 25.8191 14.0504 25.0371 13.9027 24.0008L13.8262 23.4676L13.293 23.5359C13.1309 23.5553 12.9669 23.5217 12.8254 23.4402C12.5875 23.3035 12.4398 23.0492 12.4398 22.773C12.4398 22.4832 12.6012 22.2426 12.8391 22.1223H19.1637C19.4043 22.2453 19.5629 22.4859 19.5629 22.773C19.5602 23.052 19.4125 23.309 19.1746 23.443ZM21.1406 20.2656V17.277C21.8228 17.7221 22.4033 18.3064 22.8441 18.9914C23.1012 19.3906 23.309 19.8199 23.4594 20.2656H21.1406V20.2656Z", fill: "white" }, void 0), jsxRuntime.jsx("path", { d: "M14.6875 12.9375C14.6875 13.2856 14.8258 13.6194 15.0719 13.8656C15.3181 14.1117 15.6519 14.25 16 14.25C16.3481 14.25 16.6819 14.1117 16.9281 13.8656C17.1742 13.6194 17.3125 13.2856 17.3125 12.9375C17.3125 12.5894 17.1742 12.2556 16.9281 12.0094C16.6819 11.7633 16.3481 11.625 16 11.625C15.6519 11.625 15.3181 11.7633 15.0719 12.0094C14.8258 12.2556 14.6875 12.5894 14.6875 12.9375V12.9375Z", fill: "white" }, void 0)] }, void 0));
}
function ArrowScrollRight({ fill, stroke, customColor_1, width, height }) {
    return (jsxRuntime.jsx("svg", { width: width ?? "18", height: height ?? "34", viewBox: "0 0 18 34", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M1 1L17 17L1 33", stroke: fill ?? "black", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, void 0) }, void 0));
}
function ArrowScrollLeft({ fill, stroke, customColor_1, width, height }) {
    return (jsxRuntime.jsx("svg", { width: width ?? "18", height: height ?? "34", viewBox: "0 0 18 34", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M17 33L1 17L17 1", stroke: fill ?? "black", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, void 0) }, void 0));
}
function Bullseye({ fill, stroke, customColor_1, width, height }) {
    return (jsxRuntime.jsx("svg", { width: "26", height: "26", viewBox: "0 0 26 26", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M25.1656 9.03042C26.0559 11.7655 25.9989 14.7207 25.0038 17.4194C24.0087 20.1181 22.1336 22.4029 19.6809 23.9054C17.2282 25.4078 14.3409 26.0402 11.4847 25.7007C8.62851 25.3611 5.96997 24.0693 3.9379 22.0336C1.90584 19.998 0.618717 17.3372 0.284157 14.4804C-0.0504026 11.6236 0.587103 8.73744 2.09384 6.28736C3.60059 3.83729 5.88871 1.96619 8.58916 0.975872C11.2896 -0.0144479 14.2449 -0.0662496 16.9784 0.828824L15.3016 2.50402C15.2088 2.59522 15.1256 2.69602 15.0488 2.80002C12.8601 2.35827 10.5874 2.63262 8.56675 3.5825C6.54609 4.53239 4.88477 6.10737 3.8285 8.07451C2.77224 10.0417 2.3771 12.2965 2.70154 14.5056C3.02598 16.7147 4.05276 18.7608 5.63004 20.3411C7.20731 21.9215 9.25132 22.9523 11.4598 23.2811C13.6682 23.6098 15.9239 23.2191 17.8931 22.1667C19.8623 21.1143 21.4405 19.4561 22.3944 17.4373C23.3482 15.4185 23.6271 13.1463 23.1896 10.9568C23.2991 10.8792 23.4018 10.7925 23.4968 10.6976L25.164 9.03042H25.1656ZM20.8376 11.4C21.1811 13.0851 20.9725 14.836 20.2427 16.3931C19.5128 17.9503 18.3006 19.2308 16.7858 20.0449C15.271 20.8589 13.5342 21.1632 11.8328 20.9126C10.1315 20.6619 8.55622 19.8697 7.34051 18.6534C6.12481 17.4371 5.33341 15.8614 5.08365 14.1599C4.83388 12.4584 5.13904 10.7218 5.95388 9.20736C6.76872 7.69296 8.04988 6.48144 9.60741 5.75241C11.1649 5.02338 12.9159 4.81566 14.6008 5.16002V7.63362C13.4067 7.27714 12.1277 7.32917 10.9665 7.78147C9.80522 8.23377 8.82803 9.0605 8.18959 10.1308C7.55116 11.201 7.28796 12.4537 7.44168 13.6904C7.59541 14.9271 8.15726 16.0772 9.03828 16.9586C9.9193 17.84 11.0692 18.4023 12.3058 18.5566C13.5424 18.7108 14.7952 18.4482 15.8657 17.8102C16.9363 17.1722 17.7634 16.1953 18.2162 15.0343C18.669 13.8732 18.7216 12.5943 18.3656 11.4H20.8376ZM12.9976 15.4C13.3657 15.4002 13.7288 15.3157 14.059 15.1532C14.3893 14.9906 14.6776 14.7542 14.9019 14.4624C15.1262 14.1705 15.2803 13.831 15.3524 13.47C15.4245 13.1091 15.4126 12.7364 15.3176 12.3808L17.8488 9.84802L17.8968 9.80002H21.8008C21.9059 9.80021 22.0101 9.77968 22.1073 9.73959C22.2044 9.69951 22.2928 9.64067 22.3672 9.56642L25.5672 6.36642C25.6794 6.25454 25.7558 6.11186 25.7868 5.95649C25.8178 5.80112 25.8019 5.64004 25.7413 5.49368C25.6806 5.34732 25.5778 5.22228 25.446 5.13439C25.3142 5.0465 25.1592 4.99974 25.0008 5.00002H21.0008V1.00002C21.0008 0.84192 20.9539 0.687371 20.8661 0.555891C20.7783 0.424412 20.6535 0.321899 20.5074 0.261296C20.3614 0.200694 20.2007 0.18472 20.0456 0.21539C19.8905 0.246061 19.748 0.322002 19.636 0.433624L16.436 3.63362C16.3615 3.70792 16.3023 3.7962 16.262 3.89339C16.2216 3.99058 16.2008 4.09478 16.2008 4.20002V8.10402C16.1844 8.11958 16.1684 8.13558 16.1528 8.15202L13.6216 10.68C13.2657 10.5845 12.8926 10.5722 12.5312 10.644C12.1698 10.7158 11.8297 10.8698 11.5374 11.0941C11.245 11.3184 11.0082 11.607 10.8452 11.9375C10.6823 12.268 10.5975 12.6315 10.5976 13C10.5976 13.6365 10.8505 14.247 11.3005 14.6971C11.7506 15.1472 12.3611 15.4 12.9976 15.4Z", fill: "#222222" }, void 0) }, void 0));
}
function TrashIcon({ fill, stroke, customColor_1, width, height }) {
    return (jsxRuntime.jsx("svg", { width: "14", height: "20", viewBox: "0 0 14 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M3.66602 5.00002V3.33335C3.66602 2.89133 3.84161 2.4674 4.15417 2.15484C4.46673 1.84228 4.89066 1.66669 5.33268 1.66669H8.66602C9.10804 1.66669 9.53197 1.84228 9.84453 2.15484C10.1571 2.4674 10.3327 2.89133 10.3327 3.33335V5.00002M12.8327 5.00002V16.6667C12.8327 17.1087 12.6571 17.5326 12.3445 17.8452C12.032 18.1578 11.608 18.3334 11.166 18.3334H2.83268C2.39065 18.3334 1.96673 18.1578 1.65417 17.8452C1.34161 17.5326 1.16602 17.1087 1.16602 16.6667V5.00002H12.8327Z", stroke: "#0645AD", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, void 0) }, void 0));
}

function Tag(props) {
    function getBG() {
        return props.selected === props.inverted ? props.color : '#fff';
    }
    function getColor() {
        return props.selected === props.inverted ? '#fff' : props.color;
    }
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: props.loading ?
            (jsxRuntime.jsx("div", { className: 'shimmer tag', style: props.style, children: jsxRuntime.jsx("span", { style: { verticalAlign: 'middle', margin: '8px' }, children: "Shimmer Text" }, void 0) }, void 0))
            :
                (jsxRuntime.jsx("div", { className: 'tag', style: { border: `1px solid ${getColor()} `, background: getBG(), color: getColor(), ...props.style }, children: jsxRuntime.jsxs("span", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '24px', margin: '0 8px', gap: '8px' }, children: [props.title, props.iconType === 'warning' && jsxRuntime.jsx(AlertCicle, { fill: getColor() }, void 0), props.iconType === 'checked' && jsxRuntime.jsx(DoubleCheck, { fill: getColor() }, void 0)] }, void 0) }, void 0)) }, void 0));
}

function EmptyCard(props) {
    return (jsxRuntime.jsx("div", { className: 'cardContent', style: { height: '100%' }, children: props.children }, void 0));
}

/**
 * @param {UserCardProps} props
 */
function CalendarCard$1(props) {
    const { t } = reactI18next.useTranslation();
    const [selected, setSelected] = react.useState(props.selected);
    const setClass = () => {
        setSelected(!selected);
        props.handleSelect(props.userID);
    };
    const [statusColor, setStatusColor] = react.useState('#A6A6A6');
    react.useEffect(() => {
        switch (props.userStatus) {
            case 'complete':
                setStatusColor("#2CA92A");
                break;
            case 'enrolled':
                setStatusColor("#222222");
                break;
            case 'defined':
                setStatusColor("#FFD600");
                break;
            case 'error':
                setStatusColor("#FF0000");
                break;
            case 'incomplete':
            default:
                setStatusColor("#A6A6A6");
                break;
        }
    }, [props.userStatus]);
    react.useEffect(() => {
        setSelected(props.selected);
    }, [props.selected]);
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: props.loading ?
            jsxRuntime.jsxs("div", { className: 'cardContentNoMargin', children: [jsxRuntime.jsx("div", { className: 'shimmer cardTopRightConner', style: { color: statusColor, background: statusColor, padding: '4px' }, children: "Status" }, void 0), jsxRuntime.jsxs("div", { className: 'content', children: [jsxRuntime.jsxs("div", { className: 'centeredVertically', style: { paddingBottom: '16px' }, children: [selected ? jsxRuntime.jsx(CheckboxChecked, {}, void 0) : jsxRuntime.jsx(CheckboxEmpty, {}, void 0), jsxRuntime.jsx("div", { style: { marginLeft: '16px', marginRight: '16px' }, className: "avatar shimmer" }, void 0), jsxRuntime.jsxs("div", { style: { display: 'inline-grid' }, children: [jsxRuntime.jsx("div", { className: "shimmer", children: "ShimmerName" }, void 0), jsxRuntime.jsx("div", { className: "shimmer", children: "ShimmerEmail" }, void 0)] }, void 0)] }, void 0), jsxRuntime.jsxs("div", { className: 'innerContent', style: { paddingBottom: '0px !important' }, children: [jsxRuntime.jsx("div", { className: "shimmer", children: "Area: " }, void 0), jsxRuntime.jsx("div", { className: "shimmer", children: "Cargo:" }, void 0), jsxRuntime.jsx(Tag, { title: 'Product Tag', color: '#000', loading: true, selected: false, inverted: false }, void 0), jsxRuntime.jsx(Tag, { title: 'Product Tag', color: '#000', loading: true, selected: false, inverted: false }, void 0)] }, void 0)] }, void 0), jsxRuntime.jsx(material.Button, { className: 'shimmer frstButton blue', fullWidth: true }, void 0)] }, void 0)
            :
                jsxRuntime.jsxs("div", { onClick: setClass, className: 'cardContentNoMargin', style: { color: selected ? '#fff' : '#000', border: `1px solid ${statusColor}`, background: selected ? "#ff4d0d" : "#fff" }, children: [jsxRuntime.jsx("div", { className: 'cardTopRightConner', style: { color: '#fff', background: statusColor, padding: '4px' }, children: t(`user.card.status.${props.userStatus}`) }, void 0), jsxRuntime.jsxs("div", { className: 'content', style: { marginBottom: '46px' }, children: [jsxRuntime.jsxs("div", { className: 'centeredVertically', style: { paddingBottom: '16px' }, children: [jsxRuntime.jsxs("div", { style: { paddingRight: '8px' }, children: [" ", selected ? jsxRuntime.jsx(CheckboxChecked, {}, void 0) : jsxRuntime.jsx(CheckboxEmpty, {}, void 0)] }, void 0), jsxRuntime.jsx("img", { src: props.userAvatar || "https://certificates-mentor.s3.amazonaws.com/frst-avatar-default.png", alt: "Avatar", className: "avatar" }, void 0), jsxRuntime.jsxs("div", { style: { paddingLeft: '8px', display: 'grid' }, children: [jsxRuntime.jsx("p", { style: { fontSize: '24px', fontWeight: '700', paddingBottom: '8px' }, children: props.userName }, void 0), jsxRuntime.jsx(material.Tooltip, { title: [props.userEmail], children: jsxRuntime.jsx("p", { style: { fontSize: '16px', fontWeight: '700', color: selected ? "#F3D224" : '#AEB0B3' }, className: 'ellipsis', children: props.userEmail }, void 0) }, void 0)] }, void 0)] }, void 0), jsxRuntime.jsx("div", { className: 'innerContent', children: jsxRuntime.jsxs("div", { style: { display: 'block' }, children: [props.userArea && jsxRuntime.jsxs("p", { style: { fontSize: '16px', fontWeight: '700', paddingBottom: '8px' }, children: [t('user.card.area'), ": ", props.userArea] }, void 0), props.userPosition && jsxRuntime.jsxs("p", { style: { fontSize: '16px', fontWeight: '400', paddingBottom: '8px' }, children: [t('user.card.position'), ": ", props.userPosition] }, void 0), props.licenses.length > 0 ?
                                                props.licenses.map((p) => {
                                                    return jsxRuntime.jsx(Tag, { title: p, color: '#000', selected: selected, inverted: false }, void 0);
                                                })
                                                :
                                                    jsxRuntime.jsx(Tag, { title: t('user.card.noProduct'), color: '#FF0000', selected: selected, inverted: true }, void 0), (props.assessment === 'not-started' || props.assessment === 'started') && jsxRuntime.jsx(Tag, { title: 'Assessment', color: '#000', selected: selected, inverted: false, iconType: "warning" }, void 0), props.assessment === 'finished' && jsxRuntime.jsx(Tag, { title: 'Assessment', color: '#000', selected: selected, inverted: false, iconType: "checked" }, void 0)] }, void 0) }, void 0)] }, void 0), jsxRuntime.jsxs(material.Button, { onClick: props.editAction, className: 'frstButton blue fixedBottom', fullWidth: true, children: [jsxRuntime.jsx(EditIcon, {}, void 0), jsxRuntime.jsx("span", { style: { paddingLeft: '8px' }, children: t('globals.edit') }, void 0)] }, void 0)] }, void 0) }, void 0));
}

styled__default["default"].span `
  color: #0645AD !important;
  font-size: 16px !important;
  font-weight: bolder !important;
  cursor: pointer !important;
  &:disabled {
    color: #7C7C7C !important;
  }
`;
styled__default["default"].div `
  .Mui-selected {
    color: #FF4D0D !important; 
  }
  .MuiTab-root {
    font-family: Work Sans !important;
    text-transform: none !important;
    font-weight: bolder !important;
  }
  .MuiTabs-indicator {
    background-color: #FF4D0D !important;
  }
`;
styled__default["default"].label `
  font-size: 20px;
  color: #ff4d0d;
  font-weight: bolder;
`;
styled__default["default"].label `
  font-size: 20px;
  color: #ff4d0d;
`;
styled__default["default"].label `
  font-size: 16px;
  color: #ff4d0d;
`;
const FRSTButton = styled__default["default"](Button__default["default"]) `
  color: #fff !important;
  font-weight: bold !important;
  background-color: #FF4D0D !important;
  border-color: #FF4D0D !important;
  height: 48px !important;
  font-size: 16px !important;
  padding-left: 16px !important;
  padding-right: 16px !important;
  padding-top: 18px !important;
  padding-bottom: 18px !important;
  text-transform: none !important;
  border-radius: 5px 5px 5px 5px !important;
  box-shadow: 0 2px 0 rgb(0 0 0 / 2%) !important;
  &:focus,
  &:hover {
    color: #fff !important;
    background-color: #E94E1B !important;
    border-color: #fff !important;
  };
  &:disabled {
    background-color: #7C7C7C !important;
  }
`;
styled__default["default"](Menu__default["default"]) `
  & .MuiPaper-root{
    border-radius: 0px;
    box-shadow: none !important;
  }
  ul {
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;
styled__default["default"](MenuItem__default["default"]) `
  color: white !important;
  background-color: #FF4D0D !important;
  &:hover {
    background-color: #F5792A !important;
  }
`;

const Container = styled__default["default"](Card__default["default"]) `
  height: 100%;
  box-shadow: none !important;
  border: 1px solid #c4c4c4 !important;
  box-sizing: border-box !important;
  border-radius: 8px !important;
  padding: 24px !important;
`;
const Title = styled__default["default"].span `
  font-size: 20px !important;
  color: #ff4d0d !important;
`;
const TextDescription = styled__default["default"].span `
  font-size: 14px !important;
  color: #222222 !important;
`;
const ContainerDescription = styled__default["default"].div `
  padding-top: 26px !important;
`;
styled__default["default"].div `
  padding-top: 35px !important;
`;
const CheckIconCustom = styled__default["default"](CheckIcon__default["default"]) `
  color: white !important;
  font-size: 19px !important;
`;
const LoginIconCustom = styled__default["default"](LoginIcon__default["default"]) `
  color: white !important;
  font-size: 20px !important;
`;
const FormControlSelect = styled__default["default"](FormControl__default["default"]) `
  .MuiInputLabel-formControl {
    color: rgba(0, 0, 0, 0.6) !important;
    margin-top: 5px !important;
  }
`;
const DropDownList = styled__default["default"](Select__default["default"]) `
  max-width: 350px !important;
  height: 40px !important;
  & > div {
    border: 1px solid #e8e8e8 !important;
  }
  .MuiSelect-select {
    border: none !important;
  }
  .MuiSelect-icon {
    color: #000 !important; // for icon drop down icon color
  }
  &.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #ff4d0d !important;
    border-width: 1px !important;
  }
`;
const LabelDateStepper = styled__default["default"].label `
  font-size: 14px !important;
  line-height: 14px !important;
`;
const LabelTitleStepper = styled__default["default"].label `
  overflow: hidden; !important;
  display: block !important;
  max-height: 1.33rem !important;
;
`;
const ContainerStepper = styled__default["default"].div `
  margin-top: 10px !important;
`;
const CustomStepper = styled__default["default"](Stepper__default["default"]) `
  height: 100px !important;
  overflow-x: auto !important;
  overflow-y: hidden !important;
  box-sizing: content-box !important;
  scroll-behavior: smooth !important;
  padding-bottom: 30px !important;
`;
const CustomStep = styled__default["default"](Step__default["default"]) `
  padding: 0px !important;
  min-width: 150px !important;
`;
const BoxStepper = styled__default["default"](Box__default["default"]) `
  width: 100% !important;
  padding-top: 20px !important;
  text-align: center !important;
  overflow: hidden !important;
  height: 120px !important;
`;
const LabelTimeMentoring = styled__default["default"].label `
  font-size: 16px !important;
  color: #ff4d0d !important;
  font-weight: bolder !important;
`;
const BoxLabelTimeMentoring = styled__default["default"].div `
  padding-top: 30px !important;
  padding-bottom: 16px !important;
`;
const LabelSchedule = styled__default["default"].span `
  font-size: 16px !important;
`;
const LabelScheduleClick = styled__default["default"].span `
  color: #0645ad !important;
  font-size: 16px !important;
  font-weight: bolder !important;
  cursor: pointer !important;
`;
const ActionContainer = styled__default["default"](CardActions__default["default"]) `
  padding: 0px !important;
`;
const ColorlibConnector = styles.styled(StepConnector__default["default"])(({ theme }) => ({
    [`&.${StepConnector.stepConnectorClasses.alternativeLabel}`]: {
        top: 40,
        left: 'calc(-54% + 7px)',
        right: 'calc(40% + 20px)',
        [`&.MuiStepLabel-labelContainer`]: {
            [`&.Mui-active`]: {
                backgroundColor: 'red'
            }
        }
    },
    [`&.${StepConnector.stepConnectorClasses.active}`]: {
        [`& .${StepConnector.stepConnectorClasses.line}`]: {
            backgroundColor: '#ff4d0d'
        }
    },
    [`&.${StepConnector.stepConnectorClasses.completed}`]: {
        [`& .${StepConnector.stepConnectorClasses.line}`]: {
            backgroundColor: '#000'
        }
    },
    [`& .${StepConnector.stepConnectorClasses.line}`]: {
        height: 1,
        border: 0,
        backgroundColor: '#ff4d0d',
        borderRadius: 1
    }
}));
const ColorlibStepIconRoot = styles.styled('div')(({ ownerState }) => ({
    backgroundColor: '#000',
    zIndex: 1,
    color: '#fff',
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: 'none !important',
    ...(ownerState.active && {
        backgroundColor: '#ff4d0d',
        width: 32,
        height: 32,
        boxShadow: 'none !important'
    }),
    ...(ownerState.completed && {
        backgroundColor: '#000',
        width: 24,
        height: 24,
        boxShadow: 'none !important'
    }),
    ...(!ownerState.active &&
        !ownerState.completed && {
        backgroundColor: '#ff4d0d',
        width: 24,
        height: 24,
        boxShadow: 'none !important'
    }),
    ...(ownerState.active &&
        ownerState.completed && {
        backgroundColor: '#000',
        width: 24,
        height: 24,
        boxShadow: 'none !important'
    })
}));

function getStepIcon(props) {
    const { active, completed } = props;
    return (jsxRuntime.jsx(ColorlibStepIconRoot, { ownerState: { completed, active }, children: completed ? jsxRuntime.jsx(CheckIconCustom, {}, void 0) : active ? jsxRuntime.jsx(LoginIconCustom, {}, void 0) : jsxRuntime.jsx("div", {}, void 0) }, void 0));
}
function getMissedStepIcon() {
    return (jsxRuntime.jsx(ColorlibStepIconRoot, { ownerState: { completed: true, active: true }, children: jsxRuntime.jsx("div", {}, void 0) }, void 0));
}
function StepsComponent(props) {
    const { t } = reactI18next.useTranslation();
    let { events } = props;
    return (jsxRuntime.jsx(BoxStepper, { children: jsxRuntime.jsx(CustomStepper, { alternativeLabel: true, connector: jsxRuntime.jsx(ColorlibConnector, {}, void 0), children: events && events.length > 0 && events?.map((event) => (jsxRuntime.jsxs(CustomStep, { completed: event.completed, active: event.today, children: [jsxRuntime.jsxs(LabelDateStepper, { children: [event.day, " ", t(`calendar.monthsInitials.${event.month}`)] }, void 0), jsxRuntime.jsx(ContainerStepper, { children: jsxRuntime.jsx(material.Tooltip, { title: event.title, children: jsxRuntime.jsx(material.StepLabel, { StepIconComponent: event.completed && !event.present ? getMissedStepIcon : getStepIcon, children: jsxRuntime.jsx(LabelTitleStepper, { children: event.title }, void 0) }, void 0) }, void 0) }, void 0)] }, event.id))) }, void 0) }, void 0));
}
/**
 * @param {CalendarProps} props
 */
function CalendarCard(props) {
    const { t } = reactI18next.useTranslation();
    const [module, setModule] = react.useState(0);
    const [moduleEvents, setModuleEvents] = react.useState([]);
    const [moduleSelector, setModuleSelector] = react.useState(false);
    const handleChange = (event) => {
        let val = event.target?.value;
        setModule(val);
        if (props.trails[val].events)
            setModuleEvents(props.trails[val].events);
    };
    react.useEffect(() => {
        if (props.trails[0]) {
            if (props.trails[0].events)
                setModuleEvents(props.trails[0].events);
            if (props.trails.length > 1)
                setModuleSelector(true);
        }
    }, [props.trails]);
    return (jsxRuntime.jsx("div", { style: { height: '100%' }, children: props.loading ?
            jsxRuntime.jsx(Container, { className: 'shimmer' }, void 0)
            :
                jsxRuntime.jsx(Container, { children: jsxRuntime.jsxs(material.CardContent, { style: { padding: '0px' }, children: [jsxRuntime.jsx(Title, { children: t('calendar.title') }, void 0), moduleSelector &&
                                jsxRuntime.jsxs(ContainerDescription, { children: [jsxRuntime.jsx(TextDescription, { children: t('calendar.card.description') }, void 0), jsxRuntime.jsx(FormControlSelect, { fullWidth: true, children: jsxRuntime.jsx(DropDownList, { id: "module-id", value: module, onChange: handleChange, children: props.trails?.map((item, index) => {
                                                    return jsxRuntime.jsxs(material.MenuItem, { value: index, children: [item.name, " - ", item.moduleID] }, index);
                                                }) }, void 0) }, void 0)] }, void 0), moduleEvents?.length === 0 &&
                                jsxRuntime.jsxs("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '140px', paddingBottom: '32px' }, children: [jsxRuntime.jsx(WarningIcon$1, {}, void 0), jsxRuntime.jsx("span", { style: { paddingLeft: '8px' }, children: t('calendar.notAvailable') }, void 0)] }, void 0), moduleEvents && jsxRuntime.jsx(StepsComponent, { events: moduleEvents, short: props.short }, void 0), moduleEvents && moduleEvents.length > 0 &&
                                jsxRuntime.jsx(BoxLabelTimeMentoring, { children: props.trails[module]?.nextEvent ?
                                        jsxRuntime.jsxs(LabelTimeMentoring, { children: [t('calendar.card.mentoringSchedule'), " ", t(`calendar.weekdays.${props.trails[module].nextEvent.weekday}`), " @ ", props.trails[module]?.nextEvent.hour] }, void 0)
                                        :
                                            jsxRuntime.jsx(LabelTimeMentoring, { children: t(`calendar.noMoreEvents`) }, void 0) }, void 0), jsxRuntime.jsxs(ActionContainer, { children: [props.short &&
                                        jsxRuntime.jsxs(LabelSchedule, { children: [jsxRuntime.jsx(LabelScheduleClick, { onClick: props.showFullPageAction, children: t('globals.clickHere') }, void 0), ' ', t('calendar.card.fullSchedule')] }, void 0), props.trails[module]?.joinEventAction &&
                                        jsxRuntime.jsx(FRSTButton, { style: { marginLeft: 'auto' }, variant: "contained", onClick: props.trails[module]?.joinEventAction, children: t('calendar.card.joinEvent') }, void 0)] }, void 0)] }, void 0) }, void 0) }, void 0));
}

var css_248z$6 = ".TextIcon-module_container__c5xjY {\n  display: flex;\n  justify-content: 'flex-start';\n  align-items: 'center';\n  position: relative;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n";
var style$6 = {"container":"TextIcon-module_container__c5xjY"};
styleInject(css_248z$6);

///-----------------------------------------
/// Componente
/**
 *
 * @componente
 */
function TextIcon(props) {
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx("div", { className: style$6.container, style: { ...props.style }, children: jsxRuntime.jsxs("div", { style: { display: 'flex', width: '100%', justifyContent: 'flex-start', alignItems: 'center' }, children: [jsxRuntime.jsx("div", { style: { display: 'inline-flex', width: 30, height: 30, position: 'relative', justifyContent: 'center', alignItems: 'center' }, children: props.svg }, void 0), jsxRuntime.jsx("div", { style: { display: 'inline-flex', marginLeft: 8 }, children: props.description }, void 0)] }, void 0) }, void 0) }, void 0));
}

var css_248z$5 = ".MessageBox-module_container__6oBFw {\n  min-width: 400px;\n  padding: 8px;\n  min-height: 30px;\n  margin-top: 8px;\n  font-size: 14px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  position: relative;\n  flex-direction: row;\n  flex-wrap: wrap;\n  \n}\n\n.MessageBox-module_success__OT-qh{\n\n  border-Width: 2;\n  border-color: #2CA92A;\n  background-color: #D1F6D1;\n  color: #222;\n}\n\n.MessageBox-module_square__bUGB6{\n  height: 20px;\n  width: 20px;\n  display: inline-flex; \n  justify-content: center; \n  align-items: center;\n  margin-right: 8px;\n}\n\n.MessageBox-module_success__OT-qh:hover{\n  background-color: #2CA92A !important;\n  color: white;\n}\n\n.MessageBox-module_warning__WFHrV{\n  border-Width: 2;\n  border-color: #FFC200;\n  background-color: #FEF0D4;\n  color: #222;\n}\n\n.MessageBox-module_warning__WFHrV:hover{\n  background-color: #FFC200 !important;\n  color: white;\n}\n\n.MessageBox-module_error__PzfdG{\n  border-Width: 2;\n  border-color: #EA0000;\n  background-color: #FFE5E5;\n  color: #222;\n}\n\n.MessageBox-module_error__PzfdG:hover{\n  background-color: #EA0000 !important;\n  color: white;\n}\n\n\n\n\n\n";
var style$5 = {"container":"MessageBox-module_container__6oBFw","success":"MessageBox-module_success__OT-qh","square":"MessageBox-module_square__bUGB6","warning":"MessageBox-module_warning__WFHrV","error":"MessageBox-module_error__PzfdG"};
styleInject(css_248z$5);

///-----------------------------------------
/// Componente
/**
 *
 * @componente
 */
function SuccessIcon() {
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M13.3327 4L5.99935 11.3333L2.66602 8", stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }, void 0) }, void 0) }, void 0));
}

///-----------------------------------------
/// Componente
/**
 *
 * @componente
 */
function ErrorIcon() {
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M11.3327 0.666504L0.666016 11.3332", stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }, void 0), jsxRuntime.jsx("path", { d: "M0.666016 0.666504L11.3327 11.3332", stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }, void 0)] }, void 0) }, void 0));
}

///-----------------------------------------
/// Componente
/**
 *
 * @componente
 */
function WarningIcon() {
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("svg", { width: "2", height: "12", viewBox: "0 0 2 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M1 0.666992V8.00033", stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }, void 0), jsxRuntime.jsx("path", { d: "M1 10.667L1 11.3337", stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }, void 0)] }, void 0) }, void 0));
}

///-----------------------------------------
/// Componente
/**
 *
 * @componente
 */
function MessageBox(props) {
    const MapBorderColor = [
        '#2CA92A',
        '#FFC200',
        '#EA0000',
    ];
    const MapIconList = [
        jsxRuntime.jsx(SuccessIcon, {}, void 0),
        jsxRuntime.jsx(WarningIcon, {}, void 0),
        jsxRuntime.jsx(ErrorIcon, {}, void 0),
    ];
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("div", { className: `${props.tipoVisualizacao === 1 ? style$5.success
                : props.tipoVisualizacao === 2 ? style$5.warning
                    : props.tipoVisualizacao === 3 ? style$5.error
                        : ''} ${style$5.container}`, style: {
                cursor: props.onClick ? 'pointer' : 'default',
                ...props.style
            }, onClick: props.onClick, children: [jsxRuntime.jsx("div", { className: style$5.square, style: {
                        backgroundColor: MapBorderColor[props.tipoVisualizacao - 1],
                    }, children: MapIconList[props.tipoVisualizacao - 1] }, void 0), jsxRuntime.jsx("div", { style: {
                        display: 'inline-flex',
                        width: 'calc(100% - 30px)'
                    }, children: props.texto }, void 0)] }, void 0) }, void 0));
}

var css_248z$4 = "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=VT323&display=swap');\n\n.Rating-module_container__yehpg {\n  width: 150px;\n  padding: 8px;\n  height: 80px;\n  display: flex;\n  justify-content: 'flex-start';\n  align-items: 'center';\n  position: relative;\n  margin-left: 16px;\n  flex-direction: row;\n  flex-wrap: wrap;\n  font-family: 'Work Sans';\n  \n}\n\n.Rating-module_titulo__mPtNy{\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: 16px;\n  font-weight: 600px;\n}\n\n.Rating-module_content__fqIyW{\n  display: flex;\n  width: 100%;\n  justify-content: flex-start;\n  align-items: flex-start;\n  \n}\n\n.Rating-module_star__Wzye9{\n  display: inline-flex;\n  width: 35px; \n  height: 35px; \n  position: relative; \n  justify-content: center; \n  align-items: center;\n}\n\n.Rating-module_avaliacao__AOld-{\n  display: inline-flex;\n  width: 100px;\n  margin-left: 8px;\n}\n";
var style$4 = {"container":"Rating-module_container__yehpg","titulo":"Rating-module_titulo__mPtNy","content":"Rating-module_content__fqIyW","star":"Rating-module_star__Wzye9","avaliacao":"Rating-module_avaliacao__AOld-"};
styleInject(css_248z$4);

///-----------------------------------------
/// Componente
/**
 *
 * @componente
 */
function StarIcon(props) {
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx("svg", { width: "30", height: "30", viewBox: "0 0 30 30", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M14.0989 0.872803C14.4623 0.117576 15.5377 0.117574 15.9011 0.872801L19.7145 8.7983C19.8581 9.09663 20.14 9.30458 20.4674 9.35367L29.0382 10.6388C29.8501 10.7606 30.1775 11.7548 29.5967 12.3352L23.3644 18.5625C23.1358 18.791 23.0316 19.1159 23.085 19.4348L24.5511 28.2045C24.6883 29.025 23.8221 29.6445 23.09 29.2495L15.4748 25.1411C15.1785 24.9812 14.8215 24.9812 14.5252 25.1411L6.91 29.2495C6.17789 29.6445 5.31171 29.025 5.44888 28.2045L6.91505 19.4348C6.96835 19.1159 6.86424 18.791 6.63556 18.5625L0.403279 12.3352C-0.17751 11.7548 0.149858 10.7606 0.961814 10.6388L9.53263 9.35367C9.86003 9.30458 10.1419 9.09663 10.2855 8.79831L14.0989 0.872803Z", fill: props.color }, void 0) }, void 0) }, void 0));
}

///-----------------------------------------
/// Componente
/**
 *
 * @componente
 */
function Rating(props) {
    const MapColorStar = [
        '#FFC200',
        '#000000',
        '#FFFFFF',
    ];
    const MapColorNumberStar = [
        '#FFFFFF',
        '#FFFFFF',
        '#FFC200',
    ];
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("div", { className: style$4.container, style: { ...props.style }, children: [jsxRuntime.jsx("div", { className: style$4.titulo, style: { display: 'flex', justifyContent: 'flex-start', alignItems: 'center', fontSize: 16, fontWeight: 600 }, children: props.titulo }, void 0), jsxRuntime.jsxs("div", { className: style$4.content, style: { display: 'flex', width: '100%', justifyContent: 'flex-start', alignItems: 'flex-start' }, children: [jsxRuntime.jsxs("div", { className: style$4.star, style: { display: 'inline-flex', width: 35, height: 35, position: 'relative', justifyContent: 'center', alignItems: 'center' }, children: [jsxRuntime.jsx(StarIcon, { color: MapColorStar[props.tipoVisualizacao - 1] }, void 0), jsxRuntime.jsx("span", { style: { position: 'absolute', fontSize: 10, color: MapColorNumberStar[props.tipoVisualizacao - 1], fontWeight: 'bold', top: 12, textAlign: 'center' }, children: props.nota }, void 0)] }, void 0), jsxRuntime.jsx("div", { className: style$4.avaliacao, children: jsxRuntime.jsxs("div", { style: { display: 'flex', flexDirection: 'column', flexWrap: 'wrap', width: 100 }, children: [jsxRuntime.jsx("span", { style: { fontSize: 14, fontWeight: 600 }, children: props.descricaoAvaliacao }, void 0), jsxRuntime.jsx("span", { style: { fontSize: 12, fontWeight: 400 }, children: `${props.qtdeAvaliacao} avaliações` }, void 0)] }, void 0) }, void 0)] }, void 0)] }, void 0) }, void 0));
}

var css_248z$3 = "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=VT323&display=swap');\n\n.RatingCurtidas-module_container__Ns11t {\n  width: 150px;\n  padding: 8px;\n  height: 80px;\n  display: flex;\n  justify-content: 'flex-start';\n  align-items: 'center';\n  position: relative;\n  margin-left: 16px;\n  flex-direction: row;\n  flex-wrap: wrap;\n  font-family: 'Work Sans';\n  \n}\n";
var style$3 = {"container":"RatingCurtidas-module_container__Ns11t"};
styleInject(css_248z$3);

///-----------------------------------------
/// Componente
/**
 *
 * @componente
 */
function RocketButtonIcon(props) {
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 25, background: props.colorSecundaria ? props.colorSecundaria : '#FF4D0D', width: 32, height: 32, margin: 0 }, children: jsxRuntime.jsxs("svg", { width: "28", height: "28", viewBox: "0 0 28 28", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M7.15625 16.9915C6.89922 17.3907 6.69141 17.82 6.54102 18.2657H8.85977V15.2771C8.18164 15.72 7.60195 16.3024 7.15625 16.9915ZM19.141 15.2771V18.2657H21.4598C21.3094 17.82 21.1016 17.3907 20.8445 16.9915C20.4037 16.3065 19.8232 15.7222 19.141 15.2771ZM17.391 8.71729L14.0004 4.69775L10.6098 8.71729V18.2657H17.391V8.71729ZM14.0004 12.2501C13.6569 12.2431 13.3299 12.1017 13.0895 11.8563C12.8491 11.611 12.7144 11.2811 12.7144 10.9376C12.7144 10.5941 12.8491 10.2642 13.0895 10.0188C13.3299 9.77347 13.6569 9.63211 14.0004 9.6251C14.3438 9.63211 14.6709 9.77347 14.9113 10.0188C15.1517 10.2642 15.2864 10.5941 15.2864 10.9376C15.2864 11.2811 15.1517 11.611 14.9113 11.8563C14.6709 12.1017 14.3438 12.2431 14.0004 12.2501Z", fill: props.colorPrimaria ? props.colorPrimaria : '#FFF', fillOpacity: "0.35" }, void 0), jsxRuntime.jsx("path", { d: "M23.625 20.125C23.625 17.0734 21.8367 14.4375 19.25 13.2098V8.67617C19.25 8.26328 19.1051 7.86406 18.8371 7.54961L14.6699 2.60859C14.4949 2.40078 14.2461 2.29688 14 2.29688C13.7539 2.29688 13.5051 2.40078 13.3301 2.60859L9.16289 7.54961C8.89674 7.86471 8.7505 8.26372 8.75 8.67617V13.2098C6.16328 14.4375 4.375 17.0734 4.375 20.125H8.6543C8.59141 20.3219 8.55859 20.5352 8.55859 20.7758C8.55859 21.3801 8.76641 21.9707 9.14375 22.4383C9.45175 22.8207 9.85968 23.1103 10.3223 23.275C10.9539 24.7516 12.3895 25.7031 14 25.7031C14.7957 25.7031 15.5668 25.468 16.2258 25.025C16.8711 24.593 17.3715 23.9887 17.675 23.275C18.1374 23.1113 18.5454 22.8226 18.8535 22.441C19.2314 21.9692 19.4377 21.383 19.4387 20.7785C19.4387 20.5488 19.4086 20.3301 19.3539 20.1277L23.625 20.125ZM8.85938 18.2656H6.54062C6.69102 17.8199 6.89883 17.3906 7.15586 16.9914C7.60156 16.3023 8.18125 15.7199 8.85938 15.277V18.2656ZM10.6094 13.2098V8.71719L14 4.69766L17.3906 8.71719V18.2656H10.6094V13.2098ZM17.1746 21.443C17.0324 21.525 16.8684 21.5578 16.707 21.5359L16.1738 21.4703L16.0973 22.0008C15.9496 23.0371 15.0473 23.8191 14 23.8191C12.9527 23.8191 12.0504 23.0371 11.9027 22.0008L11.8262 21.4676L11.293 21.5359C11.1309 21.5553 10.9669 21.5217 10.8254 21.4402C10.5875 21.3035 10.4398 21.0492 10.4398 20.773C10.4398 20.4832 10.6012 20.2426 10.8391 20.1223H17.1637C17.4043 20.2453 17.5629 20.4859 17.5629 20.773C17.5602 21.052 17.4125 21.309 17.1746 21.443ZM19.1406 18.2656V15.277C19.8228 15.7221 20.4033 16.3064 20.8441 16.9914C21.1012 17.3906 21.309 17.8199 21.4594 18.2656H19.1406V18.2656Z", fill: props.colorPrimaria ? props.colorPrimaria : '#FFF' }, void 0), jsxRuntime.jsx("path", { d: "M12.6875 10.9375C12.6875 11.2856 12.8258 11.6194 13.0719 11.8656C13.3181 12.1117 13.6519 12.25 14 12.25C14.3481 12.25 14.6819 12.1117 14.9281 11.8656C15.1742 11.6194 15.3125 11.2856 15.3125 10.9375C15.3125 10.5894 15.1742 10.2556 14.9281 10.0094C14.6819 9.76328 14.3481 9.625 14 9.625C13.6519 9.625 13.3181 9.76328 13.0719 10.0094C12.8258 10.2556 12.6875 10.5894 12.6875 10.9375Z", fill: props.colorPrimaria ? props.colorPrimaria : '#FFF' }, void 0)] }, void 0) }, void 0) }, void 0));
}

///-----------------------------------------
/// Componente
/**
 *
 * @componente
 */
function RocketButton(props) {
    const MapColorPrimaria = [
        '#FF4D0D',
        '#FFFFFF',
        '#FFFFFF'
    ];
    const MapColorSecundaria = [
        '#FFFFFF',
        '#FF4D0D',
        '#CCCCCC'
    ];
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx("div", { children: jsxRuntime.jsx(RocketButtonIcon, { colorPrimaria: MapColorPrimaria[props.tipoBotao - 1], colorSecundaria: MapColorSecundaria[props.tipoBotao - 1] }, void 0) }, void 0) }, void 0));
}

///-----------------------------------------
/// Componente
/**
 *
 * @componente
 */
function RatingCurtidas(props) {
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("div", { className: style$3.container, style: { ...props.style }, children: [jsxRuntime.jsx("div", { style: { display: 'flex', justifyContent: 'flex-start', alignItems: 'center', fontSize: 16, fontWeight: 600 }, children: props.titulo }, void 0), jsxRuntime.jsxs("div", { style: { display: 'flex', width: '100%', justifyContent: 'flex-start', alignItems: 'flex-start' }, children: [jsxRuntime.jsx("div", { style: { display: 'inline-flex', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', position: 'relative' }, children: jsxRuntime.jsx(RocketButton, { tipoBotao: props.tipoBotao }, void 0) }, void 0), jsxRuntime.jsx("div", { style: { display: 'inline-flex', width: 90, marginLeft: 8 }, children: jsxRuntime.jsxs("div", { style: { display: 'flex', flexDirection: 'column', flexWrap: 'wrap', width: 100 }, children: [jsxRuntime.jsx("span", { style: { fontSize: 14, fontWeight: 600 }, children: props.qtdeCurtidas }, void 0), jsxRuntime.jsx("span", { style: { fontSize: 12, fontWeight: 400 }, children: `pessoas` }, void 0)] }, void 0) }, void 0)] }, void 0)] }, void 0) }, void 0));
}

var css_248z$2 = "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=VT323&display=swap');\n\n.Planet-module_container__YS3oo {\n  width: 100px;\n  height: 100px;\n  display: flex;\n  justify-content: 'center';\n  align-items: 'center';\n  position: relative;\n  margin-left: 16px;\n\n  text-align: center;\n  font-size: 26px;\n  font-family: 'VT323', monospace;\n  color: white;\n  -webkit-text-stroke: 0.5px black;\n  text-shadow:2px 0 0 black,0 2px 0 black,-2px 0 0 black,0 -2px 0 black;\n}\n\n.Planet-module_label__bZgzb {\n  position: absolute;\n  padding: 2px;\n  border: 2px dashed white;\n  bottom: 0;\n  left: 8px;\n  right: 8px;\n  width: calc(100% -16px);\n}\n\n.Planet-module_block__yUjqK {\n  position: absolute;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  padding: 4px;\n  \n  bottom: 16px;\n  left: 0;\n  right: 0;\n  top: 0;\n  width: calc(100% -16px);\n  \n}\n\n.Planet-module_block__yUjqK img {\n  width: 32px;\n  height: 32px;\n  object-fit: contain;\n  margin-top: 0;\n}\n\n.Planet-module_imgAtive__dgis2 {\n  filter: grayscale(0);\n  opacity: 1;\n  height: 100% !important;\n  width: 100% !important;\n  object-fit: contain;\n  margin-left: 2px;\n}\n\n.Planet-module_imgAtive__dgis2:hover {\n  cursor: pointer\n}\n\n.Planet-module_imgInative__RXloV {\n  filter: grayscale(1);\n  opacity: 1;\n  height: 100% !important;\n  width: 100% !important;\n  object-fit: contain;\n  margin-left: 2px;\n}\n\n.Planet-module_imgInative__RXloV:hover {\n  cursor: pointer;\n}\n\n.Planet-module_imgBlocked__txZ4a {\n  filter: grayscale(1);\n  opacity: 0.5;\n  height: 100% !important;\n  width: 100% !important;\n  object-fit: contain;\n  margin-left: 2px;;\n}\n\n.Planet-module_imgBlockedL__xcI-B:hover {\n  cursor: not-allowed;\n}\n\n.Planet-module_missaoTitle__RbGDH{\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  \n  color: #0645AD;\n}";
var style$2 = {"container":"Planet-module_container__YS3oo","label":"Planet-module_label__bZgzb","block":"Planet-module_block__yUjqK","imgAtive":"Planet-module_imgAtive__dgis2","imgInative":"Planet-module_imgInative__RXloV","imgBlocked":"Planet-module_imgBlocked__txZ4a","imgBlockedL":"Planet-module_imgBlockedL__xcI-B","missaoTitle":"Planet-module_missaoTitle__RbGDH"};
styleInject(css_248z$2);

var jupter = "data:image/png;base64,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";

var marte = "data:image/png;base64,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";

var netuno = "data:image/png;base64,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";

var urano = "data:image/png;base64,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";

var lock = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAA2CAYAAAC8yXv8AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK0SURBVHgB7ZltbhJBGMf/O0s1JlDhBngDPIFwAsGqiZ+EE1hP4HAC8QTwzUQl2BOIJ3A9QfcGIpBoCrvjM1NshB3YYcvYbTK/hJSdl91fh9ln3oBbhocDMf/Aa5GPOhOoej7uyzQR4WfsIfQjjIvPeYADcC1h0efleRmvRIxTuiynFA8Z83r+b3F27wUPkZHMwtNPvEm1+0gX3SSkT/f4hA+QAYYMzEb8LcmOsL+spEqf/nxI98jA3i08HXLZqm0cAGqtQfGEd/aps5fwbMjfCIDvvKFA4HkIhGx9egGFh9rO8gy81OJdGGIsPB/xWhzj25bsCb147+ICepUWn/yb8WPEq2yJNom9xGV3SErEaJSe8TEOKUxd4Vz7QIHvFM6aJBruqi/F/RhfdPegX2RcesIbMMDopVMRQd86oYy9abISWSZieIjLKLGGEKjPPvI6DDCNEk1dIgk0NrvALmRZxtDS5dEAc2pwC0NhD481qQOTlt2k2OIBtehZ4hEeHpnUTxWWQy508VbzUFNo+O5pksuynyOtbloBCkvawSGaYYyMLAvQzitozlFLq5suLPShqNIx77uJutv6fZw+cmYamm8SJ2wbJ2wbJ2ybxGxNrtNmJdSvYiKj756aGq4TYa+JdwJfLa/WkBP6OMLX1cXkaIFgc/13JfzrPa8u76IvZ07IEfKf8C/Q/SuuhKXs4o5+rpoTwqMLNKS06sOLI7XsqSK/qF9ffvFWrXuOW0A0RYVR66bOkPKCT8GgoKKBn8ykjY6DbWNlgdaQIpFIrm7gsI0Tto0Tto0Tto0Tto0Tto0Tto0Tto0Tto0Ttk1hWwadfPZxg9CpaxLavipQEwexvkIbOYPOsSdqKb/1WDZfhLT18ED1YTqcvt5O5P9A4LX8o4RXJ+lSOkT+kEdkneOn/LO8+AO4C9Z4hFJvxwAAAABJRU5ErkJggg==";

var saturno = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALgAAACSCAYAAAD2BACXAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAGUDSURBVHgB7X0HnCRVtf65VZ1npifszM7O5hzZJayEZYkSFAQDT1AwPFD/KphRMTzDmn0+A4oYUAmioCBKkiCZJS4bWdicd3Ke6encVfU/59a9Vbequ2dmSbvA3N/UVOyKX536znfOvRdgrIyVsTJWxspYGStv0mJZFh+wMGUxUwdc74xLTINvG/X3L6toMFbGyksvHJRYgP9zQamtWLGCA5XGtEyu/853vuOZpkFuTzukMRaOS/Hi+F+AAztBGCtjZeRCOLF88xyAt956q3ZKA0SZrldZeqbRYtoMy4ApLMAmaYxNwV81mMDiGoMQwhxNNvSBxtoBjL2FAuwoGNaaRLa7ecHpnx6gXZ5//vn8ALhfyz6EJV8eS1h2S86P9sTHylgpKgqwJP0AMQsb7v9zrC5iTAzqkaNw6XIE7xEmwCJcW0ebWMq2QNZd7pQpy4Gsvn0oBPzT+bxxw+P7dv39ggu+mly6dClbs2YNgd1CoNvbALfuNFi+cxwW6GMAHyu8qIAW89xS0vI111wTaFgYmBKCyFJc+k5NY8chdKbg2rCEkAS2PV0Mbr5MQTpTUS+2xWO9kC8Uvte07H23g7s7yzetjqHMPPj2PlbepEU+f8s3z7lv2yM3HclCcLZlwnvQSs/AV6DGBqYEqAtu99dymQut0uB2ga2eDc6mMznj6xOPO/+3UAxyD9jFSzmsJR8D+JuzMAUUjBw7+vTT+IMnT15YEYydzwzrDHTpFiJC4gCqD+kHr89yq5QEVHCXttrF2/GSTaXTZ09eftHTs2fPNnfs2EHLTLHOEtNMWSaXF18ojJVXrAgv3/m0q0AY+aeWhyHAq1SU8+L/dl93XTg6U28yGDtNA/YhXHoCXoGmIqMUuEeiJGX4tlyh7JyvdTHv7nzNF7575enX3/5obvLkyVYkEiGgO1Zc8HPVES15z8ZkwgMoPn3W0W3BlcscHZfkL3V7fCBSCisalN/K45TcDl6+QXL289TPfx5pfuzPp4ZmBH9rWGwVguwPuPgkHDTXwBIwNbAByorA7SwTYyaXacx5KextlEP7rLa03PK3zr40tvirn/kwOrGg5/N5DcFNJ6ItXLiQkROK4KZ7yiVGuTvpDPsveKyUKYruWmSVV6w4Jzqvv3L8hPrchLrq0HgLCtMqQvrETN6cVDDNuGZZQc++mJbR9UB/RDeaB9LQXhXW9pgzavpzeaN9w9Zs54e/fGPGJ5Hxr4FUDuRLI6fBwdiwKoLn+dILduGJM5oqdbgIcfH/8FJmCQR7rGgxx3aBrRwY5MJXymr7eXs2l79y3pkfW9HX1ydpiTr4Lbnp7t39Ao4B3FekeAC+e3PLV86PV5iwLMzYIh1gMaMxg8bxk6z6ihhE4ADuJT3HaFOVGZlUnUFL1YzH7MwVjO3ZLLzY3Z9bdfWdm9f95jePZuQp+cZ8WvJm+dLR/Le//W2TeXkRv45bVqwILjt51vEBzfwvvLz3oHmc5J6LijJ7YjhHUgX3yI6k+L2PqqlWG8rtC0vBNJ6YftKH363rutHf3+8HuAS5CT5DoL70YwAXxS+TUbnlC+dPrNWt80MBdgbesiVo7Opxg4jcKFoJML7pwOgyfb4rp9VARVNVibuPZ2HCUL5gdeLwbHdP5sFHnuy+42Mrbh2UGyhj6RgWvYyyPPLII9pca98FKOt9Ejc6DIdaYbBdKwrgA2YpwPmstn9aK2O15Y+VRc7+lXX+Y1ruql2Tjr9o2dDQEIHYEIOcNpGuWJs2baJpUO6F3IV6Fm/eolrsW1acH6xIGE2aph0T1bQPIRTO1hnTS/0ugARk/EQLgiEYdQnEggjuaojUxUb9m1zezGSz5t/6E7m/P7exa80Fn721n5afcsopVkNDg9XV1cUeffRRGQjhln3LHX9qrIgH8Ny1L+AVLuQ7UhxFP0WwV7vrbekNsojbFDLbjIHTCJkkBs7pixNDkl6FL00cN6xiyiegLLiZ74VQ1pV6oZQXbnfTce87IZVKEagLIEDe2NhodHR0GKiwWOiAGnj9tLG06ABjAOdFcepWsIe/tG2KqRU+FtbgAxhinlHyxgiHiR5GbQNAVZxyJcwRD6QFNYhOqILKSVXA9Jfm15v4JmZz5pbBwcLvVm/r+se7Pvq3bhAPEp0uvs313/pkXW1V5KOaZn0UZ2fKcy4CNiiLnPVWEoHba5jWOsMyV7V29u5p6+7a8/Sz21v+9O+7Ml1dSXrRucd50jFL9Pefc9rktx67+LDa6tiFuqYfh/sJvhyrrZ6TfZbc0VxXddg73gU2eAuggLypqckIh8Pmnj17THzZTXrZkYsXyYZvNoBLB4RfNykbH5kHs8M565tBpp2HwI46G2o66OEI6JEY6BWVEIhEQQuhudY0iER0qKmlZ22CZRbAymfAyqbAyA6ClUuDmU/zfWgBBPb4CohNjOO+dHilSj5v7u8byP1j177Eny6+6IYd//zHbybV1lZ8HK3qfyNeJrhXO7zVxrLbMM21mWz+gbXbtj9/1XW371m5ZrNRUVHBzl62LHzyMfPqY5WhKrzmiGnkC519iaHf33pP5969HTqCi+91Un09+933P3Xs0oVzv4ch92nltO1RUhJxjvZMJpv5z9QTPvjJTCYjwa2C3CTr3dzczPk4PkuTnE3pgUse/qYAuKr9yuk7v3Duwng4+nHNgg8jDamhlRryjWB1LYTitRCojHNQMz1gy4NoqWkcQJzW1AXwmdMyIcs6600OdjOXAj2QhmhdAQIVPiv1CpZc3tqaTlatzaZnHI9XNc1zGAluFTjAr3133jAeGEqmH3tm45aNX/3FTR3IM6z//fpHZ82bNmVJRWVkQSgUmhPQtUm4bTWnIciu8Od5/Hk//rY9mU4/cul3f/23x595AXK5HO1Yu/N33198/NIF1+JvIiNZbXW6HLhp1Nef/MXUE953NWrgBQQ5gZrAnadxfX292d3dbUyfPp1bcRCOpwgoyF2/eSy4DKR8/ONLA+fXzfp0GKxPaxZSESyBWAVEGydDuG48aGi1bSzYwFXBTfestjaAvJvxZV5w2+vJh4uOr0Jgh3E3+DzyXQh6ZBNmHl6NQkpmNltpJYfGM6NQYS/0O5IWDJmm8dBAJvO3O+5/dNUP/3TX4AlHzGZXfOLCY2dOnHB8KBg4E/0OvBdQjb/SoYQEqFpj4XA+ePmP//jFP992n/wimh3P3PrtYDDw3uGstme6rA/A/1sbt+25+PjzPvUMApxunoHnmEc+XojH48YgcjUQdAUpmlFVVWURVfE7mgF4gxa/KnL9d04N3/Pl9xwbY8FfB4EdxtBLJEtdMXE6hOrqEaO24mRZVklwo9sF8eqA7VQSuAXA5fa0Xo8G8UXBLzqZeX5/cRwaDyw4Ds1tBwK9Fxcb8EqXUDDPWDgLSaMCCpawXhrrMwxzG37mb/nZX2+/5Y4H1mT/58Lz6s44/ugFl7z3nW/HTd6Pt6de7qNIKWHlE6Vs0YSd/t1Pf+Azt9238lfJZJIFsTy++vnbTj/+qHfhfoIS3OWUF4F+MakCWy63Bu564Im9NIPWW95Q7gMguPnbgM4moLNJmYf8B8jDmbTgUjx4wwG8lI595xfPGVeRjn0uqLEv6BqrCFXVoJoxG0LkKRJITVP+VgG36YIct4midkDGXa53wW3/VgsHENxxzrvdnCBTbMtsoOsx5OptuDgHr0Qh623kaiCXnACmEYEQHlrHFzVtFl5o7hz80qVf+9W6vDGo/eDLlzV+6aL3vLeyMvYe/NUiSsv2WktAoYSlcDqDi+mCorjYVkhUx08BJc3Eq2KnnHj0YTfc9+izSYw2sgefXNN/2vFHdeHPJtqbjOxIev1SV4kxTXPLVTfe1QU2qOXz1MRg1NbWcnCre6XUWuWYb1gLLiN8fOafl79vTjxo/SFowYnoJLLq2Qsh0khxDnzLTUMBt1ka3JYN7soqzeXcjqW3f8sw4hNrKgFuzzQWvRJYeAo6opTvn4SXXAjYhRhkhyaBWYiB+q3HFxgqWGD+pHj4Qzdf9aXxlbGKS3SmL0fWYnuFzFFxelEtWZtMpp7a1dK5bvXGHQNbd+zrz5oZc+aUKTXnnX787BmTJ/wQtxuvRiftkT02QWtsqK4iXpSi+fWbdpn9g8lcXU2Vcz6luDaAN+zvLnMP09E9+HfUvwmfJqkl2WxWEyfAB3wBONBpc5QLAR1OQAsOIn9cnuwby4KrtIT04GXpje+IMvP3uhZoio2fCPEZ80BDVYRXhTJNQUv84PaOQwiLikqmOJTutiByH2LjVVqiANp5IeQJmuTJAkNrbuU6DxzkBOx8BeSztajY1OLuSyszJNlVRis+GGXsIiSvmmN5GevN5wtP9PQnHvr3Y6s2XPuPfzfv2N/JFRECEDqXAkCrun7025u7n771l9+fO33Sr8Re5c6dWURYLlsoSM7Flh25KIZWPaych7Oti12vI+ksdfkQ/ct9/6o/rwVhrfHc+Frk4oB0hW8wMDDA3xmUCxllG9IgUx0A3OS1NxTAv/Od72h0ZRegmVqW2vjBSl3/DdODsfj0uVAxaTreLt0Ft8OhzdIOJQ7hMEOtWxOc0wW3ar0DlSEM4IShGNyqBQdnez7PBMgz+3G2MOJ12VSkGvKZWvRVq8oCWy3i4aKoaQFGapqT6eyfH1i5/q5vX/O3HgwO8U1AfMEJQARuVEQgFOKRK5qHh59ctxIBDqCAEkDOciu8v72zP4X020KKAsuOnF8d0PU6eXzfGTlOp8t0GJRSfvB677rprkeS7tHww4cPA8ENsVjMQkcTampqIBAIQFtbG99IJGDZSTpKZuYbBeDSaltLujbUffIrF3w1wtjnA9GKQN3ipRCqrEFOZxGvswE8nENp2qAMIbjjNTp3Hv0OpZynEHW0QYbcVc6tDCXnTeI1+NSakJO3KOC3CwHawo+rmY8hsOPcYoP10nR0Sg0MgVG/vbUtfdkPruoF4aj57x3JfQRqArlcPmfW5KkecEtVRswODCbWrNm0PUXZfghyOOqweYcjsMLePdsTpRxMj1PpzuT/dOu91xOnpxnx4ln4EnLwIrj58v7+fucHRFFk8acpv94BbkNLXNQXzl8Wqa4Ifg0Fui+Eqmu1cYuPxgBLlAPbcsA9jEOpgLvaAbfPoVS070BVROHdpoeji4NAabCLdWTJAzWorvRxUBOIC7kq/CZXI8euxMO9vMcj00d1DNQsnj3tm49csyL8tk//8GYFxJ7NweW4BCzrmMMXnOyR+VycU8nv3N+xmhQU+m1NRQVUV1csK+ba6tg/DaDq9TSFFGrll3/wmy65msAN4E00841BVIgodT2v/3xwCe5ffeas0DkzJ/01orHLY41NWsORyzzgtjzgNsuCOxrVXHD7HUpLghO41BypiQGUcyjlhqUsudTM6cWBWrTQkyDTPxtSvQshm5iGIK952eCmQvcllc0iaHJgpftDc+vSl//jK6d9AFdJvu1x3FTgL5433aiMRT4k9+PXtguWufnqG+7YSLNkvb/+mQ/GQoHA4cyvkpQDN9+nOLy7+/x9j6/6A1pvFdR8jBTFATRp3splWr5r9uSFv54BLu41gxXnnx9cEK24MsL0d0cbJrCa+YcjAwj6wC0tcQmHUqyLoDhWUaW54C7hUEoQByrReod0GNah9NMSkOegoZWuQDA3QiYxGfK56UBBGlr+ShWrkIZCohW0gW3Quf0R6N+7Egb2bY9Fh9jnrnzfcvLGNMm36Z8AvLxA68b/+8rbEY4NamqrWyEBzJ7+oZv++cDKIQS3SYB81+nHXYCULWrvUKnIUEYlUd8YuTiZztz18S//dBdxevBZDqQozrklEgl+oyn/RD1nEeTxAP51SVFkRQS6iZRPsnwmXB4F7RORugZWPW8J6MGwF9zWyJy7olKDWEUxuFWH0lmOJRSPwPAOpR/cNrcuZIiCVKFuHZAXgxyCcQcYF8LLui8E6mQXijMdYGR6cXdZfi74HYPd+5KQ7UFk5s2KmfGqr3zj7Ufu/f59656jnwmgO5+er33iwprG+rrLlYAoqFQFFebdv7nurpVEY8jqz5w52RxXF38X/7KVUEm8/NthQR6qgm5h710PPPvPwXSaUx7puIL30+hkDNbV1ZnoLFsYqrfQ8YRNmzbxZiXswzHnWl6XAJcJ/jT9senWZVGmfzcYq2B1yLm1gG25HYfSp4z4wU3xgKpqHSWoYinQC253WQAjloGIDkUcm0oZcBfQYudTdbaVdqiOxUkKjRkqAlbuwAFu5obASLRAYagNX5wBe7fOWosfqqs5D30tBiSyOaiNhumzHV7cUH3lp0497IJf3L+2WeW5DRgG/8zF774MwT2F32v7hntAun1/2+9+d8udCemY/udPP3wnInTasNo2n1VTCOQyeyqVztz8yW/8bDNFRBHYnsoMckwKCobrTcoP7+3tBZQIrT179shLtpQ8FKe8rgCuVuqlt/WeL51/SkzTvhWMxIINRy0vBrfpVT/kvAR6EK++Mi7D7y4gSzmUTlosjkPxsFc5AYByDqVZCEE+jbp1PuJuJwBugTvNUB+3WM4Ff+nrR1U4h6Ae4PSDrLVVSJXbGDVjE5p3ZSCZMCCCznAKhYmeVAbGRen8WdXyKfW/b182/8M3P72lU/7qnht//O5IOHSe32rLMZ7z6vM+/vV7RZIVvO/cU2IN4+q+6ND0YeQ/ZZceZQZ32nrFD6+5G4EdEjeUrDd9WehZUy0lM0MXg8sR3M5NRomQLDggyHmLWEIbtFQlhcHrpKi0hEa3fOncaeP16OPhQHBy/RHHQqim3qUlHp27NLgpOkm0hEd0Fctd7FBazr5ouRYKQNX0OvF8FIeyhOUmUOeSlOeiO/uy13vB7XxZ8mmwDL8Vt5cb6R7bSmd6ENTlQ/38yPhl6unIQ0dLFrm9Jc0b5A0TetIZCKA6Xh2xtfuMaT5w87pd37h7w+6BG3/2lXHvOPW4O/DS6kvmkTDI3vHg02/78OU/olx0qETrvfWRGz9RFa/4zGhVEmeZgu+d+9o+uviMSzaLG2qgETfweAa+RDxzUAw5KE6ZVWv5WJbzoIC93kL1jnBPD+qCCy5g43X4XVDTJsdnzfeCW8nsszwOoq1ahJCKxKI6BGRGYBG4FcDz4oKblkdqo6BkY9qlBLhNBHc+2YCrxGdZUWBKgZsX4uEC4FY+CUaq2x6IT+dTI94k2ktqyIDu9hwM9BY40C1xDBpTGD+GisdAJssBWxUKAgqVp7/7sOnb+0L1v3n7SUdfiYvr/bq1sNyQzeR+jeAmCY+j9m/XfHdaZTx2yTARSbm4CNyKR/vgaR+4fCsodS0FRTHA/UQagp5YovqaSl+cQSRZOXkoVF4vAOdvJU1QzfJLkHcHQDsDnUqITZg8okNJPw+HNZQAGU91ZaqaUgRuL1hVi06ad5A7l8NzbrLYZLnNInBbxeB2XhR7TA5ifnA/mOletOZZGE2NISr0gepCYHe3kSxouXvEYwjzxpdFgzoMYrR7KJuHEFryAKK+Mqh/5OYfXTpD1/WjAUrXy8QreeT8z333Bjl/yjGHRY5eNOcKjbFKe0lpcJeiJJI84Dj5/d/+9ee9vQnnJgpVxhQOrONYYoBHBTVVdrCam5vlzWPyciVNkef5egC454N3WPfquVUVsV/oiNT4zPloloIlHUoCMYE5HNEgHALX6lovDdyc1kyICz9pGHBTfvZgI55TQFkOXnBboPwOOI8uDOyFAgI7n+iCAym0O7LWrfsQ2H4nVVhuZ1bczqpIEPpSWehLZ6EmFobZS4+KVI2rO4uv9YHb/t5Dx90PP/ujx5/emEfgaaScXP+zr709FgtTI0E++c+VOocFNy7r7B74wU9+fVN/oVCQb7opFBDHclODP6KygxGPx83BwUG+LYbp+Zjqpoo6qRaUKK8LCy4VkymptRXjWPgqtBp6fMZcCFVVc3Br9EXCLQIBBgG0UOQ86jp4IpEuZTFBpSaqLu55ARS+zh3L6igEK4Pu8iKHkn6DMmCa0gKC3t/bR/KCG8/byPRBoX8XHx9onjjtKjlocJ49lDDEtYh1YgN+VpZzdD5N9yCCNwejmxSsgfELFsDs448tB2y6rYX9rZ3fuOjzP9wPIhh006++Vj+utuZzzM4EAPFDKCX/eSmJuyKXL/z1rA9c8QSCG0Bplk0oOiaOqc6lJZxLPiC4+VioJ/zmC3CbimPpAfqhDnC1sR32yDff+9GaCDsxXBWD+nkzQA/oPP2TKBcHud9ClwM3L+XArYBWDCQLRsZXKqdVCtwWgjuCcqBIFVXohwfceEwz28dpiJHstIEtnczSRshTaNNMyuQ8u78n7wDYtxX4ji4O4S4nqlI7czYsWr4MjYLdNECp7L9EKnP1mR/86koQpnn+zMn6uW9d/kObq8unVMaR9OxLrmfo7Brbrrr+tjs27d5dkDePHEvBvSk9ljIIKUW2gNzbELXq+XYU3EH1RDYZwdUTauVK8O6iG8jg0C7y/LT7/+/cqXPi0X+hiHF4bPoxEKidXEwtRgtuq4QUWOr3OOiod8eaqnEccH5bDG40c0kTculGPNMYlKMlxKmJhhQG9+F0Hpz8Fb6dPW2mE2V5dzppQE9nHvq7FQfSPpDHejtAFgu55RbbmJY9jk9sgiPOOQuiFXY1NxXc7gS779h3f/KKLbuanc9Lx+p/fjQWCV9uY3p4R9LdneK0WpBcuWrjF8++5CvPEx2RmrcAuKdycTQaLVA1tWQy6VdOTGUsLvX1Z8GZmt89LRZ5J1KPw7RwJQRqJiqWdnhwgwfIAKXVEsV6+yx3tKkK9PDw4DbSOcj0Y+g+Ei0LbjTvkOvaiNZ7QEiWptdyy+MSyfcBnISVzla02N055NnSLsvigts9LngBL+ZNsS5WVwtHnnUmRBDcpSok2G64tuerP/r9V3Y1dzrgvve6Hy9BcH92NOBWNBiPs4rh+Gs/+LkfbERqYiqXQeBWZT8OXpIKEdyqWuJYcvCVUuCmckjmoiiaNx/fseKdjaEgI86nhxvngiWdZnNkcL8khxKXhcfFoGJarQ3uEtsrtBHSHWme+qpcgNdy5wYh3foMmJn+MuBWfAKzoO6GW+zN64agqzXrgFs5kAfclgfcXt4t10XjcTj2/PMgEo/7pEAxRkigX9N34x33fOa3N9/JHQtyLG/9zTfHnXjM4l8wSjP38W3mTPj5trfmjqazZxef9ZHrO3t7nfAwqSZQ3CQbt9AKNXGsNQV25LRSwcG+4BLlkAO4kqzuuC+zGsOXhXSYoUeRKsQbbUAUgdsHZBnsUQaZMuux+sp2dNhQZRiqpo2DKHJuERcDjwFRwY3Tma4E/mgK8AawxLmoFtlId0O2Yz2nJM5LZIpzBPe87S+S1PqR+/YXYMeLKWjZnQHTUO01uNxatdKWpZg2H+8W62qQlrzlPe+EsLDclrzLghuTP5PLDsGO5+6thq4t43ANKSba5y9+d8Nbly39EW4wAZzWZqURV4At9iODRG7CFT/W7vd96rv/0909EHJvJo9Y8jG+RFI14RacuHdlZaVKSfh25FySckLzSvPJFpQphxzAfbkEbMVl50crA+wSmtGrm4DpIQXIKrgB5ON3XCm/QwmW77f2tKZrPHkqNrEaYpPwJYr6Io+OlaWFLrgp6pgd0EAL1yjHBcdyU55IoW87huszyothjz20xHKvJUvh9Z0Z2LM9zTl36eJ7npbLx1UrbipOZVVDPSw89RSoqKtz9iDtCFltmqE6qns3Pgl9HXu0aXWhD6N11eoQZF++9MJLEYDLYTTatgQ5SOzzZQNPr37hG7fft5IqJ1vSaousQQ5iUk1omVBNuPWmoE5NTQ05lu6Nw4GUE5FYBaXyT9RyyMuE757PLsD4ykRqgCdQWV8C3JYX3B4KAlCSc+NYQxWBHMdANMDbDKR51T4WgZsX94WhyueZ7hToVbPlIvd3/FHkEdw7wMgmXHBb0nJ7z4e7mPgl6UOO3b4rVYKKqIew3NNTzlhacfcU5LQF8QmNcNgZp0FVvRA+FI7sgsOCF1Y9Aq07X4R4LEANXpz0iXcumf6Fz11+YjQSOc9+I0ZyJJU5ad0tK7l+8+6fvPXCy3f5T1fwbgrqmALgjsVG680BLlqVJWpiCmlQtsHIT1ptIgJKlPLQPzhFkGv7y4KfIu3ai8Y/h/TkCD1WB9EZx/KWpspx7pLKiEYVExnxP2D4phCnpmbUGEmMpJUz7z48Vr4M5+bHL+RhqC0MesVU8HNu+lcY2A35vp0+zl0C3DjOpgvQvjcNg/15qmFb8sZYypT6QTaH4d20rmLcOFj67nM593attn2rVX68df1T8OLaJ/l9rasKQ6Q2Bk1zjtgwY8ay+bhpeNSOpENT+GbmYCL9yzM/dPmtL2zZayoVGSSwyXI7CgmqJvl0Oi1bsPI000ZjatiHDoEWXHU0S1sD58wOrcLPR7R9zVb++v1vmdcUekZHhAfrZkFw/EKF+9GWlpgW903yQI0p26hOuKVYex9lOQBwc+vdj0GdwlTOW/3gtvIpyLQ8VQLcAN4gkwWDfTnk2RjJzNl+hZEv3QKWtN6lnEqzDLjjjePhmPP/C4O9QQ+4bUoipnG8e8saWPfkg/w31DZd/fRamILO3KwZZ0qK4W5s76BI23ZWK3QhVzDuXXjKxSua29u54RI53qrjWFDGTrNschlSEwMjlibq3qokyMeyfXQYAeCHEkVxuv6QXX0sOm78B+KV5JPgLaycAhAUKadF4FOBCd7lowKv+rtStEQC215nGqg0WA02b/VYZOC/y3Vv4nzWXe613LJmf2drhg8gq9KVqPBQznI7TmUJcNN5Nc2bC/NPPQmpV9ABpL8yAp1D+84N0LLpaWBBjVttrSIEleMmw9TJJ9qGwnk6w1htAMehVBY8/44Pffl/JbjBpiSOaiITqmRQB4SlrqqqMkWD99Q0tLT2/PeIC36jRgtu+ywPneLo3tT3yqmzUvH/vmju+nBIRzOJylT8aOQaVCPKD1bTC24HnK8OuKnkUjUY1Klxf2eBsx2ltWbb1zjzxWF/3MYwoXVvCvq6smKVyR+EiXEOvyBgqf+dU3WdR78VpzGBe+5JJ0CIqyXi5vrATUs6dq6Djv3rwUS70ZExKK0EqtDPWTL/ZKiOjwNl41FbbaEZtlx/870XffIbP8sqNXMcy61QE8d6o2pCQZ0C8u5CXV0dT5mVbYDv2LFD/hbA8zkduRxSKorQBxk16n7GyZPnBwPaZL5Co2aLlSy+YcHtA/KINARgWIdSBTdOFzIVkM+UBjf9Nt+/C8qCm7g5xjf270w64HZkQhNGB2518PNvHE85fDEsQocyXFlRpJI49A6X9HVshf7EZohOqoDIuAquJOmBMCxZcNKw4LZbc5PgZqXA3f/I089/hsANttWWN5OsN7fSUjEBRRZE1cQQqbBUW0cqLbzSAy0TFtuEAyyHBMAtt7MnXtCJYPF4+G3oHNrnp1XIDUcB7lKcG2BU4HY2dhUY9XdGPobWu178RAG3GArJNtS5+hywlwJ3y54katx5B9yW2I8/PG957o9yBZY3UmlfIs0wmL18Gcw7mWiJZJ6lK/8ODe2FgfSLGFMIcqtN+0SlBI5e8jaorpJKi8NrPOB29uL4OM5u8SxYz8NPrrvirA9e3uq7qVLzltNETbjlpmglKI4kNYtM0yIVlvJNqO1vtQvvYXVvfzlkLLjMGERPmV3xkXdGYjH9TGelHvMBUdW9xbgsuJXlllVm3vLtA0BacqaAO5NoRArAisHNRwYUEs3gBJX4avcYVP+TLPdAT45Pyzqh7iWUMk7DheEFNQGL8+xFbzsdph/9Fm6J7fPWgPkoCc0nU3uhq+c5MPB8KZ/F4DktOixdchbU1UwAf0SSiR14VBLNb7n5VyK78pnnv/euj379eaIlYgBxQ8kSc2oCwokUvFumxzog7+7ulnTECe5QQIfwIYE9nO7tL4cEBxc6JhM9ZWlr//2RIxZMq70rGGB2bwWxuRgvplC4CSOqHsMuG45ze7eVtITXhE/HIZehtkqYd//KS2akujBiuU44iq7lth1KCzl3Eno7s/YyU1lPdg8/VKadNqpY7tE5lRU1cZh32qlQN2WK2LJ0w5aEn8HEdujr3wQkP9N+CNyaHoVJTcci954wrCPpaNxM2aX7ChQGE0NfmHTEu57M82ZSbN6tOJQcwGS1Edgc5JRIJSXB6urqwsDAQFGvDVDMu723aBTlkLDg8iYSuGm2sSo2WdesRne9CML46QUv1sjDSwQ3fb/z5FB6wK0c1tkfcu+BfUXglkNfV0aAG8BTu1/sTzZIpF6T13BbyuHENJ5O08xGOPzctzngZiUAact8FiSGdkJ//1YwCi64dQ7uo6Gqyg9uVmS1wa+SOOC2zKFk5ufTj7/wKRAmW5wpV0pkMAdsq82BjuA2VGpCNeXFbzi4ly5dyudFron/YR9QORRkQue2IT0h/g3BsLZI0zSv9+IBIgCM1nqP6FB61zmW2whAJjken1LIsZoOynzc30j3gpnuBr/lpvlUIg9t+9LiMDIPRYCbmq3Q0HrLepjKf3XkDja4dQxYTT1sCkxddgboIbuLTrXNQBfc9m8G+l+EgcHtUDAMrkgaXHLRYdLEY6GyYgK4yoj8nZ9rFzmScsLK5Qs3zDzh/H+gkyhqeYCpcG05eAI2ZLkrKiocatLX12c2NjZyiZCcStFyldNVN7yMcrAtOL9LUvdOJBJs2bLJgVCQLfRu5gNpkVUeCdyuIlL0QihWGAQlyWfikB6chE8q7ILOKnceGJ3ox4ilWnFBHCeXKUALyoE8WcpSmmsW4OZbWR5Yu6cpl/mcyqqaACw6+TCYfuJZLrjVZCcPuE3o71uP4N6GoLY5Nw/mILinTjnRBrfGFONcStsuA24GRjKdvnLuKR/43eBgyslzEPklXO8WnFvN33ZyukWOt4lOJZ8nSZD6okfrbolcE8u9H9ZLBvpBBbh8uLKX2jVr1sCFpyyu1HVtpnc7qfUDuJHAUuAGGDW4LdO3T7vVqczgRFRKxvHa8P4IpTst54E340C13v3gJtrR056FbMrwgltYcZoj620NU3EBFN5NNKN+YhRVkuNh3KLl+Fv6+JZvSN6y8tCH4E4M7eEW2xQDUmSYNhXBXSnALX7j35ftSDq7FAcQmYR42slU8k/nffQb97a39+igvPEimcpSasb7B9WaF8ippArE8sGQ9fYpJgfkVPrLwaYo/DnThOTfU6ZWV+A1zfdulYeSFnrYZX7O7VNO+GQA1ZEwGLkYctMI+fSgcmP/9uCx3DaIs12b7EikpSR64bH6unLQjQC3xDq5X+lg8iQhU0Q4xT79iokEN7UmMXV+HUw88gQIj5sKJZ0/cEFuGCno7VsL6XQHTluOWhIMxaFpwjEQq2go6Uja+2BF8p/7AvCRNZRM/+GYMz92w87WTglmabk5sCW/FvUqiXtzUGMwxxQtU/H1oiNbU3UqqZcGmUgFr0A5ZGRC4t9UJtdWVCJFqfasNLNQnl6MBtzuOmrSgQCdS9WhtZ7Am3cgCRCEE+kFtzh+KXDjUEi0IAlNFIE7h75Ux/40eBr6FLTEfqUZb5pe/er4FRNJS6hlgFlHToYpx5/Fwc1KWG2VSRSMBPT2rkZwdzrgpncsGKxGcB9bFtwytbWs1baXo+XO3HzM2R//M4KbL5AJVIpDKYFdoK5HCOxIO7g1px7SEOAObUFwq7ne/FO7aNEi54GJVNiXBfSDasF5jqNlN+RDFUdpUSAUmEVtdXg2NKnRm5GsN/43NA5gchDtNgBpqX0PeaPyhSDy4RAOsjF55SXwcoNiCw7ucr7EyEK+b3sRuCnttW1vGgr0rH0OpThL3sks5ZLLeY/hVoZITINZS2dA/eJTUOuOgFuZwLmDSiIUgW0QurufxIBS2gE2DXqgEiZPWgbhSK2iktiuqf0cYDhHUqyyIJsz7n7LWR/77a59bf6H4deu+U1Hy50X01R5gcLw1P0fX9fU1ESVi53a8fLyVe79cqiJLAddRWHKVVBL/eNq9dqijaj9PerqgymdPBFwEKgcsKh0GDgG4s389jAPMC0PgL0vhQput6IEQHlwE1gNO6GqkAFL2R9ND/TkYbA3X9KhtMm0n3crpyK2oXFlTQTmnHgMxKcv4jKpkoIq75wnyy+b7YDenlVowXOOM0lDKFwLkyafgBa8YhhHUjkXP7g1+/5tXLcefvLbm3+/r7WL2iQB0ZaJ6gg5TiVZbZIEyXKjYsIBL8LwjsVGFcUQYXj/IG8Fg1eAphwyFIX6W0cvmkVCwcbitQhuk7pssbjzR85gdmg80ovxkE/XoLWsEFZbPBhLeQkOBNx+h9IpCriJmgy14ul0g1rxmehIJiWoicPJTS+4JShLUBO5DT39eF0FBm/eCvFpC9AP1H3hdqltu78b7N2GtITAnXesNtGTaHQ8TJl6MoQOCNxKlTQB7ufXrIX1z62GBdPHV1I7JkpDPTTwxCgEK1dFCNyCllAYvlQ7ghzkpJhQGJ72IfVuy9FjQR2/rHLIpMum7XahoT+Zn1g3LuhdSU5SBh8ejENnMMSBzEAFrw+0Ety+ebGBu92BOJTi99S0mp0Om3e2JyAbSEU79qdQGjTA71DKwnT64hSc/frBjYQT6iY1wsKzzoJAtKKsQiIXUvSzc9cqyMF+YNGAo5SYSM9qaudCff1i0LUgHJAjSZPC7BHdeuKxJ2DL88/z6w9pjIzPPnkBMnlKCeaUat6Bqp1RL8U8iYrmRYYgAdsizk205OWqJeXKQQO4rFxMV3bqqadqFOChkivko97tdMgNTUTrNA4CVSEOAgfcUAK0Lxnc6iYlwE0gHmqzwU0gFdtZoq5mb1dWJFGpDqUX3G7LsT7FhLZHp3PiYQth5vJlvAH/4VQSmshnktDy/MN4v7ohOqWav0ymiCNV18yFceMWIri9DfqMimuL1QTuJx9/Ep5+8lmgngHJKyoUzADRE5E/4g/ocECrTa2JoUDVzjCQQ/3KG8S5RforD+Qo/VqqN/4VKweNotj+pV3BQYIbvHaFO4qZwen4MOuR7xZ4jwUey62CsSy4nb252/kttd+Cg7vc4i1R9UOucwNKghvxHKTlNh1wU+prx37k44biUPrBrUiCHsUEh0A4DHNOPRnmnHIyBEqA2xNvQd6QTw3CvufuhmRvM0QmVPBjGfy6GTQ0vAUauOUOCVpz4OCmcP7KR1fCk088jft1FSmc1ui5CcXEkyRFciClvvqzA2tray0CNwZyeJ1KapFK7NCUcuCrZb2pHHQLToX6OKT+xqm3Wne9DpmBGfjpd5tCM9FqsZhKX/xALQVuH31xODf4fktgLXDrTAoJNVdMqa9UgcHKJXl7JapaIqepNdd2Dm5zeHD7vyJiqmp8A8w84XiIT5wIsipZOZWEADzYuh3aNz2OUmQaYhPjwII617gZC8CECctQBpwAaiYh/+kw4FaBTSWTTsP99z4Am17cgpdictLi2BK8biWQ4wAVqAMLkWdCWjcI4FPFhV67DRRnoObWxO8ouU62KfiKW25ZDhrAmdufvHN7UfDnY7LcuaFJLrhFsXIIpHDObjpiBHATQK1MP2+6wTIy1HaS4M0k5RXAn6/taNaUMEVdfFt5KNVJLIgvCEUoO1vSXDVxrHMRuLUicKu8u3HBPJh+3LEQrqwakW/TPnp3rYWu3esgn82AFg5AsC7KOXcgEEfLfRR3Kov4tk9xVRHtB3c2k4E7b78L9u7ZDzJPneq7SkRGgxFqhN5U6lVKMEug84oLNI2Wm8BtkRxIbQkq24vHZL1qoFbLwQK48+hE44nO8opwtCeXnIC0ZFzxrwic+HnWK+sUEckGJ29YJzvArW4BrS5ICU9YXL/l5T+WaocC9NI138V2pq2U9PfkoLeDek9wG9svArcI5JQCd7iqEiYdcTgOR0C5JCnnNjHqvjsDnZufgL6WbXZT0bgsNrWGW/RgqA7GNx6LSkmV2MeBUxIqKOPBHbfdCfv2NYPTEpZQfmys40uvaUPg5nebSvvdHOSUQEWBHKpTiQNfLsCtcj9Q2jJ51UF+MFUUfoWqk4FvOzS3Ve2vDY0v+yPqvsPMDqEFq+C0waYRvTj0UUImSLoxIriFhfKCWwW7ncNCAkEmWYBkgoY8pAbJF1BC835wizRTW+suBnfNpIkwHR3JeOMEB4DFwHYWQjbRA+0vPAyp/k6QOeGRhgrQI0GoqpoFNXWLQNfDwGCUKokP2FT6e3vhn7feAZ2dXc51uW2sWCQd4TWnYGd7vk3mmchmjsVA1KRQoh1B4twmJVCde+65ptqWyWtVDhbA+d0TtaO5Bk4cnPodj5jRRNET8BUj2cflOrMwiBQkadMKB7g+cIMP3JabfGWB6QO33bxbLmvyNNfEQAFSQzmkBKLZN9N9OUqBmyKUnCt7+tmxwU1UYeKSxTDt2GMgEAqPCG7a51D7LujYvBKPn+KHpkGnBkHHV0F17WFQXT0PePPR8NKsNp1bZ1s7PHTf/Rzc4g64a+leFRK8F3FUT4xt+9p02bUfWXCimUoX2yrgHaBLzk2JdACOQ/ma0BMqB5WiELipiloikQChjQJ+9PaW+xFZ7EJiP+QwsIH8AAK1kzCEHR0e3FYZcFu2Tm3kCdAFyKYNBHMehgbtFlzJSns6rpIdyZrlwG1HWcnZBPB+e0OxKMw9/a1QM3Uaym1MWHn3Vqhcm1MCpFs9u9ZA374XoJDL2Yih4wQ1DP40QsOE4yAWa7L38xLBTee9Y/MWWPPsKujvG7TNgPyq8fuDX6pcP1AbMMBQJtS07kzOylCdBtkWt6x2JgfKBKR2TKj3BdHkg+kezqYlryW4qRzsQA8TLfQz1Ej57d++r61nzpSJhVAo7Dk36gUh27EB6ckgSPgU+lshUN3E8zTKgZuCbplUATl9gQOZGtihrj4oV4QGytW2B9FgJ+3YFLzbz8VNS+HvAtz00DTmCeooNhDGzZwJ048/DqI1tSOG22neyKWgY+NDkOxp5Tnc3KqaNjWpnTwVJk4/hWcFjtAmCZS32nbZtOF5jFCuwQBbBrKyuQoJbjOH5zFInyKkP3YnDri8dTCZz8j+c8ClIvyGV1ZWyh6ISRZ0ODf6WLyRTBnzeC3pCZWDSVE00cac8wjwxrC23mQSRVyKlvGccJ61N7gXcl0ieqjuxKD2/5rR6awHajecdltAi5xJoyUeoCHHm0Ur1X23q5yA60TSTk3FcbQUIKu0hL+SgmtbrtWWF0YlGA3DlKVHwYTFSxAkgREcSfs6M/jCtj//IL6MKZtvWyKHGzdumLkQJi5YDpoecfm2onM7RSKaKUZcKUQxNq5eA8+vWyeiniYC3HAdSxOd59yAk0tDeW9cZwdoSaRyvKs3peNYB8ii/0puFVDzVnm4c1tea3BTOZgWXAU3xnEKDG8MnH3K0Schr+ReJlV0yPdstylJGYebwFlIdKK6koKBoSgMDubdcLmkJX5wg+Tf4ILX3tnI4KYigA2+upTiKULluDqYc+bpUFE3bkT5j+ZNdJwHm1+Avl3r8AXN8bMzBMCpk63GOW+BCXOW2hzf+ekwjqQz7y1pvEdrnn4Gdmzd6gA6R18x2bIW1/8HnC8RFerLh16EgcH8QPdAile7JA1cpMJSHzrKjbEBTxUY4vG4NX78eC4ivNa8Wy0HnaJQPsKuXbso0GNtueuad1dWhq9BxhAKGGh9MXpIPfoOV+hZ9HUXMNjSjg9CBx35rhaJ2QBQ6lxaRbIfOC+AA24f53Z/YwOKN7xPaa4lmnigrfRggDuSU96yFKdD5R1JBYwFVIR60ZEc6tnHZUdTUBI6djBWDZOXvBWDQVPKc213oX/SUxIDA/D4Aw9BV2eH/XUwbec3g/SEN+CJsQICtw1893c67qt1fwp6Bk3qyxKEBg5Zu5FQ1VKT9g1EX0QPaEAVGugrPVILsK9mee2/GaLQBYt2CMk707b9+4/vjcVC1+IJhakSgdaNYXGqCjZMIbWjdU8WBvsLnuXk8OnhCNKWEGjUB7xZAtzm8OAGRdoDp3vw8s+namITzyOpbJwg8FsG3PYJ8lGqczf0bHuC55XwWjeWnU9CR6lqnAFNh50E4Vjc/dlIjmSZxIuWffvguSefgoG+fk5JLPFyF5BaDSTTeB8z6Gz3CQfa/V0Bg5UD7Vm0/Kaxpz912RP72p4Du+m1PPVCjKH5Alpw4o1qj8SerEFQaAyU+wy/iuWgWHDxNssnw3bee+1/RcOB3+LVU//S/HNm5hMAw7yABO79OzO8Z9+i/SNKCukUsEyaJzERyClkzgeRB8qYnbsh46ky8YqH3CW18aS6lim4v6lHL4XGRQshVFE5Kkpi4ddpYPdaGNj/Is8utLkwOBV+GhccD3VTFkIgHFUPA6MNt6tl+6ZNsA6VkjRGKS3x0kp+nysgBcwh5867nFuW5BB+FfehO2Rq1DVjcyHE2iQ9ofVIUWhkUg/EQiJUgQyofzOUCO3n8SajKGodB7bvkRvOC1jsdxaDuFxsBWNgBSqAGf0ld0Dg3rUFLU/GHPZAdpDCwD8DXulCykkMOfbMk0+AeNPEElZbdapcjy8/1AM9W1eiQ9nhVEqQ4A4hJWlafDJU1k8FT0tSL4GSZNNp2LLxBXh+7VpHEjUF75bOawYNgA1u0WwFnQfyw/7eDHS0pJGeaLy/UTQSeze39reIXfO+LEUflh5QU6E+LDGiyWvHu6frpGW8sS245e1/h+196Lqz8Kv6exXc9hMLNOet4BCy2AX+fRTQgd+zdWRwv5olEAqhxV4Ak1ElCUSio7Pa+EVItm5Cy70GAzdpIcsLSoBAqmqcBo3zl0O4ssY5zoFGJGVJYdh9NVKSfXv2OIC2wI1QcjqEX44MRn9lfrpQCaGrHfl2Z4bPh4L2AQIB/YlUPs8E/+YLiYMjiCmP37Heog9LvjvRj474AB4c/s3PHV6DIi9QtUR7H77+lADT/46Lle8waa5Womtg8NNde/fXzpsQuZYxN6WXrMveHWl8MAcP3JWN42HGicsRkI3A2wYdMdyOKgmqa71bH4d0z37HuZOWm0xkw+yjoXbG4TgZVH760sDd094MTz36OAwMDHG/wVRAzeU+ofEnhzq5ekNFgpsoSV+PDW46PllwDEwZ+xOJdaIpNlouw/QWgttzbGoVWE7LFGipfb+aKbHDldfKgluW0v7gfy+fdkyAabc74ObXzXGc6+4b+u8zP/GdZx685n/+i/U/h56Q3aUHOV/Nu7OQTLyydEMPMKiKB9CZ07jmS4CgYBB9fSm6KfvL0dFqTz3uaOTHC3iPCaXa2/arJOQLpNq3wOCetbjPtKD1tjWlcbhqHEw4/DQIx+tBNqR74OF2UXB/259/DtavXo3cOuCoIYoQ5DSQT+242JzcBXdHswtufr3y/uhay86eNKV58s2pK2+iJxSiJxqiWnA5IP8GkghFSwkHTQPnx4XXpjiPfsf9f1wYDYf+jQum2kucJ2YNZNKfPPm8z99x3w0/ekfT+LofGO3rxkNiP3/y1F9k276sp0u9l1Most7QFILa+hAEw6xIeeNhfAN4JNSMToJKtLDU3w3I3A82PCUhqz2w8xnIoPxXKORccHPLjZxsyiKon3s00p2Ye5NKWm1XGimnklD67IanHoIdW7aAoVUKTu9abYd3owNtYPg9mUpAMpN3wNzblYH25hSo2ZBhdMwDeJPCkfDvbli39VrwdTVCCgqebw4BrnY/4m/Jqsj5fK3Lq23BmRKeZR0PXT+joLObbHCrFtDKpnOFXy142//75+M3/uzkpvHjfoyrG7T4FNNM7EeZyoDO5lcO3OGoBpOmR6Ayrpc/cbTmwVgVVDYtguC4WQ66hufbGs+XyfU2Q/+OJ8HIpuyaNhY4nUXpFXFonHs8VI6fwROlnH29BEeSSqKvB5598E7oxCCZFaxzXiKrCNwGD78X8MVLZe2IMJ3XYF+2CNw2PbGvqyubWSkWU4IVCAsOors/QIcSrbxuDQ4Oyp8fVED7y6sGcIVz8T533rOksd7QtOtxyWLPE0NFEHF754orb/zlLb/86rTZ0yb8DlfV8/Wx+qxhMQ217rBQp152CYU1mDEvysflCjWLFqibBuEpRwELhMEG8ciOJKXxDu3fgM7kZgEslwJo4SBUTZ0DNZPfgla70j3WS5T/aP+tu7fB6sfugVSqgOirdSy2VGdUxYRkV6uQAjQkDm1JJ/PQ0eoFN5WASEMIBgN7H92+dwv1l0nyIOV/iw5b+Q9IIlRSZPlpUdMflDRHRTTJBwezvGoAV7XAkxsg1lBX8S+cPF7NleDFgidvvuuxrxzxlnnhE49aTMnh9eKn+f7Boe/t355cUkgY74dXoARQFZi5oDy46bha5XgITzoC9KoGubQY3EzJvhYLM927ILFrFRQyCZf34qpgPAyRhhp0SpdCKDrFsdr2LfBTktFZbapNv/HZR2DLumfA1CvRcld7rLXHcpOjme3jndGS7p0RADeQerWiU5nPmb57QB2t2V82I6j/PZXKE0Ycx0fJAyf9m2cQUjYolLDaBxvcVF6tSsdOT2m33vqd4JxFs35lcXDbbW7Ih4vC0e7123ZckTQy+vtPO+H3uHKGHWLHr3uucN1x533ulkc2tv4VXoFPXiDEYNqc8uDWwlUQmngERGaf7IC7bHvb9iSnJEZmCAa3rYSBrY8huIdsGhIN8srA8bkNUDd/MdROOR017qkeSlK6mbSRwT3Y2wlP3f8P2LJ+NVrtOrywSpBpMa5TKaqZUdRSgJuoUipbcIJJrfuTkM0UO+w6s+tz6pqWWNvW/y/Z5iAoed7Ivx1uLTIInYilsN5SHjzoVOWVtuCypzTZGy1b3jDjazh7sfMuCXCjn5Vr7Rv46J9veXDfT77+8R/istMliHJG4bYv/ey6away2chVD76w+/iLxz+DMchl8BILKSVTZ0ahoqoE58YHGmqcD8Hx80Ajh0+gayRHkmf/dWyB5L51GCxJQiAWhlAN8tGKELAwRk4DEQhFFqLignKiaL5B/LQsJfEez1fweM07NvH+LNMUXwnVOzncps96cycTo6VGtp9LgbQdWe68yHrsak1Dor90h7MBTedng5Tqzh2dvU7lYsoxkQEempcKCiVVIQeHvr4+v0PpgPxgKShUXmmAO5GcW25ZETyubtp5TNO+5nqT4rNM9USS6S++9UNf27DhX1d9JhgIfli5Cc/94s+3/98dDzyZxpuqDeVy+qbuxJ8Oq48vxS1CcICF1JKmKWGorPaCm6HmrFeNR6uN+nOsTrGYxVbbnRYT5hDqmevQOnZC1cwYGtFqvtwU/d1oWj0EI+hqaBF4uRFJKqSSbHruMdixGUP7qJJYAc2NgppeWsIHlFaNbC93LOmMcgUT0lmDA3+oP8eDOaUKZQ6SVBoIaB27+pM3CXDTWVlKiiy31qJJNkDn0lkmG/QB5Yt7MMFN5ZUEOFMdy2NrZxwTCOo/A5DdQItPssUTVW87+oLLb3ro2u+8LRIKfoUxkZpiQfqep9Z88RfX3kaVWwWfAfjTU1s2/uSco1eGNHbaAZwPB81EVEvqGtSmJpBnR6shPHExBGqm2G+AWD6S1WZIRZm1F89zL0TqSGardLRlHhzRKpDnz0KrPRVG25IUnypHFHGng/29sPbx/0BvD9KfQI1QR8ySMiBvYSuX5GqJrLxB1IUkQVqfHkKpdX8SypWQZlduMEC/fW1bj8x0U+U+U1RR4zkoVLmYKEp9fT0PAomKEN7rPsjlFeHggmo5cuCuf/9xCjref8bpiUXOlMa2/Oov919x7Q8/1zRlQuPV+JuorGG9v73ra5dc8X8deKP4V5IW0o3b1t6T39zV/zc8QHq050Qy35RZUQ+4iYJEph8HsQVnQ6B2mhfcTAW3omKIWQ16QbNWATN3Akm+biCFxrhtYDIEo8u84GYwYkSyHLjJ+u7euhlW3nsP9PZnwGS6J3fFUuRHDnTTQB+g166sILIkaZtEOgcFlKmoSWfuVOZLR4HJemsaJVYFWvakhu4TARy3UquPf5ODSb+jhn2oBj2G6C2RXMXXHwoOJpVXzMkUIGd3/n5FJFoZuQ6BPIP5wU19vA4Mfe/FHTuM5YcvvBrnayUYcoX84+++9Lv3gGK5aSwruV75yIaNQ7n8faM5F3Ikp82OQM04+wOloSwXQmUktuAsCNbPsoHtYLCUI+laccaSoFubEdxr8SyGlJwOcc1aNQQiR2GwqAQlAT+4GXja2y5j4CiXZNOa1fDimjWQo+pkplfbtkEtQY7WvJCEQrqLO5OgnFs6Z3B6QsEq0rpLOZXyXEM80xLMjGX+ffW+bkoosRQHk1dwEAlWpkikIgeTut02lRo8Dv/+9re/bR0KTubLBbh8TJTbzfd19PxZ30GDdgpTHCe+IUVz8tlb//sbP3/0qm9c+gG8mScrYOi997FV327u6tLB+9hlT7dWx2A69+y+nr/jI+ob7oSiFTpMnxuFeC21oadDsHEBROeeCuEJi4AFo7K2mTjsMLkkKPHobB8y6vW4tFXhuFLbRkAEZ0AgfAxo+gQAX+32l6qS9HZ1wHOPPgy7t221O43ycW2Hb1O438jyuqomtQfDGzNyrXsaXwwK6NC5tu4ZgsRAruw9C6FjSZWhEay7Nnb3/0ecneVre5BXMlaaRObLuru75W64RacKLJKqHgoU5ZU4A9upPP987fhPv/MDeKNu8Flt2y8zrVU/ue62C887c/mM+VMn3Y53jkc7KPU7kcpctfD0S67O2j6BQ2ZE5IwRZaExrbv6/SefNz0e+2apE6+uC2CEEqXAykoIVE+EYNMSHqhRrap7Tiqw3fOkFn8ZvkM6bMdlaR8VoTG9FPUI7nmcc6v7GsmRHE4lSSeTsG/7Vtjx4ou8UoLdr47p9q+j6tqojBRyCRynhEToqieESKpEPJTOA7XLs393Ar8IBShXKGIZtpOoCkYo8P9uXb+dau44za9Rs8iiX3kZjs9j9LKAL0NeNGZfroLDIRHRfKkWnKkDyYHHfPycJQGm/bgY3HzG3NPS/vXJdQ2RWRObvk7gls8defWOm+5+/O6syO8hMIvB+dypjcx85/7V/8Dn9oL/hOI1AZg6rwZikxdAZM5pEJpytN0rggfcDGS7fY5RBdneNlmdBEbxXsS3bCMQuOXjkTzbYjEE9hEooR2J4K7kurb6ojC//Me8jmQ5cPd3d8H6Jx+HnZtscJtKp1GOA8mBneFtJRYyXUXgtnzgTqUNBPfQsOCm8+XUBKcrouF/Ibi3qbo39ZSm9CvPW46lMWUU0he5rq6Obzd9+vQiefBQKS9LRZGfog8fWdMQDutXIgaa7DXMI7Gh/HrjmRd+ceP6+6/9MDqfp/Dfgn2DU+nsc9//7U37wbbYTIDZ2UQZc/B39iXZ3VtbPv+eBRNvQXjV0YFitXGYffKREG6YSX2gFAMNJB/2Wm0HnJBCYO/Gz3Sn46DZFXwsu84yqZOB6UhFpoL8yIxWJRmOjhQKedj1wkbYu30br+1umKZbdc2SnUflefuKpLWrXQG6XxUX3FS/khSTxEAeHcohyOWGTysmcJNjGQ4FW+7b0fw7sGmJQz/ENAcxtRwr8k8s0VsDX04VjEU3JOKugXWwtW+1HDDAFcWES3vXrbg4FK6u/wQ+xBPsLZjXWQOt/5aHH/7Jz1d8fmK8KvZ5S3w1xA0wOvoH1iC349abEnnkYcRY3kgOdEFTtD+tfL79pDmTfjZn5pTvj5s1k9XNmIG6c8Q+OnN3oNIPP9e2QZfFT3QbDs04m3WA4oDb0sHSkF/r0/B3VeBy6FL7Ag+wnfVlnvNAbzdsX7+ec27DML15JPkM59eUGGXyLklMD/eW4JaUhAbKMRlMosbdkYGejrToMrB8CSLvpmxBpBqDCcv6dsvAUEbeb7LcvgY2TQFutdUqavNbVjDmg2xnUsRCDglLfsAURQDbCcWfetJb34r36Uv0EbY/9XwrZ4w36sbPrvh93xknHXEpLpjkOmD854Xm9p6Eun/pVJLXDu7zc1owvfDcU9m6O39zxjs+9bH3zD3zDJ6f7YJbIIqpjqSkIColMfDNbkHnag1a7p0c3E6R4IZqsPSjUHte6IKb+cDNDhzcBbTUuze9AOseewR6OzsEx0bLXEgj9eiHQrINaUgnFCgKSc04CHC78qALbhDLE5kctHekYOeWAejGIM5I4CaHMmjXTzWNkP7rOzft2azca0/D9uI5qL2h8emGhgZqaNMSbX7zO0cN/BAuDgX1RJYD/Y54dIHVd/6+dlJtJepnbIpKSdzPk9V2631PnNHbPxD4xIXnPE2at9hA4IFZg4nkilmnX/xP8DkndGOpWtRRRx2mf+QdJ9csP3bx4umTJrwdH+rZwINHJWiCeoZQHLghB1JnXTjsxsUZz4XZ1ps6f8XgDZtuW273ikYh/zkrS3JteuZ9aK13bdyAnJtq0+R5b2gGDfmsQz8MU6mn6VFO1Bxve38ZpMftnSlobU5COlWea6uFwB3hFTbQiocDf757Z8s1fYm0ap3VzlqpK8C86OfSn/OtduhKDWtyPiR6STtkAP6SOfjHP/5xDcH9E3zwU+wlfsDxz+a/v3X1zQNrb/vF5zi4mZuFJ3grq45XXL71P38q/PyPtz3Rm0rmNYNZU6eN188+5djahtqak5rq645kPFELYna4cCRgA3jyrEEFNlGRRNG12OCOILCnYSh8IlBvwC6w3Z07Vts5kPznOpKlCoXa9299AfZu3oDT1FIrOosIcEOC2K+UOFZaUUcst+oZNQnY1ZWGffsSkM6MDthUCNwhamEAp0OR0KqVLd1/TaQ9DdqTY2kovTdwh5LG1DSySI2VAOctxyoN2oPaBeChUg7YgtNNpvZMPnbKnJP1AHvIgYDPgcMr7X169Qvv+9wPrtr53O3XPIsrGnzgdk5B/GYQp1PoqFITrXFcFFa3UxUPUPbj59qe87DyyDMR2Np+7kiWMiyWFQaDocVmk3HQlRsyekeST5UANykf3fu3w861j8PQYK9DNyjnySP/ccttij52VEnQnadI5EBfHjqRX/f0ZSCLnNs8AENJ4KZaOnwcDj7/yN72y1oTPDDMe0bzdUlClpt6bShQzR2kIjTk0bksiF4bCqicULieB33WrFlj+BzL15cFl7XhiV/R+Ml//rYe79XPoTy4KUixbsVv/rHjf79y6VxcL/NPlc878zqBqPThgjjzbceUHTPmp0Beri1nNIYOWr4dQ9y7IV6ZgXhFqMSrHMUn2YQWexKeb9Q9lp9mlaQk/Cju8UuYiXSiD1q3roWW7c8jOLMK7QBvzrYDdPDQEaoul0zmYRAVkf7+LFdGyFpnDbuptQMBt5QDOfcOBbfuymSuIHAXCgXVaVR1b0N2SaJ0KMW3FV2ScOdSgNuUxzgUy6gALk+e8gvQU2Yz6qsvwqVH+IFmKduns7ln12/ZAsccvmCuvVC9CUXgVpGqyHdQFtyu5Xb4PEl8HbrWHA1pzfFgOA2BQBq6evMwhECpr42gHKbzSzZgMj4tBDZ3CTQPuIsoiQru0VASRGfX3s2we/1K1KAHuEJi82fwZP55KYm9jPA2gEDu681CP1rrDAKaDCutz6JzWlBejNEWuoaIkAND4eDm9mzhcyu37OefM6GWeFQT2WuD6C2NW2nZLQm4eSlO1qBQTqQ8SAbwkKIpI6oodNLCK+ZP9aefeNc8XWNXlAK3E55lWmrb7pbngSqjBwMzmYc3qyASVlcBrx/cnmWel0Duiya0rS3tXZ89/KxL337jbXddVjBSnWStmupjUBuPQAqB0tKZg0R6CuTgJAT4HAR3hY1QD7gV8Eq+7QG3UmGjxJ1LDXTDCw//HTY/eTekEv1C/lMsNgigiz7keetRrWnYsTUBa57tgWee6IIXN/RDC+JvaCgHFGMhiz2EX4C8aPXWkTJHUegeRIMhoXUHNu3OZL7wn82701LaE+CWlltWR3OoCoJb7XPHU5F46dKlfKwoJwwOIWoiy0gWXEiavKljautCi1bon7BM1mSvFFfEXIrAt7as5LoXd1Ksm1pDMEpSEp+zNhqrrVAByt/rRYr44KoXt9x6yee/v6OzP0lr9Uu/3bKtuzf5/z5/yVE/i4T12XU1tRCOTQA9MAm5eMT7pVAmmB/Yyrl5rDbznAcv1CRE25Y10LptHe/9TNIO4trUBUoWjeJQAi1zfw7HGIxJFrjqkS+YLlUB6ezagZ4cArtQMEQ3fuKixUsyUqFzpOzAkC4dyvDT61q7v7mpZ4D0UFNSE9WhpG64ZUheBHWcEDx1KNXX1ydzvs3q6mqTGkuVxxOVWw45cFMpC3CVd9M8jXc/cN1bDIN9QmNeq80LcxUSNHSZP9x+L+UTR7bubd6/ZM4sz6cfyjhvqtX2rJcrUQIxCsaGrr7Ejd/7+fWr/3L3w2mwzaqGD4v4B7dKN9y+vfm0E8+4csn8qVeBXo9hf809ruddKVZ+yoG7FLDJiezZuwn2bVgJmXSSO4qUmkq8ubMrC709WQ5o4s6G6TZ6aSrBGkd8xheigGDO8abm7I6wTIWKjNpyMzt5iterZJSsFvzzPdv33tA9lMkJy+1PgeUAFyF5qZx48ksEuPkgqAnhwRTYsGNjhyA9oVIW4FyhsJxGE/mjjUUjV6BFDsuHUgrctMy0UGwbV6+3tvayP956/zNXfeOyPWhzp8tt1WOUdyT5fzpOGs/jifbuvg3rn9/26Jd+es32lhaewSbTannuCp3r+885LfbJD529fNHsmWcEAtqJzvdH7pDBS1JJisGNwZWO/dC2fS30te7igKR2ydva0jySOIDTZBglmNXa9U4kEmyA5+il4C+GIZqYsMQRvFgZje3WhQwoMgMHLZ396a6d+//Zh0FK6qFYWG7pUErezfuYp2XCcnPVBHxJVLLNQbTe3LEUNeal5T4kwU2FlVshwC0fLdv54DWzqmJx4tVhUKxxSZBY0HvN3+5/99d/8Uey4tpVKz4968JzTr0SoTJNHrU8JWGU1tSOM6tbuvqeu++hZx7918MrB1Y++0IOlLwUMeYg//plFzV89qP/dXokHL4ooOmTcFnQpfwlKAn4XqQDoCT59BB0bFsDXbtf4M0O05d8+7YEtLakgYQHGaiReeNSHbH5ty0H5gWgCzKJSlpyB9zgcSRHpCbSams8p5uae9jcbxo/u+uF3dRzgBoRVqOSKoBlU8hO4z5VVVVmIpEw6uvrDaIybW1tTjRZWG8nYHmogpsKG2kdeskaOhKs8+m//QGv5+KSlISB34k0tu7Z/9Xjz//C/WDTBzZj0qTMtT/+/MnzZ089XtP0w9DOU6IU2bJBfJVaBofSe3fvbdm5dvvOJ7/+42t7UKaiBklkf4xMTPMbifPaCcfML1z5rS+ctmDG5A/gIZdZsnqOaohLgHtkSlK6JSl6mHs3rYbmF57kXRlSIVC/sIGUEq8iIgdDWGeyzAUl5G75AC2piH/eXja89aZ8kqAeANnfa1U8+rcn9ndcu71zMKPIgGqOiSfFlbrgFpKgtNp5BDdVRfNEKuU+ZJ870oLDIehYqoWNYrm24/5rJ8bjsZ24mNf/KvdpV0GOD3f9Bz/704/959lnDVBMomhjmonomcPhxM0H8IXsxQ6tyZMbtQvefkrFB887Y+G8aRPPRri8DeFaCX7lQ53wABu8243SalOXIh17t8H29U/DQE+H3exw2oCd2xPQQUlNSpSRy4ESjhLMAIqCUgbcAsSjttzMbt6B8knsFqiYqeva9mxA/8Gt67btgWKrrYKb1BIObuFUGj7rLcem6GNe7clYjuVzUseHZCnFwZ1opahXxyoqwu/i4GZFoXY5V6RrIwc8/MZffemb3/3VDVdd/de7+ySwZSulEtxi2gN6YanZvHmT4SPvOnvW6cuPnDNhfO3h4WDoeE1n0y1KZnSUGFZstZl6Ji8t3E5ps71te2HPprUI8O2oeNgN5vR0Z2H3jgTn3Lby4dIKD7gBSoIboITlBu9ysYsi5NBpkywV5LXf7RMNBvT2lGH9fVdf8v51ze1OT8TkUBJ1UKRAVS1RrTjn3MivjSTJO7gdRispoEPUhFtukgSpgR/RI97rAtiyFFlwAW5NgnvFiouDl77t7Efx5h47DCXx7k6xoOjwrGrp6P3Xjbff/9Qvrru9D/cfUiy1BDVlEWY/cdE5VcuXLlwwe+rkSePq4nMaaqsX4MOfjdvVeo6jmtgS4Fa+LzBykpTfaluQ7u+EPRufhb07NpNjZrc4W7Bgz+4h2LfbVkuk5Zb3zJRWuIS1VimI5bPq6j4s33OwlNMMMFJGNLufTSBga32Gpt3dmsrd8sTu1h48T64iUT+VBTpZr1LiAFyE4OV8gXooJq0bAVygOpbgrZ3jWG3BuwFe7wAH1ZxxevLH+eg5P43XI6qYDWO5/dq2CyiuWxfMwh503LeipWvD25NjGgvgp7YOjdLEQFCfiU5SDVhaJc7HwHmHStGPkSmJc3zn1FiJK/eG23NDfdC7cy30N2/lXXtk8hYMZTBUnsjB5hcHBCXxSXxlwA3OumJA+8ENQmmRxQ6rWXYPCxpzWpuigmponx7U79zenbplbUv7QBpfQKGQOKCWEUrwApyDVuaYYJjdoLqVVP2MLHdNTY3R39/vbE96N0qCch7AlQNfs37mX4nieeoiGqWqJ1rH03+7AD+Lf+HLtVFYbbFoVIEbzxkwj4WV4PbgUvH6hufbzLtdOUrivpP923c3//zKX1776BmLwu+ZUR/5L1RypvJc68ECrMIoYz8GaSiqyAMwasPy4jHz7BCrPN8ejVNJ1lkToNZ8L2Q4FNpSCOn/eHRX66MdA8kcAZpoiAS24sOYgloYzG6s3m+V/RKggeAmmsJryHd1dXnC8lSJmCoxkENJNeXte3roqib+4ge4vZDJRgQ5wK/RNf3iYqtdDOxSQRtnubqN78jF1ckYFFGPksugrNUeiWsD5YOZxp49ze3/+NCnvn/P2k3buCWkgqJP/lPnHLboxLmNy55f3XN2MpFvRCBrjiNpucqIrZLQ2HJ07CIqIpxPzz0W94Ix5kyrRdNYClHeEgwF/9OWzD57/+bde2T3fALUTohTRCQ9UqBQn/xyoDNUVlYaVPUMv87GwMCAQRUYCNzCclMXJKbCuV9XtEQtzD8v9G8O8IULF2qPX7fiMVxw3KtmtT3AlsvU7UYH7tEGbcRVbtu+u+X+X11324N/+MudPQgcRlxbFEvM8wc7p6khcMzEuoX14dCxuqnNx31PIFEHI6oB6WTKqKOjefupiWV5UVKCf2u6RtX5W1BxbC0wWNWXK+zY2TO4YXeX3eafpCEqyEUFYTVhiuYd/qxIgI7llslTQgrk64RaYiq0pAjYStDvdVUcFUWG5umfiFDJupPjrRHAPZLlLs4ALGW1xVLPK6c22AnucT0fgVKURNmFADcdGz/7G17YuvP2b/30j4/d/9gap56aBLMEtgQ7gWp7W1cehw04uyEWCxaOamqcXB1gExoqK+sDGpsXYmwcatENeIQmZkKDZRhBwi0/J0clYfw/jzAGtCw6qc0BpvUmC0YboglRZmztzeSaezKF1g3722Tbapb4okgqwqcVru1pt0QBtyWUEqoRxaOTFHoXbZmgX6px5YSaXBNqCTXcw/dBOSai8yhQFZPXK7ipsBLznJqIsd696tbdttVSLbBiQYex2ur0SOD2WnjV2haDW9n7iCoJ8VA8+Lotu1r+ctlXf7b6yTUbDGENwVc8n2Gp7pCMSUXImiDWgTxB3Jc2LqyHIqFQOAJmjAJOb5kzUWdWIGYWclX8B+FgX3ooM7hubwtG0nUrnbdSBY1leweoDryNfurKXAWyco7yvBzL6quBY/krCINtrSXg+SBq5MjkKRP3byAl4ftQLbfg3K9rWqIWVQd3Gs+kzoPwDRaYZaGXYrXltAS2Y21H60j6ge1ZNkq+zdjj9zz27B8/+OlvP59M5qlmMpO6OxUJYvA+TD6d93UpoWj3sjk5ENuZzWkOIqrkOUBfgRefdHtopnkQABbzoH4hKNooLbWgHXxaDXqJZX7qwOeZqFImKweTtRb9V3Kgy6pmBG6y0Mi3JbgdR5KWy/0SuF9vSslwRaUodFGaEoKV5DdTTv4byWq7q5lvW7HMZ20BvFZ9JGCrXxDnOhh0plK5f9/1n5X/vviLP24Wi3m3vEJdsPkClI6gUloBgNMuCP+xEnGVDYI6Z6iAnV+AAK9zUgRsAqj4jaUEuGS/kw7gla+G54VTHEgH2GJsCupAXNsSEUlTtN2tWm2+LYGbnEni5uq+KPVVqiXwBrHcsrAS8xpGrjS8aHqYes/q21ADZ0v4ylFybe+eme+FEMtKgXsEq11e/qOkabahubXjwX/e+9jj//PT65sRFP62xP0PzvnUC+tsyjGA0+A7E9P8QNRuizIt30gH7CC+EFSktfedg3xR5FgCXzqK8rd+J0/Vo6XFtoQD6de7HUeTEqaoiWN6Cfr6+vzbSqVE3hNLZE/JNt7fEAD3O5n8gVBYVi43DHM93qQlo83bVrk2vByVhJXh2qC8aBYk86bx9LoXtt/5v1fftOY/K1cXhAUkcFsqHaGiVNHivFUCSVhBj6WULWxRj2LUfIU8tGicqCS45SCO6QE8FSVNwbnt6jSdh2iLkYNZ7Q9HjkUPC7y2u6xWBgqowQY2tfxqiMik43z69yUcSX5shZYAvEHATYX5puXArTeNtz90/Qn1dTV3WlT9HFR6MTy4R1RJSlESOaPuA8DzkohjvNje0XfH9bfd9/R1f/t3797WzrxyDZb/U6+AmoOcKb31Cr3YAY5o4N3jZOE6hsv994o74uIF8DQQCgrwZdd7wxQPHRHb8y+I4NcgG533WW1LVCnj61DXNkWTaqUqNPjBzY8na+EotXHeMMCWxfYk3NxvKg5FQX00sGBBU/AfP/3WPzG6duqwfLsUJSkFbD47uoikl2+zzoHBxB33Pvrc7Zd88Ufdyt6sEtN+FUClHao1NFXA0CCsovp72Sc7PxFcT31EMhxzIJPhE+Bn4kUA3wvB1ymUB0qdrwAvyD5wCNQ0TSBXzscSzRd7qIYyTYlSlqz5TsP06dPJqbRkNTMhIMgKC57Q+6FaK+flFA/sqAqSqIakTZ48OYAWT0ONVH/whh9OWLpk4cN48ZOcjUtabaVheebdzl1Y3moz72klTdPsyuTy9971wBNPf/fqm7bu3t3sSHSCK0uuaCrXogY9QJHRHCAIYJcESYnuqak/SIaWkh8XpwGnGW7HRF/t0pqDHBPAaayCXKU6clp2iS2vWvSeQIDm0zSW50VdhkhrTeclKiSA7xpUSy1bu+fLSd/2aduW8nzecJZbFuYbywoOkqLIIbDq9mvmz5na+Et8hG/RSllt5i4YViVhPq4NAIoi04n/N7d39m58fvPO7Vf95c7nHnpslb9bgpIWW3UYwVUXLNkMAhR/tiWHtZRG3T2fcPVYCChAQDlvKCoUDBUKj5UWoHe2USy/33KrAPZcBxQ7l5ZvcJZR9yGidzN+PdTSa3Nzs7Ot34lU79vrOXhzIEV+mxSGAhqG6HX6nKL4bzckQr0xVlbqV3/3shlnLj/mkmg49F5kGfVyFyM7kuUiklaaKsokEqntvQOJB2+6/aG2a2+7d1dbW7d0fp0HIPVhAK9GLLeTAFdpiJKPwUEh6hxKQHBqojRJxvcnHDSrpqbG7O/vB7XgZ56h1AbxeJwNDg4yAXpNuVLnqqXVlxafFoppENOOmkJAw3Nw5n3XZuDxeG9meE4WnhNfV19fz39HerYKbKSXREX4PSHpb9GiRZJne+4nvIGttlr8jhP/3OJNogepKQB3gI5D8NMXn1996YVvO2dy04ST8D4dxahZNkWc9oPbsoPVHRgm3ptMZ1pb2nv2dff2rfr9Tf9O7G/pGtywdWeaLJ0SeKEiVRCHagAUB0BUWQ/HjvMo8jD8zpn6ufdIa1SZlnRi2jnxWGo5tbu7WwUdE+sYclz1fhVNI/AZ0Qc0CgwdPxrzFXKaxuAFs6NciY5Vqf9JRhl+EtCgWHWqAEz9w9MMAtsEr8V37h/YjqS/zcA3BbBlKWnBacDwrQS4jpZDNwwjgJyYD7h9EC1hYMmCKeElixbWLjtsVsWUiY0NQT0c1yN6Je3PzCPWCoWhRDI9sHHrzqEde9q0nq7e9O59Hcm9nZ38QEoesyyWonzweYAih9HzmRYW289B/UPRcimlif0622EgBESUDxBI0NbWxo+L084NwmUMt2O4nXMPQQE53i+GwGTKORdRFCgGmjXM2BTn4twL6pOSrp16NqMaN6IJNfWFdPbxZqEjpUoRwBUOrqEHzvbs2RNArqcjEDm48VNKXEFHqxhAqyitOlUs5k4piBdE7Jv5Q9NUJKhVMCv5FfyUwLXSqrxnCclNJhTJbYtALdUGyp6jbUQLTdI5M+lzL3OgyVqrPYXhdYPSawGBCUQX1c498017xgR+uqfUQRP1IamOqSjTJQGJ6hWI86FiyvNB6ujpqk85D2detdhvZmDLUuphSU6pg6uHyyEICl1BkAfxJhJfV7eVAAcRjpb8WcsXd9Lov/lOtM4XXSyy3GIwFP26lOZbFOCgRCMCNdEP6qHA1wVe0ddCyGo8P4ecTMFv+f2iht+l9IcvgOdeIi/mE0ghnHurfBF4EdxZToPg0aC+YALU6n0yZU8Ksl1AAjVVRvCnLcCbjI6UKqU4OD1MjZppQ8tFjia30ERT8LOro1NGVtzh5cKSq8DWBbClFbeU/Ze64SrXttQEKBmEgWJqUjQWVbDIYnPtWAx8Gh00//Z8GoFEPRTQsUzxmQcoTRGc+4T3hknAy4Q0373k1ynunbNSfA2deyG6veYz4gvBe0oQFpofF88JxDnxF58ATUU6jgqoGXj591gRxYm4CFmUh2zxE8slJtFMFwcF1dejYIFQHGRnoKZo/d8QTRHwJgkQoAVRk1ttW4OnatJykfQkewwoMGqhXmwrmjbI437ySvd1fFuqT0gDqiH0u5yyjzwlF6EDRxVo81RLHB05Ay11AcFdVEULwcZrriDgCNgGXevMmTP5dYmeCkzZapPQi03Lspz8DZqnYAm1ESIH33USeD1tiuCxDFI4aKBtZH1HmpfbInD5GPfHx+eee66naz6y1jiYvrYA5TMaKyWK3wLRzeKgJyve2dmpIWA0fDgagl5Dp0pabg0tZQDXqdSErLkmghuePi7l/pUe1GRkzyrRXaBqrQFckJB2zC1ziW6mS41LURr/PD+uAAwr0YikpfonMp1YTvMLKcELqIlpOS0y9EoV9cvGrTNZZhlhpFKmQcs3Pe14OUU2g6tybspBiSJfpV5PKYG/BodxOIzHoQkt+WQE3lScno7DTByomYc5CPZ5CN75OO0ZaBmtw2k5UPvhc8TvZuE62scM3Oc0HNMwBQcitBRFnYgUiTrPacShQZxHHfBmJaAahzjKeHFxrlQznxoAj6C1pmsIieuRfoQuai05DrFlHTB2WLlB3Ee+f5oWx3LGYn3J38kg40s8p7EyQpEPRjqTBIwwOkEEFgfkqEYQuAhkE9CaU3PKkxHsBMZpCM7pAqgE2Fk0FtOz5TTYL8MMMUwXgKYXhQMa9zmRBto/2IAej8ek4BINdGwCNb1scXFOJDZXoCMngR1GTkvnHkIaEMQvEneM0VI64FZBpgDrJRXZIkGJe+kf/OvHyqtYPDfYp4cz+tQiLWGSqlDyPjmUuIxbIeTkGgZHOE0RoWtd5mjgWKPgjUhO4jtUp+lwIu+DT0OxgkEZck4qqwiAgIgwUlIRUFJRKSVEUR78DqMprvMNn4MxVuxS0uoIPirXM4psojcvLTtDUFESltO0BEbdNHTmNASkpkTpPH0gUJialotQtSXC1hQqB5EWSj3oqrnoXKfGF4gDFeU9EPIerePbC9nNnzvCfy8cP9m9hp/XjgH7TVyKOCSIED24nJzqNxJiiRZUIfiI/9Yg0IkP00AUol5QigbfUK+M6wXVUSkHDZxPg009aKgQA6cfgi45FEScV0AZOAWRNETyXuX6xspYsR0ixeksBXICGoGuAqNzBMS4ADsHvBzUQvNIbSSY+bbkGIICaFRsKhVHkYMapT06Hgc1DcSrwQW2qsPzYQzUY2W44njwigV0UmfBBlZIWNAwgY+sqnDwJDgrCagEfAF+Z6DlIJxCsS13DqWDKCw0BzQpIKoKQs6icBjVCKvjMPpVCBgrY2W4oigNHpATyIQV5TRBgFC17NK6S+Cqg1wfUcZy4PsrY6U9oAZFbvOpIGPAHiujLhI4DqB8Ft2x6irgxSBBr1piTjMUqxxWgaxYaBXUmqJZO7o1jFnpsfIKFuaz5g7oSFtWQKkOUn92ACzA7Kz3bV9kpf2BkZerV4+VsTKqogZJCIQigOIAHtxIoVppQqUX/sETWVQDMWWCKGNlrLz6xR9y9s8raoajo4NXhlSVDmb52s4es9Zj5aAWv3UVFKKkPCdVGd86WekCxspYGStjZayMlbEyVuzy/wHMwoI+m98M/QAAAABJRU5ErkJggg==";

///-----------------------------------------
/// Componente
/**
 *
 * @componente Planet: Componente responsável por gerenciar os controles dos steps das missões
 */
function Steps(props) {
    const TypeStep = [
        marte,
        jupter,
        saturno,
        urano,
        netuno,
    ];
    const TypeStepName = [
        'Marte',
        'Júpter',
        'Saturno',
        'Urano',
        'Netuno',
    ];
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("div", { className: style$2.container, style: { ...props.style }, onClick: () => {
                if (props.status !== 'B') {
                    props.onClick();
                }
            }, children: [jsxRuntime.jsx("img", { src: TypeStep[props.step - 1], className: props.status === "A" ?
                        style$2.imgAtive
                        : props.status === "I" ?
                            style$2.imgInative
                            : style$2.imgBlocked }, void 0), jsxRuntime.jsx("div", { className: style$2.label, children: TypeStepName[props.step - 1] }, void 0), props.status === 'B' &&
                    jsxRuntime.jsx("div", { className: style$2.block, children: jsxRuntime.jsx("img", { src: lock }, void 0) }, void 0)] }, void 0) }, void 0));
}

///-----------------------------------------
/// Componente
/**
 *
 * @componente Planet: Componente responsável por gerenciar os controles dos steps das missões
 */
function MissionSteps(props) {
    const [stepLiberado, setstepLiberado] = react.useState(props.stepProblem);
    const [stepActive, setStepActive] = react.useState(props.stepActive);
    const setStep = (step) => {
        setStepActive(step);
        props.onSelected(step);
    };
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("div", { style: { display: "flex", justifyContent: 'center', width: '100%', position: 'relative', padding: 20, backgroundColor: 'white' }, children: [stepActive > 1 &&
                    jsxRuntime.jsx("span", { onClick: () => { setStep(stepActive - 1); }, className: style$2.missaoTitle, style: { position: 'absolute', top: 20, left: 20, cursor: 'pointer' }, children: `${"< Missão anterior"}` }, void 0), stepActive < stepLiberado &&
                    jsxRuntime.jsx("span", { onClick: () => { setStep(stepActive + 1); }, className: style$2.missaoTitle, style: { position: 'absolute', top: 20, right: 20, cursor: 'pointer' }, children: `${"Próxima Missão >"}` }, void 0), jsxRuntime.jsxs("div", { style: { display: "inline-flex", marginTop: 40, justifyContent: 'center' }, children: [jsxRuntime.jsx(Steps, { step: 1, status: stepLiberado >= 1 ? stepActive === 1 ? "A" : "I" : "B", onClick: () => {
                                setStep(1);
                            } }, void 0), jsxRuntime.jsx(Steps, { step: 2, status: stepLiberado >= 2 ? stepActive === 2 ? "A" : "I" : "B", onClick: () => {
                                setStep(2);
                            } }, void 0), jsxRuntime.jsx(Steps, { step: 3, status: stepLiberado >= 3 ? stepActive === 3 ? "A" : "I" : "B", onClick: () => {
                                setStep(3);
                            } }, void 0), jsxRuntime.jsx(Steps, { step: 4, status: stepLiberado >= 4 ? stepActive === 4 ? "A" : "I" : "B", onClick: () => {
                                setStep(4);
                            } }, void 0), jsxRuntime.jsx(Steps, { step: 5, status: stepLiberado >= 5 ? stepActive === 5 ? "A" : "I" : "B", onClick: () => {
                                setStep(5);
                            } }, void 0)] }, void 0)] }, void 0) }, void 0));
}

var css_248z$1 = "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=VT323&display=swap');\n\n.avatarWithInfo-module_container__Y-yUf {\n  height: 48px;\n  padding: 4px 16px 4px 4px;\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n  \n  border: 1px solid #BDBDBD;\n  border-radius: 25px;\n  background-color: #FFF;\n  font-size: 16px;\n  \n  flex-direction: row;\n  flex-wrap: nowrap;\n  font-family: 'Work Sans';\n  \n}\n\n";
var style$1 = {"container":"avatarWithInfo-module_container__Y-yUf"};
styleInject(css_248z$1);

const DesignTokens = {
    "colors": {
        "borderPrimary": "#bdbdbd",
        "borderSecondary1": "#2ca92a",
        "borderSecondary2": "#ffd600",
        "borderSecondary3": "#6a3f86",
        "borderSecondary4": "#222222",
        "borderSecondary5": "A50000",
        "linkDefaultOnfocus": "#0645ad",
        "linkDisabled": "#bdbdbd",
        "linkHover": "#0b0080",
        "linkOnfocus": "#0645ad",
        "linkPressed": "#663366",
        "messageAlert1": "#ffc200",
        "messageAlert2": "#fef0d4",
        "messageError1": "#ff0000",
        "messageError2": "#ffe5e5",
        "messageSuccess1": "#2ca92a",
        "messageSuccess2": "#d1f6d1",
        "neutralsGrey1": "#222222",
        "neutralsGrey2": "#757575",
        "neutralsGrey3": "#9c9c9c",
        "neutralsGrey4": "#bdbdbd",
        "neutralsGrey5": "#e0e0e0",
        "neutralsGrey6": "#ebebeb",
        "neutralsGrey7": "#f5f5f5",
        "neutralsGrey8": "#fafafa",
        "primary1": "#ff4d0d",
        "primary2": "#ee4c15",
        "primary3": "#d14211",
        "secondary1": "#6a3f86",
        "secondary2": "#ffd600",
        "secondary5": "#a50000",
        "shadeWhite": "#ffffff",
        "shadeBlack": "#000000",
    },
    "fonts": {
        "header1": {
            "fontFamily": "'Work Sans', 'WorkSans-Bold'",
            "fontSize": "34px",
            "letterSpacing": "-0.7px",
            "lineHeight": "100%",
            "fontWeight": 700,
            "color": "black"
        },
        "header2": {
            "fontFamily": "'Work Sans', 'WorkSans-Bold'",
            "fontSize": "20px",
            "letterSpacing": "-0.4px",
            "lineHeight": "100%",
            "fontWeight": 700,
            "color": "black"
        },
        "textMessageComponentsBodyBold": {
            "fontFamily": "'PT Sans', 'PTSans-Bold'",
            "fontSize": "16px",
            "letterSpacing": "0px",
            "lineHeight": "100%",
            "fontWeight": 700,
            "color": "black"
        },
        "textMessageComponentsBodyRegular": {
            "fontFamily": "'PT Sans', 'PTSans-Regular'",
            "fontSize": "16px",
            "letterSpacing": "0px",
            "lineHeight": "100%",
            "fontWeight": 400,
            "color": "black"
        },
        "textMessageComponentsBodySmall": {
            "fontFamily": "'PT Sans', 'PTSans-Regular'",
            "fontSize": "12px",
            "letterSpacing": "0px",
            "lineHeight": "100%",
            "fontWeight": 400,
            "color": "black"
        },
        "textMessageComponentsBodyTiny": {
            "fontFamily": "'PT Sans', 'PTSans-Regular'",
            "fontSize": "10px",
            "letterSpacing": "0px",
            "lineHeight": "100%",
            "fontWeight": 400,
            "color": "black"
        },
        "textMessageComponentsCardTitle": {
            "fontFamily": "'Work Sans', 'WorkSansRoman-Medium'",
            "fontSize": "20px",
            "letterSpacing": "0px",
            "lineHeight": "100%",
            "fontWeight": 500,
            "color": "black"
        },
        "textMessageComponentsHero": {
            "fontFamily": "'Work Sans', 'WorkSans-Bold'",
            "fontSize": "40px",
            "letterSpacing": "0.4px",
            "lineHeight": "130%",
            "fontWeight": 700,
            "color": "black"
        }
    },
    "global": {
        "shadowLevel_0": {
            "value": {
                "x": "0",
                "y": "0",
                "blur": "0",
                "spread": "0",
                "color": "#000000",
                "type": "dropShadow"
            },
            "type": "boxShadow"
        },
        "shadowLevel_1": {
            "value": {
                "x": "0",
                "y": "18",
                "blur": "40",
                "spread": "-15",
                "color": "D3D3D3",
                "type": "dropShadow"
            },
            "type": "boxShadow"
        },
        "shadowLevel_2": {
            "value": {
                "x": "0",
                "y": "25",
                "blur": "30",
                "spread": "-15",
                "color": "D3D3D3",
                "type": "dropShadow"
            },
            "type": "boxShadow"
        },
        "shadowLevel_3": {
            "value": {
                "x": "0",
                "y": "35",
                "blur": "25",
                "spread": "15",
                "color": "#cccccc",
                "type": "dropShadow"
            },
            "type": "boxShadow"
        },
        "border_width_small": {
            "value": "1px",
            "type": "borderWidth"
        },
        "border_width_medium": {
            "value": "2px",
            "type": "borderWidth"
        },
        "border-width-large": {
            "value": "3",
            "type": "borderWidth"
        },
        "border-radius-small": {
            "value": "4px",
            "type": "borderRadius"
        },
        "border-radius-medium": {
            "value": "8px",
            "type": "borderRadius"
        },
        "border-radius-large": {
            "value": "16px",
            "type": "borderRadius"
        },
        "border-radius-xlarge": {
            "value": "24px",
            "type": "borderRadius"
        },
        "button_padding": {
            "value": "16px",
            "type": "other"
        },
        "card_padding_normal": {
            "value": "24px",
            "type": "other"
        },
        "card_padding_large": {
            "value": "32px",
            "type": "other"
        }
    }
};

const FRSTTheme = {
    ...DesignTokens,
};

const AvatarImg = styled__default["default"].img `
    width: ${props => props.size || '120px'};
    height: ${props => props.size || '120px'};
    border-radius: 50%;
    object-fit: cover;

    ${({ disabled }) => disabled === true && `
        filter: grayscale(100%);
    `}
`;
const AvatarWrapper = styled__default["default"].div `
    width: ${props => props.size || '120px'};
    height: ${props => props.size || '120px'};
`;

function Avatar({ size, src, alt, className, disabled }) {
    const defaultImg = 'https://i.gyazo.com/499dda909b1ebfe0375d1efa2d5d00a8.png';
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsx(AvatarWrapper, { size: size, className: className, children: jsxRuntime.jsx(AvatarImg, { src: src || defaultImg, alt: alt, size: size, disabled: disabled }, void 0) }, void 0) }, void 0));
}

///-----------------------------------------
/// Componente
/**
 *
 * @componente
 */
function Vector(props) {
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx("svg", { width: "4", height: "4", viewBox: "0 0 4 4", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M2 4C1.46957 4 0.960859 3.78929 0.585786 3.41421C0.210713 3.03914 0 2.53043 0 2C0 1.46957 0.210713 0.960859 0.585786 0.585786C0.960859 0.210713 1.46957 0 2 0C2.53043 0 3.03914 0.210713 3.41421 0.585786C3.78929 0.960859 4 1.46957 4 2C4 2.53043 3.78929 3.03914 3.41421 3.41421C3.03914 3.78929 2.53043 4 2 4Z", fill: props.color ? props.color : "#757575" }, void 0) }, void 0) }, void 0));
}

///-----------------------------------------
/// Componente
/**
 *
 * @componente Planet: Componente responsável por gerenciar os controles dos steps das missões
 */
function AvatarWithInfo(props) {
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("div", { className: style$1.container, style: { ...props.style }, children: [jsxRuntime.jsx(Avatar, { size: '40px', src: props.fotoAvatar }, void 0), jsxRuntime.jsx("span", { style: { fontWeight: 600, marginRight: 8, marginLeft: 12 }, children: props.nomeCompleto }, void 0), " ", jsxRuntime.jsx(Vector, {}, void 0), " ", jsxRuntime.jsx("span", { style: { fontWeight: 400, marginRight: 8, marginLeft: 8 }, children: props.cargo }, void 0)] }, void 0) }, void 0));
}

const LinkButton$1 = styled__default["default"].a `
    border: none;
    text-decoration: none;
    ${({ theme }) => theme.fonts.textMessageComponentsBodBold}
    color: ${({ theme }) => theme.colors.linkDefaultOnfocus};
    cursor: pointer;
    outline: none;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
    display: flex;
    align-items: center;

    &:hover { 
        color: ${({ theme }) => theme.colors.linkHover};
    }

    &:active { 
        color: ${({ theme }) => theme.colors.linkPressed};
    }

    &:focus { 
        color: ${({ theme }) => theme.colors.linkDefaultOnfocus};
    }

    & > svg {
        margin-right: 12px;
        max-height: 16px;
        height: 100%;
        width: auto;
    }

    ${({ disabled }) => disabled && styled.css `
        pointer-events: none;
        color: ${({ theme }) => theme.colors.neutralsGrey2};
    `}
`;
const variantStyles = (variant = 'contained') => ({
    primary: styled.css `
        background-color: ${({ theme }) => theme.colors.primary1};
        color: ${({ theme }) => theme.colors.shadeWhite};

        &:hover {
            background-color: ${({ theme }) => theme.colors.primary2};
        }

        &:active {
            background-color: ${({ theme }) => theme.colorsprimary3};
        }

        &:focus {
            border: 2px solid ${({ theme }) => theme.colors.primary1}4D;
            -webkit-background-clip: padding-box;
            background-clip: padding-box;
        }

        &:disabled {
            background-color: ${({ theme }) => theme.colors.neutralsGrey2};
            cursor: not-allowed;
            pointer-events: none;
        }
    `,
    secondary: styled.css `
        background-color: transparent;
        color: ${({ theme }) => theme.colors.primary1};
        border: 1px solid ${({ theme }) => theme.colors.primary1};

        &:hover {
            color: ${({ theme }) => theme.colors.primary2};
            border: 1px solid ${({ theme }) => theme.colors.primary2};
        }

        &:active {
            color: ${({ theme }) => theme.colors.primary3};
            border: 1px solid ${({ theme }) => theme.colors.primary3};
        }

        &:focus {
            border: 2px solid ${({ theme }) => theme.colors.primary1}4D;
            -webkit-background-clip: padding-box;
            background-clip: padding-box;
        }

        &:disabled {
            color: ${({ theme }) => theme.colors.neutralsGrey2};
            border: 1px solid ${({ theme }) => theme.colors.neutralsGrey2};
            cursor: not-allowed;
            pointer-events: none;
        }
    `
}[variant]);
const Button$1 = styled__default["default"].button `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 9px 16px;
    height: 48px;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    box-shadow: none;

    & > svg {
        margin-right: 12px;
        max-height: 16px;
        height: 100%;
        width: auto;
    }

    ${({ variant }) => variantStyles(variant)}
`;

function Button({ variant, label, disabled, startIcon, handleClick }) {
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: (variant === 'link') ?
            jsxRuntime.jsxs(LinkButton$1, { disabled: disabled, onClick: handleClick, children: [startIcon, label] }, void 0)
            :
                jsxRuntime.jsxs(Button$1, { variant: variant, disabled: disabled, onClick: handleClick, children: [startIcon, label] }, void 0) }, void 0));
}

var css_248z = ".BannerProblem-module_container__iitVU {\n  padding: 32px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  margin-left: 16px;\n  flex-direction: row;\n  flex-wrap: wrap;\n  background-color: white;\n  font-family: 'Work Sans';\n  font-style: normal;\n}\n\n.BannerProblem-module_titleProblem__BeJIN{\n  font-weight: 700;\n  font-size: 18px;\n}\n\n.BannerProblem-module_created__OrSsa{\n  font-size: 12px;\n  padding-top: 20px;\n}\n\n.BannerProblem-module_description__olZ05{\n  font-style: normal;\n  font-weight: 600;\n  font-size: 32px;\n  text-align: left;\n  display: flex;\n  margin-top: 8px;\n  width: 100%;\n  color: #FF4D0D;\n}\n\n.BannerProblem-module_missaoTitle__300kZ{\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  \n  color: #0645AD;\n}\n\nh2{\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  margin-top: 16;\n  margin-bottom: 0;\n}\n\nh3{\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 21px;\n  margin: 0;\n}\n\n.BannerProblem-module_contentInput__YXpxk {\n  background-color: #F2F2F2; \n  border-width: 1px; \n  border-radius: 4px;\n  padding: 24px 16px 24px 16px;\n  border: 1px solid #BDBDBD;\n}\n\n.BannerProblem-module_contentInput__YXpxk input {\n  width: 100% !important;\n  margin: 4px;\n  padding: 16px;\n  border-radius: 8px;\n  border: 1px solid #BDBDBD;\n  background-color: white;\n}";
var style = {"container":"BannerProblem-module_container__iitVU","titleProblem":"BannerProblem-module_titleProblem__BeJIN","created":"BannerProblem-module_created__OrSsa","description":"BannerProblem-module_description__olZ05","missaoTitle":"BannerProblem-module_missaoTitle__300kZ","contentInput":"BannerProblem-module_contentInput__YXpxk"};
styleInject(css_248z);

///-----------------------------------------
/// Componente
/**
 *
 * @componente
 */
function BannerProblem(props) {
    const [Edit, setEdit] = react.useState(false);
    const [EditMission, setEditMission] = react.useState(false);
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("div", { className: style.container, style: { ...props.style }, children: [jsxRuntime.jsx("span", { className: style.titleProblem, children: "Problema" }, void 0), jsxRuntime.jsx(Button, { label: Edit ? "Salvar Alterações" : "Editar", variant: 'link', handleClick: () => {
                        setEdit(!Edit);
                    }, startIcon: jsxRuntime.jsx(EditIcon, {}, void 0) }, void 0), jsxRuntime.jsx("h1", { className: style.description, children: "Aumentar o engajamento dos alunos na plataforma" }, void 0), jsxRuntime.jsx("div", { style: { display: 'flex', justifyContent: 'space-between', position: 'relative', width: '100%', borderBottom: '1px solid #CCCCCC', paddingBottom: 32 }, children: jsxRuntime.jsxs("div", { style: { display: 'inline-flex', width: '80%' }, children: [jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx(AvatarWithInfo, { cargo: 'Estudante/Universit\u00E1rio', nomeCompleto: 'Avatar', fotoAvatar: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/07/neytiri_in_avatar_2-wide-do-we-really-need-avatar-2.jpeg' }, void 0), jsxRuntime.jsx(TextIcon, { description: 'Tecnologia da Informa\u00E7\u00E3o', svg: jsxRuntime.jsx(Brain, {}, void 0) }, void 0), jsxRuntime.jsx(TextIcon, { description: 'robertolima@empresa.com.br', svg: jsxRuntime.jsx(Mail, {}, void 0) }, void 0), Edit ?
                                        jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("div", { style: { marginTop: 12, backgroundColor: '#F2F2F2', borderWidth: 1, borderRadius: 4, padding: '24px 16px 24px 16px', border: '1px solid #BDBDBD' }, children: [jsxRuntime.jsx("h3", { style: { marginBottom: 12, textAlign: 'left', width: '100%', fontSize: 16 }, children: "Deseja vincular este novo problema a uma Trilha de Aprendizagem?" }, void 0), jsxRuntime.jsx(Select__default$1["default"], { id: "select", options: [], placeholder: 'Selecione uma trilha', onChange: () => { } }, void 0)] }, void 0) }, void 0)
                                        :
                                            jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx(TextIcon, { description: 'Ainda n\u00E3o est\u00E1 vinculado a uma trilha', svg: jsxRuntime.jsx(WithoutTrail, {}, void 0) }, void 0) }, void 0), jsxRuntime.jsx("div", { style: { marginTop: 16, marginBottom: 16 }, children: Edit ?
                                            jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("div", { className: style.contentInput, children: [jsxRuntime.jsx("h3", { style: { marginBottom: 12, textAlign: 'left', width: '100%', fontSize: 16 }, children: "Busque e selecione at\u00E9 tr\u00EAs palavras-chave:" }, void 0), jsxRuntime.jsx("input", { placeholder: 'Ex.: Customer Success' }, void 0), jsxRuntime.jsx("input", { placeholder: 'Ex.: Experi\u00EAncia do usu\u00E1rio' }, void 0), jsxRuntime.jsx("input", { placeholder: 'Ex.: CSAT' }, void 0)] }, void 0) }, void 0)
                                            :
                                                jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(Tag, { title: 'Customer Success', color: "#222", style: { marginRight: 8, marginTop: 8 }, selected: false, inverted: false }, void 0), jsxRuntime.jsx(Tag, { title: 'Experi\u00EAncia do usu\u00E1rio', color: "#222", style: { marginRight: 8, marginTop: 8 }, selected: false, inverted: false }, void 0), jsxRuntime.jsx(Tag, { title: 'CSAT', color: "#222", style: { marginRight: 8, marginTop: 8 }, selected: false, inverted: false }, void 0)] }, void 0) }, void 0), jsxRuntime.jsx(MessageBox, { texto: 'Problema aprovado - 30 de Abr. 2022', tipoVisualizacao: 1, style: { marginBottom: 16 } }, void 0), jsxRuntime.jsx("span", { className: style.created, children: "Criado em 20 de abr. 2022 - Atualizado em 04 de mai. 2022" }, void 0)] }, void 0), jsxRuntime.jsxs("div", { style: { position: 'absolute', right: 0, flexFlow: 'column', justifyContent: 'flex-end', width: '20%' }, children: [jsxRuntime.jsx(Rating, { titulo: 'Impacto', descricaoAvaliacao: '\u00D3timo', qtdeAvaliacao: 19, nota: 4.6, tipoVisualizacao: 1 }, void 0), jsxRuntime.jsx(Rating, { titulo: 'Relev\u00E2ncia', descricaoAvaliacao: 'Bom', qtdeAvaliacao: 21, nota: 4.8, tipoVisualizacao: 1 }, void 0), jsxRuntime.jsx(RatingCurtidas, { titulo: 'Curtidas', qtdeCurtidas: 19, tipoBotao: 2 }, void 0)] }, void 0)] }, void 0) }, void 0), jsxRuntime.jsx(MissionSteps, { stepProblem: 3, stepActive: 1, onSelected: (step) => {
                        alert(`Step Selecionado ${step}`);
                    } }, void 0), jsxRuntime.jsxs("div", { style: { marginTop: 18, width: '100%', borderRadius: 8, border: '1px solid #BDBDBD', padding: 16, paddingLeft: 32, paddingRight: 32 }, children: [jsxRuntime.jsx("div", { style: { float: 'right', marginBottom: 30 }, children: jsxRuntime.jsx(Button, { label: EditMission ? "Salvar Alterações" : "Editar", variant: 'link', handleClick: () => {
                                    setEditMission(!EditMission);
                                }, startIcon: jsxRuntime.jsx(EditIcon, {}, void 0) }, void 0) }, void 0), jsxRuntime.jsx("h2", { style: { fontSize: 24 }, children: "Miss\u00E3o 1: Marte - Defini\u00E7\u00E3o do Problema" }, void 0), jsxRuntime.jsx("h2", { children: "Indicador:" }, void 0), jsxRuntime.jsx("h3", { children: "Tempo de uso da plataforma" }, void 0), jsxRuntime.jsx("h2", { children: "Situa\u00E7\u00E3o atual do indicador:" }, void 0), jsxRuntime.jsx("h3", { children: "No \u00FAltimo quarter (Q1 - 2022) os alunos usaram a plataforma em m\u00E9dia 8 horas." }, void 0), jsxRuntime.jsx("h2", { children: "Qual \u00E9 a sua meta e o prazo final para alcan\u00E7\u00E1-la?" }, void 0), jsxRuntime.jsx("h3", { children: "No pr\u00F3ximo quarter (Q2 - 2022) os alunos usar\u00E3o a plataforma em m\u00E9dia 12 horas." }, void 0), jsxRuntime.jsx("h2", { children: "CERTEZAS: O que eu j\u00E1 sei sobre esse problema?" }, void 0), jsxRuntime.jsx("h3", { children: "A presen\u00E7a, comprometimento e engajamento dos alunos na plataforma \u00E9 algo fundamental para que os mesmos tenham um bom aproveitamento da trilha e assim, incrementando suas skills." }, void 0), jsxRuntime.jsx("h2", { children: "D\u00DAVIDAS: O que eu preciso descobrir sobre esse problema?" }, void 0), jsxRuntime.jsx("h3", { children: "O tempo ideal de engajamento \u00E9 de 12 horas. \u00C9 necess\u00E1rio investigar quais fatores influenciaram negativamente essa quest\u00E3o e como podemos reverter e alcan\u00E7ar um melhor resultado." }, void 0)] }, void 0)] }, void 0) }, void 0));
}

const placeholderStyle = (color) => styled.css `
    ::-webkit-input-placeholder {
        color: ${({ theme }) => theme.colors[color]};
    }

    ::-moz-placeholder {
        color: ${({ theme }) => theme.colors[color]};
    }

    :-ms-input-placeholder
        color: ${({ theme }) => theme.colors[color]};
    }

    :-moz-placeholder
        color: ${({ theme }) => theme.colors[color]};
    }
`;
const TextFieldContainer = styled__default["default"].div `
    width: ${props => props.theme.width || '100%'};
    height: 48px;
    background: ${({ theme }) => theme.colors.neutralsGrey6};
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey5};
    box-sizing: border-box;
    border-radius: 8px;
    outline: none;
    transition: all 0.2s linear;
    padding-right: 16px;
    margin: 8px 0;
    display: flex;
    align-items: center;

    ${props => props.theme.multiline && styled.css `
        width: ${props => props.theme.width || '100%'};
        height: ${props => props.theme.height || '100%'};
        min-height: ${props => props.theme.height || '100%'};
        display: block;
        padding: 0;
        overflow: hidden;
    `}


    ${props => props.theme.hovered && styled.css `
        border: 1px solid ${({ theme }) => theme.colors.linkDefaultOnfocus};
    `}

    ${props => props.theme.focused && styled.css `
        box-shadow: 0px 0px 0px 1px rgba(6, 69, 173, 0.4);
        border: 1px solid ${({ theme }) => theme.colors.linkDefaultOnfocus};
    `}

    ${props => props.theme.disabled && styled.css `
        background: ${({ theme }) => theme.colors.neutralsGrey7};
        border: 1px solid ${({ theme }) => theme.colors.neutralsGrey5};
    `}

    ${props => props.theme.error && styled.css `
        box-shadow: none;
        border: 1px solid ${({ theme }) => theme.colors.messageError1};
        color: ${({ theme }) => theme.colors.neutralsGrey3};
    `}

    span { 
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
const TextField$1 = styled__default["default"].input.attrs(({ type, as }) => ({
    type: type || 'text',
    as: as || 'input'
})) `
    width: 100%;
    height: 100%;
    padding: 15px 16px;
    border: none;
    background-color: transparent;

    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: ${({ theme }) => theme.colors.neutralsGrey1};

    ${placeholderStyle('neutralsGrey3')}


    ${({ as }) => as === 'textarea' && styled.css `]
        height: ${props => props.theme.height || '100%'};
        resize: none;
        overflow: auto;
        min-height: 100%;
    `}
    
    ${props => props.theme.disabled && styled.css `
        color: ${({ theme }) => theme.colors.neutralsGrey4};
        ${placeholderStyle('neutralsGrey4')}
    `}

`;
const Label = styled__default["default"].label `
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: ${({ theme }) => theme.colors.neutralsGrey1};

    ${props => props.theme.hovered && styled.css `
        color: ${({ theme }) => theme.colors.linkOnfocus};
    `}

    ${props => props.theme.focused && styled.css `
        color: ${({ theme }) => theme.colors.linkOnfocus};
    `}

    ${props => props.theme.disabled && styled.css `
        color: ${({ theme }) => theme.colors.neutralsGrey3};
    `}

    ${props => props.theme.error && styled.css `
        color: ${({ theme }) => theme.colors.messageError1};
    `}
`;
const HelperText$1 = styled__default["default"].span `
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: ${({ theme }) => theme.colors.neutralsGrey3};

    ${props => props.theme.error && styled.css `
        color: ${({ theme }) => theme.colors.messageError1};
    `}
`;
const InputIconButton = styled__default["default"].button `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
    margin-right: -10px;
    background-color: transparent;
    border: none;
    border-radius: 50%;
    outline: none;
    transition: all 0.1s linear;
    cursor: pointer;
`;
const StartIcon = styled__default["default"].span `
    margin-left: 16px;
`;

function TextField(props) {
    const [focus, setFocus] = react.useState(false);
    const [hover, setHover] = react.useState(false);
    const [inputType, setInputType] = react.useState(props.type);
    const { t } = reactI18next.useTranslation();
    const handleTogglePasswordVisibility = () => {
        if (inputType === 'password')
            return setInputType('text');
        setInputType('password');
    };
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: { ...FRSTTheme, focused: focus, disabled: props.disabled, hovered: hover, error: props.error, multiline: props.multiline, width: props.width, height: props.height }, children: jsxRuntime.jsxs("div", { style: props.style, className: props.className, children: [jsxRuntime.jsx(Label, { htmlFor: props.id, children: props.label }, void 0), jsxRuntime.jsxs(TextFieldContainer, { onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), children: [props.startIcon && !props.multiline && (jsxRuntime.jsx(StartIcon, { children: props.startIcon }, void 0)), jsxRuntime.jsx(TextField$1, { onFocus: () => setFocus(true), onBlur: () => setFocus(false), id: props.id, placeholder: props.placeholder || `${t('globals.typeHere')}...`, as: props.multiline ? 'textarea' : 'input', type: inputType, value: props.value, disabled: props.disabled, onChange: props.onChange, name: props.name, required: props.required }, void 0), props.endIcon && !props.multiline && ((props.type === 'password')
                            ? jsxRuntime.jsx(InputIconButton, { onClick: handleTogglePasswordVisibility, children: props.endIcon }, void 0)
                            : jsxRuntime.jsx("span", { children: props.endIcon }, void 0))] }, void 0), props.helperText && jsxRuntime.jsx(HelperText$1, { children: props.helperText }, void 0)] }, void 0) }, void 0));
}

function Textarea(props) {
    return jsxRuntime.jsx(TextField, { ...props, multiline: true }, void 0);
}

const InputWrapper = styled__default["default"].div `
    display: flex;
    align-items:flex-end;
    width: 100%;
    min-height: 48px;
    background-color: ${({ theme }) => theme.colors.shadeWhite};

    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey4};
    border-radius: 24px;

    transition: all 0.2s ease-in-out;

    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.shadeBlack};
    }

    ${({ focus, theme }) => focus &&
    `border: 1px solid` + theme.colors.primary1 + " !important;"}
`;
const InputText = styled__default["default"].textarea `
    display: flex;
    align-items: center;

    width: 100%;
    height: ${({ height }) => height || '20px'};
    outline: 0;
    
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.02em;
    
    overflow: hidden;
    resize: none;

    padding: 0;
    margin: 14px;
    border: none;
    wrap: off;
`;
const SmileIcon = styled__default["default"].div `
    display: flex;
    justify-content: center;
    align-items: center;

    width: 40px;
    height: 40px;
    
    min-width: 40px;
    border-radius: 50%;
    background-color: transparent;
    margin: 4px;
    &:hover {
        background-color: ${({ theme }) => theme.colors.neutralsGrey6};
    }
    cursor: pointer;
    transition: all 0.2s ease-in-out;
`;
const HelperText = styled__default["default"].span `
    display: flex;
    position: absolute;
    align-items: center;

    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

    letter-spacing: -0.02em;

    color: ${({ theme }) => theme.colors.neutralsGrey2};

    margin-top: 8px;
    margin-left: 13px;
`;
const EmojiWindow = styled__default["default"].div `
    width: 310px;
    height: 432px;
    overflow: hidden;
    display:${({ visible }) => visible ? 'flex' : 'none'};
    justify-content: center;
    top: ${({ positionEmojiWindow }) => positionEmojiWindow};
    right: 25px;
    background-color:  ${({ theme }) => theme.colors.shadeWhite};
    border: 1px solid  ${({ theme }) => theme.colors.neutralsGrey4};
    position: absolute;
`;
// transform: scale(0.845);

function EmojiPicker(props) {
    const ref = react.useRef();
    react.useEffect(() => {
        let title = 'FRST FALCONI';
        let emojiSize = props.emojiSize;
        let perLine = props.emojiPerLine;
        let SheetSize = props.sheetSize;
        let i18n = choseLanguage(props.language);
        // let filteredEmoji = excludeEmojiCode();
        new emojiMart.Picker({ ...props, title, data: data__default["default"], ref, i18n, emojiSize, perLine, SheetSize });
    }, [props.language]);
    return jsxRuntime.jsx("div", { ref: ref }, void 0);
}
function choseLanguage(props) {
    switch (props) {
        case 'de':
            return de__namespace;
        case 'en':
            return en__namespace;
        case 'fr':
            return fr__namespace;
        case 'it':
            return it__namespace;
        case 'pl':
            return pl__namespace;
        case 'pt':
            return pt__namespace;
        case 'ru':
            return ru__namespace;
        case 'zh':
            return zh__namespace;
        default:
            return en__namespace;
    }
}

function randID$2() {
    return Math.random()
        .toString(36)
        .substr(2, 9);
}

function InputComment({ placeholder, value, onChange, remain, limit, hasEmoji, showCharacterCounter, IDInput, styles, disabled, emojiWindowlanguage }) {
    const [focus, setFocus] = react.useState(false);
    // Emoji Window States
    const [isVisibleEmojiWindow, setIsVisibleEmojiWindow] = react.useState(false);
    const [actionAreaEmojiButton, setActionAreaEmojiButton] = react.useState(false);
    const [colorEmojiButton, setColorEmojiButton] = react.useState('');
    const [heightPositionWindowEmoji, setHeightPositionWindowEmoji] = react.useState('');
    const [newEmojiIncluded, setNewEmojiIncluded] = react.useState(false);
    const [lastPositionCursorTextTextArea, setLastPositionCursorTextTextArea] = react.useState({});
    const [lenghtLastEmoji, setLenghtLastEmoji] = react.useState();
    // TextArea states
    const [stringValueTextArea, setStringValueTextArea] = react.useState(value);
    // IDs
    const [iDInputComment, setIDInputComment] = react.useState(IDInput ? IDInput : `InputComment-${randID$2()}`);
    const [iDEmojiButton, setIDEmojiButton] = react.useState(IDInput ? IDInput : `IDEmojiButton-${randID$2()}`);
    // Emoji window actions
    react.useEffect(() => {
        (isVisibleEmojiWindow) ? configsWhenOpenWindowEmoji() : configsWhenCloseWindowEmoji();
    }, [isVisibleEmojiWindow]);
    react.useEffect(() => {
        {
            newEmojiIncluded && repositionCursorAfterNewEmojiInTextArea();
        }
        resizeTextArea();
    }, [stringValueTextArea]);
    function inputInChanging(e) {
        setStringValueTextArea(e.target.value);
        onChange(e);
    }
    const onEmojiClick = (emojiObject) => {
        let textAreaRef = document.getElementById(iDInputComment);
        // @ts-ignore
        if (textAreaRef.innerHTML.length < limit || textAreaRef.selectionStart != textAreaRef.selectionEnd) {
            let currentPositonCursorTextArea = getAndSavePositionsInTextArea(textAreaRef, emojiObject.native);
            let newStringWithEmoji = handleStringToIncluedEmoji(currentPositonCursorTextArea, emojiObject.native, textAreaRef.innerHTML);
            setNewEmojiIncluded(true);
            setStringValueTextArea(newStringWithEmoji);
        }
    };
    const verifyClick = () => {
        if (!actionAreaEmojiButton)
            setIsVisibleEmojiWindow(false);
    };
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsxs("div", { style: { ...styles }, onClick: verifyClick, children: [jsxRuntime.jsxs(InputWrapper, { focus: focus, children: [jsxRuntime.jsx(InputText, { id: iDInputComment, onFocus: () => setFocus(true), onBlur: () => setFocus(false), onChange: inputInChanging, value: stringValueTextArea, placeholder: placeholder, maxLength: limit, disabled: disabled }, void 0), hasEmoji &&
                            jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(EmojiWindow, { visible: isVisibleEmojiWindow, positionEmojiWindow: heightPositionWindowEmoji, onMouseOver: () => setActionAreaEmojiButton(true), onMouseOut: () => setActionAreaEmojiButton(false), children: jsxRuntime.jsx(EmojiPicker, { language: emojiWindowlanguage, onEmojiSelect: onEmojiClick, emojiPerLine: 8, sheetSize: 8 }, void 0) }, void 0), jsxRuntime.jsx(SmileIcon, { id: iDEmojiButton, onMouseOver: () => setActionAreaEmojiButton(true), onMouseOut: () => setActionAreaEmojiButton(false), onClick: () => setIsVisibleEmojiWindow(!isVisibleEmojiWindow), children: jsxRuntime.jsx(SmileOutlined, { fill: colorEmojiButton }, void 0) }, void 0)] }, void 0)] }, void 0), showCharacterCounter &&
                    jsxRuntime.jsxs(HelperText, { children: [limit - remain, "/", limit] }, void 0)] }, void 0) }, void 0));
    function resizeTextArea() {
        let tx = document.getElementById(iDInputComment);
        tx.style.height = '20px';
        tx.style.height = tx.scrollHeight + 'px';
        setHeightPositionWindowEmoji(tx.scrollHeight - 440 + 'px');
    }
    function configsWhenOpenWindowEmoji() {
        setColorEmojiButton(FRSTTheme['colors'].primary1);
        // document.body.addEventListener("click", (e: any) => verifyClick(), true);
        // document.getElementById(iDEmojiButton).removeEventListener("click", (e: any) => setIsVisibleEmojiWindow(!isVisibleEmojiWindow), false);
    }
    function configsWhenCloseWindowEmoji() {
        setColorEmojiButton(FRSTTheme['colors'].neutralsGrey2);
        // document.body.removeEventListener("click", (e: any) => verifyClick(), true);
        // document.getElementById(iDEmojiButton).addEventListener("click", (e: any) => setIsVisibleEmojiWindow(!isVisibleEmojiWindow), false);
    }
    function getAndSavePositionsInTextArea(textAreaRef, emoji) {
        let positionsCursorText = [textAreaRef.selectionStart, textAreaRef.selectionEnd];
        setLenghtLastEmoji(emoji.length);
        setLastPositionCursorTextTextArea(positionsCursorText);
        return positionsCursorText;
    }
    function handleStringToIncluedEmoji(pos, emojiObject, stringValueTextArea) {
        if (stringValueTextArea) {
            if (pos[0] == pos[1]) {
                return stringValueTextArea.substr(0, pos[0]) + emojiObject + stringValueTextArea.substr(pos[1]);
            }
            else if (pos[0] < pos[1]) {
                return stringValueTextArea.substr(0, pos[0]) + emojiObject + stringValueTextArea.substr(pos[1], stringValueTextArea.length);
            }
            else {
                return stringValueTextArea + emojiObject;
            }
        }
        else {
            return emojiObject;
        }
    }
    function repositionCursorAfterNewEmojiInTextArea() {
        let tx = document.getElementById(iDInputComment);
        if (lastPositionCursorTextTextArea[1] != lastPositionCursorTextTextArea[0]) { // Cursor in multiple chars selected
            // @ts-ignore
            tx.selectionEnd = lastPositionCursorTextTextArea[0] + lenghtLastEmoji;
        }
        else { // Cursor text in specific point
            // @ts-ignore
            tx.selectionEnd = lastPositionCursorTextTextArea[1] + lenghtLastEmoji;
        }
        setNewEmojiIncluded(false);
    }
}

const HeaderWrapper$1 = styled__default["default"].div `
    display: flex;
    margin-top: 14px;
    margin-left: 14px;
    margin-right: 14px;

    min-height: 40px;
    flex-direction: row;
    max-width: 100%;
`;
const IdentificationWrapper = styled__default["default"].div `
    flex: 4;
`;
const NameWrapper = styled__default["default"].div `
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items:center
`;
const Name = styled__default["default"].div `
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.primary1};
`;
const DividerDot = styled__default["default"].div `
    display: flex; 
    margin-left: 8px;
    margin-right: 8px;
`;
const EyeOffIcon = styled__default["default"].div `
display: flex; 
min-width: 14.67px;
`;
const IsMe = styled__default["default"].div `
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.neutralsGrey2};

    display: flex;
    align-items: center;
    letter-spacing: -0.02em;
`;
const CommentPrivate = styled__default["default"].div `
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.neutralsGrey2};

    display: flex;
    align-items: center;
    letter-spacing: -0.02em;
    margin-left: 8px;
`;
const Position = styled__default["default"].div `
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: ${({ theme }) => theme.colors.neutralsGrey2};
`;
const Date = styled__default["default"].div `
    display: flex;
    justify-content: flex-end;
    font-family: Work Sans;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    margin-right: 11px;
    color: ${({ theme }) => theme.colors.neutralsGrey2};
`;
const ButtonMore$1 = styled__default["default"].div `
    display: flex;
    cursor: pointer;
    height: 14px;
    align-items: center;
    z-index: 10;
`;
const Dropdown = styled__default["default"].div `
    width: auto;
    height: auto;
`;
const DropdownWrapper = styled__default["default"].div `
    display: flex;
    flex-direction: column;
    visibility: ${(props) => props.isVisible ? 'visible' : 'hidden'};
    opacity:${(props) => props.isVisible ? '1' : '0'};
    position: absolute;
    width: 210px;
    background-color: gray;   
    margin-top: 5px;
    margin-left: -185px;
    transition:visibility 0.3s ease-in-out,opacity 0.3s ease-in-out;

    background: ${({ theme }) => theme.colors.shadeWhite};

    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey4};

    box-shadow: 0px 18px 40px -15px #D3D3D3;
    border-radius: 8px 0px 8px 8px;
    overflow: hidden;
    z-index: 9;
`;
const ItemDrop = styled__default["default"].div `
    display: flex;
    padding: 11px;
    padding-left: 16px;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    border-bottom: ${(props) => props.isLastItem ? 'transparent' : '1px solid #EBEBEB'};
    
    &:hover { 
        background-color: ${({ theme }) => theme.colors.neutralsGrey5};
    }
    &:active { 
        background-color: ${({ theme }) => theme.colors.primary1 + '19'};
    }
    cursor: pointer;
`;
const CommentaryContent = styled__default["default"].div `
    font-family: 'Work Sans';
    margin-top: 12px;
    margin-left: 14px;
    margin-right: 14px;
    margin-top: 12px;

    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    
    letter-spacing: -0.02em;
    
    white-space: pre-wrap
`;
const CommentaryEditingContent = styled__default["default"].div `
    font-family: 'Work Sans';
    margin-top: 12px;
    margin-left: 14px;
    margin-right: 14px;
    margin-top: 12px;

    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;

    letter-spacing: -0.02em;

    white-space: pre-wrap
`;
const IterationsWrapper = styled__default["default"].div `
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 14px;
`;
const IterationsButtonsWrapper = styled__default["default"].div `
    display: flex;
    flex-direction: row;
    width: fit-content;
`;
const LikesStatistics = styled__default["default"].div `
    display:flex;
    flex-direction: row;
`;
const TextTotalLikes = styled__default["default"].span `
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    margin-left: 6px;
`;
const FooterEditingWrapper = styled__default["default"].div `
    display: flex;
    align-self: flex-end;
    margin: 14px;
    width: 296px;
    justify-content: space-between;
`;
const LinkButton = styled__default["default"].a `
    border: none;
    text-decoration: none;
    ${({ theme }) => theme.fonts.textMessageComponentsBodBold};
    font-size: 12px;
    color: ${({ theme }) => theme.colors.linkDefaultOnfocus};
    cursor: pointer;
    outline: none;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
    display: flex;
    align-items: center;
    margin-left: 12px;
    margin-right: 12px;

    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.02em;

    &:hover { 
        color: ${({ theme }) => theme.colors.linkHover};
    }

    &:active { 
        color: ${({ theme }) => theme.colors.black};
    }

    &:focus { 
        color: ${({ theme }) => theme.colors.linkDefaultOnfocus};
    }
`;
const OptionsWrapper = styled__default["default"].div `
    display: flex;
    flex-direction: row;
`;
/*border: 1px solid ${({ theme }) => theme.colors.neutralsGrey4};*/

const SpeechBubbleWrapper = styled__default["default"].div `
    width: ${props => props.width ? props.width : "100%"};
    height: ${props => props.height ? props.height : "auto"};
    min-height: 20px
`;
const SpeechBubble$1 = styled__default["default"].div `
    width: auto;
    height: inherit;
    min-height: 20px;
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    border: 1px solid  ${({ highlight, theme }) => highlight ? theme.colors.primary1 : theme.colors.neutralsGrey4};

    border-radius: ${(props) => getStyleValuesBorder(props)};   
    margin-left: 12px;
`;
const getStyleValuesBorder = (props) => {
    switch (props.flap) {
        case 'left-top':
            return '0 4px 4px 4px;';
        case 'left-bottom':
            return '4px 4px 4px 0;';
        default:
            return '0 4px 4px 4px;';
    }
};
const Flap = styled__default["default"].div `
    position: absolute;
    width: 0px;
    height: inherit;
    min-height: 20px;
    background-color: black;
    z-index: 2;

    ${(props) => getStylePositionFlap(props)};

`;
const getStylePositionFlap = (props) => {
    switch (props.flap) {
        case 'left-top':
            return StyleFlapLeftTop(props);
        case 'left-bottom':
            return StyleFlapLeftBottom(props);
        default:
            return StyleFlapLeftTop(props);
    }
};
const StyleFlapLeftTop = (props) => {
    let fill = props.theme.colors.shadeWhite;
    let border = props.highlight ? props.theme.colors.primary1 : props.theme.colors.neutralsGrey4;
    return (`&:before {
            content: "";
            position: relative;
            top: 12px;
            left: 4px;
            border-top: 12px solid ${border};
            border-bottom: 0px solid transparent;
            border-left: 8px solid transparent; 
            border-right: 0px solid transparent;
        }

        &:after {
            content: "";
            position: relative;
            top: 13px;
            left: -2px;
            border-top: 12px solid ${fill};
            border-bottom: 0px solid transparent;
            border-left: 8px solid transparent;
            border-right: 0px solid transparent;
        }`);
};
const StyleFlapLeftBottom = (props) => {
    let fill = props.theme.colors.shadeWhite;
    let border = props.highlight ? props.theme.colors.primary1 : props.theme.colors.neutralsGrey4;
    return (`&:before {
            content: "";
            position: absolute;
            bottom: 0px;
            left: 4px;
            border-top: 0px solid transparent;
            border-bottom: 12px solid ${border};
            border-left: 8px solid transparent; 
            border-right: 0px solid transparent;
        }

        &:after {
            content: "";
            position: absolute;
            bottom: 1px;
            left: 6px;
            border-top: 0px solid transparent;
            border-bottom: 12px solid ${fill};
            border-left: 8px solid transparent;
            border-right: 0px solid transparent;
        }`);
};

function SpeechBubble(props) {
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsxs(SpeechBubbleWrapper, { className: props.className, height: props.height, width: props.width, children: [jsxRuntime.jsx(Flap, { highlight: props.highlight, flap: props.flap }, void 0), jsxRuntime.jsx(SpeechBubble$1, { highlight: props.highlight, flap: props.flap, children: props.children }, void 0)] }, void 0) }, void 0));
}

function buildStringWithLinkHTML({ value }) {
    let text = value;
    var urlRegex = /(\b(https?|ftp|file):\/\/([-A-Z0-9+&@#%?=~_|!:,.;]*)([-A-Z0-9+&@#%?\/=~_|!:,.;]*)[-A-Z0-9+&@#\/%=~_|])/ig;
    return text = text.replace(urlRegex, function (url) {
        return `<a href="${url}" target="_blank" style="color: #00f; text-decoration: underline">${url}</a>`;
    });
}
function randID$1() {
    return Math.random()
        .toString(36)
        .substr(2, 9);
}

function CommentaryBox({ name, className, styles, position, value, date, actionLike, actionAnswer, isMe, isAuthor, actionDeleteComment, actionEditComment, actionMakePrivate, actionUpdateValue, detectLinks, idTextComment, wasEdited, hasAnswer, hasDropdown, isLiked, totalLikes, textYou, textPrivateComment, textEdited, textLiked, textUnliked, textAnswer, textMakePrivate, textMakePublic, textEditComment, textDeleteComment, isPrivateMe, isPrivateAuthor }) {
    const [isOpenDrop, setIsOpenDrop] = react.useState(false);
    const [onEditing, setOnEditing] = react.useState(false);
    const [enableSaveEdit, setEnableSaveEdit] = react.useState(false);
    const [actionArea, setActionArea] = react.useState(false);
    const [iDCommentPosted, setIDCommentPosted] = react.useState(idTextComment ? idTextComment : `IDCommentPosted-${randID$1()}`);
    const [iDCommentInEditing, setIDCommentInEditing] = react.useState(idTextComment ? `idBoxCommentEditing-${idTextComment}` : `idBoxCommentEditing-${randID$1()}`);
    react.useState(idTextComment ? `iDButtonMore-${idTextComment}` : `iDButtonMore-${randID$1()}`);
    react.useEffect(() => {
        (!onEditing) &&
            (document.getElementById(iDCommentPosted)) &&
            (detectLinks ?
                document.getElementById(iDCommentPosted).innerHTML = buildStringWithLinkHTML({ value }) :
                document.getElementById(iDCommentPosted).innerHTML = value);
    }, [detectLinks, onEditing]);
    react.useEffect(() => {
        (onEditing) &&
            (document.getElementById(iDCommentInEditing)) &&
            (document.getElementById(iDCommentInEditing).addEventListener("keyup", changedInputComment, false));
        (!onEditing) &&
            (document.getElementById(iDCommentInEditing)) &&
            (document.getElementById(iDCommentInEditing).removeEventListener("keyup", changedInputComment, false));
        function changedInputComment() {
            let textInEditing = document.getElementById(iDCommentInEditing).innerText;
            setEnableSaveEdit(textInEditing != value);
        }
    }, [onEditing]);
    function editingComment() {
        setOnEditing(true);
        actionEditComment();
    }
    function cancelEditComment() {
        setOnEditing(false);
        setEnableSaveEdit(false);
    }
    function saveEditComment() {
        let finalText = '';
        (document.getElementById(iDCommentInEditing)) &&
            (finalText = document.getElementById(iDCommentInEditing).innerText);
        setOnEditing(false);
        setEnableSaveEdit(false);
        actionUpdateValue(finalText);
    }
    const verifyClick = () => {
        if (!actionArea) {
            setIsOpenDrop(false);
        }
    };
    const getColorIconMore = () => {
        let finalColor = '#757575'; // Default
        (actionArea) && (finalColor = "#222222"); // Hover
        (isOpenDrop) && (finalColor = '#ff4d0d'); // Selected
        return finalColor;
    };
    return (jsxRuntime.jsx("div", { style: { width: 'auto', ...styles }, onClick: () => verifyClick(), children: jsxRuntime.jsxs(SpeechBubble, { className: className, highlight: onEditing, children: [jsxRuntime.jsxs(HeaderWrapper$1, { children: [jsxRuntime.jsxs(IdentificationWrapper, { children: [jsxRuntime.jsxs(NameWrapper, { children: [jsxRuntime.jsxs(Name, { children: [" ", name, " "] }, void 0), isMe &&
                                            jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(DividerDot, { children: jsxRuntime.jsx(Dot, { fill: '#757575' }, void 0) }, void 0), jsxRuntime.jsxs(IsMe, { children: [" ", textYou, " "] }, void 0)] }, void 0), (isPrivateAuthor || isPrivateMe) &&
                                            jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(DividerDot, { children: jsxRuntime.jsx(Dot, { fill: '#757575' }, void 0) }, void 0), jsxRuntime.jsx(EyeOffIcon, { children: jsxRuntime.jsx(EyeOff, { fill: '#757575' }, void 0) }, void 0), jsxRuntime.jsx(CommentPrivate, { children: textPrivateComment }, void 0)] }, void 0)] }, void 0), jsxRuntime.jsxs(Position, { children: [" ", position, " "] }, void 0)] }, void 0), jsxRuntime.jsxs(OptionsWrapper, { children: [jsxRuntime.jsxs(Date, { children: [" ", date, " ", wasEdited && `(${textEdited})`, " "] }, void 0), hasDropdown && (isAuthor || isMe) &&
                                    jsxRuntime.jsxs(Dropdown, { children: [jsxRuntime.jsx(ButtonMore$1, { onClick: () => setIsOpenDrop(!isOpenDrop), onMouseOver: () => setActionArea(true), onMouseOut: () => setActionArea(false), children: jsxRuntime.jsx(MoreDotsHorizontal, { fill: getColorIconMore() }, void 0) }, void 0), jsxRuntime.jsxs(DropdownWrapper, { isVisible: isOpenDrop, isMe: isMe, children: [isMe && isAuthor &&
                                                        jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs(ItemDrop, { onClick: actionMakePrivate, children: [" ", (!isPrivateAuthor && !isPrivateMe) ? textMakePrivate : textMakePublic, "  "] }, void 0), jsxRuntime.jsxs(ItemDrop, { onClick: () => editingComment(), children: [" ", textEditComment, " "] }, void 0), jsxRuntime.jsxs(ItemDrop, { isLastItem: true, onClick: actionDeleteComment, children: [" ", textDeleteComment, " "] }, void 0)] }, void 0), isMe && !isAuthor &&
                                                        jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [(!isPrivateAuthor) &&
                                                                    jsxRuntime.jsxs(ItemDrop, { onClick: actionMakePrivate, children: [" ", !isPrivateMe ? textMakePrivate : textMakePublic, "  "] }, void 0), jsxRuntime.jsxs(ItemDrop, { onClick: () => editingComment(), children: [" ", textEditComment, " "] }, void 0), jsxRuntime.jsxs(ItemDrop, { isLastItem: true, onClick: actionDeleteComment, children: [" ", textDeleteComment, " "] }, void 0)] }, void 0), isAuthor && !isMe &&
                                                        jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs(ItemDrop, { onClick: actionMakePrivate, children: [" ", (!isPrivateAuthor && !isPrivateMe) ? textMakePrivate : textMakePublic, " "] }, void 0), jsxRuntime.jsxs(ItemDrop, { isLastItem: true, onClick: actionDeleteComment, children: [" ", textDeleteComment, " "] }, void 0)] }, void 0)] }, void 0)] }, void 0)] }, void 0)] }, void 0), onEditing ?
                    jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(CommentaryEditingContent, { id: iDCommentInEditing, "data-gramm": "false", contentEditable: "true", role: "textbox", "aria-multiline": "true", suppressContentEditableWarning: true, children: value }, void 0), jsxRuntime.jsxs(FooterEditingWrapper, { children: [jsxRuntime.jsx(Button, { handleClick: () => { saveEditComment(); }, label: "Salvar Altera\u00E7\u00F5es", disabled: !enableSaveEdit, variant: "primary" }, void 0), jsxRuntime.jsx(Button, { handleClick: () => { cancelEditComment(); }, label: "Cancelar", variant: "secondary" }, void 0)] }, void 0)] }, void 0)
                    :
                        jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(CommentaryContent, { id: iDCommentPosted, children: value }, void 0), jsxRuntime.jsxs(IterationsWrapper, { children: [jsxRuntime.jsxs(LikesStatistics, { children: [isLiked ?
                                                    jsxRuntime.jsx(RocketIconCommentaryBox, { width: '16px', height: '16px' }, void 0)
                                                    :
                                                        jsxRuntime.jsx(RocketIconCommentaryBox, { width: '16px', height: '16px', fill: "#CCCCCC" }, void 0), jsxRuntime.jsx(TextTotalLikes, { children: totalLikes }, void 0)] }, void 0), jsxRuntime.jsxs(IterationsButtonsWrapper, { children: [isLiked ?
                                                    jsxRuntime.jsxs(LinkButton, { onClick: actionLike, children: [" ", textUnliked, " "] }, void 0) :
                                                    jsxRuntime.jsxs(LinkButton, { onClick: actionLike, children: [" ", textLiked, " "] }, void 0), hasAnswer &&
                                                    jsxRuntime.jsxs(LinkButton, { onClick: actionAnswer, children: ["  ", textAnswer, "  "] }, void 0)] }, void 0)] }, void 0)] }, void 0)] }, void 0) }, void 0));
}

const ButtonCheckmark = styled__default["default"].div `
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    width: fit-content;
`;
const Subtitle = styled__default["default"].span `
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;

    margin-top: 8px;

    color: ${(props) => props.disabled ? '#BDBDBD' : '#222222'};
`;

function Checkmark({ type, subtitle, active, handleClick, className, disabled, styles }) {
    const [colorsIcon, setColorsIcon] = react.useState({ fill: '#fff', stroke: '#2CA92A', customColor_1: '#2CA92A' });
    react.useEffect(() => {
        (type == 'checked') ?
            (active ?
                setColorsIcon({ fill: '#fff', stroke: '#2CA92A', customColor_1: '#2CA92A' }) :
                setColorsIcon({ fill: '#2CA92A', stroke: '#2CA92A', customColor_1: '' }))
            :
                (active ?
                    setColorsIcon({ fill: '#FFF', stroke: '#FF0000', customColor_1: '#FF0000' }) :
                    setColorsIcon({ fill: '#FF0000', stroke: '#FF0000', customColor_1: '' }));
        {
            disabled &&
                setColorsIcon({ fill: '#BDBDBD', stroke: '#BDBDBD', customColor_1: '' });
        }
    }, [active, type, disabled]);
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsx("div", { style: { ...styles }, className: className, children: type == 'checked' ?
                jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs(ButtonCheckmark, { onClick: handleClick, children: [jsxRuntime.jsx(CheckInCicle, { ...colorsIcon }, void 0), jsxRuntime.jsx(Subtitle, { disabled: disabled, children: subtitle }, void 0)] }, void 0) }, void 0)
                :
                    jsxRuntime.jsx(jsxRuntime.Fragment, { children: type == 'unchecked' &&
                            jsxRuntime.jsxs(ButtonCheckmark, { onClick: handleClick, children: [jsxRuntime.jsx(CloseInCicle, { ...colorsIcon }, void 0), jsxRuntime.jsx(Subtitle, { disabled: disabled, children: subtitle }, void 0)] }, void 0) }, void 0) }, void 0) }, void 0));
}

function randID() {
    return Math.random()
        .toString(36)
        .substr(2, 9);
}

const WrapperHorizontal = styled__default["default"].div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;    
    width: 100%;
    height: auto;
`;
const WrapperContent = styled__default["default"].div `
    display: flex;
    flex-direction: row;
    max-width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;

    scroll-behavior: smooth;
    &::-webkit-scrollbar {
        display: none;
    }
    padding-left: 150px;
    padding-right: 150px;
`;
const ButtonControll = styled__default["default"].div `
    display: flex;  
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
    width: 80px;
    height: 80px;

    min-width: 80px;
    min-height: 80px;

    background: ${({ theme }) => theme.colors.shadeWhite};
    border: 1px solid #E8E8E8;

    border-radius: 50%;
    ${({ isLeftButton }) => isLeftButton ? 'padding-right: 6px' : 'padding-left: 6px'};
    ${({ isLeftButton }) => isLeftButton ? 'margin-right: -138px' : 'margin-left: -138px'};

    &:hover { 
        background: ${({ theme }) => theme.colors.secondary2};
        border: 0px solid #E8E8E8;
    }

    box-shadow: 8px 21px 8px 0 rgb(34 34 34 / 30%) !important;
    z-index: 9;
    transition: all 0.2s ease-in-out;
`;
// ${({ isLeftButton }) => isLeftButton ? 'margin-right: -28px' : 'margin-left: -28px'};
styled__default["default"].div `
    min-width: 350px;
    min-height: 300px;
    margin: 10px;
    margin-left: 40px;
    margin-right: 40px;
    background-color: #0f0;
    z-index: 1;
    border-radius: 20px
`;

function ScrollContainer({ children, type, isVisibleControlsButtons, stepMove, className, styles }) {
    const [actionAreaButtonLeft, setActionAreaButtonLeft] = react.useState(false);
    const [actionAreaButtonRight, setActionAreaButtonRight] = react.useState(false);
    const [iDScroll, setIDScroll] = react.useState(`iDScroll-${randID()}`);
    const scrollToLeft = () => {
        var objDiv = document.getElementById(iDScroll);
        objDiv.scrollLeft = objDiv.scrollLeft - stepMove;
        console.log(objDiv.clientWidth);
    };
    const scrollToRight = () => {
        var objDiv = document.getElementById(iDScroll);
        objDiv.scrollLeft = objDiv.scrollLeft + stepMove;
        console.log(objDiv.clientWidth);
    };
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: type == 'vertical' ? (null) :
            jsxRuntime.jsx("div", { style: { ...styles }, className: className, children: jsxRuntime.jsxs(WrapperHorizontal, { children: [isVisibleControlsButtons &&
                            jsxRuntime.jsx(ButtonControll, { isLeftButton: true, onClick: scrollToLeft, onMouseOver: () => setActionAreaButtonLeft(true), onMouseOut: () => setActionAreaButtonLeft(false), children: jsxRuntime.jsx(ArrowScrollLeft, { fill: actionAreaButtonLeft ? '#fff' : '#000' }, void 0) }, void 0), jsxRuntime.jsx(WrapperContent, { id: iDScroll, children: children }, void 0), isVisibleControlsButtons &&
                            jsxRuntime.jsx(ButtonControll, { isLeftButton: false, onClick: scrollToRight, onMouseOver: () => setActionAreaButtonRight(true), onMouseOut: () => setActionAreaButtonRight(false), children: jsxRuntime.jsx(ArrowScrollRight, { fill: actionAreaButtonRight ? '#fff' : '#000' }, void 0) }, void 0)] }, void 0) }, void 0) }, void 0));
}

const HeaderWrapper = styled__default["default"].div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 100px;
    margin-right: 100px;

    margin-bottom: 5px;
`;
const ClearComponent = styled__default["default"].div `
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #0645AD;
    cursor: pointer;
`;
const TitleComponent = styled__default["default"].div `
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: -0.02em;
`;
const TextClear = styled__default["default"].div `
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    margin-left: 18px;
`;

const CardWrapper = styled__default["default"].div `
    min-width: 343px;
    min-height: 136px;
    max-width: 343px;
    max-height: 136px;
    border-radius: 8px;


    background-color: ${({ theme }) => theme.colors.neutralsGrey8};
    border: 1px solid #E8E8E8;

    ${({ active }) => active === true && `
        background-color: #FDBC91;
        border: 1px solid #FF4D0D;
    `}
    padding: 24px;
    margin: 15px;   
    cursor: pointer;
`;
const WrapperHeader = styled__default["default"].div `
    display: flex;
    flex-diretion: row;
    padding-left: 3.2px;
`;
const TitleCard = styled__default["default"].div `
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;

    color: #222222;
    margin-left: 11.2px;
`;
const WrapperFooter = styled__default["default"].div `
    margin-top: 27px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
const WrapperAvatar = styled__default["default"].div `
    display: flex;
    flex-direction: row;
    align-items: end;
`;
const AvatarInternal = styled__default["default"].div `
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: ${({ size }) => size};
    min-height: ${({ size }) => size};
    max-width: ${({ size }) => size};
    max-height: ${({ size }) => size};
    
    border: 2px solid #FAFAFA;
    border-radius: 50%;
    margin: ${({ margin }) => margin};
    padding: ${({ padding }) => padding};
    z-index: ${({ zIndex }) => zIndex};
    background: ${({ backgroundColor }) => backgroundColor ? backgroundColor : '#FAFAFA'};

    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: center;

`;
const ButtonMore = styled__default["default"].div `
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;

    color: #0645AD;
    cursor: pointer;
    margin-right: 4px;
`;

function StepCard({ title, onClick, numberPeople, textButtonMore, active, src }) {
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsxs(CardWrapper, { active: active, onClick: onClick, children: [jsxRuntime.jsxs(WrapperHeader, { children: [jsxRuntime.jsx(Bullseye, {}, void 0), jsxRuntime.jsx(TitleCard, { children: title }, void 0)] }, void 0), jsxRuntime.jsxs(WrapperFooter, { children: [jsxRuntime.jsxs(WrapperAvatar, { children: [numberPeople > 0 ? (jsxRuntime.jsx(AvatarInternal, { size: '30px', zIndex: '1', margin: '0 0 0 0px', children: jsxRuntime.jsx(Avatar, { size: '28px', src: src && src.length > 0 ? src[0] : null }, void 0) }, void 0)) : (null), numberPeople > 1 ? (jsxRuntime.jsx(AvatarInternal, { size: '30px', zIndex: '2', margin: '0 0 0 -10px', children: jsxRuntime.jsx(Avatar, { size: '28px', src: src && src.length > 0 ? src[1] : null }, void 0) }, void 0)) : (null), numberPeople > 2 ? (jsxRuntime.jsx(AvatarInternal, { size: '30px', zIndex: '3', margin: '0 0 0 -10px', children: jsxRuntime.jsx(Avatar, { size: '28px', src: src && src.length > 0 ? src[2] : null }, void 0) }, void 0)) : (null), (numberPeople - 3) > 0 ? (jsxRuntime.jsxs(AvatarInternal, { size: '30px', zIndex: '4', margin: '0 0 0 -10px', backgroundColor: '#E8E8E8', padding: '2px 0 0 0', children: ["+", numberPeople - 3 > 99 ? 99 : numberPeople - 3] }, void 0)) : (null)] }, void 0), jsxRuntime.jsx(ButtonMore, { children: textButtonMore }, void 0)] }, void 0)] }, void 0) }, void 0));
}

function LearningSteps({ title, onSelected, objectCards }) {
    const [itemSelected, setItemSelected] = react.useState(-1);
    const onItemSelect = (n) => {
        setItemSelected(n);
        onSelected(n);
    };
    function renderCard(item) {
        return (jsxRuntime.jsx(StepCard, { title: item.title, onClick: () => onItemSelect(item.id), numberPeople: item.numberPeople, className: null, textButtonMore: 'Ver mais', active: itemSelected == item.id, src: item.photos }, void 0));
    }
    return (jsxRuntime.jsxs(styled.ThemeProvider, { theme: FRSTTheme, children: [jsxRuntime.jsxs(HeaderWrapper, { children: [jsxRuntime.jsx(TitleComponent, { children: title }, void 0), jsxRuntime.jsxs(ClearComponent, { onClick: () => onItemSelect(-1), children: [jsxRuntime.jsx(TrashIcon, {}, void 0), jsxRuntime.jsx(TextClear, { children: "Excluir Filtro" }, void 0)] }, void 0)] }, void 0), jsxRuntime.jsx(ScrollContainer, { stepMove: 380, isVisibleControlsButtons: true, children: objectCards.map(renderCard) }, void 0)] }, void 0));
}

exports.AlertCicle = AlertCicle;
exports.Avatar = Avatar;
exports.BannerProblem = BannerProblem;
exports.BaseCard = EmptyCard;
exports.Button = Button;
exports.CalendarCard = CalendarCard;
exports.CheckInCicle = CheckInCicle;
exports.Checkmark = Checkmark;
exports.CommentaryBox = CommentaryBox;
exports.DoubleCheck = DoubleCheck;
exports.InputComment = InputComment;
exports.LearningSteps = LearningSteps;
exports.MoreDotsHorizontal = MoreDotsHorizontal;
exports.ScrollContainer = ScrollContainer;
exports.Tag = Tag;
exports.TextArea = Textarea;
exports.TextField = TextField;
exports.UserCard = CalendarCard$1;
