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

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

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

///-----------------------------------------
/// Componente
/**
 *
 * @componente Planet: Componente responsável por gerenciar os controles dos steps das missões
 */
function Steps(props) {
    const TypeStep = [
        'https://api-motor.s3.amazonaws.com/marte.png',
        'https://api-motor.s3.amazonaws.com/jupter.png',
        'https://api-motor.s3.amazonaws.com/saturno.png',
        'https://api-motor.s3.amazonaws.com/urano.png',
        'https://api-motor.s3.amazonaws.com/netuno.png',
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
                    jsxRuntime.jsx("div", { className: style$2.block, children: jsxRuntime.jsx("img", { src: 'https://api-motor.s3.amazonaws.com/lock.png' }, void 0) }, void 0)] }, void 0) }, void 0));
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
    react.useState(false);
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("div", { className: style.container, style: { ...props.style }, children: [jsxRuntime.jsx("span", { className: style.titleProblem, children: "Problema" }, void 0), props.isEditable &&
                    jsxRuntime.jsx(Button, { label: Edit ? "Salvar Alterações" : "Editar", variant: 'link', handleClick: () => {
                            setEdit(!Edit);
                        }, startIcon: jsxRuntime.jsx(EditIcon, {}, void 0) }, void 0), jsxRuntime.jsx("h1", { className: style.description, children: props.problema }, void 0), jsxRuntime.jsx("div", { style: { display: 'flex', justifyContent: 'space-between', position: 'relative', width: '100%', borderBottom: '1px solid #CCCCCC', paddingBottom: 32 }, children: jsxRuntime.jsxs("div", { style: { display: 'inline-flex', width: '80%' }, children: [jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx(AvatarWithInfo, { cargo: props.cargo, nomeCompleto: 'Avatar', fotoAvatar: props.avatar }, void 0), jsxRuntime.jsx(TextIcon, { description: props.area, svg: jsxRuntime.jsx(Brain, {}, void 0) }, void 0), jsxRuntime.jsx(TextIcon, { description: props.email, svg: jsxRuntime.jsx(Mail, {}, void 0) }, void 0), Edit ?
                                        jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("div", { style: { marginTop: 12, backgroundColor: '#F2F2F2', borderWidth: 1, borderRadius: 4, padding: '24px 16px 24px 16px', border: '1px solid #BDBDBD' }, children: [jsxRuntime.jsx("h3", { style: { marginBottom: 12, textAlign: 'left', width: '100%', fontSize: 16 }, children: "Deseja vincular este novo problema a uma Trilha de Aprendizagem?" }, void 0), jsxRuntime.jsx(Select__default$1["default"], { id: "select", options: [], placeholder: 'Selecione uma trilha', onChange: () => { } }, void 0)] }, void 0) }, void 0)
                                        :
                                            jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx(TextIcon, { description: props.trilha, svg: jsxRuntime.jsx(WithoutTrail, {}, void 0) }, void 0) }, void 0), jsxRuntime.jsx("div", { style: { marginTop: 16, marginBottom: 16 }, children: Edit ?
                                            jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("div", { className: style.contentInput, children: [jsxRuntime.jsx("h3", { style: { marginBottom: 12, textAlign: 'left', width: '100%', fontSize: 16 }, children: "Busque e selecione at\u00E9 tr\u00EAs palavras-chave:" }, void 0), jsxRuntime.jsx("input", { placeholder: 'Ex.: Customer Success' }, void 0), jsxRuntime.jsx("input", { placeholder: 'Ex.: Experi\u00EAncia do usu\u00E1rio' }, void 0), jsxRuntime.jsx("input", { placeholder: 'Ex.: CSAT' }, void 0)] }, void 0) }, void 0)
                                            :
                                                jsxRuntime.jsx(jsxRuntime.Fragment, { children: props.tags?.map((item, key) => (jsxRuntime.jsx(Tag, { title: item, color: "#222", style: { marginRight: 8, marginTop: 8 }, selected: false, inverted: false }, key))) }, void 0) }, void 0), jsxRuntime.jsx(MessageBox, { texto: props.message, tipoVisualizacao: props.typeMessagem, style: { marginBottom: 16 } }, void 0), jsxRuntime.jsx("span", { className: style.created, children: props.dataCriacao }, void 0)] }, void 0), jsxRuntime.jsxs("div", { style: { position: 'absolute', right: 0, flexFlow: 'column', justifyContent: 'flex-end', width: '20%' }, children: [jsxRuntime.jsx(Rating, { titulo: 'Impacto', descricaoAvaliacao: '\u00D3timo', qtdeAvaliacao: props.qtdeAvaliacao, nota: props.notaAvaliacao, tipoVisualizacao: 1 }, void 0), jsxRuntime.jsx(Rating, { titulo: 'Relev\u00E2ncia', descricaoAvaliacao: 'Bom', qtdeAvaliacao: props.qtdeRelevancia, nota: props.notaRelevancia, tipoVisualizacao: 1 }, void 0), jsxRuntime.jsx(RatingCurtidas, { titulo: 'Curtidas', qtdeCurtidas: props.curtidas, tipoBotao: 2 }, void 0)] }, void 0)] }, void 0) }, void 0), jsxRuntime.jsx(MissionSteps, { stepProblem: props.stepProblem, stepActive: props.stepActive, onSelected: (step) => {
                        props.onSelectedStep(step);
                    } }, void 0), jsxRuntime.jsx("div", { style: { marginTop: 18, width: '100%', borderRadius: 8, border: '1px solid #BDBDBD', padding: 16, paddingLeft: 32, paddingRight: 32 }, children: props.children }, void 0)] }, void 0) }, void 0));
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
styled__default["default"].div `
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
styled__default["default"].div `
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
    react.useState(IDInput ? IDInput : `IDEmojiButton-${randID$2()}`);
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
    const verifyClick = () => {
        if (!actionAreaEmojiButton)
            setIsVisibleEmojiWindow(false);
    };
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsxs("div", { style: { ...styles }, onClick: verifyClick, children: [jsxRuntime.jsx(InputWrapper, { focus: focus, children: jsxRuntime.jsx(InputText, { id: iDInputComment, onFocus: () => setFocus(true), onBlur: () => setFocus(false), onChange: inputInChanging, value: stringValueTextArea, placeholder: placeholder, maxLength: limit, disabled: disabled }, void 0) }, void 0), showCharacterCounter &&
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
