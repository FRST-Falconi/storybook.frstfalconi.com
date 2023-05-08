'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var styled = require('styled-components');
var useSound = require('use-sound');
var reactI18next = require('react-i18next');
var material = require('@mui/material');
var Button$5 = require('@mui/material/Button');
var Menu$1 = require('@mui/material/Menu');
var MenuItem = require('@mui/material/MenuItem');
var Card = require('@mui/material/Card');
var Stepper$1 = require('@mui/material/Stepper');
var FormControl = require('@mui/material/FormControl');
var Select$3 = require('@mui/material/Select');
var CheckIcon = require('@mui/icons-material/Check');
var LoginIcon = require('@mui/icons-material/Login');
var Box = require('@mui/material/Box');
var Step = require('@mui/material/Step');
var CardActions = require('@mui/material/CardActions');
var StepConnector = require('@mui/material/StepConnector');
var styles = require('@mui/material/styles');
var Select$4 = require('react-select');
var reactColor = require('react-color');
var dnd = require('@hello-pangea/dnd');
var LinearProgress = require('@material-ui/core/LinearProgress');
var Popover = require('@material-ui/core/Popover');
var Rating$2 = require('@mui/material/Rating');
var Typography$4 = require('@mui/material/Typography');
var reactDateRange = require('react-date-range');
var locale = require('date-fns/locale');
var dateFns = require('date-fns');
var Avatar$1 = require('@mui/material/Avatar');
var Markdown = require('markdown-to-jsx');
var isHotkey = require('is-hotkey');
var slateReact = require('slate-react');
var slate = require('slate');
var slateHistory = require('slate-history');
require('react-dom');
var css = require('@emotion/css');
var iconsMaterial = require('@mui/icons-material');
var Switch = require('react-switch');
var Tooltip$3 = require('@mui/material/Tooltip');
var core = require('@material-ui/core');
var moment = require('moment');
var _ = require('@mui/material/');
var Slider = require('@mui/material/Slider');
var styles$1 = require('@material-ui/styles');
var IconButton = require('@mui/material/IconButton');
var MoreVertIcon = require('@mui/icons-material/MoreVert');
var ComputerIcon = require('@mui/icons-material/Computer');
var PersonAddIcon = require('@mui/icons-material/PersonAdd');
var ArrowBackIosIcon = require('@mui/icons-material/ArrowBackIos');
var ArrowForwardIosIcon = require('@mui/icons-material/ArrowForwardIos');

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

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var React__namespace = /*#__PURE__*/_interopNamespace(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var useSound__default = /*#__PURE__*/_interopDefaultLegacy(useSound);
var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button$5);
var Menu__default = /*#__PURE__*/_interopDefaultLegacy(Menu$1);
var MenuItem__default = /*#__PURE__*/_interopDefaultLegacy(MenuItem);
var Card__default = /*#__PURE__*/_interopDefaultLegacy(Card);
var Stepper__default = /*#__PURE__*/_interopDefaultLegacy(Stepper$1);
var FormControl__default = /*#__PURE__*/_interopDefaultLegacy(FormControl);
var Select__default = /*#__PURE__*/_interopDefaultLegacy(Select$3);
var CheckIcon__default = /*#__PURE__*/_interopDefaultLegacy(CheckIcon);
var LoginIcon__default = /*#__PURE__*/_interopDefaultLegacy(LoginIcon);
var Box__default = /*#__PURE__*/_interopDefaultLegacy(Box);
var Step__default = /*#__PURE__*/_interopDefaultLegacy(Step);
var CardActions__default = /*#__PURE__*/_interopDefaultLegacy(CardActions);
var StepConnector__default = /*#__PURE__*/_interopDefaultLegacy(StepConnector);
var Select__default$1 = /*#__PURE__*/_interopDefaultLegacy(Select$4);
var LinearProgress__default = /*#__PURE__*/_interopDefaultLegacy(LinearProgress);
var Popover__default = /*#__PURE__*/_interopDefaultLegacy(Popover);
var Rating__default = /*#__PURE__*/_interopDefaultLegacy(Rating$2);
var Typography__default = /*#__PURE__*/_interopDefaultLegacy(Typography$4);
var Avatar__default = /*#__PURE__*/_interopDefaultLegacy(Avatar$1);
var Markdown__default = /*#__PURE__*/_interopDefaultLegacy(Markdown);
var isHotkey__default = /*#__PURE__*/_interopDefaultLegacy(isHotkey);
var Switch__default = /*#__PURE__*/_interopDefaultLegacy(Switch);
var Tooltip__default = /*#__PURE__*/_interopDefaultLegacy(Tooltip$3);
var moment__default = /*#__PURE__*/_interopDefaultLegacy(moment);
var Slider__default = /*#__PURE__*/_interopDefaultLegacy(Slider);
var IconButton__default = /*#__PURE__*/_interopDefaultLegacy(IconButton);
var MoreVertIcon__default = /*#__PURE__*/_interopDefaultLegacy(MoreVertIcon);
var ComputerIcon__default = /*#__PURE__*/_interopDefaultLegacy(ComputerIcon);
var PersonAddIcon__default = /*#__PURE__*/_interopDefaultLegacy(PersonAddIcon);
var ArrowBackIosIcon__default = /*#__PURE__*/_interopDefaultLegacy(ArrowBackIosIcon);
var ArrowForwardIosIcon__default = /*#__PURE__*/_interopDefaultLegacy(ArrowForwardIosIcon);

function EditIcon({ fill, width, height }) {
    return (jsxRuntime.jsx("svg", { width: width ? width : '20', height: height ? height : '20', viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.1788 1.92286C16.3858 1.71638 16.667 1.6 16.9607 1.6C17.2544 1.6 17.5356 1.71638 17.7426 1.92286C17.9496 2.12928 18.0654 2.4088 18.0654 2.69981C18.0654 2.99083 17.9496 3.27034 17.7426 3.47676L9.5855 11.6127C9.4439 11.7539 9.26546 11.8543 9.07141 11.9027C8.26586 12.1036 7.52969 11.3753 7.73154 10.57C7.78007 10.3765 7.88036 10.1997 8.02166 10.0588L16.1788 1.92286ZM16.9607 0C16.244 0 15.5563 0.283939 15.0489 0.790021L6.5187 9.29803C6.41591 9.40055 6.34296 9.52912 6.30766 9.66994L5.40975 13.2523C5.34143 13.5248 5.42113 13.8133 5.61971 14.0121C5.81829 14.2109 6.10663 14.291 6.3793 14.223L9.97094 13.3274C10.1114 13.2924 10.2398 13.2199 10.3423 13.1176L18.8725 4.6096C19.38 4.10345 19.6654 3.41652 19.6654 2.69981C19.6654 1.9831 19.38 1.29617 18.8725 0.790021C18.3651 0.283939 17.6774 0 16.9607 0ZM2.59582 1.89842C1.90804 1.89842 1.24801 2.17091 0.761035 2.65662C0.273994 3.1424 0 3.80169 0 4.48958V17.0277C0 17.7156 0.273995 18.3749 0.761035 18.8607C1.24801 19.3464 1.90804 19.6188 2.59582 19.6188H15.1666C15.8544 19.6188 16.5144 19.3464 17.0014 18.8607C17.4884 18.3749 17.7624 17.7156 17.7624 17.0277V10.7586C17.7624 10.3168 17.4042 9.95864 16.9624 9.95864C16.5206 9.95864 16.1624 10.3168 16.1624 10.7586V17.0277C16.1624 17.2899 16.058 17.5418 15.8715 17.7278C15.6849 17.9139 15.4314 18.0189 15.1666 18.0189H2.59582C2.33104 18.0189 2.07753 17.9139 1.89093 17.7278C1.70441 17.5418 1.6 17.2899 1.6 17.0277V4.48958C1.6 4.22738 1.70441 3.9755 1.89093 3.78946C2.07753 3.60335 2.33104 3.49842 2.59582 3.49842H8.8812C9.32303 3.49842 9.6812 3.14025 9.6812 2.69842C9.6812 2.25659 9.32303 1.89842 8.8812 1.89842H2.59582Z", fill: fill ?? '#0645AD' }) }));
}
function WarningIcon$1({ fill, width, height }) {
    return (jsxRuntime.jsx("svg", { width: width ? width : '24', height: height ? height : '20', viewBox: "0 0 24 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M22.9209 17.2636L12.8305 0.814496C12.1589 -0.281702 11.0604 -0.266316 10.3889 0.829881L0.298445 17.2567C-0.37312 18.3537 0.128439 19.2006 1.41311 19.2006H21.8055C23.0909 19.2006 23.5925 18.359 22.9209 17.2636ZM11.6012 4.45541C12.2474 4.45541 12.7474 5.16929 12.7143 6.04163L12.5097 11.2988C12.4766 12.1703 12.0666 12.8842 11.5989 12.8842C11.1312 12.8842 10.7204 12.1703 10.6873 11.2988L10.485 6.04163C10.4519 5.16929 10.9535 4.45541 11.6012 4.45541ZM11.6012 16.8444C10.7858 16.8444 10.2265 16.2482 10.2435 15.4335C10.2435 14.6012 10.8043 14.0227 11.6012 14.0227C12.432 14.0227 12.9574 14.6012 12.9751 15.4335C12.9751 16.2482 12.432 16.8444 11.6012 16.8444Z", fill: fill ?? '#F3D224' }) }));
}
function FRSTLogo({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '92', height: height ? height : '29', viewBox: "0 0 92 29", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M5.65283 5.79883H23.0488V0.000112057H5.65283V5.79883Z", fill: fill ?? 'white' }), jsxRuntime.jsx("path", { d: "M76.6865 29H82.4851V7.24833H76.6865V29Z", fill: fill ?? 'white' }), jsxRuntime.jsx("path", { d: "M67.9883 0.0423484V5.84106H91.183V0.0423484H67.9883Z", fill: fill ?? 'white' }), jsxRuntime.jsx("path", { d: "M60.1725 12.0406C55.6756 10.9699 54.9673 10.9269 54.9673 8.18607C54.9673 6.08764 55.6097 5.79865 58.4791 5.79865C59.2456 5.79865 60.0151 5.79865 60.6958 5.94355L60.7304 0.154449C60.1601 -6.48499e-05 59.6993 -6.48499e-05 58.9732 -6.48499e-05C51.136 -6.48499e-05 49.123 2.31875 49.123 8.01472C49.123 14.1818 50.1509 15.5522 57.046 17.0513C61.7142 18.079 62.1896 18.2339 62.1896 20.8034C62.1896 23.2017 60.8484 23.1946 57.5507 23.1946C56.5639 23.1946 55.811 23.1946 54.9413 23.0496V28.8483C55.811 28.9932 56.6036 28.9932 57.527 28.9932C66.5386 28.9932 67.9768 26.4993 67.9768 20.8462C67.9768 15.236 67.8813 13.8819 60.1725 12.0406Z", fill: fill ?? 'white' }), jsxRuntime.jsx("path", { d: "M20.1496 13.0452H5.65303L0 15.8787L1.57347 21.3824L5.65303 19.2136V28.9915H11.4517V18.8438H20.1496V13.0452Z", fill: fill ?? 'white' }), jsxRuntime.jsx("path", { d: "M43.3443 11.5735V7.27213C43.3443 3.25592 40.0886 -6.48499e-05 36.0722 -6.48499e-05H28.8477V5.79865H34.8031C36.318 5.79865 37.5457 7.02658 37.5457 8.54109V10.3045C37.5457 11.819 36.318 13.047 34.8031 13.047H28.8477V18.8455H30.9999L38.4154 28.9932L43.3443 25.0793L38.5443 18.3814C38.9133 18.2948 39.1938 18.192 39.339 18.0701C41.714 16.8734 43.3443 14.4145 43.3443 11.5735Z", fill: fill ?? 'white' })] }));
}
function FRSTLogoBig({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '142', height: height ? height : '40', viewBox: "0 0 142 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M8.77222 7.99854H35.7659V0.000332832H8.77222V7.99854Z", fill: fill ?? 'white' }), jsxRuntime.jsx("path", { d: "M118.996 40H127.994V9.99779H118.996V40Z", fill: fill ?? 'white' }), jsxRuntime.jsx("path", { d: "M105.499 0.05795V8.05615H141.491V0.05795H105.499Z", fill: fill ?? 'white' }), jsxRuntime.jsx("path", { d: "M93.3707 16.6074C86.3928 15.1306 85.2937 15.0713 85.2937 11.2909C85.2937 8.39651 86.2906 7.99791 90.743 7.99791C91.9324 7.99791 93.1265 7.99791 94.1828 8.19776L94.2365 0.212822C93.3515 -0.000297546 92.6365 -0.000297546 91.5098 -0.000297546C79.3487 -0.000297546 76.2251 3.19806 76.2251 11.0545C76.2251 19.5609 77.8201 21.451 88.5193 23.5188C95.7631 24.9363 96.5008 25.1499 96.5008 28.694C96.5008 32.002 94.4195 31.9923 89.3025 31.9923C87.7712 31.9923 86.6029 31.9923 85.2534 31.7923V39.7904C86.6029 39.9902 87.8328 39.9902 89.2657 39.9902C103.249 39.9902 105.481 36.5505 105.481 28.753C105.481 21.0149 105.333 19.1472 93.3707 16.6074Z", fill: fill ?? 'white' }), jsxRuntime.jsx("path", { d: "M31.2666 17.9928H8.77192L0 21.9011L2.44158 29.4923L8.77192 26.5009V39.9875H17.7697V25.9908H31.2666V17.9928Z", fill: fill ?? 'white' }), jsxRuntime.jsx("path", { d: "M67.2584 15.9632V10.0303C67.2584 4.4907 62.2065 -0.000297546 55.9742 -0.000297546H44.7637V7.99791H54.0049C56.3555 7.99791 58.2606 9.69159 58.2606 11.7806V14.2129C58.2606 16.3019 56.3555 17.9955 54.0049 17.9955H44.7637V25.9935H48.1034L59.6102 39.9902L67.2584 34.5918L59.8101 25.3533C60.3827 25.2339 60.8179 25.0922 61.0433 24.924C64.7287 23.2734 67.2584 19.8818 67.2584 15.9632Z", fill: fill ?? 'white' })] }));
}
function ChangeAccount({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '18', height: height ? height : '16', viewBox: "0 0 18 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M1 1.74841V6.2496H5.36364", stroke: fill ?? 'white', strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M16.9999 13.7516V9.25043H12.6362", stroke: fill ?? 'white', strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M15.1745 5.49941C14.8057 4.42421 14.1788 3.46293 13.3524 2.70524C12.526 1.94755 11.5269 1.41816 10.4485 1.16646C9.3701 0.914767 8.24745 0.948968 7.18532 1.26588C6.12318 1.58278 5.15618 2.17207 4.37455 2.97875L1 6.24961M17 9.25039L13.6255 12.5213C12.8438 13.3279 11.8768 13.9172 10.8147 14.2341C9.75255 14.551 8.6299 14.5852 7.55148 14.3335C6.47307 14.0818 5.47404 13.5524 4.64761 12.7948C3.82119 12.0371 3.1943 11.0758 2.82545 10.0006", stroke: fill ?? 'white', strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })] }));
}
function DownloadIcon({ fill, width, height }) {
    return (jsxRuntime.jsx("svg", { width: width ? width : '24', height: height ? height : '24', viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.8 1C12.8 0.447715 12.3523 0 11.8 0C11.2477 0 10.8 0.447715 10.8 1V12.9858L6.50711 8.69289C6.11658 8.30237 5.48342 8.30237 5.09289 8.69289C4.70237 9.08342 4.70237 9.71658 5.09289 10.1071L11.0929 16.1071C11.2858 16.3 11.5379 16.3976 11.7908 16.4C11.7938 16.4 11.7969 16.4 11.8 16.4M12.8 1V12.9858V1ZM11.8092 16.4C12.0621 16.3976 12.3142 16.3 12.5071 16.1071L18.5071 10.1071C18.8976 9.71658 18.8976 9.08342 18.5071 8.69289C18.1166 8.30237 17.4834 8.30237 17.0929 8.69289L12.8 12.9858M1 14.4C1.55228 14.4 2 14.8477 2 15.4V20.2C2 20.5713 2.1475 20.9274 2.41005 21.1899C2.6726 21.4525 3.0287 21.6 3.4 21.6H20.2C20.5713 21.6 20.9274 21.4525 21.1899 21.1899C21.4525 20.9274 21.6 20.5713 21.6 20.2V15.4C21.6 14.8477 22.0477 14.4 22.6 14.4C23.1523 14.4 23.6 14.8477 23.6 15.4V20.2C23.6 21.1017 23.2418 21.9665 22.6042 22.6042C21.9665 23.2418 21.1017 23.6 20.2 23.6H3.4C2.49826 23.6 1.63346 23.2418 0.995837 22.6042C0.358213 21.9665 0 21.1017 0 20.2V15.4C0 14.8477 0.447715 14.4 1 14.4Z", fill: fill ?? '#FF4D0D' }) }));
}
function DropdownIconWhite({ fill, width, height }) {
    return (jsxRuntime.jsx("svg", { width: width ? width : '16', height: height ? height : '16', children: jsxRuntime.jsx("path", { d: "M2 8l6 6 6-6z", fill: fill ?? 'white' }) }));
}
function DropdownIcon({ fill, width, height }) {
    return (jsxRuntime.jsx("svg", { width: width ? width : '16', height: height ? height : '16', children: jsxRuntime.jsx("path", { d: "M2 8l6 6 6-6z", fill: fill ?? 'white' }) }));
}
function DropdownIconLine({ fill, width, height }) {
    return (jsxRuntime.jsx("svg", { width: width ? width : '18', height: height ? height : '10', viewBox: "0 0 18 10", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M1 9L9 1L17 9", stroke: fill ? fill : '#222222', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }) }));
}
function DropdownSideIconWhite({ fill, width, height }) {
    return (jsxRuntime.jsx("svg", { width: width ? width : '7', height: height ? height : '12', viewBox: "0 0 7 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M6.31359 6.34315L0.656738 0.686292V12L6.31359 6.34315Z", fill: fill ?? 'white' }) }));
}
function ExitArrow({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '17', height: height ? height : '18', viewBox: "0 0 17 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M6.33333 17H2.77778C2.30628 17 1.8541 16.8127 1.5207 16.4793C1.1873 16.1459 1 15.6937 1 15.2222V2.77778C1 2.30628 1.1873 1.8541 1.5207 1.5207C1.8541 1.1873 2.30628 1 2.77778 1H6.33333", stroke: fill ? fill : 'white', strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M11.5557 13.4444L16.0001 8.99999L11.5557 4.55554", stroke: fill ? fill : 'white', strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M16 9L6 9", stroke: fill ? fill : 'white', strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })] }));
}
function BackArrow({ fill, width, height }) {
    return (jsxRuntime.jsx("svg", { width: width ? width : '17', height: height ? height : '14', viewBox: "0 0 17 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.332 8C15.8843 8 16.332 7.55228 16.332 7C16.332 6.44772 15.8843 6 15.332 6L3.40622 6L7.68046 1.70543C8.07006 1.31398 8.06856 0.680815 7.67711 0.291218C7.28566 -0.098379 6.65249 -0.0968769 6.2629 0.294573L0.291298 6.29457C0.175179 6.41124 0.0937843 6.54942 0.0471172 6.69624C0.0298405 6.75049 0.017067 6.80676 0.00923729 6.86459C-0.00297165 6.95442 -0.00297165 7.04558 0.00923729 7.13541C0.0170536 7.19315 0.0298004 7.24933 0.0470371 7.30351C0.0936909 7.45042 0.175112 7.58869 0.291298 7.70543L6.2629 13.7054C6.65249 14.0969 7.28566 14.0984 7.67711 13.7088C8.06856 13.3192 8.07006 12.686 7.68046 12.2946L3.40622 8H15.332Z", fill: fill ?? '#0645AD' }) }));
}
function CheckboxChecked({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '16', height: height ? height : '16', viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("rect", { x: "0.5", y: "0.5", width: "15", height: "15", rx: "1.5", fill: "#F35F24", stroke: "#F35F24" }), jsxRuntime.jsx("path", { d: "M13 4L6.125 11L3 7.81818", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })] }));
}
function CheckboxEmpty({ fill, stroke, width, height, active }) {
    return (jsxRuntime.jsx("svg", { width: width ? width : '16', height: height ? height : '16', viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("rect", { x: "0.6", y: "0.6", width: "14.8", height: "14.8", rx: "1.4", fill: fill ?? 'white', stroke: stroke ?? '#A6A6A6', strokeWidth: "1.2" }) }));
}
function Trash({ fill, width, height }) {
    return (jsxRuntime.jsx("svg", { width: width ? width : '14', height: height ? height : '16', viewBox: "0 0 14 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.43064 2.09763C5.49315 2.03512 5.57794 2 5.66634 2H8.33301C8.42141 2 8.5062 2.03512 8.56871 2.09763C8.63122 2.16014 8.66634 2.24493 8.66634 2.33333V2.66667H5.33301V2.33333C5.33301 2.24493 5.36813 2.16014 5.43064 2.09763ZM10.6663 2.33333V2.66667H11.6663C11.6674 2.66667 11.6685 2.66667 11.6695 2.66667H13C13.5523 2.66667 14 3.11439 14 3.66667C14 4.21896 13.5523 4.66667 13 4.66667H12.6663V13C12.6663 13.6188 12.4205 14.2123 11.9829 14.6499C11.5453 15.0875 10.9518 15.3333 10.333 15.3333H3.66634C3.0475 15.3333 2.45401 15.0875 2.01643 14.6499C1.57884 14.2123 1.33301 13.6188 1.33301 13V4.66667H1C0.447715 4.66667 0 4.21896 0 3.66667C0 3.11439 0.447715 2.66667 1 2.66667H2.32981C2.33087 2.66667 2.33194 2.66667 2.33301 2.66667H3.33301V2.33333C3.33301 1.71449 3.57884 1.121 4.01643 0.683417C4.45401 0.245833 5.0475 0 5.66634 0H8.33301C8.95185 0 9.54534 0.245833 9.98292 0.683417C10.4205 1.121 10.6663 1.71449 10.6663 2.33333ZM3.33301 4.66667V13C3.33301 13.0884 3.36813 13.1732 3.43064 13.2357C3.49315 13.2982 3.57794 13.3333 3.66634 13.3333H10.333C10.4214 13.3333 10.5062 13.2982 10.5687 13.2357C10.6312 13.1732 10.6663 13.0884 10.6663 13V4.66667L3.33301 4.66667Z", fill: fill ? fill : '#0645AD' }) }));
}
function TrashDelete({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ?? '25', height: height ?? '24', viewBox: `0 0 ${width ?? '25'} ${height ?? '24'}`, fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M4.36035 7.33398H6.13813H20.3604", stroke: fill ?? '#923534', "stroke-width": "1.2", "stroke-linecap": "round", "stroke-linejoin": "round" }), jsxRuntime.jsx("path", { d: "M18.9054 7.5V18.4C18.9054 18.8243 18.7083 19.2313 18.3576 19.5314C18.0069 19.8314 17.5312 20 17.0352 20H7.68458C7.18859 20 6.71292 19.8314 6.3622 19.5314C6.01148 19.2313 5.81445 18.8243 5.81445 18.4V7.5M8.61965 7.2V5.6C8.61965 5.17565 8.81668 4.76869 9.1674 4.46863C9.51811 4.16857 9.99379 4 10.4898 4H14.23C14.726 4 15.2017 4.16857 15.5524 4.46863C15.9031 4.76869 16.1002 5.17565 16.1002 5.6V7.2", stroke: fill ?? '#923534', "stroke-width": "1.2", "stroke-linecap": "round", "stroke-linejoin": "round" })] }));
}
function AlertCicle({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '16', height: height ? height : '16', viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", stroke: fill ?? '#FF0000', strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M12 8V12", stroke: fill ?? '#FF0000', strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M12 16H12.01", stroke: fill ?? '#FF0000', strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })] }));
}
function DoubleCheck({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '16', height: height ? height : '16', viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M1.33301 8L4.83301 11.3333L6.58301 9.33333", stroke: fill ?? '#FFF', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M5.33301 8.00033L8.83301 11.3337L14.6663 4.66699", stroke: fill ?? '#FFF', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M10.6663 4.66699L8.33301 7.33366", stroke: fill ?? '#FFF', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" })] }));
}
function WithoutTrail({ fill, width, height }) {
    return (jsxRuntime.jsx("svg", { width: width ? width : '16', height: height ? height : '16', viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M14.2607 1.73828C12.6084 0.0859375 9.93457 0.0859375 8.28418 1.73828L6.3916 3.63086L7.3877 4.62695L9.28027 2.73438C10.3311 1.68359 12.1045 1.57227 13.2646 2.73438C14.4268 3.89648 14.3154 5.66797 13.2646 6.71875L11.3721 8.61133L12.3701 9.60938L14.2627 7.7168C15.9111 6.06445 15.9111 3.39062 14.2607 1.73828ZM6.71973 13.2656C5.66895 14.3164 3.89551 14.4277 2.73535 13.2656C1.57324 12.1035 1.68457 10.332 2.73535 9.28125L4.62793 7.38867L3.62988 6.39063L1.7373 8.2832C0.0849609 9.93555 0.0849609 12.6094 1.7373 14.2598C3.38965 15.9102 6.06348 15.9121 7.71387 14.2598L9.60645 12.3672L8.61035 11.3711L6.71973 13.2656ZM3.08301 2.08984C3.05364 2.06077 3.01398 2.04445 2.97266 2.04445C2.93133 2.04445 2.89167 2.06077 2.8623 2.08984L2.08887 2.86328C2.05979 2.89265 2.04348 2.93231 2.04348 2.97363C2.04348 3.01496 2.05979 3.05462 2.08887 3.08398L12.917 13.9121C12.9775 13.9727 13.0771 13.9727 13.1377 13.9121L13.9111 13.1387C13.9717 13.0781 13.9717 12.9785 13.9111 12.918L3.08301 2.08984Z", fill: fill ? fill : '#222222' }) }));
}
function MoreDotsVertical({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '24', height: height ? height : '24', viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12Z", stroke: "black", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5Z", stroke: "black", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19Z", stroke: fill ? fill : 'black', strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })] }));
}
function MoreDotsHorizontal({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '20', height: height ? height : '4', viewBox: "0 0 20 4", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3Z", stroke: fill ?? '#FFF', strokeWidth: "2" }), jsxRuntime.jsx("path", { d: "M10 3C10.5523 3 11 2.55228 11 2C11 1.44772 10.5523 1 10 1C9.44772 1 9 1.44772 9 2C9 2.55228 9.44772 3 10 3Z", stroke: fill ?? '#FFF', strokeWidth: "2" }), jsxRuntime.jsx("path", { d: "M18 3C18.5523 3 19 2.55228 19 2C19 1.44772 18.5523 1 18 1C17.4477 1 17 1.44772 17 2C17 2.55228 17.4477 3 18 3Z", stroke: fill ?? '#FFF', strokeWidth: "2" })] }));
}
function Mail({ fill, width, height }) {
    return (jsxRuntime.jsx("svg", { width: width ? width : '20', height: height ? height : '20', viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M18.125 3.125H1.875C1.5293 3.125 1.25 3.4043 1.25 3.75V16.25C1.25 16.5957 1.5293 16.875 1.875 16.875H18.125C18.4707 16.875 18.75 16.5957 18.75 16.25V3.75C18.75 3.4043 18.4707 3.125 18.125 3.125ZM17.3438 5.28906V15.4688H2.65625V5.28906L2.11719 4.86914L2.88477 3.88281L3.7207 4.5332H16.2812L17.1172 3.88281L17.8848 4.86914L17.3438 5.28906ZM16.2812 4.53125L10 9.41406L3.71875 4.53125L2.88281 3.88086L2.11523 4.86719L2.6543 5.28711L9.32617 10.4746C9.51805 10.6237 9.7541 10.7046 9.99707 10.7046C10.24 10.7046 10.4761 10.6237 10.668 10.4746L17.3438 5.28906L17.8828 4.86914L17.1152 3.88281L16.2812 4.53125Z", fill: fill ? fill : '#222222' }) }));
}
function Dot({ fill, width, height }) {
    return (jsxRuntime.jsx("svg", { width: width ? width : '4', height: height ? height : '4', viewBox: "0 0 4 4", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M2 4C1.46957 4 0.960859 3.78929 0.585786 3.41421C0.210713 3.03914 0 2.53043 0 2C0 1.46957 0.210713 0.960859 0.585786 0.585786C0.960859 0.210713 1.46957 0 2 0C2.53043 0 3.03914 0.210713 3.41421 0.585786C3.78929 0.960859 4 1.46957 4 2C4 2.53043 3.78929 3.03914 3.41421 3.41421C3.03914 3.78929 2.53043 4 2 4Z", fill: fill ?? '#FFF', strokeWidth: "2" }) }));
}
function Brain({ fill, width, height }) {
    return (jsxRuntime.jsx("svg", { width: width ? width : '20', height: height ? height : '20', viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M5.9594 2.51021C6.65273 1.97021 7.5594 1.67188 8.46023 1.67188C8.9994 1.67188 9.43523 1.85688 9.76607 2.15104C9.85523 2.23021 9.9344 2.31604 10.0052 2.40437C10.0761 2.31604 10.1552 2.23021 10.2444 2.15104C10.5752 1.85688 11.0111 1.67188 11.5502 1.67188C12.4511 1.67188 13.3586 1.97021 14.0502 2.51021C14.5902 2.92938 15.0127 3.50854 15.1786 4.20771C15.5286 4.26604 15.8394 4.44438 16.0911 4.68021C16.4911 5.05604 16.7769 5.59937 16.9561 6.15854C17.1386 6.72604 17.2294 7.36354 17.2019 7.97604C17.1877 8.28937 17.1419 8.60937 17.0544 8.91521L17.1086 8.94021C17.4169 9.08521 17.6669 9.31271 17.8544 9.61521C18.2086 10.186 18.3336 11.0077 18.3336 12.0552C18.3336 13.2594 17.8727 14.0769 17.2811 14.5844C16.9729 14.8487 16.6122 15.0447 16.2227 15.1594C16.0814 15.8106 15.791 16.4202 15.3744 16.9402C14.7719 17.6935 13.8352 18.3302 12.5769 18.3302C11.5686 18.3302 10.7744 17.7719 10.2644 17.2385C10.174 17.1432 10.0878 17.044 10.0061 16.941C9.92408 17.0437 9.83761 17.1427 9.7469 17.2377C9.2369 17.7727 8.44273 18.3302 7.4344 18.3302C6.17523 18.3302 5.23857 17.6935 4.6369 16.9402C4.21964 16.4203 3.92868 15.8107 3.7869 15.1594C3.39774 15.0446 3.03732 14.8486 2.7294 14.5844C2.13773 14.076 1.67773 13.2594 1.67773 12.0552C1.67773 11.0077 1.80273 10.186 2.15607 9.61521C2.34353 9.30442 2.62315 9.05976 2.95607 8.91521C2.87045 8.60897 2.82095 8.29378 2.80857 7.97604C2.78107 7.36354 2.8719 6.72604 3.0544 6.15854C3.23357 5.60021 3.51857 5.05604 3.9194 4.68021C4.17009 4.43586 4.48767 4.27141 4.8319 4.20771C4.99857 3.50771 5.42023 2.92938 5.9594 2.51021ZM6.72773 3.49604C6.27273 3.85021 6.00607 4.32187 6.00607 4.86521C6.00599 4.96419 5.98241 5.06173 5.93726 5.14982C5.89211 5.2379 5.82669 5.314 5.74638 5.37186C5.66607 5.42971 5.57316 5.46766 5.47532 5.48259C5.37747 5.49751 5.27748 5.48899 5.18357 5.45771C5.0694 5.41937 4.94857 5.42854 4.77523 5.59187C4.5819 5.77271 4.38607 6.10021 4.2444 6.54021C4.10269 6.98592 4.03953 7.45287 4.05773 7.92021C4.07857 8.38354 4.18857 8.76854 4.3619 9.02854C4.39058 9.07162 4.41381 9.11808 4.43107 9.16687H5.33273C5.9327 9.16675 6.51049 9.3937 6.94999 9.80212C7.38948 10.2105 7.65811 10.7702 7.7019 11.3685C8.06089 11.5118 8.35893 11.7753 8.54501 12.1141C8.7311 12.4529 8.79366 12.8458 8.72199 13.2256C8.65032 13.6054 8.44887 13.9485 8.15213 14.1961C7.85538 14.4438 7.48179 14.5806 7.09529 14.5832C6.70879 14.5857 6.33341 14.4539 6.03341 14.2102C5.7334 13.9665 5.52742 13.6261 5.45071 13.2473C5.37401 12.8685 5.43135 12.4748 5.61292 12.1336C5.7945 11.7924 6.08901 11.5249 6.44607 11.3769C6.40649 11.1099 6.27227 10.8661 6.06789 10.6899C5.86351 10.5136 5.6026 10.4168 5.33273 10.4169H3.14523C3.02023 10.7069 2.92773 11.2077 2.92773 12.0552C2.92773 12.906 3.2369 13.3727 3.54357 13.636C3.8794 13.9235 4.24857 13.9985 4.35523 13.9985C4.52099 13.9985 4.67997 14.0644 4.79718 14.1816C4.91439 14.2988 4.98023 14.4578 4.98023 14.6235C4.98023 14.9735 5.17357 15.6094 5.61357 16.1594C6.0369 16.6902 6.64023 17.0802 7.4344 17.0802C7.96523 17.0802 8.45357 16.7819 8.84273 16.3752C9.03107 16.1769 9.17773 15.971 9.2744 15.8044C9.31098 15.742 9.34301 15.6772 9.37023 15.6102L9.37523 15.5985V7.70854H8.62857C8.48352 8.0671 8.21829 8.36404 7.87832 8.54849C7.53836 8.73294 7.14482 8.7934 6.76516 8.71952C6.38551 8.64564 6.04336 8.44201 5.79737 8.14354C5.55138 7.84506 5.41686 7.47032 5.41686 7.08354C5.41686 6.69676 5.55138 6.32202 5.79737 6.02355C6.04336 5.72507 6.38551 5.52145 6.76516 5.44756C7.14482 5.37368 7.53836 5.43415 7.87832 5.61859C8.21829 5.80304 8.48352 6.09999 8.62857 6.45854H9.37523V4.34354L9.37273 4.29604C9.35848 4.03939 9.30798 3.78604 9.22273 3.54354C9.14773 3.34354 9.05023 3.18771 8.93523 3.08521C8.83273 2.99354 8.69107 2.92188 8.46023 2.92188C7.8219 2.92188 7.1894 3.13688 6.7269 3.49688L6.72773 3.49604ZM10.6361 14.1669V15.5985L10.6402 15.6102C10.6569 15.6544 10.6886 15.7202 10.7369 15.8044C10.8327 15.971 10.9794 16.1769 11.1686 16.3752C11.5569 16.7819 12.0461 17.0802 12.5769 17.0802C13.3702 17.0802 13.9736 16.6902 14.3977 16.1594C14.8369 15.6094 15.0311 14.9727 15.0311 14.6235C15.0311 14.4578 15.0969 14.2988 15.2141 14.1816C15.3313 14.0644 15.4903 13.9985 15.6561 13.9985C15.7627 13.9985 16.1311 13.9235 16.4677 13.636C16.7736 13.3727 17.0827 12.906 17.0827 12.0552C17.0827 11.0485 16.9511 10.5302 16.7919 10.2744C16.7421 10.1859 16.6665 10.1147 16.5752 10.0702C16.4911 10.0302 16.3644 10.0002 16.1686 10.0002C16.0554 10.0002 15.9445 9.96949 15.8474 9.91136C15.7504 9.85322 15.6709 9.76985 15.6176 9.67011C15.5642 9.57038 15.5389 9.45802 15.5443 9.34504C15.5498 9.23205 15.5858 9.12266 15.6486 9.02854C15.8219 8.76771 15.9319 8.38354 15.9536 7.92021C15.9715 7.45282 15.908 6.98587 15.7661 6.54021C15.6244 6.10021 15.4286 5.77354 15.2361 5.59187C15.0619 5.42854 14.9411 5.41937 14.8277 5.45771C14.7338 5.48915 14.6337 5.4978 14.5357 5.48295C14.4378 5.46811 14.3448 5.43018 14.2643 5.37231C14.1839 5.31444 14.1184 5.23827 14.0732 5.15011C14.028 5.06194 14.0044 4.96429 14.0044 4.86521C14.0044 4.32187 13.7377 3.85021 13.2827 3.49604C12.8219 3.13688 12.1886 2.92104 11.5494 2.92104C11.3194 2.92104 11.1786 2.99354 11.0752 3.08437C10.9448 3.21232 10.8465 3.3694 10.7886 3.54271C10.6951 3.79975 10.6436 4.07015 10.6361 4.34354V12.9169H11.1661C11.4644 12.9169 11.7506 12.7983 11.9616 12.5874C12.1725 12.3764 12.2911 12.0902 12.2911 11.7919V10.296C11.9325 10.151 11.6356 9.88577 11.4511 9.5458C11.2667 9.20583 11.2062 8.8123 11.2801 8.43264C11.354 8.05298 11.5576 7.71084 11.8561 7.46485C12.1545 7.21886 12.5293 7.08433 12.9161 7.08433C13.3028 7.08433 13.6776 7.21886 13.9761 7.46485C14.2745 7.71084 14.4782 8.05298 14.552 8.43264C14.6259 8.8123 14.5655 9.20583 14.381 9.5458C14.1966 9.88577 13.8996 10.151 13.5411 10.296V11.7919C13.5411 12.4218 13.2908 13.0259 12.8454 13.4713C12.4 13.9167 11.796 14.1669 11.1661 14.1669H10.6361ZM7.08273 6.66687C6.97223 6.66687 6.86625 6.71077 6.78811 6.78891C6.70997 6.86705 6.66607 6.97303 6.66607 7.08354C6.66607 7.19405 6.70997 7.30003 6.78811 7.37817C6.86625 7.45631 6.97223 7.50021 7.08273 7.50021C7.19324 7.50021 7.29922 7.45631 7.37736 7.37817C7.4555 7.30003 7.4994 7.19405 7.4994 7.08354C7.4994 6.97303 7.4555 6.86705 7.37736 6.78891C7.29922 6.71077 7.19324 6.66687 7.08273 6.66687ZM6.66607 12.9169C6.66607 13.0274 6.70997 13.1334 6.78811 13.2115C6.86625 13.2896 6.97223 13.3335 7.08273 13.3335C7.19324 13.3335 7.29922 13.2896 7.37736 13.2115C7.4555 13.1334 7.4994 13.0274 7.4994 12.9169C7.4994 12.8064 7.4555 12.7004 7.37736 12.6222C7.29922 12.5441 7.19324 12.5002 7.08273 12.5002C6.97223 12.5002 6.86625 12.5441 6.78811 12.6222C6.70997 12.7004 6.66607 12.8064 6.66607 12.9169ZM12.4994 8.75021C12.4994 8.86071 12.5433 8.9667 12.6214 9.04484C12.6996 9.12298 12.8056 9.16687 12.9161 9.16687C13.0266 9.16687 13.1326 9.12298 13.2107 9.04484C13.2888 8.9667 13.3327 8.86071 13.3327 8.75021C13.3327 8.6397 13.2888 8.53372 13.2107 8.45558C13.1326 8.37744 13.0266 8.33354 12.9161 8.33354C12.8056 8.33354 12.6996 8.37744 12.6214 8.45558C12.5433 8.53372 12.4994 8.6397 12.4994 8.75021Z", fill: fill ? fill : '#222222' }) }));
}
function CompanyIcon({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M2.5 17.5H1.9V18.1H2.5V17.5ZM2.5 2.5V1.9C2.16863 1.9 1.9 2.16863 1.9 2.5H2.5ZM10.5 2.5H11.1C11.1 2.16863 10.8314 1.9 10.5 1.9V2.5ZM17.5 8.5H18.1C18.1 8.16863 17.8314 7.9 17.5 7.9V8.5ZM17.5 17.5V18.1H18.1V17.5H17.5ZM3.1 17.5V2.5H1.9V17.5H3.1ZM2.5 3.1H10.5V1.9H2.5V3.1ZM9.9 2.5V17H11.1V2.5H9.9ZM11 9.1H17.5V7.9H11V9.1ZM16.9 8.5V17.5H18.1V8.5H16.9ZM17.5 16.9H2.5V18.1H17.5V16.9Z", fill: "black" }), jsxRuntime.jsx("path", { d: "M5 6V5", stroke: "black" }), jsxRuntime.jsx("path", { d: "M5 9V8", stroke: "black" }), jsxRuntime.jsx("path", { d: "M5 12V11", stroke: "black" }), jsxRuntime.jsx("path", { d: "M12 11.5H16", stroke: "black" }), jsxRuntime.jsx("path", { d: "M12 14H16", stroke: "black" }), jsxRuntime.jsx("path", { d: "M8 6V5", stroke: "black" }), jsxRuntime.jsx("path", { d: "M8 9V8", stroke: "black" }), jsxRuntime.jsx("path", { d: "M8 12V11", stroke: "black" }), jsxRuntime.jsx("path", { d: "M5 17V14H8V17", stroke: "black" })] }));
}
function WithTrail({ fill, width, height }) {
    return (jsxRuntime.jsx("svg", { width: width ? width : '20', height: height ? height : '20', viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M11.2119 12.9961C11.1825 12.967 11.1429 12.9507 11.1016 12.9507C11.0602 12.9507 11.0206 12.967 10.9912 12.9961L8.72168 15.2656C7.6709 16.3164 5.89746 16.4277 4.7373 15.2656C3.5752 14.1035 3.68652 12.332 4.7373 11.2812L7.00684 9.01172C7.06738 8.95117 7.06738 8.85156 7.00684 8.79102L6.22949 8.01367C6.20013 7.98459 6.16047 7.96828 6.11914 7.96828C6.07781 7.96828 6.03816 7.98459 6.00879 8.01367L3.73926 10.2832C2.08691 11.9355 2.08691 14.6094 3.73926 16.2598C5.3916 17.9102 8.06543 17.9121 9.71582 16.2598L11.9854 13.9902C12.0459 13.9297 12.0459 13.8301 11.9854 13.7695L11.2119 12.9961ZM16.2627 3.73828C14.6104 2.08594 11.9365 2.08594 10.2861 3.73828L8.01465 6.00781C7.98557 6.03718 7.96926 6.07684 7.96926 6.11816C7.96926 6.15949 7.98557 6.19915 8.01465 6.22852L8.79004 7.00391C8.85059 7.06445 8.9502 7.06445 9.01074 7.00391L11.2803 4.73438C12.3311 3.68359 14.1045 3.57227 15.2646 4.73438C16.4268 5.89648 16.3154 7.66797 15.2646 8.71875L12.9951 10.9883C12.966 11.0176 12.9497 11.0573 12.9497 11.0986C12.9497 11.14 12.966 11.1796 12.9951 11.209L13.7725 11.9863C13.833 12.0469 13.9326 12.0469 13.9932 11.9863L16.2627 9.7168C17.9131 8.06445 17.9131 5.39062 16.2627 3.73828ZM11.917 7.27148C11.8876 7.24241 11.848 7.22609 11.8066 7.22609C11.7653 7.22609 11.7257 7.24241 11.6963 7.27148L7.27246 11.6934C7.24338 11.7227 7.22707 11.7624 7.22707 11.8037C7.22707 11.845 7.24338 11.8847 7.27246 11.9141L8.0459 12.6875C8.10645 12.748 8.20606 12.748 8.2666 12.6875L12.6885 8.26563C12.749 8.20508 12.749 8.10547 12.6885 8.04492L11.917 7.27148Z", fill: fill ? fill : '#222222' }) }));
}
function EyeOff({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '16', height: height ? height : '16', viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M9.41335 9.41319C9.23026 9.60969 9.00945 9.76729 8.76412 9.8766C8.51879 9.98591 8.25396 10.0447 7.98541 10.0494C7.71687 10.0542 7.45013 10.0048 7.20109 9.90418C6.95206 9.80359 6.72583 9.65387 6.53592 9.46396C6.346 9.27404 6.19628 9.04782 6.09569 8.79878C5.9951 8.54975 5.9457 8.283 5.95044 8.01446C5.95518 7.74592 6.01396 7.48108 6.12327 7.23575C6.23258 6.99042 6.39019 6.76962 6.58669 6.58652M11.96 11.9599C10.8204 12.8285 9.43276 13.3098 8.00002 13.3332C3.33335 13.3332 0.666687 7.99985 0.666687 7.99985C1.49595 6.45445 2.64611 5.10426 4.04002 4.03985L11.96 11.9599ZM6.60002 2.82652C7.05891 2.71911 7.52873 2.66541 8.00002 2.66652C12.6667 2.66652 15.3334 7.99985 15.3334 7.99985C14.9287 8.75693 14.4461 9.46968 13.8934 10.1265L6.60002 2.82652Z", stroke: fill ?? '#FFF', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M0.666687 0.666504L15.3334 15.3332", stroke: fill ?? '#FFF', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" })] }));
}
function SaveIcon({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '22', height: height ? height : '22', viewBox: "0 0 22 22", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("rect", { width: "22", height: "22", fill: fill ? fill : '#757575' }), jsxRuntime.jsx("path", { d: "M15.6667 17H6.33333C5.97971 17 5.64057 16.8595 5.39052 16.6095C5.14048 16.3594 5 16.0203 5 15.6667V6.33333C5 5.97971 5.14048 5.64057 5.39052 5.39052C5.64057 5.14048 5.97971 5 6.33333 5H13.6667L17 8.33333V15.6667C17 16.0203 16.8595 16.3594 16.6095 16.6095C16.3594 16.8595 16.0203 17 15.6667 17Z", stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M14.3327 17.0003V11.667H7.66602V17.0003", stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M7.66602 5V8.33333H12.9993", stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" })] }));
}
function CheckInCicle({ fill, stroke, customColor_1, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ?? '21', height: height ?? '20', viewBox: "0 0 21 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M20 10C20 15.5176 15.5281 20 10.0001 20C4.47195 20 0 15.5176 0 10C0 4.48239 4.47195 0 10.0001 0C15.5281 0 20 4.48239 20 10Z", fill: customColor_1 ?? '#222' }), jsxRuntime.jsx("path", { d: "M19.7557 10C19.7557 15.2417 15.4598 19.5 10.1494 19.5C4.83889 19.5 0.542969 15.2417 0.542969 10C0.542969 4.75827 4.83889 0.5 10.1494 0.5C15.4598 0.5 19.7557 4.75827 19.7557 10Z", stroke: stroke ?? '#FFF' }), jsxRuntime.jsx("path", { d: "M14.05 5L15.39 5.94L9.58 14.32H8.24L5 9.78L6.34 8.53L8.91 10.93L14.05 5Z", fill: fill ?? '#FFF' })] }));
}
function CloseInCicle({ fill, stroke, customColor_1, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ?? '21', height: height ?? '20', viewBox: "0 0 21 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M20 10C20 15.5176 15.7517 20 10.5001 20C5.24835 20 1 15.5176 1 10C1 4.48239 5.24835 0 10.5001 0C15.7517 0 20 4.48239 20 10Z", fill: customColor_1 ?? '#222' }), jsxRuntime.jsx("path", { d: "M20.2997 10C20.2997 15.2417 16.0038 19.5 10.6933 19.5C5.38284 19.5 1.08691 15.2417 1.08691 10C1.08691 4.75827 5.38284 0.5 10.6933 0.5C16.0038 0.5 20.2997 4.75827 20.2997 10Z", stroke: stroke ?? '#F00' }), jsxRuntime.jsx("path", { d: "M15.9 6.41L12.36 9.95L15.9 13.49L14.49 14.9L10.95 11.37L7.42 14.9L6 13.48L9.53 9.95L6 6.42L7.42 5L10.95 8.53L14.49 5L15.9 6.41Z", fill: fill ?? '#F00' })] }));
}
function ArrowScrollRight({ fill, stroke, customColor_1, width, height, strokeWidth }) {
    return (jsxRuntime.jsx("svg", { width: width ?? '18', height: height ?? '34', viewBox: "0 0 18 34", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M1 1L17 17L1 33", stroke: fill ? fill : '#000000', strokeWidth: strokeWidth ? strokeWidth : '2', strokeLinecap: "round", strokeLinejoin: "round" }) }));
}
function ArrowScrollLeft({ fill, stroke, customColor_1, width, height }) {
    return (jsxRuntime.jsx("svg", { width: width ?? '18', height: height ?? '34', viewBox: "0 0 18 34", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M17 33L1 17L17 1", stroke: fill ?? 'black', strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }));
}
function Bullseye({ fill, stroke, customColor_1, width, height }) {
    return (jsxRuntime.jsx("svg", { width: width ? width : '26', height: height ? height : '26', viewBox: "0 0 26 26", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M25.1656 9.03042C26.0559 11.7655 25.9989 14.7207 25.0038 17.4194C24.0087 20.1181 22.1336 22.4029 19.6809 23.9054C17.2282 25.4078 14.3409 26.0402 11.4847 25.7007C8.62851 25.3611 5.96997 24.0693 3.9379 22.0336C1.90584 19.998 0.618717 17.3372 0.284157 14.4804C-0.0504026 11.6236 0.587103 8.73744 2.09384 6.28736C3.60059 3.83729 5.88871 1.96619 8.58916 0.975872C11.2896 -0.0144479 14.2449 -0.0662496 16.9784 0.828824L15.3016 2.50402C15.2088 2.59522 15.1256 2.69602 15.0488 2.80002C12.8601 2.35827 10.5874 2.63262 8.56675 3.5825C6.54609 4.53239 4.88477 6.10737 3.8285 8.07451C2.77224 10.0417 2.3771 12.2965 2.70154 14.5056C3.02598 16.7147 4.05276 18.7608 5.63004 20.3411C7.20731 21.9215 9.25132 22.9523 11.4598 23.2811C13.6682 23.6098 15.9239 23.2191 17.8931 22.1667C19.8623 21.1143 21.4405 19.4561 22.3944 17.4373C23.3482 15.4185 23.6271 13.1463 23.1896 10.9568C23.2991 10.8792 23.4018 10.7925 23.4968 10.6976L25.164 9.03042H25.1656ZM20.8376 11.4C21.1811 13.0851 20.9725 14.836 20.2427 16.3931C19.5128 17.9503 18.3006 19.2308 16.7858 20.0449C15.271 20.8589 13.5342 21.1632 11.8328 20.9126C10.1315 20.6619 8.55622 19.8697 7.34051 18.6534C6.12481 17.4371 5.33341 15.8614 5.08365 14.1599C4.83388 12.4584 5.13904 10.7218 5.95388 9.20736C6.76872 7.69296 8.04988 6.48144 9.60741 5.75241C11.1649 5.02338 12.9159 4.81566 14.6008 5.16002V7.63362C13.4067 7.27714 12.1277 7.32917 10.9665 7.78147C9.80522 8.23377 8.82803 9.0605 8.18959 10.1308C7.55116 11.201 7.28796 12.4537 7.44168 13.6904C7.59541 14.9271 8.15726 16.0772 9.03828 16.9586C9.9193 17.84 11.0692 18.4023 12.3058 18.5566C13.5424 18.7108 14.7952 18.4482 15.8657 17.8102C16.9363 17.1722 17.7634 16.1953 18.2162 15.0343C18.669 13.8732 18.7216 12.5943 18.3656 11.4H20.8376ZM12.9976 15.4C13.3657 15.4002 13.7288 15.3157 14.059 15.1532C14.3893 14.9906 14.6776 14.7542 14.9019 14.4624C15.1262 14.1705 15.2803 13.831 15.3524 13.47C15.4245 13.1091 15.4126 12.7364 15.3176 12.3808L17.8488 9.84802L17.8968 9.80002H21.8008C21.9059 9.80021 22.0101 9.77968 22.1073 9.73959C22.2044 9.69951 22.2928 9.64067 22.3672 9.56642L25.5672 6.36642C25.6794 6.25454 25.7558 6.11186 25.7868 5.95649C25.8178 5.80112 25.8019 5.64004 25.7413 5.49368C25.6806 5.34732 25.5778 5.22228 25.446 5.13439C25.3142 5.0465 25.1592 4.99974 25.0008 5.00002H21.0008V1.00002C21.0008 0.84192 20.9539 0.687371 20.8661 0.555891C20.7783 0.424412 20.6535 0.321899 20.5074 0.261296C20.3614 0.200694 20.2007 0.18472 20.0456 0.21539C19.8905 0.246061 19.748 0.322002 19.636 0.433624L16.436 3.63362C16.3615 3.70792 16.3023 3.7962 16.262 3.89339C16.2216 3.99058 16.2008 4.09478 16.2008 4.20002V8.10402C16.1844 8.11958 16.1684 8.13558 16.1528 8.15202L13.6216 10.68C13.2657 10.5845 12.8926 10.5722 12.5312 10.644C12.1698 10.7158 11.8297 10.8698 11.5374 11.0941C11.245 11.3184 11.0082 11.607 10.8452 11.9375C10.6823 12.268 10.5975 12.6315 10.5976 13C10.5976 13.6365 10.8505 14.247 11.3005 14.6971C11.7506 15.1472 12.3611 15.4 12.9976 15.4Z", fill: "#222222" }) }));
}
function TrashIcon({ fill, stroke, customColor_1, width, height }) {
    return (jsxRuntime.jsx("svg", { width: width ?? '14', height: height ?? '20', viewBox: "0 0 14 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M3.66602 5.00002V3.33335C3.66602 2.89133 3.84161 2.4674 4.15417 2.15484C4.46673 1.84228 4.89066 1.66669 5.33268 1.66669H8.66602C9.10804 1.66669 9.53197 1.84228 9.84453 2.15484C10.1571 2.4674 10.3327 2.89133 10.3327 3.33335V5.00002M12.8327 5.00002V16.6667C12.8327 17.1087 12.6571 17.5326 12.3445 17.8452C12.032 18.1578 11.608 18.3334 11.166 18.3334H2.83268C2.39065 18.3334 1.96673 18.1578 1.65417 17.8452C1.34161 17.5326 1.16602 17.1087 1.16602 16.6667V5.00002H12.8327Z", stroke: fill ? fill : '#0645AD', strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }));
}
function SearchIcon({ fill, stroke, customColor_1, width, height }) {
    return (jsxRuntime.jsx("svg", { width: width ? width : '28', height: height ? height : '20', viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.2 8.6C1.2 4.51309 4.51309 1.2 8.6 1.2C12.6869 1.2 16 4.51309 16 8.6C16 10.6044 15.2031 12.4227 13.9088 13.7553C13.879 13.7758 13.8507 13.7993 13.8242 13.8258C13.7977 13.8522 13.7743 13.8805 13.7538 13.9102C12.4214 15.2037 10.6037 16 8.6 16C4.51309 16 1.2 12.6869 1.2 8.6ZM14.2413 15.0914C12.7312 16.4048 10.7585 17.2 8.6 17.2C3.85035 17.2 0 13.3496 0 8.6C0 3.85035 3.85035 0 8.6 0C13.3496 0 17.2 3.85035 17.2 8.6C17.2 10.7593 16.4042 12.7327 15.0899 14.243L19.0227 18.1758C19.257 18.4101 19.257 18.79 19.0227 19.0243C18.7884 19.2586 18.4085 19.2586 18.1742 19.0243L14.2413 15.0914Z", fill: fill ?? 'black' }) }));
}
function CloseIcon({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '12', height: height ? height : '12', viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M11.3334 0.666687L0.666748 11.3334", stroke: fill ? fill : '#222222', "stroke-width": "1.2", "stroke-linecap": "round", "stroke-linejoin": "round" }), jsxRuntime.jsx("path", { d: "M0.666748 0.666687L11.3334 11.3334", stroke: fill ? fill : '#222222', "stroke-width": "1.2", "stroke-linecap": "round", "stroke-linejoin": "round" })] }));
}
function AddIcon({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '17', height: height ? height : '16', viewBox: "0 0 17 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M8.16992 1V15", stroke: fill ? fill : '#0645AD', strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M1.16992 8H15.1699", stroke: fill ? fill : '#0645AD', strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })] }));
}
function OpenedEye({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '32', height: height ? height : '32', viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M5.33337 16C5.33337 16 9.21216 8 16 8C22.7879 8 26.6667 16 26.6667 16C26.6667 16 22.7879 24 16 24C9.21216 24 5.33337 16 5.33337 16Z", stroke: fill ? fill : '#0645AD', strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M16 18.6663C17.4728 18.6663 18.6667 17.4724 18.6667 15.9997C18.6667 14.5269 17.4728 13.333 16 13.333C14.5273 13.333 13.3334 14.5269 13.3334 15.9997C13.3334 17.4724 14.5273 18.6663 16 18.6663Z", stroke: fill ? fill : '#0645AD', strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })] }));
}
function PeopleIcon({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '28', height: height ? height : '28', viewBox: "0 0 28 28", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M15.5367 18.3986C15.3803 18.5237 15.2967 18.7186 15.3137 18.9181C15.3307 19.1176 15.4461 19.2955 15.6214 19.3923L21.2219 22.4851L21.285 22.5272C21.3293 22.5568 21.3775 22.5803 21.4281 22.5972C21.428 22.5971 21.4306 22.598 21.436 22.6002C21.4414 22.6024 21.4488 22.6056 21.4585 22.6101C21.478 22.6193 21.5037 22.6323 21.5362 22.6503C21.6154 22.6944 21.7095 22.7481 21.819 22.8119C21.8988 22.8585 21.9835 22.9179 22.0728 22.9924C22.1661 23.0701 22.2427 23.1437 22.3047 23.2125C22.3458 23.2582 22.3833 23.3142 22.4157 23.3843C22.4422 23.4417 22.4444 23.4726 22.4444 23.4825V25.7482C22.4444 26.0206 22.3569 26.2222 22.1793 26.3942C21.9913 26.5763 21.7861 26.6587 21.5339 26.6587H2.17724C1.92499 26.6587 1.71979 26.5763 1.53178 26.3942C1.35426 26.2222 1.26675 26.0206 1.26675 25.7482V23.4825C1.26675 23.4815 1.2688 23.3777 1.49572 23.1659C1.76764 22.9121 1.94776 22.7765 2.04904 22.7203C2.21282 22.6293 2.34438 22.5592 2.44557 22.5087C2.45135 22.5058 2.45708 22.5028 2.46276 22.4997L8.25297 19.3668C8.42969 19.2712 8.54681 19.0935 8.56499 18.8934C8.58317 18.6933 8.49998 18.4974 8.34338 18.3715C7.49188 17.687 6.84229 16.7418 6.40751 15.507C5.9566 14.2264 5.74227 13.1114 5.74227 12.1538V8.3776C5.74227 7.99893 5.84022 7.58426 6.06035 7.12769C6.27957 6.67302 6.58672 6.24878 6.98862 5.85525C7.40443 5.4481 7.87447 5.07769 8.40036 4.74463C8.91181 4.42071 9.47775 4.16277 10.1008 3.97238C10.7213 3.78278 11.3149 3.69088 11.8835 3.69088C12.8628 3.69088 13.833 3.9306 14.8002 4.42282C15.7763 4.91959 16.5485 5.54257 17.1316 6.28628C17.7149 7.03019 17.9688 7.72406 17.9688 8.3776V12.1538C17.9688 13.2371 17.7723 14.3955 17.369 15.6321C16.9807 16.8229 16.3659 17.7352 15.5367 18.3986Z", stroke: "#222222", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M14 1.70204C14.4984 1.38217 15.0467 1.12965 15.6449 0.944465C16.243 0.75928 16.8245 0.666687 17.3894 0.666687C18.3531 0.666687 19.3001 0.906586 20.2305 1.38638C21.161 1.86618 21.9128 2.47645 22.486 3.21719C23.0592 3.95793 23.3458 4.69867 23.3458 5.43941V8.8485C23.3458 9.89227 23.1589 10.995 22.785 12.1566C22.4112 13.3182 21.8089 14.2357 20.9782 14.9091L25.9875 17.7121L26.0623 17.7626C26.1122 17.7795 26.1745 17.8089 26.2492 17.851C26.324 17.8931 26.4112 17.9436 26.5109 18.0025C26.6106 18.0615 26.7103 18.133 26.81 18.2172C26.9097 18.3014 26.9969 18.3855 27.0717 18.4697C27.1464 18.5539 27.2087 18.6507 27.2586 18.7601C27.3084 18.8695 27.3333 18.9748 27.3333 19.0758V21.1212C27.3333 21.5084 27.2004 21.8325 26.9346 22.0934C26.6687 22.3544 26.3531 22.4849 25.9875 22.4849", stroke: "#222222", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" })] }));
}
function Channel$3({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '24', height: height ? height : '24', viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M20.6982 6.27148H3.99915C3.30167 6.27148 2.73642 6.8363 2.73642 7.29402V17.7693C2.73642 18.3342 3.30184 18.7919 3.99915 18.7919H20.6982C21.3957 18.7919 21.9609 18.2271 21.9609 17.7693V7.29402C21.9609 6.72921 21.3955 6.27148 20.6982 6.27148V6.27148Z", stroke: "black", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M16.7383 20.7246H7.96194", stroke: fill ? fill : 'black', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M13.3498 6.23889L17.9463 2.51465", stroke: fill ? fill : 'black', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M12.0947 6.23864L6.66223 1.5", stroke: fill ? fill : 'black', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M10.4209 15.1768L14.5044 12.8545L10.4209 10.5322V15.1768Z", stroke: fill ? fill : 'black', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" })] }));
}
function Cam({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '24', height: height ? height : '24', viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M21.75 19C21.75 19.5304 21.5632 20.0391 21.2308 20.4142C20.8983 20.7893 20.4474 21 19.9773 21H4.02273C3.55257 21 3.10167 20.7893 2.76922 20.4142C2.43677 20.0391 2.25 19.5304 2.25 19V8C2.25 7.46957 2.43677 6.96086 2.76922 6.58579C3.10167 6.21071 3.55257 6 4.02273 6H7.56818L9.34091 3H14.6591L16.4318 6H19.9773C20.4474 6 20.8983 6.21071 21.2308 6.58579C21.5632 6.96086 21.75 7.46957 21.75 8V19Z", stroke: fill ? fill : 'black', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M12 17.25C14.0711 17.25 15.75 15.5711 15.75 13.5C15.75 11.4289 14.0711 9.75 12 9.75C9.92893 9.75 8.25 11.4289 8.25 13.5C8.25 15.5711 9.92893 17.25 12 17.25Z", stroke: fill ? fill : 'black', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" })] }));
}
function Content$3({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '24', height: height ? height : '24', viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20", stroke: fill ? fill : '#222222', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2V2Z", stroke: fill ? fill : '#222222', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" })] }));
}
function Certificate({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '24', height: height ? height : '24', viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z", stroke: fill ? fill : '#222222', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M8.968 15.0077L8 22L12 19.6974L16 22L15.032 15", stroke: fill ? fill : '#222222', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" })] }));
}
function Quiz({ fill, width, height }) {
    return (jsxRuntime.jsx("svg", { width: width ? width : '24', height: height ? height : '24', viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M17 3.0003C17.2626 2.73766 17.5744 2.52932 17.9176 2.38718C18.2608 2.24503 18.6286 2.17188 19 2.17188C19.3714 2.17187 19.7392 2.24503 20.0824 2.38718C20.4256 2.52932 20.7374 2.73766 21 3.0003C21.2626 3.26295 21.471 3.57475 21.6131 3.91791C21.7553 4.26107 21.8284 4.62887 21.8284 5.0003C21.8284 5.37174 21.7553 5.73953 21.6131 6.08269C21.471 6.42586 21.2626 6.73766 21 7.0003L7.5 20.5003L2 22.0003L3.5 16.5003L17 3.0003Z", stroke: fill ? fill : '#222222', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }) }));
}
function PodCast({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '24', height: height ? height : '24', viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M15.4486 17.828C16.8238 17.208 18.0129 16.2117 18.8713 14.9783C19.7516 13.7144 20.2553 12.2113 20.3298 10.6776C20.3998 9.21357 20.0735 7.74091 19.3903 6.4421C18.7377 5.20217 17.7633 4.13845 16.5895 3.36622C15.3851 2.57441 13.9792 2.11105 12.5384 2.01753C11.0756 1.92182 9.59964 2.21984 8.28788 2.8659C7.02433 3.48805 5.93601 4.43646 5.13232 5.58503C4.31112 6.76187 3.81844 8.14536 3.69142 9.5703C3.55565 11.1104 3.86442 12.6788 4.57172 14.056C5.25713 15.3894 6.31482 16.5271 7.5937 17.3211C7.90028 17.5125 8.22001 17.68 8.55064 17.8301", stroke: fill ? fill : 'black', strokeLinecap: "round" }), jsxRuntime.jsx("path", { d: "M15.6028 14.9871C16.459 14.3718 17.155 13.5566 17.5854 12.6104C18.0226 11.6509 18.1989 10.5869 18.0776 9.54519C17.8624 7.69494 16.7497 6.01796 15.0945 5.0738C13.3981 4.10536 11.2849 4.00541 9.49233 4.77839C7.76383 5.5247 6.45657 7.07066 6.03534 8.85864C5.55914 10.8844 6.22307 13.0567 7.77526 14.4916C7.96986 14.6716 8.17591 14.8359 8.39111 14.9914", stroke: fill ? fill : 'black', strokeLinecap: "round" }), jsxRuntime.jsx("path", { d: "M14.7794 10.1543C14.7733 8.9887 14.036 7.94023 12.9433 7.53824C11.8626 7.14028 10.5921 7.4837 9.86086 8.37257C9.1155 9.27761 9.00241 10.5847 9.61443 11.5927C10.2204 12.5927 11.4061 13.1058 12.5494 12.8816C13.6644 12.6634 14.5693 11.724 14.741 10.5988C14.7632 10.4513 14.7773 10.3039 14.7773 10.1544", stroke: fill ? fill : 'black' }), jsxRuntime.jsx("path", { d: "M12.1504 22.1975C13.0821 22.1894 13.8416 21.444 13.8437 20.5393C13.8458 20.1464 13.8437 19.7556 13.8437 19.3627C13.8437 18.3774 13.8644 17.3882 13.8437 16.4029C13.8333 15.9375 13.6154 15.4802 13.2461 15.18C13.0552 15.0269 12.8373 14.91 12.5987 14.8455C12.4077 14.7952 12.2148 14.7871 12.0176 14.7871C11.8267 14.7871 11.6379 14.7891 11.4511 14.8334C11.2104 14.8878 10.9863 15.0007 10.7933 15.1478C10.4136 15.4379 10.1833 15.8811 10.1563 16.3465C10.1355 16.6971 10.1542 17.0537 10.1542 17.4063V19.3264C10.1542 19.7294 10.1521 20.1323 10.1542 20.5353C10.1563 21.4177 10.8763 22.1632 11.7894 22.1974C11.9097 22.2015 12.0301 22.1995 12.1504 22.1995", stroke: fill ? fill : 'black' })] }));
}
function QuizSucessError({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '24', height: height ? height : '24', viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M17.3846 10.466V3.67407C17.3846 3.16518 17.0002 2.76953 16.5056 2.76953H2.87917C2.38462 2.76953 2 3.16529 2 3.67422V12.7205C2 13.2293 2.38446 13.625 2.87904 13.625H4.85699C5.10151 13.6239 5.31936 13.8692 5.29651 14.1197L4.98055 17.3849L8.50383 13.7594C8.58447 13.6755 8.69822 13.6252 8.81289 13.6252H11.2306", stroke: fill ? fill : '#222222', strokeWidth: "1.2" }), jsxRuntime.jsx("path", { d: "M21.3528 10.4879L11.869 10.4619C11.5151 10.4612 11.2305 10.7592 11.2305 11.1695V18.5648C11.2305 18.9751 11.5194 19.2696 11.8774 19.2723L16.8672 19.2983C16.9985 19.297 17.1297 19.3472 17.2284 19.4364L19.152 21.2311L19.026 19.9023C18.9979 19.5965 19.2645 19.2983 19.5636 19.2983H21.3528C21.7081 19.2983 21.9997 19.0009 21.9997 18.5906V11.1869C21.9997 10.7766 21.7096 10.4879 21.3528 10.4879Z", stroke: fill ? fill : '#222222', strokeWidth: "1.2" }), jsxRuntime.jsx("path", { d: "M18.5157 13.667L15.4854 16.6973", stroke: fill ? fill : '#222222', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M15.4854 13.667L18.5157 16.6973", stroke: fill ? fill : '#222222', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M12.7691 5.84668L8.53831 10.0774L6.61523 8.15437", stroke: fill ? fill : '#222222', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" })] }));
}
function MoreVertical({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '24', height: height ? height : '24', viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12Z", stroke: fill ? fill : 'black', strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5Z", stroke: fill ? fill : 'black', strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19Z", stroke: fill ? fill : 'black', strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })] }));
}
function MoreHorizontal({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '24', height: height ? height : '24', viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z", stroke: fill ? fill : 'black', strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z", stroke: fill ? fill : 'black', strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z", stroke: fill ? fill : 'black', strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })] }));
}
function UploadIcon({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '24', height: height ? height : '24', viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M19.0834 13.9824V17.1121C19.0834 17.5271 18.9185 17.9251 18.625 18.2186C18.3316 18.512 17.9336 18.6769 17.5185 18.6769H6.56482C6.1498 18.6769 5.75178 18.512 5.45832 18.2186C5.16486 17.9251 5 17.5271 5 17.1121V13.9824", stroke: fill ? fill : '#0645AD', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M16.4062 8L11.9063 4L7.40625 8", stroke: fill ? fill : '#0645AD', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M11.9063 4L11.9062 15", stroke: fill ? fill : '#0645AD', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" })] }));
}
function Video$1({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '30', height: height ? height : '30', viewBox: "0 0 30 30", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M15.2865 28.3334C22.6503 28.3334 28.6198 22.3639 28.6198 15.0001C28.6198 7.63628 22.6503 1.66675 15.2865 1.66675C7.92266 1.66675 1.95312 7.63628 1.95312 15.0001C1.95312 22.3639 7.92266 28.3334 15.2865 28.3334Z", stroke: fill ? fill : '#FF4D0D', strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M11.9531 10L20.2865 15L11.9531 20V10Z", stroke: fill ? fill : '#FF4D0D', strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })] }));
}
function StarRating({ fill, width, height, fillOpacity }) {
    return (jsxRuntime.jsx("svg", { width: width ? width : '30', height: height ? height : '29', viewBox: "0 0 30 29", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M14.1058 0.785773C14.4745 0.0494095 15.5255 0.0494113 15.8942 0.785775L19.7099 8.40633C19.8566 8.69918 20.1373 8.90167 20.4615 8.94838L28.9722 10.1747C29.7966 10.2935 30.123 11.309 29.5222 11.8858L23.3838 17.7797C23.1439 18.0101 23.0342 18.3448 23.0912 18.6725L24.5422 27.0121C24.684 27.8272 23.8312 28.4521 23.0967 28.0713L15.4603 24.1124C15.1717 23.9628 14.8283 23.9628 14.5397 24.1124L6.9033 28.0713C6.16884 28.4521 5.31605 27.8272 5.45785 27.0122L6.9088 18.6725C6.96581 18.3448 6.85614 18.0101 6.61619 17.7797L0.477778 11.8858C-0.122994 11.309 0.203398 10.2935 1.02776 10.1747L9.53853 8.94838C9.86269 8.90167 10.1434 8.69918 10.2901 8.40633L14.1058 0.785773Z", fill: fill ? fill : '#FFC200', fillOpacity: fillOpacity ? fillOpacity : '1' }) }));
}
function WhatAppBordered({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("g", { clipPath: "url(#clip0_891_1728)", children: jsxRuntime.jsx("path", { d: "M12.0011 2C10.2643 1.99987 8.55742 2.45205 7.0485 3.31201C5.53959 4.17198 4.28067 5.41008 3.39568 6.90443C2.51069 8.39877 2.03015 10.0978 2.00137 11.8343C1.9726 13.5708 2.39658 15.2848 3.23157 16.8077L2.41423 19.6923C2.33799 19.9552 2.3337 20.2337 2.40182 20.4987C2.46995 20.7638 2.60798 21.0057 2.80151 21.1993C2.99505 21.3928 3.23698 21.5308 3.50207 21.5989C3.76715 21.6671 4.04566 21.6628 4.30852 21.5865L7.19323 20.7692C8.53008 21.5019 10.0168 21.9193 11.5396 21.9894C13.0625 22.0595 14.5812 21.7806 15.9798 21.1739C17.3783 20.5671 18.6196 19.6487 19.6088 18.4888C20.5981 17.3289 21.309 15.9581 21.6872 14.4814C22.0655 13.0046 22.1012 11.4609 21.7914 9.96827C21.4817 8.47563 20.8348 7.07356 19.9002 5.86922C18.9655 4.66488 17.7679 3.69016 16.3989 3.01955C15.0298 2.34895 13.5256 2.00021 12.0011 2ZM12.0011 20.4615C10.4821 20.4601 8.99125 20.0517 7.68363 19.2788C7.56296 19.2116 7.42752 19.1752 7.28939 19.1731C7.2179 19.1732 7.14675 19.1829 7.07784 19.2019L3.88543 20.1154L4.79892 16.9231C4.82702 16.8221 4.8347 16.7165 4.82149 16.6124C4.80828 16.5084 4.77446 16.4081 4.722 16.3173C3.76943 14.7117 3.37461 12.8361 3.59905 10.9828C3.82349 9.12943 4.65458 7.40232 5.96287 6.07048C7.27116 4.73865 8.98319 3.87685 10.8323 3.61934C12.6814 3.36183 14.5638 3.72306 16.1862 4.64676C17.8086 5.57046 19.08 7.00477 19.8023 8.72629C20.5246 10.4478 20.6573 12.3599 20.1797 14.1646C19.7021 15.9694 18.641 17.5656 17.1617 18.7045C15.6825 19.8434 13.868 20.4612 12.0011 20.4615ZM17.0493 13.4519L15.0781 12.3269C14.842 12.1911 14.5738 12.1212 14.3014 12.1245C14.029 12.1279 13.7626 12.2045 13.53 12.3462L12.3857 13.0288C11.802 12.6856 11.3155 12.1991 10.9722 11.6154L11.6549 10.4712C11.7966 10.2385 11.8731 9.9721 11.8765 9.69975C11.8799 9.4274 11.81 9.15915 11.6741 8.92308L10.5491 6.95192C10.424 6.73328 10.2435 6.5515 10.0257 6.42489C9.8079 6.29827 9.56059 6.23132 9.30868 6.23077C8.39226 6.23077 7.51323 6.59414 6.86432 7.24123C6.21541 7.88831 5.84958 8.7663 5.84703 9.68269C5.84703 11.9277 6.73823 14.0809 8.32485 15.6693C9.91147 17.2577 12.0637 18.1513 14.3088 18.1538H14.3185C15.2349 18.1513 16.1129 17.7855 16.76 17.1366C17.4071 16.4877 17.7705 15.6087 17.7705 14.6923C17.7699 14.4404 17.703 14.1931 17.5764 13.9753C17.4497 13.7576 17.268 13.577 17.0493 13.4519ZM14.3185 16.6154C13.4077 16.6166 12.5056 16.4382 11.6638 16.0902C10.8221 15.7423 10.0574 15.2317 9.41332 14.5877C8.76929 13.9437 8.25866 13.1789 7.9107 12.3372C7.56274 11.4955 7.38428 10.5935 7.38554 9.68269C7.38539 9.18343 7.58038 8.70388 7.9289 8.34639C8.27742 7.9889 8.75187 7.78177 9.25099 7.76923L10.3376 9.68269L9.43368 11.1827C9.37112 11.2897 9.33499 11.41 9.3283 11.5338C9.32161 11.6576 9.34456 11.7811 9.39522 11.8942C9.93114 13.1033 10.8977 14.0699 12.1068 14.6058C12.22 14.6564 12.3435 14.6794 12.4673 14.6727C12.591 14.666 12.7114 14.6299 12.8184 14.5673L14.3185 13.6635L16.232 14.75C16.2194 15.2491 16.0123 15.7235 15.6548 16.072C15.2973 16.4206 14.8177 16.6155 14.3185 16.6154Z", fill: "white" }) }), jsxRuntime.jsx("defs", { children: jsxRuntime.jsx("clipPath", { id: "clip0_891_1728", children: jsxRuntime.jsx("rect", { width: "24", height: "24", fill: "white" }) }) })] }));
}
function MailBordered({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M22 6L12 13L2 6", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })] }));
}
function MessageCheckLine({ fill, width, height }) {
    return (jsxRuntime.jsx("svg", { width: "18", height: "13", viewBox: "0 0 18 13", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M17 1L6 12L1 7", stroke: "#FF4D0D", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }) }));
}
function Viewer({ fill }) {
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M4 12C4 12 6.90909 6 12 6C17.0909 6 20 12 20 12C20 12 17.0909 18 12 18C6.90909 18 4 12 4 12Z", stroke: fill ? fill : '#ff0000', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z", stroke: fill ? fill : '#ff0000', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" })] }) }));
}
function IconNotification({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '24', height: height ? height : '24', viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M18.2843 18.389H5.71573C5.09953 18.389 4.6 17.8895 4.6 17.2733C4.6 17.0869 4.6467 16.9034 4.73583 16.7397L4.20888 16.4528L4.73583 16.7397L5.28347 15.7339C5.49118 15.3524 5.6 14.925 5.6 14.4906V10.9998C5.6 7.4652 8.46538 4.59982 12 4.59982C15.5346 4.59982 18.4 7.4652 18.4 10.9998V14.4906C18.4 14.925 18.5088 15.3524 18.7165 15.7339L19.2642 16.7397C19.3533 16.9034 19.4 17.0869 19.4 17.2733C19.4 17.8895 18.9005 18.389 18.2843 18.389Z", stroke: fill ? fill : '#FFD600', strokeWidth: "1.2" }), jsxRuntime.jsx("path", { d: "M10 4.99982L10 3.99982C10 2.89526 10.8954 1.99982 12 1.99982V1.99982C13.1046 1.99982 14 2.89526 14 3.99982V4.99982", stroke: fill ? fill : '#FFD600', strokeWidth: "1.2" }), jsxRuntime.jsx("path", { d: "M9 18.9998V18.9998C9 20.6567 10.3431 21.9998 12 21.9998V21.9998C13.6569 21.9998 15 20.6567 15 18.9998V18.9998", stroke: fill ? fill : '#FFD600', strokeWidth: "1.2" })] }));
}
function LinkedinIconMentor() {
    return (jsxRuntime.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("rect", { width: "16", height: "16", rx: "2", fill: "#0274B3" }), jsxRuntime.jsx("path", { d: "M10.6673 6C11.5514 6 12.3992 6.35659 13.0243 6.99133C13.6495 7.62607 14.0007 8.48696 14.0007 9.38462V13.3333H11.7784V9.38462C11.7784 9.0854 11.6614 8.79843 11.453 8.58685C11.2446 8.37527 10.962 8.25641 10.6673 8.25641C10.3726 8.25641 10.09 8.37527 9.88164 8.58685C9.67327 8.79843 9.55621 9.0854 9.55621 9.38462V13.3333H7.33398V9.38462C7.33398 8.48696 7.68517 7.62607 8.3103 6.99133C8.93542 6.35659 9.78326 6 10.6673 6Z", fill: "white" }), jsxRuntime.jsx("path", { d: "M5.33268 6.66699H2.66602V13.3337H5.33268V6.66699Z", fill: "white" }), jsxRuntime.jsx("path", { d: "M3.99935 5.33366C4.73573 5.33366 5.33268 4.73671 5.33268 4.00033C5.33268 3.26395 4.73573 2.66699 3.99935 2.66699C3.26297 2.66699 2.66602 3.26395 2.66602 4.00033C2.66602 4.73671 3.26297 5.33366 3.99935 5.33366Z", fill: "white" })] }));
}
function Plus({ fill, stroke, customColor_1, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M9.15381 1.15384V17.1538", stroke: "#0645AD", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M1.15381 9.15385H17.1538", stroke: "#0645AD", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" })] }));
}
function HomeLineIcon({ fill, width, height }) {
    return (jsxRuntime.jsx("svg", { width: width ? width : '20', height: height ? height : '22', viewBox: "0 0 20 22", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M1 8.67412V20C1 20.5523 1.44772 21 2 21H7.1875V13.2222H12.8125V21H18C18.5523 21 19 20.5523 19 20V8.67412C19 8.04041 18.6997 7.4442 18.1905 7.067L10.5952 1.44091C10.2416 1.17899 9.75837 1.17899 9.40477 1.44091L1.80954 7.067C1.30033 7.4442 1 8.04041 1 8.67412Z", stroke: fill ? fill : '#222222', strokeWidth: "1.2", strokeLinejoin: "round" }) }));
}
function HomeFilledIcon({ fill }) {
    return (jsxRuntime.jsx("svg", { width: "20", height: "22", viewBox: "0 0 20 22", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M1 8.67412V20C1 20.5523 1.44772 21 2 21H7.1875V13.2222H12.8125V21H18C18.5523 21 19 20.5523 19 20V8.67412C19 8.04041 18.6997 7.4442 18.1905 7.067L10.5952 1.44091C10.2416 1.17899 9.75837 1.17899 9.40477 1.44091L1.80954 7.067C1.30033 7.4442 1 8.04041 1 8.67412Z", fill: fill ? fill : '#FF4D0D', stroke: fill ? fill : '#FF4D0D', strokeWidth: "1.2", strokeLinejoin: "round" }) }));
}
function CalendarLineIcon({ fill }) {
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M18.2222 5H5.77778C4.79594 5 4 5.79594 4 6.77778V19.2222C4 20.2041 4.79594 21 5.77778 21H18.2222C19.2041 21 20 20.2041 20 19.2222V6.77778C20 5.79594 19.2041 5 18.2222 5Z", stroke: fill ? fill : '#222222', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M16 3V7", stroke: fill ? fill : '#222222', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M8 3V7", stroke: fill ? fill : '#222222', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M4 10H20", stroke: fill ? fill : '#222222', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" })] }) }));
}
function CalendarFilledIcon({ customColor_1, customColor_2 }) {
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M18.2222 5H5.77778C4.79594 5 4 5.79594 4 6.77778V19.2222C4 20.2041 4.79594 21 5.77778 21H18.2222C19.2041 21 20 20.2041 20 19.2222V6.77778C20 5.79594 19.2041 5 18.2222 5Z", fill: customColor_1 ? customColor_1 : '#FF4D0D', stroke: customColor_1 ? customColor_1 : '#FF4D0D', strokeWidth: "1.2", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M16 3V7", stroke: customColor_1 ? customColor_1 : '#FF4D0D', strokeWidth: "1.2", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M8 3V7", stroke: customColor_1 ? customColor_1 : '#FF4D0D', strokeWidth: "1.2", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M4 10H20", stroke: customColor_2 ? customColor_2 : 'white', strokeWidth: "1.2", strokeLinejoin: "round" })] }) }));
}
function PencilLineIcon({ fill }) {
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("svg", { width: "20", height: "22", viewBox: "0 0 20 22", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M11.7998 20.5668L11.6861 20.4865C11.6711 20.4759 10.181 19.4335 8.5095 19.4335C7.96257 19.4335 7.45172 19.5465 6.99139 19.769C6.23548 20.1354 5.33797 20.321 4.32348 20.321C2.6875 20.321 1.29206 19.8378 1.13842 19.7826L0.999805 19.733", stroke: fill ? fill : '#222222', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M14.9092 1.96308C15.1318 1.75291 15.3959 1.5862 15.6867 1.47245C15.9774 1.35871 16.2891 1.30017 16.6038 1.30017C16.9185 1.30017 17.2301 1.35871 17.5208 1.47245C17.8116 1.5862 18.0758 1.75291 18.2983 1.96308C18.5208 2.17324 18.6973 2.42275 18.8178 2.69734C18.9382 2.97194 19.0002 3.26625 19.0002 3.56347C19.0002 3.86069 18.9382 4.155 18.8178 4.4296C18.6973 4.7042 18.5208 4.9537 18.2983 5.16387L6.86017 15.9665L2.2002 17.1668L3.4711 12.7657L14.9092 1.96308Z", stroke: fill ? fill : '#222222', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" })] }) }));
}
function PencilFilledIcon({ fill }) {
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("svg", { width: "20", height: "22", viewBox: "0 0 20 22", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M11.7998 20.5668L11.6861 20.4865C11.6711 20.4759 10.181 19.4335 8.5095 19.4335C7.96257 19.4335 7.45172 19.5465 6.99139 19.769C6.23548 20.1354 5.33797 20.321 4.32348 20.321C2.6875 20.321 1.29206 19.8378 1.13842 19.7826L0.999805 19.733", stroke: fill ? fill : '#FF4D0D', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M14.9092 1.96308C15.1318 1.75291 15.3959 1.5862 15.6867 1.47245C15.9774 1.35871 16.2891 1.30017 16.6038 1.30017C16.9185 1.30017 17.2301 1.35871 17.5208 1.47245C17.8116 1.5862 18.0758 1.75291 18.2983 1.96308C18.5208 2.17324 18.6973 2.42275 18.8178 2.69734C18.9382 2.97194 19.0002 3.26625 19.0002 3.56347C19.0002 3.86069 18.9382 4.155 18.8178 4.4296C18.6973 4.7042 18.5208 4.9537 18.2983 5.16387L6.86017 15.9665L2.2002 17.1668L3.4711 12.7657L14.9092 1.96308Z", fill: fill ? fill : '#FF4D0D', stroke: fill ? fill : '#FF4D0D', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" })] }) }));
}
function LampLineIcon({ fill }) {
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx("svg", { width: "22", height: "22", viewBox: "0 0 22 22", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M8.46825 16.4167H13.5307M11 1.25V2.875M17.8943 4.10567L16.6875 5.3125M20.75 11H19.125M2.875 11H1.25M5.3125 5.3125L4.10567 4.10567M7.16933 14.8307C6.41194 14.0731 5.8962 13.1079 5.68731 12.0572C5.47842 11.0065 5.58577 9.9175 5.99579 8.92781C6.40581 7.93813 7.10008 7.09225 7.99081 6.49712C8.88155 5.90199 9.92875 5.58434 11 5.58434C12.0713 5.58434 13.1185 5.90199 14.0092 6.49712C14.8999 7.09225 15.5942 7.93813 16.0042 8.92781C16.4142 9.9175 16.5216 11.0065 16.3127 12.0572C16.1038 13.1079 15.5881 14.0731 14.8307 14.8307L14.237 15.4233C13.8976 15.7627 13.6284 16.1657 13.4447 16.6092C13.2611 17.0527 13.1666 17.5281 13.1667 18.0081V18.5833C13.1667 19.158 12.9384 19.7091 12.5321 20.1154C12.1257 20.5217 11.5746 20.75 11 20.75C10.4254 20.75 9.87426 20.5217 9.46794 20.1154C9.06161 19.7091 8.83333 19.158 8.83333 18.5833V18.0081C8.83333 17.0385 8.44767 16.1079 7.763 15.4233L7.16933 14.8307Z", stroke: fill ? fill : '#222222', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }));
}
function LampFilledIcon({ fill }) {
    return (jsxRuntime.jsxs("svg", { width: "22", height: "22", viewBox: "0 0 22 22", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M7.16933 14.8307C6.41194 14.0731 5.8962 13.1079 5.68731 12.0572C5.47842 11.0065 5.58577 9.91749 5.99579 8.92781C6.40581 7.93813 7.10008 7.09225 7.99081 6.49712C8.88155 5.90199 9.92875 5.58434 11 5.58434C12.0713 5.58434 13.1185 5.90199 14.0092 6.49712C14.8999 7.09225 15.5942 7.93813 16.0042 8.92781C16.4142 9.91749 16.5216 11.0065 16.3127 12.0572C16.1038 13.1079 15.5881 14.0731 14.8307 14.8307L14.237 15.4233C13.8976 15.7627 13.6284 16.1657 13.4447 16.6092C13.2611 17.0527 13.1666 17.5281 13.1667 18.0081V18.5833C13.1667 19.158 12.9384 19.7091 12.5321 20.1154C12.1257 20.5217 11.5746 20.75 11 20.75C10.4254 20.75 9.87426 20.5217 9.46794 20.1154C9.06161 19.7091 8.83333 19.158 8.83333 18.5833V18.0081C8.83333 17.0385 8.44767 16.1079 7.763 15.4233L7.16933 14.8307Z", fill: fill ? fill : '#FF4D0D' }), jsxRuntime.jsx("path", { d: "M8.46825 16.4167H13.5307M11 1.25V2.875M17.8943 4.10567L16.6875 5.3125M20.75 11H19.125M2.875 11H1.25M5.3125 5.3125L4.10567 4.10567M7.16933 14.8307C6.41194 14.0731 5.8962 13.1079 5.68731 12.0572C5.47842 11.0065 5.58577 9.91749 5.99579 8.92781C6.40581 7.93813 7.10008 7.09225 7.99081 6.49712C8.88155 5.90199 9.92875 5.58434 11 5.58434C12.0713 5.58434 13.1185 5.90199 14.0092 6.49712C14.8999 7.09225 15.5942 7.93813 16.0042 8.92781C16.4142 9.91749 16.5216 11.0065 16.3127 12.0572C16.1038 13.1079 15.5881 14.0731 14.8307 14.8307L14.237 15.4233C13.8976 15.7627 13.6284 16.1657 13.4447 16.6092C13.2611 17.0527 13.1666 17.5281 13.1667 18.0081V18.5833C13.1667 19.158 12.9384 19.7091 12.5321 20.1154C12.1257 20.5217 11.5746 20.75 11 20.75C10.4254 20.75 9.87426 20.5217 9.46794 20.1154C9.06161 19.7091 8.83333 19.158 8.83333 18.5833V18.0081C8.83333 17.0385 8.44767 16.1079 7.763 15.4233L7.16933 14.8307Z", stroke: fill ? fill : '#FF4D0D', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" })] }));
}
function MedalLineIcon({ fill }) {
    return (jsxRuntime.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z", stroke: fill ? fill : '#222222', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M8.968 15.0077L8 22L12 19.6974L16 22L15.032 15", stroke: fill ? fill : '#222222', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" })] }));
}
function MedalFilledIcon({ fill }) {
    return (jsxRuntime.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z", stroke: fill ? fill : '#FF4D0D', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M8.968 15.0077L8 22L12 19.6974L16 22L15.032 15", fill: fill ? fill : '#FF4D0D' }), jsxRuntime.jsx("path", { d: "M8.968 15.0077L8 22L12 19.6974L16 22L15.032 15", stroke: fill ? fill : '#FF4D0D', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" })] }));
}
function PlayLineIcon({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '20', height: height ? height : '20', viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z", stroke: fill ? fill : '#222222', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M7.75 6.625L13.375 10L7.75 13.375V6.625Z", stroke: fill ? fill : '#222222', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" })] }));
}
function PlayFilledIcon({ customColor_1, customColor_2, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '24', height: height ? height : '24', viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z", fill: customColor_1 ? customColor_1 : '#FF4D0D', stroke: customColor_1 ? customColor_1 : '#FF4D0D', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M10 9L15 12L10 15V9Z", fill: customColor_2 ? customColor_2 : 'white', stroke: customColor_2 ? customColor_2 : 'white', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" })] }));
}
function SiteIcon({ fill }) {
    return (jsxRuntime.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("g", { clipPath: "url(#clip0_1957_36176)", children: jsxRuntime.jsx("path", { d: "M11.9958 0C8.81434 0 5.76315 1.26428 3.5135 3.51472C1.26384 5.76516 0 8.8174 0 12C0 15.1826 1.26384 18.2348 3.5135 20.4853C5.76315 22.7357 8.81434 24 11.9958 24C15.1773 24 18.2285 22.7357 20.4782 20.4853C22.7278 18.2348 23.9917 15.1826 23.9917 12C23.9917 8.8174 22.7278 5.76516 20.4782 3.51472C18.2285 1.26428 15.1773 0 11.9958 0V0ZM1.47949 12.9067H4.82499C4.87831 14.12 5.04758 15.3253 5.33148 16.5067H2.45248C1.91561 15.3745 1.58606 14.1552 1.47949 12.9067ZM12.9022 5.70667V1.58667C14.1867 2.07497 15.2421 3.02616 15.8612 4.25333C16.1344 4.716 16.3756 5.19733 16.5809 5.69333L12.9022 5.70667ZM17.194 7.50667C17.5033 8.684 17.6872 9.89067 17.7405 11.1067H12.9022V7.50667H17.194ZM11.0895 1.58667V5.70667H7.41076C7.61637 5.21026 7.85689 4.72906 8.13051 4.26667C8.74692 3.03447 9.80272 2.07821 11.0895 1.58667ZM11.0895 7.50667V11.1067H6.26449C6.31781 9.89067 6.50174 8.684 6.81097 7.50667H11.0895ZM4.82499 11.0933H1.47949C1.58606 9.84479 1.91561 8.62549 2.45248 7.49333H5.33148C5.04704 8.67419 4.87742 9.87981 4.82499 11.0933ZM6.26449 12.9067H11.0895V16.5067H6.81097C6.50179 15.3294 6.3186 14.1226 6.26449 12.9067ZM11.1028 18.24V22.36C9.81835 21.8717 8.76288 20.9205 8.14384 19.6933C7.87022 19.2309 7.6297 18.7497 7.42409 18.2533L11.1028 18.24ZM12.9022 22.36V18.3067H16.5809C16.3753 18.8031 16.1348 19.2843 15.8612 19.7467C15.2421 20.9738 14.1867 21.925 12.9022 22.4133V22.36ZM12.9022 16.44V12.84H17.7272C17.6731 14.056 17.4899 15.2628 17.1807 16.44H12.9022ZM19.18 12.84H22.5255C22.4189 14.0885 22.0894 15.3078 21.5525 16.44H18.6602C18.9401 15.28 19.1094 14.0973 19.1667 12.9067L19.18 12.84ZM19.18 11.04C19.119 9.84841 18.9449 8.66532 18.6602 7.50667H21.5392C22.0763 8.64 22.4056 9.85867 22.5122 11.1067L19.18 11.04ZM20.5129 5.70667H18.127C17.6954 4.49373 17.0696 3.35897 16.2743 2.34667C17.9329 3.09144 19.3736 4.24807 20.4596 5.70667H20.5129ZM7.71732 2.34667C6.92202 3.35897 6.29632 4.49373 5.86463 5.70667H3.53211C4.61803 4.24807 6.05872 3.09144 7.71732 2.34667ZM3.51878 18.3467H5.86463C6.29632 19.5596 6.92202 20.6944 7.71732 21.7067C6.05413 20.9507 4.61299 19.7799 3.53211 18.3067L3.51878 18.3467ZM16.261 21.7067C17.0563 20.6944 17.682 19.5596 18.1137 18.3467H20.4596C19.367 19.7857 17.9269 20.9235 16.2743 21.6533L16.261 21.7067Z", fill: fill ? fill : 'white' }) }), jsxRuntime.jsx("defs", { children: jsxRuntime.jsx("clipPath", { id: "clip0_1957_36176", children: jsxRuntime.jsx("rect", { width: "23.9917", height: "24", fill: fill ? fill : 'white' }) }) })] }));
}
function LinkedinIcon({ fill, width, height }) {
    return (jsxRuntime.jsx("svg", { width: width ? width : '25', height: height ? height : '24', viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M24.0164 0H1.94404C1.41323 0 0.984375 0.429 0.984375 0.96V23.04C0.984375 23.571 1.41323 24 1.94404 24H24.0164C24.5472 24 24.976 23.571 24.976 23.04V0.96C24.976 0.429 24.5472 0 24.0164 0ZM8.1009 20.451H4.54114V8.997H8.1009V20.451ZM6.32252 7.431C5.91444 7.431 5.51553 7.30995 5.17622 7.08315C4.83692 6.85636 4.57246 6.534 4.4163 6.15686C4.26013 5.77971 4.21927 5.36471 4.29888 4.96433C4.3785 4.56396 4.575 4.19619 4.86356 3.90753C5.15211 3.61888 5.51976 3.4223 5.91999 3.34266C6.32023 3.26302 6.73509 3.30389 7.11211 3.46011C7.48912 3.61633 7.81136 3.88088 8.03808 4.2203C8.2648 4.55973 8.3858 4.95878 8.3858 5.367C8.38281 6.507 7.45913 7.431 6.32252 7.431ZM21.4283 20.451H17.8715V14.88C17.8715 13.551 17.8475 11.844 16.0212 11.844C14.1708 11.844 13.8859 13.29 13.8859 14.784V20.451H10.3321V8.997H13.7449V10.563H13.7929C14.2668 9.663 15.4274 8.712 17.1608 8.712C20.7655 8.712 21.4283 11.085 21.4283 14.169V20.451Z", fill: fill ? fill : 'white' }) }));
}
function Handshake({ fill }) {
    return (jsxRuntime.jsx("svg", { width: "42", height: "27", viewBox: "0 0 44 27", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M7 20H10.4398C11.6094 20 12.7421 20.4101 13.6407 21.1589L18.223 24.9775C19.6202 26.1419 21.7542 25.4393 22.1865 23.6726V23.6726C22.2766 23.3047 22.7311 23.1723 23.0046 23.4343L23.7266 24.1257C25.2549 25.5893 27.7968 24.7922 28.2157 22.718V22.718C28.2923 22.3386 28.734 22.1631 29.051 22.3851V22.3851C30.1638 23.1644 31.685 22.9976 32.5994 21.993L32.6508 21.9366C33.6221 20.8695 33.6183 19.2375 32.6419 18.175L24.0998 8.87932L25.8109 7.01725L21.6775 11.5153C20.6791 12.6018 18.9649 12.6018 17.9665 11.5153V11.5153C17.0806 10.5513 17.0805 9.06939 17.9664 8.10527L22.3887 3.29206M7 20V8H1V21C1 22.1046 1.89543 23 3 23H5C6.10457 23 7 22.1046 7 21V20ZM37 8H33.9768C32.5594 8 31.2086 7.39839 30.2603 6.34482L27.5574 3.34154C26.182 1.81333 23.7931 1.79046 22.3887 3.29206V3.29206M37 8V21C37 22.1046 37.8954 23 39 23H41C42.1046 23 43 22.1046 43 21V8H37ZM22.3887 3.29206V3.29206C20.8797 1.69538 18.4198 1.46739 16.6431 2.75955L11.5 6.5", stroke: 'currentColor', strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }));
}
function Mission({ fill }) {
    return (jsxRuntime.jsx("svg", { width: "42", height: "42", viewBox: "0 0 42 42", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M25.7128 35.0223L20.3345 29.5153M25.7128 35.0223L28.3745 40.5C29.7262 39.151 34.3099 32.8713 31.0608 29.5445M25.7128 35.0223L31.0608 29.5445M20.3345 29.5153L25.7128 24.0103L25.7395 23.9811M20.3345 29.5153L25.7395 23.9811M20.3345 29.5153L14.9295 26.7356C16.3022 25.3671 22.536 20.7011 25.7395 23.9811M31.0608 29.5445L31.0893 29.5153M31.0608 29.5445L35.8175 24.6761C37.8477 22.5967 39.2615 19.9714 39.8954 17.1038L40.5 14.3746L37.8346 14.9936C35.0339 15.6427 32.4699 17.0904 30.4391 19.1691L25.7395 23.9811M31.0608 29.5445L25.7395 23.9811M4.30969 23.6463C1.76405 27.7673 0.792564 31.0551 2.04352 32.3379C3.1576 33.4786 5.82111 32.8168 9.22607 30.8234M23.1292 4.37687C27.1539 1.77037 30.365 0.77565 31.6178 2.05652C33.3022 3.77926 30.9619 9.13047 26.1919 15.2506M8.15403 26.8059C5.3023 24.8592 3.30034 19.1765 3.5777 15.9926C3.85506 12.8087 5.21649 9.82594 7.42401 7.56564C9.63153 5.30535 12.5447 3.91137 15.6542 3.62737C18.7638 3.34338 23.3632 4.41991 26.215 7.33981", stroke: 'currentColor', strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }));
}
function Lamp({ fill }) {
    return (jsxRuntime.jsx("svg", { width: "42", height: "42", viewBox: "0 0 42 42", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M15.9365 31.8333H26.0613M21 1.5V4.75M34.7887 7.21133L32.375 9.625M40.5 21H37.25M4.75 21H1.5M9.625 9.625L7.21133 7.21133M13.3387 28.6613C11.8239 27.1462 10.7924 25.2158 10.3746 23.1144C9.95684 21.0131 10.1715 18.835 10.9916 16.8556C11.8116 14.8763 13.2002 13.1845 14.9816 11.9942C16.7631 10.804 18.8575 10.1687 21 10.1687C23.1425 10.1687 25.2369 10.804 27.0184 11.9942C28.7999 13.1845 30.1884 14.8763 31.0084 16.8556C31.8285 18.835 32.0432 21.0131 31.6254 23.1144C31.2076 25.2158 30.1761 27.1462 28.6613 28.6613L27.474 29.8465C26.7952 30.5254 26.2568 31.3314 25.8895 32.2184C25.5222 33.1054 25.3332 34.0561 25.3333 35.0162V36.1667C25.3333 37.3159 24.8768 38.4181 24.0641 39.2308C23.2515 40.0435 22.1493 40.5 21 40.5C19.8507 40.5 18.7485 40.0435 17.9359 39.2308C17.1232 38.4181 16.6667 37.3159 16.6667 36.1667V35.0162C16.6667 33.077 15.8953 31.2158 14.526 29.8465L13.3387 28.6613Z", stroke: 'currentColor', strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }));
}
function InstagramIcon({ fill, width, height }) {
    return (jsxRuntime.jsx("svg", { width: width ? width : '25', height: height ? height : '24', viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M12.9594 5.84273C9.55335 5.84273 6.8045 8.59254 6.8045 11.9998C6.8045 15.407 9.55335 18.1568 12.9594 18.1568C16.3655 18.1568 19.1143 15.407 19.1143 11.9998C19.1143 8.59254 16.3655 5.84273 12.9594 5.84273ZM12.9594 16.0014C10.7567 16.0014 8.95917 14.2032 8.95917 11.9998C8.95917 9.79633 10.7567 7.99815 12.9594 7.99815C15.1621 7.99815 16.9596 9.79633 16.9596 11.9998C16.9596 14.2032 15.1621 16.0014 12.9594 16.0014ZM19.3664 4.15562C18.5711 4.15562 17.9289 4.79804 17.9289 5.59357C17.9289 6.38909 18.5711 7.03151 19.3664 7.03151C20.1616 7.03151 20.8038 6.39209 20.8038 5.59357C20.8041 5.40467 20.7671 5.21758 20.6949 5.04301C20.6227 4.86844 20.5169 4.70983 20.3833 4.57626C20.2498 4.44269 20.0913 4.33678 19.9168 4.2646C19.7423 4.19242 19.5552 4.15539 19.3664 4.15562ZM24.9571 11.9998C24.9571 10.3427 24.9721 8.70061 24.8791 7.04652C24.7861 5.12526 24.3479 3.42014 22.9435 2.01522C21.5361 0.607291 19.8345 0.172005 17.9139 0.0789442C16.2574 -0.014117 14.6159 0.000892919 12.9624 0.000892919C11.3059 0.000892919 9.66439 -0.014117 8.01087 0.0789442C6.09028 0.172005 4.38575 0.610293 2.98131 2.01522C1.57388 3.42314 1.13874 5.12526 1.04571 7.04652C0.952685 8.70361 0.967689 10.3457 0.967689 11.9998C0.967689 13.6539 0.952685 15.2989 1.04571 16.953C1.13874 18.8743 1.57688 20.5794 2.98131 21.9843C4.38875 23.3923 6.09028 23.8275 8.01087 23.9206C9.66739 24.0137 11.3089 23.9987 12.9624 23.9987C14.6189 23.9987 16.2604 24.0137 17.9139 23.9206C19.8345 23.8275 21.5391 23.3893 22.9435 21.9843C24.3509 20.5764 24.7861 18.8743 24.8791 16.953C24.9751 15.2989 24.9571 13.6569 24.9571 11.9998ZM22.3163 19.0784C22.0972 19.6248 21.8332 20.0331 21.41 20.4533C20.9869 20.8766 20.5818 21.1408 20.0356 21.3599C18.4571 21.9873 14.7089 21.8462 12.9594 21.8462C11.2099 21.8462 7.4587 21.9873 5.88021 21.3629C5.33404 21.1438 4.92592 20.8796 4.50579 20.4563C4.08266 20.0331 3.81857 19.6278 3.59951 19.0814C2.97531 17.4994 3.11636 13.7499 3.11636 11.9998C3.11636 10.2496 2.97531 6.49716 3.59951 4.91812C3.81857 4.37176 4.08266 3.9635 4.50579 3.54322C4.92892 3.12294 5.33404 2.85577 5.88021 2.63662C7.4587 2.01221 11.2099 2.15331 12.9594 2.15331C14.7089 2.15331 18.4601 2.01221 20.0386 2.63662C20.5848 2.85577 20.9929 3.11994 21.413 3.54322C21.8362 3.9665 22.1002 4.37176 22.3193 4.91812C22.9435 6.49716 22.8025 10.2496 22.8025 11.9998C22.8025 13.7499 22.9435 17.4994 22.3163 19.0784Z", fill: fill ? fill : 'white' }) }));
}
function YoutubeIcon({ fill, width, height }) {
    return (jsxRuntime.jsx("svg", { width: width ? width : '25', height: height ? height : '17', viewBox: "0 0 25 17", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M24.4411 2.62768C24.3046 2.11885 24.0368 1.65483 23.6646 1.28206C23.2924 0.909287 22.8289 0.640836 22.3205 0.503572C20.4488 1.02179e-07 12.946 0 12.946 0C12.946 0 5.44328 -1.02179e-07 3.57161 0.500893C3.06291 0.637712 2.59915 0.906014 2.22691 1.27886C1.85467 1.6517 1.58704 2.11595 1.45091 2.625C0.950195 4.5 0.950195 8.41071 0.950195 8.41071C0.950195 8.41071 0.950195 12.3214 1.45091 14.1938C1.72671 15.2277 2.54071 16.042 3.57161 16.3179C5.44328 16.8214 12.946 16.8214 12.946 16.8214C12.946 16.8214 20.4488 16.8214 22.3205 16.3179C23.354 16.042 24.1653 15.2277 24.4411 14.1938C24.9419 12.3214 24.9419 8.41071 24.9419 8.41071C24.9419 8.41071 24.9419 4.5 24.4411 2.62768ZM10.5629 12V4.82143L16.7751 8.38393L10.5629 12Z", fill: fill ? fill : 'white' }) }));
}
function SpotifyIcon({ fill, width, height }) {
    return (jsxRuntime.jsx("svg", { width: width ? width : '25', height: height ? height : '24', viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M20.007 10.68C16.1683 8.4 9.75053 8.16 6.0918 9.3C5.49201 9.48 4.89222 9.12 4.71228 8.58C4.53234 7.98 4.89222 7.38 5.43203 7.2C9.69055 5.94 16.7081 6.18 21.1466 8.82C21.6864 9.12 21.8663 9.84 21.5664 10.38C21.2665 10.8 20.5468 10.98 20.007 10.68ZM19.887 14.04C19.5871 14.46 19.0473 14.64 18.6274 14.34C15.3886 12.36 10.4703 11.76 6.69159 12.96C6.21176 13.08 5.67195 12.84 5.55199 12.36C5.43203 11.88 5.67195 11.34 6.15178 11.22C10.5303 9.9 15.9284 10.56 19.6471 12.84C20.007 13.02 20.1869 13.62 19.887 14.04ZM18.4475 17.34C18.2076 17.7 17.7877 17.82 17.4279 17.58C14.6088 15.84 11.0701 15.48 6.87153 16.44C6.45168 16.56 6.0918 16.26 5.97184 15.9C5.85189 15.48 6.15178 15.12 6.51166 15C11.0701 13.98 15.0287 14.4 18.1476 16.32C18.5675 16.5 18.6274 16.98 18.4475 17.34ZM12.9294 0C11.3541 0 9.79422 0.310389 8.33882 0.913446C6.88342 1.5165 5.56101 2.40042 4.44709 3.51472C2.19744 5.76516 0.933594 8.8174 0.933594 12C0.933594 15.1826 2.19744 18.2348 4.44709 20.4853C5.56101 21.5996 6.88342 22.4835 8.33882 23.0866C9.79422 23.6896 11.3541 24 12.9294 24C16.1109 24 19.1621 22.7357 21.4118 20.4853C23.6614 18.2348 24.9253 15.1826 24.9253 12C24.9253 10.4241 24.615 8.86371 24.0121 7.4078C23.4093 5.95189 22.5257 4.62902 21.4118 3.51472C20.2978 2.40042 18.9754 1.5165 17.52 0.913446C16.0646 0.310389 14.5047 0 12.9294 0Z", fill: fill ? fill : 'white' }) }));
}
function PodCastIcon({ fill, width, height }) {
    return (jsxRuntime.jsx("svg", { width: width ? width : '25', height: height ? height : '23', viewBox: "0 0 25 23", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M18.6251 19.1429V22.8571H7.20053V19.1429C7.20053 17.5657 9.75964 16.2857 12.9128 16.2857C16.066 16.2857 18.6251 17.5657 18.6251 19.1429ZM12.9128 4.57143C14.8823 4.57143 16.7712 5.35408 18.1638 6.74721C19.5564 8.14033 20.3388 10.0298 20.3388 12C20.3388 13.4286 19.939 14.7657 19.2421 15.8971L17.4827 14.3314C17.8483 13.6343 18.0539 12.8343 18.0539 12C18.0539 9.14286 15.769 6.85714 12.9128 6.85714C10.0567 6.85714 7.77176 9.14286 7.77176 12C7.77176 12.8343 7.9774 13.6343 8.34299 14.3314L6.5836 15.8971C5.8867 14.7657 5.48684 13.4286 5.48684 12C5.48684 10.0298 6.26922 8.14033 7.66186 6.74721C9.0545 5.35408 10.9433 4.57143 12.9128 4.57143ZM12.9128 0C16.0943 0 19.1455 1.26428 21.3952 3.51472C23.6448 5.76515 24.9087 8.8174 24.9087 12C24.9087 14.6057 24.0747 17.0171 22.6694 18.9829L20.9557 17.44C22.0068 15.8857 22.6237 14.0114 22.6237 12C22.6237 9.42361 21.6006 6.95274 19.7795 5.13096C17.9583 3.30918 15.4883 2.28571 12.9128 2.28571C10.3373 2.28571 7.86733 3.30918 6.04618 5.13096C4.22503 6.95274 3.20192 9.42361 3.20192 12C3.20192 14.0114 3.81885 15.8857 4.86991 17.44L3.15622 18.9829C1.69784 16.9469 0.914658 14.5047 0.916997 12C0.916997 8.8174 2.18084 5.76515 4.4305 3.51472C6.68015 1.26428 9.73134 0 12.9128 0ZM12.9128 9.14286C13.6703 9.14286 14.3968 9.44388 14.9324 9.97969C15.4681 10.5155 15.769 11.2422 15.769 12C15.769 12.7578 15.4681 13.4845 14.9324 14.0203C14.3968 14.5561 13.6703 14.8571 12.9128 14.8571C12.1553 14.8571 11.4289 14.5561 10.8932 14.0203C10.3576 13.4845 10.0567 12.7578 10.0567 12C10.0567 11.2422 10.3576 10.5155 10.8932 9.97969C11.4289 9.44388 12.1553 9.14286 12.9128 9.14286Z", fill: fill ? fill : 'white' }) }));
}
function StarOutlined({ fill, width, height }) {
    return (jsxRuntime.jsx("svg", { width: width ? width : '24', height: height ? height : '24', viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M11.0948 2.92837C11.4547 2.16162 12.5453 2.16162 12.9052 2.92838L15.1725 7.75831C15.3141 8.05989 15.5965 8.27116 15.9258 8.32177L21.0777 9.1136C21.882 9.23721 22.2098 10.2184 21.6413 10.8006L17.8527 14.6808C17.6309 14.908 17.5302 15.227 17.5813 15.5404L18.4664 20.9672C18.6008 21.7911 17.7261 22.4073 16.9956 22.0033L12.4839 19.5084C12.1828 19.3419 11.8172 19.3419 11.5161 19.5084L7.00445 22.0033C6.27389 22.4073 5.39918 21.7911 5.53357 20.9672L6.41872 15.5404C6.46983 15.227 6.36909 14.908 6.14727 14.6808L2.3587 10.8006C1.79024 10.2184 2.11804 9.23721 2.92229 9.1136L8.07418 8.32177C8.40347 8.27116 8.68592 8.05989 8.82749 7.75831L11.0948 2.92837Z", stroke: fill ? fill : '#0645AD', strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }));
}
function TalkIcon({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '24', height: height ? height : '24', viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("circle", { cx: "8.21301", cy: "10.5532", r: "1.06049", fill: fill ? fill : '#0645AD' }), jsxRuntime.jsx("ellipse", { cx: "11.9025", cy: "10.5532", rx: "1.06049", ry: "1.06049", fill: fill ? fill : '#0645AD' }), jsxRuntime.jsx("circle", { cx: "15.9898", cy: "10.5537", r: "1.06049", fill: fill ? fill : '#0645AD' }), jsxRuntime.jsx("path", { d: "M14.256 17.7771L18.7107 22.2191V17.7771H20.1417C21.2958 17.7771 22.219 16.8517 22.219 15.6949V4.68231C22.219 3.52552 21.2958 2.6001 20.1417 2.6001H4.67728C3.52322 2.6001 2.59998 3.52552 2.59998 4.68231V15.6949C2.59998 16.8517 3.52322 17.7771 4.67728 17.7771H14.256Z", stroke: fill ? fill : '#0645AD', strokeWidth: "2", strokeLinejoin: "round" })] }));
}
function ThumbsUpIcon({ fill, width, height }) {
    return (jsxRuntime.jsx("svg", { width: width ? width : '22', height: height ? height : '20', viewBox: "0 0 22 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M5.63257 9.25C6.43892 9.25 7.16648 8.80416 7.6641 8.16967C8.13921 7.56387 8.69033 7.02052 9.3031 6.55398C10.055 5.98149 10.7497 5.3137 11.1664 4.46542L12.5 1.75C12.875 1 12.8358 1 13.25 1C14.4926 1 15.5 2.00736 15.5 3.25C15.5 4.40163 15.2404 5.49263 14.7766 6.46771C14.511 7.02604 14.8836 7.75 15.5019 7.75M15.5019 7.75H18.6277C19.6544 7.75 20.5733 8.44399 20.682 9.46486C20.7269 9.88708 20.75 10.3158 20.75 10.75C20.75 13.5976 19.7581 16.2136 18.101 18.2712C17.7134 18.7525 17.1142 19 16.4962 19H12.4802C11.9966 19 11.5161 18.922 11.0572 18.7691L7.94278 17.7309C7.48393 17.578 7.00342 17.5 6.51975 17.5H4.90421M15.5019 7.75H13.25M4.90421 17.5C4.98702 17.7046 5.07713 17.9054 5.17423 18.1022C5.37137 18.5017 5.0962 19 4.65067 19H3.74289C2.85418 19 2.02991 18.482 1.77056 17.632C1.43208 16.5226 1.25 15.3451 1.25 14.125C1.25 12.5725 1.54481 11.0889 2.08149 9.72711C2.38655 8.95303 3.16733 8.5 3.99936 8.5H5.05212C5.52404 8.5 5.7973 9.05591 5.5523 9.45925C4.72588 10.8198 4.25 12.4168 4.25 14.125C4.25 15.3185 4.48232 16.4578 4.90421 17.5Z", stroke: fill ? fill : '#0645AD', strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }));
}
function ThumbsUpCovered({ customColor_1, customColor_2, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '16', height: height ? height : '17', viewBox: "0 0 16 17", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("circle", { cx: "8", cy: "8.78711", r: "8", fill: customColor_1 ? customColor_1 : '#FF4D0D' }), jsxRuntime.jsx("path", { d: "M3.83333 10.3022C3.83333 9.65539 3.95301 9.03722 4.1709 8.46979C4.29475 8.14726 4.61173 7.9585 4.94952 7.9585H5.37692C5.56851 7.9585 5.67946 8.19013 5.57999 8.35818C5.24448 8.92508 5.05128 9.5905 5.05128 10.3022C5.05128 10.7995 5.1456 11.2742 5.31687 11.7085C5.35049 11.7937 5.38708 11.8774 5.4265 11.9594C5.50653 12.1259 5.39482 12.3335 5.21394 12.3335H4.8454C4.4846 12.3335 4.14996 12.1177 4.04467 11.7635C3.90725 11.3013 3.83333 10.8106 3.83333 10.3022Z", fill: customColor_2 ? customColor_2 : '#D9D9D9' }), jsxRuntime.jsx("path", { d: "M3.83333 10.3022C3.83333 9.65539 3.95301 9.03722 4.1709 8.46979C4.29475 8.14726 4.61173 7.9585 4.94952 7.9585H5.37692C5.56851 7.9585 5.67946 8.19013 5.57999 8.35818C5.24448 8.92508 5.05128 9.5905 5.05128 10.3022C5.05128 10.7995 5.1456 11.2742 5.31687 11.7085C5.35049 11.7937 5.38708 11.8774 5.4265 11.9594C5.50653 12.1259 5.39482 12.3335 5.21394 12.3335H4.8454C4.4846 12.3335 4.14996 12.1177 4.04467 11.7635C3.90725 11.3013 3.83333 10.8106 3.83333 10.3022Z", fill: "black", fillOpacity: "0.2" }), jsxRuntime.jsx("path", { d: "M5.61258 8.271C5.93994 8.271 6.23532 8.08523 6.43734 7.82086C6.45594 7.79652 6.47482 7.77243 6.49399 7.74858C7.08538 7.01272 7.81831 6.36287 8.22582 5.5113L8.40064 5.146C8.55288 4.8335 8.53696 4.8335 8.70512 4.8335C9.20961 4.8335 9.61858 5.25323 9.61858 5.771C9.61858 6.25084 9.51321 6.70543 9.32491 7.11171C9.21709 7.34435 9.36835 7.646 9.61936 7.646M9.61936 7.646H10.8884C11.3052 7.646 11.6783 7.93516 11.7224 8.36052C11.7406 8.53645 11.75 8.7151 11.75 8.896C11.75 10.0825 11.3473 11.1725 10.6745 12.0298C10.5172 12.2304 10.2739 12.3335 10.023 12.3335H8.39262C8.19626 12.3335 8.00118 12.301 7.81489 12.2373L6.55048 11.8047C6.3642 11.741 6.16912 11.7085 5.97276 11.7085H5.31687M9.61936 7.646H8.70512M5.31687 11.7085C5.35049 11.7937 5.38708 11.8774 5.4265 11.9594C5.50653 12.1259 5.39482 12.3335 5.21394 12.3335H4.8454C4.4846 12.3335 4.14996 12.1177 4.04467 11.7635C3.90725 11.3013 3.83333 10.8106 3.83333 10.3022C3.83333 9.65539 3.95301 9.03722 4.1709 8.46979C4.29475 8.14726 4.61173 7.9585 4.94952 7.9585H5.37692C5.56851 7.9585 5.67946 8.19013 5.57999 8.35818C5.24448 8.92508 5.05128 9.5905 5.05128 10.3022C5.05128 10.7995 5.1456 11.2742 5.31687 11.7085Z", stroke: customColor_2 ? customColor_2 : 'white', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" })] }));
}
function StepCicleOne({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '40', height: height ? height : '40', viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M37 20C37 29.3888 29.3888 37 20 37C10.6112 37 3 29.3888 3 20C3 10.6112 10.6112 3 20 3C29.3888 3 37 10.6112 37 20Z", stroke: fill ? fill : '#0645AD', strokeWidth: "2" }), jsxRuntime.jsx("path", { d: "M20.4503 14.12C19.8203 15.02 17.8043 16.1 16.8503 16.226L17.2103 17.9C18.2903 17.666 19.3883 17.054 20.2163 16.262C20.1983 16.604 20.1803 16.928 20.1803 17.216V26H22.0703V14.12H20.4503Z", fill: fill ? fill : '#0645AD' })] }));
}
function StepCheckInCicle({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '40', height: height ? height : '40', viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M37 20C37 29.3888 29.3888 37 20 37C10.6112 37 3 29.3888 3 20C3 10.6112 10.6112 3 20 3C29.3888 3 37 10.6112 37 20Z", fill: fill ? fill : '#D1F6D1', stroke: fill ? fill : '#2CA92A', strokeWidth: "2" }), jsxRuntime.jsx("path", { d: "M17.59 22.5802L14.7723 19.7625C14.5775 19.5677 14.2619 19.5672 14.0665 19.7613L13.3561 20.4667C13.1601 20.6612 13.159 20.9778 13.3536 21.1738L13.3548 21.175L17.2365 25.0567C17.4317 25.2519 17.7483 25.2519 17.9436 25.0567L27.2365 15.7638C27.4317 15.5685 27.4317 15.2519 27.2365 15.0567L26.5336 14.3538L26.5334 14.354C26.3382 14.1588 26.0218 14.1587 25.8265 14.3538L17.59 22.5802Z", fill: fill ? fill : '#2CA92A' })] }));
}
function StepCicleTwo({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '40', height: height ? height : '40', viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M37 20C37 29.3888 29.3888 37 20 37C10.6112 37 3 29.3888 3 20C3 10.6112 10.6112 3 20 3C29.3888 3 37 10.6112 37 20Z", stroke: fill ? fill : '#0645AD', strokeWidth: "2" }), jsxRuntime.jsx("path", { d: "M15.9778 26H24.2398V24.344H20.4958C20.0098 24.344 18.9838 24.38 18.5338 24.416V24.38C22.4758 21.86 24.0238 19.952 24.0238 17.684C24.0238 15.596 22.5298 13.94 19.9018 13.94C17.3998 13.94 15.8338 15.38 15.5998 17.63L17.2738 18.404C17.3998 16.676 18.2998 15.614 19.7938 15.614C21.1978 15.614 22.0438 16.496 22.0438 17.756C22.0438 19.736 20.5318 21.374 15.9778 24.578V26Z", fill: fill ? fill : '#0645AD' })] }));
}
function StepCicleThree({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '40', height: height ? height : '40', viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M37 20C37 29.3888 29.3888 37 20 37C10.6112 37 3 29.3888 3 20C3 10.6112 10.6112 3 20 3C29.3888 3 37 10.6112 37 20Z", stroke: fill ? fill : '#0645AD', strokeWidth: "2" }), jsxRuntime.jsx("path", { d: "M20.0006 13.94C18.0386 13.94 16.4726 14.894 15.9506 16.64L17.7146 17.36C17.9306 16.244 18.6866 15.596 19.9646 15.596C21.2246 15.596 21.9446 16.244 21.9266 17.486C21.9086 18.692 21.1706 19.268 19.6946 19.268H19.2086V20.798H19.7486C21.3866 20.798 22.1786 21.248 22.1966 22.544C22.2146 23.714 21.3686 24.524 19.8926 24.524C18.3446 24.524 17.6606 23.768 17.3186 22.454L15.5546 23.3C16.2566 25.226 17.6606 26.18 19.8206 26.18C22.4126 26.18 24.1406 24.758 24.1406 22.796C24.1406 21.104 22.9886 20.024 21.6386 20.024V19.988C22.6826 19.988 23.8706 18.89 23.8706 17.108C23.8706 15.362 22.5206 13.94 20.0006 13.94Z", fill: fill ? fill : '#0645AD' })] }));
}
function StepCicleFour({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '40', height: height ? height : '40', viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M37 20C37 29.3888 29.3888 37 20 37C10.6112 37 3 29.3888 3 20C3 10.6112 10.6112 3 20 3C29.3888 3 37 10.6112 37 20Z", stroke: fill ? fill : '#0645AD', strokeWidth: "2" }), jsxRuntime.jsx("path", { d: "M24.8234 21.536H22.8074V14.12H20.4494L15.1394 21.86V23.03H20.9894V26H22.8074V23.03H24.8234V21.536ZM19.8734 17.522C20.2514 16.964 20.7374 16.154 21.0254 15.542H21.0614L20.9894 17.468V21.536H17.0654L19.8734 17.522Z", fill: fill ? fill : '#0645AD' })] }));
}
function FowardArrow({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '16', height: height ? height : '18', viewBox: "0 0 16 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M9.06665 14.1L13.3333 9.3L9.06665 4.5", stroke: fill ? fill : '#222222', strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M13.3334 9.3L2.66675 9.3", stroke: fill ? fill : '#222222', strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })] }));
}
function AddPeople({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '24', height: height ? height : '24', viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M13.549 15.9713C13.532 15.7717 13.6157 15.5768 13.772 15.4517C14.2283 15.0867 14.5727 14.581 14.7932 13.9049C15.0286 13.1829 15.1413 12.5131 15.1413 11.8923V9.62656C15.1413 9.30123 15.016 8.93556 14.6901 8.51986C14.3643 8.10436 13.9296 7.75177 13.3712 7.46759C12.8218 7.18796 12.2767 7.05453 11.7301 7.05453C11.4151 7.05453 11.0826 7.1054 10.7306 7.21296C10.376 7.32129 10.0563 7.46735 9.76858 7.64954C9.46646 7.84088 9.19782 8.05278 8.96103 8.28464C8.73815 8.50287 8.57086 8.73504 8.45235 8.98085C8.33291 9.22857 8.28531 9.44184 8.28531 9.62656V11.8923C8.28531 12.4321 8.4064 13.0735 8.67084 13.8245C8.91914 14.5297 9.28527 15.0571 9.75636 15.4359C9.91295 15.5617 9.99614 15.7577 9.97796 15.9578C9.95979 16.1579 9.84266 16.3356 9.66594 16.4312L6.19182 18.3109C6.18613 18.314 6.1804 18.317 6.17462 18.3199C6.11819 18.3481 6.04257 18.3883 5.94593 18.442C5.91178 18.4609 5.82117 18.5256 5.66114 18.675C5.63587 18.6986 5.61809 18.7179 5.60598 18.7327C5.60376 18.7354 5.60177 18.738 5.6 18.7403V20.0489C5.6 20.1498 5.62784 20.2078 5.68601 20.2641C5.75468 20.3307 5.81815 20.3552 5.90629 20.3552H17.5203C17.6084 20.3552 17.6719 20.3307 17.7406 20.2641C17.7987 20.2078 17.8266 20.1498 17.8266 20.0489V18.7212C17.8184 18.7054 17.8107 18.6951 17.8044 18.6881C17.776 18.6565 17.7386 18.6203 17.69 18.5798C17.6454 18.5426 17.6054 18.5149 17.5704 18.4945C17.5057 18.4568 17.4508 18.4254 17.4051 18.4C17.3894 18.3913 17.3791 18.3862 17.3736 18.3836L13.549 15.9713ZM13.549 15.9713C13.566 16.1708 13.6815 16.3487 13.8568 16.4455L17.2083 18.2963L17.2378 18.316C17.2798 18.344 17.3252 18.3666 17.3729 18.3832L13.549 15.9713Z", stroke: fill ? fill : 'white', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M13 5.62121C13.2991 5.42929 13.628 5.27778 13.9869 5.16667C14.3458 5.05556 14.6947 5 15.0336 5C15.6118 5 16.1801 5.14394 16.7383 5.43182C17.2966 5.7197 17.7477 6.08586 18.0916 6.5303C18.4355 6.97475 18.6075 7.41919 18.6075 7.86364V9.90909C18.6075 10.5354 18.4953 11.197 18.271 11.8939C18.0467 12.5909 17.6854 13.1414 17.1869 13.5455L20.1925 15.2273L20.2374 15.2576C20.2673 15.2677 20.3047 15.2854 20.3495 15.3106C20.3944 15.3359 20.4467 15.3662 20.5065 15.4015C20.5663 15.4369 20.6262 15.4798 20.686 15.5303C20.7458 15.5808 20.7981 15.6313 20.843 15.6818C20.8878 15.7323 20.9252 15.7904 20.9551 15.8561C20.985 15.9217 21 15.9848 21 16.0455V17.2727C21 17.505 20.9202 17.6995 20.7607 17.8561C20.6012 18.0126 20.4118 18.0909 20.1925 18.0909", stroke: fill ? fill : 'white', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M6 3V9", stroke: fill ? fill : 'white', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M9 6H3", stroke: fill ? fill : 'white', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" })] }));
}
function Books({ fill, width, height }) {
    return (jsxRuntime.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M15.0882 6.92067H10.4249M15.0882 6.92067V3.58448C15.0882 2.85052 14.4886 2.25 13.7558 2.25H11.7572C11.0244 2.25 10.4249 2.85052 10.4249 3.58448V6.92067M15.0882 6.92067V16.262M10.4249 6.92067V16.262M10.4249 16.262V19.5982C10.4249 20.3322 11.0244 20.9327 11.7572 20.9327H13.7558C14.4886 20.9327 15.0882 20.3322 15.0882 19.5982V16.262M10.4249 16.262H15.0882M21.75 8.18843H17.0867M21.75 8.18843V5.25258C21.75 4.51861 21.1504 3.9181 20.4176 3.9181H18.4191C17.6863 3.9181 17.0867 4.51861 17.0867 5.25258V8.18843M21.75 8.18843V16.7291H17.0867V8.18843M8.72044 8.62431L4.11916 7.86521M8.72044 8.62431L9.19684 5.72749C9.31593 5.00328 8.82178 4.31316 8.09872 4.19387L6.12674 3.86854C5.40369 3.74925 4.71465 4.24419 4.59555 4.96839L4.11916 7.86521M8.72044 8.62431L7.33457 17.0514L2.73328 16.2923L4.11916 7.86521M20.4176 20.9327H18.4191C17.6863 20.9327 17.0867 20.3322 17.0867 19.5982V16.6624H21.75V19.5982C21.75 20.3322 21.1504 20.9327 20.4176 20.9327ZM5.33781 20.9823L3.36583 20.6569C2.64277 20.5376 2.14862 19.8475 2.26772 19.1233L2.74411 16.2265L7.3454 16.9856L6.869 19.8824C6.7499 20.6066 6.06087 21.1015 5.33781 20.9823Z", stroke: fill ? fill : 'black', strokeWidth: "1.2", strokeMiterlimit: "10" }) }));
}
function Clock({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '25', height: height ? height : '24', viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M12.4725 21C17.4431 21 21.4725 16.9706 21.4725 12C21.4725 7.02944 17.4431 3 12.4725 3C7.50197 3 3.47253 7.02944 3.47253 12C3.47253 16.9706 7.50197 21 12.4725 21Z", stroke: fill ? fill : 'black', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M12.4725 7V12.25L16.4725 14", stroke: fill ? fill : 'black', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" })] }));
}
function Load({ fill, width, height }) {
    return (jsxRuntime.jsx("svg", { width: width ? width : '24', height: height ? height : '24', viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M16.98 20.6256C17.5433 21.6013 18.8054 21.9477 19.6718 21.2274C21.567 19.6517 22.9447 17.5183 23.5911 15.1058C24.4148 12.0317 23.9836 8.75621 22.3923 6C20.801 3.24379 18.18 1.23261 15.1058 0.408891C12.6934 -0.237529 10.1569 -0.111098 7.84473 0.742337C6.78777 1.13247 6.45667 2.39867 7.02 3.37439C7.58333 4.3501 8.83088 4.65471 9.91792 4.35856C11.2588 3.99325 12.6844 3.984 14.0498 4.34987C16.0788 4.89352 17.8087 6.2209 18.8589 8.04C19.9092 9.8591 20.1938 12.0209 19.6501 14.0498C19.2843 15.4153 18.5634 16.6453 17.5766 17.6239C16.7766 18.4172 16.4167 19.6499 16.98 20.6256Z", fill: fill ? fill : '#FF4D0D' }) }));
}
function Diamond({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '32', height: height ? height : '32', viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M8.00001 4H24L29.3333 12L16 29.3333L2.66667 12L8.00001 4Z", stroke: fill ? fill : 'white', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M16 29.3333L21.3333 12L17.3333 4", stroke: fill ? fill : 'white', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M16 29.3333L10.6667 12L14.6667 4", stroke: fill ? fill : 'white', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M2.66667 12H29.3333", stroke: fill ? fill : 'white', strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" })] }));
}
function Challenge({ fill, width, height }) {
    return (jsxRuntime.jsx("svg", { width: width ? width : '32', height: height ? height : '32', viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M6.66668 28.6666L6.13402 28.3904C6.03758 28.5764 6.04514 28.7992 6.15398 28.9783C6.26282 29.1573 6.45716 29.2666 6.66668 29.2666V28.6666ZM25.3333 28.6666V29.2666C25.5429 29.2666 25.7372 29.1573 25.846 28.9783C25.9549 28.7992 25.9624 28.5764 25.866 28.3904L25.3333 28.6666ZM30.6667 28.6666V29.2666C30.8793 29.2666 31.076 29.1541 31.1838 28.9709C31.2916 28.7876 31.2944 28.561 31.1912 28.3752L30.6667 28.6666ZM24 16.6666L24.5245 16.3752C24.4229 16.1923 24.2333 16.0755 24.0243 16.0671C23.8152 16.0586 23.6168 16.1597 23.5008 16.3338L24 16.6666ZM20.8341 20.3338C20.6503 20.6095 20.7248 20.982 21.0005 21.1658C21.2762 21.3496 21.6488 21.2751 21.8326 20.9994L20.8341 20.3338ZM1.33334 28.6666L0.808849 28.3752C0.705605 28.561 0.70841 28.7876 0.816221 28.9709C0.924032 29.1541 1.12075 29.2666 1.33334 29.2666L1.33334 28.6666ZM8.00001 16.6666L8.49924 16.3338C8.38318 16.1597 8.18481 16.0586 7.97575 16.0671C7.76668 16.0755 7.57713 16.1923 7.47552 16.3752L8.00001 16.6666ZM10.1674 20.9994C10.3513 21.2751 10.7238 21.3496 10.9995 21.1658C11.2752 20.982 11.3497 20.6095 11.1659 20.3338L10.1674 20.9994ZM14.6667 18.6666L14.2424 19.0908L14.6667 19.5151L15.0909 19.0908L14.6667 18.6666ZM16 17.3333L16.4243 16.909L16 16.4847L15.5757 16.909L16 17.3333ZM17.3333 18.6666L16.9091 19.0908L17.3333 19.5151L17.7576 19.0908L17.3333 18.6666ZM16 3.33325V2.73325C15.6686 2.73325 15.4 3.00188 15.4 3.33325H16ZM21.3333 3.33325H21.9333C21.9333 3.00188 21.6647 2.73325 21.3333 2.73325V3.33325ZM21.3333 6.66658V7.26659C21.6647 7.26659 21.9333 6.99796 21.9333 6.66658H21.3333ZM16 6.66658H15.4C15.4 6.99796 15.6686 7.26659 16 7.26659V6.66658ZM15.4674 10.3904L6.13402 28.3904L7.19933 28.9428L16.5327 10.9428L15.4674 10.3904ZM6.66668 29.2666H25.3333V28.0666H6.66668V29.2666ZM25.866 28.3904L16.5327 10.3904L15.4674 10.9428L24.8007 28.9428L25.866 28.3904ZM17.3333 29.2666H30.6667V28.0666H17.3333V29.2666ZM31.1912 28.3752L24.5245 16.3752L23.4755 16.958L30.1422 28.958L31.1912 28.3752ZM23.5008 16.3338L20.8341 20.3338L21.8326 20.9994L24.4992 16.9994L23.5008 16.3338ZM14.6667 28.0666H1.33334V29.2666H14.6667V28.0666ZM1.85784 28.958L8.5245 16.958L7.47552 16.3752L0.808849 28.3752L1.85784 28.958ZM7.50078 16.9994L10.1674 20.9994L11.1659 20.3338L8.49924 16.3338L7.50078 16.9994ZM12.2424 17.0908L14.2424 19.0908L15.0909 18.2423L13.0909 16.2423L12.2424 17.0908ZM15.0909 19.0908L16.4243 17.7575L15.5757 16.909L14.2424 18.2423L15.0909 19.0908ZM15.5757 17.7575L16.9091 19.0908L17.7576 18.2423L16.4243 16.909L15.5757 17.7575ZM17.7576 19.0908L19.7576 17.0908L18.9091 16.2423L16.9091 18.2423L17.7576 19.0908ZM16.6 10.6666V3.33325H15.4V10.6666H16.6ZM16 3.93325H21.3333V2.73325H16V3.93325ZM20.7333 3.33325V6.66658H21.9333V3.33325H20.7333ZM21.3333 6.06659H16V7.26659H21.3333V6.06659ZM16.6 6.66658V3.33325H15.4V6.66658H16.6Z", fill: fill ? fill : 'white' }) }));
}
function SawBadgeIcon({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '20', height: height ? height : '20', viewBox: "0 0 20 20", fill: fill ? fill : 'none', xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsxs("g", { "clip-path": "url(#clip0_408_14996)", children: [jsxRuntime.jsx("path", { d: "M11.9804 2.16073C11.0545 0.717602 8.94551 0.717602 8.01957 2.16073C7.69063 2.67341 7.05964 2.90307 6.47811 2.72178C4.84118 2.21146 3.2256 3.56709 3.44392 5.26776C3.52148 5.87195 3.18574 6.45346 2.62372 6.68839C1.04173 7.34966 0.675512 9.4266 1.93593 10.5891C2.3837 11.002 2.50031 11.6633 2.22078 12.2045C1.43396 13.728 2.48845 15.5544 4.20121 15.6347C4.80968 15.6633 5.32406 16.0949 5.45782 16.6892C5.83433 18.3619 7.81613 19.0833 9.1798 18.0439C9.66426 17.6746 10.3357 17.6746 10.8202 18.0438C12.1839 19.0833 14.1657 18.3619 14.5422 16.6892C14.6759 16.0949 15.1903 15.6633 15.7988 15.6347C17.5115 15.5544 18.566 13.728 17.7792 12.2045C17.4997 11.6633 17.6163 11.002 18.0641 10.5891C19.3245 9.4266 18.9583 7.34966 17.3763 6.68839C16.8143 6.45346 16.4785 5.87195 16.5561 5.26776C16.7744 3.56709 15.1588 2.21146 13.5219 2.72178C12.9404 2.90307 12.3094 2.67341 11.9804 2.16073Z", fill: "#398787", stroke: "white" }), jsxRuntime.jsx("path", { d: "M6.25 10.4167L9.16667 12.9167L14.1667 7.5", stroke: "white", "stroke-linecap": "round", "stroke-linejoin": "round" })] }), jsxRuntime.jsx("defs", { children: jsxRuntime.jsx("clipPath", { id: "clip0_408_14996", children: jsxRuntime.jsx("rect", { width: "20", height: "20", fill: "white" }) }) })] }));
}
function GoalInviteIcon({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '25', height: height ? height : '25', viewBox: "0 0 25 25", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M7.02656 9.04883H5.82656C4.94291 9.04883 4.22656 9.67563 4.22656 10.4488V18.8488C4.22656 19.622 4.94291 20.2488 5.82656 20.2488H18.6266C19.5102 20.2488 20.2266 19.622 20.2266 18.8488V10.4488C20.2266 9.67563 19.5102 9.04883 18.6266 9.04883H17.4266", stroke: fill ? fill : '#0645AD', "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), jsxRuntime.jsx("path", { d: "M20.2266 10.6484L13.0506 15.2084C12.8036 15.3632 12.518 15.4452 12.2266 15.4452C11.9351 15.4452 11.6495 15.3632 11.4026 15.2084L4.22656 10.6484", stroke: fill ? fill : '#0645AD', "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), jsxRuntime.jsx("path", { d: "M7.02637 12.6486V7.84863C7.02637 6.74406 7.9218 5.84863 9.02637 5.84863H15.4264C16.5309 5.84863 17.4264 6.74406 17.4264 7.84863V12.6486", stroke: fill ? fill : '#0645AD', "stroke-width": "1.5" }), jsxRuntime.jsx("path", { d: "M15.4264 13.8487C14.6264 11.8487 13.4264 11.4487 12.2264 11.4487C11.0264 11.4487 9.82637 11.8487 9.02637 13.8487", stroke: fill ? fill : '#0645AD', "stroke-width": "1.5" }), jsxRuntime.jsx("circle", { cx: "12.2265", cy: "9.04873", r: "0.85", stroke: fill ? fill : '#0645AD', "stroke-width": "1.5" })] }));
}
function GoalViewsIcon({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '24', height: height ? height : '24', viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("rect", { x: "18", y: "2.25", width: "3.75", height: "19.5", rx: "1.875", stroke: fill ? fill : '#0645AD', strokeWidth: "2" }), jsxRuntime.jsx("rect", { x: "10.125", y: "8.25", width: "3.75", height: "13.5", rx: "1.875", stroke: fill ? fill : '#0645AD', strokeWidth: "2" }), jsxRuntime.jsx("rect", { x: "2.25", y: "15", width: "3.75", height: "6.75", rx: "1.875", stroke: fill ? fill : '#0645AD', strokeWidth: "2" })] }));
}
function StatusProblemaSawBadgeIcon({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("circle", { cx: "24", cy: "24", r: "24", fill: "#D1F6D1" }), jsxRuntime.jsxs("g", { "clip-path": "url(#clip0_482_14529)", children: [jsxRuntime.jsx("path", { d: "M26.2923 14.6469C25.2206 12.9765 22.7794 12.9765 21.7077 14.6469C21.2886 15.3 20.4848 15.5926 19.744 15.3616C17.8492 14.7709 15.9792 16.34 16.2319 18.3086C16.3307 19.0783 15.903 19.8191 15.187 20.1183C13.3559 20.8837 12.932 23.2878 14.3909 24.6334C14.9613 25.1595 15.1099 26.0019 14.7538 26.6913C13.843 28.4547 15.0636 30.5688 17.0461 30.6618C17.8213 30.6981 18.4765 31.248 18.6469 32.005C19.0828 33.9413 21.3767 34.7762 22.9551 33.5731C23.5723 33.1027 24.4277 33.1027 25.0449 33.5731C26.6233 34.7762 28.9172 33.9413 29.3531 32.005C29.5235 31.248 30.1787 30.6981 30.9539 30.6618C32.9364 30.5688 34.157 28.4547 33.2462 26.6913C32.8901 26.0019 33.0387 25.1595 33.6091 24.6334C35.068 23.2878 34.6441 20.8837 32.813 20.1183C32.097 19.8191 31.6693 19.0783 31.7681 18.3086C32.0208 16.34 30.1508 14.7709 28.256 15.3616C27.5152 15.5926 26.7114 15.3 26.2923 14.6469Z", stroke: "#222222" }), jsxRuntime.jsx("path", { d: "M19.5 24.5L23 27.5L29 21", stroke: "#222222", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" })] }), jsxRuntime.jsx("defs", { children: jsxRuntime.jsx("clipPath", { id: "clip0_482_14529", children: jsxRuntime.jsx("rect", { width: "24", height: "24", fill: "white", transform: "translate(12 12)" }) }) })] }));
}
function StatusProblemaSendIcon({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("circle", { cx: "24", cy: "24", r: "24", fill: "#CDDAEF" }), jsxRuntime.jsx("path", { d: "M33 15L22 26", stroke: "#222222", "stroke-width": "1.2", "stroke-linecap": "round", "stroke-linejoin": "round" }), jsxRuntime.jsx("path", { d: "M31.9154 14.7941C32.7223 14.4868 33.5132 15.2777 33.2059 16.0846L26.8633 32.7337C26.5456 33.5677 25.3775 33.5994 25.015 32.7839L22 26L15.2161 22.985C14.4006 22.6225 14.4323 21.4544 15.2663 21.1367L31.9154 14.7941Z", stroke: "#222222", "stroke-width": "1.2", "stroke-linecap": "round", "stroke-linejoin": "round" })] }));
}
function StatusProblemaEdit({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("circle", { cx: "24", cy: "24", r: "24", fill: "#FEF0D0" }), jsxRuntime.jsx("path", { d: "M24 17.0669H18.5556C18.143 17.0669 17.7473 17.2417 17.4556 17.5529C17.1639 17.8641 17 18.2861 17 18.7262V30.341C17 30.781 17.1639 31.2031 17.4556 31.5142C17.7473 31.8254 18.143 32.0002 18.5556 32.0002H29.4444C29.857 32.0002 30.2527 31.8254 30.5444 31.5142C30.8361 31.2031 31 30.781 31 30.341V24.5336", stroke: "#222222", "stroke-width": "1.2", "stroke-linecap": "round", "stroke-linejoin": "round" }), jsxRuntime.jsx("path", { d: "M30.1791 16.5163C30.489 16.1857 30.9093 16 31.3476 16C31.7858 16 32.2061 16.1857 32.516 16.5163C32.8259 16.8468 33 17.2951 33 17.7626C33 18.2301 32.8259 18.6784 32.516 19.0089L25.1159 26.9024L22 27.7333L22.779 24.4098L30.1791 16.5163Z", stroke: "#222222", "stroke-width": "1.2", "stroke-linecap": "round", "stroke-linejoin": "round" })] }));
}
function PlayIcon({ width, height, customColor_1, customColor_2 }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '32', height: height ? height : '32', viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsxs("g", { filter: "url(#filter0_d_1_22)", children: [jsxRuntime.jsx("circle", { cx: "16", cy: "16", r: "16", fill: customColor_1 ? customColor_1 : '#EE4C15' }), jsxRuntime.jsx("path", { d: "M22.3411 17.3317C22.934 16.9358 22.934 16.0643 22.3411 15.6684L14.5553 10.47C13.8908 10.0264 13 10.5027 13 11.3017V21.6984C13 22.4974 13.8908 22.9737 14.5553 22.5301L22.3411 17.3317Z", fill: customColor_2 ? customColor_2 : 'white' })] }), jsxRuntime.jsx("defs", { children: jsxRuntime.jsxs("filter", { id: "filter0_d_1_22", x: "0", y: "0", width: width ? width : '32', height: height ? height : '32', filterUnits: "userSpaceOnUse", "color-interpolation-filters": "sRGB", children: [jsxRuntime.jsx("feFlood", { "flood-opacity": "0", result: "BackgroundImageFix" }), jsxRuntime.jsx("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }), jsxRuntime.jsx("feMorphology", { radius: "20", operator: "erode", in: "SourceAlpha", result: "effect1_dropShadow_1_22" }), jsxRuntime.jsx("feOffset", { dy: "3" }), jsxRuntime.jsx("feGaussianBlur", { stdDeviation: "2.5" }), jsxRuntime.jsx("feColorMatrix", { type: "matrix", values: "0 0 0 0 1 0 0 0 0 0.301961 0 0 0 0 0.0509804 0 0 0 0.4 0" }), jsxRuntime.jsx("feBlend", { mode: "multiply", in2: "BackgroundImageFix", result: "effect1_dropShadow_1_22" }), jsxRuntime.jsx("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_1_22", result: "shape" })] }) })] }));
}
function PauseIcon({ customColor_1, customColor_2, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '32', height: height ? height : '32', viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsxs("g", { filter: "url(#filter0_d_1_159)", children: [jsxRuntime.jsx("g", { filter: "url(#filter1_d_1_159)", children: jsxRuntime.jsx("circle", { cx: "16", cy: "16", r: "16", fill: customColor_1 ? customColor_1 : '#EE4C15' }) }), jsxRuntime.jsx("rect", { width: "3", height: "17", rx: "1.5", transform: "matrix(-1 0 0 1 22 8)", fill: customColor_2 ? customColor_2 : 'white' }), jsxRuntime.jsx("rect", { width: "3", height: "17", rx: "1.5", transform: "matrix(-1 0 0 1 14 8)", fill: customColor_2 ? customColor_2 : 'white' })] }), jsxRuntime.jsxs("defs", { children: [jsxRuntime.jsxs("filter", { id: "filter0_d_1_159", x: "0", y: "0", width: width ? width : '32', height: height ? height : '32', filterUnits: "userSpaceOnUse", "color-interpolation-filters": "sRGB", children: [jsxRuntime.jsx("feFlood", { "flood-opacity": "0", result: "BackgroundImageFix" }), jsxRuntime.jsx("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }), jsxRuntime.jsx("feMorphology", { radius: "20", operator: "erode", in: "SourceAlpha", result: "effect1_dropShadow_1_159" }), jsxRuntime.jsx("feOffset", { dy: "5" }), jsxRuntime.jsx("feGaussianBlur", { stdDeviation: "1.5" }), jsxRuntime.jsx("feColorMatrix", { type: "matrix", values: "0 0 0 0 1 0 0 0 0 0.301961 0 0 0 0 0.0509804 0 0 0 0.4 0" }), jsxRuntime.jsx("feBlend", { mode: "multiply", in2: "BackgroundImageFix", result: "effect1_dropShadow_1_159" }), jsxRuntime.jsx("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_1_159", result: "shape" })] }), jsxRuntime.jsxs("filter", { id: "filter1_d_1_159", x: "0", y: "0", width: width ? width : '32', height: height ? height : '32', filterUnits: "userSpaceOnUse", "color-interpolation-filters": "sRGB", children: [jsxRuntime.jsx("feFlood", { "flood-opacity": "0", result: "BackgroundImageFix" }), jsxRuntime.jsx("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }), jsxRuntime.jsx("feMorphology", { radius: "20", operator: "erode", in: "SourceAlpha", result: "effect1_dropShadow_1_159" }), jsxRuntime.jsx("feOffset", { dy: "25" }), jsxRuntime.jsx("feGaussianBlur", { stdDeviation: "9" }), jsxRuntime.jsx("feColorMatrix", { type: "matrix", values: "0 0 0 0 1 0 0 0 0 0.301961 0 0 0 0 0.0509804 0 0 0 0.2 0" }), jsxRuntime.jsx("feBlend", { mode: "multiply", in2: "BackgroundImageFix", result: "effect1_dropShadow_1_159" }), jsxRuntime.jsx("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_1_159", result: "shape" })] })] })] }));
}
function Back15({ width, height, fill }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '24', height: height ? height : '24', viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M3 2V8H9", stroke: fill ? fill : '#222222', strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M16.524 19.8037C18.2613 18.7786 19.6037 17.1995 20.336 15.32C21.0683 13.4405 21.1479 11.3694 20.5622 9.43922C19.9764 7.509 18.7592 5.83152 17.1059 4.67595C15.4525 3.52038 13.4589 2.95373 11.445 3.06692C9.43099 3.18012 7.51344 3.96659 6 5.30015L3 8.00014", stroke: fill ? fill : '#222222', strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M5.01 17.9H6.4V13.95L6.55 13.27L6.07 13.86L5.18 14.47L4.63 13.72L6.91 11.88H7.64V17.9H9V19H5.01V17.9ZM11.8738 17.99C12.3138 17.99 12.6505 17.8833 12.8838 17.67C13.1172 17.4567 13.2338 17.1633 13.2338 16.79C13.2338 16.39 13.0972 16.0967 12.8238 15.91C12.5505 15.7233 12.1605 15.63 11.6538 15.63L10.8638 15.66V12H14.3038V13.22H11.9838V14.57L12.3938 14.53C12.7205 14.5433 13.0138 14.6033 13.2738 14.71C13.5405 14.8167 13.7672 14.9667 13.9538 15.16C14.1405 15.3467 14.2838 15.5767 14.3838 15.85C14.4838 16.1167 14.5338 16.4167 14.5338 16.75C14.5338 17.1433 14.4672 17.49 14.3338 17.79C14.2005 18.09 14.0138 18.34 13.7738 18.54C13.5405 18.74 13.2638 18.89 12.9438 18.99C12.6238 19.09 12.2738 19.14 11.8938 19.14C11.5938 19.14 11.3072 19.1133 11.0338 19.06C10.7672 19.0133 10.5405 18.9467 10.3538 18.86L10.7038 17.78C10.8572 17.8467 11.0238 17.9 11.2038 17.94C11.3905 17.9733 11.6138 17.99 11.8738 17.99Z", fill: fill ? fill : '#222222' })] }));
}
function Foward15({ width, height, fill }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '24', height: height ? height : '24', viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M21 2V8H15", stroke: fill ? fill : '#222222', strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M7.42591 19.8037C5.6887 18.7786 4.34624 17.1995 3.61396 15.32C2.88167 13.4405 2.80202 11.3694 3.38778 9.43922C3.97354 7.509 5.19075 5.83152 6.84409 4.67595C8.49743 3.52038 10.491 2.95373 12.505 3.06692C14.519 3.18012 16.4365 3.96659 17.95 5.30015L20.95 8.00014", stroke: fill ? fill : '#222222', strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M10.01 17.9H11.4V13.95L11.55 13.27L11.07 13.86L10.18 14.47L9.63 13.72L11.91 11.88H12.64V17.9H14V19H10.01V17.9ZM16.8738 17.99C17.3138 17.99 17.6505 17.8833 17.8838 17.67C18.1172 17.4567 18.2338 17.1633 18.2338 16.79C18.2338 16.39 18.0972 16.0967 17.8238 15.91C17.5505 15.7233 17.1605 15.63 16.6538 15.63L15.8638 15.66V12H19.3038V13.22H16.9838V14.57L17.3938 14.53C17.7205 14.5433 18.0138 14.6033 18.2738 14.71C18.5405 14.8167 18.7672 14.9667 18.9538 15.16C19.1405 15.3467 19.2838 15.5767 19.3838 15.85C19.4838 16.1167 19.5338 16.4167 19.5338 16.75C19.5338 17.1433 19.4672 17.49 19.3338 17.79C19.2005 18.09 19.0138 18.34 18.7738 18.54C18.5405 18.74 18.2638 18.89 17.9438 18.99C17.6238 19.09 17.2738 19.14 16.8938 19.14C16.5938 19.14 16.3072 19.1133 16.0338 19.06C15.7672 19.0133 15.5405 18.9467 15.3538 18.86L15.7038 17.78C15.8572 17.8467 16.0238 17.9 16.2038 17.94C16.3905 17.9733 16.6138 17.99 16.8738 17.99Z", fill: fill ? fill : '#222222' })] }));
}
function VolumeIcon({ width, height, fill }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '17', height: height ? height : '17', viewBox: "0 0 17 17", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M7.6271 2.54614C8.28897 2.07337 9.20834 2.5465 9.20834 3.35987V13.6402C9.20834 14.4535 8.28897 14.9267 7.62711 14.4539L4.25001 12.0417H2.70834C1.60377 12.0417 0.708344 11.1462 0.708344 10.0417V6.95835C0.708344 5.85378 1.60377 4.95835 2.70834 4.95835H4.25001L7.6271 2.54614Z", fill: fill ? fill : '#222222' }), jsxRuntime.jsx("path", { d: "M11.3289 11.9746C12.2079 11.0799 12.75 9.8533 12.75 8.50003C12.75 7.14107 12.2033 5.9098 11.3178 5.01416", stroke: fill ? fill : '#222222', strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M13.3012 2.99048C14.7112 4.40049 15.5833 6.34841 15.5833 8.50002C15.5833 10.6516 14.7112 12.5995 13.3012 14.0096", stroke: fill ? fill : '#222222', strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })] }));
}
function MuteIcon({ width, height, fill }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '21', height: height ? height : '24', viewBox: "0 0 21 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M7.6271 6.54614C8.28897 6.07337 9.20834 6.5465 9.20834 7.35987V17.6402C9.20834 18.4535 8.28897 18.9267 7.62711 18.4539L4.25001 16.0417H2.70834C1.60377 16.0417 0.708344 15.1462 0.708344 14.0417V10.9583C0.708344 9.85378 1.60377 8.95835 2.70834 8.95835H4.25001L7.6271 6.54614Z", fill: fill ? fill : '#222222' }), jsxRuntime.jsx("path", { d: "M18 10L12 16", stroke: fill ? fill : '#222222', strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M12 10L18 16", stroke: fill ? fill : '#222222', strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })] }));
}
function ThumbVideo({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '117', height: height ? height : '127', viewBox: "0 0 177 127", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M163.62 1.5H12.88C6.595 1.5 1.5 6.595 1.5 12.88V113.92C1.5 120.205 6.595 125.3 12.88 125.3H163.62C169.905 125.3 175 120.205 175 113.92V12.88C175 6.595 169.905 1.5 163.62 1.5Z", stroke: "white", "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" }), jsxRuntime.jsx("path", { d: "M175 103.86H1.5", stroke: "white", "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" }), jsxRuntime.jsx("path", { d: "M79.01 114.58H97.49", stroke: "white", "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" }), jsxRuntime.jsx("path", { d: "M56.78 55.96C56.78 47.62 60.1 39.61 66 33.71C71.9 27.81 79.91 24.49 88.25 24.49C96.59 24.49 104.6 27.81 110.5 33.71C116.4 39.61 119.72 47.62 119.72 55.96C119.72 64.3 116.4 72.31 110.5 78.21C104.6 84.11 96.59 87.43 88.25 87.43C79.91 87.42 71.91 84.1 66.01 78.2C60.11 72.3 56.79 64.3 56.78 55.96Z", stroke: "white", "stroke-width": "3", "stroke-miterlimit": "10" }), jsxRuntime.jsx("path", { d: "M82.28 44.93V66.77C82.28 67.9 83.56 68.55 84.47 67.89L99.47 56.97C100.23 56.42 100.23 55.29 99.47 54.74L84.47 43.82C83.56 43.16 82.28 43.81 82.28 44.94V44.93Z", stroke: "white", "stroke-width": "3", "stroke-miterlimit": "10" })] }));
}
function ThumbTexto({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '117', height: height ? height : '127', viewBox: "0 0 177 127", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M163.62 1.5H12.88C6.595 1.5 1.5 6.595 1.5 12.88V113.92C1.5 120.205 6.595 125.3 12.88 125.3H163.62C169.905 125.3 175 120.205 175 113.92V12.88C175 6.595 169.905 1.5 163.62 1.5Z", stroke: "white", "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" }), jsxRuntime.jsx("path", { d: "M175 103.86H1.5", stroke: "white", "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" }), jsxRuntime.jsx("path", { d: "M79.01 114.58H97.49", stroke: "white", "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" }), jsxRuntime.jsx("path", { d: "M94.2401 21.9399H52.4201C50.1701 21.9399 48.3201 23.7799 48.3201 26.0399V54.4099C48.3201 56.6599 50.1601 58.5099 52.4201 58.5099H59.2801V69.3199C59.2801 70.7299 60.9901 71.4399 61.9901 70.4399L72.5101 58.5099H94.2301C96.4801 58.5099 98.3301 56.6699 98.3301 54.4099V26.0399C98.3301 23.7899 96.4901 21.9399 94.2301 21.9399H94.2401Z", stroke: "white", "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" }), jsxRuntime.jsx("path", { d: "M87.7701 32.8398H58.8801", stroke: "white", "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" }), jsxRuntime.jsx("path", { d: "M87.7701 40.2197H58.8801", stroke: "white", "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" }), jsxRuntime.jsx("path", { d: "M87.7701 47.5898H58.8801", stroke: "white", "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" }), jsxRuntime.jsx("mask", { id: "mask0_8643_48376", maskUnits: "userSpaceOnUse", x: "75", y: "37", width: "57", height: "54", children: jsxRuntime.jsx("path", { d: "M102 37.8999L125.24 38.1599C128.48 38.1599 131.11 40.7899 131.11 44.0299V72.3999C131.11 75.6399 128.48 78.2699 125.24 78.2699H120.16V87.1599C120.16 88.6999 119.18 90.1499 117.69 90.5499C116.48 90.8799 115.27 90.5399 114.41 89.6799C114.38 89.6499 114.36 89.6299 114.33 89.5999L104.34 78.2699L83 80.8899C79.76 80.8899 75 76.1299 75 72.8899V61.8899H96C98.84 61.8899 102 58.7299 102 55.8899V37.8899V37.8999Z", fill: "white" }) }), jsxRuntime.jsxs("g", { mask: "url(#mask0_8643_48376)", children: [jsxRuntime.jsx("path", { d: "M89.55 51.1199H118.44", stroke: "white", "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" }), jsxRuntime.jsx("path", { d: "M89.55 58.4998H118.44", stroke: "white", "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" }), jsxRuntime.jsx("path", { d: "M89.55 65.8699H118.44", stroke: "white", "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" }), jsxRuntime.jsx("path", { d: "M83.08 40.22H124.9C127.15 40.22 129 42.06 129 44.32V72.69C129 74.94 127.16 76.79 124.9 76.79H118.04V87.6C118.04 89.01 116.33 89.72 115.33 88.72L104.81 76.79H83.09C80.84 76.79 78.99 74.95 78.99 72.69V44.32C78.99 42.07 80.83 40.22 83.09 40.22H83.08Z", stroke: "white", "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" })] })] }));
}
function ThumbPodcast({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: width ? width : '113', height: height ? height : '146', viewBox: "0 0 113 146", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M101.53 1.29004H11.05C5.65974 1.29004 1.29004 5.65974 1.29004 11.05V134.93C1.29004 140.32 5.65974 144.69 11.05 144.69H101.53C106.92 144.69 111.29 140.32 111.29 134.93V11.05C111.29 5.65974 106.92 1.29004 101.53 1.29004Z", stroke: "white", "stroke-width": "2.57", "stroke-linecap": "round", "stroke-linejoin": "round" }), jsxRuntime.jsx("path", { d: "M111.29 119.85H1.29004", stroke: "white", "stroke-width": "2.57", "stroke-linecap": "round", "stroke-linejoin": "round" }), jsxRuntime.jsx("path", { d: "M50.4299 132.27H62.1399", stroke: "white", "stroke-width": "2.57", "stroke-linecap": "round", "stroke-linejoin": "round" }), jsxRuntime.jsx("path", { d: "M56.1201 83.52C54.6401 83.52 53.1601 84.08 52.0301 85.21C49.7701 87.47 49.7601 91.14 52.0301 93.41C53.1601 94.54 54.6401 95.1 56.1301 95.1C57.6201 95.1 59.1001 94.53 60.2301 93.4C62.4901 91.14 62.4901 87.47 60.2301 85.21C59.1001 84.08 57.6101 83.51 56.1301 83.51L56.1201 83.52Z", stroke: "white", "stroke-width": "2.57", "stroke-linecap": "round", "stroke-linejoin": "round" }), jsxRuntime.jsx("path", { d: "M43.8401 77.02C50.6301 70.24 61.6301 70.24 68.4201 77.04", stroke: "white", "stroke-width": "2.57", "stroke-linecap": "round", "stroke-linejoin": "round" }), jsxRuntime.jsx("path", { d: "M32.9199 66.0901C45.7399 53.2701 66.5299 53.2801 79.3499 66.1101", stroke: "white", "stroke-width": "2.57", "stroke-linecap": "round", "stroke-linejoin": "round" }), jsxRuntime.jsx("path", { d: "M22 55.16C40.85 36.31 71.42 36.33 90.29 55.2", stroke: "white", "stroke-width": "2.57", "stroke-linecap": "round", "stroke-linejoin": "round" })] }));
}
function StarFavorite({ fill = '#E0E0E0', width = '24px', stroke = '#BDBDBD', height = '23' }) {
    return (jsxRuntime.jsx("svg", { width: width, height: height, viewBox: "0 0 24 23", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M11.1062 1.78116C11.4752 1.04583 12.5248 1.04583 12.8938 1.78116L15.4737 6.92247C15.6205 7.21502 15.9012 7.41721 16.2251 7.46379L21.9686 8.28959C22.7936 8.40821 23.12 9.42484 22.5181 10.0015L18.3849 13.9616C18.1443 14.1921 18.0343 14.5272 18.0916 14.8554L19.0697 20.4652C19.2117 21.2799 18.3596 21.9051 17.625 21.5251L12.4595 18.8529C12.1713 18.7039 11.8287 18.7039 11.5405 18.8529L6.37496 21.5251C5.64038 21.9051 4.78829 21.2799 4.93035 20.4652L5.90845 14.8554C5.96567 14.5272 5.85569 14.1921 5.61513 13.9616L1.48189 10.0015C0.880041 9.42484 1.20637 8.40821 2.0314 8.28959L7.77486 7.46379C8.09884 7.41721 8.37952 7.21502 8.52632 6.92247L11.1062 1.78116Z", fill: fill, stroke: stroke, "stroke-width": "1.2", "stroke-linecap": "round", "stroke-linejoin": "round" }) }));
}
function IconUp({ fill, width, height }) {
    return (jsxRuntime.jsx("svg", { width: "18", height: "10", viewBox: "0 0 18 10", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M1.45361 9L9.37114 1L17.2887 9", stroke: "#222222", "stroke-width": "1.2", "stroke-linecap": "round", "stroke-linejoin": "round" }) }));
}
function IconGaps({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M9.66127 22C9.1639 20.402 8.41378 19.211 7.41041 18.4265C5.9056 17.25 3.51466 17.9815 2.63157 16.7675C1.74848 15.5535 3.25024 13.3215 3.77705 12.0045C4.30437 10.6875 1.75711 10.222 2.05452 9.848C2.25245 9.5985 3.54004 8.8795 5.91626 7.69C6.59127 3.8965 9.08473 2 13.3977 2C19.8666 2 22.3311 7.403 22.3311 10.84C22.3311 14.2765 19.3468 17.9785 15.0958 18.777C14.7157 19.322 15.2638 20.397 16.7402 22.0005", stroke: "#0645AD", "stroke-width": "1.2", "stroke-linecap": "round", "stroke-linejoin": "round" }), jsxRuntime.jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M9.89679 7.24994C9.56487 8.51694 9.66333 9.40694 10.1927 9.91894C10.7215 10.4314 11.6229 10.7664 12.8968 10.9239C12.6075 12.5589 12.9602 13.3254 13.9539 13.2244C14.9477 13.1234 15.545 12.7169 15.7455 12.0044C17.2985 12.4344 18.1405 12.0744 18.2709 10.9244C18.4663 9.19944 17.5223 7.82394 17.1351 7.82394C16.7484 7.82394 15.7455 7.77744 15.7455 7.24994C15.7455 6.72244 14.5741 6.42494 13.517 6.42494C12.4598 6.42494 13.0957 5.72244 11.6442 5.99994C10.6763 6.18494 10.0937 6.60144 9.89679 7.24994V7.24994Z", stroke: "#0645AD", "stroke-width": "1.2", "stroke-linejoin": "round" }), jsxRuntime.jsx("path", { d: "M15.4795 12.75C14.9634 13.0655 14.2554 13.59 13.9569 14C13.2114 15.025 12.6069 15.6485 12.475 16.304", stroke: "#0645AD", "stroke-width": "1.2", "stroke-linecap": "round" })] }));
}
function IconModules({ fill, width, height }) {
    return (jsxRuntime.jsxs("svg", { width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M21.6079 4.5C21.6079 5.54426 20.7522 6.4 19.6853 6.4C18.6184 6.4 17.7627 5.54426 17.7627 4.5C17.7627 3.45574 18.6184 2.6 19.6853 2.6C20.7522 2.6 21.6079 3.45574 21.6079 4.5Z", stroke: "#0645AD", "stroke-width": "1.2" }), jsxRuntime.jsx("path", { d: "M21.6079 12.5C21.6079 13.5443 20.7522 14.4 19.6853 14.4C18.6184 14.4 17.7627 13.5443 17.7627 12.5C17.7627 11.4557 18.6184 10.6 19.6853 10.6C20.7522 10.6 21.6079 11.4557 21.6079 12.5Z", stroke: "#0645AD", "stroke-width": "1.2" }), jsxRuntime.jsx("path", { d: "M21.6079 19.5C21.6079 20.5443 20.7522 21.4 19.6853 21.4C18.6184 21.4 17.7627 20.5443 17.7627 19.5C17.7627 18.4557 18.6184 17.6 19.6853 17.6C20.7522 17.6 21.6079 18.4557 21.6079 19.5Z", stroke: "#0645AD", "stroke-width": "1.2" }), jsxRuntime.jsx("path", { d: "M14.1356 12L17.1627 12", stroke: "#0645AD", "stroke-width": "1.2", "stroke-linecap": "round" }), jsxRuntime.jsx("path", { d: "M14.1356 16H15.8654L18.1718 18", stroke: "#0645AD", "stroke-width": "1.2", "stroke-linecap": "round", "stroke-linejoin": "round" }), jsxRuntime.jsx("path", { d: "M14.1356 8H15.8654L18.1718 6", stroke: "#0645AD", "stroke-width": "1.2", "stroke-linecap": "round", "stroke-linejoin": "round" }), jsxRuntime.jsx("path", { d: "M3.03613 15L5.05421 15", stroke: "#0645AD", "stroke-width": "1.2", "stroke-linecap": "round", "stroke-linejoin": "round" }), jsxRuntime.jsx("path", { d: "M11.1085 10L10.0995 10", stroke: "#0645AD", "stroke-width": "1.2", "stroke-linecap": "round", "stroke-linejoin": "round" }), jsxRuntime.jsx("path", { d: "M3.0361 10H5.99596C6.39957 10 7.07227 9.25 7.07227 8.49999C7.07227 7 7.07227 8.8377 7.07227 7", stroke: "#0645AD", "stroke-width": "1.2", "stroke-linecap": "round", "stroke-linejoin": "round" }), jsxRuntime.jsx("path", { d: "M11.1084 15H8.14858C7.74496 15 7.07227 15.5 7.07227 16C7.07227 17 7.07227 15.7749 7.07227 17", stroke: "#0645AD", "stroke-width": "1.2", "stroke-linecap": "round", "stroke-linejoin": "round" }), jsxRuntime.jsx("path", { d: "M10.9344 4.41895L10.977 4.47036L11.0298 4.51117C11.1053 4.56956 11.5175 5.03708 11.5175 6V18C11.5175 18.1873 11.4114 18.8808 10.9187 19.5999C10.708 19.8492 10.4509 20.0482 10.1646 20.1854C9.87158 20.3259 9.55413 20.3987 9.23347 20.4H8.51448C6.96145 20.3982 5.46746 19.7556 4.36173 18.605C3.2553 17.4537 2.62893 15.8878 2.6271 14.2497V9.75031C2.62893 8.11221 3.2553 6.5463 4.36173 5.39496C5.46737 4.24444 6.96122 3.60189 8.51413 3.6H9.23343C9.5541 3.60126 9.87157 3.67412 10.1646 3.8146C10.458 3.95526 10.7209 4.16085 10.9344 4.41895Z", stroke: "#0645AD", "stroke-width": "1.2" })] }));
}

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

var css_248z$i = "/* DEFAULTS */\n@import url('https://fonts.googleapis.com/css?family=Work+Sans:regular,bold,italic&subset=latin,latin-ext');\n@import url('https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400&family=Work+Sans:wght@700&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=VT323&display=swap');\n\nhtml,\nbody {\n  padding: 0;\n  margin: 0;\n  font-family: Work Sans !important;\n  font-weight: 500 !important;\n}\n\np {\n  margin: 0px;\n}\n\nbr {\n  display: block;\n  margin: 8px 0;\n}\n\n* {\n  box-sizing: border-box;\n  outline: none;\n}\n\n.avatar {\n  vertical-align: middle;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n\n.ellipsis {\n  overflow: hidden !important;\n  white-space: nowrap !important;\n  text-overflow: ellipsis !important;\n  display: inline-block !important;\n}\n\n.tag {\n  border-radius: 13px;\n  min-height: 24px;\n  text-align: center;\n  font-size: 14px;\n  line-height: 16px;\n  display: inline-block;\n}\n\n.content {\n  padding: 24px !important;\n  border-radius: inherit;\n}\n\n.fixedBottom {\n  position: absolute !important;\n  bottom: 0px !important;\n  right: 0px !important;\n}\n\n.innerContent {\n  padding: 0px 24px 0px 24px !important;\n  border-radius: inherit;\n}\n\n.centeredVertically {\n  display: inline-flex;\n  align-items: center;\n}\n\n.cardContent {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  box-shadow: none !important;\n  border: 1px solid #c4c4c4;\n  background-color: #fff;\n  box-sizing: border-box !important;\n  border-radius: 8px !important;\n  padding: 24px !important;\n}\n\n.cardContentNoMargin {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  box-shadow: none !important;\n  border: 1px solid #c4c4c4;\n  background-color: #fff;\n  box-sizing: border-box !important;\n  border-radius: 8px !important;\n}\n\n.cardTopRightConner {\n  float: right;\n  border-radius: 0px 8px;\n}\n\n.frstButton {\n  color: #fff;\n  font-weight: bold !important;\n  background-color: #ff4d0d;\n  border-color: #ff4d0d;\n  height: 48px !important;\n  font-size: 16px !important;\n  padding-left: 16px !important;\n  padding-right: 16px !important;\n  padding-top: 18px !important;\n  padding-bottom: 18px !important;\n  text-transform: none !important;\n  border-radius: 5px 5px 5px 5px !important;\n  box-shadow: 0 2px 0 rgb(0 0 0 / 2%) !important;\n}\n\n.blue {\n  border: 1px solid #e8e8e8 !important;\n  background-color: #fff !important;\n  color: #0645ad !important;\n}\n\n.shimmer {\n  background: #f6f7f8;\n  background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #c4c4c4 40%, #c4c4c4 100%);\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  position: relative;\n  color: transparent;\n\n  -webkit-animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-animation-name: placeholderShimmer;\n  -webkit-animation-timing-function: linear;\n}\n\n@keyframes placeholderShimmer {\n  0% {\n    background-position: -468px 0;\n  }\n\n  100% {\n    background-position: 468px 0;\n  }\n}\n";
styleInject(css_248z$i);

function Tag(props) {
    function getBG() {
        return props.selected === props.inverted ? props.color : '#fff';
    }
    function getColor() {
        return props.selected === props.inverted ? '#fff' : props.color;
    }
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: props.loading ? (jsxRuntime.jsx("div", { className: "shimmer tag", style: props.style, children: jsxRuntime.jsx("span", { style: { verticalAlign: 'middle', margin: '8px' }, children: "Shimmer Text" }) })) : (jsxRuntime.jsx("div", { className: "tag", style: { border: `1px solid ${getColor()} `, background: getBG(), color: getColor(), ...props.style }, children: jsxRuntime.jsxs("span", { style: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '24px',
                    margin: '0 8px',
                    gap: '8px'
                }, onClick: props?.onClick, children: [props.title, props.iconType === 'warning' && jsxRuntime.jsx(AlertCicle, { fill: getColor() }), props.iconType === 'checked' && jsxRuntime.jsx(DoubleCheck, { fill: getColor() })] }) })) }));
}

function EmptyCard(props) {
    return (jsxRuntime.jsx("div", { className: 'cardContent', style: { height: '100%' }, children: props.children }));
}

const DesignTokens = {
    colors: {
        borderPrimary: '#bdbdbd',
        borderSecondary1: '#2ca92a',
        borderSecondary2: '#ffd600',
        borderSecondary3: '#6a3f86',
        borderSecondary4: '#222222',
        borderGray: '#E5E5E5',
        linkDisabled: '#bdbdbd',
        linkHover: '#0b0080',
        linkOnfocus: '#0645ad',
        linkPressed: '#663366',
        linkError: '#923534',
        inputError: '#ffe0e0',
        inputSelect: '#9BB5DE',
        selectItens: '#F7F9FC',
        messageAlert1: '#ffc200',
        messageAlert2: '#fef0d4',
        messageError1: '#ea0000',
        messageError2: '#ffe5e5',
        messageSuccess1: '#2ca92a',
        messageSuccess2: '#d1f6d1',
        neutralsGrey1: '#222222',
        neutralsGrey2: '#444444',
        neutralsGrey3: '#757575',
        neutralsGrey4: '#9c9c9c',
        neutralsGrey5: '#bdbdbd',
        neutralsGrey6: '#e0e0e0',
        neutralsGrey7: '#ebebeb',
        neutralsGrey8: '#ebeded',
        neutralsGrey9: '#f2f2f2',
        disabledLabelGray: '#D3D3D3',
        primary1: '#ff4d0d',
        primary2: '#ee4c15',
        primary3: '#d14211',
        secondary1: '#6a3f86',
        secondary2: '#ffd600',
        secondary5: '#a50000',
        shadeWhite: '#ffffff',
        shadeBlack: '#000000'
    },
    fonts: {
        header1: {
            fontFamily: "'Work Sans', 'WorkSans-Bold'",
            fontSize: '34px',
            letterSpacing: '-0.7px',
            lineHeight: '100%',
            fontWeight: 700,
            color: 'black'
        },
        header2: {
            fontFamily: "'Work Sans', 'WorkSans-Bold'",
            fontSize: '20px',
            letterSpacing: '-0.4px',
            lineHeight: '100%',
            fontWeight: 700,
            color: 'black'
        },
        textMessageComponentsBodyBold: {
            fontFamily: "'PT Sans', 'PTSans-Bold'",
            fontSize: '16px',
            letterSpacing: '0px',
            lineHeight: '100%',
            fontWeight: 700,
            color: 'black'
        },
        textMessageComponentsBodyRegular: {
            fontFamily: "'PT Sans', 'PTSans-Regular'",
            fontSize: '16px',
            letterSpacing: '0px',
            lineHeight: '100%',
            fontWeight: 400,
            color: 'black'
        },
        textMessageComponentsBodySmall: {
            fontFamily: "'PT Sans', 'PTSans-Regular'",
            fontSize: '12px',
            letterSpacing: '0px',
            lineHeight: '100%',
            fontWeight: 400,
            color: 'black'
        },
        textMessageComponentsBodyTiny: {
            fontFamily: "'PT Sans', 'PTSans-Regular'",
            fontSize: '10px',
            letterSpacing: '0px',
            lineHeight: '100%',
            fontWeight: 400,
            color: 'black'
        },
        textMessageComponentsCardTitle: {
            fontFamily: "'Work Sans', 'WorkSansRoman-Medium'",
            fontSize: '20px',
            letterSpacing: '0px',
            lineHeight: '100%',
            fontWeight: 500,
            color: 'black'
        },
        textMessageComponentsHero: {
            fontFamily: "'Work Sans', 'WorkSans-Bold'",
            fontSize: '40px',
            letterSpacing: '0.4px',
            lineHeight: '130%',
            fontWeight: 700,
            color: 'black'
        }
    },
    global: {
        shadowLevel_0: {
            value: {
                x: '0',
                y: '0',
                blur: '0',
                spread: '0',
                color: '#000000',
                type: 'dropShadow'
            },
            type: 'boxShadow'
        },
        shadowLevel_1: {
            value: {
                x: '0',
                y: '18',
                blur: '40',
                spread: '-15',
                color: 'D3D3D3',
                type: 'dropShadow'
            },
            type: 'boxShadow'
        },
        shadowLevel_2: {
            value: {
                x: '0',
                y: '25',
                blur: '30',
                spread: '-15',
                color: 'D3D3D3',
                type: 'dropShadow'
            },
            type: 'boxShadow'
        },
        shadowLevel_3: {
            value: {
                x: '0',
                y: '35',
                blur: '25',
                spread: '15',
                color: '#cccccc',
                type: 'dropShadow'
            },
            type: 'boxShadow'
        },
        border_width_small: {
            value: '1px',
            type: 'borderWidth'
        },
        border_width_medium: {
            value: '2px',
            type: 'borderWidth'
        },
        'border-width-large': {
            value: '3',
            type: 'borderWidth'
        },
        'border-radius-small': {
            value: '4px',
            type: 'borderRadius'
        },
        'border-radius-medium': {
            value: '8px',
            type: 'borderRadius'
        },
        'border-radius-large': {
            value: '16px',
            type: 'borderRadius'
        },
        'border-radius-xlarge': {
            value: '24px',
            type: 'borderRadius'
        },
        button_padding: {
            value: '16px',
            type: 'other'
        },
        card_padding_normal: {
            value: '24px',
            type: 'other'
        },
        card_padding_large: {
            value: '32px',
            type: 'other'
        }
    }
};

const FRSTTheme = {
    ...DesignTokens,
};

const container$1 = styled__default["default"].div `
    display: flex;
    position: relative;
    gap: 20px;
    height: 234px;
    padding: 20px;
    border-radius: 16px;
    border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
    background-color: #E2E8F0;
    z-index: 1;

    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;
const containerMask = styled__default["default"].div `
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(8px);
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 16px;
    z-index: 1;
`;
const thumb = styled__default["default"].div `
    border-radius: 8px;
    width: 194px;
    max-width: 194px;
    height: 194px;
    z-index: 2;
    /* background-color: red; */

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;
const content = styled__default["default"].div `
    display: flex;
    flex-direction: column;
    gap: 8px;
    z-index: 2;
`;
const title = styled__default["default"].p `
    font-family: 'Work Sans';
    font-size: 18px;
    font-weight: 700;
    line-height: 21px;
    color: #222222;

    margin-top: 12px;
`;
const description = styled__default["default"].p `
    font-family: 'PT Sans';
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    color: #222222;   
`;
const date = styled__default["default"].p `
    font-family: 'PT Sans';
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: #222222;
`;
const controls = styled__default["default"].div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    gap: 24px;
    width: 100%;
    margin-top: 24px;
`;
const navigationButton = styled__default["default"].button `
    border: none;
    background: none;
    color: ${({ theme }) => theme.colors.neutralsGrey1};

    &:hover{
        color: ${({ theme }) => theme.colors.primary1};
    }

    &:active{
        color: ${({ theme }) => theme.colors.primary3};
    }
`;
const playButton = styled__default["default"].button `
    border: none;
    background: none;
    color: ${({ theme }) => theme.colors.primary2};
    &:hover{
        color: ${({ theme }) => theme.colors.primary1};
    }

    &:active{
        color: ${({ theme }) => theme.colors.primary3};
    }
`;
const volumeControl = styled__default["default"].div `
    position: absolute;
    right: 0;
`;
const volume = styled__default["default"].div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 4px;
`;
const volumeBar = styled__default["default"].input `
    appearance: none;
    -webkit-appearance: none;
    display: block;
    border-radius: 1px;
    box-sizing: border-box;
    width: 32px;
    height: 2px;
    margin: 0px;
    background: ${({ theme }) => theme.colors.neutralsGrey1};
    background-image: linear-gradient(#ee4c15, #ee4c15);
    background-size: ${({ currentInputValue }) => currentInputValue}% 100%;
    background-repeat: no-repeat;

    &::-webkit-slider-thumb{
        -webkit-appearance: none;
        appearance: none;
    }

    &::-ms-thumb{
        -webkit-appearance: none;
        appearance: none;
    }

    &::-moz-range-thumb{
        -webkit-appearance: none;
        appearance: none;
    }

    &:hover::-webkit-slider-thumb{
        -webkit-appearance: none;
        appearance: none;
        width: 5px;
        height: 5px;
        border: none;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.primary2};
    }

    &:hover::-moz-range-thumb{
        -webkit-appearance: none;
        appearance: none;
        width: 5px;
        height: 5px;
        border: none;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.primary2};
    }

    &:hover::-ms-thumb{
        -webkit-appearance: none;
        appearance: none;
        width: 5px;
        height: 5px;
        border: none;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.primary2};
    }

    &::-webkit-slider-runnable-track{
        -webkit-appearance: none;
        appearance: none;
        border: none;
        box-shadow: none;
        background: transparent;
    }

    &::-moz-range-track{
        -webkit-appearance: none;
        appearance: none;
        border: none;
        box-shadow: none;
        background: transparent;
    }

    &::-ms-track{
        -webkit-appearance: none;
        appearance: none;
        border: none;
        box-shadow: none;
        background: transparent;
    }

`;
const audioTimeline = styled__default["default"].div `
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    width: 100%;
`;
const timeText = styled__default["default"].p `
    font-family: 'PT Sans';
    font-size: 10px;
    font-weight: 700;
    line-height: 13px;
    color: #222222;

`;
const timeline = styled__default["default"].input `
    appearance: none;
    -webkit-appearance: none;
    display: block;
    border-radius: 2px;
    box-sizing: border-box;
    width: 100%;
    height: 4px;
    margin: 0px;
    background: ${({ theme }) => theme.colors.neutralsGrey1};
    background-image: linear-gradient(#ee4c15, #ee4c15);
    background-size: ${({ currentInputValue }) => currentInputValue}% 100%;
    background-repeat: no-repeat;

    &::-webkit-slider-thumb{
        -webkit-appearance: none;
        appearance: none;
    }

    &::-ms-thumb{
        -webkit-appearance: none;
        appearance: none;
    }

    &::-moz-range-thumb{
        -webkit-appearance: none;
        appearance: none;
    }

    &:hover::-webkit-slider-thumb{
        -webkit-appearance: none;
        appearance: none;
        width: 10px;
        height: 10px;
        border: none;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.primary2};
    }

    &:hover::-moz-range-thumb{
        -webkit-appearance: none;
        appearance: none;
        width: 10px;
        height: 10px;
        border: none;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.primary2};
    }

    &:hover::-ms-thumb{
        -webkit-appearance: none;
        appearance: none;
        width: 10px;
        height: 10px;
        border: none;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.primary2};
    }

    &::-webkit-slider-runnable-track{
        -webkit-appearance: none;
        appearance: none;
        border: none;
        box-shadow: none;
        background: transparent;
    }

    &::-moz-range-track{
        -webkit-appearance: none;
        appearance: none;
        border: none;
        box-shadow: none;
        background: transparent;
    }

    &::-ms-track{
        -webkit-appearance: none;
        appearance: none;
        border: none;
        box-shadow: none;
        background: transparent;
    }

`;

function AudioPlayer(props) {
    const [isPlaying, setIsPlaying] = React.useState(false);
    React.useState();
    const [time, setTime] = React.useState({
        min: 0,
        sec: 0
    });
    const [currTime, setCurrTime] = React.useState({
        min: 0,
        sec: 0
    });
    const [seconds, setSeconds] = React.useState(0);
    const [audioVolume, setAudioVolume] = React.useState(props.volume ? props.volume : 0.5);
    const [play, { pause, duration, sound }] = useSound__default["default"](props.audio, { volume: audioVolume,
        onend: () => {
            console.log("Passou aqui 3");
            setIsPlaying(false);
            props.onEnded();
        } });
    //porcentagem percorrida da musica
    const [percentagePlaytime, setPercentagePlaytime] = React.useState(0);
    const defaultThumb = 'https://i.gyazo.com/f201e5ef302347108c31a2129104adc1.png';
    React.useEffect(() => {
        setAudioVolume(props.volume);
    }, [props.volume]);
    React.useEffect(() => {
        console.log('isPlaying', isPlaying);
    }, [isPlaying]);
    React.useEffect(() => {
        if (props.onProgress) {
            console.log(isPlaying);
            if (isPlaying) {
                props.onProgress({
                    loadedSeconds: duration / 1000,
                    playedSeconds: sound.seek([])
                });
            }
        }
    }, [seconds]);
    React.useEffect(() => {
        if (duration) {
            const sec = duration / 1000;
            const min = Math.floor(sec / 60);
            const secRemain = Math.floor(sec % 60);
            setTime({
                min: min,
                sec: secRemain
            });
        }
        const interval = setInterval(() => {
            if (sound) {
                if (!isPlaying && props.startAt && sound.seek([]) === 0) {
                    setSeconds(props.startAt);
                    sound.seek([props.startAt]);
                }
                setSeconds(sound.seek([]));
                const min = Math.floor(sound.seek([]) / 60);
                const sec = Math.floor(sound.seek([]) % 60);
                setCurrTime({
                    min,
                    sec
                });
                setPercentagePlaytime(calcCurrentInputPercentage(0, duration / 1000, sound.seek([])));
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [sound]);
    const playingButton = () => {
        if (isPlaying) {
            console.log("Passou aqui");
            setIsPlaying(false);
            pause();
        }
        else {
            console.log("Passou aqui 2");
            setIsPlaying(true);
            play();
        }
    };
    // função para calcular a porcentagem que foi percorrida a musica, para fazer o acompanhamento da barra
    const calcCurrentInputPercentage = (valorMin, valorMax, valorAtual) => {
        const min = valorMin;
        const max = valorMax;
        const val = valorAtual;
        let result = (val - min) * 100 / (max - min);
        return result;
    };
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsxs(container$1, { style: { ...props.style, backgroundImage: props.coverImage ? `url(${props.coverImage})` : '' }, children: [jsxRuntime.jsx(containerMask, {}), jsxRuntime.jsx(thumb, { style: { ...props.style, backgroundImage: props.coverImage ? `url(${props.coverImage})` : `url(${defaultThumb})` } }), jsxRuntime.jsxs(content, { style: { width: '100%' }, children: [jsxRuntime.jsxs(title, { children: [" ", props.title, " "] }), jsxRuntime.jsxs(description, { children: [" ", props.description, " "] }), jsxRuntime.jsxs(date, { children: [" ", props.date, " "] }), jsxRuntime.jsxs(controls, { children: [jsxRuntime.jsx(navigationButton, { onClick: () => {
                                        sound.seek([seconds ? seconds - 15 : 0]);
                                    }, children: jsxRuntime.jsx(Back15, { fill: 'currentColor' }) }), !isPlaying ?
                                    jsxRuntime.jsx(playButton, { onClick: playingButton, children: jsxRuntime.jsx(PlayIcon, { customColor_1: 'currentColor' }) })
                                    :
                                        jsxRuntime.jsx(playButton, { onClick: playingButton, children: jsxRuntime.jsx(PauseIcon, { customColor_1: 'currentColor' }) }), jsxRuntime.jsx(navigationButton, { onClick: () => {
                                        sound.seek([seconds ? seconds + 15 : 15]);
                                    }, children: jsxRuntime.jsx(Foward15, { fill: 'currentColor' }) }), jsxRuntime.jsx(volumeControl, { children: audioVolume === 0 ?
                                        jsxRuntime.jsx(volume, { onClick: () => {
                                                setAudioVolume(0.1);
                                            }, children: jsxRuntime.jsx(MuteIcon, {}) })
                                        :
                                            jsxRuntime.jsxs(volume, { children: [jsxRuntime.jsx("div", { onClick: () => {
                                                            setAudioVolume(0);
                                                        }, children: jsxRuntime.jsx(VolumeIcon, {}) }), jsxRuntime.jsx(volumeBar, { type: 'range', min: '0', max: '1', value: audioVolume, className: 'volumeBar', step: '0.1', onChange: (e) => {
                                                            setAudioVolume(Number(e.target.value));
                                                        }, currentInputValue: calcCurrentInputPercentage(0, 1, audioVolume) })] }) })] }), jsxRuntime.jsxs(audioTimeline, { children: [jsxRuntime.jsxs(timeText, { children: [currTime.min.toString().padStart(2, '0'), ":", currTime.sec.toString().padStart(2, '0')] }), jsxRuntime.jsx(timeline, { type: "range", min: "0", max: duration / 1000, value: seconds, className: "timeline", onChange: (e) => {
                                        sound.seek([e.target.value]);
                                    }, currentInputValue: percentagePlaytime }), jsxRuntime.jsxs(timeText, { children: [time.min.toString().padStart(2, '0'), ":", time.sec.toString().padStart(2, '0')] })] })] })] }) }));
}

var imgSeta = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYzIiBoZWlnaHQ9IjI2MyIgdmlld0JveD0iMCAwIDk2MyAyNjMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjE2LjE5MyA5Ny4wOTAxQzIxNi4yMTUgOTcuMDQ5NiAyMTYuMjM2IDk3LjAwOSAyMTYuMjU3IDk2Ljk2ODNDMjE2LjI4NCA5Ni45MjI2IDIxNi4zMTEgOTYuODc2NSAyMTYuMzM3IDk2LjgzQzIyMS40ODkgODcuNjQ3MSAyMjguODg4IDc5Ljg4MyAyMzcuODc3IDc0LjI4OEMyNDguNDAxIDY3LjczNzIgMjYwLjYzMiA2NC40NTQyIDI3My4wMjIgNjQuODU0NEMyODUuNDEyIDY1LjI1NDUgMjk3LjQwNSA2OS4zMTk3IDMwNy40ODUgNzYuNTM2QzMxNC44MjQgODEuNzkwNSAzMjAuOTA5IDg4LjU0MzggMzI1LjM2MyA5Ni4zMDU1QzMyNS40NjEgOTYuNTkxMiAzMjUuNTg0IDk2Ljg3MjYgMzI1LjczMiA5Ny4xNDY4QzMyNy44OTQgMTAxLjEyOCAzMzAuMDQ2IDEwNi41NTggMzMyLjQwMSAxMTMuMDdDMzMzLjMzNSAxMTUuNjUxIDMzNC4zMTggMTE4LjQ1NSAzMzUuMzQgMTIxLjM3TDMzNS4zNDEgMTIxLjM3MUMzMzYuODA2IDEyNS41NDkgMzM4LjM1MSAxMjkuOTU1IDMzOS45NDQgMTM0LjI1OUMzNDUuMzk4IDE0OSAzNTIuMjU5IDE2NS4wMDcgMzYyLjI0MyAxNzYuMTY1QzM2Mi40ODcgMTc2LjQzOCAzNjIuNzUyIDE3Ni42OCAzNjMuMDMzIDE3Ni44OTFDMzY1Ljg1NyAxNzkuOTI5IDM2OC45NDQgMTgyLjczNSAzNzIuMjY5IDE4NS4yNzRDMzgzLjQzIDE5My43OTYgMzk2Ljc5OSAxOTguOTQyIDQxMC43OTQgMjAwLjEwNEM0MjQuNzg5IDIwMS4yNjUgNDM4LjgyNCAxOTguMzkzIDQ1MS4yMzcgMTkxLjgyN0M0NjIuMDY5IDE4Ni4wOTggNDcxLjI3IDE3Ny43NjcgNDc4LjAzNCAxNjcuNjE3QzQ3OS42NzUgMTY1LjE1NSA0NzguNzUzIDE2MS44NzQgNDc2LjE3OCAxNjAuNDE3QzQ3My42MDMgMTU4Ljk2IDQ3MC4zNTQgMTU5Ljg4MiA0NjguNjgyIDE2Mi4zMjNDNDYyLjk0OCAxNzAuNyA0NTUuMjUgMTc3LjU4NiA0NDYuMjI4IDE4Mi4zNTdDNDM1LjYyNCAxODcuOTY2IDQyMy42MzUgMTkwLjQxOSA0MTEuNjggMTg5LjQyN0MzOTkuNzI1IDE4OC40MzUgMzg4LjMwNSAxODQuMDM5IDM3OC43NyAxNzYuNzU5QzM3NS44OSAxNzQuNTYgMzczLjIxOCAxNzIuMTI1IDM3MC43NzggMTY5LjQ4N0MzNzAuNjQ1IDE2OS4yOTIgMzcwLjQ5OCAxNjkuMTA0IDM3MC4zMzcgMTY4LjkyNEMzNjEuODU4IDE1OS40NDggMzU1LjU3NiAxNDUuMjExIDM1MC4xMjkgMTMwLjQ5QzM0OC41MzQgMTI2LjE4IDM0Ny4wODEgMTIyLjAzMyAzNDUuNjY0IDExNy45OUwzNDUuNjYzIDExNy45ODdDMzQ0LjY0MSAxMTUuMDcgMzQzLjYzOCAxMTIuMjA3IDM0Mi42MTQgMTA5LjM3NkMzNDEuMTE3IDEwNS4yMzggMzM5LjYxIDEwMS4yNjUgMzM4LjA0NyA5Ny42OTY3QzMzNy45NzIgOTcuMzI0NSAzMzcuODUyIDk2Ljk1MzkgMzM3LjY4NCA5Ni41OTA3QzMzMi4zNTcgODUuMDk3NyAzMjQuMTM0IDc1LjE0NjUgMzEzLjc4NSA2Ny43MzY5QzMwMS45NjUgNTkuMjc0NyAyODcuOTAxIDU0LjUwNzUgMjczLjM3MSA1NC4wMzgzQzI1OC44NDIgNTMuNTY5MSAyNDQuNSA1Ny40MTg4IDIzMi4xNTggNjUuMTAwOEMyMjEuNjkzIDcxLjYxNDkgMjEzLjA2NSA4MC42MzY2IDIwNy4wMjkgOTEuMzA0NkMyMDYuODkxIDkxLjQ5NSAyMDYuNzY0IDkxLjY5NjUgMjA2LjY0OCA5MS45MDg3QzIwNC4wNTcgOTYuNjgyNSAyMDEuNjY0IDEwMi44MzggMTk5LjI5NyAxMDkuNDE3QzE5OC4yNjEgMTEyLjI5NyAxOTcuMjQ4IDExNS4yMDcgMTk2LjIxNCAxMTguMTc0TDE5Ni4yMTQgMTE4LjE3NUwxOTYuMjE0IDExOC4xNzVDMTk0LjggMTIyLjIzMyAxOTMuMzUxIDEyNi4zOTYgMTkxLjc1NyAxMzAuNzI5QzE4Ni4yODkgMTQ1LjYgMTc5Ljk5IDE1OS45NjggMTcxLjUxOCAxNjkuNDM2QzE3MS4zNTcgMTY5LjYxNiAxNzEuMjEgMTY5LjgwNCAxNzEuMDc3IDE2OS45OTlDMTY4LjYzOCAxNzIuNjM3IDE2NS45NjUgMTc1LjA3MiAxNjMuMDg1IDE3Ny4yNzFDMTUzLjU1IDE4NC41NTEgMTQyLjEzIDE4OC45NDcgMTMwLjE3NSAxODkuOTRDMTE4LjIyIDE5MC45MzIgMTA2LjIzMSAxODguNDc4IDk1LjYyNjUgMTgyLjg2OUM4Ni42MDUxIDE3OC4wOTggNzguOTA3MyAxNzEuMjEzIDczLjE3MjUgMTYyLjgzNUM3MS41MDEzIDE2MC4zOTQgNjguMjUxNCAxNTkuNDczIDY1LjY3NjcgMTYwLjkzQzYzLjEwMTkgMTYyLjM4NyA2Mi4xNzk4IDE2NS42NjggNjMuODIwNSAxNjguMTNDNzAuNTg0NiAxNzguMjc5IDc5Ljc4NjIgMTg2LjYxMSA5MC42MTc1IDE5Mi4zNEMxMDMuMDMxIDE5OC45MDUgMTE3LjA2NiAyMDEuNzc4IDEzMS4wNjEgMjAwLjYxNkMxNDUuMDU2IDE5OS40NTUgMTU4LjQyNSAxOTQuMzA5IDE2OS41ODYgMTg1Ljc4NkMxNzIuOTExIDE4My4yNDggMTc1Ljk5OCAxODAuNDQyIDE3OC44MjEgMTc3LjQwNEMxNzkuMTAzIDE3Ny4xOTIgMTc5LjM2OCAxNzYuOTUgMTc5LjYxMiAxNzYuNjc4QzE4OS42MDMgMTY1LjUxMiAxOTYuNDgxIDE0OS4zNTEgMjAxLjk1IDEzNC40NzdDMjAzLjUzOCAxMzAuMTU5IDIwNS4wODEgMTI1LjczMiAyMDYuNTQ0IDEyMS41MzRMMjA2LjU0NSAxMjEuNTMzTDIwNi41NDUgMTIxLjUzM0MyMDcuNTc5IDExOC41NjYgMjA4LjU3NCAxMTUuNzEzIDIwOS41MTYgMTEzLjA5M0MyMTEuODc4IDEwNi41MjYgMjE0LjAzNCAxMDEuMDY2IDIxNi4xOTMgOTcuMDkwMVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8yNzNfMjUyNTYpIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzU3LjY3NyA5Ni45NDQzQzM1NS4xMDIgOTUuNDg3MiAzNTQuMTggOTIuMjA2IDM1NS44MiA4OS43NDQyQzM2MS4zNDEgODEuNDYwMyAzNjguNDk5IDc0LjM2OCAzNzYuODcyIDY4LjkxNTFDMzg2Ljc0NCA2Mi40ODU4IDM5OC4wMTggNTguNTIzOSA0MDkuNzQyIDU3LjM2MzRDNDIxLjQ2NiA1Ni4yMDI4IDQzMy4yOTcgNTcuODc3NSA0NDQuMjM4IDYyLjI0NjRDNDUyLjcxNCA2NS42MzA4IDQ2MC40NjMgNzAuNTU1MSA0NjcuMTA1IDc2Ljc0NzZMNDczLjc4OSA3MC45MTU5TDQ3OC43NDcgOTYuMTc4Mkw0NTQuMzkgODcuODQwM0w0NTguOTgyIDgzLjgzNDZDNDUzLjQ5MyA3OC44OTU2IDQ0Ny4xNjEgNzQuOTQ5MiA0NDAuMjY1IDcyLjE5NTlDNDMwLjkxOSA2OC40NjM4IDQyMC44MTIgNjcuMDMzMiA0MTAuNzk3IDY4LjAyNDZDNDAwLjc4MiA2OS4wMTYgMzkxLjE1MiA3Mi40MDA0IDM4Mi43MTggNzcuODkyNkMzNzUuNzg1IDgyLjQwODEgMzY5LjgyNyA4OC4yMzk1IDM2NS4xNzIgOTUuMDM4NkMzNjMuNTAxIDk3LjQ3OTggMzYwLjI1MSA5OC40MDEzIDM1Ny42NzcgOTYuOTQ0M1oiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcl8yNzNfMjUyNTYpIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNjUuNjc2NyA5Ni45NDQzQzYzLjEwMiA5NS40ODcyIDYyLjE3OTggOTIuMjA2IDYzLjgyMDUgODkuNzQ0MkM2OS4zNDEzIDgxLjQ2MDMgNzYuNDk4NyA3NC4zNjggODQuODcxOSA2OC45MTUxQzk0Ljc0NDMgNjIuNDg1OCAxMDYuMDE4IDU4LjUyMzkgMTE3Ljc0MiA1Ny4zNjM0QzEyOS40NjYgNTYuMjAyOCAxNDEuMjk3IDU3Ljg3NzUgMTUyLjIzOCA2Mi4yNDY1QzE2MC43MTQgNjUuNjMwOCAxNjguNDYzIDcwLjU1NTEgMTc1LjEwNSA3Ni43NDc2TDE4MS43ODkgNzAuOTE1OUwxODYuNzQ3IDk2LjE3ODJMMTYyLjM5IDg3Ljg0MDNMMTY2Ljk4MSA4My44MzQ2QzE2MS40OTMgNzguODk1NiAxNTUuMTYxIDc0Ljk0OTMgMTQ4LjI2NSA3Mi4xOTU5QzEzOC45MTkgNjguNDYzOCAxMjguODEyIDY3LjAzMzIgMTE4Ljc5NyA2OC4wMjQ2QzEwOC43ODIgNjkuMDE2IDk5LjE1MTcgNzIuNDAwNCA5MC43MTgzIDc3Ljg5MjZDODMuNzg0NiA4Mi40MDgxIDc3LjgyNjggODguMjM5NiA3My4xNzI0IDk1LjAzODZDNzEuNTAxMyA5Ny40Nzk4IDY4LjI1MTQgOTguNDAxMyA2NS42NzY3IDk2Ljk0NDNaIiBmaWxsPSJ1cmwoI3BhaW50Ml9saW5lYXJfMjczXzI1MjU2KSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTY0OS42NzcgOTYuOTQ0M0M2NDcuMTAyIDk1LjQ4NzIgNjQ2LjE4IDkyLjIwNiA2NDcuODIgODkuNzQ0MkM2NTMuMzQxIDgxLjQ2MDMgNjYwLjQ5OSA3NC4zNjggNjY4Ljg3MiA2OC45MTUxQzY3OC43NDQgNjIuNDg1OCA2OTAuMDE4IDU4LjUyMzkgNzAxLjc0MiA1Ny4zNjM0QzcxMy40NjYgNTYuMjAyOCA3MjUuMjk3IDU3Ljg3NzUgNzM2LjIzOCA2Mi4yNDY1Qzc0NC43MTQgNjUuNjMwOSA3NTIuNDYzIDcwLjU1NTIgNzU5LjEwNSA3Ni43NDc3TDc2NS43ODkgNzAuOTE2TDc3MC43NDcgOTYuMTc4NEw3NDYuMzkgODcuODQwNUw3NTAuOTgyIDgzLjgzNDdDNzQ1LjQ5MyA3OC44OTU3IDczOS4xNjEgNzQuOTQ5MyA3MzIuMjY1IDcyLjE5NTlDNzIyLjkxOSA2OC40NjM4IDcxMi44MTIgNjcuMDMzMiA3MDIuNzk3IDY4LjAyNDZDNjkyLjc4MiA2OS4wMTYgNjgzLjE1MiA3Mi40MDA0IDY3NC43MTggNzcuODkyNkM2NjcuNzg1IDgyLjQwODEgNjYxLjgyNyA4OC4yMzk2IDY1Ny4xNzIgOTUuMDM4NkM2NTUuNTAxIDk3LjQ3OTggNjUyLjI1MSA5OC40MDEzIDY0OS42NzcgOTYuOTQ0M1oiIGZpbGw9InVybCgjcGFpbnQzX2xpbmVhcl8yNzNfMjUyNTYpIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTAzLjY3NyAxNjQuNzA0QzUwMS4xMDIgMTY2LjE2MSA1MDAuMTggMTY5LjQ0MiA1MDEuODIgMTcxLjkwNEM1MDcuMzQxIDE4MC4xODggNTE0LjQ5OSAxODcuMjggNTIyLjg3MiAxOTIuNzMzQzUzMi43NDQgMTk5LjE2MyA1NDQuMDE4IDIwMy4xMjUgNTU1Ljc0MiAyMDQuMjg1QzU2Ny40NjYgMjA1LjQ0NiA1NzkuMjk3IDIwMy43NzEgNTkwLjIzOCAxOTkuNDAyQzU5OC43MTQgMTk2LjAxOCA2MDYuNDYzIDE5MS4wOTMgNjEzLjEwNSAxODQuOTAxTDYxOS43ODkgMTkwLjczM0w2MjQuNzQ3IDE2NS40N0w2MDAuMzkgMTczLjgwOEw2MDQuOTgyIDE3Ny44MTRDNTk5LjQ5MyAxODIuNzUzIDU5My4xNjEgMTg2LjY5OSA1ODYuMjY1IDE4OS40NTNDNTc2LjkxOSAxOTMuMTg1IDU2Ni44MTIgMTk0LjYxNSA1NTYuNzk3IDE5My42MjRDNTQ2Ljc4MiAxOTIuNjMyIDUzNy4xNTIgMTg5LjI0OCA1MjguNzE4IDE4My43NTZDNTIxLjc4NSAxNzkuMjQgNTE1LjgyNyAxNzMuNDA5IDUxMS4xNzIgMTY2LjYxQzUwOS41MDEgMTY0LjE2OSA1MDYuMjUxIDE2My4yNDcgNTAzLjY3NyAxNjQuNzA0WiIgZmlsbD0idXJsKCNwYWludDRfbGluZWFyXzI3M18yNTI1NikiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMTEuNjc3IDE2NC43MDRDMjA5LjEwMiAxNjYuMTYxIDIwOC4xOCAxNjkuNDQyIDIwOS44MiAxNzEuOTA0QzIxNS4zNDEgMTgwLjE4OCAyMjIuNDk5IDE4Ny4yOCAyMzAuODcyIDE5Mi43MzNDMjQwLjc0NCAxOTkuMTYzIDI1Mi4wMTggMjAzLjEyNCAyNjMuNzQyIDIwNC4yODVDMjc1LjQ2NiAyMDUuNDQ2IDI4Ny4yOTcgMjAzLjc3MSAyOTguMjM4IDE5OS40MDJDMzA2LjcxNCAxOTYuMDE4IDMxNC40NjMgMTkxLjA5MyAzMjEuMTA1IDE4NC45MDFMMzI3Ljc4OSAxOTAuNzMzTDMzMi43NDcgMTY1LjQ3TDMwOC4zOSAxNzMuODA4TDMxMi45ODIgMTc3LjgxNEMzMDcuNDkzIDE4Mi43NTMgMzAxLjE2MSAxODYuNjk5IDI5NC4yNjUgMTg5LjQ1MkMyODQuOTE5IDE5My4xODUgMjc0LjgxMiAxOTQuNjE1IDI2NC43OTcgMTkzLjYyNEMyNTQuNzgyIDE5Mi42MzIgMjQ1LjE1MiAxODkuMjQ4IDIzNi43MTggMTgzLjc1NkMyMjkuNzg1IDE3OS4yNCAyMjMuODI3IDE3My40MDkgMjE5LjE3MiAxNjYuNjFDMjE3LjUwMSAxNjQuMTY5IDIxNC4yNTEgMTYzLjI0NyAyMTEuNjc3IDE2NC43MDRaIiBmaWxsPSJ1cmwoI3BhaW50NV9saW5lYXJfMjczXzI1MjU2KSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTc5NS42NzcgMTY0LjcwNEM3OTMuMTAyIDE2Ni4xNjEgNzkyLjE4IDE2OS40NDIgNzkzLjgyIDE3MS45MDRDNzk5LjM0MSAxODAuMTg4IDgwNi40OTkgMTg3LjI4IDgxNC44NzIgMTkyLjczM0M4MjQuNzQ0IDE5OS4xNjMgODM2LjAxOCAyMDMuMTI0IDg0Ny43NDIgMjA0LjI4NUM4NTkuNDY2IDIwNS40NDYgODcxLjI5NyAyMDMuNzcxIDg4Mi4yMzggMTk5LjQwMkM4OTAuNzE0IDE5Ni4wMTggODk4LjQ2MyAxOTEuMDkzIDkwNS4xMDUgMTg0LjkwMUw5MTEuNzg5IDE5MC43MzJMOTE2Ljc0NyAxNjUuNDdMODkyLjM5IDE3My44MDhMODk2Ljk4MiAxNzcuODE0Qzg5MS40OTMgMTgyLjc1MyA4ODUuMTYxIDE4Ni42OTkgODc4LjI2NSAxODkuNDUyQzg2OC45MTkgMTkzLjE4NSA4NTguODEyIDE5NC42MTUgODQ4Ljc5NyAxOTMuNjI0QzgzOC43ODIgMTkyLjYzMiA4MjkuMTUyIDE4OS4yNDggODIwLjcxOCAxODMuNzU2QzgxMy43ODUgMTc5LjI0IDgwNy44MjcgMTczLjQwOSA4MDMuMTcyIDE2Ni42MUM4MDEuNTAxIDE2NC4xNjkgNzk4LjI1MSAxNjMuMjQ3IDc5NS42NzcgMTY0LjcwNFoiIGZpbGw9InVybCgjcGFpbnQ2X2xpbmVhcl8yNzNfMjUyNTYpIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTA4LjE5MyA5Ny4wOTAxQzUwOC4yMTUgOTcuMDQ5NSA1MDguMjM2IDk3LjAwODkgNTA4LjI1NyA5Ni45NjhDNTA4LjI2OCA5Ni45NSA1MDguMjc5IDk2LjkzMTggNTA4LjI4OSA5Ni45MTM3QzUwOC4zMDUgOTYuODg1OSA1MDguMzIxIDk2Ljg1OCA1MDguMzM3IDk2LjgzQzUxMy40ODkgODcuNjQ3MSA1MjAuODg4IDc5Ljg4MyA1MjkuODc3IDc0LjI4OEM1NDAuNDAxIDY3LjczNzIgNTUyLjYzMiA2NC40NTQyIDU2NS4wMjIgNjQuODU0NEM1NzcuNDEyIDY1LjI1NDUgNTg5LjQwNSA2OS4zMTk3IDU5OS40ODUgNzYuNTM2QzYwNi44MjQgODEuNzkwNSA2MTIuOTA5IDg4LjU0MzcgNjE3LjM2MyA5Ni4zMDU0QzYxNy40NjEgOTYuNTkxMSA2MTcuNTgzIDk2Ljg3MjYgNjE3LjczMiA5Ny4xNDY4QzYxOS44OTQgMTAxLjEyOCA2MjIuMDQ2IDEwNi41NTggNjI0LjQwMSAxMTMuMDdDNjI1LjMzNSAxMTUuNjUxIDYyNi4zMTggMTE4LjQ1NSA2MjcuMzQgMTIxLjM3TDYyNy4zNDEgMTIxLjM3MUM2MjguODA2IDEyNS41NDkgNjMwLjM1MSAxMjkuOTU1IDYzMS45NDQgMTM0LjI1OUM2MzcuMzk4IDE0OSA2NDQuMjU5IDE2NS4wMDcgNjU0LjI0MyAxNzYuMTY1QzY1NC40ODcgMTc2LjQzOCA2NTQuNzUyIDE3Ni42OCA2NTUuMDMzIDE3Ni44OTFDNjU3Ljg1NyAxNzkuOTI5IDY2MC45NDQgMTgyLjczNSA2NjQuMjY5IDE4NS4yNzRDNjc1LjQzIDE5My43OTYgNjg4Ljc5OSAxOTguOTQyIDcwMi43OTQgMjAwLjEwNEM3MTYuNzg5IDIwMS4yNjUgNzMwLjgyNCAxOTguMzkzIDc0My4yMzcgMTkxLjgyN0M3NTQuMDY5IDE4Ni4wOTggNzYzLjI3IDE3Ny43NjcgNzcwLjAzNCAxNjcuNjE3Qzc3MS42NzUgMTY1LjE1NSA3NzAuNzUzIDE2MS44NzQgNzY4LjE3OCAxNjAuNDE3Qzc2NS42MDMgMTU4Ljk2IDc2Mi4zNTQgMTU5Ljg4MiA3NjAuNjgyIDE2Mi4zMjNDNzU0Ljk0OCAxNzAuNyA3NDcuMjUgMTc3LjU4NiA3MzguMjI4IDE4Mi4zNTdDNzI3LjYyNCAxODcuOTY2IDcxNS42MzUgMTkwLjQxOSA3MDMuNjggMTg5LjQyN0M2OTEuNzI1IDE4OC40MzUgNjgwLjMwNSAxODQuMDM5IDY3MC43NyAxNzYuNzU5QzY2Ny44OSAxNzQuNTYgNjY1LjIxOCAxNzIuMTI1IDY2Mi43NzggMTY5LjQ4N0M2NjIuNjQ1IDE2OS4yOTIgNjYyLjQ5OCAxNjkuMTA0IDY2Mi4zMzcgMTY4LjkyNEM2NTMuODU4IDE1OS40NDggNjQ3LjU3NiAxNDUuMjExIDY0Mi4xMjkgMTMwLjQ5QzY0MC41MzQgMTI2LjE4IDYzOS4wODEgMTIyLjAzMyA2MzcuNjY0IDExNy45OUw2MzcuNjYzIDExNy45ODdDNjM2LjY0MSAxMTUuMDcgNjM1LjYzOCAxMTIuMjA3IDYzNC42MTQgMTA5LjM3NkM2MzMuMTE3IDEwNS4yMzggNjMxLjYxIDEwMS4yNjYgNjMwLjA0NyA5Ny42OTY4QzYyOS45NzIgOTcuMzI0NiA2MjkuODUyIDk2Ljk1MzkgNjI5LjY4NCA5Ni41OTA3QzYyNC4zNTcgODUuMDk3NyA2MTYuMTM0IDc1LjE0NjUgNjA1Ljc4NSA2Ny43MzY5QzU5My45NjUgNTkuMjc0NyA1NzkuOTAxIDU0LjUwNzUgNTY1LjM3MSA1NC4wMzgzQzU1MC44NDIgNTMuNTY5MSA1MzYuNSA1Ny40MTg4IDUyNC4xNTggNjUuMTAwOEM1MTMuNjkzIDcxLjYxNSA1MDUuMDY1IDgwLjYzNjcgNDk5LjAyOSA5MS4zMDQ4QzQ5OC44OTEgOTEuNDk1MSA0OTguNzY0IDkxLjY5NjUgNDk4LjY0OCA5MS45MDg4QzQ5Ni4wNTcgOTYuNjgyNSA0OTMuNjY0IDEwMi44MzggNDkxLjI5NyAxMDkuNDE3QzQ5MC4yNjIgMTEyLjI5NiA0ODkuMjQ4IDExNS4yMDUgNDg4LjIxNSAxMTguMTcxTDQ4OC4yMTQgMTE4LjE3NEw0ODguMjE0IDExOC4xNzVMNDg4LjIxNCAxMTguMTc1TDQ4OC4yMTQgMTE4LjE3NUw0ODguMjEzIDExOC4xNzZDNDg2LjggMTIyLjIzMyA0ODUuMzUgMTI2LjM5NiA0ODMuNzU3IDEzMC43MjlDNDc4LjI4OSAxNDUuNiA0NzEuOTkgMTU5Ljk2OCA0NjMuNTE4IDE2OS40MzZDNDYzLjM1NyAxNjkuNjE3IDQ2My4yMSAxNjkuODA1IDQ2My4wNzcgMTY5Ljk5OUM0NjAuNjM3IDE3Mi42MzcgNDU3Ljk2NSAxNzUuMDcyIDQ1NS4wODUgMTc3LjI3MUM0NDUuNTUgMTg0LjU1MSA0MzQuMTMgMTg4Ljk0OCA0MjIuMTc1IDE4OS45NEM0MTAuMjIgMTkwLjkzMiAzOTguMjMxIDE4OC40NzggMzg3LjYyNiAxODIuODdDMzc4LjYwNSAxNzguMDk4IDM3MC45MDcgMTcxLjIxMyAzNjUuMTcyIDE2Mi44MzVDMzYzLjUwMSAxNjAuMzk0IDM2MC4yNTEgMTU5LjQ3MyAzNTcuNjc3IDE2MC45M0MzNTUuMTAyIDE2Mi4zODcgMzU0LjE4IDE2NS42NjggMzU1LjgyIDE2OC4xM0MzNjIuNTg1IDE3OC4yNzkgMzcxLjc4NiAxODYuNjExIDM4Mi42MTggMTkyLjM0QzM5NS4wMzEgMTk4LjkwNiA0MDkuMDY2IDIwMS43NzggNDIzLjA2MSAyMDAuNjE2QzQzNy4wNTYgMTk5LjQ1NSA0NTAuNDI1IDE5NC4zMDkgNDYxLjU4NiAxODUuNzg2QzQ2NC45MTEgMTgzLjI0OCA0NjcuOTk4IDE4MC40NDIgNDcwLjgyMiAxNzcuNDA0QzQ3MS4xMDMgMTc3LjE5MiA0NzEuMzY4IDE3Ni45NSA0NzEuNjEyIDE3Ni42NzhDNDgxLjYwMyAxNjUuNTEyIDQ4OC40ODEgMTQ5LjM1MSA0OTMuOTUgMTM0LjQ3N0M0OTUuNTM4IDEzMC4xNTkgNDk3LjA4MSAxMjUuNzMyIDQ5OC41NDQgMTIxLjUzNEw0OTguNTQ1IDEyMS41MzNDNDk5LjU3OSAxMTguNTY2IDUwMC41NzQgMTE1LjcxMyA1MDEuNTE2IDExMy4wOTNDNTAzLjg3OCAxMDYuNTI2IDUwNi4wMzQgMTAxLjA2NiA1MDguMTkzIDk3LjA5MDFaIiBmaWxsPSJ1cmwoI3BhaW50N19saW5lYXJfMjczXzI1MjU2KSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTgwMC4xOTMgOTcuMDkwMUM4MDAuMjE1IDk3LjA0OTggODAwLjIzNiA5Ny4wMDk0IDgwMC4yNTcgOTYuOTY4OEM4MDAuMjY3IDk2Ljk1MiA4MDAuMjc3IDk2LjkzNTEgODAwLjI4NyA5Ni45MTgyQzgwMC4zMDQgOTYuODg5IDgwMC4zMiA5Ni44NTk2IDgwMC4zMzcgOTYuODMwMUM4MDQuNzcyIDg4LjkyNDggODEwLjg4MSA4Mi4wNTU5IDgxOC4yNiA3Ni43MTc2QzgyNy4xMDQgNzAuMzE5NSA4MzcuNDY2IDY2LjM0MTkgODQ4LjMxOSA2NS4xNzg2Qzg1OS4xNzMgNjQuMDE1NCA4NzAuMTQyIDY1LjcwNjggODgwLjE0MSA3MC4wODU0Qzg4Ny40MDIgNzMuMjY0OSA4OTMuOTY4IDc3Ljc4MTIgODk5LjUxMSA4My4zNzI0TDg5NC4zOSA4Ny44NEw5MTguNzQ3IDk2LjE3NzlMOTEzLjc4OSA3MC45MTU2TDkwNy42OCA3Ni4yNDU4QzkwMS4wNzkgNjkuNDYxOCA4OTMuMjA4IDYzLjk5MzggODg0LjQ4MiA2MC4xNzI1Qzg3Mi43NTcgNTUuMDM3OSA4NTkuODk0IDUzLjA1NDUgODQ3LjE2NiA1NC40MTg2QzgzNC40MzkgNTUuNzgyNyA4MjIuMjg4IDYwLjQ0NyA4MTEuOTE3IDY3Ljk0OThDODAzLjMzNiA3NC4xNTc5IDc5Ni4yMiA4Mi4xMzEyIDc5MS4wMjkgOTEuMzA0NEM3OTAuODkxIDkxLjQ5NDggNzkwLjc2NCA5MS42OTY0IDc5MC42NDggOTEuOTA4N0M3ODguMDU3IDk2LjY4MjUgNzg1LjY2NCAxMDIuODM4IDc4My4yOTcgMTA5LjQxN0M3ODIuMjYyIDExMi4yOTYgNzgxLjI0OCAxMTUuMjA1IDc4MC4yMTUgMTE4LjE3TDc4MC4yMTQgMTE4LjE3NUw3ODAuMjEzIDExOC4xNzdMNzgwLjIxMSAxMTguMTgyQzc3OC43OTkgMTIyLjIzOCA3NzcuMzUgMTI2LjM5OCA3NzUuNzU3IDEzMC43MjlDNzcwLjI4OSAxNDUuNiA3NjMuOTkgMTU5Ljk2OCA3NTUuNTE4IDE2OS40MzZDNzU1LjM1NyAxNjkuNjE3IDc1NS4yMSAxNjkuODA1IDc1NS4wNzcgMTY5Ljk5OUM3NTIuNjM3IDE3Mi42MzcgNzQ5Ljk2NSAxNzUuMDcyIDc0Ny4wODUgMTc3LjI3MUM3MzcuNTUgMTg0LjU1MSA3MjYuMTMgMTg4Ljk0OCA3MTQuMTc1IDE4OS45NEM3MDIuMjIgMTkwLjkzMiA2OTAuMjMxIDE4OC40NzggNjc5LjYyNiAxODIuODdDNjcwLjYwNSAxNzguMDk4IDY2Mi45MDcgMTcxLjIxMyA2NTcuMTcyIDE2Mi44MzVDNjU1LjUwMSAxNjAuMzk0IDY1Mi4yNTEgMTU5LjQ3MyA2NDkuNjc3IDE2MC45M0M2NDcuMTAyIDE2Mi4zODcgNjQ2LjE4IDE2NS42NjggNjQ3LjgyIDE2OC4xM0M2NTQuNTg1IDE3OC4yNzkgNjYzLjc4NiAxODYuNjExIDY3NC42MTggMTkyLjM0QzY4Ny4wMzEgMTk4LjkwNiA3MDEuMDY2IDIwMS43NzggNzE1LjA2MSAyMDAuNjE2QzcyOS4wNTYgMTk5LjQ1NSA3NDIuNDI1IDE5NC4zMDkgNzUzLjU4NiAxODUuNzg2Qzc1Ni45MTEgMTgzLjI0OCA3NTkuOTk4IDE4MC40NDIgNzYyLjgyMiAxNzcuNDA0Qzc2My4xMDMgMTc3LjE5MiA3NjMuMzY4IDE3Ni45NSA3NjMuNjEyIDE3Ni42NzhDNzczLjYwMyAxNjUuNTEyIDc4MC40ODEgMTQ5LjM1MSA3ODUuOTUgMTM0LjQ3N0M3ODcuNTM3IDEzMC4xNjIgNzg5LjA3OCAxMjUuNzQgNzkwLjU0MSAxMjEuNTQ1TDc5MC41NDMgMTIxLjU0TDc5MC41NDUgMTIxLjUzNEw3OTAuNTQ1IDEyMS41MzNDNzkxLjU3OSAxMTguNTY2IDc5Mi41NzQgMTE1LjcxMyA3OTMuNTE2IDExMy4wOTNDNzk1Ljg3OCAxMDYuNTI2IDc5OC4wMzQgMTAxLjA2NiA4MDAuMTkzIDk3LjA5MDFaIiBmaWxsPSJ1cmwoI3BhaW50OF9saW5lYXJfMjczXzI1MjU2KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzI3M18yNTI1NiIgeDE9IjM0OC41IiB5MT0iNTQiIHgyPSI2NS44MzU4IiB5Mj0iMTU0LjY0NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkY5OTM0Ii8+CjxzdG9wIG9mZnNldD0iMC4yMjA0NTIiIHN0b3AtY29sb3I9IiNGMjY4MTgiLz4KPHN0b3Agb2Zmc2V0PSIwLjU2NDk4IiBzdG9wLWNvbG9yPSIjRkY5OTM0Ii8+CjxzdG9wIG9mZnNldD0iMC45NDI5NTYiIHN0b3AtY29sb3I9IiNGMjY4MTgiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzI3M18yNTI1NiIgeDE9IjQ2NCIgeTE9Ijk4LjAwMDIiIHgyPSIzNDkiIHkyPSI5OC4wMDAyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGNDZFMUQiLz4KPHN0b3Agb2Zmc2V0PSIwLjU3NTE5NyIgc3RvcC1jb2xvcj0iI0ZGOTkzNCIvPgo8c3RvcCBvZmZzZXQ9IjAuODY1ODI0IiBzdG9wLWNvbG9yPSIjRkY5OTM0Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyX2xpbmVhcl8yNzNfMjUyNTYiIHgxPSIxOTEiIHkxPSI5OC4wMDAyIiB4Mj0iMzYiIHkyPSI5OC4wMDAyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMC4xNzY1MDkiIHN0b3AtY29sb3I9IiNGMjY4MTgiLz4KPHN0b3Agb2Zmc2V0PSIwLjQ2MjgyNSIgc3RvcC1jb2xvcj0iI0ZGOTkzNCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjk5MzQiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDNfbGluZWFyXzI3M18yNTI1NiIgeDE9Ijc3MSIgeTE9Ijk4LjAwMDUiIHgyPSI2MjcuNSIgeTI9IjEwMi41IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMC4xMjM3MTUiIHN0b3AtY29sb3I9IiNGMjY4MTgiLz4KPHN0b3Agb2Zmc2V0PSIwLjU5NzA2MiIgc3RvcC1jb2xvcj0iI0ZGOTkzNCIvPgo8c3RvcCBvZmZzZXQ9IjAuOTE5MzUyIiBzdG9wLWNvbG9yPSIjRkY5OTM0Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ0X2xpbmVhcl8yNzNfMjUyNTYiIHgxPSI0ODgiIHkxPSIyMDUiIHgyPSI2MzAuNSIgeTI9IjIwNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkU5MzNDIi8+CjxzdG9wIG9mZnNldD0iMC41NTUzODYiIHN0b3AtY29sb3I9IiNGRjk5MzQiLz4KPHN0b3Agb2Zmc2V0PSIwLjk1ODE4NCIgc3RvcC1jb2xvcj0iI0YyNjgxOCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50NV9saW5lYXJfMjczXzI1MjU2IiB4MT0iMjA5IiB5MT0iMjA1IiB4Mj0iMzI1IiB5Mj0iMjA1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRTkzM0MiLz4KPHN0b3Agb2Zmc2V0PSIwLjUxNDI5OCIgc3RvcC1jb2xvcj0iI0ZFOTMzQyIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGMjY4MTgiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDZfbGluZWFyXzI3M18yNTI1NiIgeDE9Ijc2OS41IiB5MT0iMjA1IiB4Mj0iOTUyIiB5Mj0iMjA1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMC4wNjk1NDA2IiBzdG9wLWNvbG9yPSIjRkY5OTM0Ii8+CjxzdG9wIG9mZnNldD0iMC41MTQ1MyIgc3RvcC1jb2xvcj0iI0ZGOTkzNCIvPgo8c3RvcCBvZmZzZXQ9IjAuNjk1NDYiIHN0b3AtY29sb3I9IiNGMjY4MTgiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDdfbGluZWFyXzI3M18yNTI1NiIgeDE9IjQzOC41IiB5MT0iNTMuOTk5OSIgeDI9IjU5MS43MDYiIHkyPSItNDIuMTExNiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkY5OTM0Ii8+CjxzdG9wIG9mZnNldD0iMC40NTg0OSIgc3RvcC1jb2xvcj0iI0YyNjgxOCIvPgo8c3RvcCBvZmZzZXQ9IjAuOTczMDMxIiBzdG9wLWNvbG9yPSIjRkY5OTM0Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ4X2xpbmVhcl8yNzNfMjUyNTYiIHgxPSIxMDIyLjUiIHkxPSI1Ny4wOTY5IiB4Mj0iNzg2LjgwOCIgeTI9IjE4NS44MjYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agb2Zmc2V0PSIwLjQyMzY1MyIgc3RvcC1jb2xvcj0iI0YyNjgxOCIvPgo8c3RvcCBvZmZzZXQ9IjAuNTIxNzkzIiBzdG9wLWNvbG9yPSIjRkY5OTM0Ii8+CjxzdG9wIG9mZnNldD0iMC45MzE1MTUiIHN0b3AtY29sb3I9IiNGMjY4MTgiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkU5MzNDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==";

const ContainerDesafios = styled__default["default"].div `
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const ContainerItemDesafio = styled__default["default"].div `
  width: 100%;
  background-image: url(${imgSeta});
  background-repeat: no-repeat;
  padding: 1rem;
  display: flex;
  background-size: 100%;
  background-position: top 5rem;
  background-position: -2rem;
  justify-content: center;
  margin-bottom: 1rem;
`;
const ItemDesafio = styled__default["default"].div `
  width: 14%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 1.2rem;
  margin-left: 0.1rem;
`;
const QuantidadeDesafio = styled__default["default"].div `
  width: 85%;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 1.5rem;
  margin-top: 1rem;
  height: 8rem;
  border-radius: 100%;
  border-width: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin: 0;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #222222;
    word-wrap: break-word;
    max-width: 90%;
    word-break: break-all;
  }
  p {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #222222;
  }
`;
const containerTitleDesafio = styled__default["default"].div `
  width: 100%;
  height: 24px;
  padding: 0 4rem;
  display: flex;
  flex-direction: row;
`;
const TitleDesafiosWhite = styled__default["default"].div `
  width: 240px;
  height: 24px;
  background: #ffffff;
  border: 1px solid #d1d5db;
  border-radius: 30px;
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 15px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #d14211;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 9999;
  margin-right: -2rem;
  margin-left: -2rem;
`;
const TitleDesafiosGrey = styled__default["default"].div `
  width: 240px;
  height: 24px;
  background: rgba(255, 255, 255, 0.4);
  border: 1px solid #d1d5db;
  border-radius: 30px;
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 15px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #d14211;
  display: flex;
  justify-content: center;
  position: relative;
`;

function QuantidadeDesafios({ definicao, hipoteses, testes, resultados, proximosPassos, finalizados, languagem }) {
    return (jsxRuntime.jsxs(ContainerDesafios, { children: [jsxRuntime.jsxs(ContainerItemDesafio, { children: [jsxRuntime.jsx(ItemDesafio, { children: jsxRuntime.jsxs(QuantidadeDesafio, { children: [jsxRuntime.jsx("h1", { children: definicao.count }), jsxRuntime.jsx("p", { children: definicao.percentage })] }) }), jsxRuntime.jsx(ItemDesafio, { children: jsxRuntime.jsxs(QuantidadeDesafio, { children: [jsxRuntime.jsx("h1", { children: hipoteses.count }), jsxRuntime.jsx("p", { children: hipoteses.percentage })] }) }), jsxRuntime.jsx(ItemDesafio, { children: jsxRuntime.jsxs(QuantidadeDesafio, { children: [jsxRuntime.jsx("h1", { children: testes.count }), jsxRuntime.jsx("p", { children: testes.percentage })] }) }), jsxRuntime.jsx(ItemDesafio, { children: jsxRuntime.jsxs(QuantidadeDesafio, { children: [jsxRuntime.jsx("h1", { children: resultados.count }), jsxRuntime.jsx("p", { children: resultados.percentage })] }) }), jsxRuntime.jsx(ItemDesafio, { children: jsxRuntime.jsxs(QuantidadeDesafio, { children: [jsxRuntime.jsx("h1", { children: proximosPassos.count }), jsxRuntime.jsx("p", { children: proximosPassos.percentage })] }) }), jsxRuntime.jsx(ItemDesafio, { children: jsxRuntime.jsxs(QuantidadeDesafio, { children: [jsxRuntime.jsx("h1", { children: finalizados.count }), jsxRuntime.jsx("p", { children: finalizados.percentage })] }) })] }), jsxRuntime.jsxs(containerTitleDesafio, { children: [jsxRuntime.jsx(TitleDesafiosWhite, { children: languagem
                            ? languagem === 'en-US'
                                ? definicao.title_en
                                    ? definicao.title_en
                                    : definicao.title
                                : languagem === 'es'
                                    ? definicao.title_es
                                        ? definicao.title_es
                                        : definicao.title
                                    : definicao.title
                            : definicao.title }), jsxRuntime.jsx(TitleDesafiosGrey, { children: languagem
                            ? languagem === 'en-US'
                                ? hipoteses.title_en
                                    ? hipoteses.title_en
                                    : hipoteses.title
                                : languagem === 'es'
                                    ? hipoteses.title_es
                                        ? hipoteses.title_es
                                        : hipoteses.title
                                    : hipoteses.title
                            : hipoteses.title }), jsxRuntime.jsx(TitleDesafiosWhite, { children: languagem
                            ? languagem === 'en-US'
                                ? testes.title_en
                                    ? testes.title_en
                                    : testes.title
                                : languagem === 'es'
                                    ? testes.title_es
                                        ? testes.title_es
                                        : testes.title
                                    : testes.title
                            : testes.title }), jsxRuntime.jsx(TitleDesafiosGrey, { children: languagem
                            ? languagem === 'en-US'
                                ? resultados.title_en
                                    ? resultados.title_en
                                    : resultados.title
                                : languagem === 'es'
                                    ? resultados.title_es
                                        ? resultados.title_es
                                        : resultados.title
                                    : resultados.title
                            : resultados.title }), jsxRuntime.jsx(TitleDesafiosWhite, { children: languagem
                            ? languagem === 'en-US'
                                ? proximosPassos.title_en
                                    ? proximosPassos.title_en
                                    : proximosPassos.title
                                : languagem === 'es'
                                    ? proximosPassos.title_es
                                        ? proximosPassos.title_es
                                        : proximosPassos.title
                                    : proximosPassos.title
                            : proximosPassos.title }), jsxRuntime.jsx(TitleDesafiosGrey, { children: languagem
                            ? languagem === 'en-US'
                                ? finalizados.title_en
                                    ? finalizados.title_en
                                    : finalizados.title
                                : languagem === 'es'
                                    ? finalizados.title_es
                                        ? finalizados.title_es
                                        : finalizados.title
                                    : finalizados.title
                            : finalizados.title })] })] }));
}

/**
 * @param {UserCardProps} props
 */
function CalendarCard$1(props) {
    const { t } = reactI18next.useTranslation();
    const [selected, setSelected] = React.useState(props.selected);
    const setClass = () => {
        setSelected(!selected);
        props.handleSelect(props.userID);
    };
    const [statusColor, setStatusColor] = React.useState('#A6A6A6');
    const hasCurrentData = () => {
        return props.newLicenses.filter(el => el.isCurrent);
    };
    const hasAssignedLicenseData = () => {
        return props.newLicenses.filter(el => el.isCurrent && el.hasLicense && !el.hasTrail && !el.hasEnrollment);
    };
    const hasDefinedTrailData = () => {
        return props.newLicenses.filter(el => el.isCurrent && el.hasTrail && !el.hasEnrollment);
    };
    const hasEnrollmentsData = () => {
        return props.newLicenses.filter(el => el.isCurrent && el.hasEnrollment);
    };
    const hasPreviusData = () => {
        return props.newLicenses.filter(el => !el.isCurrent);
    };
    const newFormatHtml = () => {
        const hasCurrent = hasCurrentData();
        const hasAssignedLicense = hasAssignedLicenseData();
        const hasDefinedTrail = hasDefinedTrailData();
        const hasEnrollments = hasEnrollmentsData();
        const hasPrevius = hasPreviusData();
        return (jsxRuntime.jsxs("div", { children: [hasCurrent.length > 0 &&
                    jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", { style: { fontSize: '16px', fontWeight: '700', paddingBottom: '8px' }, children: props.newTexts.current }), hasAssignedLicense.length > 0 &&
                                jsxRuntime.jsxs("div", { style: { fontSize: '16px', paddingBottom: '8px' }, children: [props.newTexts.assignedLicense, ": ", ' ', hasAssignedLicense.map(p => jsxRuntime.jsx(Tag, { title: p.name, color: '#000', selected: selected, inverted: false })), !hasDefinedTrail && !hasEnrollments && (props.assessment === 'not-started' || props.assessment === 'started') && jsxRuntime.jsx(Tag, { title: 'Assessment', color: '#000', selected: selected, inverted: false, iconType: "warning" })] }), hasDefinedTrail.length > 0 &&
                                jsxRuntime.jsxs("div", { style: { fontSize: '16px', paddingBottom: '8px' }, children: [props.newTexts.definedTrail, ": ", ' ', hasDefinedTrail.map(p => jsxRuntime.jsx(Tag, { title: p.name, color: '#000', selected: selected, inverted: false })), !hasEnrollments && (props.assessment === 'not-started' || props.assessment === 'started') && jsxRuntime.jsx(Tag, { title: 'Assessment', color: '#000', selected: selected, inverted: false, iconType: "warning" })] }), hasEnrollments.length > 0 &&
                                jsxRuntime.jsxs("div", { style: { fontSize: '16px', paddingBottom: '8px' }, children: [props.newTexts.enrollments, ": ", ' ', hasEnrollments.map(p => jsxRuntime.jsx(Tag, { title: p.name, color: '#000', selected: selected, inverted: false })), (props.assessment === 'not-started' || props.assessment === 'started') && jsxRuntime.jsx(Tag, { title: 'Assessment', color: '#000', selected: selected, inverted: false, iconType: "warning" })] })] }), hasPrevius.length > 0 &&
                    jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", { style: { fontSize: '16px', fontWeight: '700', paddingBottom: '8px' }, children: props.newTexts.previus }), jsxRuntime.jsxs("div", { style: { fontSize: '16px', paddingBottom: '8px' }, children: [hasPrevius.map(p => jsxRuntime.jsx(Tag, { title: p.name, color: '#BDBDBD', selected: selected, inverted: false })), props.assessment === 'finished' && jsxRuntime.jsx(Tag, { title: 'Assessment', color: '#BDBDBD', selected: selected, inverted: false, iconType: "checked" })] })] })] }));
    };
    React.useEffect(() => {
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
    React.useEffect(() => {
        setSelected(props.selected);
    }, [props.selected]);
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: props.loading ?
            jsxRuntime.jsxs("div", { className: 'cardContentNoMargin', children: [jsxRuntime.jsx("div", { className: 'shimmer cardTopRightConner', style: { color: statusColor, background: statusColor, padding: '4px' }, children: "Status" }), jsxRuntime.jsxs("div", { className: 'content', children: [jsxRuntime.jsxs("div", { className: 'centeredVertically', style: { paddingBottom: '16px' }, children: [selected ? jsxRuntime.jsx(CheckboxChecked, {}) : jsxRuntime.jsx(CheckboxEmpty, {}), jsxRuntime.jsx("div", { style: { marginLeft: '16px', marginRight: '16px' }, className: "avatar shimmer" }), jsxRuntime.jsxs("div", { style: { display: 'inline-grid' }, children: [jsxRuntime.jsx("div", { className: "shimmer", children: "ShimmerName" }), jsxRuntime.jsx("div", { className: "shimmer", children: "ShimmerEmail" })] })] }), jsxRuntime.jsxs("div", { className: 'innerContent', style: { paddingBottom: '0px !important' }, children: [jsxRuntime.jsx("div", { className: "shimmer", children: "Area: " }), jsxRuntime.jsx("div", { className: "shimmer", children: "Cargo:" }), jsxRuntime.jsx(Tag, { title: 'Product Tag', color: '#000', loading: true, selected: false, inverted: false }), jsxRuntime.jsx(Tag, { title: 'Product Tag', color: '#000', loading: true, selected: false, inverted: false })] })] }), jsxRuntime.jsx(material.Button, { className: 'shimmer frstButton blue', fullWidth: true })] })
            :
                jsxRuntime.jsxs("div", { onClick: setClass, className: 'cardContentNoMargin', style: { color: selected ? '#fff' : '#000', border: `1px solid ${statusColor}`, background: selected ? "#ff4d0d" : "#fff" }, children: [jsxRuntime.jsx("div", { className: 'cardTopRightConner', style: { color: '#fff', background: statusColor, padding: '4px' }, children: t(`user.card.status.${props.userStatus}`) }), jsxRuntime.jsxs("div", { className: 'content', style: { marginBottom: '46px' }, children: [jsxRuntime.jsxs("div", { className: 'centeredVertically', style: { paddingBottom: '16px' }, children: [jsxRuntime.jsxs("div", { style: { paddingRight: '8px' }, children: [" ", selected ? jsxRuntime.jsx(CheckboxChecked, {}) : jsxRuntime.jsx(CheckboxEmpty, {})] }), jsxRuntime.jsx("img", { src: props.userAvatar || "https://certificates-mentor.s3.amazonaws.com/frst-avatar-default.png", alt: "Avatar", className: "avatar" }), jsxRuntime.jsxs("div", { style: { paddingLeft: '8px', display: 'grid' }, children: [jsxRuntime.jsx("p", { style: { fontSize: '24px', fontWeight: '700', paddingBottom: '8px' }, children: props.userName }), jsxRuntime.jsx(material.Tooltip, { title: [props.userEmail], children: jsxRuntime.jsx("p", { style: { fontSize: '16px', fontWeight: '700', color: selected ? "#F3D224" : '#AEB0B3' }, className: 'ellipsis', children: props.userEmail }) })] })] }), jsxRuntime.jsx("div", { className: 'innerContent', children: jsxRuntime.jsxs("div", { style: { display: 'block' }, children: [props.userArea && jsxRuntime.jsxs("p", { style: { fontSize: '16px', fontWeight: '700', paddingBottom: '8px' }, children: [t('user.card.area'), ": ", props.userArea] }), props.userPosition && jsxRuntime.jsxs("p", { style: { fontSize: '16px', fontWeight: '400', paddingBottom: '8px' }, children: [t('user.card.position'), ": ", props.userPosition] }), props.newFormat ?
                                                jsxRuntime.jsx("div", { children: newFormatHtml() })
                                                :
                                                    jsxRuntime.jsxs("div", { children: [props.licenses.length > 0 ?
                                                                props.licenses.map((p) => {
                                                                    return jsxRuntime.jsx(Tag, { title: p, color: '#000', selected: selected, inverted: false });
                                                                })
                                                                :
                                                                    jsxRuntime.jsx(Tag, { title: t('user.card.noProduct'), color: '#FF0000', selected: selected, inverted: true }), (props.assessment === 'not-started' || props.assessment === 'started') && jsxRuntime.jsx(Tag, { title: 'Assessment', color: '#000', selected: selected, inverted: false, iconType: "warning" }), props.assessment === 'finished' && jsxRuntime.jsx(Tag, { title: 'Assessment', color: '#000', selected: selected, inverted: false, iconType: "checked" })] })] }) })] }), jsxRuntime.jsxs(material.Button, { onClick: props.editAction, className: 'frstButton blue fixedBottom', fullWidth: true, children: [jsxRuntime.jsx(EditIcon, {}), jsxRuntime.jsx("span", { style: { paddingLeft: '8px' }, children: t('globals.edit') })] })] }) }));
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

const Container$g = styled__default["default"](Card__default["default"]) `
  height: 100%;
  box-shadow: none !important;
  border: 1px solid #c4c4c4 !important;
  box-sizing: border-box !important;
  border-radius: 8px !important;
  padding: 24px !important;
`;
const Title$6 = styled__default["default"].span `
  font-size: 20px !important;
  color: #ff4d0d !important;
`;
const TextDescription$1 = styled__default["default"].span `
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
const DropDownList$2 = styled__default["default"](Select__default["default"]) `
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
    return (jsxRuntime.jsx(ColorlibStepIconRoot, { ownerState: { completed, active }, children: completed ? jsxRuntime.jsx(CheckIconCustom, {}) : active ? jsxRuntime.jsx(LoginIconCustom, {}) : jsxRuntime.jsx("div", {}) }));
}
function getMissedStepIcon() {
    return (jsxRuntime.jsx(ColorlibStepIconRoot, { ownerState: { completed: true, active: true }, children: jsxRuntime.jsx("div", {}) }));
}
function StepsComponent(props) {
    const { t } = reactI18next.useTranslation();
    let { events } = props;
    return (jsxRuntime.jsx(BoxStepper, { children: jsxRuntime.jsx(CustomStepper, { alternativeLabel: true, connector: jsxRuntime.jsx(ColorlibConnector, {}), children: events && events.length > 0 && events?.map((event) => (jsxRuntime.jsxs(CustomStep, { completed: event.completed, active: event.today, children: [jsxRuntime.jsxs(LabelDateStepper, { children: [event.day, " ", t(`calendar.monthsInitials.${event.month}`)] }), jsxRuntime.jsx(ContainerStepper, { children: jsxRuntime.jsx(material.Tooltip, { title: event.title, children: jsxRuntime.jsx(material.StepLabel, { StepIconComponent: event.completed && !event.present ? getMissedStepIcon : getStepIcon, children: jsxRuntime.jsx(LabelTitleStepper, { children: event.title }) }) }) })] }, event.id))) }) }));
}
/**
 * @param {CalendarProps} props
 */
function CalendarCard(props) {
    const { t } = reactI18next.useTranslation();
    const [module, setModule] = React.useState(0);
    const [moduleEvents, setModuleEvents] = React.useState([]);
    const [moduleSelector, setModuleSelector] = React.useState(false);
    const handleChange = (event) => {
        let val = event.target?.value;
        setModule(val);
        if (props.trails[val].events)
            setModuleEvents(props.trails[val].events);
    };
    React.useEffect(() => {
        if (props.trails[0]) {
            if (props.trails[0].events)
                setModuleEvents(props.trails[0].events);
            if (props.trails.length > 1)
                setModuleSelector(true);
        }
    }, [props.trails]);
    return (jsxRuntime.jsx("div", { style: { height: '100%' }, children: props.loading ?
            jsxRuntime.jsx(Container$g, { className: 'shimmer' })
            :
                jsxRuntime.jsx(Container$g, { children: jsxRuntime.jsxs(material.CardContent, { style: { padding: '0px' }, children: [jsxRuntime.jsx(Title$6, { children: t('calendar.title') }), moduleSelector &&
                                jsxRuntime.jsxs(ContainerDescription, { children: [jsxRuntime.jsx(TextDescription$1, { children: t('calendar.card.description') }), jsxRuntime.jsx(FormControlSelect, { fullWidth: true, children: jsxRuntime.jsx(DropDownList$2, { id: "module-id", value: module, onChange: handleChange, children: props.trails?.map((item, index) => {
                                                    return jsxRuntime.jsxs(material.MenuItem, { value: index, children: [item.name, " - ", item.moduleID] }, index);
                                                }) }) })] }), moduleEvents?.length === 0 &&
                                jsxRuntime.jsxs("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '140px', paddingBottom: '32px' }, children: [jsxRuntime.jsx(WarningIcon$1, {}), jsxRuntime.jsx("span", { style: { paddingLeft: '8px' }, children: t('calendar.notAvailable') })] }), moduleEvents && jsxRuntime.jsx(StepsComponent, { events: moduleEvents, short: props.short }), moduleEvents && moduleEvents.length > 0 &&
                                jsxRuntime.jsx(BoxLabelTimeMentoring, { children: props.trails[module]?.nextEvent ?
                                        jsxRuntime.jsxs(LabelTimeMentoring, { children: [t('calendar.card.mentoringSchedule'), " ", t(`calendar.weekdays.${props.trails[module].nextEvent.weekday}`), " @ ", props.trails[module]?.nextEvent.hour] })
                                        :
                                            jsxRuntime.jsx(LabelTimeMentoring, { children: t(`calendar.noMoreEvents`) }) }), jsxRuntime.jsxs(ActionContainer, { children: [props.short &&
                                        jsxRuntime.jsxs(LabelSchedule, { children: [jsxRuntime.jsx(LabelScheduleClick, { onClick: props.showFullPageAction, children: t('globals.clickHere') }), ' ', t('calendar.card.fullSchedule')] }), props.trails[module]?.joinEventAction &&
                                        jsxRuntime.jsx(FRSTButton, { style: { marginLeft: 'auto' }, variant: "contained", onClick: props.trails[module]?.joinEventAction, children: t('calendar.card.joinEvent') })] })] }) }) }));
}

var css_248z$h = ".TextIcon-module_container__c5xjY {\n  display: flex;\n  justify-content: 'flex-start';\n  align-items: 'center';\n  position: relative;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n";
var style$g = {"container":"TextIcon-module_container__c5xjY"};
styleInject(css_248z$h);

///-----------------------------------------
/// Componente
/**
 *
 * @componente
 */
function TextIcon(props) {
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx("div", { className: style$g.container, style: { ...props.style }, children: jsxRuntime.jsxs("div", { style: { display: 'flex', width: '100%', justifyContent: 'flex-start', alignItems: 'center' }, children: [jsxRuntime.jsx("div", { style: { display: 'inline-flex', width: 30, height: 30, position: 'relative', justifyContent: 'center', alignItems: 'center' }, children: props.svg }), jsxRuntime.jsx("div", { style: { display: 'inline-flex', marginLeft: 8, whiteSpace: 'pre-wrap' }, children: props.description })] }) }) }));
}

var css_248z$g = "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=VT323&display=swap');\n\n.Rating-module_container__yehpg {\n  width: 150px;\n  padding: 8px;\n  height: 80px;\n  display: flex;\n  justify-content: 'flex-start';\n  align-items: 'center';\n  position: relative;\n  margin-left: 16px;\n  flex-direction: row;\n  flex-wrap: wrap;\n  font-family: 'Work Sans';\n  \n}\n\n.Rating-module_titulo__mPtNy{\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: 16px;\n  font-weight: 600px;\n}\n\n.Rating-module_content__fqIyW{\n  display: flex;\n  width: 100%;\n  justify-content: flex-start;\n  align-items: flex-start;\n  \n}\n\n.Rating-module_star__Wzye9{\n  display: inline-flex;\n  width: 35px; \n  height: 35px; \n  position: relative; \n  justify-content: center; \n  align-items: center;\n}\n\n.Rating-module_avaliacao__AOld-{\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 100px;\n  height: 100%;\n  margin-left: 4px;\n}\n";
var style$f = {"container":"Rating-module_container__yehpg","titulo":"Rating-module_titulo__mPtNy","content":"Rating-module_content__fqIyW","star":"Rating-module_star__Wzye9","avaliacao":"Rating-module_avaliacao__AOld-"};
styleInject(css_248z$g);

///-----------------------------------------
/// Componente
/**
 *
 * @componente
 */
function StarIcon(props) {
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx("svg", { width: "30", height: "30", viewBox: "0 0 30 30", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M14.0989 0.872803C14.4623 0.117576 15.5377 0.117574 15.9011 0.872801L19.7145 8.7983C19.8581 9.09663 20.14 9.30458 20.4674 9.35367L29.0382 10.6388C29.8501 10.7606 30.1775 11.7548 29.5967 12.3352L23.3644 18.5625C23.1358 18.791 23.0316 19.1159 23.085 19.4348L24.5511 28.2045C24.6883 29.025 23.8221 29.6445 23.09 29.2495L15.4748 25.1411C15.1785 24.9812 14.8215 24.9812 14.5252 25.1411L6.91 29.2495C6.17789 29.6445 5.31171 29.025 5.44888 28.2045L6.91505 19.4348C6.96835 19.1159 6.86424 18.791 6.63556 18.5625L0.403279 12.3352C-0.17751 11.7548 0.149858 10.7606 0.961814 10.6388L9.53263 9.35367C9.86003 9.30458 10.1419 9.09663 10.2855 8.79831L14.0989 0.872803Z", fill: props.color }) }) }));
}

///-----------------------------------------
/// Componente
/**
 *
 * @componente
 */
function Rating$1(props) {
    const MapColorStar = [
        '#FFC200',
        '#000000',
        '#FFFFFF',
    ];
    const MapColorNumberStar = [
        '#FFFFFF',
        '#FFFFFF',
        '#FFC200',
        '#FF4D0D',
    ];
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("div", { className: style$f.container, style: { ...props.style }, children: [jsxRuntime.jsx("div", { className: style$f.titulo, style: { display: 'flex', justifyContent: 'flex-start', alignItems: 'center', fontSize: 16, fontWeight: 600 }, children: props.titulo }), jsxRuntime.jsxs("div", { className: style$f.content, style: { display: 'flex', width: '100%', justifyContent: 'flex-start', alignItems: 'flex-start' }, children: [jsxRuntime.jsxs("div", { className: style$f.star, style: { display: 'inline-flex', width: 35, height: 35, position: 'relative', justifyContent: 'center', alignItems: 'center' }, children: [jsxRuntime.jsx(StarIcon, { color: MapColorStar[props.tipoVisualizacao - 1] }), jsxRuntime.jsx("span", { style: { position: 'absolute', fontSize: 10, color: MapColorNumberStar[props.tipoVisualizacao - 1], fontWeight: 'bold', top: 12, textAlign: 'center' }, children: props.nota })] }), jsxRuntime.jsxs("div", { className: style$f.avaliacao, style: { justifyContent: props.descricaoAvaliacao ? 'flex-start' : 'center' }, children: [jsxRuntime.jsx("span", { style: { fontSize: 14, fontWeight: 600 }, children: props.descricaoAvaliacao }), jsxRuntime.jsx("span", { style: { fontSize: 12, fontWeight: 400 }, children: `${props.qtdeAvaliacao} ${props.qtdeAvaliacao > 1 ? props.nomeAvaliacao : props.nomeAvaliacao}` })] })] })] }) }));
}

var css_248z$f = "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=VT323&display=swap');\n\n.RatingCurtidas-module_container__Ns11t {\n  width: 150px;\n  padding: 8px;\n  height: 80px;\n  display: flex;\n  justify-content: 'flex-start';\n  align-items: 'center';\n  position: relative;\n  margin-left: 16px;\n  flex-direction: row;\n  flex-wrap: wrap;\n  font-family: 'Work Sans';\n  \n}\n";
var style$e = {"container":"RatingCurtidas-module_container__Ns11t"};
styleInject(css_248z$f);

///-----------------------------------------
/// Componente
/**
 *
 * @componente
 */
function RocketButtonIcon(props) {
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 25, background: props.colorSecundaria ? props.colorSecundaria : '#FF4D0D', width: 32, height: 32, margin: 0 }, children: jsxRuntime.jsxs("svg", { width: "28", height: "28", viewBox: "0 0 28 28", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M7.15625 16.9915C6.89922 17.3907 6.69141 17.82 6.54102 18.2657H8.85977V15.2771C8.18164 15.72 7.60195 16.3024 7.15625 16.9915ZM19.141 15.2771V18.2657H21.4598C21.3094 17.82 21.1016 17.3907 20.8445 16.9915C20.4037 16.3065 19.8232 15.7222 19.141 15.2771ZM17.391 8.71729L14.0004 4.69775L10.6098 8.71729V18.2657H17.391V8.71729ZM14.0004 12.2501C13.6569 12.2431 13.3299 12.1017 13.0895 11.8563C12.8491 11.611 12.7144 11.2811 12.7144 10.9376C12.7144 10.5941 12.8491 10.2642 13.0895 10.0188C13.3299 9.77347 13.6569 9.63211 14.0004 9.6251C14.3438 9.63211 14.6709 9.77347 14.9113 10.0188C15.1517 10.2642 15.2864 10.5941 15.2864 10.9376C15.2864 11.2811 15.1517 11.611 14.9113 11.8563C14.6709 12.1017 14.3438 12.2431 14.0004 12.2501Z", fill: props.colorPrimaria ? props.colorPrimaria : '#FFF', fillOpacity: "0.35" }), jsxRuntime.jsx("path", { d: "M23.625 20.125C23.625 17.0734 21.8367 14.4375 19.25 13.2098V8.67617C19.25 8.26328 19.1051 7.86406 18.8371 7.54961L14.6699 2.60859C14.4949 2.40078 14.2461 2.29688 14 2.29688C13.7539 2.29688 13.5051 2.40078 13.3301 2.60859L9.16289 7.54961C8.89674 7.86471 8.7505 8.26372 8.75 8.67617V13.2098C6.16328 14.4375 4.375 17.0734 4.375 20.125H8.6543C8.59141 20.3219 8.55859 20.5352 8.55859 20.7758C8.55859 21.3801 8.76641 21.9707 9.14375 22.4383C9.45175 22.8207 9.85968 23.1103 10.3223 23.275C10.9539 24.7516 12.3895 25.7031 14 25.7031C14.7957 25.7031 15.5668 25.468 16.2258 25.025C16.8711 24.593 17.3715 23.9887 17.675 23.275C18.1374 23.1113 18.5454 22.8226 18.8535 22.441C19.2314 21.9692 19.4377 21.383 19.4387 20.7785C19.4387 20.5488 19.4086 20.3301 19.3539 20.1277L23.625 20.125ZM8.85938 18.2656H6.54062C6.69102 17.8199 6.89883 17.3906 7.15586 16.9914C7.60156 16.3023 8.18125 15.7199 8.85938 15.277V18.2656ZM10.6094 13.2098V8.71719L14 4.69766L17.3906 8.71719V18.2656H10.6094V13.2098ZM17.1746 21.443C17.0324 21.525 16.8684 21.5578 16.707 21.5359L16.1738 21.4703L16.0973 22.0008C15.9496 23.0371 15.0473 23.8191 14 23.8191C12.9527 23.8191 12.0504 23.0371 11.9027 22.0008L11.8262 21.4676L11.293 21.5359C11.1309 21.5553 10.9669 21.5217 10.8254 21.4402C10.5875 21.3035 10.4398 21.0492 10.4398 20.773C10.4398 20.4832 10.6012 20.2426 10.8391 20.1223H17.1637C17.4043 20.2453 17.5629 20.4859 17.5629 20.773C17.5602 21.052 17.4125 21.309 17.1746 21.443ZM19.1406 18.2656V15.277C19.8228 15.7221 20.4033 16.3064 20.8441 16.9914C21.1012 17.3906 21.309 17.8199 21.4594 18.2656H19.1406V18.2656Z", fill: props.colorPrimaria ? props.colorPrimaria : '#FFF' }), jsxRuntime.jsx("path", { d: "M12.6875 10.9375C12.6875 11.2856 12.8258 11.6194 13.0719 11.8656C13.3181 12.1117 13.6519 12.25 14 12.25C14.3481 12.25 14.6819 12.1117 14.9281 11.8656C15.1742 11.6194 15.3125 11.2856 15.3125 10.9375C15.3125 10.5894 15.1742 10.2556 14.9281 10.0094C14.6819 9.76328 14.3481 9.625 14 9.625C13.6519 9.625 13.3181 9.76328 13.0719 10.0094C12.8258 10.2556 12.6875 10.5894 12.6875 10.9375Z", fill: props.colorPrimaria ? props.colorPrimaria : '#FFF' })] }) }) }));
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
        '#FFFFFF',
        '#222222'
    ];
    const MapColorSecundaria = [
        '#FFFFFF',
        '#FF4D0D',
        '#CCCCCC',
        '#FFFFFF'
    ];
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx("div", { children: jsxRuntime.jsx(RocketButtonIcon, { colorPrimaria: MapColorPrimaria[props.tipoBotao - 1], colorSecundaria: MapColorSecundaria[props.tipoBotao - 1] }) }) }));
}

///-----------------------------------------
/// Componente
/**
 *
 * @componente
 */
function RatingCurtidas(props) {
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("div", { className: style$e.container, style: { ...props.style }, children: [jsxRuntime.jsx("div", { style: { display: 'flex', justifyContent: 'flex-start', alignItems: 'center', fontSize: 16, fontWeight: 600 }, children: props.titulo }), jsxRuntime.jsxs("div", { style: { display: 'flex', width: '100%', justifyContent: 'flex-start', alignItems: 'flex-start' }, children: [jsxRuntime.jsx("div", { style: { display: 'inline-flex', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', position: 'relative' }, children: jsxRuntime.jsx(RocketButton, { tipoBotao: props.tipoBotao }) }), jsxRuntime.jsx("div", { style: { display: 'inline-flex', width: 90, marginLeft: 4 }, children: jsxRuntime.jsxs("div", { style: { display: 'flex', flexDirection: 'column', flexWrap: 'wrap', width: 100 }, children: [jsxRuntime.jsx("span", { style: { fontSize: 14, fontWeight: 600 }, children: props.qtdeCurtidas ? props.qtdeCurtidas : 0 }), jsxRuntime.jsx("span", { style: { fontSize: 12, fontWeight: 400 }, children: props.descricaoCurtida })] }) })] })] }) }));
}

var css_248z$e = "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=VT323&display=swap');\n\n.Planet-module_container__YS3oo {\n  width: 100px;\n  height: 100px;\n  display: flex;\n  justify-content: 'center';\n  align-items: 'center';\n  position: relative;\n  margin-left: 16px;\n\n  text-align: center;\n  font-size: 26px;\n  font-family: 'VT323', monospace;\n  color: white;\n  -webkit-text-stroke: 0.5px black;\n  text-shadow:2px 0 0 black,0 2px 0 black,-2px 0 0 black,0 -2px 0 black;\n}\n\n.Planet-module_label__bZgzb {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  padding: 2px;\n  border: 2px dashed white;\n  bottom: 0;\n  left: 8px;\n  right: 8px;\n  width: calc(100% -16px);\n}\n@media (max-width: 600px) {\n  .Planet-module_label__bZgzb {\n    font-size: 22px;\n    text-shadow: none;\n    -webkit-text-stroke: 0%;\n    color: black;\n  }\n}\n\n@media (max-width: 540px) {\n  .Planet-module_label__bZgzb {\n    font-size: 18px;\n    text-shadow: none;\n    -webkit-text-stroke: 0%;\n    color: black;\n  }\n}\n\n@media (max-width: 470px) {\n  .Planet-module_label__bZgzb {\n    font-size: 16px;\n    text-shadow: none;\n    -webkit-text-stroke: 0%;\n    color: black;\n  }\n}\n\n@media (max-width: 400px) {\n  .Planet-module_label__bZgzb {\n    font-size: 14px;\n    text-shadow: none;\n    -webkit-text-stroke: 0%;\n    color: black;\n  }\n}\n\n.Planet-module_block__yUjqK {\n  position: absolute;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  padding: 4px;\n  \n  bottom: 16px;\n  left: 0;\n  right: 0;\n  top: 0;\n  /* width: calc(100% -16px); */\n  \n}\n\n.Planet-module_block__yUjqK img {\n  width: 50%;\n  height: 50%;\n  object-fit: contain;\n  margin-top: 0;\n}\n\n.Planet-module_imgAtive__dgis2 {\n  filter: grayscale(0);\n  opacity: 1;\n  height: 100% !important;\n  width: 100% !important;\n  object-fit: contain;\n  margin-left: 2px;\n}\n\n.Planet-module_imgAtive__dgis2:hover {\n  cursor: pointer\n}\n\n.Planet-module_imgInative__RXloV {\n  filter: grayscale(1);\n  opacity: 1;\n  height: 100% !important;\n  width: 100% !important;\n  object-fit: contain;\n  margin-left: 2px;\n}\n\n.Planet-module_imgInative__RXloV:hover {\n  cursor: pointer;\n}\n\n.Planet-module_imgBlocked__txZ4a {\n  filter: grayscale(1);\n  opacity: 0.5;\n  height: 100% !important;\n  width: 100% !important;\n  object-fit: contain;\n  margin-left: 2px;;\n}\n\n.Planet-module_imgBlockedL__xcI-B:hover {\n  cursor: not-allowed;\n}\n\n.Planet-module_missaoTitle__RbGDH{\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  \n  color: #0645AD;\n}";
var style$d = {"container":"Planet-module_container__YS3oo","label":"Planet-module_label__bZgzb","block":"Planet-module_block__yUjqK","imgAtive":"Planet-module_imgAtive__dgis2","imgInative":"Planet-module_imgInative__RXloV","imgBlocked":"Planet-module_imgBlocked__txZ4a","imgBlockedL":"Planet-module_imgBlockedL__xcI-B","missaoTitle":"Planet-module_missaoTitle__RbGDH"};
styleInject(css_248z$e);

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
    const TypeStepNamePTBR = [
        'Marte',
        'Júpiter',
        'Saturno',
        'Urano',
        'Netuno',
    ];
    const TypeStepNamePT = [
        'Marte',
        'Júpiter',
        'Saturno',
        'Urano',
        'Netuno',
    ];
    const TypeStepNameEN = [
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune',
    ];
    const TypeStepNameES = [
        'Marte',
        'Júpiter',
        'Saturno',
        'Urano',
        'Netuno',
    ];
    const mapTraducao = new Map();
    mapTraducao.set("pt-BR", TypeStepNamePTBR);
    mapTraducao.set("pt-PT", TypeStepNamePT);
    mapTraducao.set("en-US", TypeStepNameEN);
    mapTraducao.set("es", TypeStepNameES);
    const [Idioma, setIdioma] = React.useState(props.idioma ? props.idioma : 'pt-BR');
    React.useEffect(() => {
        setIdioma(props.idioma ? props.idioma : 'pt-BR');
    }, [props.idioma]);
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("div", { className: style$d.container, style: { ...props.style }, onClick: () => {
                if (props.status !== 'B') {
                    props.onClick();
                }
            }, children: [jsxRuntime.jsx("img", { src: TypeStep[props.step - 1], className: props.status === "A" ?
                        style$d.imgAtive
                        : props.status === "I" ?
                            style$d.imgInative
                            : style$d.imgBlocked }), jsxRuntime.jsx("div", { className: style$d.label, children: mapTraducao.get(Idioma)[props.step - 1] }), props.status === 'B' &&
                    jsxRuntime.jsx("div", { className: style$d.block, children: jsxRuntime.jsx("img", { src: 'https://api-motor.s3.amazonaws.com/lock.png' }) })] }) }));
}

///-----------------------------------------
/// Componente
/**
 *
 * @componente Planet: Componente responsável por gerenciar os controles dos steps das missões
 */
function MissionSteps(props) {
    const traducaoPTBR = {
        next: "Ver missão seguinte >",
        nextShort: "Próx. >",
        previous: "< Ver missão anterior",
        previousShort: "< Ant.",
        continueChallenge: "Continuar desafio"
    };
    const traducaoES = {
        next: "Ver misión siguiente >",
        nextShort: "Próx. >",
        previous: "< Ver misión anterior",
        previousShort: "< Ant.",
        continueChallenge: "Continuar desafío"
    };
    const traducaoENUS = {
        next: "View next mission >",
        nextShort: "Next >",
        previous: "< View previous mission",
        previousShort: "< Previous",
        continueChallenge: "Continue challenge"
    };
    const traducaoPT = {
        next: "Ver missão seguinte >",
        nextShort: "Próx. >",
        previous: "< Ver missão anterior",
        previousShort: "< Ant.",
        continueChallenge: "Continuar desafio"
    };
    const mapTraducao = new Map();
    mapTraducao.set("pt-BR", traducaoPTBR);
    mapTraducao.set("es", traducaoES);
    mapTraducao.set("en-US", traducaoENUS);
    mapTraducao.set("pt-PT", traducaoPT);
    const [stepLiberado, setstepLiberado] = React.useState(props.stepProblem);
    const [stepActive, setStepActive] = React.useState(props.stepActive);
    const [Idioma, setIdioma] = React.useState(props.idioma ? props.idioma : 'pt-BR');
    const setStep = (step) => {
        setStepActive(step);
        props.onSelected(step);
    };
    React.useEffect(() => {
        setIdioma(props.idioma ? props.idioma : 'pt-BR');
    }, [props.idioma]);
    React.useEffect(() => {
        setstepLiberado(props.stepProblem);
    }, [props.stepProblem]);
    // Função para pegar o width da tela
    const [size, setSize] = React.useState([0, 0]);
    React.useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    const BREAKWIDTH = 475;
    const leftButtonStyle = {
        position: 'absolute',
        top: 20,
        left: 0,
        cursor: 'pointer'
    };
    const rightButtonStyle = {
        ...leftButtonStyle,
        right: 0,
        left: 'auto'
    };
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("div", { style: { display: "flex", justifyContent: 'center', width: '100%', position: 'relative', padding: 20, backgroundColor: 'white', marginTop: '10px' }, children: [stepActive > 1 ?
                    size[0] >= BREAKWIDTH ?
                        jsxRuntime.jsx("span", { onClick: () => { setStep(stepActive - 1); }, className: style$d.missaoTitle, style: leftButtonStyle, children: `${mapTraducao.get(Idioma).previous}` })
                        :
                            jsxRuntime.jsx("span", { onClick: () => { setStep(stepActive - 1); }, className: style$d.missaoTitle, style: leftButtonStyle, children: `${mapTraducao.get(Idioma).previousShort}` })
                    : null, stepActive < stepLiberado ?
                    size[0] >= BREAKWIDTH ?
                        jsxRuntime.jsx("span", { onClick: () => { setStep(stepActive + 1); }, className: style$d.missaoTitle, style: rightButtonStyle, children: `${mapTraducao.get(Idioma).next}` })
                        :
                            jsxRuntime.jsx("span", { onClick: () => { setStep(stepActive + 1); }, className: style$d.missaoTitle, style: rightButtonStyle, children: `${mapTraducao.get(Idioma).nextShort}` })
                    : props.stepProblem < 5 &&
                        props.onClickContinue &&
                        jsxRuntime.jsx("span", { className: style$d.missaoTitle, style: { ...rightButtonStyle, marginTop: '-10px' }, children: jsxRuntime.jsx(Button$3, { handleClick: () => props.onClickContinue(), label: mapTraducao.get(Idioma).continueChallenge, variant: "primary", endIcon: jsxRuntime.jsx(FowardArrow, { fill: "#fff" }), style: { height: '40px' } }) }), jsxRuntime.jsxs("div", { style: { display: "inline-flex", marginTop: 40, justifyContent: 'center', width: '100%' }, children: [jsxRuntime.jsx(Steps, { step: 1, idioma: Idioma, status: stepLiberado >= 1 ? stepActive === 1 ? "A" : "I" : "B", onClick: () => {
                                setStep(1);
                            } }), jsxRuntime.jsx(Steps, { step: 2, idioma: Idioma, status: stepLiberado >= 2 ? stepActive === 2 ? "A" : "I" : "B", onClick: () => {
                                setStep(2);
                            } }), jsxRuntime.jsx(Steps, { step: 3, idioma: Idioma, status: stepLiberado >= 3 ? stepActive === 3 ? "A" : "I" : "B", onClick: () => {
                                setStep(3);
                            } }), jsxRuntime.jsx(Steps, { step: 4, idioma: Idioma, status: stepLiberado >= 4 ? stepActive === 4 ? "A" : "I" : "B", onClick: () => {
                                setStep(4);
                            } }), jsxRuntime.jsx(Steps, { step: 5, idioma: Idioma, status: stepLiberado >= 5 ? stepActive === 5 ? "A" : "I" : "B", onClick: () => {
                                setStep(5);
                            } })] })] }) }));
}

var css_248z$d = "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=VT323&display=swap');\n\n.avatarWithInfo-module_container__Y-yUf {\n  /* width: 100%; */\n  height: fit-content;\n  padding: 4px 16px 4px 4px;\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n  \n  border: 1px solid #BDBDBD;\n  border-radius: 25px;\n  background-color: #FFF;\n  font-size: 16px;\n  \n  flex-direction: row;\n  flex-wrap: nowrap;\n  font-family: 'Work Sans';\n  flex-wrap: wrap;\n}";
var style$c = {"container":"avatarWithInfo-module_container__Y-yUf"};
styleInject(css_248z$d);

const AvatarImg$1 = styled__default["default"].img `
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
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsx(AvatarWrapper, { size: size, className: className, children: jsxRuntime.jsx(AvatarImg$1, { src: src || defaultImg, alt: alt, size: size, disabled: disabled }) }) }));
}

///-----------------------------------------
/// Componente
/**
 *
 * @componente
 */
function Vector(props) {
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx("svg", { width: "4", height: "4", viewBox: "0 0 4 4", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M2 4C1.46957 4 0.960859 3.78929 0.585786 3.41421C0.210713 3.03914 0 2.53043 0 2C0 1.46957 0.210713 0.960859 0.585786 0.585786C0.960859 0.210713 1.46957 0 2 0C2.53043 0 3.03914 0.210713 3.41421 0.585786C3.78929 0.960859 4 1.46957 4 2C4 2.53043 3.78929 3.03914 3.41421 3.41421C3.03914 3.78929 2.53043 4 2 4Z", fill: props.color ? props.color : "#757575" }) }) }));
}

///-----------------------------------------
/// Componente
/**
 *
 * @componente Planet: Componente responsável por gerenciar os controles dos steps das missões
 */
function AvatarWithInfo(props) {
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("div", { className: style$c.container, style: { ...props.style }, children: [jsxRuntime.jsx(Avatar, { size: '40px', src: props.fotoAvatar }), jsxRuntime.jsx("span", { style: { fontWeight: 600, marginLeft: 8, marginRight: 4 }, children: props.nomeCompleto }), " ", props.cargo ? jsxRuntime.jsx(Vector, {}) : '', " ", jsxRuntime.jsx("span", { style: { fontWeight: 400, marginLeft: 4, marginRight: 8, textAlign: 'center' }, children: props.cargo })] }) }));
}

const LinkButton$1 = styled__default["default"].a `
    border: none;
    text-decoration: none;
    ${({ theme }) => theme.fonts.textMessageComponentsBodyBold}
    color: ${({ theme }) => theme.colors.linkOnfocus};
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
        color: ${({ theme }) => theme.colors.linkOnfocus};
    }

    & > svg {
        margin-right: 12px;
        max-height: 16px;
        height: 100%;
        width: auto;
    }

    ${({ disabled }) => disabled && styled.css `
        pointer-events: none;
        color: ${({ theme }) => theme.colors.linkDisabled};
    `}
`;
const LinkButtonStartIcon = styled__default["default"].a `
    border: none;
    text-decoration: none;
    ${({ theme }) => theme.fonts.textMessageComponentsBodyBold};
    color: ${({ theme }) => theme.colors.linkOnfocus};
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
        color: ${({ theme }) => theme.colors.linkOnfocus};
    }

    & > svg {
        margin-right: 8px;
        max-height: ${({ sizeIcon }) => sizeIcon ? sizeIcon : '16px'};
        height: 100%;
        width: auto;
    }

    ${({ disabled }) => disabled && styled.css `
        pointer-events: none;
        color: ${({ theme }) => theme.colors.linkDisabled};
    `}
`;
const LinkButtonEndIcon = styled__default["default"].a `
    border: none;
    text-decoration: none;
    ${({ theme }) => theme.fonts.textMessageComponentsBodyBold}
    color: ${({ theme }) => theme.colors.linkOnfocus};
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
        color: ${({ theme }) => theme.colors.linkOnfocus};
    }

    & > svg {
        margin-left: 12px;
        max-height: ${({ sizeIcon }) => sizeIcon ? sizeIcon : '16px'};
        height: 100%;
        width: auto;
    }

    ${({ disabled }) => disabled && styled.css `
        pointer-events: none;
        color: ${({ theme }) => theme.colors.linkDisabled};
    `}
`;
const variantStyles$1 = (variant = 'contained') => ({
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
            background-color: ${({ theme }) => theme.colors.neutralsGrey5};
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
            color: ${({ theme }) => theme.colors.neutralsGrey5};
            border: 1px solid ${({ theme }) => theme.colors.neutralsGrey5};
            cursor: not-allowed;
            pointer-events: none;
        }
    `,
    expandedPrimary: styled.css `
        background-color: ${({ theme }) => theme.colors.primary1};
        color: ${({ theme }) => theme.colors.shadeWhite};
        width: 100%;
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
            background-color: ${({ theme }) => theme.colors.neutralsGrey5};
            cursor: not-allowed;
            pointer-events: none;
        }
    `,
    expandedSecondary: styled.css `
        background-color: transparent;
        color: ${({ theme }) => theme.colors.primary1};
        border: 1px solid ${({ theme }) => theme.colors.primary1};
        width: 100%;

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
            color: ${({ theme }) => theme.colors.neutralsGrey5};
            border: 1px solid ${({ theme }) => theme.colors.neutralsGrey5};
            cursor: not-allowed;
            pointer-events: none;
        }
    `,
}[variant]);
const Button$4 = styled__default["default"].button `
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

    ${({ variant }) => variantStyles$1(variant)}
    
    ${({ theme, length }) => theme.type === 'group' && length === 2 && `
        &:first-child {
            border-radius: 4px 0px 0px 4px;
            border-right: 1px solid rgba(255, 255, 255, 0.5) !important;
            border-left: none !important;
        }

        &:last-child {
            border-radius: 0px 4px 4px 0px;
            border: none !important;
        }
    `}

    ${({ theme, length }) => theme.type === 'group' && length > 2 && `
        border-radius: 0px;

        border-right: 1px solid rgba(255, 255, 255, 0.5);
        border-left: 1px solid rgba(255, 255, 255, 0.5);
    
        &:focus,
        &:active {
            border-right: 1px solid rgba(255, 255, 255, 0.5) !important;
            border-left: 1px solid rgba(255, 255, 255, 0.5) !important;
        }
        
        &:first-child {
            border-radius: 4px 0px 0px 4px;
            border: none !important;
        }

        &:last-child {
            border-radius: 0px 4px 4px 0px;
            border: none !important;
        }
    `}

    ${({ active }) => active === true && styled.css `
        background: #D14211;
    `}
`;
const ButtonStartIcon$1 = styled__default["default"].button `
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
        max-height: ${({ sizeIcon }) => sizeIcon ? sizeIcon : '16px'};
        height: 100%;
        width: auto;
    }

    ${({ variant }) => variantStyles$1(variant)}
`;
const ButtonEndIcon = styled__default["default"].button `
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
        margin-left: 12px;
        max-height: ${({ sizeIcon }) => sizeIcon ? sizeIcon : '16px'};
        height: 100%;
        width: auto;
    }

    ${({ variant }) => variantStyles$1(variant)}
`;

function Button$3({ variant, label, sizeIcon, disabled, startIcon, endIcon, handleClick, type, active, style, value, length, id, ref, handleMount }) {
    React.useEffect(() => {
        if (handleMount && id) {
            handleMount(id);
        }
    }, [id]);
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: { ...FRSTTheme, type: type }, children: startIcon ?
            (variant === 'link') ?
                jsxRuntime.jsxs(LinkButtonStartIcon, { ref: ref, style: { ...style }, disabled: disabled, onClick: handleClick, sizeIcon: sizeIcon, id: id, children: [startIcon, label] })
                :
                    jsxRuntime.jsxs(ButtonStartIcon$1, { ref: ref, style: { ...style }, variant: variant, disabled: disabled, onClick: handleClick, sizeIcon: sizeIcon, id: id, children: [startIcon, label] })
            : endIcon ?
                (variant === 'link') ?
                    jsxRuntime.jsxs(LinkButtonEndIcon, { ref: ref, style: { ...style }, disabled: disabled, onClick: handleClick, sizeIcon: sizeIcon, id: id, children: [label, endIcon] })
                    :
                        jsxRuntime.jsxs(ButtonEndIcon, { ref: ref, style: { ...style }, variant: variant, disabled: disabled, onClick: handleClick, sizeIcon: sizeIcon, id: id, children: [label, endIcon] })
                :
                    (variant === 'link') ?
                        jsxRuntime.jsx(LinkButton$1, { ref: ref, style: { ...style }, disabled: disabled, onClick: handleClick, id: id, children: label })
                        :
                            jsxRuntime.jsx(Button$4, { ref: ref, style: { ...style }, length: length, active: active, value: value, variant: variant, disabled: disabled, onClick: handleClick, id: id, children: label }) }));
}

var css_248z$c = ".BannerProblem-module_container__iitVU {\n  padding: 50px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  flex-direction: row;\n  flex-wrap: wrap;\n  background-color: white;\n  font-family: 'Work Sans';\n  font-style: normal;\n\n}\n\n.BannerProblem-module_titleProblem__BeJIN{\n  font-weight: 700;\n  font-size: 18px;\n  word-wrap: break-word;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n}\n\n.BannerProblem-module_created__OrSsa{\n  font-size: 12px;\n\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 14px;\n  /* identical to box height, or 117% */\n\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.02em;\n\n  color: #757575;\n}\n\n.BannerProblem-module_description__olZ05{\n  font-style: normal;\n  font-weight: 600;\n  font-size: 32px;\n  text-align: left;\n  display: flex;\n  margin-top: 8px;\n  width: 100%;\n  color: #FF4D0D;\n  margin-bottom: 0px;\n}\n\n@media(max-width: 880px){\n  .BannerProblem-module_description__olZ05{\n    word-wrap: break-word;\n  }\n}\n\n.BannerProblem-module_missaoTitle__300kZ{\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  \n  color: #0645AD;\n}\n\nh2{\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  margin-top: 16;\n  margin-bottom: 0;\n}\n\nh3{\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 21px;\n  margin: 0;\n  word-wrap: break-word;\n}\n\n.BannerProblem-module_contentInput__YXpxk {\n  background-color: #F2F2F2; \n  border-width: 1px; \n  border-radius: 4px;\n  padding: 24px 16px 24px 16px;\n  border: 1px solid #BDBDBD;\n}\n\n.BannerProblem-module_contentInput__YXpxk input {\n  width: 100% !important;\n  margin: 4px;\n  padding: 16px;\n  border-radius: 8px;\n  border: 1px solid #BDBDBD;\n  background-color: white;\n}\n\n.BannerProblem-module_goal_invite__B0T5N svg {\n  max-width: none;\n  max-height: none !important;\n}\n";
var style$b = {"container":"BannerProblem-module_container__iitVU","titleProblem":"BannerProblem-module_titleProblem__BeJIN","created":"BannerProblem-module_created__OrSsa","description":"BannerProblem-module_description__olZ05","missaoTitle":"BannerProblem-module_missaoTitle__300kZ","contentInput":"BannerProblem-module_contentInput__YXpxk","goal_invite":"BannerProblem-module_goal_invite__B0T5N"};
styleInject(css_248z$c);

const SpanHeaderTag = styled__default["default"].span `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 16px;
    gap: 10px;
    position: absolute;
    right: -1px;
    top: -1px;
    background: ${({ background }) => background || '#940059'};
    color: ${({ color }) => color || '#FFFFFF'};
    border-radius: 0px 0px 0px 8px;
`;

function BannerProblem(props) {
    const [Idioma, setIdioma] = React.useState(props.missionIdioma ? props.missionIdioma : 'pt-BR');
    const [Edit, setEdit] = React.useState(false);
    const [tagListShow, setTagListShow] = React.useState(props.tagData ? props.tagData : []);
    /// States para controle de Edição
    const [TrilhaId, setTrilhaId] = React.useState(props.trilhaId ? props.trilhaId : null);
    const [TrilhaDescricaoSelecionada, setTrilhaDescricaoSelecionada] = React.useState(props.trilha ? props.trilha : '');
    const [Tag1, setTag1] = React.useState(props.tags && props.tags.length >= 1 ? props.tags[0] : '');
    const [Tag2, setTag2] = React.useState(props.tags && props.tags.length >= 2 ? props.tags[1] : '');
    const [Tag3, setTag3] = React.useState(props.tags && props.tags.length >= 3 ? props.tags[2] : '');
    const [TituloProblema, setTituloProblema] = React.useState(props.problema ? props.problema : '');
    /// States para controle de elementos do Banner
    const [TrilhaBanner, setTrilhaBanner] = React.useState(props.trilha ? props.trilha : '');
    const [Tags, setTags] = React.useState(props.tags ? props.tags : []);
    // const [selectedTags, setSelectedTags] = useState([{label: '', value:''},{label: '', value:''},{label: '', value:''}]);
    React.useState([
        props.tags && props.tags.length >= 1 ? props.tags[0] : '',
        props.tags && props.tags.length >= 2 ? props.tags[1] : '',
        props.tags && props.tags.length >= 3 ? props.tags[2] : ''
    ]);
    const hasContinueProps = props?.onClickContinue?.name !== 'actionHandler';
    const customStyles = {
        option: (styles, { isFocused, isSelected, isDisabled }) => ({
            ...styles,
            background: isFocused
                ? '	#FFC6B7'
                : isSelected
                    ? '#FF4D0D'
                    : undefined,
            color: isFocused ? '#000'
                : isSelected ? '#fff'
                    : isDisabled ? '#ccc'
                        : undefined,
            zIndex: 1
        }),
        menu: base => ({
            ...base,
            zIndex: 100
        }),
        control: (styles) => ({
            ...styles,
            marginTop: 12
        }),
    };
    React.useEffect(() => {
        setTrilhaId(props.trilhaId ? props.trilhaId : null);
        setTrilhaDescricaoSelecionada(props.trilha ? props.trilha : '');
        setTag1(props.tags && props.tags.length >= 1 ? props.tags[0] : '');
        setTag2(props.tags && props.tags.length >= 2 ? props.tags[1] : '');
        setTag3(props.tags && props.tags.length >= 3 ? props.tags[2] : '');
        setTituloProblema(props.problema ? props.problema : '');
        /// States para controle de elementos do Banner
        setTrilhaBanner(props.trilha ? props.trilha : '');
        setTags(props.tags ? props.tags : []);
    }, [props]);
    React.useEffect(() => {
        setIdioma(props.missionIdioma ? props.missionIdioma : 'pt-BR');
    }, [props.missionIdioma]);
    const handleEdit = () => {
        if (Edit === true) {
            let titleInEditing = TituloProblema;
            (document.getElementById("idEdit-fieldTitleProblem")) &&
                (titleInEditing = document.getElementById("idEdit-fieldTitleProblem").innerText);
            setTituloProblema(titleInEditing);
            setTrilhaBanner(TrilhaDescricaoSelecionada);
            setTags([Tag1, Tag2, Tag3]);
            console.log(`Titulo: ${TituloProblema}`);
            props.onClickSave([titleInEditing, TrilhaDescricaoSelecionada, [Tag1, Tag2, Tag3]]);
        }
        setEdit(!Edit);
    };
    React.useEffect(() => {
        setTagListShow(props.tagData ? filterTagsSelected(props.tagData, [Tag1, Tag2, Tag3]) : []);
    }, [Tag1, Tag2, Tag3]);
    // Função para pegar o width da tela
    const [size, setSize] = React.useState([0, 0]);
    React.useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    const showChallengeTitle = () => {
        let title = props.textTitleProblem ? props.textTitleProblem : 'Desafio';
        title = props.isVerified ? 'Desafio verificado' : title;
        return title;
    };
    const MOBILEWIDTH = 650;
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("div", { className: style$b.container, style: { ...props.style }, children: [props.topHeaderTagText &&
                    jsxRuntime.jsx(SpanHeaderTag, { background: props.topHeaderTagBgColor, color: props.topHeaderTagColor, children: props.topHeaderTagText }), jsxRuntime.jsxs("div", { style: { width: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }, children: [jsxRuntime.jsxs("span", { className: style$b.titleProblem, children: [showChallengeTitle(), props.isVerified &&
                                    jsxRuntime.jsx(Tooltip$2, { direction: "bottom", content: props.verifiedTooltipContent, trigger: 'hover', width: '361px', height: '54px', style: { top: '10px', textAlign: 'center' }, children: jsxRuntime.jsx(SawBadgeIcon, {}) })] }), props.isEditable &&
                            jsxRuntime.jsx(Button$3, { label: Edit ? (props.textButtonLinkEditSave ? props.textButtonLinkEditSave : "Salvar Alterações") : (props.textButtonLinkEdit ? props.textButtonLinkEdit : "Editar"), variant: 'link', handleClick: () => handleEdit(), startIcon: jsxRuntime.jsx(EditIcon, {}) })] }), Edit ?
                    jsxRuntime.jsx("div", { style: {
                            marginTop: '8px',
                            marginBottom: '8px',
                            backgroundColor: 'rgb(242, 242, 242)',
                            border: '1px solid rgb(189, 189, 189)',
                            borderRadius: '8px',
                            padding: '24px 16px',
                            width: '100%'
                        }, children: jsxRuntime.jsx("div", { id: "idEdit-fieldTitleProblem", "data-gramm": "false", contentEditable: "true", role: "textbox", "aria-multiline": "true", suppressContentEditableWarning: true, style: {
                                fontStyle: 'normal',
                                fontWeight: '600',
                                fontSize: '32px',
                                textAlign: 'left',
                                display: 'flex',
                                width: '100%',
                                color: '#FF4D0D',
                                backgroundColor: 'rgb(242, 242, 242)',
                                border: 'none',
                                wordBreak: 'break-word',
                            }, children: TituloProblema }) })
                    :
                        jsxRuntime.jsx("h1", { className: style$b.description, children: TituloProblema }), jsxRuntime.jsx("div", { style: { display: 'flex', justifyContent: 'space-between', position: 'relative', width: '100%', borderBottom: '1px solid #CCCCCC' }, children: jsxRuntime.jsxs("div", { style: { display: 'inline-flex', width: '100%' }, children: [jsxRuntime.jsxs("div", { style: { width: '100%', maxWidth: 600 }, children: [jsxRuntime.jsxs("div", { style: { display: 'flex', flexDirection: 'column', width: 'fit-content', paddingTop: '16px' }, children: [jsxRuntime.jsx("span", { className: style$b.created, children: props.dataCriacao }), jsxRuntime.jsx(AvatarWithInfo, { cargo: props.cargo, nomeCompleto: props.nome, fotoAvatar: props.avatar, style: { marginBottom: 8, marginTop: 24 } })] }), jsxRuntime.jsx(TextIcon, { description: props.area, svg: jsxRuntime.jsx(Brain, {}) }), props.company && jsxRuntime.jsx(TextIcon, { style: { width: '80%' }, description: props.company, svg: jsxRuntime.jsx(CompanyIcon, {}) }), jsxRuntime.jsx(TextIcon, { description: adapterEmail(props.email, size[0]), svg: jsxRuntime.jsx(Mail, {}) }), Edit && props.isVisibleEditTrail ?
                                        jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("div", { style: { marginTop: 12, backgroundColor: '#F2F2F2', borderWidth: 1, borderRadius: 4, padding: '24px 16px 24px 16px', border: '1px solid #BDBDBD' }, children: [jsxRuntime.jsx("h3", { style: { marginBottom: 12, textAlign: 'left', width: '100%', fontSize: 16 }, children: props.textTrailLabel ? props.textTrailLabel : 'Deseja vincular este novo problema a uma Trilha de Aprendizagem?' }), jsxRuntime.jsx(Select__default$1["default"], { id: "select", styles: customStyles, options: props.trilhaData ? props.trilhaData : [], value: props.trilhaData.filter(function (temp) { return temp.value === TrilhaId; }), placeholder: props.placeholderSelectTrail ? props.placeholderSelectTrail : 'Selecione uma trilha', onChange: e => {
                                                            setTrilhaId(e.value);
                                                            setTrilhaDescricaoSelecionada(e.label);
                                                        } })] }) })
                                        :
                                            jsxRuntime.jsx(jsxRuntime.Fragment, { children: TrilhaBanner === '' ?
                                                    jsxRuntime.jsx(TextIcon, { description: props.textIconDescription ? props.textIconDescription : 'Ainda não está vinculado a uma trilha', svg: jsxRuntime.jsx(WithoutTrail, {}) })
                                                    :
                                                        jsxRuntime.jsx(TextIcon, { description: TrilhaBanner, svg: jsxRuntime.jsx(WithTrail, {}) }) }), jsxRuntime.jsx("div", { style: { marginTop: 16, marginBottom: 26, maxWidth: !Edit ? '400px' : '100%' }, children: Edit && props.isVisibleEditTags ?
                                            jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("div", { className: style$b.contentInput, children: [jsxRuntime.jsx("h3", { style: { marginBottom: 12, textAlign: 'left', width: '100%', fontSize: 16 }, children: props.textContentInput ? props.textContentInput : 'Busque e selecione até três palavras-chave:' }), jsxRuntime.jsx(Select__default$1["default"], { id: "select", styles: customStyles, options: tagListShow, value: tagListShow.filter(function (temp) { return temp.value === Tag1; }), placeholder: props.placeholderSelectTag ? props.placeholderSelectTag : 'Selecione uma Tag', onChange: e => { setTag1(e.value); } }), jsxRuntime.jsx(Select__default$1["default"], { id: "select", styles: customStyles, options: tagListShow, value: tagListShow.filter(function (temp) { return temp.value === Tag2; }), placeholder: props.placeholderSelectTag ? props.placeholderSelectTag : 'Selecione uma Tag', onChange: e => { setTag2(e.value); } }), jsxRuntime.jsx(Select__default$1["default"], { id: "select", styles: customStyles, options: tagListShow, value: tagListShow.filter(function (temp) { return temp.value === Tag3; }), placeholder: props.placeholderSelectTag ? props.placeholderSelectTag : 'Selecione uma Tag', onChange: e => { setTag3(e.value); } })] }) })
                                            :
                                                jsxRuntime.jsx(jsxRuntime.Fragment, { children: Tags?.map((item, key) => (item &&
                                                        jsxRuntime.jsx(Tag, { title: item, style: { color: '#000 !important', marginRight: 8, marginTop: 8 }, color: "#E4E1FF", selected: false, inverted: false }, key))) }) }), size[0] <= MOBILEWIDTH || Edit ?
                                        jsxRuntime.jsxs("div", { style: { display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', flexWrap: 'wrap', width: '100%' }, children: [jsxRuntime.jsx(Rating$1, { titulo: props.ratingTitleImpact ? props.ratingTitleImpact : 'Impacto', descricaoAvaliacao: props.descriptionImpacto, qtdeAvaliacao: props.qtdeAvaliacao, nota: props.notaAvaliacao, tipoVisualizacao: 1, style: { margin: 0 }, nomeAvaliacao: props.ratingLikesEvaluation ? props.ratingLikesEvaluation : 'avaliação' }), jsxRuntime.jsx(Rating$1, { titulo: props.ratingTitleRelevance ? props.ratingTitleRelevance : 'Relevância', descricaoAvaliacao: props.descriptionRelevancia, qtdeAvaliacao: props.qtdeRelevancia, nota: props.notaRelevancia, tipoVisualizacao: 1, style: { margin: 0 }, nomeAvaliacao: props.ratingLikesEvaluation ? props.ratingLikesEvaluation : 'avaliação' }), props.curtidas &&
                                                    jsxRuntime.jsx(RatingCurtidas, { titulo: props.ratingTitleLikes ? props.ratingTitleLikes : 'Curtidas', qtdeCurtidas: props.curtidas, tipoBotao: 2, style: { margin: 0 }, descricaoCurtida: props.ratingLikesDescription ? props.ratingLikesDescription : 'pessoas' })] })
                                        : null, jsxRuntime.jsxs("div", { style: { display: 'flex', flexDirection: 'row', gap: '32px' }, children: [props.showButtonInvite &&
                                                jsxRuntime.jsx(Button$3, { variant: 'link', label: props.textGoalInviteBtn, startIcon: jsxRuntime.jsx("div", { style: { width: '26px', marginBottom: '-2px', marginRight: '8px' }, children: jsxRuntime.jsx(GoalInviteIcon, { width: '26px', height: '26px' }) }), handleClick: props.onClickMessage, style: { paddingTop: '0px', paddingBottom: '16px' } }), props.showButtonViews &&
                                                jsxRuntime.jsx(Button$3, { variant: 'link', label: props.textGoalViewsBtn, startIcon: jsxRuntime.jsx("div", { style: { width: '20px', marginBottom: '-1px', marginRight: '8px' }, children: jsxRuntime.jsx(GoalViewsIcon, { width: '20px' }) }), handleClick: props.onClickViewsBtn, style: { paddingTop: '0px', paddingBottom: '16px' } })] })] }), size[0] > MOBILEWIDTH && Edit === false ?
                                jsxRuntime.jsxs("div", { style: { position: 'absolute', right: 0, flexFlow: 'column', justifyContent: 'flex-end', width: '20%' }, id: 'avaliations-banner-problem', children: [jsxRuntime.jsx(Rating$1, { titulo: props.ratingTitleImpact ? props.ratingTitleImpact : 'Impacto', descricaoAvaliacao: props.descriptionImpacto, qtdeAvaliacao: props.qtdeAvaliacao, nota: props.notaAvaliacao, tipoVisualizacao: 1, nomeAvaliacao: props.ratingLikesEvaluation ? props.ratingLikesEvaluation : 'avaliação' }), jsxRuntime.jsx(Rating$1, { titulo: props.ratingTitleRelevance ? props.ratingTitleRelevance : 'Relevância', descricaoAvaliacao: props.descriptionRelevancia, qtdeAvaliacao: props.qtdeRelevancia, nota: props.notaRelevancia, tipoVisualizacao: 1, nomeAvaliacao: props.ratingLikesEvaluation ? props.ratingLikesEvaluation : 'avaliação' }), props.curtidas &&
                                            jsxRuntime.jsx(RatingCurtidas, { titulo: props.ratingTitleLikes ? props.ratingTitleLikes : 'Curtidas', qtdeCurtidas: props.curtidas, tipoBotao: 2, descricaoCurtida: props.ratingLikesDescription ? props.ratingLikesDescription : 'pessoas' })] })
                                : null] }) }), jsxRuntime.jsx(MissionSteps, { stepProblem: props.stepProblem, stepActive: props.stepActive, onClickContinue: hasContinueProps ? props.onClickContinue : null, onSelected: (step) => {
                        props.onSelectedStep(step);
                    }, idioma: Idioma }), jsxRuntime.jsx("div", { style: { marginTop: 18, width: '100%', borderRadius: 8, border: '1px solid #BDBDBD', padding: 16, paddingLeft: 32, paddingRight: 32 }, children: props.children })] }) }));
    function adapterEmail(email, widthScreen) {
        let newEmail = email;
        if (widthScreen < 450) {
            let indexBreak = email.indexOf("@");
            newEmail = `${email.slice(0, indexBreak - 1)} 
${email.slice(indexBreak)}`;
        }
        return newEmail;
    }
    function filterTagsSelected(dataOrigin, selectedsTags) {
        let optFiltered = dataOrigin.map((item) => {
            if (selectedsTags.includes(item.label)) {
                item.isDisabled = true;
            }
            else {
                item.isDisabled = false;
            }
            return item;
        });
        return optFiltered;
    }
}

var css_248z$b = ".MessageBox-module_container__6oBFw {\n  min-width: 200px;\n  padding: 8px;\n  min-height: 30px;\n  margin-top: 8px;\n  font-size: 14px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  position: relative;\n  flex-direction: row;\n  flex-wrap: wrap;\n  \n}\n\n.MessageBox-module_square__bUGB6{\n  height: 20px;\n  width: 20px;\n  display: inline-flex; \n  justify-content: center; \n  align-items: center;\n  margin-right: 8px;\n}\n\n.MessageBox-module_success__OT-qh{\n  \n  border-Width: 2;\n  border: 1px solid;\n  border-color: #2CA92A;\n  background-color: #D1F6D1;\n  color: #222;\n}\n\n.MessageBox-module_success__OT-qh:hover{\n  background-color: #2CA92A !important;\n  color: white;\n}\n\n.MessageBox-module_successNoHover__0-hv8{\n  \n  border-Width: 2;\n  border: 1px solid;\n  border-color: #2CA92A;\n  background-color: #D1F6D1;\n  color: #222;\n}\n\n.MessageBox-module_warning__WFHrV{\n  border-Width: 2;\n  border: 1px solid;\n  border-color: #FFC200;\n  background-color: #FEF0D4;\n  color: #222;\n}\n\n.MessageBox-module_warning__WFHrV:hover{\n  background-color: #FFC200 !important;\n  color: white;\n}\n\n.MessageBox-module_warningNoHover__9REga{\n  border-Width: 2;\n  border: 1px solid;\n  border-color: #FFC200;\n  background-color: #FEF0D4;\n  color: #222;\n}\n\n.MessageBox-module_error__PzfdG{\n  border-Width: 2;\n  border: 1px solid;\n  border-color: #EA0000;\n  background-color: #FFE5E5;\n  color: #222;\n}\n\n.MessageBox-module_error__PzfdG:hover{\n  background-color: #EA0000 !important;\n  color: white;\n}\n\n.MessageBox-module_errorNoHover__wBfkm{\n  border-Width: 2;\n  border: 1px solid;\n  border-color: #EA0000;\n  background-color: #FFE5E5;\n  color: #222;\n}\n\n.MessageBox-module_notificacao__TIUt0{\n  border-Width: 2;\n  border: 1px solid;\n  border-color: #757575;\n  background-color: #F2F2F2;\n  color: #0645AD;\n  font-weight: 700;\n}\n\n.MessageBox-module_notificacao__TIUt0:hover{\n  background-color: #F2F2F2 !important;\n  \n}\n\n.MessageBox-module_notificacao__TIUt0 span {\n  color: #757575 !important;\n  font-weight: 400;\n}\n\n.MessageBox-module_notificacaoNoHover__NHKEm{\n  border-Width: 2;\n  border: 1px solid;\n  border-color: #757575;\n  background-color: #F2F2F2;\n  color: #0645AD;\n  font-weight: 700;\n}\n\n.MessageBox-module_notificacaoNoHover__NHKEm span {\n  color: #757575 !important;\n  font-weight: 400;\n}\n\n.MessageBox-module_notificacaoErro__-Daph{\n  border-Width: 2;\n  border: 1px solid;\n  border-color: #EA0000 ;\n  background-color: #FFE5E5;\n  color: #222;\n}\n\n.MessageBox-module_notificacaoErro__-Daph:hover{\n  background-color: #EA0000 !important;\n  color: white;\n}\n\n.MessageBox-module_notificacaoErroNoHover__kW518{\n  border-Width: 2;\n  border: 1px solid;\n  border-color: #EA0000 ;\n  background-color: #FFE5E5;\n  color: #222;\n}";
var style$a = {"container":"MessageBox-module_container__6oBFw","square":"MessageBox-module_square__bUGB6","success":"MessageBox-module_success__OT-qh","successNoHover":"MessageBox-module_successNoHover__0-hv8","warning":"MessageBox-module_warning__WFHrV","warningNoHover":"MessageBox-module_warningNoHover__9REga","error":"MessageBox-module_error__PzfdG","errorNoHover":"MessageBox-module_errorNoHover__wBfkm","notificacao":"MessageBox-module_notificacao__TIUt0","notificacaoNoHover":"MessageBox-module_notificacaoNoHover__NHKEm","notificacaoErro":"MessageBox-module_notificacaoErro__-Daph","notificacaoErroNoHover":"MessageBox-module_notificacaoErroNoHover__kW518"};
styleInject(css_248z$b);

///-----------------------------------------
/// Componente
/**
 *
 * @componente
 */
function SuccessIcon() {
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M13.3327 4L5.99935 11.3333L2.66602 8", stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }));
}

///-----------------------------------------
/// Componente
/**
 *
 * @componente
 */
function ErrorIcon() {
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M11.3327 0.666504L0.666016 11.3332", stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M0.666016 0.666504L11.3327 11.3332", stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" })] }) }));
}

///-----------------------------------------
/// Componente
/**
 *
 * @componente
 */
function WarningIcon() {
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("svg", { width: "2", height: "12", viewBox: "0 0 2 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M1 0.666992V8.00033", stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M1 10.667L1 11.3337", stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" })] }) }));
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
        '#757575',
        '#EA0000',
    ];
    const MapIconList = [
        jsxRuntime.jsx(SuccessIcon, {}),
        jsxRuntime.jsx(WarningIcon, {}),
        jsxRuntime.jsx(ErrorIcon, {}),
        jsxRuntime.jsx(SaveIcon, {}),
        jsxRuntime.jsx(SaveIcon, { fill: 'red' })
    ];
    return (jsxRuntime.jsxs("div", { style: { position: 'relative' }, children: [jsxRuntime.jsxs("div", { className: props.hasHover ?
                    `${props.tipoVisualizacao === 1 ? style$a.success
                        : props.tipoVisualizacao === 2 ? style$a.warning
                            : props.tipoVisualizacao === 3 ? style$a.error
                                : props.tipoVisualizacao === 4 ? style$a.notificacao
                                    : props.tipoVisualizacao === 5 ? style$a.notificacaoErro
                                        : ''} ${style$a.container}`
                    :
                        `${props.tipoVisualizacao === 1 ? style$a.successNoHover
                            : props.tipoVisualizacao === 2 ? style$a.warningNoHover
                                : props.tipoVisualizacao === 3 ? style$a.errorNoHover
                                    : props.tipoVisualizacao === 4 ? style$a.notificacaoNoHover
                                        : props.tipoVisualizacao === 5 ? style$a.notificacaoErroNoHover
                                            : ''} ${style$a.container}`, style: {
                    cursor: props.onClick ? 'pointer' : 'default',
                    ...props.style
                }, onClick: props.onClick, children: [jsxRuntime.jsx("div", { className: style$a.square, style: { backgroundColor: MapBorderColor[props.tipoVisualizacao - 1] }, children: MapIconList[props.tipoVisualizacao - 1] }), jsxRuntime.jsxs("div", { style: { display: 'inline-flex', width: 'calc(100% - 30px)' }, children: [props.texto, jsxRuntime.jsxs("span", { children: [" \u00A0", props.descricao ? props.descricao : ''] })] })] }), props.hasClickExit &&
                jsxRuntime.jsxs("div", { style: {
                        display: 'inline-flex',
                        position: 'absolute',
                        width: '40px',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        right: 0,
                        top: 0,
                        cursor: 'pointer'
                    }, onClick: props.onClickExit, children: [" ", jsxRuntime.jsx(CloseIcon, { width: '9' }), " "] })] }));
}

const ButtonGroupWrapper = styled__default["default"].div `
  display: flex;
  flex-direction: row;
  align-items: center;
`;

function ButtonGroup({ children, active }) {
    const ButtonGroupProps = {
        type: 'group',
        variant: 'primary'
    };
    return (jsxRuntime.jsx(ButtonGroupWrapper, { className: "buttons-group", children: React__default["default"].Children.map(children, (child) => React__default["default"].cloneElement(child, {
            ...ButtonGroupProps,
            active: child.props.value === active,
            length: children.length
        })) }));
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
  width: ${(props) => props.theme.width || '100%'};
  height: 48px;
  background: ${({ theme }) => theme.colors.neutralsGrey6};
  border: 1px solid ${({ theme }) => theme.colors.neutralsGrey5};
  box-sizing: border-box;
  border-radius: 8px;
  outline: none;
  transition: all 0.2s linear;
  
  margin: 8px 0;
  display: flex;
  align-items: center;
  overflow: hidden;

  ${({ isClicked }) => isClicked &&
    `
        box-shadow: 0px 0px 0px 2px rgba(102, 51, 102, 0.4) !important;
        border: 1px solid #663366 !important;`}

  ${(props) => props.theme.multiline &&
    styled.css `
      width: ${(props) => props.theme.width || '100%'};
      height: ${(props) => props.theme.height || '100%'};
      min-height: ${(props) => props.theme.height || '100%'};
      display: block;
      padding: 0;
      overflow: hidden;
    `}


    ${(props) => props.theme.hovered &&
    styled.css `
      border: 1px solid ${({ theme }) => theme.colors.linkOnfocus};
    `}

    ${(props) => props.theme.focused &&
    styled.css `
      box-shadow: 0px 0px 0px 2px rgba(6, 69, 173, 0.4);
      border: 1px solid ${({ theme }) => theme.colors.linkPressed};
    `}

    ${(props) => props.theme.disabled &&
    styled.css `
      background: ${({ theme }) => theme.colors.neutralsGrey7};
      border: 1px solid ${({ theme }) => theme.colors.neutralsGrey5};
    `}

    ${(props) => props.theme.error &&
    styled.css `
      background: #ffe0e0;
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

  ${({ as }) => as === 'textarea' &&
    styled.css `
      height: ${(props) => props.theme.height || '100%'};
      resize: none;
      overflow: auto;
      min-height: 100%;
    `}
    
    ${(props) => props.theme.disabled &&
    styled.css `
      color: ${({ theme }) => theme.colors.neutralsGrey4};
      ${placeholderStyle('neutralsGrey4')}
    `}
    ${(props) => props.theme.error &&
    styled.css `
      color: ${({ theme }) => theme.colors.messageError1};
      ${placeholderStyle('linkError')}
    `}
`;
const Label$1 = styled__default["default"].label `
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.neutralsGrey1};

  ${(props) => props.theme.hovered &&
    styled.css `
      color: ${({ theme }) => theme.colors.linkOnfocus};
    `}

  ${(props) => props.theme.focused &&
    styled.css `
      color: ${({ theme }) => theme.colors.linkOnfocus};
    `}

    ${(props) => props.theme.disabled &&
    styled.css `
      color: ${({ theme }) => theme.colors.neutralsGrey3};
    `}

    ${(props) => props.theme.error &&
    styled.css `
      color: ${({ theme }) => theme.colors.messageError1};
    `}

    ${({ isClicked }) => isClicked &&
    `
        color: #663366 !important;
    `}
`;
const HelperText$2 = styled__default["default"].span `
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.colors.neutralsGrey3};

  ${(props) => props.theme.error &&
    styled.css `
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
  background-color: transparent !important;
  border: none !important;
  border-radius: 50%;
  outline: none;
  transition: all 0.1s linear;
  cursor: pointer;
  margin-right: 16px;
`;
const StartIcon = styled__default["default"].span `
  margin-left: 16px;
`;

function TextField(props) {
    const [focus, setFocus] = React.useState(false);
    const [hover, setHover] = React.useState(false);
    const [click, setClick] = React.useState(false);
    const [inputType, setInputType] = React.useState(props.type);
    const [endIconState, setEndIcon] = React.useState(props?.endIcon);
    const { t } = reactI18next.useTranslation();
    React.useEffect(() => {
        setInputType(props.type);
    }, [props.type]);
    React.useEffect(() => {
        setEndIcon(props?.endIcon);
    }, [props?.endIcon]);
    const showBorderAfterClick = () => {
        setClick(true);
        setTimeout(() => {
            setClick(false);
        }, 1000);
    };
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: { ...FRSTTheme, focused: focus, disabled: props.disabled, hovered: hover, error: props.error, multiline: props.multiline, width: props.width, height: props.height }, children: jsxRuntime.jsxs("div", { style: props.style, className: props.className, children: [jsxRuntime.jsx(Label$1, { htmlFor: props.id, isClicked: click, children: props.label }), jsxRuntime.jsxs(TextFieldContainer, { onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), onClick: () => showBorderAfterClick(), isClicked: click, children: [props.startIcon && !props.multiline && (jsxRuntime.jsx(StartIcon, { children: props.startIcon })), jsxRuntime.jsx(TextField$1, { onFocus: () => setFocus(true), onBlur: () => setFocus(false), id: props.id, placeholder: props.placeholder || `${t('globals.typeHere')}...`, as: props.multiline ? 'textarea' : 'input', type: inputType, value: props.value, disabled: props.disabled, onChange: props.onChange, name: props.name, required: props.required, defaultValue: props.defaultValue, maxLength: props.maxLength }), props.endIcon && !props.multiline && (!!props.endIcon && jsxRuntime.jsx(InputIconButton, { onClick: props.handleClickEndIcon, children: endIconState }))] }), props.helperText && jsxRuntime.jsx(HelperText$2, { children: props.helperText })] }) }));
}

function Textarea(props) {
    return jsxRuntime.jsx(TextField, { ...props, multiline: true });
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
const InputText$2 = styled__default["default"].textarea `
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
const HelperText$1 = styled__default["default"].span `
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

function randID$3() {
    return Math.random()
        .toString(36)
        .substr(2, 9);
}

function InputComment({ placeholder, value, onChange, remain, limit, hasEmoji, showCharacterCounter, IDInput, styles, disabled, emojiWindowlanguage }) {
    const [focus, setFocus] = React.useState(false);
    // Emoji Window States
    const [isVisibleEmojiWindow, setIsVisibleEmojiWindow] = React.useState(false);
    const [actionAreaEmojiButton, setActionAreaEmojiButton] = React.useState(false);
    const [colorEmojiButton, setColorEmojiButton] = React.useState('');
    const [heightPositionWindowEmoji, setHeightPositionWindowEmoji] = React.useState('');
    const [newEmojiIncluded, setNewEmojiIncluded] = React.useState(false);
    const [lastPositionCursorTextTextArea, setLastPositionCursorTextTextArea] = React.useState({});
    const [lenghtLastEmoji, setLenghtLastEmoji] = React.useState();
    // TextArea states
    const [stringValueTextArea, setStringValueTextArea] = React.useState(value);
    // IDs
    const [iDInputComment, setIDInputComment] = React.useState(IDInput ? IDInput : `InputComment-${randID$3()}`);
    React.useState(IDInput ? IDInput : `IDEmojiButton-${randID$3()}`);
    // Emoji window actions
    React.useEffect(() => {
        (isVisibleEmojiWindow) ? configsWhenOpenWindowEmoji() : configsWhenCloseWindowEmoji();
    }, [isVisibleEmojiWindow]);
    React.useEffect(() => {
        {
            newEmojiIncluded && repositionCursorAfterNewEmojiInTextArea();
        }
        resizeTextArea();
    }, [stringValueTextArea]);
    React.useEffect(() => {
        setStringValueTextArea(value);
    }, [value]);
    function inputInChanging(e) {
        setStringValueTextArea(e.target.value);
        onChange(e);
    }
    const verifyClick = () => {
        if (!actionAreaEmojiButton)
            setIsVisibleEmojiWindow(false);
    };
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsxs("div", { style: { ...styles }, onClick: verifyClick, children: [jsxRuntime.jsx(InputWrapper, { focus: focus, children: jsxRuntime.jsx(InputText$2, { id: iDInputComment, onFocus: () => setFocus(true), onBlur: () => setFocus(false), onChange: inputInChanging, value: stringValueTextArea, placeholder: placeholder, maxLength: limit, disabled: disabled }) }), showCharacterCounter &&
                    jsxRuntime.jsxs(HelperText$1, { children: [limit - remain, "/", limit] })] }) }));
    function resizeTextArea() {
        let tx = document.getElementById(iDInputComment);
        const txResize = (tx) => {
            tx.style.height = '20px';
            tx.style.height = tx.scrollHeight + 'px';
            setHeightPositionWindowEmoji(tx.scrollHeight - 440 + 'px');
        };
        {
            tx && tx.style && txResize(tx);
        }
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
const Name$1 = styled__default["default"].div `
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
const Position$2 = styled__default["default"].div `
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: ${({ theme }) => theme.colors.neutralsGrey2};
`;
const Date$2 = styled__default["default"].div `
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
    width: fit-content;
    justify-content: space-between;
`;
const LinkButton = styled__default["default"].a `
    border: none;
    text-decoration: none;
    ${({ theme }) => theme.fonts.textMessageComponentsBodBold};
    font-size: 12px;
    color: ${({ theme }) => theme.colors.linkOnfocus};
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
        color: ${({ theme }) => theme.colors.linkOnfocus};
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
const SpeechBubble$2 = styled__default["default"].div `
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

function SpeechBubble$1(props) {
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsxs(SpeechBubbleWrapper, { className: props.className, height: props.height, width: props.width, children: [jsxRuntime.jsx(Flap, { highlight: props.highlight, flap: props.flap }), jsxRuntime.jsx(SpeechBubble$2, { highlight: props.highlight, flap: props.flap, children: props.children })] }) }));
}

function buildStringWithLinkHTML({ value }) {
    let text = value;
    var urlRegex = /(\b(https?|ftp|file):\/\/([-A-Z0-9+&@#%?=~_|!:,.;]*)([-A-Z0-9+&@#%?\/=~_|!:,.;]*)[-A-Z0-9+&@#\/%=~_|])/ig;
    return text = text.replace(urlRegex, function (url) {
        return `<a href="${url}" target="_blank" style="color: #00f; text-decoration: underline">${url}</a>`;
    });
}
function randID$2() {
    return Math.random()
        .toString(36)
        .substr(2, 9);
}
function buildShortName(name) {
    const nome = name.replace(/\s+/gi, ' ').trim();
    var array_nome = nome.split(' ');
    if (array_nome.length > 2) {
        return `${array_nome[0]} ${array_nome[array_nome.length - 1]}`;
    }
    else {
        return name;
    }
}

const WIDTH_MOBILE = 550;
function CommentaryBox({ name, className, styles, position, value, date, actionLike, actionAnswer, isMe, isAuthor, actionDeleteComment, actionEditComment, actionMakePrivate, actionUpdateValue, detectLinks, idTextComment, wasEdited, hasAnswer, hasDropdown, isLiked, totalLikes, textSaveButton, textSaveButtonMobile, textCancelButton, textYou, textPrivateComment, textEdited, textLiked, textUnliked, textAnswer, textMakePrivate, textMakePublic, textEditComment, textDeleteComment, isPrivateMe, isPrivateAuthor }) {
    // Identify Screen Resizing
    const [size, setSize] = React.useState([0, 0]);
    React.useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    const [isOpenDrop, setIsOpenDrop] = React.useState(false);
    const [onEditing, setOnEditing] = React.useState(false);
    const [enableSaveEdit, setEnableSaveEdit] = React.useState(false);
    const [actionArea, setActionArea] = React.useState(false);
    const [iDCommentPosted, setIDCommentPosted] = React.useState(idTextComment ? idTextComment : `IDCommentPosted-${randID$2()}`);
    const [iDCommentInEditing, setIDCommentInEditing] = React.useState(idTextComment ? `idBoxCommentEditing-${idTextComment}` : `idBoxCommentEditing-${randID$2()}`);
    React.useState(idTextComment ? `iDButtonMore-${idTextComment}` : `iDButtonMore-${randID$2()}`);
    React.useEffect(() => {
        (!onEditing) &&
            (document.getElementById(iDCommentPosted)) &&
            (detectLinks ?
                document.getElementById(iDCommentPosted).innerHTML = buildStringWithLinkHTML({ value }) :
                document.getElementById(iDCommentPosted).innerHTML = value);
    }, [detectLinks, onEditing]);
    React.useEffect(() => {
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
    React.useEffect(() => {
        if (isOpenDrop) {
            (document.body.addEventListener("click", checksAnyClickOnScreen, false));
        }
    }, [isOpenDrop]);
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
    const checksAnyClickOnScreen = () => {
        if (isOpenDrop) {
            document.body.removeEventListener("click", checksAnyClickOnScreen, false);
            setIsOpenDrop(false);
        }
    };
    const getColorIconMore = () => {
        let finalColor = '#757575'; // Default
        (actionArea) && (finalColor = "#222222"); // Hover
        (isOpenDrop) && (finalColor = '#ff4d0d'); // Selected
        return finalColor;
    };
    return (jsxRuntime.jsx("div", { style: { width: 'auto', ...styles }, children: jsxRuntime.jsxs(SpeechBubble$1, { className: className, highlight: onEditing, children: [jsxRuntime.jsxs(HeaderWrapper$1, { children: [jsxRuntime.jsxs(IdentificationWrapper, { children: [jsxRuntime.jsxs(NameWrapper, { children: [jsxRuntime.jsxs(Name$1, { children: [" ", size[0] > WIDTH_MOBILE ? name : buildShortName(name), " "] }), isMe &&
                                            jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(DividerDot, { children: jsxRuntime.jsx(Dot, { fill: '#757575' }) }), jsxRuntime.jsxs(IsMe, { children: [" ", textYou, " "] })] }), size[0] > WIDTH_MOBILE ?
                                            ((isPrivateAuthor || isPrivateMe) &&
                                                jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(DividerDot, { children: jsxRuntime.jsx(Dot, { fill: '#757575' }) }), jsxRuntime.jsx(EyeOffIcon, { children: jsxRuntime.jsx(EyeOff, { fill: '#757575' }) }), jsxRuntime.jsx(CommentPrivate, { children: textPrivateComment })] })) : null] }), jsxRuntime.jsxs(Position$2, { children: [" ", position, " "] })] }), jsxRuntime.jsxs(OptionsWrapper, { children: [size[0] > WIDTH_MOBILE &&
                                    jsxRuntime.jsxs(Date$2, { children: [" ", date, " ", wasEdited && `(${textEdited})`, " "] }), hasDropdown && (isAuthor || isMe) &&
                                    jsxRuntime.jsxs(Dropdown, { children: [jsxRuntime.jsx(ButtonMore$1, { onClick: () => setIsOpenDrop(!isOpenDrop), onMouseOver: () => setActionArea(true), onMouseOut: () => setActionArea(false), children: jsxRuntime.jsx(MoreDotsHorizontal, { fill: getColorIconMore() }) }), jsxRuntime.jsxs(DropdownWrapper, { isVisible: isOpenDrop, isMe: isMe, children: [isMe && isAuthor &&
                                                        jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs(ItemDrop, { onClick: actionMakePrivate, children: [" ", (!isPrivateAuthor && !isPrivateMe) ? textMakePrivate : textMakePublic, "  "] }), jsxRuntime.jsxs(ItemDrop, { onClick: () => editingComment(), children: [" ", textEditComment, " "] }), jsxRuntime.jsxs(ItemDrop, { isLastItem: true, onClick: actionDeleteComment, children: [" ", textDeleteComment, " "] })] }), isMe && !isAuthor &&
                                                        jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [(!isPrivateAuthor) &&
                                                                    jsxRuntime.jsxs(ItemDrop, { onClick: actionMakePrivate, children: [" ", !isPrivateMe ? textMakePrivate : textMakePublic, "  "] }), jsxRuntime.jsxs(ItemDrop, { onClick: () => editingComment(), children: [" ", textEditComment, " "] }), jsxRuntime.jsxs(ItemDrop, { isLastItem: true, onClick: actionDeleteComment, children: [" ", textDeleteComment, " "] })] }), isAuthor && !isMe &&
                                                        jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs(ItemDrop, { onClick: actionMakePrivate, children: [" ", (!isPrivateAuthor && !isPrivateMe) ? textMakePrivate : textMakePublic, " "] }), jsxRuntime.jsxs(ItemDrop, { isLastItem: true, onClick: actionDeleteComment, children: [" ", textDeleteComment, " "] })] })] })] })] })] }), size[0] <= WIDTH_MOBILE &&
                    jsxRuntime.jsxs("div", { style: { display: 'flex', marginLeft: '14px', marginTop: '5px', alignItems: 'center' }, children: [(isPrivateAuthor || isPrivateMe) &&
                                jsxRuntime.jsx("div", { style: { marginRight: '10px' }, children: jsxRuntime.jsx(EyeOffIcon, { children: jsxRuntime.jsx(EyeOff, { fill: '#757575' }) }) }), jsxRuntime.jsxs(Date$2, { children: [" ", date, " ", wasEdited && `(${textEdited})`, " "] })] }), onEditing ?
                    jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(CommentaryEditingContent, { id: iDCommentInEditing, "data-gramm": "false", contentEditable: "true", role: "textbox", "aria-multiline": "true", suppressContentEditableWarning: true, children: value }), jsxRuntime.jsxs(FooterEditingWrapper, { width: size[0], children: [jsxRuntime.jsx(Button$3, { handleClick: () => { saveEditComment(); }, label: size[0] > WIDTH_MOBILE ? textSaveButton : textSaveButtonMobile, disabled: !enableSaveEdit, variant: "primary", style: { marginRight: '20px' } }), jsxRuntime.jsx(Button$3, { handleClick: () => { cancelEditComment(); }, label: textCancelButton, variant: "secondary" })] })] })
                    :
                        jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(CommentaryContent, { id: iDCommentPosted, children: value }), jsxRuntime.jsxs(IterationsWrapper, { children: [jsxRuntime.jsxs(LikesStatistics, { children: [isLiked ?
                                                    jsxRuntime.jsx(ThumbsUpCovered, { width: '16px', height: '16px' })
                                                    :
                                                        jsxRuntime.jsx(ThumbsUpCovered, { width: '16px', height: '16px', customColor_1: "#CCCCCC" }), jsxRuntime.jsx(TextTotalLikes, { children: totalLikes })] }), jsxRuntime.jsxs(IterationsButtonsWrapper, { children: [actionLike && (jsxRuntime.jsx(LinkButton, { onClick: actionLike, children: isLiked ? textLiked : textUnliked })), hasAnswer &&
                                                    jsxRuntime.jsxs(LinkButton, { onClick: actionAnswer, children: ["  ", textAnswer, "  "] })] })] })] })] }) }));
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
    const [colorsIcon, setColorsIcon] = React.useState({ fill: '#fff', stroke: '#2CA92A', customColor_1: '#2CA92A' });
    React.useEffect(() => {
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
                jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs(ButtonCheckmark, { onClick: handleClick, children: [jsxRuntime.jsx(CheckInCicle, { ...colorsIcon }), jsxRuntime.jsx(Subtitle, { disabled: disabled, children: subtitle })] }) })
                :
                    jsxRuntime.jsx(jsxRuntime.Fragment, { children: type == 'unchecked' &&
                            jsxRuntime.jsxs(ButtonCheckmark, { onClick: handleClick, children: [jsxRuntime.jsx(CloseInCicle, { ...colorsIcon }), jsxRuntime.jsx(Subtitle, { disabled: disabled, children: subtitle })] }) }) }) }));
}

function randID$1() {
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
const WrapperContent$2 = styled__default["default"].div `
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;

  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  padding-left: ${({ paddingIntern }) => (paddingIntern ? paddingIntern : '150px')};
  padding-right: ${({ paddingIntern }) => (paddingIntern ? paddingIntern : '150px')};
`;
const ButtonControll = styled__default["default"].div `
  display: flex;
  visibility: ${({ visibility }) => visibility};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: ${({ marginTopArrrowButton }) => (marginTopArrrowButton ? marginTopArrrowButton : '0.5rem')};

  width: ${({ sizeButton }) => sizeButton + 'px'};
  height: ${({ sizeButton }) => sizeButton + 'px'};

  min-width: ${({ sizeButton }) => sizeButton + 'px'};
  min-height: ${({ sizeButton }) => sizeButton + 'px'};

  background: ${({ theme }) => theme.colors.shadeWhite};
  border: 1px solid #e8e8e8;

  border-radius: 50%;

  ${({ sizeButton, isLeftButton, marginsArrowButton }) => {
    let result = '';
    if (sizeButton >= 80) {
        result = isLeftButton
            ? 'padding-right: 6px; margin-right: ' + marginsArrowButton + ';'
            : 'padding-left: 6px; margin-left: ' + marginsArrowButton + ';';
    }
    else {
        result = isLeftButton
            ? 'padding-right: 3px; margin-right:  ' + marginsArrowButton + ';'
            : 'padding-left: 3px; margin-left:  ' + marginsArrowButton + ';';
    }
    return result;
}}

  &:hover {
    background: ${({ theme }) => theme.colors.primary1} !important;
    border: 0px solid #e8e8e8;
  }

  box-shadow: 8px 21px 8px 0 rgb(34 34 34 / 30%) !important;
  z-index: 9;
  transition: all 0.2s ease-in-out;
`;
// ${({ isLeftButton }) => isLeftButton ? 'margin-right: -28px' : 'margin-left: -28px'};
// ${({ isLeftButton }) => isLeftButton ? 'padding-right: 6px' : 'padding-left: 6px'};
// ${({ isLeftButton }) => isLeftButton ? 'margin-right: -138px' : 'margin-left: -138px'};
styled__default["default"].div `
  min-width: 350px;
  min-height: 300px;
  margin: 10px;
  margin-left: 40px;
  margin-right: 40px;
  background-color: #0f0;
  z-index: 1;
  border-radius: 20px;
`;

function ScrollContainer({ children, type, isVisibleControlsButtons, positionArrowButton, marginTopArrrowButton, stepMove, className, styles, sizeArrowButton, marginsArrowButton, horizontalMarginInternScroll, refreshResize }) {
    const [actionAreaButtonLeft, setActionAreaButtonLeft] = React.useState(false);
    const [actionAreaButtonRight, setActionAreaButtonRight] = React.useState(false);
    const [iDScroll, setIDScroll] = React.useState(`iDScroll-${randID$1()}`);
    const [isVisibleArrowButtonLeft, setIsVisibleArrowButtonLeft] = React.useState(false);
    const [isVisibleArrowButtonRight, setIsVisibleArrowButtonRight] = React.useState(false);
    const scrollToLeft = () => {
        var objDiv = document.getElementById(iDScroll);
        if (objDiv !== null) {
            objDiv.scrollLeft - stepMove <= 0 ? setIsVisibleArrowButtonLeft(false) : setIsVisibleArrowButtonLeft(true);
            setIsVisibleArrowButtonRight(true);
            objDiv.scrollLeft = objDiv.scrollLeft - stepMove;
        }
    };
    const scrollToRight = () => {
        var objDiv = document.getElementById(iDScroll);
        if (objDiv !== null) {
            objDiv.scrollLeft + stepMove <= 0 ? setIsVisibleArrowButtonLeft(false) : setIsVisibleArrowButtonLeft(true);
            objDiv.offsetWidth + objDiv.scrollLeft + stepMove >= objDiv.scrollWidth
                ? setIsVisibleArrowButtonRight(false)
                : setIsVisibleArrowButtonRight(true);
            objDiv.scrollLeft = objDiv.scrollLeft + stepMove;
        }
    };
    React.useEffect(() => {
        var objDiv = document.getElementById(iDScroll);
        if (objDiv && objDiv.clientWidth && objDiv.clientWidth < objDiv.scrollWidth)
            setIsVisibleArrowButtonRight(true);
        else
            setIsVisibleArrowButtonRight(false);
    }, []);
    React.useEffect(() => {
        updateSize();
    }, [refreshResize]);
    const updateSize = () => {
        var objDiv = document.getElementById(iDScroll);
        if (objDiv !== null) {
            objDiv.offsetWidth + objDiv.scrollLeft >= objDiv.scrollWidth
                ? setIsVisibleArrowButtonRight(false)
                : setIsVisibleArrowButtonRight(true);
            objDiv.scrollLeft - stepMove <= 0 ? setIsVisibleArrowButtonLeft(false) : setIsVisibleArrowButtonLeft(true);
            if (objDiv && objDiv.clientWidth && objDiv.clientWidth < objDiv.scrollWidth)
                setIsVisibleArrowButtonRight(true);
            else
                setIsVisibleArrowButtonRight(false);
        }
    };
    React.useEffect(() => {
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsxs("div", { style: { ...styles }, className: className, children: [jsxRuntime.jsxs(WrapperHorizontal, { children: [isVisibleControlsButtons && positionArrowButton != 'bottom' && (jsxRuntime.jsx(ButtonArrow, { isLeftButton: true, onClick: scrollToLeft, onActionArea: setActionAreaButtonLeft, actionArea: actionAreaButtonLeft, sizeButton: sizeArrowButton, isVisible: isVisibleArrowButtonLeft, margin: marginsArrowButton ? (marginsArrowButton + 50) * -1 + 'px' : '-138px', ArrowScroll: ArrowScrollLeft, marginTopArrrowButton: marginTopArrrowButton })), jsxRuntime.jsx(WrapperContent$2, { id: iDScroll, paddingIntern: horizontalMarginInternScroll ? horizontalMarginInternScroll : '150px', children: children }), isVisibleControlsButtons && positionArrowButton != 'bottom' && (jsxRuntime.jsx(ButtonArrow, { isLeftButton: false, onClick: scrollToRight, onActionArea: setActionAreaButtonRight, actionArea: actionAreaButtonRight, sizeButton: sizeArrowButton, isVisible: isVisibleArrowButtonRight, margin: marginsArrowButton ? (marginsArrowButton + 50) * -1 + 'px' : '-138px', ArrowScroll: ArrowScrollRight, marginTopArrrowButton: marginTopArrrowButton }))] }), jsxRuntime.jsx("div", { style: { display: 'flex', justifyContent: 'center', width: '100%' }, children: isVisibleControlsButtons && positionArrowButton == 'bottom' && (jsxRuntime.jsxs("div", { style: {
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: marginTopArrrowButton ? marginTopArrrowButton : '5px'
                        }, children: [jsxRuntime.jsx(ButtonArrow, { isLeftButton: true, onClick: scrollToLeft, onActionArea: setActionAreaButtonLeft, actionArea: actionAreaButtonLeft, sizeButton: sizeArrowButton, isVisible: isVisibleArrowButtonLeft, margin: marginsArrowButton ? marginsArrowButton + 'px' : '10px', ArrowScroll: ArrowScrollLeft, marginTopArrrowButton: marginTopArrrowButton }), jsxRuntime.jsx(ButtonArrow, { isLeftButton: false, onClick: scrollToRight, onActionArea: setActionAreaButtonRight, actionArea: actionAreaButtonRight, sizeButton: sizeArrowButton, isVisible: isVisibleArrowButtonRight, margin: marginsArrowButton ? marginsArrowButton + 'px' : '10px', ArrowScroll: ArrowScrollRight, marginTopArrrowButton: marginTopArrrowButton })] })) })] }) }));
}
function ButtonArrow({ isLeftButton, onClick, onActionArea, actionArea, sizeButton, isVisible, margin, ArrowScroll, marginTopArrrowButton }) {
    return (jsxRuntime.jsx(ButtonControll, { isLeftButton: isLeftButton, onClick: onClick, onMouseOver: () => onActionArea(true), onMouseOut: () => onActionArea(false), sizeButton: sizeButton ? sizeButton : 80, visibility: isVisible ? 'visible' : 'hidden', marginsArrowButton: margin, marginTopArrrowButton: marginTopArrrowButton, children: jsxRuntime.jsx(ArrowScroll, { fill: actionArea ? '#fff' : '#000', height: sizeButton ? (sizeButton / 2.3).toFixed(0).toString() : '34', width: sizeButton ? (sizeButton / 4.3).toFixed(0).toString() : '18' }) }));
}

const HeaderWrapper = styled__default["default"].div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-left: ${({ marginLeft }) => marginLeft};
    margin-right: ${({ marginRight }) => marginRight};

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

const CardWrapper$2 = styled__default["default"].div `
    min-width: ${({ width }) => width ? width : '343px'};
    min-height: 136px;
    max-width: ${({ width }) => width ? width : '343px'};;
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
const WrapperHeader$2 = styled__default["default"].div `
    display: flex;
    flex-diretion: row;
    padding-left: 3.2px;
`;
const TitleCard$3 = styled__default["default"].div `
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

function StepCard({ title, onClick, numberPeople, textButtonMore, active, src, width }) {
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsxs(CardWrapper$2, { active: active, onClick: onClick, width: width, children: [jsxRuntime.jsxs(WrapperHeader$2, { children: [jsxRuntime.jsx(Bullseye, {}), jsxRuntime.jsx(TitleCard$3, { children: title })] }), jsxRuntime.jsxs(WrapperFooter, { children: [jsxRuntime.jsxs(WrapperAvatar, { children: [numberPeople > 0 ? (jsxRuntime.jsx(AvatarInternal, { size: '30px', zIndex: '1', margin: '0 0 0 0px', children: jsxRuntime.jsx(Avatar, { size: '28px', src: src && src.length > 0 ? src[0] : null }) })) : (null), numberPeople > 1 ? (jsxRuntime.jsx(AvatarInternal, { size: '30px', zIndex: '2', margin: '0 0 0 -10px', children: jsxRuntime.jsx(Avatar, { size: '28px', src: src && src.length > 0 ? src[1] : null }) })) : (null), numberPeople > 2 ? (jsxRuntime.jsx(AvatarInternal, { size: '30px', zIndex: '3', margin: '0 0 0 -10px', children: jsxRuntime.jsx(Avatar, { size: '28px', src: src && src.length > 0 ? src[2] : null }) })) : (null), (numberPeople - 3) > 0 ? (jsxRuntime.jsxs(AvatarInternal, { size: '30px', zIndex: '4', margin: '0 0 0 -10px', backgroundColor: '#E8E8E8', padding: '2px 0 0 0', children: ["+", numberPeople - 3 > 99 ? 99 : numberPeople - 3] })) : (null)] }), jsxRuntime.jsx(ButtonMore, { children: textButtonMore })] })] }) }));
}

function LearningSteps({ title, onSelected, objectCards, widthCard, marginLeftTitle, marginRightClear, marginsArrowButton, sizeArrowButton, horizontalMarginInternScroll, textClearFilter, textViewMore }) {
    const [itemSelected, setItemSelected] = React.useState(-1);
    const onItemSelect = (n) => {
        setItemSelected(n);
        onSelected(n);
    };
    function renderCard(item) {
        return (jsxRuntime.jsx(StepCard, { title: item.title, onClick: () => onItemSelect(item.id), numberPeople: item.numberPeople, className: null, textButtonMore: textViewMore ? textViewMore : 'Ver mais', active: itemSelected == item.id, src: item.photos, width: widthCard }, item.id));
    }
    return (jsxRuntime.jsxs(styled.ThemeProvider, { theme: FRSTTheme, children: [jsxRuntime.jsxs(HeaderWrapper, { marginLeft: marginLeftTitle ? marginLeftTitle : '0px', marginRight: marginRightClear ? marginRightClear : '0px', children: [jsxRuntime.jsx(TitleComponent, { children: title }), jsxRuntime.jsxs(ClearComponent, { onClick: () => onItemSelect(-1), children: [jsxRuntime.jsx(TrashIcon, {}), jsxRuntime.jsx(TextClear, { children: textClearFilter ? textClearFilter : 'Excluir Filtro' })] })] }), jsxRuntime.jsx(ScrollContainer, { stepMove: 380, isVisibleControlsButtons: true, sizeArrowButton: sizeArrowButton, marginsArrowButton: marginsArrowButton, horizontalMarginInternScroll: horizontalMarginInternScroll, children: objectCards.map(renderCard) })] }));
}

styled__default["default"].img `
    width: ${props => props.size || '120px'};
    height: ${props => props.size || '120px'};
    border-radius: 50%;
    object-fit: cover;

    ${({ disabled }) => disabled === true && `
        filter: grayscale(100%);
    `}
`;
const CardWrapper$1 = styled__default["default"].div `
    width: auto;
    min-height: auto;

    background-color: ${({ theme }) => theme.colors.shadeWhite};
    border: 1px solid #E8E8E8;
    border-radius: 4px;
    padding: 20px;
    ${({ hasShadow }) => hasShadow && 'box-shadow: 0px 18px 40px -15px #D3D3D3'};
`;
const TitleCard$2 = styled__default["default"].p `
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;

    color: #F55E0E;
    margin-top: 3px;
    margin-left: 5px;
`;
const TitleCardLoading = styled__default["default"].div `
    height: 22px;
    width: 100px;
    border-radius: 8px;

    margin-top: 3px;
    margin-left: 5px;
`;
const AreaCounter = styled__default["default"].div `
    margin-top: 36px;
    margin-left: 5px;
    display: flex;
    flex-direction: column;
`;
const TotalText = styled__default["default"].span `
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;

    color: #222222;
`;
const TotalLoading = styled__default["default"].div `
    margin-top: 36px;
    margin-left: 5px;
    height: 50px;
    width: 100px;
    border-radius: 10px;
`;
const TotalNumber = styled__default["default"].p `
    font-family: 'Work Sans' ;
    font-style: normal;
    font-weight: 300;
    font-size: 48px;
    line-height: 56px;

    color: #222222;
    margin-top: -13px;
`;
const PartialNumber = styled__default["default"].p `
    font-family: 'Work Sans' ;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 56px;

    color: #222222;
`;

function TotalizerCard$1({ titleCard, textTotal, numberTotal, numberPartial, loading, className, hasShadow, styles }) {
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsxs(CardWrapper$1, { hasShadow: hasShadow, style: { ...styles }, children: [loading ?
                    jsxRuntime.jsx(TitleCardLoading, { className: 'shimmer' })
                    :
                        jsxRuntime.jsxs(TitleCard$2, { children: [" ", titleCard, " "] }), loading ?
                    jsxRuntime.jsx(TotalLoading, { className: 'shimmer' }) :
                    jsxRuntime.jsxs(AreaCounter, { children: [jsxRuntime.jsxs(TotalText, { children: [" ", textTotal, " "] }), jsxRuntime.jsxs("div", { style: { display: 'flex', flexDirection: 'row', alignItems: 'baseline', marginBottom: '16px' }, children: [jsxRuntime.jsxs(TotalNumber, { children: [" ", numberTotal, " "] }), numberPartial && jsxRuntime.jsxs(PartialNumber, { children: ["/", numberPartial, " "] })] })] })] }) }));
}

const TooltipWrapper = styled__default["default"].div `
  display: inline-flex;
  position: relative;
`;
const TooltipTip = styled__default["default"].div `
  background: #FFF;
  border-radius: 4px;
  border: 1px solid #BDBDBD;
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #757575;
  box-shadow: 0px 25px 18px -20px rgba(34, 34, 34, 0.2);
  padding: 6px;
  position: relative;

  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}

  &::after {
    content: " ";
    left: 50%;
    border: solid transparent;
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-width: 5px;
    margin-left: calc(5px * -1);
  }

  &::before {
    content: " ";
    left: 50%;
    border: solid transparent;
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-width: 6px;
    margin-left: calc(6px * -1);
  }

  ${({ direction }) => {
    switch (direction) {
        case 'top':
            return `
          &::before,
          &::after {
            top: 100%;
            border-top-color: #BDBDBD
          }

          &::after {
            border-top-color: #FFFFFF;
          }
        `;
        case 'right':
            return `
          &::before,
          &::after {
            left: calc(6px * -1);
            top: 50%;
            transform: translateX(0) translateY(-50%);
            border-right-color: #BDBDBD;
          }

          &::after {
            border-right-color: #FFFFFF;
          }
        `;
        case 'bottom':
            return `
          &::before,
          &::after {
            bottom: 100%;
            border-bottom-color: #BDBDBD;
          }

          &::after {
            border-bottom-color: #FFFFFF;
          }
        `;
        case 'left':
            return `
          &::before,
          &::after {
            left: auto;
            right: calc(6px * -2);
            top: 50%;
            transform: translateX(0) translateY(-50%);
            border-left-color: #BDBDBD;
          }

          &::after {
            border-left-color: #FFFFFF;
          }
        `;
        default:
            return '';
    }
}}

`;
const TooltipGhost = styled__default["default"].div `
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;


  ${({ direction, height }) => {
    switch (direction) {
        case 'top':
            return `
          top: calc(${height} * -1);
        `;
        case 'right':
            return `
          left: calc(100% + 5px);
          top: 50%;
          transform: translateX(0) translateY(-50%);
        `;
        case 'bottom':
            return `
          bottom: calc(${height} * -1);
        `;
        case 'left':
            return `
          left: auto;
          right: calc(100% + 5px);
          top: 50%;
          transform: translateX(0) translateY(-50%);
        `;
        default:
            return '';
    }
}}
`;

function Tooltip$2({ content, direction, children, trigger = 'hover', delay = 400, style, className, width, height, onShow, onHide }) {
    let shpwTimeout;
    let hideTimeout;
    const [active, setActive] = React.useState(false);
    const [renderHeight, setRenderHeight] = React.useState('51px');
    const ref = React.useRef(null);
    React.useEffect(() => {
        if (!ref.current || !active)
            return;
        if (height)
            setRenderHeight(height);
        if (renderHeight === '51px')
            setRenderHeight(ref.current.clientHeight + 'px');
    }, [active]);
    const showTip = () => {
        const timeoutDelay = trigger === 'click' ? 0 : delay;
        shpwTimeout = setTimeout(() => {
            setActive(true);
            if (onShow)
                onShow({ active: true });
        }, timeoutDelay);
    };
    const hideTip = () => {
        clearInterval(shpwTimeout);
        clearInterval(hideTimeout);
        hideTimeout = setTimeout(() => {
            ref.current = null;
            setRenderHeight('51px');
            setActive(false);
            if (onHide)
                onHide({ active: false });
        }, 1000);
    };
    return (jsxRuntime.jsxs(TooltipWrapper, { onMouseEnter: trigger === 'hover' ? showTip : undefined, onMouseLeave: hideTip, onClick: trigger === 'click' ? showTip : undefined, children: [children, active && (jsxRuntime.jsx(TooltipGhost, { direction: direction || 'top', className: className, width: width || '100px', height: height ? height : renderHeight || '100px', ref: ref, children: jsxRuntime.jsx(TooltipTip, { direction: direction || 'top', style: style, width: width || '100px', height: height ? height : renderHeight || '100px', children: content }) }))] }));
}

// Create react context to share data between components
const SelectContext = React__default["default"].createContext(null);

const DropDownContainer$1 = styled__default["default"].div `
  width: 100%;
  height: 48px;
  background: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  position: relative;
  ${(props) => props.error &&
    styled.css `
      background: ${({ theme }) => theme.colors.inputError};
      border: 1px solid ${({ theme }) => theme.colors.messageError1};
    `}
`;
const EventOverlay$1 = styled__default["default"].div `
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: transparent;
  cursor: pointer;
  z-index: 2;
`;
const DropDownHeader$1 = styled__default["default"].div `
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 16px;
  border-radius: 4px;

  p {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #a6a6a6;
  }
  ${(props) => props.error &&
    styled.css `
      background: ${({ theme }) => theme.colors.inputError};
      p {
        color: ${({ theme }) => theme.colors.linkError};
      }
    `}
`;
const DropDownListContainer$1 = styled__default["default"]('div') ``;
const DropDownList$1 = styled__default["default"]('ul') `
  padding: 0;
  margin: 0;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  position: absolute;
  width: 100%;
  z-index: 5;

  &:first-child {
    padding-top: 0.8em;
  }
`;
const DropDownHeaderIcon$1 = styled__default["default"]('div') `
  position: absolute;
  right: 16.48px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.1s ease-in-out;

  ${({ open }) => open === true &&
    styled.css `
      transform: rotate(180deg);
    `}
`;
const SelectedOption$1 = styled__default["default"]('p') `
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #222222 !important;
`;

function ArrowIcon$1() {
    return (jsxRuntime.jsx("svg", { width: "14", height: "7", viewBox: "0 0 14 7", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M7.1736 6.64904L13.521 0.992188H0.826172L7.1736 6.64904Z", fill: "#222222" }) }));
}
function Select$2({ placeholder, defaultValue, children, onChange, loading, isError, style }) {
    const wrapperRef = React.useRef(null);
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedOption, setSelectedOption] = React.useState(null);
    const [selectedOptionValue, setSelectedOptionValue] = React.useState();
    React.useEffect(() => {
        function handleClickOutside(event) {
            // @ts-ignore
            if (wrapperRef.current && !wrapperRef.current.contains(event.target) && isOpen)
                setIsOpen(false);
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [wrapperRef, isOpen]);
    React.useEffect(() => {
        let param = false;
        children &&
            children.length &&
            children.forEach((child) => {
                if (child.props.value == defaultValue) {
                    param = true;
                    setSelectedOption(child.props.label);
                    setSelectedOptionValue(child.props.value);
                }
            });
        if (!param) {
            setSelectedOption(null);
            setSelectedOptionValue(false);
        }
    }, [children, defaultValue]);
    const toggle = () => setIsOpen(!isOpen);
    const handleChange = (e) => {
        onChange(e);
        toggle();
    };
    return (jsxRuntime.jsx("div", { style: style, children: jsxRuntime.jsxs(DropDownContainer$1, { ref: wrapperRef, error: isError, theme: FRSTTheme, children: [jsxRuntime.jsx(EventOverlay$1, { onClick: toggle }), jsxRuntime.jsxs(DropDownHeader$1, { error: isError, theme: FRSTTheme, children: [loading ? (jsxRuntime.jsx("p", { children: "Carregando dados..." })) : selectedOption ? (jsxRuntime.jsx(SelectedOption$1, { children: selectedOption })) : (jsxRuntime.jsx("p", { children: placeholder })), jsxRuntime.jsx(DropDownHeaderIcon$1, { open: isOpen, children: jsxRuntime.jsx(ArrowIcon$1, {}) })] }), isOpen && (jsxRuntime.jsx(DropDownListContainer$1, { children: jsxRuntime.jsx(DropDownList$1, { children: jsxRuntime.jsx("div", { onClick: handleChange, children: jsxRuntime.jsx(SelectContext.Provider, { value: { selected: selectedOptionValue }, children: children }) }) }) }))] }) }));
}

const ListItem$1 = styled__default["default"]("li") `
    list-style: none;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000;
    height: 38px;
    margin: 0;
    padding-left: 16px;
    margin-top: 4px;
    display: flex;
    align-items: center;
    cursor: pointer;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: normal;

    ${props => props.disabled === true && styled.css `
        cursor: not-allowed;
        background-color: #e5e5e5;
        opacity: 0.3;
    `}

    ${props => props.selected === true && styled.css `
        background-color: #e5e5e5;
        cursor: pointer;
        opacity: 1;
    `}

    &:hover {
        background-color: #e5e5e5;
    }
`;
function SelectItem({ value, label, selected, handleSelect, disabled }) {
    return (jsxRuntime.jsx(SelectContext.Consumer, { children: ({ selected }) => (jsxRuntime.jsx(ListItem$1, { disabled: disabled, selected: selected === value, value: value, onClick: handleSelect, children: label })) }));
}

function SelectFRST({ placeholder, valueSelect, handleValueSelect, listItems, isError, style }) {
    return (jsxRuntime.jsx(Select$2, { placeholder: placeholder, defaultValue: valueSelect, onChange: (e) => handleValueSelect(e.target?.attributes?.value?.value), isError: isError, style: style, children: listItems.map((item, index) => (jsxRuntime.jsx(SelectItem, { label: item, value: item }, index))) }));
}

const ModalWrapper = styled__default["default"].div `
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  overflow-y: auto;
  display: none;

  ${({ open }) => open && `
    display: block;
  `}
`;
const ModalContent = styled__default["default"].div `
  width: 80%;
  max-width: 528px;
  padding: 24px;
  margin: 1rem auto;
  box-sizing: border-box;
  margin-bottom: 100px;
  background: #FFFFFF;
  border: 1px solid #BDBDBD;
  border-radius: 16px;
  margin-top: 10%;
  animation: ${({ animation }) => {
    switch (animation) {
        case 'blowup':
            return BlowUpAnimation;
        case 'fade':
            return FadeAnimation;
        case 'slideup':
            return SlideUpAnimation;
        case 'slidedown':
            return SlideDownAnimation;
        default:
            return 'none';
    }
}} 0.3s ease-in-out;

  ${({ width }) => width && `
    max-width: ${width};
  `}

  ${({ mobileFullPage }) => mobileFullPage === true && `
    @media (max-width: 768px) {
      margin: 0 !important;
      width: 100%;
      border-radius: 0 !important;
      min-height: 100vh !important;
    }
  `}
`;
const BlowUpAnimation = styled.keyframes `
  0% { transform: scale(0) }
  100% { transform: scale(1) }
`;
const FadeAnimation = styled.keyframes `
  0% { opacity: 0 }
  100% { opacity: 1 }
`;
const SlideUpAnimation = styled.keyframes `
  0% { transform: translateY(100%) }
  100% { transform: translateY(0) }
`;
const SlideDownAnimation = styled.keyframes `
  0% { transform: translateY(-100%) }
  100% { transform: translateY(0) }
`;
const ModalHeader = styled__default["default"].div `
  position: relative;
  height: 20px;
`;
const ModalCloseButton = styled__default["default"].span `
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;

function Modal({ children, width, headerContent, open = false, mobileFullPage = false, showCloseButton = false, showHeader = false, style, onClose, onOpen, closeOnClickOutside = true, animation, handleCloseOnIcon }) {
    const ModalWrapperRef = React.useRef(null);
    const ModalContentRef = React.useRef(null);
    const AnimationType = animation.toLowerCase();
    const [active, setActive] = React.useState(false);
    React.useEffect(() => {
        function handleClickOutside(event) {
            const ModalWreapperEl = ModalWrapperRef?.current;
            if (ModalWreapperEl === event.target && active) {
                if (onClose)
                    onClose(event);
                if (closeOnClickOutside === true)
                    setActive(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ModalWrapperRef, active, closeOnClickOutside, onClose]);
    React.useEffect(() => {
        if (open === true) {
            document.body.style.overflow = 'hidden';
            if (onOpen)
                onOpen();
        }
        else {
            document.body.style.overflow = 'auto';
        }
        setActive(open);
    }, [onOpen, open]);
    const handleClose = (e) => {
        e.stopPropagation();
        setActive(false);
        if (onClose)
            onClose(e);
    };
    return (jsxRuntime.jsx(ModalWrapper, { open: active, ref: ModalWrapperRef, children: jsxRuntime.jsxs(ModalContent, { style: style, width: width, mobileFullPage: mobileFullPage, ref: ModalContentRef, animation: AnimationType, children: [showHeader === true ||
                    (showCloseButton === true && (jsxRuntime.jsx(ModalHeader, { children: showCloseButton === true && (jsxRuntime.jsxs(ModalCloseButton, { onClick: (e) => handleClose(e), children: [headerContent && headerContent, jsxRuntime.jsx("span", { onClick: (e) => (handleCloseOnIcon ? handleCloseOnIcon() : handleClose(e)), children: jsxRuntime.jsx(CloseIcon, {}) })] })) }))), children && children] }) }));
}

const container = styled__default["default"].div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${({ textPosition }) => textPosition === 'left' ? 'row-reverse'
    : textPosition === 'right' ? 'row'
        : textPosition === 'top' ? 'column-reverse'
            : textPosition === 'bottom' ? 'column'
                : null};
    position: relative;
    width: auto;
    gap: 8px;
    padding: 16px;
`;
const loader = styled__default["default"].div `
    
    svg {
        animation: load 1.5s infinite linear;
        
        @keyframes load {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    }
`;
const loadText = styled__default["default"].p `
    font-family: 'Inter';
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
`;

function Loading(props) {
    const [Size, setSize] = React.useState('24');
    const [Color, setColor] = React.useState(props.loadColor ? props.loadColor : '');
    const [PositionTextLoad, setPositionTextLoad] = React.useState(props.positionLoadingText ? props.positionLoadingText : 'bottom');
    const [LoadText, setLoadText] = React.useState(props.loadText ? props.loadText : '');
    React.useEffect(() => {
        setLoadText(props.loadText);
    }, [props.loadText]);
    React.useEffect(() => {
        setColor(props.loadColor);
    }, [props.loadColor]);
    React.useEffect(() => {
        setPositionTextLoad(props.positionLoadingText);
    }, [props.positionLoadingText]);
    React.useEffect(() => {
        if (props.sizeLoading === 'extra-small') {
            setSize('16');
        }
        else if (props.sizeLoading === 'small') {
            setSize('20');
        }
        else if (props.sizeLoading === 'medium') {
            setSize('24');
        }
        else if (props.sizeLoading === 'large') {
            setSize('32');
        }
        else if (props.sizeLoading === 'extra-large') {
            setSize('40');
        }
        else {
            setSize('24');
        }
    }, [props.sizeLoading]);
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsxs(container, { textPosition: PositionTextLoad, style: { ...props.style }, children: [jsxRuntime.jsx(loader, { children: jsxRuntime.jsx(Load, { width: Size, height: Size, fill: Color !== '' && Color }) }), jsxRuntime.jsx(loadText, { style: { color: props.loadTextColor ? props.loadTextColor : 'white' }, children: LoadText })] }) }));
}

const Container$f = styled__default["default"].div `
    display: flex;
    flex-direction: column;
`;
const LabelField = styled__default["default"].label `
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    margin-bottom: 16px;

    color: ${({ theme }) => theme.colors.shadeBlack};

    color: ${({ theme, isHover }) => isHover && theme.colors.linkOnfocus};
    
    color: ${({ isOnFocus }) => isOnFocus && '#663366'}    
`;
const ContainerIcon$2 = styled__default["default"].div `
    min-height: 20px;
    min-width: 20px;
    padding-left: 15px;
    padding-right: 10px;
    padding-top: 3px;
`;
const InputSearchWrapper$1 = styled__default["default"].div `
    height: 48px;
    background-color: #E8E8E8;

    border-radius: 8px;
    
    cursor: pointer;
    display: flex;
    align-items: center;

    border: 1px solid ${({ isHover, theme }) => isHover ? theme.colors.linkOnfocus : '#E0E0E0'};

    ${({ isOnFocus }) => isOnFocus && 'outline: 1.5px solid #AE9BAE; border: 1px solid #663366;'}    
`;
const InputText$1 = styled__default["default"].input `
    margin-left:10px;
    display: flex;
    align-items: center;
    height: 48px;
    width: 100%;
    border: none;
    background: transparent;

    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: ${({ theme }) => theme.colors.neutralsGrey1};

    &::placeholder {
        font-family: 'PT Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        backgorund-color: #FFF;
        color: ${({ theme }) => theme.colors.neutralsGrey3};
    }
`;
const ButtonAction$1 = styled__default["default"].div `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    background-color: ${({ theme }) => theme.colors.primary1};

    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${({ theme }) => theme.colors.shadeWhite};
    border-radius: 8px;
    
    padding: 14px;
    margin-right: -1px;
    margin-left: 10px;
    z-index: 2;
    white-space: nowrap;
`;

function SearchField({ label, hasSearchIcon, placeholder, value, onChange, textButton, className, handleClickButton }) {
    const [actionAreaInput, setActionAreaInput] = React.useState(false);
    const [inputOnFocus, setInputOnFocus] = React.useState(false);
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsxs(Container$f, { className: className, onMouseOver: () => setActionAreaInput(true), onMouseOut: () => setActionAreaInput(false), onFocus: () => setInputOnFocus(true), onBlur: () => setInputOnFocus(false), children: [label &&
                    jsxRuntime.jsxs(LabelField, { isHover: actionAreaInput, isOnFocus: inputOnFocus, children: [" ", label, " "] }), jsxRuntime.jsxs(InputSearchWrapper$1, { isHover: actionAreaInput, isOnFocus: inputOnFocus, children: [hasSearchIcon &&
                            jsxRuntime.jsxs(ContainerIcon$2, { children: [" ", jsxRuntime.jsx(SearchIcon, {}), " "] }), jsxRuntime.jsx(InputText$1, { placeholder: placeholder, onChange: onChange, value: value, onKeyDown: (event) => {
                                if (event.key === "Enter") {
                                    handleClickButton();
                                }
                            } }), jsxRuntime.jsx(ButtonAction$1, { onClick: () => handleClickButton(), children: textButton })] })] }) }));
}

function randID() {
    return Math.random()
        .toString(36)
        .substr(2, 9);
}

const WrapperHeaderTabs = styled__default["default"].div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: auto;
`;
const TitleAccordion = styled__default["default"].div `
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    color: ${({ theme }) => theme.colors.shadeBlack};
    margin-bottom: 10px;
`;
const ContainerTitleTabs = styled__default["default"].div `
    display: flex;
    overflow-x: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`;
const ContainerCleanAction = styled__default["default"].div `
    margin-left: 10px;
    display: flex;
    height: fit-content;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    cursor: pointer;
`;
const TextClean = styled__default["default"].span `
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;

    padding-left: 8px;

    color: ${({ theme }) => theme.colors.linkOnfocus};
`;
const TitleTabWrapper = styled__default["default"].div `
    display: flex;
    flex-direction: row;
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;

    color: ${({ theme }) => theme.colors.linkOnfocus};
    padding-right: 16px;
    padding-bottom: 16px;
    cursor: pointer;

    

    ${({ typeButton, status }) => (typeButton == 'filled') ? (status == true ? 'background-color: #fff; margin-bottom: -1px;' : 'background-color: #bdbdbd') : null};
`;
const TextTotalTab = styled__default["default"].div `
    margin-left: 2px;
    margin-right: 2px;
    color: #FF4D0D;
`;
const TextTitleTab = styled__default["default"].div `
    white-space: nowrap;
`;
const WrapperContent$1 = styled__default["default"].div `

    background-color: transparent;
    padding-top: 30px;
    padding-bottom: 25px;
    
    transition: transform 1s;

    ${({ status }) => status ? 'height: auto; padding-top: 30px; padding-bottom: 25px;' : 'max-height: 0px; padding-top: 0px; padding-bottom: 0px;'};
    overflow: hidden;
`;
// border: 1px solid ${({ theme }) => theme.colors.linkDisabled};
const DropIcon = styled__default["default"].div `
    margin-left: 2px;
    transform: rotate(${({ status }) => status ? '180deg' : '0deg'});
    transition: transform 0.3s;
    transition: all 0.2s ease-in-out;
`;
const TitleCurrentTabOpened = styled__default["default"].p `
    font-family: Work Sans;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;

    margin-bottom: 10px;
`;

function AccordionTabs({ titleAccordion, typeAccordion, typeButtonTab, titleTabs, handleActiveTab, activeTabID, hasCleanButton, handleActionClean, textCleanButton, hasCounterTab, children, style }) {
    React.useLayoutEffect(() => {
        const scrollContainer = document.getElementById("scrollTabsAccordion");
        scrollContainer.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            scrollContainer.scrollLeft += evt.deltaY;
        });
    }, []);
    const getCurrentTabOpened = () => {
        let nameTab = titleTabs.find((element) => element.id == activeTabID);
        if (nameTab && nameTab.description)
            return nameTab.description;
        else if (nameTab && nameTab.title)
            return nameTab.title;
    };
    const renderTitles = (item) => {
        let isOpened = item.id == activeTabID;
        let TabComponent = jsxRuntime.jsxs(TitleTabWrapper, { typeButton: typeButtonTab, status: isOpened, onClick: () => handleActiveTab(item.id), children: [jsxRuntime.jsxs(TextTitleTab, { children: [" ", item.title, " "] }), hasCounterTab && item.totalCounter > 0 &&
                    jsxRuntime.jsxs(TextTotalTab, { children: [" (", item.totalCounter, ") "] }), jsxRuntime.jsx(DropIcon, { status: isOpened, children: jsxRuntime.jsx(DropdownIcon, { fill: FRSTTheme['colors'].linkOnfocus }) })] }, item.id);
        return TabComponent;
    };
    return (jsxRuntime.jsxs(styled.ThemeProvider, { theme: FRSTTheme, children: [jsxRuntime.jsxs("div", { style: { width: '100%', ...style }, children: [titleAccordion && jsxRuntime.jsxs(TitleAccordion, { children: [" ", titleAccordion, " "] }), typeAccordion == 'horizontal' ? (jsxRuntime.jsxs(WrapperHeaderTabs, { children: [jsxRuntime.jsx(ContainerTitleTabs, { id: "scrollTabsAccordion", children: titleTabs.map(renderTitles) }), hasCleanButton &&
                                jsxRuntime.jsxs(ContainerCleanAction, { onClick: () => handleActionClean('limpar'), children: [jsxRuntime.jsx(TrashIcon, { width: '14px', height: '17px' }), jsxRuntime.jsxs(TextClean, { children: [" ", textCleanButton, " "] })] })] })) : null] }), jsxRuntime.jsx(WrapperContent$1, { status: activeTabID != '-1', children: jsxRuntime.jsxs("div", { style: { width: '100%', ...style }, children: [getCurrentTabOpened() && jsxRuntime.jsxs(TitleCurrentTabOpened, { children: [" ", getCurrentTabOpened(), " "] }), children] }) })] }));
}

const CheckBoxWrapper = styled__default["default"].div `
  min-height: 16px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  width: fit-content;
  align-items: center;
`;
const CheckButton = styled__default["default"].button `
  min-height: 16px;
  min-width: 16px;
  padding: 0.3rem;
  display: flex;
  align-items: center;
  background-color: transparent;
  border-width: 0px;
  :focus {
    background-color: ${({ theme }) => theme.colors.selectItens};
  }
`;
const Label = styled__default["default"].div `
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: ${({ isChecked }) => (isChecked ? 700 : 400)};
  font-size: 16px;
  line-height: 21px;

  padding-left: 8px;
`;

function Checkbox({ label, isChecked, handleCheck }) {
    const [actionAreaCheckIcon, setActionAreaCheckIcon] = React.useState(false);
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsxs(CheckBoxWrapper, { onClick: handleCheck, onMouseOver: () => setActionAreaCheckIcon(true), onMouseOut: () => setActionAreaCheckIcon(false), children: [jsxRuntime.jsx(CheckButton, { children: isChecked ? (jsxRuntime.jsx(CheckboxChecked, {})) : (actionAreaCheckIcon ?
                        jsxRuntime.jsx(CheckboxEmpty, { stroke: FRSTTheme['colors'].primary1 }) :
                        jsxRuntime.jsx(CheckboxEmpty, { stroke: FRSTTheme['colors'].neutralsGrey4 })) }), jsxRuntime.jsxs(Label, { isChecked: isChecked, children: [" ", label, " "] })] }) }));
}

function FilterAccordionCheckbox({ generalTitle, object, onSelected }) {
    const [activeTab, setActiveTab] = React.useState('-1');
    const [contentTabActiveShow, setContentTabActiveShow] = React.useState(jsxRuntime.jsx("div", {}));
    const [tabs, setTabs] = React.useState([]);
    React.useState([]);
    React.useEffect(() => {
        let tabsForAccordion = object.map((element) => {
            return {
                id: randID(),
                description: element.description,
                title: element.category,
                totalCounter: 0,
                group: includeStatusCheck(element.group ? element.group : [])
            };
        });
        setTabs(tabsForAccordion);
    }, []);
    React.useLayoutEffect(() => {
        renderNewContent(tabs);
    }, [activeTab, tabs]);
    const handleActiveTab = (newActive) => {
        if (newActive == activeTab)
            setActiveTab("-1");
        else
            setActiveTab(newActive);
    };
    function handleCheck(idCheck) {
        let copyObjectTab = tabs;
        for (let indexTab in tabs) {
            for (let indexChecks in (tabs[indexTab].group)) {
                if (tabs[indexTab].group[indexChecks].id == idCheck) {
                    copyObjectTab[indexTab].group[indexChecks].isChecked = !(copyObjectTab[indexTab].group[indexChecks].isChecked);
                    // Handle counter in tab title
                    if (copyObjectTab[indexTab].group[indexChecks].isChecked)
                        copyObjectTab[indexTab].totalCounter += 1;
                    else
                        copyObjectTab[indexTab].totalCounter -= 1;
                }
            }
        }
        setTabs(copyObjectTab);
        renderNewContent(copyObjectTab);
        onSelected(buildReturnSelecteds(copyObjectTab));
    }
    const handleClean = () => {
        let copyObjectTab = tabs;
        for (let indexTab in tabs) {
            for (let indexChecks in (tabs[indexTab].group)) {
                copyObjectTab[indexTab].group[indexChecks].isChecked = false;
                copyObjectTab[indexTab].totalCounter = 0;
            }
        }
        setTabs(copyObjectTab);
        renderNewContent(copyObjectTab);
        onSelected(buildReturnSelecteds(copyObjectTab));
    };
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsx(AccordionTabs, { hasCounterTab: true, titleAccordion: generalTitle, titleTabs: tabs, activeTabID: activeTab, handleActiveTab: (e) => handleActiveTab(e), hasCleanButton: true, textCleanButton: "Excluir filtros", handleActionClean: () => handleClean(), typeAccordion: "horizontal", typeButtonTab: "transparent", children: contentTabActiveShow }) }));
    function includeStatusCheck(group) {
        let newGroupWithStatusCheck = [];
        for (let element of group) {
            element.isChecked = false;
            newGroupWithStatusCheck.push(element);
        }
        return newGroupWithStatusCheck;
    }
    function buildReturnSelecteds(copyObjectTab) {
        let resultSelected = [];
        let counter = 0;
        copyObjectTab.forEach(tab => {
            resultSelected[counter] = {
                description: tab.title,
                selected: []
            };
            if (tab.totalCounter > 0) {
                tab.group.map((item) => {
                    if (item.isChecked)
                        resultSelected[counter].selected.push(item.id);
                });
            }
            counter++;
        });
        console.log(resultSelected);
        return resultSelected;
    }
    function renderNewContent(copyObjectTab) {
        let activeTabContent = copyObjectTab.filter((item) => item.id == activeTab);
        {
            activeTabContent &&
                activeTabContent[0] &&
                activeTabContent[0].group &&
                setContentTabActiveShow(buildCheckbox(activeTabContent[0].group));
        }
    }
    function buildCheckbox(groupActive) {
        let setGroupQuantity = 3;
        if (groupActive.length > 12)
            setGroupQuantity = 5;
        let splitGroup = splitGroupInLots(groupActive, setGroupQuantity);
        return (jsxRuntime.jsx("div", { style: { display: 'flex', flexDirection: 'row' }, children: splitGroup.map((container) => {
                return jsxRuntime.jsx("div", { style: { display: 'flex', flexDirection: 'column', marginRight: '24px' }, children: container.map((item) => {
                        let myID = item.id;
                        let isCheck = item.isChecked;
                        return jsxRuntime.jsx(Checkbox, { label: item.description, isChecked: isCheck, handleCheck: () => handleCheck(myID) }, myID);
                    }) }, randID());
            }) }));
    }
    function splitGroupInLots(group, qtdPerGroup) {
        let newGroup = [];
        let totalItems = group.length;
        let totalColumns = Math.ceil(totalItems / qtdPerGroup);
        let counterLinear = 0;
        for (let i = 0; i < totalColumns; i++) {
            if (!newGroup[i])
                newGroup[i] = [];
            for (let j = 0; j < qtdPerGroup; j++) {
                if (group[counterLinear]) {
                    newGroup[i][j] = group[counterLinear];
                    counterLinear++;
                }
            }
        }
        return newGroup;
    }
}

var css_248z$a = ".statusProblema-module_modalBox__SJtEw{\n    background-color: #FFF;\n    width: 800px;\n    min-height: 400px;\n    max-height: 80%;\n    padding-top: 20px;\n    padding-bottom: 20px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    position: relative;\n\n    border-radius: 10px;\n\n    font-family: 'Work Sans';\n\n}\n\n.statusProblema-module_fechar__6ESi1{\n    font-size: 12px;\n    padding: 8px;\n    display: flex;\n    justify-content: right;\n    align-items: center;\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin-top: 0px;\n    cursor: default;\n    margin-top: 10px;\n    margin-right: 10px;\n}\n\n.statusProblema-module_titulo__6REcF{\n    width: 100%;\n    margin-top: 10px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    padding-left: 24px;\n    font-family: 'Work Sans';\n    font-style: normal;\n    font-weight: 700;\n    font-size: 24px;\n    line-height: 130%;\n    text-align: center;\n    letter-spacing: 0.01em;\n    color: #222222;\n}\n\n.statusProblema-module_container__KLG2- {\n    overflow: auto;\n    min-width: 100%;\n    max-width: 100%;\n    \n    \n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-direction: column;\n    flex-wrap: noWrap;\n\n    margin-top: 20px;\n    margin-left: 0px;\n\n    border: 1px solid #BDBDBD;\n    border-left: 0px;\n    padding-bottom: 16px;\n}\n\n.statusProblema-module_containerItem__-Ui-d {\n    width: 400px;\n    margin-top: 24px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.statusProblema-module_containerData__QoS0I {\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n\n@media (max-width: 500px) {    \n    .statusProblema-module_containerItem__-Ui-d {\n        width: 90vw;\n    }\n}\n\n.statusProblema-module_avatar__4mtlc{\n\n    font-size: 14px;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.statusProblema-module_descricao__OJJt7{    \n    text-align: left;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-family: 'PT Sans';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 110%;\n}\n\n\n.statusProblema-module_modal_controls_wrapper__1dEvp {\n    gap: 23px;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 20px;\n    padding: 0 24px;\n}\n\n.statusProblema-module_status_logo__1zV01 {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.statusProblema-module_name__BZi68 {\n    font-family: 'Work Sans';\n    font-style: normal;\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 20px;\n    display: flex;\n    align-items: center;\n    text-align: center;\n    letter-spacing: -0.02em;\n    color: #FF4D0D;\n}\n\n.statusProblema-module_sub_title__s8MA4 {\n    font-family: 'PT Sans';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 18px;\n    text-align: center;\n}\n";
var style$9 = {"modalBox":"statusProblema-module_modalBox__SJtEw","fechar":"statusProblema-module_fechar__6ESi1","titulo":"statusProblema-module_titulo__6REcF","container":"statusProblema-module_container__KLG2-","containerItem":"statusProblema-module_containerItem__-Ui-d","containerData":"statusProblema-module_containerData__QoS0I","avatar":"statusProblema-module_avatar__4mtlc","descricao":"statusProblema-module_descricao__OJJt7","modal_controls_wrapper":"statusProblema-module_modal_controls_wrapper__1dEvp","status_logo":"statusProblema-module_status_logo__1zV01","name":"statusProblema-module_name__BZi68","sub_title":"statusProblema-module_sub_title__s8MA4"};
styleInject(css_248z$a);

var problemaFRST = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAyZSURBVHgB7Z1PbBTXHcd/b3ZdVbUNmwu5hTWXXCCYSlUjNRWG5ED5Y+CWkAO2RKXQi91TG3LAHEKTU+0eaKVGtakC9FJhDKQ5BLBFIjVqJUzg0lbCm0g9wKUbbKo29s7L+86bx87Ozu7O7s6fN8v7SOPd+bMz6/nO7/d+773fe8uoB+AjhQINbAyTzYpk8WFifDNx8Z6JRVJwFz8l4rwsXtVy11lnbJnW8stssVymjMMog/CDAyNCCCEk2y2WYbGpSPGAB2BZLEsQnV1bW6SMkQmBHQvtXx8TN/mwK2iB0qEsxF4km18hu7LIPv5fiTRHW4F9oo6Qjkixz+sstnYCO+6XmBCWDlN6ltoJc0Lw87q5cW0ElsLSaW2tNSwos20+wz56MkcakLrAjrDMmhXvitRblKhin0lb6NQE7hmLbQ0i8fG0XHfiAvN9hSLlN2afAWH9zNH6+pmkg7FEBeaH+ieJrNOUreApSlDNmhbWfIYSIhGBn2GrbURJWPOeJKzZophxrLavcseIW0OR+vru8APwaPESmwU7DRWDG8Ids9j/iWwjXPbVtZ9TTMQisHTJ9mXR6D9MhjDE5rIjF5jv7x+mXO5yD9Zr4yYWkSMtg/lPBo9QzrplxO0IWS7jHkZIZBbMR/uPE7fmyNA9zB5jC0/OUwREIrARNwYiErlrgY24MRKByF0J7JQXebpMhvjYoKPsL6vz1CEdC+xUhdCA8ew2OyZFWfRK7RG9UsvUAR1F0VJcW0TLRtwEKIiayWW+77tF6oDOqkmOuKYqlCCi4eg7l53WwTZpW2B+aODXRtwUQKug0/TbHm0JLLv7TNtyerDJdjsoQgdZJqjShrJo0twVtkkzvAWboEoXCpTvmw17cCiB+ejAaVPuagSjkbCuuqWLNq5ZW0K56tYWnK9MkRFXR0K56qYWLHOW2S0y6Avne5ql5Da3YCch3aA3rGnduKHAfP/gmAmsMgACLjmIIJDGFpxjbbeaGFKCsYaeNlBgY72Zo9jIioMt2OITZMgYwR63TmA3cjbprlmjQVkcYMFsjAzZhLHjdZu8K26r1QoZskqZVnND3tmBai3YqoyQIcvIeU085Gt25/hxjedlSZb+zUSvHiMaeonoyddENy4QPfpKblsT6zcvkpYwC3ObTD9dVW9Sc88/PEC07aX67fduE93/lFLjlBDw5YPV9emTRANC9BPvyfWJHxGt3CMtWc09p9x01YLTcs+4ia++Wb/9jbeJHn5J9M4BaTlJAutV4p7YLq+PbVtekKLCorHoinTTjhVXBc5RpGNi2gYW+yfXOnAjIfDzW6UlTb5SfzyOAY3EhyBYGonRbD+2K9T5cQzEheV2cr0k8bjpqsCMdhOn9MCNhMgKvP/gvnTf21+puutDwlUeE+L3uz2YsPIPfkn0+XW5DuEnfku048fVcz34gmjmpBQIIuCh8e7HOc4ek/vxYGFRLDyWr5d+Jb/T2Y/k+ugm+Yrz4Xped47r4XxJex4Fo6ftGE4ULed+1KzP1yu4unmvCyF/+j45ocPCORn4wMrfuSQfAnD2uhQPDwREwTF4SE68L/ejDMX+B/fk/r9eq3oKgO3qYQE3LsrlQYPy9t3r8vup86nrzXxW6wmSpaAaPaQFOwO1NYyelQWoG/WaW1bDOpT4OAYWh5sMUbdslds/+bAa6WI7hAQQDy4UD4gqW/FZiAzr/1wct/KFDP7AzFvV77PdV1RgfZsbZZ99o/p9cR48RKM/k6KnAXcG3y+6LtoaIR0Z8FiAE+S44k2cq90OVCQO4XFzJ38nrP09aVmwKgWExjEQ52Uh4naPq4bI7bhVdU24du/n8EDhOwztoNSwrBHxd9oVmO2kVAvgBqgbpMpOxb3P6o999KV8RdSNqBwLPo8bjQWiYt/eY1J4lOFOMRBBVex7DVzxQKql3k78yfMjhQJVKkXSDZS3ymJhdRADrhBC3/iwGnTBHWJR63td962sFm5SlbtABWio1968ID+LxotOQDAFnn+hGkED5crV/nQoYqhLnjY2MLE2pQ5uyrtucLNtRzVKRhmm3B/eQyxErSoQgpvFgwDBUHbCNQPV8qRu9kNVnheqn2PCa+311MFR7rYjCh4qVSRMfyrLfFwP67jewjlKlYGN4dzUi32i/sv2UVogwEFZBneGMhDL+v+J/vl3WbXxlp//+Jt8xfHff43oxR+QExz+cYro4z+IpvZHUlScA/txo/EeQiAIgoX956HcjnPg2nD/t/8st+F8d27I42D5wBskOdb+Zu12nBvWq4oCdT0EZ//+F6WKzZeYCKenhAVnLz1HuW9V9vpxGh7EQ/OkHNzwgM9796njG52vFa2ulwacz+Qz27nfSohWLUr+z3fbAqVj8yXjm0VDB0+tNm6IGW4NWdq1YBmig9FWYcHWc2ToWSzhp7eSoVcpxD6dsCFVjMC9jhG4xzEC9zgiyKLM/8KmoTF5stnXIpJOry6M9l2k5oQFbc1IhGv1eTQZoi8Y6TzNsh9Veiz6hdHJ8bQJ1HedZtfq9LvHTylPvQrahdH4j9SZi2erCX1eIBhSfLb0aE2R8bJw0XbvD1U5dqo+3QYg1adXxQXCO4umStZh90nGCMq99mZC9iIivhIuGj9xnmKHP8ollYIa1eeDUme974HKY/aClB6VzBeUEdntd00azpctYcYdzUOsNRACyQLN8Avoz8tup+sPDxTyp9XSTSAWJRxlsMVLZEgzhzk+GBMWnM/3ngWDgRaCBQ1XgVtPM9U1atbyyxabL5d7LtCCWK+/XbttzScoBPbnQCMQQ7Xq0ldypMPoyeoYqKzBqIQRhmpkA6w4+foCqi6oqvgDoCAaNRKEbXxYCciWRNbjiYD6MerQiLCxYMgLMi3RYJLmcNZ24XQXL25btL1ISaJSZDGQK4y4URA0hAQCQ7hWoxmQgYnvGlSX1hVbaioF5glH0shdTkpY4M2t9uNY8XY53gnvm1mpSqXNAkxq6rhoTGbJRwfLieVnYaRCEjcLyee/OVlb/aEm30kNUEMZDqtF0OUtg4NmItCTspqgtNpdyCk5K1Y3Uo3y86IaE/xLo0Z6dfyp/fX7MKRkrYPOMnwvPBRB58wGS+qNpz/YvkJJseKOpYVoUQ3vgGsNOhei4V6s4zbFnlfvqgLn+uYoKWAhEDjqRHEETH53jKEk/ipTGPBQ7PUNSlvTeF4OL7nKonr7tLsQ9WF+aBA7RijLoInSP7r+sCjv79+uHbnvJ0x1678ZEJjTEpuvTvPvS9lJ0E3HBcrk6bfqt0cRIH1ygbSH2XPe1VqB4aZ7IYUHluotj+G6u51KAWX8zQwI7HHPoCajw3HTBwevCJGPU9aBoLDa3/+iswnL1GCye66wYapa6TPndc+griPY/BBHhgn4gY7Ann4RbEHgETJkB9GfwBbWdvk3B+dFc36GDNmC85mgzQ1zdfjophXxoSIZ9AddgwurQ0G7Go9ssO1xMmQDbjf0uM1/+cyUxfrTxHpB87FJpizWH5s39bRNBXZD7kUy6Mpcs98tBK1HF+Zy42aAmoZAk9x6Sw/bUmDRulUizoyr1g2bzfhbrYIIPaTBBFwa0SKw8hJ+ALhx1XoADaz1PWEPDy2wcdWaIDQI45oVbY86E50R06IzYoIMySOaI0XUPNnOR9oXGPNL2/Ytd8p4Q1K0Ue56aXsSFmeoi2UdFVZcIkMyCHHbKXdrP9oh/Ej/MNnWLTPXZczIoGpXO+Wul46nUWLzT5bJJtMhETfiHncqLuhqnix2bRX5t0bk+Bh373HHRDJ3g2gEGRMvs2SIknF2dXWOuiSyyTmMyJESibgg0tlX+MHBI8Lpz5rAq0MQUNndu+XaU0aMqCcX3XpykQzhcapC9lEneI30tDFgRG4TjOW1vjnaTbTciFhmm0W7NVt4PNQo08/gAffIsvbEIS6IfQY0fmjTJDF+2pTLPlDeouPg6uNpipFEprgzLruOJcqtj8VltV4SncOQj26aEn8nnllrTshqay+ZMI41b1SmemKAW3skZrVeUpuF1BnkZlmzz4DbXhL/41Sr7Me4SP13ZZ0WMPw4Zq8JjXqtzcfTErb6NTTBbepEtsJOyjapWqwfbQRWOK6b2FimymgneKJ5Iex5XYRVaCewwgnGKpUR8XZMLLtJT5acKYtyfXNOpouGaCuwF4/YR8Q33p1aNUta6l3dRfWSCYH9yGkmkPRnYbqJnbEFaJhm2ZmJ117EfJ66ud8wZFJgP06m58bGsCM6ZwX3V80LzuKsB/zCqtM1x+TEV4yXhGWWnN+vwE8cYBb8fH45Cxbaim8BADv613K+UEgAAAAASUVORK5CYII=";

function ApprovesItem(props) {
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs("div", { className: style$9.containerItem, children: [jsxRuntime.jsx("div", { className: style$9.avatar, style: { width: props.size }, children: jsxRuntime.jsx(Avatar, { src: props.avatar, size: props.avatarSize }) }), props.statusApprove === 'reviewed' ?
                        jsxRuntime.jsx("div", { children: jsxRuntime.jsx(StatusProblemaSawBadgeIcon, {}) })
                        : props.statusApprove === 'adjustments' ?
                            jsxRuntime.jsx("div", { children: jsxRuntime.jsx(StatusProblemaEdit, {}) })
                            :
                                jsxRuntime.jsx("div", { children: jsxRuntime.jsx(StatusProblemaSendIcon, {}) }), jsxRuntime.jsx("div", { style: { width: props.size }, className: style$9.status_logo, children: jsxRuntime.jsx(Avatar, { src: problemaFRST, size: props.avatarSize }) })] }), jsxRuntime.jsx("div", { className: style$9.containerItem, style: { marginTop: '8px' }, children: jsxRuntime.jsxs("div", { className: style$9.containerData, style: { width: props.size }, children: [jsxRuntime.jsx("span", { className: style$9.name, children: props.nomeAvatar }), jsxRuntime.jsx("span", { className: style$9.sub_title, children: props.dataAvatar })] }) })] }));
}
function ModalStatusProblema(props) {
    // Função para pegar o width da tela
    const [size, setSize] = React.useState([0, 0]);
    React.useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    const BREAKWIDTH = 500;
    return (jsxRuntime.jsx(material.Modal, { open: props.open, onClose: props.handleClose, children: jsxRuntime.jsxs(material.Box, { className: style$9.modalBox, style: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)', ...props.style }, children: [jsxRuntime.jsx("div", { className: style$9.fechar, onClick: props.handleClose, children: jsxRuntime.jsx(CloseIcon, {}) }), jsxRuntime.jsx("div", { className: style$9.titulo, children: props.title }), jsxRuntime.jsx("div", { className: style$9.container, style: { height: props.approves.length >= 3 ? 555 : 185 * props.approves.length }, children: props.approves.map((item, index) => (jsxRuntime.jsx(ApprovesItem, { avatarSize: (size[0] >= BREAKWIDTH) ? '120px' : '100px', size: (size[0] >= BREAKWIDTH) ? '160px' : '120px', nomeAvatar: item.nome, dataAvatar: item.data, statusApprove: item.approve, avatar: item.avatarFoto }, index))) }), jsxRuntime.jsxs("div", { className: style$9.modal_controls_wrapper, children: [jsxRuntime.jsx("div", { className: style$9.descricao, children: props.description }), jsxRuntime.jsx("div", { className: style$9.conclusao, children: jsxRuntime.jsx(Button$3, { variant: 'primary', label: props.language === 'en-US' ? 'ok, close' : 'Ok, entendi', handleClick: props.handleClose, style: { width: '100%', minWidth: '140px' } }) })] })] }) }));
}

var css_248z$9 = ".modalLearningTech-module_modalBox__y9RGt{\n    background-color: #FFF;\n    max-width: 900px;\n    min-height: 300px;\n    max-height: 80%;\n    padding-top: 30px;\n    padding-bottom: 30px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    position: relative;\n\n    border-radius: 10px;\n\n    font-family: 'Work Sans';\n    \n\n}\n\n.modalLearningTech-module_fechar__1Vw6M{\n    font-size: 12px;\n    color: #222222;\n    padding: 12px;\n    background-color: transparent;\n    border-top-right-radius: 10px;\n\n    display: flex;\n    justify-content: right;\n    align-items: center;\n    position: absolute;\n    top: 0px;\n    right: 0px;\n\n    margin-top: 0px;\n    cursor: pointer;\n}\n\n.modalLearningTech-module_titulo__U8Urp{\n    \n    width: 100%;\n\n    margin-top: 10px;\n    \n    font-size: 24px;\n    font-weight: 700;\n    \n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    \n}\n\n.modalLearningTech-module_container__HKtAY {\n    overflow: auto;\n    width: 100%;\n\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-direction: column;\n    flex-wrap: noWrap;\n\n    margin-top: 10px;\n\n}\n\n.modalLearningTech-module_conclusao__KHnxJ{\n    margin-top: 30px;\n\n    display: inline-flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: nowrap;\n\n}";
var style$8 = {"modalBox":"modalLearningTech-module_modalBox__y9RGt","fechar":"modalLearningTech-module_fechar__1Vw6M","titulo":"modalLearningTech-module_titulo__U8Urp","container":"modalLearningTech-module_container__HKtAY","conclusao":"modalLearningTech-module_conclusao__KHnxJ"};
styleInject(css_248z$9);

function ModalLearningTech(props) {
    return (jsxRuntime.jsx(material.Modal, { open: props.open, onClose: props.handleClose, children: jsxRuntime.jsxs(material.Box, { className: style$8.modalBox, style: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)', ...props.style }, children: [jsxRuntime.jsx("div", { className: style$8.fechar, onClick: props.handleClose, children: jsxRuntime.jsx(CloseIcon, {}) }), jsxRuntime.jsx("div", { className: style$8.titulo, children: props.title }), jsxRuntime.jsx("div", { className: style$8.container, children: props.children }), jsxRuntime.jsx("div", { className: style$8.conclusao, children: props.confirmationButton ?
                        props.cancelButton ?
                            jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(Button$3, { variant: 'link', label: props.cancelButton, handleClick: props.handleClose }), jsxRuntime.jsx("span", { style: { marginRight: 8, marginLeft: 8 }, children: props.language === 'en-US' ? 'or' : 'ou' }), jsxRuntime.jsx(Button$3, { variant: props.typeButtonConfirmation, label: props.confirmationButton, handleClick: props.handleConfirmation })] })
                            :
                                jsxRuntime.jsx(Button$3, { variant: props.typeButtonConfirmation, label: props.confirmationButton, handleClick: props.handleConfirmation })
                        :
                            jsxRuntime.jsx(jsxRuntime.Fragment, {}) })] }) }));
}

var css_248z$8 = ".modalVideo-module_modalBox__qB5gT {\n  background-color: #fff;\n  max-width: 670px;\n  max-height: 80%;\n  padding-top: 20px;\n  position: relative;\n  border-radius: 10px;\n  font-family: 'Work Sans';\n}\n\n.modalVideo-module_fechar__jywh1 {\n  font-size: 13px;\n  color: #222222;\n}\n\n.modalVideo-module_container__OYjiD {\n  overflow: auto;\n  width: 100%;\n\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-direction: column;\n  flex-wrap: noWrap;\n\n  margin-top: 10px;\n}\n";
var style$7 = {"modalBox":"modalVideo-module_modalBox__qB5gT","fechar":"modalVideo-module_fechar__jywh1","container":"modalVideo-module_container__OYjiD"};
styleInject(css_248z$8);

const WrapperStars = styled__default["default"].div `
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    flex-direction: ${({ orientation }) => orientation == 'vertical' ? 'column' : 'row'};
    width: auto;
`;
const Raiting = styled__default["default"].p `
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Work Sans;
    font-size: 24px;
    line-height: 100%;
    font-weight: 500;
    line-height: 28px;
    color: #222;
    padding-top: 3px;
    margin-left: 16.5px;
`;

/**
 * @componente
 */
function Rating({ rating, isVisibleNumberRating, qtdStars, marginStars, handleRating, sizeStars, orientation, disabled }) {
    React.useState(rating + 1);
    const [hoverRaiting, setHoverRaiting] = React.useState(-1);
    const rederStars = () => {
        var groupStars = [];
        const handleClick = (e) => {
            if (!disabled)
                handleRating(e);
        };
        const getStatusActive = (id) => {
            if (id < hoverRaiting)
                return true;
            else if (hoverRaiting != -1)
                return false;
            else if (id < rating)
                return true;
        };
        for (var i = 0; i < qtdStars; i++) {
            groupStars.push(jsxRuntime.jsx(StarRatingComponent, { id: i + 1, active: getStatusActive(i), setOnHover: setHoverRaiting, handleClick: handleClick, sizeStars: sizeStars, marginStars: marginStars, disabled: disabled }, i));
        }
        return groupStars;
    };
    return (jsxRuntime.jsxs(WrapperStars, { orientation: orientation, children: [rederStars(), isVisibleNumberRating && jsxRuntime.jsx(Raiting, { children: (rating).toFixed(1) })] }));
}
function StarRatingComponent({ id, active, handleClick, sizeStars, marginStars, setOnHover, disabled }) {
    const [actionArea, setActionArea] = React.useState(false);
    const getColorStar = () => {
        if (active)
            return '#FFC200';
        else
            return '#757575';
    };
    React.useEffect(() => {
        setTimeout(() => {
            if (actionArea)
                setOnHover(id);
            else
                setOnHover(-1);
        }, 150);
    }, [actionArea]);
    return jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx("div", { onMouseOver: () => setActionArea(!disabled), onMouseOut: () => setActionArea(false ), onClick: () => handleClick(id), style: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: marginStars ? marginStars : '3.5px'
            }, children: jsxRuntime.jsx(StarRating, { width: sizeStars ? sizeStars : 30, height: sizeStars ? sizeStars : 29, fill: getColorStar(), fillOpacity: disabled ? '0.6' : '1' }) }) });
}

function Video({ videoId, privateHash, width, height, autoplay, quality, timeStart, showSpeedControl, controls, loop, keyboard, style }) {
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsx("div", { style: { ...style }, children: jsxRuntime.jsx("iframe", { src: `https://player.vimeo.com/video/${videoId}?h=${privateHash ? privateHash : ''}&autoplay=${autoplay ? autoplay : 0}&quality=${quality ? quality : '720p'}&speed=${showSpeedControl ? showSpeedControl : 0}&controls=${controls ? controls : 1}&loop=${loop ? loop : 0}&keyboard=${keyboard ? keyboard : 0}&#t=${timeStart ? timeStart : '0m0s'}`, width: width ? width : 640, height: height ? height : 342, allow: "autoplay; fullscreen; picture-in-picture", frameBorder: "0", allowFullScreen: true }) }) }));
}

function ModalVideo(props) {
    const [IdVideo, setIdVideo] = React.useState('');
    const [HashVideo, setHashVideo] = React.useState('');
    const [currentRating, setCurrentRating] = React.useState(props.rating);
    const getInformationsURL = () => {
        let parts = props?.videoUrl.split('/');
        let hash = parts[parts.length - 1];
        let dataVideo = hash.split('?h=');
        setIdVideo(dataVideo[0]);
        setHashVideo(dataVideo[1]);
    };
    const convertTimeToString = (time) => {
        let temp = time;
        let hora = Math.trunc(time / 3600);
        temp -= hora * 3600;
        let min = Math.trunc(temp / 60);
        temp -= min * 60;
        if (hora > 0) {
            return `${hora}h${min}m${temp}s`;
        }
        else {
            return `${min}m${temp}s`;
        }
    };
    React.useEffect(() => {
        getInformationsURL();
        setCurrentRating(props.rating);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.videoUrl]);
    React.useEffect(() => {
        if (props.rating) {
            setCurrentRating(props.rating);
        }
    }, [props.rating]);
    return (jsxRuntime.jsx(material.Modal, { open: props.open, onClose: props.handleClose, children: jsxRuntime.jsxs(material.Box, { id: `modal-video${(props.title ? props.title : '').replace(/( )+/g, '')}`, className: style$7.modalBox, style: {
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                height: props.showRating ? '80%' : '400px',
                maxHeight: props.showRating ? '620px' : '400px',
                overflowY: 'auto'
            }, children: [jsxRuntime.jsxs(material.Stack, { flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", px: 3, children: [jsxRuntime.jsx(material.Box, { textAlign: "left", style: { paddingLeft: 6, }, children: props.title }), jsxRuntime.jsx(material.Box, { className: style$7.fechar, onClick: props.handleClose, children: jsxRuntime.jsx(CloseIcon, {}) })] }), jsxRuntime.jsxs(material.Box, { p: 3, children: [props.videoUrl && (jsxRuntime.jsx(material.Box, { width: "100%", children: jsxRuntime.jsx(Video, { videoId: IdVideo, privateHash: HashVideo, autoplay: 1, controls: 1, keyboard: 1, timeStart: convertTimeToString(props.timeBegin), showSpeedControl: 1, width: 620, height: 400 }) })), props.showRating && (jsxRuntime.jsx(material.Box, { style: { display: 'flex', justifyContent: 'flex-end' }, children: jsxRuntime.jsxs(material.Box, { style: { maxWidth: 240 }, children: [jsxRuntime.jsx("p", { style: { textAlign: 'left', fontSize: 14, fontWeight: 400 }, children: props.ratingDescription }), jsxRuntime.jsx(material.Box, { style: { display: 'flex', justifyContent: 'flex-end' }, children: jsxRuntime.jsx(Rating, { isVisibleNumberRating: true, marginStars: "3.5px", orientation: "horizontal", qtdStars: 5, rating: currentRating, sizeStars: 25, handleRating: (e) => {
                                                setCurrentRating(e);
                                                props.handleChangeRating(props.recommendationId, e);
                                            }, disabled: false }) })] }) }))] })] }) }));
}

var css_248z$7 = ".cardProblemaGestor-module_container__si6gB {\n    width: 100%;\n    padding-top: 30px;\n    padding-left: 16px;\n    padding-right: 16px;\n    padding-bottom: 16px;\n\n    justify-content: flex-start;\n    align-items: flex-start;\n    flex-direction: row;\n    position: relative;\n}\n\n.cardProblemaGestor-module_container__si6gB:hover {\n    cursor: pointer;\n}\n\n.cardProblemaGestor-module_tagStatusProblem__SKKTK {\n    position: absolute;\n    top: 0;\n    right: 0;\n\n    font-size: 12px;\n    font-weight: 500;\n    padding: 8px;\n\n    border-bottom-left-radius: 8px;\n    \n\n}\n\n.cardProblemaGestor-module_checkBox__SK00W {\n    \n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n    height: 100%;\n    padding-top: 20px;\n    padding-left: 12px;\n    \n\n    position: absolute;\n    left: 0;\n\n}\n\n.cardProblemaGestor-module_contentCard__0-ex3 {\n    \n    \n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    flex-direction: column;\n}\n\n.cardProblemaGestor-module_avatarInfoUser__dZei- {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n}\n\n.cardProblemaGestor-module_infoUser__naGfk {\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    flex-direction: column;\n    margin-left: 4px;\n}\n\n.cardProblemaGestor-module_tituloCard__i4n9p {\n    \n    margin-top: 4px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n\n    font-weight: 600;\n    font-size: 18px;\n    word-wrap: break-word;\n}\n\n.cardProblemaGestor-module_tagsContainer__K2zv5 {\n    \n    \n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-wrap: wrap;\n}\n\n.cardProblemaGestor-module_avaliacao__w2-fB {\n\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-wrap: wrap;\n    \n}\n";
var style$6 = {"container":"cardProblemaGestor-module_container__si6gB","tagStatusProblem":"cardProblemaGestor-module_tagStatusProblem__SKKTK","checkBox":"cardProblemaGestor-module_checkBox__SK00W","contentCard":"cardProblemaGestor-module_contentCard__0-ex3","avatarInfoUser":"cardProblemaGestor-module_avatarInfoUser__dZei-","infoUser":"cardProblemaGestor-module_infoUser__naGfk","tituloCard":"cardProblemaGestor-module_tituloCard__i4n9p","tagsContainer":"cardProblemaGestor-module_tagsContainer__K2zv5","avaliacao":"cardProblemaGestor-module_avaliacao__w2-fB"};
styleInject(css_248z$7);

/**
 * @param {CardProblemGestorProps} props
 */
function CardProblemGestor(props) {
    const statusBg = props.statusBackgroundColor || '#757575';
    const statusColor = props.statusColor || '#FFFFFF';
    return (jsxRuntime.jsxs("div", { className: style$6.container, style: { border: '1px solid ', borderColor: '#CCC', backgroundColor: '#FFF', color: '#000' }, onClick: () => props.onClick(props.problemID), children: [jsxRuntime.jsx("div", { className: style$6.tagStatusProblem, style: { background: statusBg || '#757575', color: statusColor }, children: props.statusName }), jsxRuntime.jsxs("div", { className: style$6.contentCard, children: [jsxRuntime.jsxs("div", { className: style$6.avatarInfoUser, children: [jsxRuntime.jsxs("div", { children: [" ", jsxRuntime.jsx(Avatar, { size: '40px', src: props.userAvatar }), " "] }), jsxRuntime.jsxs("div", { className: style$6.infoUser, children: [jsxRuntime.jsx("span", { style: { fontSize: 16, fontWeight: 600 }, children: props.userName }), jsxRuntime.jsx("span", { style: { fontSize: 14, fontWeight: 400 }, children: props.userCargo })] })] }), props.cardTitle &&
                        jsxRuntime.jsx("div", { className: style$6.tituloCard, style: { color: '#FF4D0D', width: '100%' }, children: jsxRuntime.jsx("span", { children: props.cardTitle }) }), props.tags &&
                        jsxRuntime.jsx("div", { className: style$6.tagsContainer, children: props.tags.map((item, index) => (jsxRuntime.jsx(Tag, { title: item, color: '#050505', selected: false, inverted: true, style: { fontWeight: 500, fontSize: 14, marginRight: 8, marginTop: 8 } }, index))) }), props.ratingImpacto &&
                        jsxRuntime.jsxs("div", { className: style$6.avaliacao, children: [jsxRuntime.jsx(Rating$1, { nota: props.ratingImpacto.nota, qtdeAvaliacao: props.ratingImpacto.qtdeAvaliacao, descricaoAvaliacao: props.ratingImpacto.description, titulo: props.locales?.impact, tipoVisualizacao: 2, style: { margin: 0, width: 120 }, nomeAvaliacao: props.locales?.evaluation }), jsxRuntime.jsx(Rating$1, { nota: props.ratingRelevancia.nota, qtdeAvaliacao: props.ratingRelevancia.qtdeAvaliacao, descricaoAvaliacao: props.ratingRelevancia.description, titulo: props.locales?.relevance, tipoVisualizacao: 2, style: { margin: 0, width: 120 }, nomeAvaliacao: props.locales?.evaluation }), jsxRuntime.jsx(RatingCurtidas, { qtdeCurtidas: props.ratingCurtidas, titulo: props.locales?.likes, tipoBotao: 4, style: { margin: 0, width: 90 }, descricaoCurtida: props.locales?.likesDescription })] }), props.lastUpdated &&
                        jsxRuntime.jsxs("div", { style: { color: '#0645AD', fontSize: 12, fontWeight: 400, marginTop: 8 }, children: [props.lastUpdated, " "] })] })] }));
}

var css_248z$6 = ".cardProblem-module_container__eYX3j {\n    width: 100%;\n    border-radius: 10px;\n    padding-right: 24px;\n    padding-left: 48px;\n    padding-top: 40px;\n    padding-bottom: 24px;\n\n\n    justify-content: flex-start;\n    align-items: flex-start;\n    flex-direction: row;\n    position: relative;\n}\n\n.cardProblem-module_container__eYX3j:hover {\n    box-shadow: 4px 8px 8px rgba(0, 0, 0, 0.2);\n}\n\n.cardProblem-module_contentCard__oBqoN:hover {\n    cursor: pointer;\n}\n\n.cardProblem-module_tagStatusProblem__11NQe {\n    position: absolute;\n    top: 0;\n    right: 0;\n\n    font-size: 12px;\n    font-weight: 500;\n    padding: 8px;\n\n    border-bottom-left-radius: 8px;\n    border-top-right-radius: 5px;\n\n}\n\n.cardProblem-module_checkBox__hhdF6 {\n\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n    height: 100%;\n    padding-top: 17px;\n    padding-left: 16px;\n\n\n    position: absolute;\n    left: 0;\n\n}\n\n.cardProblem-module_contentCard__oBqoN {\n\n    margin-left: 8px;\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    flex-direction: column;\n}\n\n.cardProblem-module_avatarInfoUser__0ppVK {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n    margin-bottom: 24px;\n    \n\n}\n\n.cardProblem-module_infoUser__Zx6rx {\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    flex-direction: column;\n    margin-left: 16px;\n}\n\n.cardProblem-module_tituloCard__JD95u {\n\n    margin-top: 4px;\n    margin-bottom: 8px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n\n    font-weight: 600;\n    font-size: 18px;\n    word-break: break-all;\n}\n\n.cardProblem-module_tagsContainer__IwGeV {\n\n\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-wrap: wrap;\n}\n\n.cardProblem-module_buttonVerMais__qgmLA {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    font-weight: 600;\n\n    margin-bottom: 26px;\n    margin-right: 30px;\n}";
var style$5 = {"container":"cardProblem-module_container__eYX3j","contentCard":"cardProblem-module_contentCard__oBqoN","tagStatusProblem":"cardProblem-module_tagStatusProblem__11NQe","checkBox":"cardProblem-module_checkBox__hhdF6","avatarInfoUser":"cardProblem-module_avatarInfoUser__0ppVK","infoUser":"cardProblem-module_infoUser__Zx6rx","tituloCard":"cardProblem-module_tituloCard__JD95u","tagsContainer":"cardProblem-module_tagsContainer__IwGeV","buttonVerMais":"cardProblem-module_buttonVerMais__qgmLA"};
styleInject(css_248z$6);

const translate = {
    "pt-BR": {
        'notStarted': "Não iniciou",
        'finished': "Finalizado",
        'nextSteps': "Próximos passos",
        'resultsAndLearnings': "Resultados e aprendizados",
        'testsPerformed': "Testes realizados",
        'hypothesesTaised': "Hipóteses levantadas",
        'problemDefined': "Problema definido",
        'problemCreated': "Problema criado",
        'evaluation': 'avaliação',
        'impact': 'Impacto',
        'relevance': 'Relevância',
        'problemApproved': 'Problema aprovado',
        'reviewProblem': 'Revisar problema proposto',
        'waitingApproval': 'Aguardando aprovação',
        'linkedTrail': 'Vinculado à trilha',
        'notLinkedTrail': 'Ainda não está vinculado a uma trilha',
        'verifiedChallenge': 'Desafio verificado',
        'challenge': 'Desafio',
        'viewMore': 'Ver mais',
    },
    'en-US': {
        'notStarted': 'Not started',
        'finished': "Finished",
        'nextSteps': "Next steps",
        'resultsAndLearnings': "Results and learnings",
        'testsPerformed': "Tests performed",
        'hypothesesTaised': "Hypotheses raised",
        'problemDefined': "Problem defined",
        'problemCreated': "Problem created",
        'evaluation': 'evaluation(s)',
        'impact': 'Impact',
        'relevance': 'Relevance',
        'problemApproved': 'Problem approved',
        'reviewProblem': 'Review proposed problem',
        'waitingApproval': 'Waiting for approval',
        'linkedTrail': 'Linked to trail',
        'notLinkedTrail': 'Not yet linked to a trail',
        'verifiedChallenge': 'Verified Challenge',
        'challenge': 'Challenge',
        'viewMore': 'View more',
    },
    "es-ES": {
        'notStarted': "No empezado",
        'finished': "Acabado",
        'nextSteps': "Próximos pasos",
        'resultsAndLearnings': "Resultados y aprendizajes",
        'testsPerformed': "Pruebas completadas",
        'hypothesesTaised': "Hipótesis planteadas",
        'problemDefined': "Problema definido",
        'problemCreated': "Problema creado",
        'evaluation': 'evaluación',
        'impact': 'Impacto',
        'relevance': 'Relevancia',
        'problemApproved': 'Problema aprobado',
        'reviewProblem': 'Revisar el problema propuesto',
        'waitingApproval': 'Aguardando aprobación',
        'linkedTrail': 'Vinculado a sendero',
        'notLinkedTrail': 'Aún no vinculado a un sendero',
        'verifiedChallenge': 'Desafío verificado',
        'challenge': 'Desafío',
        'viewMore': 'Ver más',
    }
};
const isValidLanguage = (lang) => {
    return lang == 'en-US' || lang == 'pt-BR' || lang == "es-ES";
};
/**
 * @param {CardProblemProps} props
 */
function CardProblem(props) {
    const [languageSlected, onChangeLanguage] = React.useState(isValidLanguage(props.language) ? props.language : 'pt-BR');
    React.useEffect(() => {
        onChangeLanguage(isValidLanguage(props.language) ? props.language : 'pt-BR');
    }, [props.language]);
    const [statusName, setStatusName] = React.useState(translate[languageSlected]['notStarted']);
    const [selected, setSelected] = React.useState(props.selected);
    const [statusColor, setStatusColor] = React.useState('#757575');
    React.useEffect(() => {
        switch (props.problemStatus) {
            case 'finalizado':
                setStatusColor("#158214"), setStatusName(translate[languageSlected]['finished']);
                break;
            case 'proxPassos':
                setStatusColor("#222222"), setStatusName(translate[languageSlected]['nextSteps']);
                break;
            case 'resultadosAprendizados':
                setStatusColor("#AD005C"), setStatusName(translate[languageSlected]['resultsAndLearnings']);
                break;
            case 'testesRealizados':
                setStatusColor("#663366"), setStatusName(translate[languageSlected]['testsPerformed']);
                break;
            case 'hipoteseLevantada':
                setStatusColor("#F8B911"), setStatusName(translate[languageSlected]['hypothesesTaised']);
                break;
            case 'problemaDefinido':
                setStatusColor("#252BB1"), setStatusName(translate[languageSlected]['problemDefined']);
                break;
            case 'problemaCriado':
            default:
                setStatusColor("#757575"), setStatusName(translate[languageSlected]['problemCreated']);
                break;
        }
    }, [props.problemStatus, languageSlected]);
    React.useEffect(() => {
        setSelected(props.selected);
    }, [props.selected]);
    // Função para pegar o width da tela
    const [size, setSize] = React.useState([0, 0]);
    React.useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return (jsxRuntime.jsxs("div", { className: style$5.container, style: { border: '1px solid ', borderColor: statusColor, backgroundColor: selected ? '#FF4D0D' : '#FFF', color: selected ? '#FFF' : '#000' }, children: [jsxRuntime.jsx("div", { className: style$5.tagStatusProblem, style: { background: statusColor, color: statusName === translate[languageSlected]['hypothesesTaised'] ? '#222222' : '#FFF' }, children: statusName }), jsxRuntime.jsx("div", { className: style$5.checkBox, onClick: () => {
                    props.handleSelect(props.problemID);
                }, children: selected ? jsxRuntime.jsx(CheckboxChecked, {}) : jsxRuntime.jsx(CheckboxEmpty, {}) }), jsxRuntime.jsxs("div", { className: style$5.contentCard, onClick: () => { props.onClick(props.problemID); }, children: [jsxRuntime.jsxs("div", { className: style$5.avatarInfoUser, children: [jsxRuntime.jsxs("div", { children: [" ", jsxRuntime.jsx(Avatar, { size: '40px', src: props.userAvatar }), " "] }), jsxRuntime.jsxs("div", { className: style$5.infoUser, children: [jsxRuntime.jsx("span", { style: { fontSize: 16, fontWeight: 600 }, children: props.userName }), jsxRuntime.jsx("span", { style: { fontSize: 14, fontWeight: 400 }, children: props.userCargo })] })] }), props.isVerified ?
                        jsxRuntime.jsxs("div", { style: { textAlign: 'center', display: 'flex' }, children: [jsxRuntime.jsx("div", { style: { color: selected ? '#FFF' : '#000', width: '100%', fontWeight: 700 }, children: jsxRuntime.jsx("span", { children: translate[languageSlected]['verifiedChallenge'] }) }), jsxRuntime.jsx(SawBadgeIcon, {})] })
                        :
                            jsxRuntime.jsx("div", { style: { color: selected ? '#FFF' : '#000', width: '100%', fontWeight: 700 }, children: jsxRuntime.jsx("span", { children: translate[languageSlected]['challenge'] }) }), props.cardTitle &&
                        jsxRuntime.jsx("div", { className: style$5.tituloCard, style: { color: selected ? '#FFF' : '#FF4D0D', width: '100%' }, children: jsxRuntime.jsx("span", { children: props.cardTitle }) }), statusName !== translate[languageSlected][6] ?
                        props.trilhaVinculada ?
                            jsxRuntime.jsx(TextIcon, { description: `${translate[languageSlected]['linkedTrail']} ${props.trilhaVinculada}`, svg: jsxRuntime.jsx(WithTrail, {}), style: { fontSize: 12, fontWeight: 400, marginTop: 8 } })
                            :
                                jsxRuntime.jsx(TextIcon, { description: translate[languageSlected]['notLinkedTrail'], svg: jsxRuntime.jsx(WithoutTrail, {}), style: { fontSize: 12, fontWeight: 400, marginTop: 8 } })
                        :
                            jsxRuntime.jsx(jsxRuntime.Fragment, {}), props.lastUpdated &&
                        jsxRuntime.jsxs("div", { style: { color: '#000', fontSize: 12, fontWeight: 400, marginTop: 40 }, children: [props.lastUpdated, " "] }), props.isButtonVerMais &&
                        jsxRuntime.jsx("div", { className: style$5.buttonVerMais, children: jsxRuntime.jsx(Button$3, { variant: 'link', label: translate[languageSlected]['viewMore'], handleClick: () => props.onClick(props.problemID) }) })] })] }));
}

var css_248z$5 = ".cardDefinicaoProblema-module_container__zNoyg {\r\n    width: 282px;\r\n    height: 445px;\r\n\r\n    color: #222222;\r\n    background-color: #FFF;\r\n    border-radius: 10px;\r\n\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    position: relative;\r\n}\r\n\r\n.cardDefinicaoProblema-module_tagStatusProblem__FoQ12 {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    padding: 8px;\r\n\r\n    border-bottom-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n\r\n\r\n}\r\n\r\n\r\n.cardDefinicaoProblema-module_headerContainer__UXFIi {\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    height: 200px;\r\n\r\n}\r\n\r\n.cardDefinicaoProblema-module_headerContainer__UXFIi img {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.cardDefinicaoProblema-module_descriptionContainer__Z7yo8 {\r\n\r\n    padding: 20px;\r\n    height: 197px;\r\n\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: flex-start;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n\r\n}\r\n\r\n.cardDefinicaoProblema-module_footerContainer__6EjXg {\r\n    height: 48px;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    border-top: 1px solid #E8E8E8;\r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 5px;\r\n    padding: 15px;\r\n    gap: 32px;\r\n}\r\n\r\n.cardDefinicaoProblema-module_footerContainerType2__v2sGa {\r\n    position: relative;\r\n}\r\n\r\n.cardDefinicaoProblema-module_footerContainerType2__v2sGa::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    background-color: #E8E8E8;\r\n    width: 1px;\r\n    height: 100%;\r\n    left: 50%;\r\n}\r\n\r\n.cardDefinicaoProblema-module_footerContainer__6EjXg svg {\r\n    max-height: 100% !important;\r\n}\r\n";
var style$4 = {"container":"cardDefinicaoProblema-module_container__zNoyg","tagStatusProblem":"cardDefinicaoProblema-module_tagStatusProblem__FoQ12","headerContainer":"cardDefinicaoProblema-module_headerContainer__UXFIi","descriptionContainer":"cardDefinicaoProblema-module_descriptionContainer__Z7yo8","footerContainer":"cardDefinicaoProblema-module_footerContainer__6EjXg","footerContainerType2":"cardDefinicaoProblema-module_footerContainerType2__v2sGa"};
styleInject(css_248z$5);

/**
 * @param {CardDefinicaoProblemaTranslateProps} props
 */
function CardDefinicaoProblema(props) {
    const [statusName, setStatusName] = React.useState((props.statusTextNaoIniciou ? props.statusTextNaoIniciou : 'Não iniciou'));
    const [statusColor, setStatusColor] = React.useState('#757575');
    React.useEffect(() => {
        switch (props.problemStatus) {
            case 'finalizado':
                setStatusColor("#158214"), setStatusName(props.textStatusFinalizado ? props.textStatusFinalizado : "Finalizado");
                break;
            case 'proxPassos':
                setStatusColor("#222222"), setStatusName(props.textStatusProximosPassos ? props.textStatusProximosPassos : "Próximos passos");
                break;
            case 'resultadosAprendizados':
                setStatusColor("#AD005C"), setStatusName(props.textStatusResultadosAprendizados ? props.textStatusResultadosAprendizados : "Resultados e aprendizados");
                break;
            case 'testesRealizados':
                setStatusColor("#663366"), setStatusName(props.textStatusTestesRealizados ? props.textStatusTestesRealizados : "Testes realizados");
                break;
            case 'hipoteseLevantada':
                setStatusColor("#F8B911"), setStatusName(props.textStatusHipotesesLevantadas ? props.textStatusHipotesesLevantadas : "Hipóteses levantadas");
                break;
            case 'problemaDefinido':
                setStatusColor("#252BB1"), setStatusName(props.textsStatusProblemaDefinido ? props.textsStatusProblemaDefinido : "Problema definido");
                break;
            case 'problemaCriado':
            default:
                setStatusColor("#757575"), setStatusName(props.textStatusProblemaCriado ? props.textStatusProblemaCriado : "Problema criado");
                break;
        }
    }, [props.problemStatus]);
    return (jsxRuntime.jsxs("div", { className: style$4.container, children: [props.typeButton !== 1 &&
                jsxRuntime.jsx("div", { className: style$4.tagStatusProblem, style: { background: statusColor, color: statusName === (props.textHipotesesLevantadas ? props.textHipotesesLevantadas : "Hipóteses Levantadas") ? '#222222' : '#FFF' }, children: statusName }), jsxRuntime.jsx("div", { className: style$4.headerContainer, children: jsxRuntime.jsx("img", { src: 'https://api-motor.s3.amazonaws.com/background-prezi.png' }) }), jsxRuntime.jsxs("div", { className: style$4.descriptionContainer, children: [jsxRuntime.jsxs("span", { style: { fontSize: 16, fontWeight: 500 }, children: [" ", props.cardTitle] }), jsxRuntime.jsxs("span", { style: { fontSize: 16, fontWeight: 400, marginTop: 16 }, children: [" ", props.cardDescription] })] }), jsxRuntime.jsxs("div", { className: `${style$4.footerContainer} ${props.typeButton === 2 && style$4.footerContainerType2}`, children: [props.typeButton === 2 && jsxRuntime.jsx(Button$3, { variant: 'link', label: props.textButtonVisualizar ? props.textButtonVisualizar : "Visualizar", startIcon: jsxRuntime.jsx(OpenedEye, {}), handleClick: () => props.handleToView() }), jsxRuntime.jsx(Button$3, { variant: 'link', label: props.typeButton === 1 ? (props.textButtonDefinirProblema ? props.textButtonDefinirProblema : 'Definir novo problema') : (props.textButtonContinue ? props.textButtonContinue : 'Continuar'), startIcon: props.typeButton === 1 ? jsxRuntime.jsx(AddIcon, {}) : jsxRuntime.jsx(EditIcon, {}), handleClick: () => props.handleClick(props.problemId) })] })] }));
}

var css_248z$4 = ".cardResultConquista-module_container__39blw {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-direction: column;\n    position: relative;\n\n    width: 343px;\n    height: 265px;\n    padding: 24px;\n    border: 1px solid #BDBDBD;\n    border-radius: 8px;\n    font-family: 'work sans';\n    word-wrap: break-word;\n}\n\n.cardResultConquista-module_container__39blw:hover {\n    box-shadow: 0px 0px 20px -7px #BDBDBD;\n}\n\n.cardResultConquista-module_container__39blw:active {\n    box-shadow: 0px 0px 20px -7px #BDBDBD;\n    background-color: #FF4D0D;\n}\n\n.cardResultConquista-module_cardAvatar__mEUL0 {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n}\n\n.cardResultConquista-module_description__rgSn5 {\n    max-height: 100px !important;\n    width: 300px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-line-clamp: 4; /** número de linhas que você quer exibir */\n    -webkit-box-orient: vertical;\n    word-wrap: break-word;\n}\n\n.cardResultConquista-module_verMais__8mtfe {\n    position:absolute;\n    color: #0645AD;\n    font-weight: 700;\n    right: 0;\n    bottom: 0;\n    margin-right: 20px;\n    margin-bottom: 12px;\n}";
var style$3 = {"container":"cardResultConquista-module_container__39blw","cardAvatar":"cardResultConquista-module_cardAvatar__mEUL0","description":"cardResultConquista-module_description__rgSn5","verMais":"cardResultConquista-module_verMais__8mtfe"};
styleInject(css_248z$4);

var Conquista = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAxCAYAAACYq/ofAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAdKSURBVHgB7VrNThtXFD7njm0idRHnCTI8QZxdF00YngDyBMCiFaBKgWWgEUYJidRNiNQCUheYJwh5AgzpojvME9Q8QSaLSomx7+137p1x7MnYzGCMqNRPgvF47s859/yfMVNGLD/e2jbMD+imoent7oe1w8uGKcoIYYKJKmyIb+yPKGAy5Sz0FSgjsOgk2DncOVlfoBvASlAtt0zpo8nISGaJ3DS269VQrsycTSJLU6+ORIR0W8G8sTz1amPoGEPHBXelJhtzMHAc89RNM+tUy9JWB23HAwcyz8mlgJHnsCpfa11XnrefOpYok3ivE59poqxAnDgYEOunjblg86RoaEaTCZPG7pMx7zE9TE4CszMQzSRdAaK+u8dr03nmKNJle4SQRpIexXQfkgomSJXBhA9DPy7AvTUxYY4KhSYmiSwP4bdryYURRw7BzX3KieVgax5rBouPtub3PqzXss7TbV2GhpBSavu3+rN677OlR69mWVHwhXRYJOsMQoWRTeqegPCR7u6iU8mvYoatobLijTzTmD27lxCb8tiXf15Ms+EGpKIb9qbD8jDkAfroJEepzwbBSkPmsNmEkvg/PXq5knUuImJFrt/RRTPlmQ+KQ2q7e8/jsFDCwBaV7EScegOMTKWuLJKD6i1+X/X3/qo2BxEg3uZz26vgRCsQ41NxjTvH61XYyVQBUoFaYJlO406h04hjxQBUhNi0MTbLMHQGtQvkvkBfGioa2LAu1pgzWUCI+XZdJzkulippxItBw99/lGgM3T6CDr/Bo7JWrXm3eWdT5Crfy3MZJ+OXp7ZSPSXouYt/Z2l7uVBgLM1Cu/DgIjs8A1SnYhTX5bbVKc4mFyh1Raz95DNZqM1mFR/t6RlNq5p5cud47d5e3Ulvr/68LvfEhYdQNZvmwLWEmi82KQUxscnvW+RoE1rtmCjGWEa00sguYf0dS2QTg+bSiMXlHKcQpG38R329AeLFxTZZmY1OZIhJaOqE4gAkCBtuTceM9mLxhxeBJda4g+2D4ac2gEdOCep12GVETksiKL6diQwzWApezH67iDmED0+3IbvOs6ZjhkMEqqPFoOr3Phe1UMYcGUtPOhMCa18yxmv1SSRyHhWjzWZ8GLFrVl8nmwNhoN0xZZcWqP0kIe6EuLwYuBMbxAxU662M61CxTyqRVMuwxfeDmCBH1Qz+N3rHLAav/Zh45dmvfMtQd0qEnfp6TRgQzxIZZsim1HeqE16rThJ8tJqlIYjdo7jOxcdbSPq2TiUgRo+beogbF4LlQI3W3dzvx2Cr8lWSnYUoNjV6A2xfGg/9X7CexXj7GhNYBpjiaez/5USxWAND5mgIxD1KAIVnOlXMVazISvE+PNvfdtMhlSYCc2DX8NpW95ewd9FwlwkF2uSz5taT/nk9ELVAIjbNVvyOGajT+4JSb4QIMcJIWkPVy1aSNm+jcxA9/fvxWkWu7B6L/vvpLp5cJoDYQ23PtyUG9sb9GbziE2ECI8ryOama3xRW4n0iZiAN9c4YUxd3ae8lPhjPpRzRNYmYQK3Nws7JWhAbo1zhficj19v8h4p+cu7XTIAe2L3AtKxjjD6MpSK0CY3JuakVYuxKJdKLSkAqG1oMyzHkW0agx4OkUuLW5KAEUWxRGEpLPeK8zALeU1QJOdpcLBXxdGlMRPQMh8te7Qa+9f1gCC5YagTrzye49fCSVCMTxBaEYGRB24gRn+JiLt7zssz5UkaohyE2vIKF+wxVNt49WVulESCeSrwSOWm7LBt2oo2pZU39MzMSYzn4FQGpvcIuMPryHXR4fvfklwO6AqJuySnFTKDklmidrEEuQ25GevFz8DrAqUlyWLkqMy5p5HkN+9urZy+8khiJEUF0oqIWFTBV3TtZ38w674spvbOJHwwbTqBKI2BkRrpE6dI2u0DZ0J3O6t6fz+uDxkcORCSJwGZWR5FEjGthJEbSw+HaiGocQRme6H7UVnLGjFplaM6VA9fKSAzLkOZ5SsmU4eUOPMW1vMZ8GcbCSAxUgOhlmLcanRCl9TZizwMb3ceAm+j9hpLDkVW1bA3pq+Amm9ghEf/3GIGduCoPPSe3k+ufSReGxoCxMRL1yWzPSa5aSmnZsFgMaAwYn2oxzUqVGHunyE7CtMbGdWBsjES5WP+7P3gwiSMDi6oRMBZG4gJJserLvUrqYluuLV3M3DrNimuJI0uPX86hKhcic5/0sP5WHozMiPS/UPa+s3U2oSzOTYHYjCmj4/hwFGYyv9UdSIfx3siporgK6ApAUVVThk6VU7crq1xuiUgnBYXPLGbeRU0vDeXZqEfboCtD2rA26jvngO6LVhe1PBLKJRHXKGOpPSQ2fIpO4RyE3MN1mkYCf+qugVdraA6Km86cl+VipKhJJEG2qz5GLAev0R8w+5e9i+nFrf3BQF78z8htQy4bQSYbyk925CdPFL2dGgfQppXmHN25k32PXIzgtUINTQa86OSnNEawJJesV/N0MP8F5hSqQY4bC0cAAAAASUVORK5CYII=";

var ConquistaPressed = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAxCAYAAACYq/ofAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQRSURBVHgB7VrhldMwDFZ5/L9uQG4CwgQXJuCY4MIEdIMrE1yZ4MoElAmSmyC9CRImSJlAWI1EXJ/tOG2S9t7je8+YxpIsWbLsKDeDQCDiSnXvYXp8n81mmy6iNxAOMiJWbTZhS1SbQwDeQjiuVduo1fkCE0BFABlQQ6AhfTwyKdSC7fi/QYaQ5RmG4xEmRA+9cgmtSrUfHpk30MTrZODQIuSqPXlI7+gfMuS3ahEzuFY8zL3DQuakBBM5aD6r9km1nbnZieEXDViYiOEajgCFr4r5j9APYsiTRZ930Ga0aE+jJllynEXcp2BXZqNaAT1B8nxyPXwJ8yWWsVsei7lfUtaqeHxu9CZ2cFyI3Rt9KObavCYig2ZLhmy1wR2447HyjFnBXohU+0a9+r3owR5r85qI4NDA/R6pNEYy6gbsqFi5SMV75aCRbBNz+6rak6Kn8CW596oHnmernRUuQ3YOGrplPEObSbcyeYHNebLimJtbFJR4vLUpz/y1kd/pd8Q0iWPcmilZXu6YC1nX7GDf8sNa20SpR8DCMTEZWgqNGOCgkwRQeuj2ylqeC+/tCxpsM8SChWcO4ZVqzpsoNpmv5EWJO2h8RiQe7xfMKwYlJkHGLfUI2XsOPDCMiYyxeZcRTLdgHUz+f6lc5NiYU80rmUORW+squBWJLWO1LWQMGpq/MJ7pnvSfTZoBiW3leEVDFJE9R/T3HA4pjxUB4blfUO1ZrOkjuhXQIaQ2GGpDaBYQXpk2MWHLfcmGlB7eVA8r9q6p08ECuwTFBuNaUyJBz9VBkyFpNhc6TQnB3MFbCh+2rxi55hVnInEZI0wptpsLNeGuzCbhlzrGRVbsGENtIWR+3SthRmhCI03p0mKQ1StsSOedDO2HbqkZsMQmuWSaVyI4FobyYtBK+z3Iuwq2me6Bjcj0OWEosAFbfIkHOBHYplbxhngghbGAzf5Z42GI3cGRwPaQFCNW2HFODQ5sMktxijGK75H5UzgneEXFmOCXJ2xvzIQlXAJYKTlvCuy+wqQcRvVQnpjBgGClyCsRNC9i9MLzzMOU3fSiARUVUt9L2tnBK56jHWucejOfClZ8xel1g5471qmYova74/ChNlqhb8oi9rHlpCCMZgi2lzspN1X8PIIRMKZHIu6lnJNzn8BrAmen2nhG50YGrwl8f3o0ni05k52jut8f6CjVYFsbW8Ilgi6M+LKKGIpyiARw8hUFm/rXT2iuHDn0B92aKdQ+nPW6gq5CWTi/VG5WcAL6fJ6WiRPVkReuoP1itMXTPpRSir5TMq74N30OXPfxUK/Q4kOu4In/wHigW3KlDDnqU18nJH3CyECjSBeCi/2Dgb74b8iloW/W2l8AOVXuYDzc6PMNDjwsMoyJgy8AIfgLzvDwyz8YuYEAAAAASUVORK5CYII=";

var Aprendizado = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAzsSURBVHgB7VkJdFRFFq2q/393VkCWCIqiCIqAgIhEIEsHOLiguIYZQRkYkKSzKAxrulmakHRAGGUI6YY4iMg4eoggc9RBQKCTAK7I6AgyEQVhZAkgCNl6+VVzq5OO2QlgPGc8vnOS/3+t79V79d59rwn5jX59RBOiFvVNvX9+q0CDzWZjpIWIkqug1Mj5rXSj9hCh9HFByEFnvtXybEzGYB9lu4Ugy5wFlqkJMZnjVEKtgtCvORVbMe4TxkVbn897riI89PN1W2eUkqsg9XIGTzG92KZClD/EOOkNptvrVMSjOVz24SS2yafiDdnn0yoWMSHy5LdGqcIJ6UyIuBVqGOlfiFGiGQxEc3vdSbH2Vw3UM3OZy3aeXAE1SwOT77KFKGFBCxnhCTjB0Fqdghbgf6ZyPDQ/+9Cz7obmp96/3KiXl90tBH+UCdJDMHGUCqWtIHwwqRTubcrFakHV0wZmPLDMNbXZwjRLgKSYzJU48QS8nsOETTCP3Zgp7ToXm3/lyLf2JFdAyUMzugiuuIgQN9VoPofvbYJ705y7bN9eao0GBZhisrVx64YZhInhlNAINN2EvyPMpwxZsXvW8WoGYu07oJE4yokVZlKGsRSnut1ZaP0iMCYlZuHNOlUXUCI6CC4uUibWOfLnvF29Rpw9UujsCUJ4EKZ3I1TcTQRph65yIcQkZ4H17+RyBEgy2ToSYvgQi3RBp08QUQEzCYEwEx0u6ys1x5qjMxIpY876y4qF0Mo8P4Mx9gcEJe/W6iUk25lveZY0QPE9bYb2HQyzsfcCfJbiAg3MLrQcII1QPfcmhOF5yTy8xuYynd7m9gR3ERrtXpf5qulfVTF0BIJasKkVR4J7QGcmD0nvJftyCiybBaMDcG9vRx8uPS3GuFRzdObIhhjKO2DzQLh0jFuIz1AfE2mkCarlhVKHLh6o6/pDeP1RL3E/sWavrayq64eGJlPK+kH10LpY6yiwZsm2JNPiU4ToEznVygNn4tyZtrfq/WBSNPhiSh6O7g/4frcRvkiF79ySYLXNLCLYUHIpAWSgObXTsAzMp1a1v5n7E/ONE+N3wOh9XkbfCDQ5XLNW47G6sSlliv4O7HE7tFBUtw82T1NMmY8Iwmbgsz80axBUdEqKsWcpzJ2T7Vrw37pz/HcgKTbrBUyfitfvcKw2A3Fvkn7ZHJsRLxSyZ+WOOd83xIwN7rU43Hidw5V2iPwMhP1w2dm8qs8TYO8ChLqVUsknPeRW9OGrd8z5rpYAyXGLegmdf4Ehpz1CH/TXgrmHZUeKKWMAF+wTXMC1TpdlPGlhSopZeDvC4H6Y1klO9DErXXNdsn3ycNuNBq/hL/Byj0j3jegeVXMe41x/QPp0qMsRYN7foarFkA/BlnYnvwCpBq0UfHxIdW4OMC8p933b0RX5lkfB31FoYog5Lv2uWvPgQrpJBSlcfFSzw+fT20IABYbpC7Q93WdJaHjbEOpwJZc0xYwEcnqZcSU23QaPsqahMWOBo177yHYRewj5vfz92UfxGNzYmogweXDn0whX10822SJzXbYzsp1RkJ9hhWqBwRI6CE4y5DtMaEBytP1lc4x9Rfg1niOEny+S/aQJoheC24CrR8HanIaQqBSwdZDxBO7eIXNUVlfSDDrd4V+zqGCrwGxXlWtjA+0MJ+yPrECIt8hnssn+oBpqOAy5pJ8+Je+PYGQCxExGWzDeN67aO7+8qc2W7559FLM+xdSuJ12GB+r2Z29ecIERmo/XrkQR25MHZ3Qhl6C8vDxdqGKjfMfh9P9JAMr8k6Eivyq5TjuitTU+N3Cv1ocI3gMzHpdBiBGlh9NlTaFVam+KGKvUIO7QSwlDMgbU7W9P3aOkg6ASpmjs+abWSu223JgcnfEw0cVE/5qEVh8gBZytkJDBG94uIvedBL/vXx+/XhmdN1onV0lYezEeM3EAZTigTdjuPaHT045dae/Jfj/mEto3YEirMHh6vLzNdrzuGlMHvXC921DxDl77VTcK8ZmBeYdJVy/t0ytkOC37sVOg/1LMJ8Qs7I47cQFwILWJYfJ2earejIAmY7DPqzCZzUkxi2+XzZUM0H/gNTzIrfRuaBG3Vi7BXD9AlUK40nFY7EOs19+ja7myX4X0b6BzkurzyehpIs0goM/b4J/CcbL9G+oHIOwGTPUSHEEs9P09FfoYwVgE4aKfxEoRrLzaXQvOfdLehE6C6q6TEJXeF8zG4PWQXtJ+WO7eBG/iYNsWphk+hvuJTxq6aLDq5XyexuiTsMdOpJnEFPa7SknIlw2PMD6MS2yCBg5y5nvKsXNeAAu9WXck0GxfeaGoqp6otw/RVBwu/AbNk8zLtpV7bMWJMZnZcJ9L4XhGq6Ss/RkRdvYcFumeaprfuS7ewOBpYGQiNOXDie/BgogL9Ck8z+jMu7Yh9gEt/pw4OHPL2fPeIokuSSOUGJ0xEGZxN16/vJa699Xtd+5K25sQbe9dEqzWhg+cvUUVsYhzEVWJhWKysuEuUpBwbDhz1jum5qbIxtZCjeNqLgBhEYDISASpQnIVlBRnf4zoJA8cpSLJccg2c6w9Ez5u2OHjYbGbG0lRJz+4KkS9eBbZmgj3BxklVKQD9X1DGX0cycSBRFPm7wNlEcDk8caIoBAos6OETmgqkVKHerX/kGYSMrd5uPQfPT1iSa182rHTsjGCeUIDzFdRJ5hm5M3Xl2ySFuEXNMb+GObvktYgv68rOSEPWFqC5hcge7PltG4k0WjYCuZuYYK+Dihw1hyb+YEZ+XBFcflaj4cmOPLTHBD0b5gSXqr4HmuI2ZqR12SyqeZo+xRozEYZuSX4bGm9+GFz2SpqfnuCPNOh8f14vc/HjUfhiiVG2iBxEJKi1nLM2WAhkYA8jOLqzXK3WE+AwXtRHRiOXdZAkB9h9/fAF07GMx4LyKQelsZkFQKOQ9QDeYjiU4p3aPtxYhtges6ewvAZGH8RNodCBDc3J8dYvcX2A9PYCHiwdbQyYkq0sB2eflSOyzJfjvGWG27Eow3+vq1XF8optGIw2Y49aUpUVnf4bZlebsJSBtmvC+VThfq+p4zvqTsXZROolt2KE+tRI93ep6hKYvYOy8ekmbRi26zjCdGLNiiEPw1EsApmPEW2O+gcfz+8Ty9oSSZAXzVa2PILv8ufNRUhMd8nKB2SZMqIcrhm7iL+Wk59krY8fcSStW63tz9y2VZc50WrCuZ+Ta6AVKIHC8kFpfWCKlLZUdIWkWu/3ay6kDkucwzl9DWYwr/h40c6CqYdI5dBEr1qRrWDrpBrOw7zfYp7ws1Rs68htFUfZ6Elv6E5yXHpvQRXEWfEYQMN6R8odkn44RHaMQn1UdG7rlmlxXLh3RhCjK9DKU8iuH9ijrKnBelBb7z4wZ/qodL4+Hil7am+Q1SqRMIM7wREjMRB3ixkzEL/qR0GCfLmEiUsVZZOkmIzRsk6kbzsGDASCdZGzrV3c3bO3p8Um7ke00Z7ePkszPFXJzxEm462MBzm6mX5tvPNEuAVeAqUByfoZRehTjYWQeTlCqXCIV0jsMBRuF+YKm0FRm8gxaQrzLO1IFUOhxIJFg/Lcgq+DupMvCabmRK0VuhuEVzi+8A/jIlB+D+cMWU4o5wjHqzXKV+CutDHVBX+CA7s9RQMe4YMopyxSrRLLpOS4zKHcc7G4wpJN9pEYiNegWArqaocaz+k/KQ0m6bWtZlsQaeoIZJxei8YnICmjjIbxD1YAC3uxKFMALdjJXIVVE9xuuasvCIBqtmDl3rOtLSXh1S0l2BT1fULBqYdc1OvBSF+KgYUKcfD+jRW8G2Kpo+YHlrqafsMtkjDQUXU6EL5kiTm5FvWBRqu6veBxgjqL8DC0YTTeY7CtIXkCslvMoyuw2EhZxAv+Dh9K7fQWgv0tcgvJ3B9f4SOSlDrmPlcZOa15AoJSHWQ/ylIunTRdZmX1CICyEIXLrW00TCPkY8nV0DQYjRO3gxTLCdM29rYuBYxIUmAwT0VRiSmKfKVtOsdwPMpw9Pv4B51EtzlW7z82O7cvbnemvPGDbS3CwshzyBHTAN3rSjlU3Ncc5aRX1oASQBiyB/IPZpX9Fm+x+pPfpJMWUvhXaZVDUHuQQ8Cxp+QtgA7R6qJ3wiAc8BYKRdiFn4fyGlqj8v6jexyCe7vn3B/g7walS7XLwDKmCG4mHijX8O4b8SgzrTakP3niYgrHFTwpc4alcLGqEUFAOBzyaIS2KquZyL9Pe/HMYLb1JDwDRUXS7oYGe2sC/xOo/MjHUb4jl0qZtSkFhUgx2XdnRybdVGakYwbzwyzRwgvM1SWldgN2Zv9MaKI1Cy177m8PVrsB2hJfkRLyW5oIDw5JqvU4KMn0VRl/+JO8jNQi2pAEhKkNYDi9yE4XIQw3wI0fY7z/1wheh75f6FJ+KVSwmDyG/0K6X+CcXNfKIoj9wAAAABJRU5ErkJggg==";

var AprendizadoPressed = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAarSURBVHgB7Zl5bFVFFMan7IIoUBYFFEFaUYSEJQKymAjEskQFZZFNCCSiIi4oqwoJIQQQFVkExYBG/0BFXBBFjSggyuISUUFBsVColaUqWqAsx+8w3/VNb+97775X24rpSX65754zc2a5s5yZZ0yZlEnpiohcDsaDnny/EvwB7uV7G7AcPABagyqgLqhuSkNQcEOQAW4Ha8BxsfKFY/8UDOL7I1JQDoI/QS7YrH5MSYj2MPhcCsteMAO0iJKvEriODdnGBu8E+x0fk0GqKS6B84ks6AzYAZaCV6lbm6CvFOf3teAvpyHHwIdgOKhqkhUthD0+GzzPih8F/b0K4FmOjVHpwvHdFlTw+TofDGMnjNTx77OrbgvYzqHlyTegsUlGkHGFFJYJAemmBaTbBzo4aW7z2Y+AITHK1q+yhmlzQA2TYOUnMfP3YCjoBvoFOYKuK9PqhHwPvO28pzLNBWAcuAs8JZFJ3zxOPVYy3RMmgcrr8vYDyAdNQqQfzELmO7q54DToGCXPeOZZEMe3Ls9n55wJWXkdi7/R+Sch8yxn+s4+fd0YeWqL3SdWRbGni517a+n7BLjexKnIGLZWP+8Kr/fZC+Vi5EvjGE8xCQjSVwcVA/RDJLIqaX1OSkSe1eEY5KwB+IWV7+/orxK7rM0xJSAopz7njg6/haApuAT0BXvYiGVBGUfRuNinb0xnH5kSEJTTHpwC0wNsdcAhdmgtv3EhG9DTp2/GBmwySQjyjQBtE8xTNYbtHdbzM1DJNSylIcOXYTb1meBWsZvYa2J34IpxKtKUeddHsVcG68AiUN6Ea9zF4H36HeAa5lA5iu/prKg3kfyyVSsQp7AqzrhtHmCvxI5R+UBChg1I19s/3HWFEf5O57Mf6AN2g9ZgIFgC5oHBoGNKSsqJWAXBfhwPbywvRoEX+ez5eLQDX4OuYLyJX/l6eLTkaxXXoNu1rrX1+a6bmcY21UwRBPkrgI/ZYz+BO8Blrl+JLBQaXqRG8VMezJKCQd8rbgKt/K/iC8LiVE5XhTfFWXajpBsaMAR/Bw2dNC9SH23nfo72w+AZsUu+yjQvgTcxVpjwDchgnmVR7DXFzi2NYHUePSh2sdjIhtdx0s6nr74BfnQj1aVTD0GNqGvBL6Ydn+YdAc8eMkz4Bswq0AuF7Q/Rrg24M44vL/LsFGDrRNtLPv0C6mfoSzWQDfIkYDWgk6fZUwPAjWLHo27zl0apVKrY8KShiV15XRrzOSyqBdgvFBujNfDpr+CXXecp3vinRYWdeEuqXyaYIopEzgqzHd1NYHKcfNownRO5niKdY0plidtisSuFns5ulsiE05glkUnfBzweoNcNrbs4+wp+r2YZ0x1dPfAY6MF3XeH04HTSddaJSvE+j9jdeCC4G/RiOu+0Fuo2Aelasbd0yMW9SuHwyGUZX7JBx7zOZZqqYmOjw/7MtVjpXVJYsphmJN9nBhSuq5NuXKPFHnbmiZ3IKlNNSOGI2OqUrauQ3nzUo13DeA38NkdzoJ/oGrGH8ZnsvWza2tHpPQH55gY0XCf8VElgyDmdIfziNX22G2hbGegUW/0pPLYQzXALHk3wbAKbXkZp2LE7IOsU8C5oD/TwsQesQp5sk7h4YXMm8uf6bN35XG3CiERu1/TQXtEkIWKvYar7dLVjpO/CMjf69Do6smhrZEIWXgN8y0yv8wvESl+ZQ1BvIjRk1hhe4yGdzMOZZqzYM3g7vuuwmABaOn62s8xJjm4YdetNIiI2EPuOmXUCbQDTxR5cdGLfD54EqySyJLuiK9sB0Jv+MvhF0/i+yUmrV4+6EeqhSnfqbkyj54wcpulqEhV+Pr3H3CHxRRuod0y92fh4Z4hGYAq/lid7xO4/GltpBPAz9bO8fAndJjiFaWXagKtBfaqPgv1gLNCbuZcx+QaYJAT+W+ExEWi0ewYcAt5VjV50jYNvMcUh7C2vp0aaIgjyP0o/eRyaXUxJCArqIXbv+BGcZ5IUiVxz3mdKWlDoWyx8kElCxN4J5XDyNzMlLSi0MxugIYH7n4Bet2twlxojbwexy65KzMvdpCZxWEHhu/DQzSYNky6TOg3ZNVzWg7/+ObINaJylG2RToAebDqybnvjGIG+eKQ0RGwKrjHZ0i6g7LdFF/9wYJSHuXBMKsJKQDWCcsb3q3eV4vTkC7AO6kenJTeOvA2Abevwr818QsRdYet7OcnQPs5fHmnNBxP7lKlyVNETw/gd7wZwLIoX/RzvIxvQy/4IU6yqkIjbs0KvKvWAnxvcRUyb/I/kbRnsk1w8leQsAAAAASUVORK5CYII=";

/**
 * @param {CardResultConquistaProps} props
 */
function CardResultConquista(props) {
    const [isPressed, setIsPressed] = React.useState(false);
    React.useEffect(() => {
        const timer = setTimeout(() => setIsPressed(false), 1000);
        return () => clearTimeout(timer);
    }, [isPressed]);
    const [btnViewMore, setBtnViewMore] = React.useState('');
    React.useEffect(() => {
        setBtnViewMore(props.textMoreDetails);
    }, [props.textMoreDetails]);
    return (jsxRuntime.jsxs("div", { className: style$3.container, style: { ...props.style, cursor: 'pointer', backgroundColor: isPressed ? '#FF4D0D' : '#FFF' }, onClick: () => {
            props.onClick(props.problemId);
            setIsPressed(true);
        }, children: [jsxRuntime.jsxs("div", { className: style$3.cardAvatar, children: [jsxRuntime.jsx(Avatar, { size: '50px', src: props.userAvatar }), jsxRuntime.jsx("span", { children: "\u00A0\u00A0" }), props.statusCard === 1 ?
                        isPressed ?
                            jsxRuntime.jsx("img", { src: ConquistaPressed, alt: "Icone de conquista" })
                            :
                                jsxRuntime.jsx("img", { src: Conquista, alt: "Icone de conquista" })
                        :
                            isPressed ?
                                jsxRuntime.jsx("img", { src: AprendizadoPressed, alt: "Icone de aprendizado" })
                                :
                                    jsxRuntime.jsx("img", { src: Aprendizado, alt: "Icone de aprendizado" })] }), jsxRuntime.jsx("span", { style: { color: isPressed ? '#FFF' : '#222', fontWeight: 600, fontSize: 16, marginTop: 12 }, children: props.userName }), jsxRuntime.jsx("span", { style: { color: isPressed ? '#FFF' : '#222', fontWeight: 400, fontSize: 12, marginTop: 4 }, children: props.userArea }), jsxRuntime.jsx("div", { className: style$3.description, style: { color: isPressed ? '#FFD600' : '#FF4D0D', fontWeight: 500, fontSize: 16, textAlign: 'center', marginTop: 12 }, children: props.description }), jsxRuntime.jsx("div", { className: style$3.verMais, children: btnViewMore ? btnViewMore : "Mais detalhes" })] }));
}

const WrapperCard$7 = styled__default["default"].div `
    width: 343px;
    min-height: 136px;
    background-color: ${({ theme }) => theme.colors.neutralsGrey4};
    border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
    border-radius: 8px;

    &:hover { 
        background-color: ${({ theme }) => theme.colors.shadeWhite};
    }
`;
const WrapperTitle = styled__default["default"].div `
    margin-top: 26px;
    margin-left: 26px;
    display: flex;
    align-items: center;
`;
const TitleCard$1 = styled__default["default"].p `
    ${({ theme }) => theme.fonts.textMessageComponentsBodyBold};
`;
const WrapperButton$2 = styled__default["default"].div `
    margin-top: 26px;
    margin-left: 26px;
    display: flex;
    align-items: center;
    ${({ theme }) => theme.fonts.textMessageComponentsBodyBold};
    color: ${({ theme }) => theme.colors.linkOnfocus} !important;
`;

function ExclusiveClassCard({ titleClass, labelButton, className, handleClick }) {
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsxs(WrapperCard$7, { children: [jsxRuntime.jsxs(WrapperTitle, { children: [jsxRuntime.jsx(PeopleIcon, {}), jsxRuntime.jsx(TitleCard$1, { style: { marginLeft: '14.67px' }, children: titleClass })] }), jsxRuntime.jsx(WrapperButton$2, { style: { display: 'flex', justifyContent: 'end', marginRight: '26px' }, children: jsxRuntime.jsx(Button$3, { label: labelButton, startIcon: jsxRuntime.jsx(EditIcon, {}), variant: "link", handleClick: handleClick }) })] }) }));
}

function ConquistaCarrossel({ onSelected, objectCards, marginsArrowButton, sizeArrowButton, horizontalMarginInternScroll, positionArrowButton, marginTopArrrowButton, textMoreDetails }) {
    React.useState(-1);
    const [btnViewMore, setBtnViewMore] = React.useState('');
    React.useEffect(() => {
        setBtnViewMore(textMoreDetails);
    }, [textMoreDetails]);
    function renderCard(item, index) {
        return (jsxRuntime.jsx(CardResultConquista, { textMoreDetails: btnViewMore ? btnViewMore : 'Mais detalhes', description: item.description, problemId: item.problemId, statusCard: item.statusCard, userArea: item.userArea, userName: item.userName, userAvatar: item.userAvatar, onClick: () => onSelected(item.problemId), style: { marginRight: '24px', whiteSpace: 'pre-wrap' } }, index));
    }
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsx(ScrollContainer, { stepMove: 380, isVisibleControlsButtons: true, sizeArrowButton: sizeArrowButton, marginsArrowButton: marginsArrowButton, horizontalMarginInternScroll: horizontalMarginInternScroll, positionArrowButton: positionArrowButton ? positionArrowButton : '', marginTopArrrowButton: marginTopArrrowButton ? marginTopArrrowButton : '20px', children: objectCards.map(renderCard) }) }));
}

styled__default["default"].div `
  width: 100%;
  width: 1280px;
  height: 587px;
  background: #F2F2F2;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProgressContainer$1 = styled__default["default"].div `
  position: relative;
  padding-left: 75px;
`;
const Progress$1 = styled__default["default"].ul `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
  align-items: flex-start;
`;
const ProgressItem = styled__default["default"].li `
  width: 100%;
  min-height: 78px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  counter-increment: list;

  ${({ active }) => active === true && `
    padding-bottom: 50px;

    @media (max-width: 768px) {
      padding-bottom: 50px;
    }
  `}

  &:first-child {
    &::before {
      top: 10px;
    }
  }

  &:last-child {
    min-height: 46px;

    &::before {
      top: -30px;
      display: none;
    }
  }

  &:before {
    content: "";
    position: absolute;
    left: -79px;
    top: 2px;
    height: 100%;
    background-color: #6A3F86;
    width: 14px;
    z-index: 0;
  }

  &:after {
    content: counter(list);
    position: absolute;
    z-index: 1;
    left: -95px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: transparent;
    color: ${({ active }) => active === true ? '#FFFFFF' : '#757575'};;
    text-align: center;
    border: 3.5px solid #9C9C9C;
    background-color: #fff;
    top: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;

    ${({ active }) => active === true && `
      background-color: #FF4D0D;
      border-color: #FF4D0D;
      -webkit-box-shadow: 0px 0px 0px 15px rgba(255,77,13,0.5); 
      box-shadow: 0px 0px 0px 15px rgba(255,77,13,0.5);
    `}
  }
`;
const ProgressItemTitle = styled__default["default"].p `
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: #757575;

  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ active }) => active === true && `
    color: #222222;
    height: auto;
    margin: 11px 0 8px 0;
    font-weight: 600;
  `}
`;
const ProgressItemSubtitle = styled__default["default"].p `
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #222222;

  ${({ active }) => active === true && `
    margin-bottom: 24px;
  `}
`;

function Stepper({ children, }) {
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx(ProgressContainer$1, { children: jsxRuntime.jsx(Progress$1, { children: children && children }) }) }));
}

function StepperItem({ title, subtitle, buttonText, active = false, onClick }) {
    return (jsxRuntime.jsx(ProgressItem, { active: active, children: active
            ?
                jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(ProgressItemTitle, { active: active, children: title }), jsxRuntime.jsx(ProgressItemSubtitle, { active: active, children: subtitle }), jsxRuntime.jsx(Button$3, { handleClick: onClick, label: buttonText || 'Agendar reunião', variant: "primary" })] })
            :
                jsxRuntime.jsx(ProgressItemTitle, { children: title }) }));
}

const WrapperCard$6 = styled__default["default"].div `
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: #FFF;
    border-radius: 8px;
    border: 1px solid #BDBDBD;
    overflow: hidden;
`;
const WrapperTopic = styled__default["default"].div `
    min-width: 49px;
    display: flex;
    justify-content: center;
    align-items: center;

    background: #FF4D0D;
    color: #FFF;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    border-right: 1px solid #BDBDBD;

`;
const WrapperDescription = styled__default["default"].div `
    padding: 16px;
    color: #222222;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
`;

function ObjectiveStep({ description, number }) {
    return (jsxRuntime.jsxs(WrapperCard$6, { children: [jsxRuntime.jsx(WrapperTopic, { children: number }), jsxRuntime.jsx(WrapperDescription, { children: description })] }));
}

const Wrapper$4 = styled__default["default"].div `
    display: flex;
    flex-direction: column;
    max-width:  ${({ mobileVersion }) => mobileVersion ? '343px' : '400px'};
`;
const Title$5 = styled__default["default"].p `
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;

    display: flex;
    align-items: ${({ mobileVersion }) => mobileVersion ? 'start' : 'center'};
    letter-spacing: 0.01em;
    color:  #222;
`;
const AvatarImg = styled__default["default"].img `
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
`;
const WrapperSpecialist = styled__default["default"].div `
    display: flex;
    margin-top: ${({ mobileVersion }) => mobileVersion ? '32px' : '48px'};
    flex-direction:${({ mobileVersion }) => mobileVersion ? 'column' : 'row'};
    align-items: ${({ mobileVersion }) => mobileVersion ? 'center' : 'start'};
`;
const TextSpecialist = styled__default["default"].div `
    margin-left: ${({ mobileVersion }) => mobileVersion ? '0px' : '24px'};
`;
const Phone = styled__default["default"].p `        
        font-family: 'Work Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        display: flex;
        align-items: center;
        justify-content:${({ mobileVersion }) => mobileVersion ? 'center' : 'start'};
        text-align: center;
        letter-spacing: 0.25px;

        color: #222222;
        margin-bottom: 8px;
    `;
const Email = styled__default["default"].p `
        font-family: 'Work Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        
        display: flex;
        align-items: center;
        text-align: start;
        justify-content:${({ mobileVersion }) => mobileVersion ? 'center' : 'start'};
        
        letter-spacing: 0.25px;

        color: #222222;
        margin-bottom: 8px;
    `;
const Name = styled__default["default"].p `
        font-family: 'Work Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 23px;
        display: flex;
        align-items: center;
        justify-content:${({ mobileVersion }) => mobileVersion ? 'center' : 'start'};
        text-align: center;
        letter-spacing: 0.25px;
        color:  #222;
        margin-bottom: 8px;
        margin-top:${({ mobileVersion }) => mobileVersion ? '24px' : '0px'};
    `;
const WrapperButtons = styled__default["default"].div `
    display:flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 45px;
    gap: 16px;
`;

function SpecialistContact({ title, avatar, name, email, telephone, mobileVersion, handleActionConversation, textButtonConversation, handleActionSendEmail, textButtonSendEmail }) {
    const src = 'https://i.gyazo.com/499dda909b1ebfe0375d1efa2d5d00a8.png';
    return (jsxRuntime.jsxs(Wrapper$4, { mobileVersion: mobileVersion, children: [jsxRuntime.jsx(Title$5, { mobileVersion: mobileVersion, children: title }), jsxRuntime.jsxs(WrapperSpecialist, { mobileVersion: mobileVersion, children: [jsxRuntime.jsx(AvatarImg, { src: avatar ? avatar : src }), jsxRuntime.jsxs(TextSpecialist, { mobileVersion: mobileVersion, children: [jsxRuntime.jsxs(Name, { mobileVersion: mobileVersion, children: [" ", name, " "] }), jsxRuntime.jsxs(Email, { mobileVersion: mobileVersion, children: [" ", email, " "] }), jsxRuntime.jsxs(Phone, { mobileVersion: mobileVersion, children: [" ", telephone, " "] })] })] }), jsxRuntime.jsxs(WrapperButtons, { children: [jsxRuntime.jsx(Button$3, { variant: 'primary', label: textButtonConversation ? textButtonConversation : 'Iniciar conversa', handleClick: () => handleActionConversation(), startIcon: !mobileVersion && jsxRuntime.jsx(WhatAppBordered, {}), sizeIcon: '22px' }), jsxRuntime.jsx(Button$3, { variant: 'primary', label: textButtonSendEmail ? textButtonSendEmail : 'Enviar e-mail', handleClick: () => handleActionSendEmail(), startIcon: !mobileVersion && jsxRuntime.jsx(MailBordered, {}), sizeIcon: '22px' })] })] }));
}

styled__default["default"].img `
    width: ${props => props.size || '120px'};
    height: ${props => props.size || '120px'};
    border-radius: 50%;
    object-fit: cover;

    ${({ disabled }) => disabled === true && `
        filter: grayscale(100%);
    `}
`;
const CardWrapper = styled__default["default"].div `
    width: 100%;
    min-height: 154px;
    padding: 24px;

    background-color: ${({ theme }) => theme.colors.shadeWhite};
    border: 1px solid #BDBDBD;
    border-radius: 8px;
    padding: 20px;
    ${({ hasShadow }) => hasShadow && 'box-shadow: 0px 18px 40px -15px #D3D3D3'};
`;
const FeaturedNumber = styled__default["default"].p `
    font-family: 'Work Sans' ;
    font-style: normal;
    font-weight: 300;
    font-size: 48px;
    line-height: 56px;
    color: #222222;
`;
const DescriptionStatistics = styled__default["default"].span `
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    color: #FF4D0D;
`;
const ItemStatistics = styled__default["default"].div `

    grid-area: ${({ index, isNamedGrid }) => isNamedGrid && index} !important;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-itens: flex-start;
    min-height: 106px;
    max-width: 272px;
    padding: 0px 24px 0px 24px;
    margin-top: ${({ twoRows }) => twoRows ? '24px' : '0px'};
    ${({ hasDivider, theme }) => hasDivider ?
    'border-left: 1px solid ' + theme.colors.borderPrimary :
    'border-left: 1px solid ' + theme.colors.shadeWhite}
`;

function TotalizerCard({ objectStatistics, loading, hasShadow, styles }) {
    const [windowSize, setWindowSize] = React.useState([0, 0]);
    React.useEffect(() => {
        function updateSize() {
            setWindowSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    const renderObjectStatistics = (isNamed) => {
        const calcHasDivider = (myIndex) => {
            if (myIndex == 0)
                return false;
            switch (objectStatistics.length) {
                case 6:
                case 7:
                case 8:
                    if (myIndex == 4)
                        return false;
            }
            return true;
        };
        return objectStatistics.map((item, index) => {
            return jsxRuntime.jsxs(ItemStatistics, { hasDivider: calcHasDivider(index), twoRows: objectStatistics.length > 5 && index > 3, isNamedGrid: isNamed, index: 'card-' + (index + 1).toString(), children: [jsxRuntime.jsx(FeaturedNumber, { children: item.featuredNumber }), jsxRuntime.jsx(DescriptionStatistics, { children: item.description })] }, index);
        });
    };
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: loading ? jsxRuntime.jsx(CardWrapper, { hasShadow: hasShadow, className: 'shimmer', style: { ...styles } }) :
            jsxRuntime.jsx(CardWrapper, { hasShadow: hasShadow, style: { ...styles }, children: (objectStatistics && objectStatistics.length > 0 && objectStatistics.length <= 5) ?
                    jsxRuntime.jsx("div", { style: {
                            display: 'grid',
                            gridTemplateAreas: objectStatistics.length == 5 ? `'card-1 card-2 card-3 card-4 card-5'` : `'card-1 card-2 card-3 card-4'`
                        }, children: renderObjectStatistics(true) })
                    :
                        (objectStatistics && objectStatistics.length > 0 && objectStatistics.length <= 6) ?
                            jsxRuntime.jsx("div", { style: {
                                    display: 'grid',
                                    gridTemplateAreas: `'card-1 card-2 card-3 card-4''. card-5 card-6 .'`
                                }, children: renderObjectStatistics(true) })
                            :
                                (objectStatistics && objectStatistics.length > 0 && objectStatistics.length <= 7) ?
                                    jsxRuntime.jsx("div", { style: {
                                            display: 'grid',
                                            gridTemplateAreas: `'card-1 card-1 card-2 card-2 card-3 card-3 card-4 card-4''. card-5 card-5 card-6 card-6 card-7 card-7 .'`
                                        }, children: renderObjectStatistics(true) })
                                    :
                                        (objectStatistics && objectStatistics.length > 0 && objectStatistics.length > 7) &&
                                            jsxRuntime.jsx("div", { style: {
                                                    display: 'grid',
                                                    gridTemplateColumns: '1fr 1fr 1fr 1fr',
                                                }, children: renderObjectStatistics(false) }) }) }));
}

const Wrapper$3 = styled__default["default"].div `
    display: flex;
    width: 100%;
    flex-direction: column;
`;
const Title$4 = styled__default["default"].p ` 
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;

    display: flex;
    align-items: center;
    letter-spacing: 0.01em;

    color: ${({ theme }) => theme.colors.neutralsGrey1};

    margin-bottom: 30px;
`;
const WrapperList = styled__default["default"].div `
    display: flex;
    flex-direction: column;
`;
const ItemList = styled__default["default"].div `
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    
    min-width: ${({ isMobile }) => isMobile ? '0x' : '374px'};
    margin-bottom: 16px;
`;
const TextList = styled__default["default"].span `
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;

    display: flex;
    align-items: center;
    letter-spacing: 0.01em;
    margin-left: 12px;
`;
const IconList = styled__default["default"].span `
    margin-top: 2px;
`;

function TrailList({ title, trails, style }) {
    const [trailsList, setTrailsList] = React.useState(trails);
    const [windowSize, setWindowSize] = React.useState([0, 0]);
    React.useEffect(() => {
        function updateSize() {
            setWindowSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    const renderTrails = () => {
        return (trailsList.map((item, index) => {
            return jsxRuntime.jsxs(ItemList, { isMobile: windowSize[0] < 400, children: [jsxRuntime.jsxs(IconList, { children: [" ", jsxRuntime.jsx(MessageCheckLine, {}), " "] }), jsxRuntime.jsxs(TextList, { children: [" ", item, " "] })] }, index);
        }));
    };
    React.useEffect(() => {
        setTrailsList(trails);
    }, [trails]);
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsxs(Wrapper$3, { style: { ...style }, children: [jsxRuntime.jsx(Title$4, { children: title }), jsxRuntime.jsx(WrapperList, { children: (trailsList && trailsList.length > 0 && trailsList.length <= 2) ?
                        jsxRuntime.jsx("div", { style: {
                                display: 'flex',
                                flexDirection: 'column'
                            }, children: renderTrails() })
                        :
                            (trailsList && trailsList.length > 0 && trailsList.length <= 3) ?
                                jsxRuntime.jsx("div", { style: {
                                        display: 'grid',
                                        columnGap: '80px',
                                        gridTemplateColumns: windowSize[0] > 900 ? '1fr 1fr' : '1fr'
                                    }, children: renderTrails() })
                                :
                                    (trailsList && trailsList.length > 0 && trailsList.length <= 5) ?
                                        jsxRuntime.jsx("div", { style: {
                                                display: 'grid',
                                                columnGap: '80px',
                                                gridTemplateColumns: windowSize[0] > 1400 ? '1fr 1fr 1fr' :
                                                    windowSize[0] > 900 ? '1fr 1fr' : '1fr'
                                            }, children: renderTrails() })
                                        :
                                            (trailsList && trailsList.length > 0 && trailsList.length > 5) &&
                                                jsxRuntime.jsx("div", { style: {
                                                        display: 'grid',
                                                        columnGap: '80px',
                                                        gridTemplateColumns: windowSize[0] > 1400 ? '1fr 1fr 1fr' :
                                                            windowSize[0] > 900 ? '1fr 1fr' : '1fr'
                                                    }, children: renderTrails() }) })] }) }));
}

const SFavorite = styled__default["default"].div `
  padding: 12px 20px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  cursor: pointer;

  &.disable {
    cursor: not-allowed;
  }
`;

function Favorite({ variant, disable = false, action }) {
    const types = {
        default: {
            name: 'default',
            fill: '#E0E0E0',
            stroke: '#BDBDBD'
        },
        pressed: {
            name: 'pressed',
            fill: '#FFD600',
            stroke: '#FDAE15'
        },
        disabled: {
            name: 'disabled',
            fill: '#757575',
            stroke: '#BDBDBD'
        }
    };
    const [status, setStatus] = React.useState(types[variant]);
    function handleSetStatus() {
        const newStatus = status.name === 'default' ? 'pressed' : 'default';
        setStatus(types[newStatus]);
        action();
    }
    React.useEffect(() => {
        setStatus(types[!disable ? variant : 'disabled']);
    }, [disable]);
    return (jsxRuntime.jsx(SFavorite, { onClick: !disable && handleSetStatus, className: disable && 'disable', children: jsxRuntime.jsx(StarFavorite, { fill: status.fill, stroke: status.stroke }) }));
}

const Container$e = styled__default["default"].div `
  width: auto;
  height: 218px;
  min-width: 720px;
  padding: 25px 26px 20px 26px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 14px;
  cursor: pointer;
  &.selected {
    background: #fce4cc;
    border: 1px solid #ff8a15;
  }
  :hover {
    background: #fcf3eb;
    border: 1px solid #ff8a15;
  }
`;
const Thumbnail = styled__default["default"].section `
  height: 100%;
  width: 88px;
  border-radius: 8px;

  > img {
    width: 100%;
    height: 120px;
    object-fit: cover;
    object-position: 50% 50%;
    border-radius: 8px;
  }
`;
const Content$2 = styled__default["default"].section `
  width: calc(100% - 88px - 14px);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
const Article = styled__default["default"].article `
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;
const Options = styled__default["default"].div `
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title$3 = styled__default["default"].h3 `
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #6a3f86;
`;
const Description$2 = styled__default["default"].p `
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 110%;
  color: #757575;
  width: 60%;
`;
const SkillsList = styled__default["default"].ul `
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  padding-left: 0;
  gap: 8px;

  > .title {
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #757575;
  }
`;
const Skill = styled__default["default"].li `
  text-decoration: none;
  list-style: none;
  text-transform: capitalize;
  padding: 2px 4px;
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;

  color: #ffffff;
  background: #6a3f86;
  border-radius: 4px;
`;
const ContentBarProgess = styled__default["default"].div `
  display: flex;
  align-items: center;
  gap: 10px;

  > p {
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #222222;
  }
`;
const BarProgress = styled__default["default"].div `
  width: 160px;
  height: 20px;
  padding: 2px;
  border: 1px solid #9c9c9c;
  border-radius: 100px;
  background: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const Progress = styled__default["default"].span `
  height: 100%;
  background-color: #ff4d0d;
  width: ${(p) => p.progress}%;
  z-index: 2;
  border-radius: 100px;
`;

const Tooltip$1 = styled__default["default"].div `
    position: relative;
    display: inline-block;
    
    &:after #tooltipinfo {
        content: "";
        position: absolute;

        ${({ position }) => {
    switch (position) {
        case 'top':
            return 'top: 100%; left: 50%;';
        case 'bottom':
            return 'bottom: 100%; left: 50%;';
        case 'right':
            return 'top: 50%; right: 100%;';
        case 'left':
            return 'top: 50%; left: 100%;';
    }
}}
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: black transparent transparent transparent;
    }

    &:hover #tooltipinfo {
        visibility: visible;
    }

    &:hover {
        visibility: visible;
    }
`;
const Tooltiptext = styled__default["default"].div `
    visibility: hidden;
    width: 156px;
    background-color: #fff;
    border: solid 1px #BDBDBD;

    padding: 8px! important;
    padding-bottom: 4px;

    word-wrap: break-word;

    color: #757575;
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;

    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    ${({ position }) => {
    switch (position) {
        case 'top':
            return 'bottom: 160%; left: 50%;';
        case 'bottom':
            return 'top: 160%; left: 50%;';
        case 'right':
            return 'top: -5px; left: 220%;';
        case 'left':
            return 'top: -5px; right: 120%;';
    }
}}

    margin-left: -70px;

    -webkit-box-shadow: 10px 35px 40px -8px rgba(0,0,0,0.31);
    -moz-box-shadow: 10px 35px 40px -8px rgba(0,0,0,0.31);
    box-shadow: 10px 35px 40px -8px rgba(0,0,0,0.31);

    &:after {
        content: "";
        width: 0;
        height: 0;
        
        ${({ position }) => {
    switch (position) {
        case 'top':
            return 'left: 48%; bottom: -6px;';
        case 'bottom':
            return 'left: 48%; top: -6px;';
        case 'right':
            return 'top: 35%; left: -6px; border: 5px solid #fff !important;';
        case 'left':
            return 'top: 35%; right: -6px; border: 5px solid #fff !important;';
    }
}}
        position: absolute;
    
        border: 6px solid #fff;
        transform: rotate(135deg);
        transition: border 0.3s ease-in-out;
      }
`;

function Tooltip(props) {
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsxs(Tooltip$1, { position: props.position, children: [props?.children, jsxRuntime.jsx(Tooltiptext, { id: "tooltipinfo", position: props.position, children: props?.textTooltip })] }) }));
}

function ContentCycle({ title, description, selected, listSkils, urlPhoto, urlVideo, titleVideo, progress, started, stepContent, onSelect, typeContent, id }) {
    const [openModal, setOpenModal] = React.useState(false);
    const defaultImage = {
        video: 'https://lxp-cdn.frstfalconi.cloud/upload_content_video.png',
        podcast: ' https://lxp-cdn.frstfalconi.cloud/upload_content_podcast.png',
        text: 'https://lxp-cdn.frstfalconi.cloud/upload_content_text.png'
    };
    return (jsxRuntime.jsxs(Container$e, { className: selected && 'selected', onClick: () => onSelect(), id: id, children: [jsxRuntime.jsx(Thumbnail, { children: jsxRuntime.jsx("img", { src: urlPhoto ? urlPhoto : defaultImage[typeContent], alt: title }) }), jsxRuntime.jsxs(Content$2, { children: [jsxRuntime.jsxs(Article, { children: [jsxRuntime.jsxs(Options, { children: [jsxRuntime.jsx(Title$3, { children: title }), stepContent && (jsxRuntime.jsx(Tooltip, { position: "top", textTooltip: "Remover", children: jsxRuntime.jsx(Trash, {}) }))] }), jsxRuntime.jsx(Description$2, { children: description })] }), jsxRuntime.jsxs(SkillsList, { children: [jsxRuntime.jsx("p", { className: "title", children: "Competencias: " }), listSkils.map((skill, index) => {
                                return (jsxRuntime.jsx(Skill, { id: skill, children: skill }, index));
                            })] }), started ? (jsxRuntime.jsxs(ContentBarProgess, { children: [jsxRuntime.jsx(BarProgress, { children: jsxRuntime.jsx(Progress, { progress: progress }) }), jsxRuntime.jsxs("p", { children: [progress, "%"] })] })) : (jsxRuntime.jsx(Button$3, { startIcon: jsxRuntime.jsx(PlayLineIcon, { fill: "#0645AD" }), variant: "link", label: "Ver Teaser", handleClick: () => setOpenModal(true), sizeIcon: "24px" }))] }), jsxRuntime.jsx(ModalVideo, { timeBegin: 0, open: openModal, handleClose: () => setOpenModal(false), videoUrl: urlVideo, nameVideo: titleVideo, title: titleVideo })] }));
}

const Container$d = styled__default["default"].div `
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  flex-direction: column;
`;

function ListContentCycle({ stepContentCompleted = false, listContent, onSelect }) {
    return (jsxRuntime.jsx(Container$d, { children: listContent.map((content, index) => {
            return (jsxRuntime.jsx(ContentCycle, { id: content.id, description: content.description, onSelect: () => onSelect(index), selected: content.selected, title: content.title, listSkils: content.listSkils, urlPhoto: content.urlPhoto, urlVideo: content.urlVideo, titleVideo: content.titleVideo, progress: content.progress, started: content.started, stepContent: stepContentCompleted, typeContent: content.typeContent }, content.id));
        }) }));
}

const ContainerGeral$1 = styled__default["default"].div `
  display: flex;
  height: 8.5rem;
  align-content: flex-end;
  &:hover .popOver {
    display: block;
  }
  &:hover .hide {
    display: block;
  }
`;
const AvatarChannel$2 = styled__default["default"].div `
  width: ${(props) => props.size || '80px'};
  height: ${(props) => props.size || '80px'};
  border-radius: 50%;
  background-color: ${(props) => props.color || '#6a3f86'};
  position: relative;
  margin-top: ${(props) => (props.variant === 'lowLeft' || props.variant === 'lowRight' ? '62px' : '0px')};
  cursor: pointer;
  ${(props) => props.variant === 'sideRight' &&
    styled.css `
      margin-left: 8.5rem;
    `}

  img {
    border-radius: 50%;
  }

  ${({ disabled }) => disabled === true &&
    `
        filter: grayscale(100%);
    `}
`;
const AvatarChannelImage$1 = styled__default["default"].div `
  width: ${(props) => props.size || '80px'};
  height: ${(props) => props.size || '80px'};
  border-radius: 50%;
  background-image: ${(props) => `url(${props.image})`};
  background-repeat: no-repeat;
  background-size: ${(props) => props.size || '80px'};
  position: relative;
  margin-top: ${(props) => (props.variant === 'lowLeft' || props.variant === 'lowRight' ? '62px' : '0px')};
  cursor: pointer;
  ${(props) => props.variant === 'sideRight' &&
    styled.css `
      margin-left: 8.5rem;
    `}

  img {
    border-radius: 50%;
  }

  ${({ disabled }) => disabled === true &&
    `
        filter: grayscale(100%);
    `}
`;
const Channel$2 = styled__default["default"].span `
  position: absolute;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.01em;
  top: 25px;
  left: 22.4px;
  font-size: 24px;
  color: #ffffff;
  font-family: 'Work Sans';
  font-weight: 700;
  line-height: 130%;
`;
const AvatarCircle = styled__default["default"].div `
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.shadeWhite};
  position: absolute;
  margin: 26.25% 25% 26.25% 25%;
  box-shadow: 0px 18px 40px -15px #d3d3d3;
  display: none;
`;
const AvatarCam = styled__default["default"].div `
  width: 33px;
  height: 31px;
  position: absolute;
  margin: 15% 9% 12.5% 18%;
`;
const ContainerPopOver = styled__default["default"].div `
  white-space: nowrap;
  font-size: 16px;
  display: none;
  width: 120px;
  position: absolute;
  margin-top: 0;
  font-family: 'PT Sans';
  font-weight: 400;
  ${(props) => (props.variant === 'upLeft' || props.variant === 'upRight') &&
    styled.css `
      margin-top: 7rem;
    `}

  ${(props) => props.variant === 'sideLeft' &&
    styled.css `
      margin-top: 1rem;
      margin-left: 6rem;
    `}

    ${(props) => props.variant === 'sideRight' &&
    styled.css `
      margin-top: 1rem;
    `}
`;
const ContainerSelectedImage = styled__default["default"].div `
  margin-top: 60px;
`;

const RectangleUpLeft$1 = styled__default["default"].div `
    width: 13.64px;
    height: 13.64px;
    position: absolute;
    margin: -7px 0 32px 27px;
    left: 0;
    top: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey4};
    border-bottom: none;
    border-left: none;
    border-right: none;
    transform: matrix(0.71, 0.97, -0.51, 0.91, 0, 0);
    ${({ variant }) => (variant)}
`;
const RectangleUpRight$1 = styled__default["default"].div `
    width: 13.64px;
    height: 13.64px;
    position: absolute;
    right: 0;
    top: 0;
    margin: -7px 32px 0 27px;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey4};
    border-bottom: none;
    border-left: none;
    border-right: none;
    transform: matrix(0.71, 0.97, -0.51, 0.91, 0, 0);    
    
    ${({ variant }) => (variant)}
`;
const RectangleLowRight$1 = styled__default["default"].div `
    width: 13.64px;
    height: 13.64px;
    position: absolute;
    margin: 27px 32px -7px 0px;
    right: 0;
    bottom: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey4};
    border-left: none;   
    border-top: none;
    transform: matrix(0.71, 0.97, -0.51, 0.91, 0, 0);
    
    ${({ variant }) => (variant)}
`;
const RectangleLowLeft$1 = styled__default["default"].div `
    width: 13.64px;
    height: 13.64px;
    position: absolute;
    margin: 27px 0 -7px 32px;
    left: 0;
    bottom: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey4};
    border-left: none;   
    border-top: none;
    transform: matrix(0.71, 0.97, -0.51, 0.91, 0, 0);
    
    ${({ variant }) => (variant)}
`;
const RectangleLeft$1 = styled__default["default"].div `
    width: 13.64px;
    height: 13.64px;
    position: absolute;
    margin: 39px 0px 32px -7px;
    left: 0;
    bottom: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey4};
    border-right: none;
    border-bottom: none;
    transform: matrix(0.91, -0.51, 0.91, 0.61, 0, 0);    
    
    ${({ variant }) => (variant)}
`;
const RectangleRight$1 = styled__default["default"].div `
    width: 13.64px;
    height: 13.64px;
    position: absolute;
    margin: 39px -7px 13px 0;
    right: 0;
    bottom: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey4};
    border-left: none;   
    border-top: none;
    transform: matrix(0.91, -0.51, 0.91, 0.61, 0, 0);    
    
    ${({ variant }) => (variant)}
`;
const PopOver$2 = styled__default["default"].div `
    width: 100%;
    min-height: 31px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey4};
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    box-shadow: 0px 18px 40px -15px #d3d3d3;
    position: relative;
    margin: 0% 0% 0% 0%;
    padding: 8px;
`;
const PopOverLeftRight = styled__default["default"].div `
    width: 100%;
    min-height: 67px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey4};
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    box-shadow: 0px 18px 40px -15px #d3d3d3;
    position: relative;
    margin: 0% 0% 0% 0%;
    padding: 8px;    
`;

function PopOverLXP({ variant, children }) {
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: variant === 'upLeft' ?
            jsxRuntime.jsxs(PopOver$2, { children: [jsxRuntime.jsx(RectangleUpLeft$1, { variant: variant = 'upLeft' }), children] })
            : variant === 'upRight' ?
                jsxRuntime.jsxs(PopOver$2, { children: [jsxRuntime.jsx(RectangleUpRight$1, { variant: variant = 'upRight' }), children] })
                : variant === 'lowRight' ?
                    jsxRuntime.jsxs(PopOver$2, { children: [jsxRuntime.jsx(RectangleLowRight$1, { variant: variant = 'lowRight' }), children] })
                    : variant === 'lowLeft' ?
                        jsxRuntime.jsxs(PopOver$2, { children: [jsxRuntime.jsx(RectangleLowLeft$1, { variant: variant = 'lowLeft' }), children] })
                        : variant === 'sideLeft' ?
                            jsxRuntime.jsxs(PopOverLeftRight, { children: [jsxRuntime.jsx(RectangleLeft$1, { variant: variant = 'sideLeft' }), children] })
                            : variant === 'sideRight' ?
                                jsxRuntime.jsxs(PopOverLeftRight, { children: [jsxRuntime.jsx(RectangleRight$1, { variant: variant = 'sideRight' }), children] })
                                : null }));
}

function AvatarChannel$1({ size, channel, className, disabled, color, handleValueAvatar, variantPopOver, sourceImage }) {
    const onChange = () => {
        document.getElementById('fileSelector').click();
    };
    const handleFileSelected = (file) => {
        const reader = new FileReader();
        reader.onload = function (e) {
            setImage(e.target.result);
        };
        reader.readAsDataURL(file);
        handleValueAvatar(file);
        return file;
    };
    const [image, setImage] = React.useState(null);
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsx(ContainerGeral$1, { className: "geral", variant: variantPopOver, children: sourceImage ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(ContainerPopOver, { className: "popOver", variant: variantPopOver, children: jsxRuntime.jsx(PopOverLXP, { children: 'Alterar avatar', variant: variantPopOver, element: undefined }) }), jsxRuntime.jsxs(ContainerSelectedImage, { onClick: onChange, children: [jsxRuntime.jsx("div", { style: { display: 'none' }, children: jsxRuntime.jsx("input", { type: "file", id: "fileSelector", accept: ".jpg, .jpeg, .png", onChange: (e) => handleFileSelected(e.target.files[0]) }) }), jsxRuntime.jsx("img", { src: sourceImage, style: { borderRadius: '150px', width: '80px', height: '80px' } })] })] })) : (jsxRuntime.jsx(jsxRuntime.Fragment, { children: variantPopOver === 'lowLeft' || variantPopOver === 'lowRight' || variantPopOver === 'sideRight' ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(ContainerPopOver, { className: "popOver", variant: variantPopOver, children: jsxRuntime.jsx(PopOverLXP, { children: 'Alterar avatar', variant: variantPopOver, element: undefined }) }), jsxRuntime.jsx("div", { style: { display: 'none' }, children: jsxRuntime.jsx("input", { type: "file", id: "fileSelector", accept: ".jpg, .jpeg, .png", onChange: (e) => handleFileSelected(e.target.files[0]) }) }), image ? (jsxRuntime.jsx(AvatarChannelImage$1, { size: size, onClick: onChange, className: className, disabled: disabled, variant: variantPopOver, image: image, children: jsxRuntime.jsx("img", { src: sourceImage, style: { borderRadius: '150px', width: '80px', height: '80px' } }) })) : (jsxRuntime.jsxs(AvatarChannel$2, { size: size, onClick: onChange, className: className, disabled: disabled, variant: variantPopOver, color: color ? color : '#6a3f86', children: [jsxRuntime.jsx(Channel$2, { children: channel }), jsxRuntime.jsx(AvatarCircle, { className: "hide", children: jsxRuntime.jsx(AvatarCam, { children: jsxRuntime.jsx(Cam, {}) }) })] }))] })) : null })) }) }));
}

const ContainerGeral = styled__default["default"].div `
  width: 7rem;
  display: flex;
  align-content: flex-start;
  top: 0;
  flex-direction: column;
  &:hover .cardInformation {
    display: block;
  }
  &:hover .cardInformation {
    display: block;
  }
`;
const AvatarChannel = styled__default["default"].div `
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-color: ${(props) => props.color || '#6a3f86'};
  position: relative;
  cursor: pointer;
  margin: 1rem;

  img {
    border-radius: 50%;
  }
`;
const Channel$1 = styled__default["default"].span `
  height: 80px;
  width: 80px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  letter-spacing: 0.01em;
  font-size: 24px;
  color: #ffffff;
  font-family: 'Work Sans';
  font-weight: 700;
`;
const CardInformation = styled__default["default"].div `
  width: 20rem;
  background: #ffff;
  font-size: 16px;
  display: none;
  margin-top: 0.5rem;
  font-family: 'PT Sans';
  font-weight: 400;
  word-break: break-word;
  box-shadow: 0px 25px 18px -20px rgba(34, 34, 34, 0.2);
  border-radius: 4px;
  list-style: none;
  padding: 8px 0px;
  h2 {
    margin: 1rem 0.5rem 0.5rem 1rem;
  }
  h3 {
    margin: 1rem;
  }
  @media (max-width: 320px) {
    width: 18rem;
  }
`;
const AvatarChannelImage = styled__default["default"].div `
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-image: ${(props) => `url(${props.image})`};
  background-repeat: no-repeat;
  background-size: 80px;
  position: relative;
  cursor: pointer;
  margin: 1rem;

  img {
    border-radius: 50%;
    width: 80px;
    height: 80px;
  }
`;

function AvatarAssociatedChannel({ descriptionChannel, nameChannel, channel, color, sourceImage, image }) {
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsx(ContainerGeral, { children: jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [image ? (jsxRuntime.jsx(AvatarChannelImage, { image: image, children: jsxRuntime.jsx("img", { src: sourceImage }) })) : (jsxRuntime.jsx(AvatarChannel, { color: color ? color : '#6a3f86', children: jsxRuntime.jsx(Channel$1, { children: channel }) })), jsxRuntime.jsxs(CardInformation, { className: "cardInformation", children: [image ? (jsxRuntime.jsx(AvatarChannelImage, { image: image, children: jsxRuntime.jsx("img", { src: sourceImage }) })) : (jsxRuntime.jsx(AvatarChannel, { color: color ? color : '#6a3f86', children: jsxRuntime.jsx(Channel$1, { children: channel }) })), jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("h2", { children: nameChannel }), jsxRuntime.jsx("h3", { children: descriptionChannel })] })] })] }) }) }));
}

const BannerContainer = styled__default["default"].div `
  background: ${(props) => props.backgroundBanner};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  font-family: 'Work Sans';
  width: 100%;
  height: 214px;
  cursor: default;
  padding: 60px 80px 60px 120px;
  border-radius: 0px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  :hover .configButton {
    display: block;
  }
`;
const ConfigButton = styled__default["default"].div `
  position: absolute;
  right: 0;
  margin-right: 83px;
  display: none;
`;
const ConfigContainer = styled__default["default"].div `
  width: 350px;
  height: 420px;
  border-radius: 8px;
  border: 1px solid #bdbdbd;
  box-shadow: 0px 25px 18px -20px rgba(34, 34, 34, 0.15);
  background-color: #fff;
  font-family: 'PT Sans', 'PTSans-Regular';
  padding: 16px;
  position: absolute;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  right: 0;
  margin-right: 83px;
`;
const EnableText = styled__default["default"].div `
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const InputTextColor = styled__default["default"].div `
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 8px 0;
  margin-top: 8px;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
`;
const InputBgColor = styled__default["default"].div `
  width: 100%;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
const BgInput = styled__default["default"].div `
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  margin-top: 8px;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;

  input[type='file'] {
    display: none;
  }
  label {
    display: flex;
    align-items: center;
    color: #0645ad;
    font-size: 16;
    font-weight: 700;
    cursor: pointer;
  }
`;
const FixImage = styled__default["default"].div `
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4px;
`;

function BannerLxp(props) {
    const [openConfig, setOpenConfig] = React.useState(false);
    const [disableText, setDisableText] = React.useState(props.isDisabledTitle);
    const [titleText, setTitleText] = React.useState(props.title ? props.title : '');
    const [colorTitle, setColorTitle] = React.useState(props.titleColor ? props.titleColor : '#FFF');
    const [backgroundColor, setBackgroundColor] = React.useState(props.bgColor ? props.bgColor : '');
    const [backgroundImage, setBackgroundImage] = React.useState(props.bgSrc || '');
    const [fixImage, setFixImage] = React.useState(false);
    const [selectedFile, setSelectedFile] = React.useState({});
    const [displayTitleColorPicker, setDisplayTitleColorPicker] = React.useState(false);
    const [displayBackgroundColorPicker, setDisplayBackgroundColorPicker] = React.useState(false);
    const [anchor, setAnchor] = React.useState(null);
    const handleOpenConfig = () => setOpenConfig(true);
    const handleCloseConfig = () => {
        setOpenConfig(false);
        props.onSaveInfo([titleText, disableText, colorTitle, backgroundColor, fixImage]);
    };
    const idBg = displayBackgroundColorPicker ? 'simple-popover' : undefined;
    const idTitle = displayTitleColorPicker ? 'simple-popover' : undefined;
    const handleOpenTitleColorPicker = (event) => {
        setDisplayTitleColorPicker(!displayTitleColorPicker);
        setAnchor(event.currentTarget);
    };
    const handleCloseTitleColorPicker = () => setDisplayTitleColorPicker(false);
    const handleOpenBackgroundColorPicker = (event) => {
        setDisplayBackgroundColorPicker(!displayBackgroundColorPicker);
        setAnchor(event.currentTarget);
    };
    const handleCloseBackgroundColorPicker = () => setDisplayBackgroundColorPicker(false);
    const handleChangeTitleColor = (color, event) => {
        setColorTitle(color.hex);
    };
    const handleChangeBackgroundColor = (color) => {
        setBackgroundColor(color.hex);
        setBackgroundImage('');
    };
    const handleFileSelected = (file) => {
        const reader = new FileReader();
        reader.onload = function (e) {
            setSelectedFile(e.target.result);
        };
        reader.readAsDataURL(file);
        props.handleChangeBanner(file);
        setBackgroundImage(props.bgSrc);
        return file;
    };
    React.useEffect(() => {
        setBackgroundColor(props.bgColor);
    }, [props.bgColor]);
    React.useEffect(() => {
        setBackgroundImage(props.bgSrc);
    }, [props.bgSrc]);
    React.useEffect(() => {
        setTitleText(props.title);
    }, [props.title]);
    React.useEffect(() => {
        setColorTitle(props.titleColor);
    }, [props.titleColor]);
    return (jsxRuntime.jsxs(BannerContainer, { backgroundBanner: backgroundImage === '' ? backgroundColor : props.bgSrc && `url(${props.bgSrc})`, style: {
            ...props.style,
            objectFit: fixImage ? 'fill' : 'none'
        }, children: [!disableText ? jsxRuntime.jsx("span", { style: { color: colorTitle, fontSize: 40, fontWeight: 700 }, children: titleText }) : '', jsxRuntime.jsx(ConfigButton, { className: "configButton", children: jsxRuntime.jsx(Button$3, { variant: "primary", label: "Configura\u00E7\u00E3o de capa", handleClick: handleOpenConfig }) }), jsxRuntime.jsx(material.Modal, { open: openConfig, onClose: handleCloseConfig, children: jsxRuntime.jsxs(ConfigContainer, { style: { ...props.style }, children: [jsxRuntime.jsx("span", { style: { fontWeight: 700, fontSize: 16, color: '#000000', marginBottom: 24 }, children: "T\u00EDtulo" }), jsxRuntime.jsx(TextField, { label: "Alterar t\u00EDtulo do KnowHub", placeholder: "Digite seu t\u00EDtulo aqui", style: { width: '100%' }, onChange: (e) => setTitleText(e.target.value) }), jsxRuntime.jsxs(EnableText, { children: [jsxRuntime.jsx("span", { children: "Mostrar texto" }), jsxRuntime.jsx(material.Switch, { checked: !disableText, onChange: () => setDisableText(!disableText), sx: {
                                        '& .MuiSwitch-switchBase.Mui-checked': {
                                            color: '#FFF'
                                        },
                                        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                            backgroundColor: '#FF4D0D !important',
                                            opacity: 1
                                        }
                                    } })] }), jsxRuntime.jsxs(InputTextColor, { children: [jsxRuntime.jsx("span", { children: "Cor do t\u00EDtulo" }), jsxRuntime.jsx("button", { "aria-describedby": idTitle, style: {
                                        cursor: 'pointer',
                                        width: 23,
                                        height: 23,
                                        borderRadius: 8,
                                        border: '1px solid #BDBDBD',
                                        backgroundColor: colorTitle
                                    }, onClick: handleOpenTitleColorPicker }), jsxRuntime.jsx(material.Popover, { id: idTitle, open: displayTitleColorPicker, onClose: handleCloseTitleColorPicker, anchorEl: anchor, anchorOrigin: { vertical: 'bottom', horizontal: 'right' }, children: jsxRuntime.jsx(PopOverLXP, { variant: "upRight", children: jsxRuntime.jsx(reactColor.SketchPicker, { color: colorTitle, onChangeComplete: handleChangeTitleColor }) }) })] }), jsxRuntime.jsx("span", { style: { marginTop: 24, fontWeight: 700, fontSize: 16, color: '#000000' }, children: "Background" }), jsxRuntime.jsxs(InputBgColor, { className: "inputBgColor", children: [jsxRuntime.jsx("span", { children: "Cor de fundo" }), jsxRuntime.jsx("button", { "aria-describedby": idBg, style: {
                                        cursor: 'pointer',
                                        width: 23,
                                        height: 23,
                                        borderRadius: 8,
                                        border: '1px solid #BDBDBD',
                                        backgroundColor: backgroundColor
                                    }, onClick: handleOpenBackgroundColorPicker }), jsxRuntime.jsx(material.Popover, { id: idBg, open: displayBackgroundColorPicker, onClose: handleCloseBackgroundColorPicker, anchorEl: anchor, anchorOrigin: { vertical: 'bottom', horizontal: 'right' }, children: jsxRuntime.jsx(PopOverLXP, { variant: "upRight", children: jsxRuntime.jsx(reactColor.SketchPicker, { color: backgroundColor, onChangeComplete: handleChangeBackgroundColor }) }) })] }), jsxRuntime.jsxs(BgInput, { children: [jsxRuntime.jsx("span", { children: "Imagem de fundo" }), jsxRuntime.jsxs("label", { htmlFor: "backgroundSelector", children: [' ', jsxRuntime.jsx(UploadIcon, {}), " \u00A0 Selecionar", ' '] }), jsxRuntime.jsx("input", { type: "file", id: "backgroundSelector", accept: ".jpg, .jpeg, .png", onChange: (e) => handleFileSelected(e.target.files[0]) })] }), jsxRuntime.jsxs(FixImage, { children: [jsxRuntime.jsx("span", { children: " Ajustar a imagem " }), jsxRuntime.jsx(material.Switch, { checked: fixImage, onChange: () => setFixImage(!fixImage), sx: {
                                        '& .MuiSwitch-switchBase.Mui-checked': {
                                            color: '#FFF'
                                        },
                                        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                            backgroundColor: '#FF4D0D !important',
                                            opacity: 1
                                        }
                                    } })] })] }) })] }));
}

const variantStyles = (variant = 'contained') => ({
    content: styled.css `
        background-color: #FFFFFF;

        color: ${({ theme }) => theme.colors.neutralsGrey4};
        border: 1px solid ${({ theme }) => theme.colors.neutralsGrey4};

        &:hover {
            color: ${({ theme }) => theme.colors.neutralsGrey2};
            border: 5px solid ${({ theme }) => theme.colors.neutralsGrey2};
        }

        &:active {
            color: ${({ theme }) => theme.colors.neutralsGrey2};
            border: 1px solid ${({ theme }) => theme.colors.neutralsGrey2};
        }

        &:focus {
            border: 5px solid rgba(211,211,211,0.6);
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
const ButtonStartIcon = styled__default["default"].button `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    padding: 9px 16px;
    width: 386px;
    height: 64px;
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
        height: 40px;
        width: 40px;
        margin-right: 21px;        
    }

    ${({ variant }) => variantStyles(variant)}
`;

function ButtonContent({ variant, label, disabled, startIcon, style, handleClick }) {
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsxs(ButtonStartIcon, { style: { ...style }, variant: variant, disabled: disabled, onClick: handleClick, children: [startIcon, label] }) }));
}

const Container$c = styled__default["default"].span `
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: ${props => props.width || '147px'};
  height: ${props => props.height || '48px'};
  padding: 12px 16px;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  background: #EBEBEB;
  

  input[type="color"] {
    -webkit-appearance: none;
    border: none;
    width: auto;
    height: auto;
    cursor: pointer;
    background: none;
    &::-webkit-color-swatch-wrapper {
      padding: 0;
      width: 23px;
      height: 23px;
    }
    &::-webkit-color-swatch {
      border: 1px solid #E0E0E0;
      border-radius: 4px;
      padding: 0;
    }
  }

  input[type="text"] {
    border: none;
    width: 60px;
    height: 18px;
    font-size: 14px;
    background: #EBEBEB;
  }
`;

const ColorPicker = props => {
    return (jsxRuntime.jsxs(Container$c, { children: [jsxRuntime.jsx("input", { type: "text", ...props }), jsxRuntime.jsx("input", { type: "color", ...props })] }));
};
function Colorpicker({ width, height, color, }) {
    const [state, updateState] = React.useState(color);
    const handleInput = e => {
        updateState(e.target.value);
        color = state;
    };
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsx(ColorPicker, { onChange: handleInput, value: state, width: width, height: height }) }));
}

const Container$b = styled__default["default"].div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;    
    width: 180px;
    height: 176px;
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey5};
    cursor: pointer;
    border-radius: 8px;
    box-sizing: border-box;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    
    & > svg {        
        max-height: ${({ sizeIcon }) => sizeIcon ? sizeIcon : '64px'};
        height: 100%;
        width: auto;
    }

    &:hover{
        box-shadow: 0px 15px 5px -15px;  
    }
`;
const ContentSwitcher$1 = styled__default["default"].button `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 20px 0 20px!important;    
    width: 180px;
    height: 176px;
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey5};
    cursor: pointer;
    border-radius: 8px;
    box-sizing: border-box;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    background-color: ${({ theme }) => theme.colors.shadeWhite};
         
    & > svg {        
        height: 64px;
        width: 64px;       
    }

    &:hover{
        box-shadow: 0px 15px 5px -15px;    
    }
`;
const ContentSwitcherSelected = styled__default["default"].button `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 20px 0 20px!important;
    width: 180px;
    height: 176px;
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey5};
    cursor: pointer;
    border-radius: 8px;
    box-sizing: border-box;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    background-color: ${({ theme }) => theme.colors.primary1};
    color: ${({ theme }) => theme.colors.shadeWhite};

    & > svg {        
        max-height: ${({ sizeIcon }) => sizeIcon ? sizeIcon : '64px'};
        height: 100%;
        width: auto;
        stroke: #FFFFFF;       
    }

    /* &:hover{
        background-color: ${({ theme }) => theme.colors.primary3} ;
    } */
`;

function ContentSwitcher({ label, handleClick, style, sizeIcon, startIcon, startIconSelected, isActive, idButtonSwitcher }) {
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsx(Container$b, { sizeIcon: sizeIcon, style: { ...style }, children: !isActive ? (jsxRuntime.jsxs(ContentSwitcher$1, { onClick: handleClick, id: idButtonSwitcher, children: [startIcon, label] })) : (jsxRuntime.jsxs(ContentSwitcherSelected, { sizeIcon: sizeIcon, onClick: handleClick, id: idButtonSwitcher, children: [startIconSelected, label] })) }) }));
}

const Container$a = styled__default["default"].div `
    width: 270px;
    min-height: 409px;
    background-color: ${({ theme }) => theme.colors.primary2};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    position: relative;
    box-sizing: border-box;
    padding: 16px 16px 24px 16px;
`;
const Image$3 = styled__default["default"].img `
    width: 236px;
    height: 310px;
    border-radius: 8px;
    object-fit: cover;
    object-position: center;
`;
const Content$1 = styled__default["default"].div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    width: 100%;
    margin-top: 20px;
`;
const Typography$3 = styled__default["default"].p `     
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    margin-right: 20px;
    color: ${({ theme }) => theme.colors.shadeWhite};
    word-wrap: break-word;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4; /* start showing ellipsis when 3rd line is reached */
    white-space: pre-wrap;
    text-overflow: ellipsis;
`;
const Select$1 = styled__default["default"].div `
    background: none;
    width: 20px;
    height: 20px;
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;

    &:hover {
        opacity: 0.5;
    }
`;
const ContainerCard$1 = styled__default["default"].div `
    width: 270px;
    height: 76px;
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    display: flex;
    align-items: center;
    padding: 8px;
    position: relative;
    overflow: hidden;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderPrimary};

    &:hover {
        background-color: ${({ theme }) => theme.colors.neutralsGrey9};
    }

    &:active {
        background-color: ${({ theme }) => theme.colors.neutralsGrey6};
    }
    
    &:hover .trash {
        right: 15px;       
    }
`;
const Thumbnails$2 = styled__default["default"].div `
    width: 17.29px;
    height: 51px;    
    margin-left: -11px;       
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
`;
const Title$2 = styled__default["default"].div `
    width: 166px;
    margin-left: 12px;
    word-wrap: break-word;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* start showing ellipsis when 3rd line is reached */
    white-space: pre-wrap;
    text-overflow: ellipsis;
`;
const IconTrash = styled__default["default"].div `
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    right: -15px;
    position: absolute;
    transition: all .5s linear;
    
`;
// ##############TRILHA##############
const ContainerTrilha = styled__default["default"].div `
    width: 270px;
    height: 499px;
    background-color: ${({ theme }) => theme.colors.primary2};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;       

`;
const ContainerChoice = styled__default["default"].div `
    width: 232px;
    height: 75px;
    position: absolute;
    top: 0;
    margin: 20px;    
`;
const TypographyChoice = styled__default["default"].p `            
        font-family: 'PT Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        color: #ffffff;
        padding-bottom: 8px;
        white-space: nowrap;    
`;
const SelectChoice = styled__default["default"].select `    
        width: 232px;
        height: 48px;
        border-radius: 8px;
        border: 1px solid #E0E0E0;
        color: #9c9c9c;
        padding-left: 10px;
`;
const ImageChoice = styled__default["default"].img `
    width: 232px;
    height: 310px;
    margin-bottom: 70px;
    border-radius: 8px;
    position: absolute;
    object-fit: cover;
    bottom: 0;    
`;
const ContentChoice = styled__default["default"].div `
    display: flex;
    flex-direction: row;
    position: absolute ;
    margin-top: 425px;
`;
const OptionChoice = styled__default["default"].option `
    color: #9c9c9c;
`;

///-----------------------------------------
/// Componente
/**
 *
 * @componente
 */
function VectorDown$1(props) {
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx("svg", { width: "18", height: "10", viewBox: "0 0 18 10", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M17 1L9 9L1 0.999999", stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }));
}

///-----------------------------------------
/// Componente
/**
 *
 * @componente
 */
function VectorUp$1(props) {
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx("svg", { width: "18", height: "10", viewBox: "0 0 18 10", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M1 9L9 1L17 9", stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }));
}

///-----------------------------------------
/// Componente
/**
 *
 * @componente
 */
function VectorEllipse$1(props) {
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("svg", { width: "5", height: "5", viewBox: "0 0 5 5", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("ellipse", { cx: "2.57143", cy: "2.35", rx: "1.65", ry: "1.57143", transform: "rotate(-90 2.57143 2.35)", fill: "url(#paint0_angular_4285_2572)" }), jsxRuntime.jsx("ellipse", { cx: "2.57143", cy: "2.35", rx: "1.65", ry: "1.57143", transform: "rotate(-90 2.57143 2.35)", fill: "url(#paint1_radial_4285_2572)", fillOpacity: "0.6" }), jsxRuntime.jsx("ellipse", { cx: "2.57143", cy: "2.35", rx: "1.65", ry: "1.57143", transform: "rotate(-90 2.57143 2.35)", stroke: "#BDBDBD", strokeWidth: "0.1" }), jsxRuntime.jsxs("defs", { children: [jsxRuntime.jsxs("radialGradient", { id: "paint0_angular_4285_2572", cx: "0", cy: "0", r: "1", gradientUnits: "userSpaceOnUse", gradientTransform: "translate(2.57143 2.35) rotate(90) scale(1.57143 1.65)", children: [jsxRuntime.jsx("stop", { stopColor: "#757575" }), jsxRuntime.jsx("stop", { offset: "0.526042", stopColor: "#757575", stopOpacity: "0" })] }), jsxRuntime.jsxs("radialGradient", { id: "paint1_radial_4285_2572", cx: "0", cy: "0", r: "1", gradientUnits: "userSpaceOnUse", gradientTransform: "translate(2.57143 2.35) rotate(90) scale(1.57143 1.65)", children: [jsxRuntime.jsx("stop", { offset: "0.380208", stopColor: "white" }), jsxRuntime.jsx("stop", { offset: "1", stopColor: "#EBEBEB", stopOpacity: "0" })] })] })] }) }));
}

// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
var typeContent;
(function (typeContent) {
    typeContent[typeContent["Content"] = 0] = "Content";
    typeContent[typeContent["Video"] = 1] = "Video";
    typeContent[typeContent["PodCast"] = 2] = "PodCast";
    typeContent[typeContent["QuizSucessError"] = 3] = "QuizSucessError";
    typeContent[typeContent["Quiz"] = 4] = "Quiz";
    typeContent[typeContent["Certificate"] = 5] = "Certificate";
})(typeContent || (typeContent = {}));
function ContentThumbnails({ label, contentList, variant, src, disabled, icon, onChange, handleClick, handleReloadItens, title, removeContentList, onChangeOrder, isOpen }) {
    const defaultImg = 'https://i.gyazo.com/35d9c18bbdc6a48d843b0aa24ab2499e.png';
    const iconList = [
        jsxRuntime.jsx(Content$3, { fill: '#EE4C15' }),
        jsxRuntime.jsx(Video$1, { fill: '#EE4C15' }),
        jsxRuntime.jsx(PodCast, { fill: '#EE4C15' }),
        jsxRuntime.jsx(QuizSucessError, { fill: '#EE4C15' }),
        jsxRuntime.jsx(Quiz, { fill: '#EE4C15' }),
        jsxRuntime.jsx(Certificate, { fill: '#EE4C15' })
    ];
    const [contentListData, setContentListData] = React.useState(contentList ? contentList : []);
    const [up, setUp] = React.useState(isOpen);
    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };
    const change = () => {
        {
            up ? setUp(false) : setUp(true);
            return handleReloadItens();
        }
    };
    React.useEffect(() => {
        setContentListData(contentList ? contentList : []);
    }, [contentList]);
    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }
        const reorderedItems = reorder(contentListData, result.source.index, result.destination.index);
        setContentListData(reorderedItems);
        onChangeOrder(reorderedItems);
    };
    function Exibir() {
        return (jsxRuntime.jsx(dnd.DragDropContext, { onDragEnd: onDragEnd, children: jsxRuntime.jsx(dnd.Droppable, { droppableId: "contentListData", children: (provided) => (jsxRuntime.jsx("div", { style: { backgroundColor: '#D1D5DB', height: contentListData.length > 0 ? 'auto' : '100vh', width: 270 }, ref: provided.innerRef, children: contentListData?.map((item, index) => {
                        return (jsxRuntime.jsx(dnd.Draggable, { draggableId: item.title, index: index, children: (provided) => (jsxRuntime.jsxs(ContainerCard$1, { ref: provided.innerRef, ...provided.draggableProps, children: [jsxRuntime.jsxs(Thumbnails$2, { ref: provided.innerRef, ...provided.draggableProps, ...provided.dragHandleProps, children: [jsxRuntime.jsx(VectorEllipse$1, {}), jsxRuntime.jsx(VectorEllipse$1, {}), jsxRuntime.jsx(VectorEllipse$1, {}), jsxRuntime.jsx(VectorEllipse$1, {}), jsxRuntime.jsx(VectorEllipse$1, {}), jsxRuntime.jsx(VectorEllipse$1, {}), jsxRuntime.jsx(VectorEllipse$1, {}), jsxRuntime.jsx(VectorEllipse$1, {}), jsxRuntime.jsx(VectorEllipse$1, {}), jsxRuntime.jsx(VectorEllipse$1, {}), jsxRuntime.jsx(VectorEllipse$1, {}), jsxRuntime.jsx(VectorEllipse$1, {})] }), jsxRuntime.jsxs(Thumbnails$2, { ref: provided.innerRef, ...provided.draggableProps, ...provided.dragHandleProps, children: [jsxRuntime.jsx(VectorEllipse$1, {}), jsxRuntime.jsx(VectorEllipse$1, {}), jsxRuntime.jsx(VectorEllipse$1, {}), jsxRuntime.jsx(VectorEllipse$1, {}), jsxRuntime.jsx(VectorEllipse$1, {}), jsxRuntime.jsx(VectorEllipse$1, {}), jsxRuntime.jsx(VectorEllipse$1, {}), jsxRuntime.jsx(VectorEllipse$1, {}), jsxRuntime.jsx(VectorEllipse$1, {}), jsxRuntime.jsx(VectorEllipse$1, {}), jsxRuntime.jsx(VectorEllipse$1, {}), jsxRuntime.jsx(VectorEllipse$1, {})] }), jsxRuntime.jsxs(Thumbnails$2, { ref: provided.innerRef, ...provided.draggableProps, ...provided.dragHandleProps, children: [jsxRuntime.jsx(VectorEllipse$1, {}), jsxRuntime.jsx(VectorEllipse$1, {}), jsxRuntime.jsx(VectorEllipse$1, {}), jsxRuntime.jsx(VectorEllipse$1, {}), jsxRuntime.jsx(VectorEllipse$1, {}), jsxRuntime.jsx(VectorEllipse$1, {}), jsxRuntime.jsx(VectorEllipse$1, {}), jsxRuntime.jsx(VectorEllipse$1, {}), jsxRuntime.jsx(VectorEllipse$1, {}), jsxRuntime.jsx(VectorEllipse$1, {}), jsxRuntime.jsx(VectorEllipse$1, {}), jsxRuntime.jsx(VectorEllipse$1, {})] }), jsxRuntime.jsxs("div", { onClick: () => { handleClick(item); }, style: { display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100%', cursor: 'pointer' }, children: [iconList[item.type], jsxRuntime.jsx(Title$2, { children: item.title })] }), jsxRuntime.jsx(IconTrash, { className: "trash", onClick: () => { removeContentList(item); }, children: jsxRuntime.jsx(TrashIcon, { fill: '#C00F00' }) })] })) }, index));
                    }) })) }) }));
    }
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: variant === 'individualCourse' ? (jsxRuntime.jsxs("div", { children: [jsxRuntime.jsxs(Container$a, { className: (variant = 'individualCourse'), children: [jsxRuntime.jsx(Image$3, { src: src || defaultImg }), jsxRuntime.jsxs(Content$1, { children: [jsxRuntime.jsx(Typography$3, { children: title }), jsxRuntime.jsx(Select$1, { onClick: change, children: up ? jsxRuntime.jsx(VectorUp$1, {}) : jsxRuntime.jsx(VectorDown$1, {}) })] })] }), jsxRuntime.jsx("div", { children: up ? (jsxRuntime.jsx(Exibir, {})) : null })] })) : variant === 'trilha' ? (jsxRuntime.jsxs("div", { children: [jsxRuntime.jsxs(ContainerTrilha, { className: (variant = 'trilha'), children: [jsxRuntime.jsxs(ContainerChoice, { children: [jsxRuntime.jsx(TypographyChoice, { children: "Escolha o curso que deseja editar" }), jsxRuntime.jsx(SelectChoice, { placeholder: title, value: title, onChange: onChange, children: jsxRuntime.jsx(OptionChoice, { value: title, children: title }) })] }), jsxRuntime.jsx(ImageChoice, { src: src || defaultImg }), jsxRuntime.jsxs(ContentChoice, { children: [jsxRuntime.jsx(Typography$3, { children: title }), jsxRuntime.jsx(Select$1, { onClick: change, children: up ? jsxRuntime.jsx(VectorUp$1, {}) : jsxRuntime.jsx(VectorDown$1, {}) })] })] }), up ? (jsxRuntime.jsx("div", { style: { backgroundColor: '#D1D5DB', width: 270 }, children: jsxRuntime.jsx(Exibir, {}) })) : null] })) : null }));
}

const LandscapeContainer = styled__default["default"].label `
    width: 544px;
    height: 240px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.neutralsGrey7};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-sizing: border-box;
    position: relative;
    object-fit: cover;
    border: none; 
    
    & input{
        display: none;
    }
`;
const PortraitContainer = styled__default["default"].label `
    width: 180px;
    height: 240px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.neutralsGrey7};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-sizing: border-box;
    object-fit: cover;
    border: none; 
    
    & input{
        display: none;
    }
`;
const UploadCam = styled__default["default"].div `
    width: 48px;
    height: 47.02px;
    background-color: ${({ theme }) => theme.colors.neutralsGrey4};
    border-radius: 50px; 
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: visible;      
`;
const TextFileUpload = styled__default["default"].div `
    margin-top: 95px;
    font: 'PT Sans';
    font-weight: 700;
    font-size: 16px;  
    line-height: 21px;  
    color: ${({ theme }) => theme.colors.neutralsGrey4};
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;   
`;
const ImgLandscape = styled__default["default"].img `
    width: 544px;
    height: 240px;
    border-radius: 8px;    
    position: absolute;
    object-fit: cover; 
    color: ${({ theme }) => theme.colors.neutralsGrey4};

    .oculto {
        visibility: hidden;
    }
`;
const ImgPortrait = styled__default["default"].img `
    width: 180px;
    height: 240px;
    border-radius: 8px;    
    position: absolute;
    object-fit: cover; 
    color: ${({ theme }) => theme.colors.neutralsGrey4};

    .oculto {
        visibility: hidden;
    }
`;

function FileUpload({ variant, src, alt, disabled, startIcon, style, handleClick, selectedFile }) {
    const [uploadFile, setUploadFile] = React.useState({});
    const handleFileSelected = (file) => {
        setUploadFile(file);
        selectedFile([selectedFile]);
    };
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: variant === 'landscape' ?
            jsxRuntime.jsxs(LandscapeContainer, { style: { ...style }, className: variant = 'landscape', htmlFor: 'fileSelector', children: [jsxRuntime.jsx("input", { type: "file", id: 'fileSelector', accept: '.jpg, .jpeg, .png', onChange: (e) => handleFileSelected(e.target.files[0]) }), jsxRuntime.jsx(ImgLandscape, { src: src, alt: alt }), jsxRuntime.jsx(UploadCam, { className: 'oculto', children: startIcon }), jsxRuntime.jsxs(TextFileUpload, { children: [jsxRuntime.jsx("p", { children: "Clique para" }), jsxRuntime.jsx("p", { children: "adicionar imagem" })] })] })
            : variant === 'portrait' ?
                jsxRuntime.jsxs(PortraitContainer, { style: { ...style }, className: variant = 'portrait', htmlFor: 'fileSelector', children: [jsxRuntime.jsx("input", { type: "file", id: 'fileSelector', accept: '.jpg, .jpeg, .png', onChange: (e) => handleFileSelected(e.target.files[0]) }), jsxRuntime.jsx(ImgPortrait, { src: src, alt: alt }), jsxRuntime.jsx(UploadCam, { className: 'oculto', children: startIcon }), jsxRuntime.jsxs(TextFileUpload, { children: [jsxRuntime.jsx("p", { children: "Clique para" }), jsxRuntime.jsx("p", { children: "adicionar imagem" })] })] })
                : null }));
}

const ProgressContainer = styled__default["default"].div `
  display: flex;
  flex-direction: column;
  color: #fff;
  span {
    margin-bottom: 0.3rem;
  }
`;
const ValueAndProgress = styled__default["default"].div `
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const BorderLinearProgress = styled__default["default"](LinearProgress__default["default"]) `
  width: 100%;
  height: 8px !important;
  border-radius: 8px;
  background: rgba(255, 77, 13, 0.3) !important;

  .MuiLinearProgress-bar {
    background: #ff4d0d !important;
  }
`;

function ProgressBar$1({ value, label, style }) {
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsxs(ProgressContainer, { style: style, children: [jsxRuntime.jsx("span", { children: label }), jsxRuntime.jsxs(ValueAndProgress, { children: [jsxRuntime.jsx(BorderLinearProgress, { variant: "determinate", value: value }), " \u00A0", value + '%'] })] }) }));
}

const Container$9 = styled__default["default"].div `
  display: flex;
  position: relative;
`;
const HeaderImage$1 = styled__default["default"].div `
  display: flex;
  justify-content: flex-start;
  height: 200;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
  color: #fff;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  
  ${(props) => props.tmnDescription < 164 &&
    styled.css `
      section {
        visibility: hidden;
      }
    `}
  @media (max-width: 834px) {
    height: 450px;
    ${(props) => props.tmnDescription >= 134 &&
    styled.css `
        section {
          visibility: inherit;
        }
      `}
  }

  ${(props) => props.onDisplay ?
    styled.css ` width: 100%;`
    :
        styled.css ` width: 0px;`}

  @media (max-width: 414px) {
    height: 450px;
  }
  @media (max-width: 320px) {
    height: 450px;
  }
`;
const Content = styled__default["default"].div `
  width: 100%;
  height: 450px;
  padding: 64px;
  background: linear-gradient(52deg, #111111 0%, rgba(17, 17, 17, 0) 100%);
  
  ${(props) => !props.onDisplay &&
    styled.css ` display: none;`}

  @media (max-width: 414px) {
    padding: 2rem;
  }
`;
const ListCounters = styled__default["default"].div `
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;

  position: absolute;
  margin-bottom: 36px;
  bottom: 0;
  right: 50%;

`;
const Counters = styled__default["default"].button `
  width: 16px;
  height: 16px;
  box-sizing: border-box;
  border-radius: 100%;
  border: none;
  background-color: ${({ selected, theme }) => selected ? theme.colors.primary1 : theme.colors.neutralsGrey5};
`;
const Title$1 = styled__default["default"].div `
  font-size: 40px;
  font-weight: 700;
  max-width: 40rem;
  @media (max-width: 320px) {
    word-break: break-word;
    font-size: 25px;
  }
`;
const Description$1 = styled__default["default"].div `
  font-size: 16px;
  font-weight: 400;
  margin-top: 32px;
  max-width: 44rem;
  height: fit-content;
  ${(props) => !props.zeroHeigthDescription &&
    styled.css `
      height: 2.4rem;
    `}
  overflow: hidden;
  transition: all 0.9s ease-in-out;
  display: -webkit-box;

  @media (max-width: 834px) {
    max-width: 34rem;
    ${(props) => !props.zeroHeigthDescription &&
    styled.css `
        height: 2.4rem;
      `}
  }

  @media (max-width: 414px) {
    word-break: break-word;
    ${(props) => !props.zeroHeigthDescription &&
    styled.css `
        height: 2.4rem;
      `}
  }
  @media (max-width: 320px) {
    font-size: 12px;
    ${(props) => !props.zeroHeigthDescription &&
    styled.css `
        height: 2.4rem;
      `}
  }
`;
const SpaceProgressAndButton = styled__default["default"].div `
  margin-top: 68px;
  display: flex;
  height: 50px;
  gap: 28px;
  align-items: center;
  margin-bottom: 2rem;
  cursor: pointer;
  @media (max-width: 414px) {
    flex-direction: column;
    margin-top: 40px;
  }
  @media (max-width: 320px) {
    font-size: 14px;
  }
`;
styled__default["default"].div `
  margin-left: 24px;
  margin-bottom: 2rem;

  @media (max-width: 414px) {
    margin-left: 0;
    margin-top: 1rem;
  }
  button {
    @media (max-width: 320px) {
      font-size: 14px;
    }
  }
`;
const SpaceButtonTop = styled__default["default"].div `
  margin-top: 48px;
  margin-bottom: 2rem;
  button {
    @media (max-width: 320px) {
      font-size: 14px;
    }
  }
`;
const SpaceButtonTopViewMore = styled__default["default"].section `
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  cursor: pointer;
  svg {
    rotate: 269deg;
    margin-top: 0.2rem;
    margin-left: 0.5rem;
    ${(props) => !props.zeroHeigthDescription
    ? styled.css `
            transform: rotate(3.142rad);
            transition: transform 0.5s;
          `
    : styled.css `
            transform: rotate(360deg);
            transition: transform 0.5s;
          `}
  }
  a {
    color: #649af3;
    font-weight: 700;
  }
`;

function HeaderContent(props) {
    const [selectedContent, setSelectedContent] = React.useState(0);
    const [zeroHeigthDescription, setzeroHeigthDescription] = React.useState(false);
    const [textView, setTextView] = React.useState(props.textViewMore);
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setSelectedContent(selectedContent < (props.listaRecomendacao.length - 1) ? selectedContent + 1 : 0);
            setzeroHeigthDescription(false);
            setTextView(props.textViewMore);
        }, props.autoplayTime ? props.autoplayTime : 10000);
        return () => clearTimeout(timer);
    }, [selectedContent]);
    function addHeigthDescription() {
        if (zeroHeigthDescription) {
            setzeroHeigthDescription(false);
            setTextView(props.textViewMore);
        }
        else if (!zeroHeigthDescription) {
            setzeroHeigthDescription(true);
            setTextView(props.textViewLess);
        }
    }
    function RecomendationHeader(item) {
        return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(Title$1, { children: item.title }), jsxRuntime.jsx(Description$1, { zeroHeigthDescription: zeroHeigthDescription, children: item.description }), jsxRuntime.jsxs(SpaceButtonTopViewMore, { zeroHeigthDescription: zeroHeigthDescription, onClick: addHeigthDescription, children: [jsxRuntime.jsx(Button$3, { label: textView, variant: "link", style: { color: '#649AF3', fontWeight: '900' } }), jsxRuntime.jsx(ArrowScrollRight, { fill: "#649AF3", width: "13px", height: "13px", strokeWidth: '4' })] }), jsxRuntime.jsx(SpaceButtonTop, { onClick: item.onClick, children: jsxRuntime.jsx(Button$3, { label: item.labelButton, variant: "primary" }) })] }));
    }
    function InProgressHeader(item) {
        return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(Title$1, { children: item.title }), jsxRuntime.jsx(Description$1, { zeroHeigthDescription: zeroHeigthDescription, children: item.description }), jsxRuntime.jsxs(SpaceButtonTopViewMore, { zeroHeigthDescription: zeroHeigthDescription, onClick: addHeigthDescription, children: [jsxRuntime.jsx(Button$3, { label: textView, variant: "link", style: { color: '#649AF3', fontWeight: '900' } }), jsxRuntime.jsx(ArrowScrollRight, { fill: "#649AF3", width: "13px", height: "13px", strokeWidth: '4' })] }), jsxRuntime.jsxs(SpaceProgressAndButton, { children: [jsxRuntime.jsx(ProgressBar$1, { value: item.progresso, label: item.channel, style: { width: 200 } }), jsxRuntime.jsx(Button$3, { label: item.labelButton, variant: "primary", handleClick: item.onClick })] })] }));
    }
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsxs(Container$9, { style: { ...props.style }, children: [props.listaRecomendacao.map((item, index) => {
                    return (jsxRuntime.jsx(HeaderImage$1, { img: item.bgImg, tmnDescription: item.description.length, onDisplay: index === selectedContent, style: { ...props.style }, children: jsxRuntime.jsx(jsxRuntime.Fragment, { children: item.typeOfHeader === 'inProgress' ? (jsxRuntime.jsx(Content, { onDisplay: index === selectedContent, children: InProgressHeader(item) })) : (jsxRuntime.jsx(Content, { onDisplay: index === selectedContent, children: RecomendationHeader(item) })) }) }, index));
                }), jsxRuntime.jsx(ListCounters, { children: Array.from({ length: props.listaRecomendacao.length }).map((_, index) => jsxRuntime.jsx(Counters, { selected: index === selectedContent, onClick: () => setSelectedContent(index) }, index)) })] }) }));
}

const RectangleUpLeft = styled__default["default"].div `
    width: 13.64px;
    height: 13.64px;
    position: absolute;
    margin: -7px 0 32px 27px;
    left: 0;
    top: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey4};
    border-bottom: none;
    border-right: none;
    transform: matrix(0.71, 0.97, -0.51, 0.91, 0, 0);

    ${({ variant }) => (variant)}
`;
const RectangleUpRight = styled__default["default"].div `
    width: 13.64px;
    height: 13.64px;
    position: absolute;
    right: 0;
    top: 0;
    margin: -15px 16px 0 27px;}
`;
const RectangleLowRight = styled__default["default"].div `
    width: 13.64px;
    height: 13.64px;
    position: absolute;
    margin: 27px 32px -7px 0px;
    right: 0;
    bottom: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey4};
    border-left: none;   
    border-top: none;
    transform: matrix(0.71, 0.97, -0.51, 0.91, 0, 0);
    
    ${({ variant }) => (variant)}
`;
const RectangleLowLeft = styled__default["default"].div `
    width: 13.64px;
    height: 13.64px;
    position: absolute;
    margin: 27px 0 -7px 32px;
    left: 0;
    bottom: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey4};
    border-left: none;   
    border-top: none;
    transform: matrix(0.71, 0.97, -0.51, 0.91, 0, 0);
    
    ${({ variant }) => (variant)}
`;
const RectangleLowCenter = styled__default["default"].div `
    width: 13.64px;
    height: 13.64px;
    position: absolute;
    margin: 27px 0 -7px calc(50% - 7px);
    left: 0;
    bottom: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey4};
    border-left: none;   
    border-top: none;
    transform: matrix(0.71, 0.97, -0.51, 0.91, 0, 0);
    
    ${({ variant }) => (variant)}
`;
const RectangleLeft = styled__default["default"].div `
    width: 13.64px;
    height: 13.64px;
    position: absolute;
    margin: 39px 0px 32px -7px;
    left: 0;
    bottom: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey4};
    border-right: none;
    border-bottom: none;
    transform: matrix(0.91, -0.51, 0.91, 0.61, 0, 0);    
    
    ${({ variant }) => (variant)}
`;
const RectangleRight = styled__default["default"].div `
    width: 13.64px;
    height: 13.64px;
    position: absolute;
    margin: 39px -7px 13px 0;
    right: 0;
    bottom: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey4};
    border-left: none;   
    border-top: none;
    transform: matrix(0.91, -0.51, 0.91, 0.61, 0, 0);    
    
    ${({ variant }) => (variant)}
`;
const PopOver$1 = styled__default["default"].div `
    z-index: 999;
    width: 100%;
    min-height: 31px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey4};
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    box-shadow: 0px 18px 20px -15px #222222;
    position: relative;
    padding: 8px;
`;
styled__default["default"].div `
    width: 100%;
    min-height: 67px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey4};
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    box-shadow: 0px 18px 40px -15px #d3d3d3;
    position: relative;
    margin: 0% 0% 0% 0%;
    padding: 8px;    
`;

const ArrowPopover = () => {
    return (jsxRuntime.jsxs("svg", { width: "17", height: "12", viewBox: "0 0 17 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M8.5 1L1 11.5H8.5H16L8.5 1Z", fill: "white", stroke: "#BDBDBD" }), jsxRuntime.jsx("path", { d: "M1.21997 12L2.33 10.5H14.67L15.75 12H1.21997Z", fill: "white" })] }));
};
function PopOverItem(props) {
    return (jsxRuntime.jsxs("div", { style: {
            width: '100%',
            padding: 8,
            margin: 0,
            fontSize: 16,
            borderBottom: props.noBorder ? 'none' : '1px solid #EBEBEB',
            display: 'flex',
            flexDirection: 'row',
            gap: 8,
            fontFamily: 'PT Sans',
            cursor: 'pointer',
            color: props.color ? props.color : '#000000',
            fontWeight: props.isFontBold ? '700' : 'normal'
        }, onClick: props.onClick, children: [props.icon, props.label] }));
}
function PopOver({ variant, children, element, onClosePopover, anchorOrigin, transformOrigin }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    React.useState('');
    const [AnchorHorizontal, setAnchorHorizontal] = React.useState(anchorOrigin ? anchorOrigin : { vertical: 'bottom', horizontal: 'right' });
    const [TransformVertical, setTransformVertical] = React.useState(transformOrigin ? transformOrigin : { vertical: 'top', horizontal: 'right' });
    React.useState('');
    React.useEffect(() => {
        setAnchorEl(element);
    }, [element]);
    const handleClose = () => {
        setAnchorEl(null);
        onClosePopover();
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsx(Popover__default["default"], { id: id, open: open, anchorEl: anchorEl, onClose: handleClose, anchorOrigin: AnchorHorizontal, transformOrigin: TransformVertical, PaperProps: {
                style: {
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    borderRadius: 8,
                }
            }, style: {
                borderRadius: 8
            }, children: jsxRuntime.jsx("div", { style: { marginTop: variant.search('up') === -1 ? 0 : 12, marginBottom: variant.search('low') === -1 ? 0 : 20 }, children: jsxRuntime.jsxs(PopOver$1, { children: [variant === 'upLeft' ?
                            jsxRuntime.jsx(RectangleUpLeft, { variant: variant = 'upLeft' })
                            : variant === 'upRight' ?
                                jsxRuntime.jsx(RectangleUpRight, { variant: variant = 'upRight', children: jsxRuntime.jsx(ArrowPopover, {}) })
                                : variant === 'lowRight' ?
                                    jsxRuntime.jsx(RectangleLowRight, { variant: variant = 'lowRight' })
                                    : variant === 'lowLeft' ?
                                        jsxRuntime.jsx(RectangleLowLeft, { variant: variant = 'lowLeft' })
                                        : variant === 'lowCenter' ?
                                            jsxRuntime.jsx(RectangleLowCenter, { variant: variant = 'lowCenter' })
                                            : variant === 'sideLeft' ?
                                                jsxRuntime.jsx(RectangleLeft, { variant: variant = 'sideLeft' })
                                                : variant === 'sideRight' ?
                                                    jsxRuntime.jsx(RectangleRight, { variant: variant = 'sideRight' })
                                                    : null, jsxRuntime.jsx("div", { style: { zIndex: 9 }, children: children })] }) }) }) }));
}

const Container$8 = styled__default["default"].div `
  display: grid;
  grid-template-columns: 0.11fr 1fr;
  height: 120px;
  position: relative;
  gap: 16px;
  cursor: pointer;
  box-sizing: border-box;
`;
const TextContainer = styled__default["default"].div `
  display: flex;
  flex-direction: column;
  position: relative;
`;
const Image$2 = styled__default["default"].div `
  border-radius: 8px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
const Title = styled__default["default"].p `
  
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.linkOnfocus};
  font-size: 16px;
  font-weight: 700;
`;
const Description = styled__default["default"].p `
  
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.neutralsGrey3};
  display: -webkit-box;
  -webkit-line-clamp: 4; /** número de linhas que você quer exibir */
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
const skillSets = styled__default["default"].div `
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  gap: 8px;
  box-sizing: border-box;
  position: absolute;
  bottom: -20px;
  
  font-family: 'PT Sans';
  font-weight: 400;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutralsGrey3};
`;
const skillTag = styled__default["default"].div `
  display: flex;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.shadeWhite};
  background-color: ${({ theme }) => theme.colors.secondary1};
  padding: 2px 4px;
`;

function SearchResults({ src, title, description, textSkills, skills, style, onClick }) {
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsxs(Container$8, { onClick: onClick, style: { ...style }, children: [jsxRuntime.jsx(Image$2, { style: { backgroundImage: `url(${src})` } }), jsxRuntime.jsxs(TextContainer, { children: [jsxRuntime.jsxs(Title, { children: [" ", title, " "] }), jsxRuntime.jsxs(Description, { children: [" ", description, " "] }), skills ?
                            jsxRuntime.jsxs(skillSets, { children: [textSkills, ":", skills.map(item => {
                                        return (jsxRuntime.jsx(skillTag, { children: item }));
                                    })] })
                            : null] })] }) }));
}

const WrapperCard$5 = styled__default["default"].div `
    width: 244px;
    min-height: 31px;
    display: flex;
    justify-content: center;
    align-items: center;

    
`;

function StarMetric({ disabled, onChange }) {
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsx(WrapperCard$5, { children: jsxRuntime.jsxs(Box__default["default"], { children: [jsxRuntime.jsx(Typography__default["default"], { component: "legend" }), jsxRuntime.jsx(Rating__default["default"], { disabled: disabled ? disabled : false, onChange: (e) => { onChange(); } })] }) }) }));
}

var css_248z$3 = ".calendarLxp-module_containerCalendar__rGMXM {\n    display: flex;\n    position: relative;\n    width: fit-content;\n    min-height: 550px;\n    border-radius: 8px;\n    background-color: #FFF;\n}\n\n.calendarLxp-module_fechar__B-og5{\n    font-size: 12px;\n    color: #222222;\n\n    display: flex;\n    justify-content: right;\n    align-items: center;\n    position: absolute;\n    top: 0;\n    right: 0;\n\n    margin-right: 24px;\n    margin-top: 24px;\n    cursor: default;\n    \n}\n\n.calendarLxp-module_calendar__-C-pK {\n    padding: 32px;\n    display: inline-flex;\n    \n}\n\n.calendarLxp-module_btnSubmit__A-5NS {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    margin-right: 24px;\n    margin-bottom: 24px;\n}\n";
var style$2 = {"containerCalendar":"calendarLxp-module_containerCalendar__rGMXM","fechar":"calendarLxp-module_fechar__B-og5","calendar":"calendarLxp-module_calendar__-C-pK","btnSubmit":"calendarLxp-module_btnSubmit__A-5NS"};
styleInject(css_248z$3);

var css_248z$2 = ".rdrCalendarWrapper{\n  color: #000000;\n  font-size: 16px;\n  font-family: 'PT Sans';\n}\n\n.rdrDateDisplayWrapper{\n  background-color: rgb(239, 242, 247);\n}\n\n.rdrDateDisplay{\n  margin: 0.833em;\n}\n\n.rdrDateDisplayItem{\n  border-radius: 4px;\n  background-color: rgb(255, 255, 255);\n  box-shadow: 0 1px 2px 0 rgba(35, 57, 66, 0.21);\n  border: 1px solid transparent;\n}\n\n.rdrDateDisplayItem input{\n    cursor: pointer;\n    height: 2.5em;\n    line-height: 2.5em;\n    border: 0px;\n    background: transparent;\n    width: 100%;\n    color: #222222;\n  }\n\n.rdrDateDisplayItemActive{\n  border-color: currentColor;\n}\n\n.rdrDateDisplayItemActive input{\n    color: #7d888d\n  }\n\n.rdrMonthAndYearWrapper {\n  align-items: center;\n  height: 60px;\n  padding-top: 10px;\n}\n\n.rdrMonthAndYearPickers{\n  font-weight: 600;\n}\n\n.rdrMonthAndYearPickers select{\n    -moz-appearance: none;\n         appearance: none;\n    -webkit-appearance: none;\n    border: 0;\n    background: transparent;\n    padding: 10px 30px 10px 10px;\n    border-radius: 4px;\n    outline: 0;\n    color: #FF4D0D;\n    background: url(\"data:image/svg+xml;utf8,<svg width='9px' height='6px' viewBox='0 0 9 6' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g id='Artboard' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' transform='translate(-636.000000, -171.000000)' fill-opacity='0.368716033'><g id='input' transform='translate(172.000000, 37.000000)' fill='%230E242F' fill-rule='nonzero'><g id='Group-9' transform='translate(323.000000, 127.000000)'><path d='M142.280245,7.23952813 C141.987305,6.92353472 141.512432,6.92361662 141.219585,7.23971106 C140.926739,7.5558055 140.926815,8.06821394 141.219755,8.38420735 L145.498801,13 L149.780245,8.38162071 C150.073185,8.0656273 150.073261,7.55321886 149.780415,7.23712442 C149.487568,6.92102998 149.012695,6.92094808 148.719755,7.23694149 L145.498801,10.7113732 L142.280245,7.23952813 Z' id='arrow'></path></g></g></g></svg>\") no-repeat;\n    background-position: right 8px center;\n    cursor: pointer;\n    text-align: center;\n    display: none;\n  }\n\n.rdrMonthAndYearPickers select:hover{\n      background-color: rgba(187, 22, 22, 0.07);\n    }\n\n.rdrMonthPicker, .rdrYearPicker{\n  margin: 0 5px\n}\n\n.rdrNextPrevButton {\n  display: block;\n  width: 24px;\n  height: 24px;\n  margin: 0 0.833em;\n  padding: 0;\n  border: 0;\n  border-radius: 5px;\n  background: #EFF2F7\n}\n\n.rdrNextPrevButton:hover{\n    background: #E1E7F0;\n  }\n\n.rdrNextPrevButton i {\n    display: block;\n    width: 0;\n    height: 0;\n    padding: 0;\n    text-align: center;\n    border-style: solid;\n    margin: auto;\n    transform: translate(-3px, 0px);\n  }\n\n.rdrPprevButton i {\n    border-width: 4px 6px 4px 4px;\n    border-color: transparent rgb(52, 73, 94) transparent transparent;\n    transform: translate(-3px, 0px);\n  }\n\n.rdrNextButton i {\n    margin: 0 0 0 7px;\n    border-width: 4px 4px 4px 6px;\n    border-color: transparent transparent transparent rgb(52, 73, 94);\n    transform: translate(3px, 0px);\n  }\n\n.rdrWeekDays {\n  padding: 0 0.833em;\n}\n\n.rdrMonth{\n  padding: 0 0.833em 1.666em 0.833em;\n}\n\n.rdrMonth .rdrWeekDays {\n    padding: 0;\n  }\n\n.rdrMonths.rdrMonthsVertical .rdrMonth:first-child .rdrMonthName{\n  display: none;\n}\n\n.rdrWeekDay {\n  font-weight: 400;\n  line-height: 2.667em;\n  color: #FF4D0D;\n}\n\n.rdrDay {\n  background: transparent;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border: 0;\n  padding: 0;\n  line-height: 3.000em;\n  height: 3.000em;\n  text-align: center;\n  color: #1d2429;\n}\n\n.rdrDay:focus {\n    outline: 0;\n  }\n\n.rdrDayNumber {\n  outline: 0;\n  font-weight: 300;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  top: 5px;\n  bottom: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.rdrDayToday .rdrDayNumber span{\n  font-weight: 500\n}\n\n.rdrDayToday:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span:after,.rdrDayToday:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span:after,.rdrDayToday:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span:after,.rdrDayToday:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span:after{\n      background: #fff;\n    }\n\n.rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span,.rdrDay:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span,.rdrDay:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span,.rdrDay:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span{\n          color: rgba(255, 255, 255, 0.85);\n        }\n\n.rdrSelected, .rdrInRange, .rdrStartEdge, .rdrEndEdge{\n  background: currentColor;\n  position: absolute;\n  top: 5px;\n  left: 0;\n  right: 0;\n  bottom: 5px;\n}\n\n.rdrSelected{\n  left: 2px;\n  right: 2px;\n}\n\n\n.rdrStartEdge{\n  border-top-left-radius: 1.042em;\n  border-bottom-left-radius: 1.042em;\n  left: 2px;\n}\n\n.rdrEndEdge{\n  border-top-right-radius: 1.042em;\n  border-bottom-right-radius: 1.042em;\n  right: 2px;\n}\n\n.rdrSelected{\n  border-radius: 1.042em;\n}\n\n.rdrDayStartOfMonth .rdrInRange, .rdrDayStartOfMonth .rdrEndEdge, .rdrDayStartOfWeek .rdrInRange, .rdrDayStartOfWeek .rdrEndEdge{\n    border-top-left-radius: 1.042em;\n    border-bottom-left-radius: 1.042em;\n    left: 2px;\n  }\n\n.rdrDayEndOfMonth .rdrInRange,  .rdrDayEndOfMonth .rdrStartEdge,  .rdrDayEndOfWeek .rdrInRange,  .rdrDayEndOfWeek .rdrStartEdge{\n    border-top-right-radius: 1.042em;\n    border-bottom-right-radius: 1.042em;\n    right: 2px;\n  }\n\n.rdrDayStartOfMonth .rdrDayInPreview, .rdrDayStartOfMonth .rdrDayEndPreview, .rdrDayStartOfWeek .rdrDayInPreview, .rdrDayStartOfWeek .rdrDayEndPreview{\n    border-top-left-radius: 1.333em;\n    border-bottom-left-radius: 1.333em;\n    border-left-width: 1px;\n    left: 0px;\n  }\n\n.rdrDayEndOfMonth .rdrDayInPreview, .rdrDayEndOfMonth .rdrDayStartPreview, .rdrDayEndOfWeek .rdrDayInPreview, .rdrDayEndOfWeek .rdrDayStartPreview{\n   border-top-right-radius: 1.333em;\n   border-bottom-right-radius: 1.333em;\n   border-right-width: 1px;\n   right: 0px;\n }\n\n.rdrDayStartPreview, .rdrDayInPreview, .rdrDayEndPreview{\n  background: rgba(255, 255, 255, 0.09);\n  position: absolute;\n  top: 3px;\n  left: 0px;\n  right: 0px;\n  bottom: 3px;\n  pointer-events: none;\n  border: 0px solid currentColor;\n  z-index: 1;\n}\n\n.rdrDayStartPreview{\n  border-top-width: 1px;\n  border-left-width: 1px;\n  border-bottom-width: 1px;\n  border-top-left-radius: 1.333em;\n  border-bottom-left-radius: 1.333em;\n  left: 0px;\n}\n\n.rdrDayInPreview{\n  border-top-width: 1px;\n  border-bottom-width: 1px;\n}\n\n.rdrDayEndPreview{\n  border-top-width: 1px;\n  border-right-width: 1px;\n  border-bottom-width: 1px;\n  border-top-right-radius: 1.333em;\n  border-bottom-right-radius: 1.333em;\n  right: 2px;\n  right: 0px;\n}\n\n.rdrDefinedRangesWrapper{\n  font-size: 12px;\n  width: 226px;\n  border-right: solid 1px #eff2f7;\n  background: #fff;\n}\n\n.rdrDefinedRangesWrapper .rdrStaticRangeSelected{\n    color: currentColor;\n    font-weight: 600;\n  }\n\n.rdrStaticRange{\n  border: 0;\n  cursor: pointer;\n  display: block;\n  outline: 0;\n  border-bottom: 1px solid #eff2f7;\n  padding: 0;\n  background: #fff\n}\n\n.rdrStaticRange:hover .rdrStaticRangeLabel,.rdrStaticRange:focus .rdrStaticRangeLabel{\n      background: #eff2f7;\n    }\n\n.rdrStaticRangeLabel{\n  display: block;\n  outline: 0;\n  line-height: 18px;\n  padding: 10px 20px;\n  text-align: left;\n}\n\n.rdrInputRanges{\n  padding: 10px 0;\n}\n\n.rdrInputRange{\n  align-items: center;\n  padding: 5px 20px;\n}\n\n.rdrInputRangeInput{\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  border-radius: 4px;\n  text-align: center;\n  border: solid 1px rgb(222, 231, 235);\n  margin-right: 10px;\n  color: rgb(108, 118, 122)\n}\n\n.rdrInputRangeInput:focus, .rdrInputRangeInput:hover{\n    border-color: rgb(180, 191, 196);\n    outline: 0;\n    color: #333;\n  }\n\n.rdrCalendarWrapper:not(.rdrDateRangeWrapper) .rdrDayHovered .rdrDayNumber:after{\n  content: '';\n  border: 1px solid currentColor;\n  border-radius: 1.333em;\n  position: absolute;\n  top: -2px;\n  bottom: -2px;\n  left: 0px;\n  right: 0px;\n  background: transparent;\n}\n\n.rdrDayPassive{\n  pointer-events: none;\n}\n\n.rdrDayPassive .rdrDayNumber span{\n    color: #AEB0B3;\n  }\n\n.rdrDayPassive .rdrInRange, .rdrDayPassive .rdrStartEdge, .rdrDayPassive .rdrEndEdge, .rdrDayPassive .rdrSelected, .rdrDayPassive .rdrDayStartPreview, .rdrDayPassive .rdrDayInPreview, .rdrDayPassive .rdrDayEndPreview{\n    display: none;\n  }\n\n.rdrDayDisabled {\n  background-color: rgb(248, 248, 248);\n}\n\n.rdrDayDisabled .rdrDayNumber span{\n    color: #aeb9bf;\n  }\n\n.rdrDayDisabled .rdrInRange, .rdrDayDisabled .rdrStartEdge, .rdrDayDisabled .rdrEndEdge, .rdrDayDisabled .rdrSelected, .rdrDayDisabled .rdrDayStartPreview, .rdrDayDisabled .rdrDayInPreview, .rdrDayDisabled .rdrDayEndPreview{\n    filter: grayscale(100%) opacity(60%);\n  }\n\n.rdrMonthName{\n  text-align: center;\n  font-weight: 700;\n  color: #FF4D0D;\n  padding: 0.833em;\n}\n";
styleInject(css_248z$2);

const defineds = {
    startOfWeek: dateFns.startOfWeek(new Date()),
    endOfWeek: dateFns.endOfWeek(new Date()),
    startOfLastWeek: dateFns.startOfWeek(dateFns.addDays(new Date(), -7)),
    endOfLastWeek: dateFns.endOfWeek(dateFns.addDays(new Date(), -7)),
    startOfToday: dateFns.startOfDay(new Date()),
    endOfToday: dateFns.endOfDay(new Date()),
    startOfYesterday: dateFns.startOfDay(dateFns.addDays(new Date(), -1)),
    endOfYesterday: dateFns.endOfDay(dateFns.addDays(new Date(), -1)),
    startOfMonth: dateFns.startOfMonth(new Date()),
    endOfMonth: dateFns.endOfMonth(new Date()),
    startOfLastMonth: dateFns.startOfMonth(dateFns.addMonths(new Date(), -1)),
    endOfLastMonth: dateFns.endOfMonth(dateFns.addMonths(new Date(), -1)),
    startOfQuarter: dateFns.startOfQuarter(new Date()),
    endOfQuarter: dateFns.endOfQuarter(new Date()),
    startOfLastQuarter: dateFns.startOfQuarter(dateFns.addQuarters(new Date(), -1)),
    endOfLastQuarter: dateFns.endOfQuarter(dateFns.addQuarters(new Date(), -1)),
    startOfYear: dateFns.startOfYear(new Date()),
    endOfYear: dateFns.endOfYear(new Date()),
};
const staticRangeHandler = {
    range: {},
    isSelected(range) {
        const definedRange = range;
        return (dateFns.isSameDay(range.startDate, definedRange.startDate) &&
            dateFns.isSameDay(range.endDate, definedRange.endDate));
    },
};
function createStaticRanges(ranges) {
    return ranges.map(range => ({ ...staticRangeHandler, ...range }));
}
const defaultStaticRanges = createStaticRanges([
    {
        label: 'Esta semana',
        range: () => ({
            startDate: defineds.startOfWeek,
            endDate: defineds.endOfWeek,
        }),
    },
    {
        label: 'Semana passada',
        range: () => ({
            startDate: defineds.startOfLastWeek,
            endDate: defineds.endOfLastWeek,
        }),
    },
    {
        label: 'Mês passado',
        range: () => ({
            startDate: defineds.startOfLastMonth,
            endDate: defineds.endOfLastMonth,
        }),
    },
    {
        label: 'Este trimestre',
        range: () => ({
            startDate: defineds.startOfQuarter,
            endDate: defineds.endOfQuarter
        }),
    },
    {
        label: 'Trimestre passado',
        range: () => ({
            startDate: defineds.startOfLastQuarter,
            endDate: defineds.endOfLastQuarter
        }),
    },
    {
        label: 'Este ano',
        range: () => ({
            startDate: defineds.startOfYear,
            endDate: defineds.endOfYear
        }),
    },
]);

function CalendarLxp(props) {
    const [newRange, setNewRange] = React.useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    locale.pt.options.weekStartsOn = 0;
    return (jsxRuntime.jsx(material.Modal, { open: props.open, onClose: props.handleClose, children: jsxRuntime.jsxs(material.Box, { className: style$2.containerCalendar, style: { ...props.styles }, children: [jsxRuntime.jsx("div", { className: style$2.fechar, onClick: props.handleClose, children: jsxRuntime.jsx(CloseIcon, {}) }), jsxRuntime.jsxs("div", { className: style$2.calendar, children: [jsxRuntime.jsx("div", { style: { fontSize: 16 }, children: jsxRuntime.jsx(reactDateRange.DefinedRange, { inputRanges: [], staticRanges: defaultStaticRanges, ranges: newRange, rangeColors: ['#0645AD'], onChange: item => setNewRange([item.selection]) }) }), jsxRuntime.jsx("div", { children: jsxRuntime.jsx(reactDateRange.DateRange, { locale: locale.pt, ranges: newRange, onChange: item => setNewRange([item.selection]), months: 2, direction: 'horizontal', rangeColors: ['#FF4D0D'], showDateDisplay: false, showPreview: false, weekdayDisplayFormat: 'EEEEE', preventSnapRefocus: true }) })] }), jsxRuntime.jsx("div", { className: style$2.btnSubmit, children: jsxRuntime.jsx(Button$3, { label: 'Aplicar', variant: 'primary', handleClick: () => {
                            props.onSave([newRange[0].startDate, newRange[0].endDate]);
                        } }) })] }) }));
}

const MenuContainer = styled__default["default"].div `
  width: 100%;
  height: 64px;

  background: ${({ theme }) => theme.colors.neutralsGrey1};

  display: flex;
  align-items: center;
  justify-content: space-between;
  & > button {
    height: 100%;
  }
`;
const WrapperLogo = styled__default["default"].div `
  margin-right: 65px;
  cursor: pointer;
`;
const HamburgerButton = styled__default["default"].div `
  cursor: pointer;
  display: flex;
  width: 48px;
  height: auto;
  margin-bottom: 10px;
  margin-right: 20px;
`;
const ArrowButton = styled__default["default"].div `
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: auto;
`;
const WrapperMenu = styled__default["default"].div `
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;
const WrapperRightInfo = styled__default["default"].div `
  height: 100%;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
const WrapperIconNotification = styled__default["default"].div `
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 150px;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
`;
const WrapperIconNotificationMobile = styled__default["default"].div `
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  margin-left: 24px;
  margin-right: 24px;
  height: 100%;
  color: #fff;
`;
const SubMenuContainer = styled__default["default"].div `
  width: 100%;
  height: 32px;
  ${(props) => props.marginTop &&
    styled.css `
      margin-top: 4rem;
    `}
  background: ${({ variant, theme }) => (variant == 'LXP' ? theme.colors.neutralsGrey2 : theme.colors.primary1)};

  padding-left: 124px;
  padding-right: 124px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const MenuMobile$1 = styled__default["default"].div `
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  z-index: 10001;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #222;
`;
const SideMenu$1 = styled__default["default"].div `
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  z-index: 10001;
  top: 0;
  left: 0;
  width: 360px;
  height: 100vh;
  background: #222;
`;
const ItemSideMenu = styled__default["default"].div `
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 360px;
  height: 20px;

  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  padding: 20px;

  color: #ffffff;

  border-bottom: 1px solid #444;

  &:hover {
    background: #4444;
  }
`;
const ItemMenuMobile = styled__default["default"].div `
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100vw;
  height: 20px;

  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  padding: 20px;

  color: #ffffff;

  border-bottom: 1px solid #444;

  &:hover {
    background: #4444;
  }
`;
const footerMenuMobile = styled__default["default"].div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${({ theme }) => theme.fonts.textMessageComponentsBodyRegular};
  color: ${({ theme }) => theme.colors.shadeWhite};
  border-color: ${({ theme }) => theme.colors.neutralsGrey3};
  margin-top: 0px;
`;
const frstSocials = styled__default["default"].div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 24px;
  margin-bottom: 32px;
`;
const itemFrstSocials = styled__default["default"].button `
  border: none;
  background: none;
  cursor: pointer;
`;

const Container$7 = styled__default["default"].div `
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
styled__default["default"].label `
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    margin-bottom: 16px;

    color: ${({ theme }) => theme.colors.shadeBlack};

    color: ${({ theme, isHover }) => isHover && theme.colors.linkOnfocus};
    
    color: ${({ isOnFocus }) => isOnFocus && '#663366'}    
`;
const ContainerIcon$1 = styled__default["default"].div `
    z-index: 10;
    cursor: pointer;
    min-height: 20px;
    min-width: 40px;
    padding-left: 15px;
    padding-right: 10px;
    padding-top: 3px;
`;
const InputSearchWrapper = styled__default["default"].div `
    height: 48px;
    background-color: ${({ isOnFocus }) => isOnFocus ? '#757575' : '#444'};

    border-radius: 8px;
    
    cursor: pointer;
    display: flex;
    align-items: center;
    width: ${({ isMobile }) => isMobile ? '0px !important' : 'auto'};
    border: ${({ isMobile }) => !isMobile ? '1px' : '0px'} solid ${({ isHover, theme }) => isHover ? theme.colors.shadeBlack : '#000'};  
    transition: width 1s ease-in-out;
`;
const InputText = styled__default["default"].input `
    margin-left:10px;
    display: flex;
    align-items: center;
    height: 48px;
    width: 100%;
    border: none;
    background: transparent;

    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: ${({ theme }) => theme.colors.shadeWhite};

    &::placeholder {
        font-family: 'PT Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: ${({ theme }) => theme.colors.shadeWhite};
    }

    &[disabled] {
        cursor: not-allowed;
    }
`;
const WrapperResults = styled__default["default"].div `
    position: absolute;
    top: 48px;
    display: ${({ isVisibleResults }) => isVisibleResults ? 'flex' : 'none'};
    height: auto;
    width: 100%;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.shadeWhite};
    border: 1px solid #BDBDBD;
    box-shadow: 0px 25px 18px -20px rgba(34, 34, 34, 0.2);
    z-index: 10000;
    overflow: hidden;
`;
const ItemResult = styled__default["default"].div `
        width: 100%;
        cursor: pointer;
        &:hover {
            background: ${({ theme }) => theme.colors.neutralsGrey9};
        }
    `;
const TextItem = styled__default["default"].span `
        font-family: 'PT Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;

        display: flex;
        align-items: center;
        gap: 8px;
        color: #000000;

        height: 42px;

        padding-left: 16px;
        margin-left: 5px;
        margin-right: 5px;
        border-bottom: 1px solid ${({ isLastItem, theme }) => isLastItem ? 'transparent' : theme.colors.neutralsGrey7};

    `;
const ItemSeeAll = styled__default["default"].div `
        width: 100%;
        display: flex;
        justify-content: center;   
        align-items: center;
        text-align: center;

        cursor: pointer;

        font-family: 'PT Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 21px;

        padding: 16px;
        color: ${({ theme }) => theme.colors.linkOnfocus};
        &:hover {
            background: ${({ theme }) => theme.colors.neutralsGrey9};
        }
    `;

function FieldSearch({ variant, placeholder, onChange, listResults, hasOptionSeeAll, value, seeAll, style, loading, textLoading, enableAnimationField, isMobileVersion, setFieldSearchIsOpen, fieldSearchIsOpen, onFilter, historicResults, labeledResultList, isLabeledResult }) {
    const [actionAreaInput, setActionAreaInput] = React.useState(false);
    const [inputOnFocus, setInputOnFocus] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(isMobileVersion);
    const [openSearchFieldMobile, setOpenSearchFieldMobile] = React.useState(fieldSearchIsOpen);
    const [isOpenDrop, setIsOpenDrop] = React.useState(false);
    const [ValueSearch, setValueSearch] = React.useState('');
    const [Loading, setLoading] = React.useState(loading);
    const [resultList, setResultList] = React.useState([]);
    React.useEffect(() => {
        if (listResults && listResults.length > 0) {
            setResultList(listResults);
            setIsOpenDrop(true);
        }
        if (labeledResultList && labeledResultList.length > 0) {
            setResultList(labeledResultList);
            setIsOpenDrop(true);
        }
    }, [listResults, labeledResultList]);
    React.useEffect(() => {
        setLoading(loading);
    }, [loading]);
    React.useEffect(() => {
        setFieldSearchIsOpen(openSearchFieldMobile);
    }, []);
    React.useEffect(() => {
        if (fieldSearchIsOpen !== openSearchFieldMobile)
            setOpenSearchFieldMobile(fieldSearchIsOpen);
    }, [fieldSearchIsOpen]);
    React.useEffect(() => {
        setIsOpenDrop(false);
        setFieldSearchIsOpen(openSearchFieldMobile);
    }, [openSearchFieldMobile]);
    // Handle Open list results
    const handleFocusUp = () => {
        setInputOnFocus(true);
        setIsOpenDrop(true);
        if (historicResults) {
            setIsOpenDrop(historicResults.length > 0);
        }
        else {
            setIsOpenDrop(ValueSearch && ValueSearch.length > 0 && resultList && resultList.length > 0);
        }
    };
    const handleFocusDown = () => {
        setIsOpenDrop(actionAreaInput);
    };
    React.useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            onFilter(ValueSearch);
            setIsOpenDrop(ValueSearch && ValueSearch.length > 0 && resultList && resultList.length > 0);
        }, 500);
        return () => clearTimeout(delayDebounceFn);
    }, [ValueSearch]);
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsx("div", { style: { position: 'relative' }, id: 'bar-search-global-menu', children: variant == 'LXP' ?
                jsxRuntime.jsxs(Container$7, { onMouseOver: () => setActionAreaInput(true), onMouseOut: () => setActionAreaInput(false), onFocus: () => handleFocusUp(), onBlur: () => handleFocusDown(), children: [jsxRuntime.jsxs(InputSearchWrapper, { isHover: actionAreaInput, isOnFocus: inputOnFocus, isMobile: !openSearchFieldMobile, style: { ...style }, children: [jsxRuntime.jsx(ContainerIcon$1, { onClick: () => isMobile && setOpenSearchFieldMobile(!openSearchFieldMobile), children: jsxRuntime.jsx(SearchIcon, { fill: '#fff' }) }), jsxRuntime.jsx(InputText, { placeholder: placeholder, onChange: (e) => {
                                        setIsOpenDrop(false);
                                        setValueSearch(e.target.value);
                                    }, value: ValueSearch })] }), Loading &&
                            jsxRuntime.jsx(WrapperResults, { style: { ...style, marginTop: 8 }, isVisibleResults: true, children: jsxRuntime.jsx(ItemResult, { style: { cursor: 'default' }, children: jsxRuntime.jsx(TextItem, { isLastItem: true, style: { color: '#999' }, children: textLoading ? textLoading : 'Carregando...' }) }) }), labeledResultList && labeledResultList.length > 0 && inputOnFocus && isLabeledResult &&
                            jsxRuntime.jsxs(WrapperResults, { style: { ...style, marginTop: 8 }, isVisibleResults: isOpenDrop, onMouseOver: () => setActionAreaInput(true), onMouseOut: () => setActionAreaInput(false), children: [ValueSearch.length === 0 && inputOnFocus && historicResults && historicResults.length > 0 &&
                                        historicResults.map(item => {
                                            return jsxRuntime.jsx(ItemResult, { onClick: () => {
                                                    setIsOpenDrop(false);
                                                    return item.onClick(item.id);
                                                }, children: jsxRuntime.jsxs(TextItem, { isLastItem: false , children: [jsxRuntime.jsx(Clock, {}), " ", item.label] }) }, item.id);
                                        }), ValueSearch.length > 0 &&
                                        resultList.map((item, index) => (jsxRuntime.jsxs("div", { style: { width: '100%', marginTop: 16 }, children: [jsxRuntime.jsx("span", { style: { fontFamily: 'PT Sans', fontSize: 14, fontWeight: 400, color: '#757575', paddingLeft: 16, marginLeft: 5, marginRight: 5 }, children: item.label }), item.listResult.map(item => (jsxRuntime.jsx(ItemResult, { onClick: () => {
                                                        setIsOpenDrop(false);
                                                        return item.onClick(item.id);
                                                    }, children: jsxRuntime.jsx(TextItem, { isLastItem: false , children: item.label }) }, item.id)))] }, index))), hasOptionSeeAll && labeledResultList.length > 0 && ValueSearch.length > 0 &&
                                        jsxRuntime.jsx(ItemSeeAll, { onClick: (e) => {
                                                setIsOpenDrop(false);
                                                return seeAll.onClick(e);
                                            }, children: seeAll.label })] }), listResults && listResults.length > 0 && inputOnFocus && !isLabeledResult &&
                            jsxRuntime.jsxs(WrapperResults, { style: { ...style, marginTop: 8 }, isVisibleResults: isOpenDrop, onMouseOver: () => setActionAreaInput(true), onMouseOut: () => setActionAreaInput(false), children: [ValueSearch.length === 0 && inputOnFocus && historicResults && historicResults.length > 0 &&
                                        historicResults.map(item => {
                                            return jsxRuntime.jsx(ItemResult, { onClick: () => {
                                                    setIsOpenDrop(false);
                                                    return item.onClick(item.id);
                                                }, children: jsxRuntime.jsxs(TextItem, { isLastItem: false , children: [jsxRuntime.jsx(Clock, {}), " ", item.label] }) }, item.id);
                                        }), ValueSearch.length > 0 &&
                                        resultList.map(item => {
                                            return jsxRuntime.jsx(ItemResult, { onClick: () => {
                                                    setIsOpenDrop(false);
                                                    return item.onClick(item.id);
                                                }, children: jsxRuntime.jsxs(TextItem, { isLastItem: false , children: [" ", item.label] }) }, item.id);
                                        }), hasOptionSeeAll && listResults.length > 0 && ValueSearch.length > 0 &&
                                        jsxRuntime.jsx(ItemSeeAll, { onClick: (e) => {
                                                setIsOpenDrop(false);
                                                return seeAll.onClick(e);
                                            }, children: seeAll.label })] })] })
                :
                    jsxRuntime.jsx(Container$7, { onMouseOver: () => setActionAreaInput(true), onMouseOut: () => setActionAreaInput(false), onFocus: () => setInputOnFocus(true), onBlur: () => setInputOnFocus(false), children: jsxRuntime.jsxs(InputSearchWrapper, { isHover: actionAreaInput, isOnFocus: inputOnFocus, style: { ...style }, children: [jsxRuntime.jsxs(ContainerIcon$1, { children: [" ", jsxRuntime.jsx(SearchIcon, { fill: '#fff' }), " "] }), jsxRuntime.jsx(InputText, { placeholder: placeholder, onChange: onChange, value: value })] }) }) }) }));
}

const Wrapper$2 = styled__default["default"].button `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 2px;
    cursor: pointer;
    border: 0;
    border-bottom: ${({ typeItem }) => typeItem == 'menu' ? '4px' : '2px'} solid transparent;
    border-top: ${({ typeItem }) => typeItem == 'menu' ? '10px' : '2px'} solid transparent;

    background-color: ${({ variant, theme, typeItem }) => typeItem == 'submenu' ? 'transparent' : variant == 'LXP' ? theme.colors.neutralsGrey1 : theme.colors.primary1};

    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    color: #FFFFFF;

    white-space: ${({ wrapText }) => wrapText ? 'wrap' : 'nowrap'};

    &:hover {
        background-color: ${({ variant, theme }) => variant == 'LXP' ? theme.colors.neutralsGrey3 : '#F5792A'};
        border-bottom: ${({ typeItem }) => typeItem == 'menu' ? '4px' : '2px'} solid transparent;
    }
    ${({ pressed, variant, typeItem, theme }) => pressed && `
        font-weight: 700;
        border-bottom: ${typeItem == 'menu' ? '4px' : '2px'} solid 
        ${variant == 'LXP' && typeItem == 'menu' ? theme.colors.primary1 : theme.colors.shadeWhite};
    `}
    &:focus {
        font-weight: 700;
        border-bottom: ${({ typeItem }) => typeItem == 'menu' ? '4px' : '2px'} solid 
        ${({ variant, typeItem, theme }) => variant == 'LXP' && typeItem == 'menu' ? theme.colors.primary1 : theme.colors.shadeWhite};
    }
`;
styled__default["default"].button `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 0;
    border-bottom: ${({ typeItem }) => typeItem == 'menu' ? '4px' : '2px'} solid transparent;
    border-top: ${({ typeItem }) => typeItem == 'menu' ? '4px' : '2px'} solid transparent;

    background-color: transparent;

    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    color: #FFFFFF;

    white-space: ${({ wrapText }) => wrapText ? 'wrap' : 'nowrap'};

    &:hover {
        background-color: ${({ variant, theme }) => variant == 'LXP' ? theme.colors.neutralsGrey3 : '#F5792A'};
        border-bottom: ${({ typeItem }) => typeItem == 'menu' ? '4px' : '2px'} solid 
        ${({ variant, typeItem, theme }) => variant == 'LXP' && typeItem == 'menu' ? theme.colors.primary1 : theme.colors.shadeWhite};
    }

    &:focus {
        font-weight: 700;
    }
`;

function ItemGlobalMenu({ variant, type, label, handleOnClick, wrapText, pressed, style, icon }) {
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsxs(Wrapper$2, { variant: variant, pressed: pressed, typeItem: type, wrapText: wrapText, style: { ...style }, onClick: handleOnClick, children: [icon, label] }) }));
}

styled__default["default"].button `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 0;
    border-bottom: ${({ typeItem }) => typeItem == 'menu' ? '4px' : '2px'} solid transparent;
    border-top: ${({ typeItem }) => typeItem == 'menu' ? '4px' : '2px'} solid transparent;

    background-color: ${({ variant, theme }) => variant == 'LXP' ? theme.colors.neutralsGrey1 : theme.colors.primary1};

    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    color: #FFFFFF;


    &:hover {
        background-color: ${({ variant, theme }) => variant == 'LXP' ? theme.colors.neutralsGrey3 : '#F5792A'};
        border-bottom: ${({ typeItem }) => typeItem == 'menu' ? '4px' : '2px'} solid 
        ${({ variant, typeItem, theme }) => variant == 'LXP' && typeItem == 'menu' ? theme.colors.primary1 : theme.colors.shadeWhite};
    }

    &:focus {
        font-weight: 700;
    }
`;
const Wrapper$1 = styled__default["default"].div `
    width: 50px;
    object-fit: contain;
    display: flex;
    justify-content: center;
    position: relative;
    cursor: pointer;
    user-select: none;
    background: transparent;
    border: 0;
`;
const Image$1 = styled__default["default"].img `
    width: 50px;
    user-select: none;
    cursor: pointer;
    object-fit: contain;
`;
const WrapperDrop = styled__default["default"].div `
    user-select: none;
    width: 50px;

    position: absolute;
    margin-top: 45px;
    z-index: 10000;

    border: 0;
    display: ${({ isVisible }) => isVisible ? 'flex' : 'none'};
    flex-direction: column;
    background-color: ${({ variant, theme }) => variant == 'LXP' ? theme.colors.neutralsGrey1 : '#F5792A'};
`;

function LanguagesDropdown({ variant, languages, selected, onSelect, style, distanceBtnDrop }) {
    const imgES = 'https://i.gyazo.com/1cfa904ea1d492ace9dc67c2a37a10e4.png';
    const imgBR = 'https://i.gyazo.com/ee7e65d12345200b8c3dd12670f85881.png';
    const imgEN = 'https://i.gyazo.com/06a0ea969c48c12589d5d5565cf834df.png';
    const imgPT = 'https://i.gyazo.com/cb567fc306928d02d31bc876df58be40.png';
    const [isOpenDrop, setIsOpenDrop] = React.useState(false);
    const [activeArea, setActiveArea] = React.useState(false);
    const [activeImgFlag, setActiveImgFlag] = React.useState(imgBR);
    React.useEffect(() => {
        switch (selected) {
            case 'pt-BR': return setActiveImgFlag(imgBR);
            case 'en-US': return setActiveImgFlag(imgEN);
            case 'es': return setActiveImgFlag(imgES);
            case 'pt-PT': return setActiveImgFlag(imgPT);
        }
    }, [selected]);
    React.useEffect(() => {
        const checksAnyClickOnScreen = () => {
            if (isOpenDrop) {
                document.body.removeEventListener("click", checksAnyClickOnScreen, false);
                setIsOpenDrop(false);
            }
        };
        if (isOpenDrop) {
            (document.body.addEventListener("click", checksAnyClickOnScreen, false));
        }
    }, [isOpenDrop]);
    const handleChangeSelect = (value) => {
        onSelect(value);
        switch (value) {
            case 'pt-BR': return setActiveImgFlag(imgBR);
            case 'en-US': return setActiveImgFlag(imgEN);
            case 'es': return setActiveImgFlag(imgES);
            case 'pt-PT': return setActiveImgFlag(imgPT);
        }
        setIsOpenDrop(false);
        setActiveArea(false);
    };
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsxs(Wrapper$1, { onClick: () => setIsOpenDrop(!isOpenDrop), onBlur: () => setIsOpenDrop(activeArea), variant: variant, style: { ...style }, children: [jsxRuntime.jsx(Image$1, { src: activeImgFlag, style: { padding: '10px' } }), jsxRuntime.jsx(WrapperDrop, { variant: variant, isVisible: isOpenDrop, onMouseOver: () => setActiveArea(true), onMouseOut: () => setActiveArea(false), style: { marginTop: distanceBtnDrop ? distanceBtnDrop : '45px' }, children: isOpenDrop && languages && languages.length > 0 && languages?.map((item, index) => {
                        return (jsxRuntime.jsx("div", { children: item == 'pt-BR' ?
                                jsxRuntime.jsx(Image$1, { onClick: () => handleChangeSelect('pt-BR'), src: imgBR, style: { padding: '9px', paddingTop: '6px', paddingBottom: '6px' } }, index)
                                : item == 'en-US' ?
                                    jsxRuntime.jsx(Image$1, { onClick: () => handleChangeSelect('en-US'), src: imgEN, style: { padding: '9px', paddingTop: '6px', paddingBottom: '6px' } }, index)
                                    : item == 'pt-PT' ?
                                        jsxRuntime.jsx(Image$1, { onClick: () => handleChangeSelect('pt-PT'), src: imgPT, style: { padding: '9px', paddingTop: '6px', paddingBottom: '6px' } }, index)
                                        : item == 'es' &&
                                            jsxRuntime.jsx(Image$1, { onClick: () => handleChangeSelect('es'), src: imgES, style: { padding: '9px', paddingTop: '6px', paddingBottom: '6px' } }, index) }, index));
                    }) })] }) }));
}

const Container$6 = styled__default["default"].div `
  width: auto;
  height: auto;
`;
const ProfileInfos = styled__default["default"].div `
  display: flex;
  flex-direction: row;
  width: 290px;
  background-color: #222;
  padding: 12px;
`;
const WrapperRightProfileInfo = styled__default["default"].div `
    display: flex;
    flex-direction: column;
    margin-left: 16px;
  `;
const ProfileNameInfo = styled__default["default"].span `
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    
    display: flex;
    align-items: center;
    
    color: #FFFFFF;
  `;
const ProfileCompanyInfo = styled__default["default"].span `
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    /* identical to box height */
    
    display: flex;
    align-items: center;
    
    color: #FFFFFF;
  `;
const WrapperButtonFrst = styled__default["default"].div `
    & > button {
      margin-top: 16px;
      
      font-family: 'Work Sans';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      /* identical to box height */

      display: flex;
      align-items: center;

      color: #FFF; 
      border: 1px solid #FFF;
      width: fit-content;
      height: 48px;
      border-radius: 8px;
      white-space: nowrap;

      &:hover {
        color: #FFF; 
        border: 1.8px solid #FFF;        
      }
      &:focus {
        color: #FFF; 
        border: 2px solid #FFF;        
      }
    }
  `;
const UserName = styled__default["default"].span `
  color: white;
  padding-left: 8px;
  padding-right: 8px;

  text-transform: none;

  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;

  display: flex;
  align-items: center;
  text-align: right;

  color: #FFFFFF;
`;
const AvatarCustomUser = styled__default["default"](Avatar__default["default"]) `
  height: 32px;
  width: 32px;
`;
const MenuCustom$1 = styled__default["default"](Menu__default["default"]) `
  & .MuiPaper-root{
    border-radius: 0px;
    ${({ variantstyle }) => variantstyle == 'LXP' && `border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      box-shadow: none !important;`}
  }
  ul {
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;
styled__default["default"](Menu__default["default"]) `
  & .MuiPaper-root{
    border-radius: 0px;
    box-shadow: none !important;
    background: linear-gradient(359.72deg, rgba(166, 166, 166, 0.4) 69.54%, rgba(0, 0, 0, 0.4) 88.63%), #000000 !important;
  }
  ul {
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;
const MenuItemCustom$1 = styled__default["default"](MenuItem__default["default"]) `
  color: white !important;
  border: 0;

  ${({ variantstyle }) => variantstyle == 'LXP' ?
    `background-color: #222222 !important;
     border-top: 0.5px solid #757575 !important;`
    :
        `
     width: 185px;
     background-color: #FF4D0D !important;
     border-top: 0.5px solid #F5792A !important;`}

  &:hover {

    ${({ variantstyle }) => variantstyle == 'LXP' ?
    `background-color: #444444 !important;`
    :
        `background-color: #F5792A !important;`}
    
  }
`;
const SubMenuItemCustom = styled__default["default"](MenuItem__default["default"]) `
  color: white !important;

  ${({ variantstyle }) => variantstyle == 'LXP' ?
    `background-color: #222222 !important;`
    :
        `background-color: #FF4D0D !important;`}

  &:hover {
    ${({ variantstyle }) => variantstyle == 'LXP' ?
    `background-color: #444444 !important;`
    :
        `background-color: #F5792A !important;`}
  }
`;

function DropdownProfileMenu({ variant, user, menuItems, profileMenuText, isMobileVersion, handleProfileMenuClick, style }) {
    const [anchorEl, setAnchorEl] = React__namespace.useState(null);
    const [anchorSub, setAnchorSub] = React__namespace.useState(null);
    const [subMenu, setSubMenu] = React__namespace.useState(null);
    const [isMobile, setIsMobile] = React__namespace.useState(isMobileVersion);
    const open = Boolean(anchorEl);
    const openSub = Boolean(anchorSub);
    React__namespace.useEffect(() => {
        setIsMobile(isMobileVersion);
    }, [isMobileVersion]);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setAnchorSub(null);
    };
    const handleSubitens = (subItens) => (event) => {
        setAnchorSub(event.currentTarget);
        setSubMenu(subItens);
    };
    return (jsxRuntime.jsx(Container$6, { style: { ...style }, children: variant == 'LXP' ?
            jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs(Button__default["default"], { id: "profile-dropdown", "aria-controls": "basic-menu", "aria-haspopup": "true", "aria-expanded": open ? 'true' : undefined, style: { padding: 0 }, onClick: handleClick, children: [jsxRuntime.jsx(AvatarCustomUser, { alt: "User Photo", src: user.avatar || "https://certificates-mentor.s3.amazonaws.com/frst-avatar-default.png" }), !isMobileVersion && jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs(UserName, { children: [" ", user.textIsMe, " "] }), jsxRuntime.jsx(DropdownIcon, { fill: "white" })] })] }), jsxRuntime.jsxs(MenuCustom$1, { id: "basic-menu", anchorOrigin: { vertical: 'bottom', horizontal: 'center' }, transformOrigin: { vertical: 'top', horizontal: 'center', }, anchorEl: anchorEl, open: open, onClose: handleClose, variantstyle: 'LXP', children: [jsxRuntime.jsxs(ProfileInfos, { children: [jsxRuntime.jsx(AvatarCustomUser, { alt: "User Photo", src: user.avatar || "https://certificates-mentor.s3.amazonaws.com/frst-avatar-default.png", style: { width: '70px', height: '70px' } }), jsxRuntime.jsxs(WrapperRightProfileInfo, { children: [jsxRuntime.jsxs(ProfileNameInfo, { children: [" ", user.name, " "] }), jsxRuntime.jsxs(ProfileCompanyInfo, { children: [" ", user.company, " "] }), jsxRuntime.jsx(WrapperButtonFrst, { children: jsxRuntime.jsx(Button$3, { variant: 'secondary', label: profileMenuText, handleClick: handleProfileMenuClick }) })] })] }), menuItems && menuItems.length > 0 && menuItems.map((item, index) => {
                                if (item.subItens) {
                                    if (item.subItens.length > 1)
                                        return (jsxRuntime.jsxs(MenuItemCustom$1, { onClick: handleSubitens(item.subItens), variantstyle: 'LXP', children: [item.iconBegin && item.iconBegin, item.iconBegin && jsxRuntime.jsx("span", { children: "\u00A0" }), jsxRuntime.jsxs("div", { style: { width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }, children: [jsxRuntime.jsx("div", { style: { marginLeft: '7px' }, children: item.label }), jsxRuntime.jsx(DropdownSideIconWhite, {})] })] }, index));
                                }
                                else
                                    return (jsxRuntime.jsxs(MenuItemCustom$1, { onClick: item.onClick || handleClose, variantstyle: 'LXP', children: [item.iconBegin && item.iconBegin, jsxRuntime.jsx("div", { style: { width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }, children: jsxRuntime.jsx("div", { style: { marginLeft: item.iconBegin ? '9px' : '0px' }, children: item.label }) })] }, index));
                            })] }), jsxRuntime.jsx(MenuCustom$1, { id: "sub-menu", anchorOrigin: { vertical: 'top', horizontal: 'left' }, transformOrigin: { vertical: 'top', horizontal: 'right', }, anchorEl: anchorSub, open: openSub, onClose: handleClose, variantstyle: 'default', children: subMenu && subMenu.map((item, index) => {
                            return jsxRuntime.jsx(SubMenuItemCustom, { onClick: (e) => item.onClick(e), variantstyle: 'LXP', children: item.label }, item.id);
                        }) })] })
            :
                jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs(Button__default["default"], { id: "profile-dropdown", "aria-controls": "basic-menu", "aria-haspopup": "true", "aria-expanded": open ? 'true' : undefined, style: { background: '#FF4D0D', borderRadius: '0px', padding: '5px', width: '185px', whiteSpace: 'nowrap' }, onClick: handleClick, children: [jsxRuntime.jsx(AvatarCustomUser, { alt: "User Photo", src: user.avatar || "https://certificates-mentor.s3.amazonaws.com/frst-avatar-default.png" }), jsxRuntime.jsxs(UserName, { children: [" ", user.textIsMe, " "] }), jsxRuntime.jsx(DropdownIcon, { fill: "white" })] }), jsxRuntime.jsx(MenuCustom$1, { id: "basic-menu", anchorOrigin: { vertical: 'bottom', horizontal: 'center' }, transformOrigin: { vertical: 'top', horizontal: 'center', }, anchorEl: anchorEl, open: open, onClose: handleClose, variantstyle: 'default', children: menuItems && menuItems.length > 0 && menuItems.map((item, index) => {
                                if (item.subItens) {
                                    if (item.subItens.length > 1)
                                        return (jsxRuntime.jsxs(MenuItemCustom$1, { onClick: handleSubitens(item.subItens), variantstyle: 'default', children: [item.iconBegin && item.iconBegin, item.iconBegin && jsxRuntime.jsx("span", { children: "\u00A0" }), jsxRuntime.jsxs("div", { style: { width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }, children: [jsxRuntime.jsx("div", { style: { marginLeft: '7px' }, children: item.label }), jsxRuntime.jsx(DropdownSideIconWhite, {})] })] }, index));
                                }
                                else
                                    return (jsxRuntime.jsxs(MenuItemCustom$1, { onClick: item.onClick || handleClose, variantstyle: 'default', children: [item.iconBegin && item.iconBegin, jsxRuntime.jsx("div", { style: { width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }, children: jsxRuntime.jsx("div", { style: { marginLeft: item.iconBegin ? '9px' : '0px' }, children: item.label }) })] }, index));
                            }) }), jsxRuntime.jsx(MenuCustom$1, { id: "sub-menu", anchorOrigin: { vertical: 'top', horizontal: 'left' }, transformOrigin: { vertical: 'top', horizontal: 'right', }, anchorEl: anchorSub, open: openSub, onClose: handleClose, variantstyle: 'default', children: subMenu && subMenu.map((item, index) => {
                                return jsxRuntime.jsx(SubMenuItemCustom, { onClick: (e) => item.onClick(e), variantstyle: 'default', children: item.label }, item.id);
                            }) })] }) }));
}

const notificationContainer$1 = styled__default["default"].div `
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    width: 375px;
    height: 120px;
    padding: 16px;
    gap: 16px;
    cursor: pointer;
`;
const notificationInfo = styled__default["default"].div `
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;
const notificationDescription = styled__default["default"].div `
    font-family: 'PT Sans';
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.neutralsGrey1};
`;
const notificationDate = styled__default["default"].div `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 8px;

    font-family: 'PT Sans';
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.neutralsGrey3};
`;

const Divider = () => {
    return (jsxRuntime.jsx("svg", { width: "5", height: "5", viewBox: "0 0 5 5", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("circle", { cx: "2.5", cy: "2.5", r: "2.5", fill: "#757575" }) }));
};
function NotificationCard(props) {
    const [descriptionNotification, setDescriptionNotification] = React.useState(props.notificationDescription);
    React.useEffect(() => {
        setDescriptionNotification(props.notificationDescription);
    }, [props.notificationDescription]);
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsxs(notificationContainer$1, { onClick: props.handleClick, style: { ...props.style, backgroundColor: props.isNewNotification ? '#FEF0D0' : FRSTTheme['colors'].shadeWhite }, children: [jsxRuntime.jsx(Avatar, { src: props.notificationAvatar, size: '40px' }), jsxRuntime.jsxs(notificationInfo, { children: [jsxRuntime.jsx(notificationDescription, { children: jsxRuntime.jsx(Markdown__default["default"], { children: descriptionNotification }) }), props.isNewNotification ?
                            jsxRuntime.jsxs(notificationDate, { children: [jsxRuntime.jsx("span", { style: { fontWeight: 700, color: FRSTTheme['colors'].primary1 }, children: props.textNew }), jsxRuntime.jsx(Divider, {}), props.notificationDate] })
                            :
                                jsxRuntime.jsx(notificationDate, { children: props.notificationDate })] })] }) }));
}

const PopoverCustom = styled__default["default"](material.Popover) `
  & > div:nth-child(3) {
    border-radius: 7px !important;
    box-shadow: 0px 25px 62px -19px rgba(0, 0, 0, 0.37) !important;
    -webkit-box-shadow: 0px 25px 62px -19px rgba(0, 0, 0, 0.47);
    -moz-box-shadow: 0px 25px 62px -19px rgba(0, 0, 0, 0.47);
  }
`;
const notificationContainer = styled__default["default"].div `
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  border-radius: 8px;
  width: 376px;
  height: 412px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.shadeWhite};
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary} !important;
  /* & > div:nth-child(2) > div:nth-child(3) {
    display: none !important;
  } */
`;
const notificationContainerMobile = styled__default["default"].div `
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-top: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  background-color: ${({ theme }) => theme.colors.shadeWhite};

  & > div:nth-child(2) {
    max-height: 80vh !important;
    overflow-y: scroll !important;
  }
`;
const notificationHeader = styled__default["default"].div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  width: 100%;
`;
const notificationCardList = styled__default["default"].div `
  height: 100%;
  min-height: 300px;
  min-width: 100%;
  overflow: hidden;
  overflow-y: ${(props) => props?.notificationsLength > 3 && 'scroll'};
  width: 100%;

  &::-webkit-scrollbar {
    width: 7px;
    height: 90%;
    display: flex;
    box-sizing: border-box;
    margin-right: 5px !important;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.shadeWhite};
    height: 30%;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.borderPrimary};
    height: 30%;
    border-radius: 5px;
    margin: 3px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.borderPrimary};
    height: 30%;
  }
`;
const emptyState = styled__default["default"].div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const emptyStateInfo = styled__default["default"].div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;

  text-align: center;
  font-family: 'PT Sans';
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.neutralsGrey3};
`;

function NotificationPopOver(props) {
    const isNewNotification = props.notificationList
        ? props.notificationList.filter((notification) => notification.isNewNotification)
        : [];
    const emptyStateImage = 'https://i.gyazo.com/5551ed515f94a8b2502d2694d67633dc.png';
    const notificationsLength = props?.notificationList?.length;
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: props.isMobile ? (jsxRuntime.jsxs("div", { style: { backgroundColor: '#E5E5E5' }, children: [jsxRuntime.jsx("div", { style: { padding: 16 }, children: jsxRuntime.jsx(Button$3, { variant: "link", startIcon: jsxRuntime.jsx(BackArrow, { fill: "currentColor" }), label: props.textBack, handleClick: () => props.handleClickBack() }) }), jsxRuntime.jsxs(notificationContainerMobile, { children: [jsxRuntime.jsxs(notificationHeader, { children: [jsxRuntime.jsx("span", { style: { fontFamily: 'Work Sans', fontSize: 20, fontWeight: 500, color: FRSTTheme['colors'].primary1 }, children: props.textNotification }), jsxRuntime.jsx(Button$3, { variant: "link", label: props.textMarkAllAsRead, disabled: isNewNotification.length ? false : true, handleClick: props.handleClickMarkRead })] }), props.notificationList ? (jsxRuntime.jsx(notificationCardList, { children: props.notificationList.map((item, index) => {
                                return (jsxRuntime.jsx("div", { style: { borderBottom: `1px solid ${FRSTTheme['colors'].borderPrimary}` }, children: jsxRuntime.jsx(NotificationCard, { style: { width: '100%' }, notificationAvatar: item.notificationAvatar, notificationDescription: item.notificationDescription, notificationDate: item.notificationDate, textNew: item.textNew, isNewNotification: item.isNewNotification, handleClick: item.handleClick }, index) }));
                            }) })) : (jsxRuntime.jsx(emptyState, { children: jsxRuntime.jsxs(emptyStateInfo, { children: [jsxRuntime.jsx("img", { src: emptyStateImage, alt: "Empty notification list" }), jsxRuntime.jsx("span", { children: props.textEmptyState })] }) }))] })] })) : (jsxRuntime.jsxs(PopoverCustom, { open: props.isOpen, anchorEl: props.anchor, anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center'
            }, transformOrigin: {
                vertical: 'top',
                horizontal: 'center'
            }, PaperProps: {
                style: {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    borderRadius: 0
                }
            }, children: [jsxRuntime.jsx(material.Box, { sx: {
                        position: 'relative',
                        mt: '10px',
                        '&::before': {
                            backgroundColor: 'white',
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            width: 12,
                            height: 12,
                            top: -6,
                            transform: 'rotate(45deg)',
                            left: 'calc(50% - 6px)'
                        }
                    } }), jsxRuntime.jsxs(notificationContainer, { children: [jsxRuntime.jsxs(notificationHeader, { onMouseOver: () => props?.setOnAreaPopOver(true), onMouseOut: () => props?.setOnAreaPopOver(false), children: [jsxRuntime.jsx("span", { style: { fontFamily: 'Work Sans', fontSize: 20, fontWeight: 500, color: FRSTTheme['colors'].primary1 }, children: props.textNotification }), jsxRuntime.jsx(Button$3, { variant: "link", label: props.textMarkAllAsRead, disabled: isNewNotification.length ? false : true, handleClick: props.handleClickMarkRead })] }), props.notificationList ? (jsxRuntime.jsx(notificationCardList, { notificationsLength: notificationsLength, children: props.notificationList.map((item, index) => {
                                return (jsxRuntime.jsx("div", { style: { borderBottom: `1px solid ${FRSTTheme['colors'].borderPrimary}` }, onMouseOver: () => props?.setOnAreaPopOver(true), onMouseOut: () => props?.setOnAreaPopOver(false), children: jsxRuntime.jsx(NotificationCard, { notificationAvatar: item.notificationAvatar, notificationDescription: item.notificationDescription, notificationDate: item.notificationDate, textNew: item.textNew, isNewNotification: item.isNewNotification, handleClick: item.handleClick }, index) }, index));
                            }) })) : (jsxRuntime.jsx(emptyState, { children: jsxRuntime.jsxs(emptyStateInfo, { children: [jsxRuntime.jsx("img", { src: emptyStateImage, alt: "Empty notification list" }), jsxRuntime.jsx("span", { children: props.textEmptyState })] }) }))] })] })) }));
}

function GlobalMenu({ variant, menu, user, search, notification, languages, languageSelected, onChangeLanguage, style, textNotification, onClickSite, onClickLinkedin, onClickInstagram, onClickYoutube, onClickSpotify, onClickPodCast, onClickProfileMenuText, onClickExit, profileMenuText, showSearchField, marginTopSubMenu, onClickLogo }) {
    const [valueSearch, setValueSearch] = React.useState(search.value);
    const [valueListSearch, setValueListSearch] = React.useState(search.listEntry);
    const [loadingSearch, setLoadingSearch] = React.useState(search.loading);
    const [isMobileVersion, setIsMobileVersion] = React.useState(false);
    const [controlExpandedSearchMobile, setControlExpandedSearchMobile] = React.useState(false);
    const [showLogo, setShowLogo] = React.useState(false);
    const [isVisibleMenuMobile, setIsVisibleMenuMobile] = React.useState(false);
    const [isVisibleSideMenu, setIsVisibleSideMenu] = React.useState(false);
    const [windowSize, setWindowSize] = React.useState([0, 0]);
    const [openNotification, setOpenNotification] = React.useState(false);
    const [openNotificationMobile, setOpenNotificationMobile] = React.useState(false);
    const [anchorNotification, setAnchorNotification] = React.useState(null);
    const [onAreaPopOver, setOnAreaPopOver] = React.useState(false);
    const [SubMenu, setSubMenu] = React.useState([]);
    const [SelectedItem, setSelectedItem] = React.useState();
    const [isTabletVersion, setIsTabletVersion] = React.useState(false);
    const [HideHambMenu, setHideHambMenu] = React.useState(false);
    React.useEffect(() => {
        setValueListSearch(search.listEntry);
    }, [search.listEntry]);
    React.useEffect(() => {
        setLoadingSearch(search.isloading);
    }, [search.loading]);
    React.useEffect(() => {
        function updateSize() {
            setWindowSize([window.innerWidth, window.innerHeight]);
            setIsMobileVersion(window.innerWidth < 700);
            setIsTabletVersion(window.innerWidth < 1200 && window.innerWidth >= 700);
            setShowLogo(false);
            setIsVisibleMenuMobile(false);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    React.useEffect(() => {
        setValueSearch(search.value);
        setValueListSearch(search.listEntry);
        setLoadingSearch(search.loading);
    }, [search]);
    React.useEffect(() => {
        setShowLogo(isMobileVersion);
        if (isMobileVersion)
            setControlExpandedSearchMobile(false);
        else {
            setControlExpandedSearchMobile(true);
        }
    }, [isMobileVersion]);
    React.useEffect(() => {
        if (!controlExpandedSearchMobile)
            setTimeout(() => {
                setShowLogo(!controlExpandedSearchMobile && isMobileVersion);
                setHideHambMenu(window.innerWidth < 420 ? controlExpandedSearchMobile : false);
            }, 1500);
        else {
            setShowLogo(!controlExpandedSearchMobile && isMobileVersion);
            setHideHambMenu(window.innerWidth < 420 ? controlExpandedSearchMobile : false);
        }
    }, [controlExpandedSearchMobile]);
    const handleChangeValueSearch = (value) => {
        setValueSearch(value);
        search.onChange(value);
    };
    const handleCloseNotification = () => {
        setOpenNotification(!openNotification);
        setOpenNotificationMobile(!openNotificationMobile);
    };
    const handleOpenNotification = (event) => {
        setOpenNotification(!openNotification);
        setOpenNotificationMobile(!openNotificationMobile);
        setAnchorNotification(event.currentTarget);
    };
    const onClickNotification = (event) => {
        if (!!onAreaPopOver == false) {
            setOpenNotification(!openNotification);
            setOpenNotificationMobile(!openNotificationMobile);
            setAnchorNotification(event.currentTarget);
        }
    };
    const handleClickItem = (item) => {
        item.onClick();
        setSelectedItem(item.id);
        if (item.subMenu)
            setSubMenu(item.subMenu);
        else
            setSubMenu([]);
    };
    const newNotification = notification.notificationList
        ? notification.notificationList.filter((notification) => notification.isNewNotification)
        : [];
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: variant == 'LXP' ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(MenuMobile, { onClickExit: onClickExit, languageSelected: languageSelected, variant: 'LXP', items: menu, isVisible: isVisibleMenuMobile, setVisible: (e) => setIsVisibleMenuMobile(e), onClickSite: onClickSite, onClickLinkedin: onClickLinkedin, onClickInstagram: onClickInstagram, onClickYoutube: onClickYoutube, onClickSpotify: onClickSpotify, onClickPodCast: onClickPodCast }), jsxRuntime.jsx(SideMenu, { onClickExit: onClickExit, languageSelected: languageSelected, variant: 'LXP', items: menu, isVisible: isVisibleSideMenu, setVisible: (e) => setIsVisibleSideMenu(e), onClickSite: onClickSite, onClickLinkedin: onClickLinkedin, onClickInstagram: onClickInstagram, onClickYoutube: onClickYoutube, onClickSpotify: onClickSpotify, onClickPodCast: onClickPodCast }), jsxRuntime.jsxs("div", { style: { width: '100%', display: 'flex', flexDirection: 'column' }, children: [jsxRuntime.jsxs(MenuContainer, { variant: variant, style: {
                                paddingRight: windowSize[0] > 1400 ? '124px' : isMobileVersion ? '12px' : '35px',
                                paddingLeft: windowSize[0] > 1400 ? '124px' : isMobileVersion ? '12px' : '35px',
                                ...style
                            }, children: [isMobileVersion && !HideHambMenu && (jsxRuntime.jsx(HamburgerButton, { onClick: () => setIsVisibleMenuMobile(true), children: jsxRuntime.jsx(IconHamburgerMenu, {}) })), isMobileVersion && HideHambMenu && (jsxRuntime.jsx(ArrowButton, { onClick: () => setControlExpandedSearchMobile(false), children: jsxRuntime.jsx(BackArrow, { fill: FRSTTheme['colors'].selectItens }) })), isTabletVersion && (jsxRuntime.jsx(HamburgerButton, { onClick: () => setIsVisibleSideMenu(true), children: jsxRuntime.jsx(IconHamburgerMenu, {}) })), !isMobileVersion && (jsxRuntime.jsx(WrapperLogo, { onClick: () => onClickLogo(), style: { marginRight: isTabletVersion && 32 }, children: jsxRuntime.jsx(FRSTLogo, { height: "28", fill: FRSTTheme['colors'].primary1 }) })), showLogo && (jsxRuntime.jsx(WrapperLogo, { onClick: () => onClickLogo(), style: { marginRight: '0px' }, children: jsxRuntime.jsx(FRSTLogo, { height: "28", fill: FRSTTheme['colors'].primary1 }) })), jsxRuntime.jsxs(WrapperMenu, { style: { height: '100%', justifyContent: 'space-between' }, children: [!isMobileVersion && showSearchField && (jsxRuntime.jsx(FieldSearch, { variant: "LXP", value: valueSearch, placeholder: search.label, onFilter: search.onFilter, loading: loadingSearch, textLoading: search.textLoading, setFieldSearchIsOpen: setControlExpandedSearchMobile, fieldSearchIsOpen: controlExpandedSearchMobile, isLabeledResult: search.isLabeledResult, listResults: search.isLabeledResult ? null : valueListSearch, labeledResultList: search.isLabeledResult ? valueListSearch : null, historicResults: search.historicResults, isMobileVersion: isMobileVersion, hasOptionSeeAll: search.hasOptionSeeAll, seeAll: search.seeAll, style: {
                                                width: windowSize[0] < 830 ? '230px' : windowSize[0] > 1500 ? '428px' : '332px'
                                            } })), jsxRuntime.jsxs(MenuContainer, { variant: variant, style: {
                                                height: '100%',
                                                paddingLeft: isMobileVersion ? '0' : windowSize[0] * 0.03 + 'px',
                                                paddingRight: isMobileVersion ? '0' : windowSize[0] * 0.03 + 'px',
                                                justifyContent: isMobileVersion ? 'space-between' : 'flex-end'
                                            }, children: [isMobileVersion && (jsxRuntime.jsx(FieldSearch, { variant: "LXP", value: valueSearch, onChange: (e) => handleChangeValueSearch(e.target.value), placeholder: search.label, onFilter: search.onFilter, loading: loadingSearch, textLoading: search.textLoading, fieldSearchIsOpen: controlExpandedSearchMobile, setFieldSearchIsOpen: setControlExpandedSearchMobile, isLabeledResult: search.isLabeledResult, listResults: search.isLabeledResult ? null : valueListSearch, labeledResultList: search.isLabeledResult ? valueListSearch : null, historicResults: search.historicResults, isMobileVersion: isMobileVersion, hasOptionSeeAll: search.hasOptionSeeAll, seeAll: search.seeAll, style: {
                                                        width: isMobileVersion ? '180px' : '332px'
                                                        // marginLeft: controlExpandedSearchMobile ? '-25px' : '-50px'
                                                    } })), !isMobileVersion &&
                                                    !isTabletVersion &&
                                                    menu &&
                                                    menu.length > 0 &&
                                                    menu.map((item, index) => {
                                                        return (jsxRuntime.jsx(ItemGlobalMenu, { label: item.label, variant: "LXP", type: "menu", pressed: item.id === SelectedItem || item.active, icon: item.iconBegin, handleOnClick: () => handleClickItem(item), style: { paddingRight: '10px', paddingLeft: '10px', height: '100%' } }, item.id ? item.id : index));
                                                    }), !isMobileVersion && !isTabletVersion && notification && (jsxRuntime.jsxs("div", { style: { position: 'relative' }, children: [jsxRuntime.jsx(ItemGlobalMenu, { label: textNotification, variant: "LXP", type: "menu", pressed: false, handleOnClick: () => onClickNotification, icon: jsxRuntime.jsx(IconNotification, { fill: FRSTTheme['colors'].shadeWhite }), style: { paddingRight: '10px', paddingLeft: '10px', height: '100%' } }), newNotification.length ? (jsxRuntime.jsx("div", { style: { position: 'absolute', marginLeft: '50%', marginTop: '-54px' }, children: jsxRuntime.jsx(HasNotificationIcon, {}) })) : null, jsxRuntime.jsx(NotificationPopOver, { handleClickMarkRead: notification.handleClickMarkRead, isOpen: openNotification, anchor: anchorNotification, textEmptyState: notification.textEmptyState, notificationList: notification.notificationList, textMarkAllAsRead: notification.textMarkAllAsRead, textNotification: notification.textNotification, isMobile: false, setOnAreaPopOver: (e) => setOnAreaPopOver(e), textBack: notification.textBack, handleClickBack: () => handleCloseNotification() })] })), isMobileVersion && notification && (jsxRuntime.jsx(WrapperIconNotificationMobile, { onClick: onClickNotification, style: {
                                                        borderBottom: openNotificationMobile && windowSize[0] <= 650
                                                            ? `4px solid ${FRSTTheme['colors'].primary1}`
                                                            : '',
                                                        height: windowSize[0] <= 650 ? '100%' : 'auto'
                                                    }, children: jsxRuntime.jsxs("span", { style: { display: 'inline-flex', justifyContent: 'flex-start', alignItems: 'center' }, children: [jsxRuntime.jsx(IconNotification, { fill: FRSTTheme['colors'].shadeWhite }), ' ', newNotification.length ? (jsxRuntime.jsxs("div", { style: { marginLeft: '-12px' }, children: [' ', jsxRuntime.jsx(HasNotificationIcon, {}), ' '] })) : null] }) })), isTabletVersion && notification && (jsxRuntime.jsxs(WrapperIconNotificationMobile, { onClick: onClickNotification, style: {
                                                        borderBottom: openNotificationMobile && windowSize[0] <= 650
                                                            ? `4px solid ${FRSTTheme['colors'].primary1}`
                                                            : '',
                                                        height: windowSize[0] <= 650 ? '100%' : 'auto'
                                                    }, children: [jsxRuntime.jsxs("span", { style: { display: 'inline-flex', justifyContent: 'flex-start', alignItems: 'center' }, children: [jsxRuntime.jsx(IconNotification, { fill: FRSTTheme['colors'].shadeWhite }), ' ', newNotification.length ? (jsxRuntime.jsxs("div", { style: { marginLeft: '-12px' }, children: [' ', jsxRuntime.jsx(HasNotificationIcon, {}), ' '] })) : null] }), windowSize[0] >= 700 ? (jsxRuntime.jsx(NotificationPopOver, { handleClickMarkRead: notification.handleClickMarkRead, isOpen: openNotificationMobile, anchor: anchorNotification, textEmptyState: notification.textEmptyState, notificationList: notification.notificationList, textMarkAllAsRead: notification.textMarkAllAsRead, textNotification: notification.textNotification, isMobile: false, setOnAreaPopOver: (e) => setOnAreaPopOver(e), textBack: notification.textBack, handleClickBack: () => handleCloseNotification() })) : null] }))] })] }), jsxRuntime.jsxs(WrapperRightInfo, { children: [jsxRuntime.jsx(DropdownProfileMenu, { variant: "LXP", user: user, profileMenuText: profileMenuText, handleProfileMenuClick: onClickProfileMenuText, menuItems: user && user.menuItems, isMobileVersion: isMobileVersion, style: {
                                                marginLeft: isMobileVersion ? '0px' : '5px',
                                                marginRight: isMobileVersion ? '0px' : '5px'
                                            } }), !isMobileVersion && !isTabletVersion && languages && languages.length > 0 && (jsxRuntime.jsx(LanguagesDropdown, { variant: "LXP", languages: [...languages], selected: languageSelected, onSelect: (e) => onChangeLanguage(e), distanceBtnDrop: '57px' }))] })] }), SubMenu && SubMenu.length > 0 && (jsxRuntime.jsx(SubMenuContainer, { variant: variant, marginTop: marginTopSubMenu, style: {
                                paddingRight: windowSize[0] > 1400 ? '124px' : '35px',
                                paddingLeft: windowSize[0] > 1400 ? '124px' : '35px',
                                ...style
                            }, children: SubMenu.map((item, index) => {
                                return (jsxRuntime.jsx(ItemGlobalMenu, { label: item.label, variant: "LXP", type: "submenu", handleOnClick: () => item.onClick('tes'), style: { paddingRight: '10px', paddingLeft: '10px' } }, item.id ? item.id : index));
                            }) }))] }), openNotificationMobile && windowSize[0] < 700 ? (jsxRuntime.jsx(NotificationPopOver, { handleClickMarkRead: notification.handleClickMarkRead, isOpen: openNotificationMobile, anchor: anchorNotification, textEmptyState: notification.textEmptyState, notificationList: notification.notificationList, textMarkAllAsRead: notification.textMarkAllAsRead, textNotification: notification.textNotification, isMobile: true, setOnAreaPopOver: (e) => setOnAreaPopOver(e), textBack: notification.textBack, handleClickBack: () => handleCloseNotification() })) : null] })) : variant === 'default' ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(MenuMobile, { onClickExit: onClickExit, languageSelected: languageSelected, variant: 'default', items: menu, isVisible: isVisibleMenuMobile, setVisible: (e) => setIsVisibleMenuMobile(e), onClickSite: onClickSite, onClickLinkedin: onClickLinkedin, onClickInstagram: onClickInstagram, onClickYoutube: onClickYoutube, onClickSpotify: onClickSpotify, onClickPodCast: onClickPodCast }), jsxRuntime.jsx("div", { style: { width: '100%', display: 'flex', flexDirection: 'column' }, children: jsxRuntime.jsxs(MenuContainer, { variant: variant, style: {
                            paddingRight: windowSize[0] > 1400 ? '124px' : windowSize[0] < 500 ? '10px' : '35px',
                            paddingLeft: windowSize[0] > 1400 ? '124px' : windowSize[0] < 500 ? '10px' : '35px',
                            ...style
                        }, children: [isMobileVersion && (jsxRuntime.jsx(HamburgerButton, { style: { marginLeft: 0 }, onClick: () => setIsVisibleMenuMobile(true), children: jsxRuntime.jsx(IconHamburgerMenu, {}) })), isTabletVersion && (jsxRuntime.jsx(HamburgerButton, { onClick: () => setIsVisibleMenuMobile(true), children: jsxRuntime.jsx(IconHamburgerMenu, {}) })), !isMobileVersion && !isTabletVersion && (jsxRuntime.jsx(WrapperLogo, { onClick: () => onClickLogo(), children: jsxRuntime.jsx(FRSTLogo, { height: "28", fill: FRSTTheme['colors'].primary1 }) })), showLogo && (jsxRuntime.jsx(WrapperLogo, { onClick: () => onClickLogo(), style: { marginRight: '0px' }, children: jsxRuntime.jsx(FRSTLogo, { height: "28", fill: FRSTTheme['colors'].primary1 }) })), jsxRuntime.jsx(WrapperMenu, { style: { height: '100%' }, children: !isMobileVersion && !isTabletVersion && showSearchField && (jsxRuntime.jsx(FieldSearch, { variant: "LXP", value: valueSearch, onFilter: search.onFilter, onChange: (e) => handleChangeValueSearch(e.target.value), placeholder: search.label, loading: loadingSearch, textLoading: search.textLoading, fieldSearchIsOpen: controlExpandedSearchMobile, setFieldSearchIsOpen: setControlExpandedSearchMobile, isLabeledResult: search.isLabeledResult, listResults: search.isLabeledResult ? null : valueListSearch, labeledResultList: search.isLabeledResult ? valueListSearch : null, historicResults: search.historicResults, isMobileVersion: isMobileVersion, hasOptionSeeAll: search.hasOptionSeeAll, seeAll: search.seeAll, style: {
                                        width: isMobileVersion ? '190px' : '332px'
                                    } })) }), jsxRuntime.jsxs(WrapperRightInfo, { children: [isMobileVersion && (jsxRuntime.jsx(FieldSearch, { variant: "LXP", value: valueSearch, onFilter: search.onFilter, onChange: (e) => handleChangeValueSearch(e.target.value), placeholder: search.label, loading: loadingSearch, textLoading: search.textLoading, fieldSearchIsOpen: controlExpandedSearchMobile, setFieldSearchIsOpen: setControlExpandedSearchMobile, isLabeledResult: search.isLabeledResult, listResults: search.isLabeledResult ? null : valueListSearch, labeledResultList: search.isLabeledResult ? valueListSearch : null, historicResults: search.historicResults, isMobileVersion: isMobileVersion, hasOptionSeeAll: search.hasOptionSeeAll, seeAll: search.seeAll, style: {
                                            width: isMobileVersion ? '180px' : '332px',
                                            marginLeft: controlExpandedSearchMobile ? '-15px' : '-30px'
                                        } })), isTabletVersion && (jsxRuntime.jsx(FieldSearch, { variant: "LXP", value: valueSearch, onFilter: search.onFilter, onChange: (e) => handleChangeValueSearch(e.target.value), placeholder: search.label, loading: loadingSearch, textLoading: search.textLoading, fieldSearchIsOpen: controlExpandedSearchMobile, setFieldSearchIsOpen: setControlExpandedSearchMobile, isLabeledResult: search.isLabeledResult, listResults: search.isLabeledResult ? null : valueListSearch, labeledResultList: search.isLabeledResult ? valueListSearch : null, historicResults: search.historicResults, isMobileVersion: isMobileVersion, hasOptionSeeAll: search.hasOptionSeeAll, seeAll: search.seeAll, style: {
                                            width: isMobileVersion ? '180px' : '332px',
                                            marginLeft: controlExpandedSearchMobile ? '-25px' : '-50px'
                                        } })), !isMobileVersion && !isTabletVersion && notification && (jsxRuntime.jsxs(WrapperIconNotification, { onClick: onClickNotification, children: [jsxRuntime.jsxs("span", { style: { display: 'inline-flex', justifyContent: 'flex-start', alignItems: 'center' }, onClick: handleOpenNotification, children: [jsxRuntime.jsx(IconNotification, { fill: FRSTTheme['colors'].shadeWhite }), newNotification.length ? (jsxRuntime.jsx("div", { style: { marginLeft: '-12px' }, children: jsxRuntime.jsx(HasNotificationIcon, {}) })) : null, ' ', "\u00A0 ", textNotification] }), jsxRuntime.jsx(NotificationPopOver, { handleClickMarkRead: notification.handleClickMarkRead, isOpen: openNotification, anchor: anchorNotification, textEmptyState: notification.textEmptyState, notificationList: notification.notificationList, textMarkAllAsRead: notification.textMarkAllAsRead, textNotification: notification.textNotification, isMobile: false, setOnAreaPopOver: (e) => setOnAreaPopOver(e), textBack: notification.textBack, handleClickBack: () => handleCloseNotification() })] })), isMobileVersion && notification && (jsxRuntime.jsxs(WrapperIconNotificationMobile, { onClick: onClickNotification, style: {
                                            borderBottom: openNotificationMobile && windowSize[0] <= 650
                                                ? `4px solid ${FRSTTheme['colors'].primary1}`
                                                : '',
                                            height: windowSize[0] <= 650 ? '100%' : 'auto'
                                        }, children: [jsxRuntime.jsxs("span", { style: { display: 'inline-flex', justifyContent: 'flex-start', alignItems: 'center' }, children: [jsxRuntime.jsx(IconNotification, { fill: FRSTTheme['colors'].shadeWhite }), ' ', newNotification.length ? (jsxRuntime.jsxs("div", { style: { marginLeft: '-12px' }, children: [' ', jsxRuntime.jsx(HasNotificationIcon, {}), ' '] })) : null] }), windowSize[0] > 700 ? (jsxRuntime.jsx(NotificationPopOver, { handleClickMarkRead: notification.handleClickMarkRead, isOpen: openNotificationMobile, anchor: anchorNotification, textEmptyState: notification.textEmptyState, notificationList: notification.notificationList, textMarkAllAsRead: notification.textMarkAllAsRead, textNotification: notification.textNotification, isMobile: false, setOnAreaPopOver: (e) => setOnAreaPopOver(e), textBack: notification.textBack, handleClickBack: () => handleCloseNotification() })) : null] })), isTabletVersion && notification && (jsxRuntime.jsxs(WrapperIconNotificationMobile, { onClick: onClickNotification, style: {
                                            borderBottom: openNotificationMobile && windowSize[0] <= 650
                                                ? `4px solid ${FRSTTheme['colors'].primary1}`
                                                : '',
                                            height: windowSize[0] <= 650 ? '100%' : 'auto'
                                        }, children: [jsxRuntime.jsxs("span", { style: { display: 'inline-flex', justifyContent: 'flex-start', alignItems: 'center' }, children: [jsxRuntime.jsx(IconNotification, { fill: FRSTTheme['colors'].shadeWhite }), ' ', newNotification.length ? (jsxRuntime.jsxs("div", { style: { marginLeft: '-12px' }, children: [' ', jsxRuntime.jsx(HasNotificationIcon, {}), ' '] })) : null] }), windowSize[0] > 700 ? (jsxRuntime.jsx(NotificationPopOver, { handleClickMarkRead: notification.handleClickMarkRead, isOpen: openNotificationMobile, anchor: anchorNotification, textEmptyState: notification.textEmptyState, notificationList: notification.notificationList, textMarkAllAsRead: notification.textMarkAllAsRead, textNotification: notification.textNotification, isMobile: false, setOnAreaPopOver: (e) => setOnAreaPopOver(e), textBack: notification.textBack, handleClickBack: () => handleCloseNotification() })) : null] })), jsxRuntime.jsx(DropdownProfileMenu, { variant: "LXP", user: user, profileMenuText: profileMenuText, handleProfileMenuClick: onClickProfileMenuText, menuItems: user && user.menuItems, isMobileVersion: isMobileVersion, style: {
                                            marginLeft: isMobileVersion ? '0px' : '5px',
                                            marginRight: isMobileVersion ? '0px' : '5px'
                                        } }), !isMobileVersion && !isTabletVersion && languages && languages.length > 0 && (jsxRuntime.jsx(LanguagesDropdown, { variant: "LXP", languages: [...languages], selected: languageSelected, onSelect: (e) => onChangeLanguage(e), distanceBtnDrop: '57px' }))] })] }) }), openNotificationMobile && windowSize[0] <= 700 ? (jsxRuntime.jsx(NotificationPopOver, { handleClickMarkRead: notification.handleClickMarkRead, isOpen: openNotificationMobile, anchor: anchorNotification, textEmptyState: notification.textEmptyState, notificationList: notification.notificationList, textMarkAllAsRead: notification.textMarkAllAsRead, textNotification: notification.textNotification, isMobile: true, setOnAreaPopOver: (e) => setOnAreaPopOver(e), textBack: notification.textBack, handleClickBack: () => handleCloseNotification() })) : null] })) : (jsxRuntime.jsx("div", { style: { width: '100%', display: 'flex', flexDirection: 'column', ...style }, children: jsxRuntime.jsxs(MenuContainer, { variant: variant, style: { ...style, display: 'none' }, children: [jsxRuntime.jsx(WrapperLogo, { onClick: () => onClickLogo(), children: jsxRuntime.jsx(FRSTLogo, { height: "28" }) }), jsxRuntime.jsx(WrapperMenu, { children: menu &&
                            menu.length > 0 &&
                            menu.map((item, index) => {
                                return (jsxRuntime.jsx(ItemGlobalMenu, { label: item.label, variant: "default", type: "menu", handleOnClick: () => item.onClick('tes'), style: { paddingRight: '10px', paddingLeft: '10px' } }, item.id ? item.id : index));
                            }) }), jsxRuntime.jsx(WrapperRightInfo, { children: jsxRuntime.jsx(DropdownProfileMenu, { variant: "default", user: user, menuItems: user && user.menuItems, isMobileVersion: isMobileVersion, profileMenuText: profileMenuText, handleProfileMenuClick: onClickProfileMenuText }) }), languages && languages.length > 0 && (jsxRuntime.jsx(LanguagesDropdown, { variant: "default", languages: [...languages], selected: languageSelected, onSelect: (e) => onChangeLanguage(e), distanceBtnDrop: '45px' }))] }) })) }));
}
function MenuMobile({ items, isVisible, setVisible, variant, languageSelected, onClickExit, onClickSite, onClickLinkedin, onClickInstagram, onClickYoutube, onClickSpotify, onClickPodCast }) {
    const [optionsSubMenu, setOptionsSubmenu] = React.useState({});
    const [subMenuIsVisible, setSubMenuIsVisible] = React.useState(false);
    const newOptionsSubMenu = (items) => {
        setOptionsSubmenu(items);
        setTimeout(() => setSubMenuIsVisible(true), 200);
    };
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(SubMenuMobile, { onClickExit: onClickExit, items: optionsSubMenu, isVisible: subMenuIsVisible, setVisible: setSubMenuIsVisible, variant: variant, languageSelected: languageSelected, onClickSite: onClickSite, onClickLinkedin: onClickLinkedin, onClickInstagram: onClickInstagram, onClickYoutube: onClickYoutube, onClickSpotify: onClickSpotify, onClickPodCast: onClickPodCast }), jsxRuntime.jsx(MenuMobile$1, { isVisible: isVisible, children: variant === 'LXP' ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx(ItemMenuMobile, { onClick: () => setVisible(false), children: jsxRuntime.jsxs("span", { children: [' ', jsxRuntime.jsx(BackArrow, { fill: "white" }), " \u00A0 ", languageSelected === 'en-US' ? 'Back' : 'Voltar'] }) }), items &&
                                    items.length > 0 &&
                                    items.map((item, index) => {
                                        if (item.label == 'Criar conteúdo')
                                            return;
                                        if (item.onClick == null)
                                            return (jsxRuntime.jsxs(ItemMenuMobile, { onClick: () => newOptionsSubMenu(item.subItens), children: ["\u00A0", item.label] }, index));
                                        return (jsxRuntime.jsxs(ItemMenuMobile, { onClick: (e) => item.onClick(e), children: ["\u00A0", item.label] }, index));
                                    }), jsxRuntime.jsx(ItemMenuMobile, { style: { borderBottom: 'none' }, onClick: () => onClickExit(), children: jsxRuntime.jsxs("span", { children: [' ', jsxRuntime.jsx(ExitArrow, { fill: "white" }), " \u00A0 ", languageSelected === 'en-US' ? 'Logout' : 'Sair'] }) })] }), jsxRuntime.jsxs(footerMenuMobile, { children: [jsxRuntime.jsx("span", { style: { marginTop: 24 }, children: languageSelected === 'en-US'
                                        ? 'Visit our channel and social networks'
                                        : 'Visite nossos canais e redes sociais' }), jsxRuntime.jsxs(frstSocials, { children: [jsxRuntime.jsxs(itemFrstSocials, { onClick: onClickSite, children: [' ', jsxRuntime.jsx(SiteIcon, {}), ' '] }), jsxRuntime.jsxs(itemFrstSocials, { onClick: onClickLinkedin, children: [' ', jsxRuntime.jsx(LinkedinIcon, {}), ' '] }), jsxRuntime.jsxs(itemFrstSocials, { onClick: onClickInstagram, children: [' ', jsxRuntime.jsx(InstagramIcon, {}), ' '] }), jsxRuntime.jsxs(itemFrstSocials, { onClick: onClickYoutube, children: [' ', jsxRuntime.jsx(YoutubeIcon, {}), ' '] }), jsxRuntime.jsxs(itemFrstSocials, { onClick: onClickSpotify, children: [' ', jsxRuntime.jsx(SpotifyIcon, {}), ' '] }), jsxRuntime.jsxs(itemFrstSocials, { onClick: onClickPodCast, children: [' ', jsxRuntime.jsx(PodCastIcon, {}), ' '] })] })] })] })) : (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx(ItemMenuMobile, { style: { paddingBottom: 32 }, onClick: () => setVisible(false), children: jsxRuntime.jsxs("span", { children: [' ', jsxRuntime.jsx(BackArrow, { fill: "white" }), " \u00A0 ", languageSelected === 'en-US' ? 'Back' : 'Voltar'] }) }), items &&
                                    items.length > 0 &&
                                    items.map((item, index) => {
                                        if (item.label == 'Criar conteúdo')
                                            return;
                                        if (item.onClick == null)
                                            return (jsxRuntime.jsxs(ItemMenuMobile, { onClick: () => newOptionsSubMenu(item.subItens), children: [item.iconBegin, "\u00A0", item.label] }, index));
                                        return (jsxRuntime.jsxs(ItemMenuMobile, { onClick: (e) => item.onClick(e), children: [item.iconBegin, "\u00A0", item.label] }, index));
                                    })] }), jsxRuntime.jsxs(footerMenuMobile, { children: [jsxRuntime.jsx(ItemMenuMobile, { style: {}, onClick: () => onClickExit(), children: jsxRuntime.jsxs("span", { children: [' ', jsxRuntime.jsx(ExitArrow, { fill: "white" }), " \u00A0 ", languageSelected === 'en-US' ? 'Logout' : 'Sair'] }) }), jsxRuntime.jsx("span", { style: { marginTop: 24 }, children: languageSelected === 'en-US'
                                        ? 'Visit our channel and social networks'
                                        : 'Visite nossos canais e redes sociais' }), jsxRuntime.jsxs(frstSocials, { children: [jsxRuntime.jsxs(itemFrstSocials, { onClick: onClickSite, children: [' ', jsxRuntime.jsx(SiteIcon, {}), ' '] }), jsxRuntime.jsxs(itemFrstSocials, { onClick: onClickLinkedin, children: [' ', jsxRuntime.jsx(LinkedinIcon, {}), ' '] }), jsxRuntime.jsxs(itemFrstSocials, { onClick: onClickInstagram, children: [' ', jsxRuntime.jsx(InstagramIcon, {}), ' '] }), jsxRuntime.jsxs(itemFrstSocials, { onClick: onClickYoutube, children: [' ', jsxRuntime.jsx(YoutubeIcon, {}), ' '] }), jsxRuntime.jsxs(itemFrstSocials, { onClick: onClickSpotify, children: [' ', jsxRuntime.jsx(SpotifyIcon, {}), ' '] }), jsxRuntime.jsxs(itemFrstSocials, { onClick: onClickPodCast, children: [' ', jsxRuntime.jsx(PodCastIcon, {}), ' '] })] })] })] })) })] }));
}
function SubMenuMobile({ items, isVisible, setVisible, variant, languageSelected, onClickExit, onClickSite, onClickLinkedin, onClickInstagram, onClickYoutube, onClickSpotify, onClickPodCast }) {
    const [options, setOptions] = React.useState(items);
    React.useEffect(() => {
        setOptions(items);
    }, [items]);
    return (jsxRuntime.jsx(MenuMobile$1, { isVisible: isVisible, style: { zIndex: '10002' }, children: variant === 'LXP' ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", { children: options &&
                        options.length > 0 &&
                        options.map((item, index) => {
                            if (item.label == 'Criar conteúdo')
                                return;
                            return (jsxRuntime.jsx(ItemMenuMobile, { onClick: (e) => item.onClick(e), children: item.label }, index));
                        }) }), jsxRuntime.jsx(ItemMenuMobile, { onClick: () => setVisible(false), style: { borderTop: '1px solid #444' }, children: languageSelected === 'en-US' ? 'Back' : 'Voltar' })] })) : (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx(ItemMenuMobile, { style: { paddingBottom: 32 }, onClick: () => setVisible(false), children: jsxRuntime.jsxs("span", { children: [' ', jsxRuntime.jsx(BackArrow, { fill: "white" }), " \u00A0 ", languageSelected === 'en-US' ? 'Back' : 'Voltar'] }) }), options &&
                            options.length > 0 &&
                            options.map((item, index) => {
                                if (item.label == 'Criar conteúdo')
                                    return;
                                if (item.onClick == null)
                                    return (jsxRuntime.jsxs(ItemMenuMobile, { onClick: (e) => item.onClick(e), children: [item.iconBegin, "\u00A0", item.label] }, index));
                                return (jsxRuntime.jsxs(ItemMenuMobile, { onClick: (e) => item.onClick(e), children: [item.iconBegin, "\u00A0", item.label] }, index));
                            })] }), jsxRuntime.jsxs(footerMenuMobile, { children: [jsxRuntime.jsx(ItemMenuMobile, { style: {}, onClick: () => onClickExit(), children: jsxRuntime.jsxs("span", { children: [' ', jsxRuntime.jsx(ExitArrow, { fill: "white" }), " \u00A0 ", languageSelected === 'en-US' ? 'Logout' : 'Sair'] }) }), jsxRuntime.jsx("span", { style: { marginTop: 24 }, children: languageSelected === 'en-US'
                                ? 'Visit our channel and social networks'
                                : 'Visite nossos canais e redes sociais' }), jsxRuntime.jsxs(frstSocials, { children: [jsxRuntime.jsxs(itemFrstSocials, { onClick: onClickSite, children: [' ', jsxRuntime.jsx(SiteIcon, {}), ' '] }), jsxRuntime.jsxs(itemFrstSocials, { onClick: onClickLinkedin, children: [' ', jsxRuntime.jsx(LinkedinIcon, {}), ' '] }), jsxRuntime.jsxs(itemFrstSocials, { onClick: onClickInstagram, children: [' ', jsxRuntime.jsx(InstagramIcon, {}), ' '] }), jsxRuntime.jsxs(itemFrstSocials, { onClick: onClickYoutube, children: [' ', jsxRuntime.jsx(YoutubeIcon, {}), ' '] }), jsxRuntime.jsxs(itemFrstSocials, { onClick: onClickSpotify, children: [' ', jsxRuntime.jsx(SpotifyIcon, {}), ' '] }), jsxRuntime.jsxs(itemFrstSocials, { onClick: onClickPodCast, children: [' ', jsxRuntime.jsx(PodCastIcon, {}), ' '] })] })] })] })) }));
}
function SideMenu({ items, isVisible, setVisible, variant, languageSelected, onClickExit, onClickSite, onClickLinkedin, onClickInstagram, onClickYoutube, onClickSpotify, onClickPodCast }) {
    const [optionsSubMenu, setOptionsSubmenu] = React.useState({});
    const [subMenuIsVisible, setSubMenuIsVisible] = React.useState(false);
    const newOptionsSubMenu = (items) => {
        setOptionsSubmenu(items);
        setTimeout(() => setSubMenuIsVisible(true), 200);
    };
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx(SideMenu$1, { isVisible: isVisible, children: variant === 'LXP' ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx(ItemSideMenu, { onClick: () => setVisible(false), children: jsxRuntime.jsxs("span", { children: [' ', jsxRuntime.jsx(BackArrow, { fill: "white" }), " \u00A0 ", languageSelected === 'en-US' ? 'Back' : 'Voltar'] }) }), items &&
                                items.length > 0 &&
                                items.map((item, index) => {
                                    if (item.label == 'Criar conteúdo')
                                        return;
                                    if (item.onClick == null)
                                        return (jsxRuntime.jsxs(ItemSideMenu, { onClick: () => newOptionsSubMenu(item.subItens), children: ["\u00A0", item.label] }, index));
                                    return (jsxRuntime.jsxs(ItemSideMenu, { onClick: (e) => item.onClick(e), children: ["\u00A0", item.label] }, index));
                                }), jsxRuntime.jsx(ItemSideMenu, { style: { borderBottom: 'none' }, onClick: () => onClickExit(), children: jsxRuntime.jsxs("span", { children: [' ', jsxRuntime.jsx(ExitArrow, { fill: "white" }), " \u00A0 ", languageSelected === 'en-US' ? 'Logout' : 'Sair'] }) })] }), jsxRuntime.jsxs(footerMenuMobile, { children: [jsxRuntime.jsx("span", { style: { marginTop: 24 }, children: languageSelected === 'en-US'
                                    ? 'Visit our channel and social networks'
                                    : 'Visite nossos canais e redes sociais' }), jsxRuntime.jsxs(frstSocials, { children: [jsxRuntime.jsxs(itemFrstSocials, { onClick: onClickSite, children: [' ', jsxRuntime.jsx(SiteIcon, {}), ' '] }), jsxRuntime.jsxs(itemFrstSocials, { onClick: onClickLinkedin, children: [' ', jsxRuntime.jsx(LinkedinIcon, {}), ' '] }), jsxRuntime.jsxs(itemFrstSocials, { onClick: onClickInstagram, children: [' ', jsxRuntime.jsx(InstagramIcon, {}), ' '] }), jsxRuntime.jsxs(itemFrstSocials, { onClick: onClickYoutube, children: [' ', jsxRuntime.jsx(YoutubeIcon, {}), ' '] }), jsxRuntime.jsxs(itemFrstSocials, { onClick: onClickSpotify, children: [' ', jsxRuntime.jsx(SpotifyIcon, {}), ' '] }), jsxRuntime.jsxs(itemFrstSocials, { onClick: onClickPodCast, children: [' ', jsxRuntime.jsx(PodCastIcon, {}), ' '] })] })] })] })) : (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx(ItemMenuMobile, { style: { paddingBottom: 32 }, onClick: () => setVisible(false), children: jsxRuntime.jsxs("span", { children: [' ', jsxRuntime.jsx(BackArrow, { fill: "white" }), " \u00A0 ", languageSelected === 'en-US' ? 'Back' : 'Voltar'] }) }), items &&
                                items.length > 0 &&
                                items.map((item, index) => {
                                    if (item.label == 'Criar conteúdo')
                                        return;
                                    if (item.onClick == null)
                                        return (jsxRuntime.jsxs(ItemMenuMobile, { onClick: () => newOptionsSubMenu(item.subItens), children: [item.iconBegin, "\u00A0", item.label] }, index));
                                    return (jsxRuntime.jsxs(ItemMenuMobile, { onClick: (e) => item.onClick(e), children: [item.iconBegin, "\u00A0", item.label] }, index));
                                })] }), jsxRuntime.jsxs(footerMenuMobile, { children: [jsxRuntime.jsx(ItemMenuMobile, { style: {}, onClick: () => onClickExit(), children: jsxRuntime.jsxs("span", { children: [' ', jsxRuntime.jsx(ExitArrow, { fill: "white" }), " \u00A0 ", languageSelected === 'en-US' ? 'Logout' : 'Sair'] }) }), jsxRuntime.jsx("span", { style: { marginTop: 24 }, children: languageSelected === 'en-US'
                                    ? 'Visit our channel and social networks'
                                    : 'Visite nossos canais e redes sociais' }), jsxRuntime.jsxs(frstSocials, { children: [jsxRuntime.jsxs(itemFrstSocials, { onClick: onClickSite, children: [' ', jsxRuntime.jsx(SiteIcon, {}), ' '] }), jsxRuntime.jsxs(itemFrstSocials, { onClick: onClickLinkedin, children: [' ', jsxRuntime.jsx(LinkedinIcon, {}), ' '] }), jsxRuntime.jsxs(itemFrstSocials, { onClick: onClickInstagram, children: [' ', jsxRuntime.jsx(InstagramIcon, {}), ' '] }), jsxRuntime.jsxs(itemFrstSocials, { onClick: onClickYoutube, children: [' ', jsxRuntime.jsx(YoutubeIcon, {}), ' '] }), jsxRuntime.jsxs(itemFrstSocials, { onClick: onClickSpotify, children: [' ', jsxRuntime.jsx(SpotifyIcon, {}), ' '] }), jsxRuntime.jsxs(itemFrstSocials, { onClick: onClickPodCast, children: [' ', jsxRuntime.jsx(PodCastIcon, {}), ' '] })] })] })] })) }) }));
}
function IconHamburgerMenu() {
    return (jsxRuntime.jsx("div", { children: jsxRuntime.jsxs("svg", { width: "27", height: "33", viewBox: "0 0 27 33", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M7.46 2.4H6.23L4.79 6.42L4.28 8.06H4.26L3.76 6.41L2.31 2.4H1.08V9H1.84V4.85L1.75 3.11H1.76L3.93 9H4.61L6.78 3.11H6.79L6.7 4.85V9H7.46V2.4ZM13.6673 6.24C13.6673 4.95 12.8773 3.9 11.4273 3.9C9.91727 3.9 9.06727 4.88 9.06727 6.5C9.06727 8.12 9.97727 9.1 11.4873 9.1C12.5673 9.1 13.1873 8.69 13.5673 8.01L12.8973 7.66C12.7173 8.14 12.2173 8.4 11.4873 8.4C10.5673 8.4 9.95727 7.81 9.85727 6.8H13.6273C13.6473 6.66 13.6673 6.47 13.6673 6.24ZM11.4273 4.6C12.2773 4.6 12.7873 5.17 12.8973 6.09H9.86727C9.98727 5.15 10.5373 4.6 11.4273 4.6ZM17.6178 3.9C16.9278 3.9 16.2878 4.15 15.9378 4.78L15.8878 4H15.1878V9H15.9878V6.34C15.9878 5.06 16.8078 4.6 17.5378 4.6C18.2278 4.6 18.7678 4.97 18.7678 6.08V9H19.5678V5.8C19.5678 4.51 18.6878 3.9 17.6178 3.9ZM24.9092 4V6.72C24.9092 7.9 24.1592 8.4 23.3092 8.4C22.5892 8.4 22.1292 8.09 22.1292 7.06V4H21.3292V7.27C21.3292 8.59 22.1792 9.1 23.1692 9.1C23.9692 9.1 24.6092 8.84 24.9592 8.24L25.0092 9H25.7092V4H24.9092Z", fill: "white" }), jsxRuntime.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 15.5854C0 15.0332 0.447715 14.5854 1 14.5854H24.7843C25.3366 14.5854 25.7843 15.0332 25.7843 15.5854C25.7843 16.1377 25.3366 16.5854 24.7843 16.5854H1C0.447715 16.5854 0 16.1377 0 15.5854ZM0 23.6736C0 23.1213 0.447715 22.6736 1 22.6736H24.7843C25.3366 22.6736 25.7843 23.1213 25.7843 23.6736C25.7843 24.2259 25.3366 24.6736 24.7843 24.6736H1C0.447715 24.6736 0 24.2259 0 23.6736ZM1 30.7617C0.447715 30.7617 0 31.2094 0 31.7617C0 32.314 0.447715 32.7617 1 32.7617H24.7843C25.3366 32.7617 25.7843 32.314 25.7843 31.7617C25.7843 31.2094 25.3366 30.7617 24.7843 30.7617H1Z", fill: "white" })] }) }));
}
function HasNotificationIcon() {
    return (jsxRuntime.jsx("div", { children: jsxRuntime.jsx("svg", { width: "10", height: "10", viewBox: "0 0 10 10", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("rect", { width: "10", height: "10", rx: "5", fill: "#FF4D0D" }) }) }));
}

var css_248z$1 = ".extraContent-module_container__tV2ud {\n    background-color: #E0E0E0;\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    font-family: 'PT Sans';\n    padding: 20px;\n}\n\n.extraContent-module_contentInfo__TGKPS {\n    padding: 32px 20px;\n}\n\n.extraContent-module_notes__I6JnG {\n    display: flex;\n    flex-direction: column;\n}\n\n.extraContent-module_saveNotes__DHETt {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    margin-top: 24px;\n}";
var style$1 = {"container":"extraContent-module_container__tV2ud","contentInfo":"extraContent-module_contentInfo__TGKPS","notes":"extraContent-module_notes__I6JnG","saveNotes":"extraContent-module_saveNotes__DHETt"};
styleInject(css_248z$1);

function AdminExtraContent(props) {
    const [valueTabs, setValueTabs] = React.useState(0);
    const [transcriptionText, setTranscriptionText] = React.useState('');
    const handleChangeTabs = (e, newTab) => {
        setValueTabs(newTab);
    };
    React.useState([]);
    function BooksInfo(books) {
        let bookInfo;
        return (jsxRuntime.jsxs("div", { style: { marginTop: 16 }, children: [jsxRuntime.jsx(TextField, { label: "Nome do livro", onChange: (e) => bookInfo.name = e.target.value }), jsxRuntime.jsx(TextField, { label: "Nome do autor", onChange: (e) => bookInfo.autor = e.target.value }), jsxRuntime.jsx(TextField, { label: "Link para compra", onChange: (e) => bookInfo.link = e.target.value }), jsxRuntime.jsx("div", { style: { marginBottom: 8 }, children: jsxRuntime.jsx("span", { children: " Fa\u00E7a upload da capa do livro abaixo" }) }), jsxRuntime.jsx(FileUpload, { variant: "landscape" })] }));
    }
    return (jsxRuntime.jsxs("div", { className: style$1.container, children: [jsxRuntime.jsx("span", { style: { fontSize: 18, fontWeight: 700 }, children: "Material extra" }), jsxRuntime.jsx("div", { className: style$1.contentTabs, children: jsxRuntime.jsxs(material.Tabs, { value: valueTabs, onChange: handleChangeTabs, sx: {
                        '& .Mui-selected ': {
                            color: '#FF4D0D !important',
                            fontWeight: '700 !important'
                        },
                        '& .MuiTab-root': {
                            fontFamily: 'PT Sans !important',
                            textTransform: 'none !important',
                            fontWeight: '400 !important',
                        },
                        '& .MuiTabs-indicator': {
                            backgroundColor: '#FF5427 !important',
                        }
                    }, children: [jsxRuntime.jsx(material.Tab, { label: 'Transcri\u00E7\u00E3o', value: 0 }), jsxRuntime.jsx(material.Tab, { label: 'Material de apoio', value: 1 }), jsxRuntime.jsx(material.Tab, { label: 'Livros', value: 2 })] }) }), jsxRuntime.jsxs("div", { className: style$1.contentInfo, children: [valueTabs === 0 &&
                        jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("div", { children: jsxRuntime.jsx("span", { style: { fontSize: 16, fontWeight: 400 }, children: "Para ajudar as pessoas com algum problema auditivo ou que somente desejam revisar de forma r\u00E1pida o conte\u00FAdo, transcreva abaixo o que foi dito durante o v\u00EDdeo." }) }), jsxRuntime.jsx(Textarea, { label: "Transcri\u00E7\u00E3o", style: { marginTop: 24 }, height: '150px', onChange: (e) => {
                                        setTranscriptionText(e.target.value);
                                    } })] }), valueTabs === 1 &&
                        jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("div", { children: jsxRuntime.jsx("span", { style: { fontSize: 16, fontWeight: 400 }, children: "Adicone materiais extras como PDFs e PPTs que ajudem seus alunos a se desenvolverem neste assunto." }) }), jsxRuntime.jsx("div", { style: { marginTop: 24, marginBottom: 8 }, children: jsxRuntime.jsx("span", { style: { fontSize: 16, fontWeight: 400 }, children: "Fa\u00E7a o upload dos arquivos abaixo" }) }), jsxRuntime.jsx(FileUpload, { variant: "landscape" })] }), valueTabs === 2 &&
                        jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("span", { style: { fontSize: 16, fontWeight: 400 }, children: "Adicione abaixo links de compra dos livros que podem ajudar seus alunos a se desenvolverem nesta \u00E1rea." }), BooksInfo(), jsxRuntime.jsx("div", { style: { marginTop: 24 }, children: jsxRuntime.jsx(Button$3, { variant: "expandedSecondary", label: "Adicionar", startIcon: jsxRuntime.jsx(AddIcon, { fill: "#FF4D0D" }), handleClick: () => { } }) })] })] })] }));
}

const Button$2 = React__default["default"].forwardRef(({ className, active, reversed, ...props }, ref) => (jsxRuntime.jsx("span", { ...props, ref: ref, className: css.cx(className, css.css `
          cursor: pointer;
          color: ${reversed
        ? active
            ? 'white'
            : '#aaa'
        : active
            ? 'black'
            : '#ccc'};
        `) })));
React__default["default"].forwardRef(({ className, value, ...props }, ref) => {
    const textLines = value.document.nodes
        .map(node => node.text)
        .toArray()
        .join('\n');
    return (jsxRuntime.jsxs("div", { ref: ref, ...props, className: css.cx(className, css.css `
            margin: 30px -20px 0;
          `), children: [jsxRuntime.jsx("div", { className: css.css `
            font-size: 14px;
            padding: 5px 20px;
            color: #404040;
            border-top: 2px solid #eeeeee;
            background: #f8f8f8;
          `, children: "Slate's value as text" }), jsxRuntime.jsx("div", { className: css.css `
            color: #404040;
            font: 12px monospace;
            white-space: pre-wrap;
            padding: 10px 20px;
            div {
              margin: 0 0 0.5em;
            }
          `, children: textLines })] }));
});
React__default["default"].forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("span", { ...props, ref: ref, className: css.cx('material-icons', className, css.css `
          font-size: 18px;
          vertical-align: text-bottom;
        `) })));
React__default["default"].forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("div", { ...props, ref: ref, className: css.cx(className, css.css `
          white-space: pre-wrap;
          margin: 0 -20px 10px;
          padding: 10px 20px;
          font-size: 14px;
          background: #f8f8e8;
        `) })));
const Menu = React__default["default"].forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("div", { ...props, ref: ref, className: css.cx(className, css.css `
          & > * {
            display: inline-block;
          }

          & > * + * {
            margin-left: 15px;
          }
        `) })));
const Toolbar = React__default["default"].forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(Menu, { ...props, ref: ref, className: css.cx(className, css.css `
          position: relative;
          padding: 16px 16px 16px;
          border-bottom: 2px solid #eee;
          background-color: #FFF
        `) })));

const HOTKEYS = {
    'mod+b': 'bold',
    'mod+i': 'italic',
    'mod+u': 'underline',
    'mod+`': 'code',
};
const LIST_TYPES = ['numbered-list', 'bulleted-list'];
const TEXT_ALIGN_TYPES = ['left', 'center', 'right', 'justify'];
const RichTextExample = () => {
    const renderElement = React.useCallback(props => jsxRuntime.jsx(Element, { ...props }), []);
    const renderLeaf = React.useCallback(props => jsxRuntime.jsx(Leaf, { ...props }), []);
    const editor = React.useMemo(() => slateHistory.withHistory(slateReact.withReact(slate.createEditor())), []);
    return (jsxRuntime.jsxs(slateReact.Slate, { editor: editor, value: initialValue, children: [jsxRuntime.jsxs(Toolbar, { children: [jsxRuntime.jsx(MarkButton, { format: "bold", icon: jsxRuntime.jsx(iconsMaterial.FormatBold, {}) }), jsxRuntime.jsx(MarkButton, { format: "italic", icon: jsxRuntime.jsx(iconsMaterial.FormatItalic, {}) }), jsxRuntime.jsx(MarkButton, { format: "underline", icon: jsxRuntime.jsx(iconsMaterial.FormatUnderlined, {}) }), jsxRuntime.jsx(MarkButton, { format: "code", icon: jsxRuntime.jsx(iconsMaterial.Code, {}) }), jsxRuntime.jsx(BlockButton, { format: "heading-one", icon: jsxRuntime.jsx(iconsMaterial.LooksOne, {}) }), jsxRuntime.jsx(BlockButton, { format: "heading-two", icon: jsxRuntime.jsx(iconsMaterial.LooksTwo, {}) }), jsxRuntime.jsx(BlockButton, { format: "block-quote", icon: jsxRuntime.jsx(iconsMaterial.FormatQuote, {}) }), jsxRuntime.jsx(BlockButton, { format: "numbered-list", icon: jsxRuntime.jsx(iconsMaterial.FormatListNumbered, {}) }), jsxRuntime.jsx(BlockButton, { format: "bulleted-list", icon: jsxRuntime.jsx(iconsMaterial.FormatListBulleted, {}) }), jsxRuntime.jsx(BlockButton, { format: "left", icon: jsxRuntime.jsx(iconsMaterial.FormatAlignLeft, {}) }), jsxRuntime.jsx(BlockButton, { format: "center", icon: jsxRuntime.jsx(iconsMaterial.FormatAlignCenter, {}) }), jsxRuntime.jsx(BlockButton, { format: "right", icon: jsxRuntime.jsx(iconsMaterial.FormatAlignRight, {}) }), jsxRuntime.jsx(BlockButton, { format: "justify", icon: jsxRuntime.jsx(iconsMaterial.FormatAlignJustify, {}) })] }), jsxRuntime.jsx(slateReact.Editable, { renderElement: renderElement, renderLeaf: renderLeaf, placeholder: "Digite seu texto aqui", spellCheck: true, autoFocus: true, style: { height: 275, width: '100%', backgroundColor: '#EBEBEB', border: '1px solid #E0E0E0', overflow: 'auto' }, onKeyDown: event => {
                    for (const hotkey in HOTKEYS) {
                        if (isHotkey__default["default"](hotkey, event)) {
                            event.preventDefault();
                            const mark = HOTKEYS[hotkey];
                            toggleMark(editor, mark);
                        }
                    }
                } })] }));
};
const toggleBlock = (editor, format) => {
    const isActive = isBlockActive(editor, format, TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type');
    const isList = LIST_TYPES.includes(format);
    slate.Transforms.unwrapNodes(editor, {
        match: n => !slate.Editor.isEditor(n) &&
            slate.Element.isElement(n) &&
            // @ts-ignore
            LIST_TYPES.includes(n.type) &&
            !TEXT_ALIGN_TYPES.includes(format),
        split: true,
    });
    let newProperties;
    if (TEXT_ALIGN_TYPES.includes(format)) {
        newProperties = {
            // @ts-ignore
            align: isActive ? undefined : format,
        };
    }
    else {
        newProperties = {
            // @ts-ignore
            type: isActive ? 'paragraph' : isList ? 'list-item' : format,
        };
    }
    slate.Transforms.setNodes(editor, newProperties);
    if (!isActive && isList) {
        const block = { type: format, children: [] };
        slate.Transforms.wrapNodes(editor, block);
    }
};
const toggleMark = (editor, format) => {
    const isActive = isMarkActive(editor, format);
    if (isActive) {
        slate.Editor.removeMark(editor, format);
    }
    else {
        slate.Editor.addMark(editor, format, true);
    }
};
const isBlockActive = (editor, format, blockType = 'type') => {
    const { selection } = editor;
    if (!selection)
        return false;
    const [match] = Array.from(slate.Editor.nodes(editor, {
        at: slate.Editor.unhangRange(editor, selection),
        match: n => !slate.Editor.isEditor(n) &&
            slate.Element.isElement(n) &&
            n[blockType] === format,
    }));
    return !!match;
};
const isMarkActive = (editor, format) => {
    const marks = slate.Editor.marks(editor);
    return marks ? marks[format] === true : false;
};
const Element = ({ attributes, children, element }) => {
    const style = { textAlign: element.align };
    switch (element.type) {
        case 'block-quote':
            return (jsxRuntime.jsx("blockquote", { style: style, ...attributes, children: children }));
        case 'bulleted-list':
            return (jsxRuntime.jsx("ul", { style: style, ...attributes, children: children }));
        case 'heading-one':
            return (jsxRuntime.jsx("h1", { style: style, ...attributes, children: children }));
        case 'heading-two':
            return (jsxRuntime.jsx("h2", { style: style, ...attributes, children: children }));
        case 'list-item':
            return (jsxRuntime.jsx("li", { style: style, ...attributes, children: children }));
        case 'numbered-list':
            return (jsxRuntime.jsx("ol", { style: style, ...attributes, children: children }));
        default:
            return (jsxRuntime.jsx("p", { style: style, ...attributes, children: children }));
    }
};
const Leaf = ({ attributes, children, leaf }) => {
    if (leaf.bold) {
        children = jsxRuntime.jsx("strong", { children: children });
    }
    if (leaf.code) {
        children = jsxRuntime.jsx("code", { children: children });
    }
    if (leaf.italic) {
        children = jsxRuntime.jsx("em", { children: children });
    }
    if (leaf.underline) {
        children = jsxRuntime.jsx("u", { children: children });
    }
    return jsxRuntime.jsx("span", { ...attributes, children: children });
};
const BlockButton = ({ format, icon }) => {
    const editor = slateReact.useSlate();
    return (jsxRuntime.jsx(Button$2, { active: isBlockActive(editor, format, TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type'), onMouseDown: event => {
            event.preventDefault();
            toggleBlock(editor, format);
        }, children: icon }));
};
const MarkButton = ({ format, icon }) => {
    const editor = slateReact.useSlate();
    return (jsxRuntime.jsx(Button$2, { active: isMarkActive(editor, format), onMouseDown: event => {
            event.preventDefault();
            toggleMark(editor, format);
        }, children: icon }));
};
const initialValue = [
    {
        type: 'paragraph',
        children: [
            { text: '' }
        ],
    },
];

function StudentExtraContent(props) {
    const [valueTabs, setValueTabs] = React.useState(0);
    const [comments, setComments] = React.useState('');
    React.useState('');
    const handleChangeTabs = (e, newTab) => {
        setValueTabs(newTab);
    };
    const handleComments = (e) => {
        setComments(e.target.value);
    };
    return (jsxRuntime.jsxs("div", { className: style$1.container, children: [jsxRuntime.jsx("div", { className: style$1.contentTabs, children: jsxRuntime.jsxs(material.Tabs, { value: valueTabs, onChange: handleChangeTabs, sx: {
                        '& .Mui-selected ': {
                            color: '#FF4D0D !important',
                            fontWeight: '700 !important'
                        },
                        '& .MuiTab-root': {
                            fontFamily: 'PT Sans !important',
                            textTransform: 'none !important',
                            fontWeight: '400 !important',
                        },
                        '& .MuiTabs-indicator': {
                            backgroundColor: '#FF5427 !important',
                        }
                    }, children: [jsxRuntime.jsx(material.Tab, { label: 'Anota\u00E7\u00F5es', value: 0 }), jsxRuntime.jsx(material.Tab, { label: 'Livros recomendados', value: 1 }), jsxRuntime.jsx(material.Tab, { label: 'Material de apoio', value: 2 }), jsxRuntime.jsx(material.Tab, { label: 'Transcri\u00E7\u00E3o', value: 3 }), jsxRuntime.jsx(material.Tab, { label: 'Coment\u00E1rios', value: 4 })] }) }), jsxRuntime.jsxs("div", { className: style$1.contentInfo, children: [valueTabs === 0 &&
                        jsxRuntime.jsxs("div", { className: style$1.notes, children: [jsxRuntime.jsx("span", { style: { fontSize: 16, fontWeight: 400, color: '#000' }, children: " Escreva e fa\u00E7a suas anota\u00E7\u00F5es aqui para rever depois, este espa\u00E7o \u00E9 seu." }), jsxRuntime.jsx("div", { style: { marginTop: 12 }, children: jsxRuntime.jsx(RichTextExample, {}) }), jsxRuntime.jsx("div", { className: style$1.saveNotes, children: jsxRuntime.jsx(Button$3, { label: "Salvar", variant: "primary", handleClick: () => { } }) })] }), valueTabs === 1 &&
                        jsxRuntime.jsx(material.Grid, { container: true, spacing: 0, children: props.bookList?.map((item, index) => {
                                return (jsxRuntime.jsxs(material.Grid, { item: true, style: { position: 'relative', width: 200, height: 310, backgroundColor: '#FFF', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '16px 32px 8px 32px', border: '1px solid #BDBDBD', cursor: 'pointer' }, onClick: () => { props.onClickBook(item.id); }, children: [jsxRuntime.jsx("img", { src: item.img, width: 130, height: 185 }), jsxRuntime.jsxs("span", { style: { fontSize: 16, fontWeight: 400, color: '#000', marginTop: 12 }, children: [" ", item.title, " "] }), jsxRuntime.jsxs("span", { style: { fontSize: 12, fontWeight: 400, color: '#000', position: 'absolute', bottom: 0, marginBottom: 8 }, children: [" ", item.autor, " "] })] }, index));
                            }) }), valueTabs === 2 &&
                        jsxRuntime.jsx(material.Grid, { container: true, spacing: 0, children: props.suportMaterial?.map((item, index) => {
                                return (jsxRuntime.jsxs(material.Grid, { item: true, style: { width: 200, height: 240, backgroundColor: '#FFF', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', padding: '16px 32px 8px 32px', border: '1px solid #BDBDBD' }, children: [jsxRuntime.jsx("img", { src: item.img, width: 65, height: 70 }), jsxRuntime.jsx("span", { style: { fontSize: 16, fontWeight: 400, color: '#000', marginTop: 12 }, children: item.description }), jsxRuntime.jsxs("label", { htmlFor: "downloadBtn", onClick: () => { props.onClickSuportMaterial(item.id); }, style: { color: '#0645AD', fontWeight: 700, cursor: 'pointer' }, children: [" ", jsxRuntime.jsx(DownloadIcon, { fill: "#0645AD" }), " \u00A0 Download"] })] }, index));
                            }) }), valueTabs === 3 &&
                        jsxRuntime.jsx("div", { style: { fontSize: 16, fontWeight: 400, textAlign: 'justify' }, children: jsxRuntime.jsx("span", { children: props.transcription }) }), valueTabs === 4 &&
                        jsxRuntime.jsxs("div", { style: { display: 'flex', flexDirection: 'column' }, children: [jsxRuntime.jsxs("div", { style: { display: 'flex', flexDirection: 'row' }, children: [jsxRuntime.jsx(Avatar, { size: '40px', src: props.userAvatar }), jsxRuntime.jsx(InputComment, { className: '', showCharacterCounter: false, IDInput: '1', emojiWindowlanguage: 'pt', placeholder: 'Comente aqui sobre o seu problema', value: comments, onChange: (e) => handleComments(e), remain: 1000 - comments.length, limit: 1000, hasEmoji: true, styles: { marginLeft: '8px', width: '80%' } })] }), jsxRuntime.jsx("div", { children: props.commentList?.map((item, index) => {
                                        return (jsxRuntime.jsxs("div", { style: { display: 'flex', flexDirection: 'row', marginTop: 20 }, children: [jsxRuntime.jsx(Avatar, { size: '40px', src: item?.userAvatar }), jsxRuntime.jsx(CommentaryBox, { className: '', name: item.userName, position: item.userPosition, value: item.comments, date: item.date, onChange: () => { }, styles: { marginRight: 8, width: '80%' }, textLiked: 'Curtir', actionLike: () => { item.isLiked = true; }, isLiked: item?.isLiked })] }, index));
                                    }) })] })] })] }));
}

// import RichTextEditor from './richTextEditor'
function ExtraContent(props) {
    return (jsxRuntime.jsx("div", { children: props.typeExhibition === 1 ?
            AdminExtraContent()
            :
                StudentExtraContent(props) }));
}

const isColorBlack = ({ theme }) => theme.colors.shadeBlack;
const isColorError = ({ theme }) => theme.colors.linkError;
const Container$5 = styled__default["default"].div `
  width: 100%;
  max-width: 445px;
  min-height: 509px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.shadeWhite};
  box-sizing: border-box;
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;
const ContainerLogo = styled__default["default"].div `
  width: 100%;
  min-height: 88px;
  position: absoulte;
  background-color: ${({ theme }) => theme.colors.primary1};
  border-radius: 8px 8px 0px 0px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 82, 71%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContainerTypography = styled__default["default"].div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 22px;
  margin-bottom: 20px;
`;
const TypographyWelcome = styled__default["default"].p `
  font-family: Work Sans;
  font-style: normal;
  font-size: 24px;
  font-weight: 700;
  line-height: 31px;
  letter-spacing: 0.01em;
  color: ${({ theme }) => theme.colors.primary1};
`;
const TypographyFill = styled__default["default"].p `
  font-family: PT Sans;
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  color: ${({ theme }) => theme.colors.neutralsGrey1};
  margin-left: 44px;
  margin-right: 44px;
  margin-bottom: 22px;
`;
const ContainerEmail = styled__default["default"].div `
  width: 80%;
  margin-left: 44px;
  @media (max-width: 414px) {
    margin-right: 44px;
  }

  ${(props) => props.isError &&
    styled.css `
      @media (max-width: 414px) {
        margin-right: 5px;
      }
    `}
`;
const ContainerButtonLink = styled__default["default"].div `
  right: 0;
  margin-right: 44px;
  margin-top: 7.5rem;
  position: absolute;
  @media (max-width: 414px) {
    margin: 7.5rem 44px 0px 0px;
  }
`;
const ContainerPassword = styled__default["default"].div `
  width: 80%;
  margin-left: 44px;
  margin-top: 33px;
  @media (max-width: 414px) {
    margin-right: 44px;
  }

  ${(props) => props.isError &&
    styled.css `
      @media (max-width: 414px) {
        margin-right: 5px;
      }
    `}
`;
const ContainerInputAndLink = styled__default["default"].div `
  display: flex;
  flex-direction: column;
`;
const IconAlert = styled__default["default"].div `
  right: 0;
  bottom: 0;
  padding: 45px 10px 0px 6px;
  ${(props) => props.isStep === 2 &&
    styled.css `
      margin-top: 36px;
    `}
`;
const ContainerIpuntAndIsIcon = styled__default["default"].div `
  display: flex;
  align-items: flex-start;
`;
const ContainerConnect = styled__default["default"].div `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-right: 44px;
  margin-left: 44px;
  margin-top: 32px;
  margin-bottom: 20px;
  padding-bottom: 32px;
`;
const ContainerCheckbox = styled__default["default"].div `
  cursor: pointer;
  display: flex;
  gap: 8px;
`;
const TypographyConnect = styled__default["default"].p `
  font-family: PT Sans;
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  color: ${({ theme }) => theme.colors.shadeBlack};
`;
// ######################recover####################
const ContainerRecover = styled__default["default"].div `
  width: 100%;
  max-width: 445px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.neutralsGrey5};
  background-color: ${({ theme }) => theme.colors.shadeWhite};
  box-sizing: border-box;
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;
const ContainerLogoRecover = styled__default["default"].div `
  width: 100%;
  min-height: 88px;
  position: absoulte;
  background-color: ${({ theme }) => theme.colors.primary1};
  border-radius: 8px 8px 0px 0px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContainerTypographyRecover = styled__default["default"].div `
  margin: 32px 44px 0 44px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const TypographyRecover = styled__default["default"].p `
  font-family: PT Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.neutralsGrey1};
`;
const ContainerEmailRecover = styled__default["default"].div `
  margin-left: 44px;
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 80%;
  @media (max-width: 414px) {
    margin-right: 44px;
  }

  ${(props) => props.isError &&
    styled.css `
      @media (max-width: 414px) {
        margin-right: 5px;
      }
    `}
`;
const ContainerEmailAndTypeRecoverRecover = styled__default["default"].div `
  display: flex;
  flex-direction: column;
`;
const ContainerButtonRecover = styled__default["default"].div `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 30px 30px 20px 44px;
  padding-bottom: 32px;
  @media (max-width: 767px) {
    margin-top: 58px;
  }
`;
//#########################NewPassaword#################
const TypographyNewPassword = styled__default["default"].p `
  font-family: PT Sans;
  font-size: 16px;
  font-weight: ${(props) => (props.isColorError ? 600 : 400)};
  line-height: 21px;
  color: ${(props) => (props.isColorError ? isColorError : isColorBlack)};
  position: absolute;
  margin: 34px 44px 10px 44px;
`;
const ContainerTypographyNewPassword = styled__default["default"].div `
  width: 100%;
  height: 6.5rem;
`;
const ContainerPasswordNew = styled__default["default"].div `
  margin-top: 100px;
  margin-left: 44px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media (max-width: 414px) {
    margin-right: 31px;
  }

  ${(props) => props.isError &&
    styled.css `
      @media (max-width: 414px) {
        margin-right: 13px;
      }
    `}
`;
//###############SendComfirmation##############
const ContainerSendComfirmation = styled__default["default"].div `
  width: 100%;
  max-width: 445px;
  min-height: 302px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.neutralsGrey5};
  background-color: ${({ theme }) => theme.colors.shadeWhite};
  box-sizing: border-box;
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;
const ContainerButtonSendConfirmation = styled__default["default"].div `
  display: flex;
  justify-content: end;
  margin: 126px 44px 0 0;
`;

function Login(props) {
    const [email, setEmail] = React.useState('');
    const [confirmEmail, setConfirmEmail] = React.useState('');
    const [emailRecover, setEmailRecover] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [newPassword, setNewPassword] = React.useState('');
    const [codigoNewPassword, setCodigoNewPassword] = React.useState('');
    const [keepConnected, setKeepConnected] = React.useState(true);
    const [step, setStep] = React.useState(1);
    const [error, setError] = React.useState(props.isError);
    const [colorError, setColorError] = React.useState(props.isError);
    const [MsgInput1, setMsgInput1] = React.useState('');
    const [MsgInput2, setMsgInput2] = React.useState('');
    React.useEffect(() => {
        setError(props.isError);
    }, [props.isError]);
    const onClikLogin = () => {
        setMsgInput1('');
        setMsgInput2('');
        setError(false);
        if (email.length === 0) {
            setMsgInput2(props.textErrorEmailNaoInformado ? props.textErrorEmailNaoInformado : 'E-mail não informado.');
            setError(true);
            return;
        }
        if (password.length === 0) {
            setMsgInput2(props.textErrorSenhaNaoInformado ? props.textErrorSenhaNaoInformado : 'Senha não Informada.');
            setError(true);
            return;
        }
        if (props.isError) {
            setMsgInput2(props.textErrorLoginPropsIsError ? props.textErrorLoginPropsIsError : 'E-mail ou senhas incorretos.');
            setError(true);
        }
        props.handleClickLogin(email, password, keepConnected);
    };
    const onClickForgotPasswordChange = () => {
        //const emailRegex = ('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        setMsgInput1('');
        setMsgInput2('');
        setError(false);
        if (emailRecover.length === 0) {
            setMsgInput2(props.textEmailErrorNaoPrenchido ? props.textEmailErrorNaoPrenchido : 'E-mail não preenchido.');
            setError(true);
            return;
        }
        let regexEmail = /\S+@\S+.\S+/;
        if (!regexEmail.test(emailRecover)) {
            setMsgInput2(props.textEmailErrorInvalido ? props.textEmailErrorInvalido : 'E-mail inválido.');
            setError(true);
            return;
        }
        if (props.isError) {
            setMsgInput2(props.textEmailErrorPropsIsError
                ? props.textEmailErrorPropsIsError
                : 'Erro ao enviar email de recuperação de senha.');
            setError(true);
        }
        props.handleClickForgotPassword(emailRecover);
        setStep(3);
    };
    const onClickSave = () => {
        setMsgInput1('');
        setMsgInput2('');
        setError(false);
        setColorError(false);
        if (confirmEmail.length === 0) {
            setMsgInput2(props.textNewPasswordErrorEmailNaoInformada
                ? props.textNewPasswordErrorEmailNaoInformada
                : 'Email não informado.');
            setError(true);
            return;
        }
        let regexEmail = /\S+@\S+.\S+/;
        if (!regexEmail.test(confirmEmail)) {
            setMsgInput2(props.textEmailErrorInvalido ? props.textEmailErrorInvalido : 'E-mail inválido.');
            setError(true);
            return;
        }
        if (newPassword.length === 0) {
            setMsgInput2(props.textNewPasswordErrorNaoInformada ? props.textNewPasswordErrorNaoInformada : 'Nova senha não informada.');
            setError(true);
            return;
        }
        if (codigoNewPassword.length === 0) {
            setMsgInput2(props.textNewPasswordErrorCodigo ? props.textNewPasswordErrorCodigo : 'Código não informado.');
            setError(true);
            return;
        }
        if (props.isError) {
            setMsgInput2(props.textNewPasswordErrorInforma ? props.textNewPasswordErrorInforma : 'Erro ao informar nova senha.');
            setError(true);
        }
        let emailPrefix = confirmEmail.split('@')[0].split('.')[0];
        let emailSufix = confirmEmail.split('@')[1].split('.')[0];
        const validateEmailPrefix = new RegExp(emailPrefix, 'g');
        const validateEmailSufix = new RegExp(emailSufix, 'g');
        const validateUpperCase = new RegExp(/[A-Z]/, 'g');
        if (newPassword &&
            (!newPassword.replace(/\D/g, '') ||
                !newPassword.replace(/\d/g, '') ||
                !newPassword.replace(/\w/g, '') ||
                newPassword.match(/frst|falconi|FRST|FALCONI|Frst|Falconi/g) ||
                newPassword.match(validateEmailPrefix) ||
                newPassword.match(validateEmailSufix) ||
                !newPassword.match(validateUpperCase) ||
                newPassword.length < 8)) {
            setColorError(true);
            setError(true);
            return;
        }
        props.handleClickChangePassword(newPassword, codigoNewPassword, confirmEmail);
    };
    const handleClickCheckbox = () => {
        setKeepConnected(!keepConnected);
    };
    const onClickForgotPassword = () => {
        setError(false);
        setEmailRecover('');
        setStep(2);
        setMsgInput2('');
    };
    const onClickNotCancel = () => {
        setError(false);
        setStep(1);
        setMsgInput2('');
    };
    React.useEffect(() => {
        setError(props.isError);
        setMsgInput2(props.isError ? 'E-mail ou senhas incorretos.' : '');
    }, [props.isError]);
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: props.variant === 'login' && step === 1 ? (jsxRuntime.jsxs(Container$5, { children: [jsxRuntime.jsx(ContainerLogo, { children: jsxRuntime.jsx(FRSTLogoBig, {}) }), jsxRuntime.jsx(ContainerTypography, { children: jsxRuntime.jsx(TypographyWelcome, { children: props.textBoasVindas ? props.textBoasVindas : 'Bem-vindo' }) }), jsxRuntime.jsx(TypographyFill, { children: props.textLoginInformacao ? props.textLoginInformacao : 'Para acessar, preencha os campos abaixo:' }), jsxRuntime.jsxs(ContainerInputAndLink, { children: [jsxRuntime.jsxs(ContainerIpuntAndIsIcon, { children: [jsxRuntime.jsx(ContainerEmail, { isError: error, children: jsxRuntime.jsx(TextField, { error: error, helperText: MsgInput1, placeholder: "Email", label: "Email", type: "email", value: email, onChange: (e) => setEmail(e.target.value), style: { width: '100%' } }) }), error && (jsxRuntime.jsx(IconAlert, { children: jsxRuntime.jsx(AlertCicle, {}) }))] }), jsxRuntime.jsx(ContainerButtonLink, { children: jsxRuntime.jsx(Button$3, { variant: "link", label: props.textoLabelLoginButtonLink ? props.textoLabelLoginButtonLink : 'Esqueceu a senha?', handleClick: onClickForgotPassword }) }), jsxRuntime.jsxs(ContainerIpuntAndIsIcon, { children: [jsxRuntime.jsx(ContainerPassword, { isError: error, children: jsxRuntime.jsx(TextField, { helperText: MsgInput2, error: error, endIcon: jsxRuntime.jsx(Viewer, { fill: error ? '#ff0000' : '#000000' }), placeholder: props.textInputLoginSenha ? props.textInputLoginSenha : 'Senha', label: props.textInputLoginSenha ? props.textInputLoginSenha : 'Senha', type: "password", value: password, onChange: (e) => setPassword(e.target.value), style: { width: '100%' } }) }), error && (jsxRuntime.jsx(IconAlert, { style: { paddingTop: '78px' }, children: jsxRuntime.jsx(AlertCicle, {}) }))] })] }), jsxRuntime.jsxs(ContainerConnect, { children: [jsxRuntime.jsxs(ContainerCheckbox, { onClick: handleClickCheckbox, children: [keepConnected ? jsxRuntime.jsx(CheckboxEmpty, { fill: '#ebeded' }) : jsxRuntime.jsx(CheckboxChecked, {}), jsxRuntime.jsx(TypographyConnect, { children: props.textLoginConectado ? props.textLoginConectado : 'Manter-me conectado' })] }), jsxRuntime.jsx(Button$3, { variant: "primary", label: props.textLoginButton ? props.textLoginButton : 'Entrar', handleClick: onClikLogin })] })] })) : props.variant === 'login' && step === 2 ? (jsxRuntime.jsxs(ContainerRecover, { children: [jsxRuntime.jsx(ContainerLogoRecover, { children: jsxRuntime.jsx(FRSTLogoBig, {}) }), jsxRuntime.jsxs(ContainerEmailAndTypeRecoverRecover, { children: [jsxRuntime.jsxs(ContainerTypographyRecover, { children: [jsxRuntime.jsx(TypographyRecover, { children: props.textEmailCadastro
                                        ? props.textEmailCadastro
                                        : 'Digite seu e-mail de cadastro abaixo e clique em enviar.' }), jsxRuntime.jsx(TypographyRecover, { children: props.textEmailCadastro2
                                        ? props.textEmailCadastro2
                                        : 'Nós lhe enviaremos um e-mail com o link para recastrar sua senha.' })] }), jsxRuntime.jsxs(ContainerIpuntAndIsIcon, { children: [jsxRuntime.jsx(ContainerEmailRecover, { isError: error, children: jsxRuntime.jsx(TextField, { error: error, helperText: MsgInput2, placeholder: "Email", label: "Email", type: "email", value: emailRecover, onChange: (e) => setEmailRecover(e.target.value), style: { width: '100%' } }) }), error && (jsxRuntime.jsx(IconAlert, { isStep: step, children: jsxRuntime.jsx(AlertCicle, {}) }))] })] }), jsxRuntime.jsxs(ContainerButtonRecover, { children: [jsxRuntime.jsx(Button$3, { variant: "link", label: props.textEmailButtonLinkCancel ? props.textEmailButtonLinkCancel : 'Não, cancelar', handleClick: onClickNotCancel }), jsxRuntime.jsx(Button$3, { variant: "primary", label: props.textEmailButtonEnviar ? props.textEmailButtonEnviar : 'Enviar', handleClick: onClickForgotPasswordChange })] })] })) : props.variant === 'newPassword' ? (jsxRuntime.jsxs(Container$5, { children: [jsxRuntime.jsx(ContainerLogoRecover, { children: jsxRuntime.jsx(FRSTLogoBig, {}) }), jsxRuntime.jsx(TypographyNewPassword, { children: props.textNewPasswordInformacao
                        ? props.textNewPasswordInformacao
                        : 'Para criar uma nova senha, preencha os campos abaixo:' }), jsxRuntime.jsxs(ContainerPasswordNew, { isError: error, children: [jsxRuntime.jsxs(ContainerIpuntAndIsIcon, { children: [jsxRuntime.jsx(TextField, { error: error, placeholder: props.textNewPasswordInputEmailPlaceholder
                                        ? props.textNewPasswordInputEmailPlaceholder
                                        : 'Por favor, insira seu e-mail aqui', label: props.textNewPasswordInputEmail ? props.textNewPasswordInputEmail : 'Digite o email', type: 'text', value: confirmEmail, onChange: (e) => setConfirmEmail(e.target.value), style: { width: '95%' } }), error && (jsxRuntime.jsx(IconAlert, { children: jsxRuntime.jsx(AlertCicle, {}) }))] }), jsxRuntime.jsxs(ContainerIpuntAndIsIcon, { children: [jsxRuntime.jsx(TextField, { error: error, endIcon: jsxRuntime.jsx(Viewer, { fill: error ? '#ff0000' : '#000000' }), placeholder: props.textNewPasswordInput ? props.textNewPasswordInput : 'Insira sua nova senha', label: props.textNewPasswordInput ? props.textNewPasswordInput : 'Nova senha', type: 'password', value: newPassword, onChange: (e) => setNewPassword(e.target.value), style: { width: '95%' } }), error && (jsxRuntime.jsx(IconAlert, { children: jsxRuntime.jsx(AlertCicle, {}) }))] }), jsxRuntime.jsxs(ContainerIpuntAndIsIcon, { children: [jsxRuntime.jsx(TextField, { helperText: MsgInput2, error: error, placeholder: props.textNewPasswordInputPlaceholderCodigo ? props.textNewPasswordInputPlaceholderCodigo : 'Código', label: props.textNewPasswordInputCodigo ? props.textNewPasswordInputCodigo : 'Digite o Código', type: 'text', value: codigoNewPassword, onChange: (e) => setCodigoNewPassword(e.target.value), style: { width: '95%' } }), error && (jsxRuntime.jsx(IconAlert, { children: jsxRuntime.jsx(AlertCicle, {}) }))] })] }), jsxRuntime.jsx(ContainerTypographyNewPassword, { children: jsxRuntime.jsx(TypographyNewPassword, { isColorError: colorError, style: { fontSize: '14px' }, children: props.textNewPasswordErrorSenhaForte
                            ? props.textNewPasswordErrorSenhaForte
                            : 'Use pelo menos 8 caracteres, 1 maiúscula, 1 minúscula, e um número ou caractere especial. Não use parte de seu e-mail (seunome@empresa.com) como senha.' }) }), jsxRuntime.jsxs(ContainerButtonRecover, { children: [jsxRuntime.jsx(Button$3, { variant: "link", label: props.textNewPasswordButtonLink ? props.textNewPasswordButtonLink : 'Voltar Login', handleClick: props.handleClickChangePasswordCancel }), jsxRuntime.jsx(Button$3, { variant: "primary", label: props.textNewPasswordButtonSalvar ? props.textNewPasswordButtonSalvar : 'Salvar', handleClick: onClickSave })] })] })) : props.variant === 'login' && step === 3 ? (jsxRuntime.jsxs(ContainerSendComfirmation, { children: [jsxRuntime.jsx(ContainerLogoRecover, { children: jsxRuntime.jsx(FRSTLogoBig, {}) }), jsxRuntime.jsx(TypographyNewPassword, { children: props.textConfirmacaoRespostaEmail
                        ? props.textConfirmacaoRespostaEmail
                        : 'Solicitação enviada com sucesso para o seu e-mail.' }), jsxRuntime.jsx(ContainerButtonSendConfirmation, { children: jsxRuntime.jsx(Button$3, { variant: "primary", label: props.textConfirmacaoButtonRetorna ? props.textConfirmacaoButtonRetorna : 'Retornar', handleClick: props.onClickConfimationBackToLogin }) })] })) : null }));
}

const ContainerHeader = styled__default["default"].div `
    width: 100%;
    min-height: 72px;
    margin-top: 12px;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    padding-left: 27px;
    padding-right: 8px;
    background-color: ${(props) => `${props.active ? '#ffffff' : '#ebebeb'}`};
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey5};
    border-radius: 8px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; 
    z-index: 99px;   
`;
const LoadingContent$1 = styled__default["default"].div `
    background: linear-gradient(90deg, rgba(123, 129, 136, 0) 6.43%, rgba(123, 129, 136, 0.2) 22.38%), #D9D9D9;
    color: transparent;
    border-radius: 5px;
    width: 90%;
    height: 0.45em;
    border: none;
    
    -webkit-animation-duration: 4s;
    -webkit-animation-fill-mode: forwards;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-name: placeholderShimmer;
    -webkit-animation-timing-function: linear;

`;
styled__default["default"].div `
    width: 100%;
    min-height: 72px;
    margin-top: 12px;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    padding-left: 27px;
    padding-right: 20px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; 
    z-index: 99px;   
`;
const ContainerTrailsNormal = styled__default["default"].div `
    height: 415px; 
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey5};
    padding-top: 16px;
    margin-top: -5px; 
    background-color: rgb(235, 235, 235);
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    z-index: 0;
    width: 100%;
`;
const ContainerTrailsEmpty = styled__default["default"].div `
    height: 415px; 
    padding-top: 16px;
    margin-top: -5px; 
    z-index: 0;
    width: 100%;    
    div[visibility="hidden"]{
        position: absolute;
    };
`;
const ContentTrailName = styled__default["default"].div `
    display: flex;
    flex-direction: row;    
    gap: 20px;    
`;
const TypographyTrailName = styled__default["default"].div `
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    color: ${({ theme }) => theme.colors.primary1};
`;
const Select = styled__default["default"].div `
    cursor: pointer;    
`;
const ContentActiveHeader = styled__default["default"].div `
    display: flex;
    flex-direction: row;    
    gap: 50px;    
`;
const TypographyActiveHeader = styled__default["default"].span `
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'PT Sans';
    font-style: normal;
    font-size: 16px;
    line-height: 21px;
    text-align: right;
    color: ${({ theme }) => theme.colors.shadeBlack};    
    display: flex;
    gap: 10px;        
`;
const IconVerticalHeader = styled__default["default"].div `
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
styled__default["default"].div `
    width: 100%;
    min-height: 415px;
    display: flex;
    justify-content: flex-start;
    background-color: ${({ theme }) => theme.colors.neutralsGrey7};
    border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
    border-radius: 0px 0px 8px 8px;    
    padding: 30px 0px 30px 0px;
    filter: ${(props) => `grayscale(${props.active ? '0' : '1'})`};
    margin-top: -5px;
`;
const ContainerCard = styled__default["default"].div `
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    justify-items: center;
    width: 100%;
    min-height: 300px;
    gap: 20px;       
`;
const ContainerInputNameTrail = styled__default["default"].div `
    input{
        border: 1px solid #BDBDBD;
        border-radius: 8px;
        background: #EBEBEB;
        width: 220px;
        height: 45px;
        padding-left: 10px;
    }
`;
const TypographyMyContents = styled__default["default"].div `
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;    
    color: ${({ theme }) => theme.colors.primary1};
`;
const TypographyMyTrails = styled__default["default"].div `
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;    
    color: ${({ theme }) => theme.colors.primary1};
`;
styled__default["default"].div `
    z-index: 999;
    width: 100%;
    min-height: 31px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey4};
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    box-shadow: 0px 18px 20px -15px #222222;
    position: relative;
    padding: 8px;
    margin-bottom: 16px;
`;
styled__default["default"].div `
    width: 13.64px;
    height: 13.64px;
    position: absolute;
    margin: 27px 0 -7px calc(50% - 7px);
    left: 0;
    bottom: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey4};
    border-left: none;   
    border-top: none;
    transform: matrix(0.71, 0.97, -0.51, 0.91, 0, 0);
    
    ${({ variant }) => (variant)}
`;

const ContainerThumbnails = styled__default["default"].div `
    width: 180px;
    min-width: 180px;
    height: ${(props) => `${props.showSwitchIndividual ? '352px' : '300px'}`};
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey5};
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    box-sizing: border-box;
    position: relative;
    padding-top: 8px;    
    z-index: 9999px;
    user-select: none;
`;
const LoadingContainer = styled__default["default"].div `
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 12px;
    width: 180px;
    height: 320px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey5};
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    box-sizing: border-box;
    position: relative;
    padding-top: 8px;    
    z-index: 9999px;
    user-select: none;
    
`;
const ContainerButton = styled__default["default"].div `    
    position: absolute;
    width: 155px;
    height: 205px;
    margin-top: 24px;
    margin-left: 12px;
    border-radius: 4px;
    z-index: 1;
    background-color: #00000090;
    
    padding: 0;
    border: none;
    display: ${(props) => `${props.active ? 'flex' : 'none'}`};
    justify-content: center;
    align-items: center;
`;
const Thumbnails$1 = styled__default["default"].div `
    display: flex;
    justify-content: center;   
`;
const Image = styled__default["default"].img `
    width: 155px;
    height: 205px;
    border-radius: 4px;
    position: absolute;
    object-fit: cover;
    margin-top: 10px;
    margin-left: 12px;
    filter: ${(props) => `grayscale(${props.active ? '0' : '1'})`};   
`;
const LoadingImage = styled__default["default"].div `
    width: 155px;
    height: 205px;
    margin-top: 12px;
    border-radius: 4px;
    object-fit: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(90deg, rgba(123, 129, 136, 0) 6.43%, rgba(123, 129, 136, 0.2) 22.38%), #D9D9D9;
    -webkit-animation-duration: 4s;
    -webkit-animation-fill-mode: forwards;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-name: placeholderShimmer;
    -webkit-animation-timing-function: linear;
`;
const LoadingContent = styled__default["default"].div `
    background: linear-gradient(90deg, rgba(123, 129, 136, 0) 6.43%, rgba(123, 129, 136, 0.2) 22.38%), #D9D9D9;
    color: transparent;
    border-radius: 16px;
    width: 90%;
    height: 0.45em;
    
    -webkit-animation-duration: 4s;
    -webkit-animation-fill-mode: forwards;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-name: placeholderShimmer;
    -webkit-animation-timing-function: linear;

`;
const GeralThumbnails = styled__default["default"].div `    
   margin: 0;
`;
const ContainerMain = styled__default["default"].div `
    display: flex;
    margin-top: 235px;
    position: relative;
    align-items: center;
`;
const Typography$2 = styled__default["default"].div `
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    color: ${({ theme }) => theme.colors.shadeBlack};
    margin-left: 12px; 
    white-space: wrap;
    position: absolute;
`;
const IconVertical = styled__default["default"].div `
    margin-left: 150px;
    margin-top: 10px;
    width: 34px;
    cursor: pointer;
    position: absolute;
`;
const ContainerAtivar = styled__default["default"].div `
    display: flex;
    gap: 6px;
    margin-top: 45px;
    position: absolute;
`;
const TypographyAtivar = styled__default["default"].span `
    font-family: 'PT Sans';
    font-style: normal;
    font-size: 16px;
    line-height: 21px;
    text-align: right;
    width: 120px;
    color: ${({ theme }) => theme.colors.shadeBlack};
`;
/* ################addNew############################ */
const ContainerThumbnailsAdd = styled__default["default"].div `
    width: 177px;
    height: 352px;
    border-radius: 8px;
    border: 1px dashed ${({ theme }) => theme.colors.neutralsGrey5};
    background-color: ${({ theme }) => theme.colors.neutralsGrey6};
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    gap: 10px;
`;
const ContainerEllipse = styled__default["default"].button `
    width: 46px;
    height: 46px;
    border-radius: 50%;
    border: none;
    background-color: ${({ theme }) => theme.colors.neutralsGrey4};
    cursor: pointer;
    padding-top: 5px;
`;
const TypographyAdd = styled__default["default"].div `
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    width: 140px;
    height: 60px;    
    line-height: 19px;     
    color: ${({ theme }) => theme.colors.neutralsGrey4};
    text-align: center;
    word-wrap: break-all !important;     
    white-space:pre-wrap; 
`;

///-----------------------------------------
/// Componente
/**
 *
 * @componente
 */
function VectorEllipse(props) {
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("svg", { width: "5", height: "5", viewBox: "0 0 5 5", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("ellipse", { cx: "2.57143", cy: "2.35", rx: "1.65", ry: "1.57143", transform: "rotate(-90 2.57143 2.35)", fill: "url(#paint0_angular_4285_2572)" }), jsxRuntime.jsx("ellipse", { cx: "2.57143", cy: "2.35", rx: "1.65", ry: "1.57143", transform: "rotate(-90 2.57143 2.35)", fill: "url(#paint1_radial_4285_2572)", fillOpacity: "0.6" }), jsxRuntime.jsx("ellipse", { cx: "2.57143", cy: "2.35", rx: "1.65", ry: "1.57143", transform: "rotate(-90 2.57143 2.35)", stroke: "#BDBDBD", strokeWidth: "0.1" }), jsxRuntime.jsxs("defs", { children: [jsxRuntime.jsxs("radialGradient", { id: "paint0_angular_4285_2572", cx: "0", cy: "0", r: "1", gradientUnits: "userSpaceOnUse", gradientTransform: "translate(2.57143 2.35) rotate(90) scale(1.57143 1.65)", children: [jsxRuntime.jsx("stop", { stopColor: "#757575" }), jsxRuntime.jsx("stop", { offset: "0.526042", stopColor: "#757575", stopOpacity: "0" })] }), jsxRuntime.jsxs("radialGradient", { id: "paint1_radial_4285_2572", cx: "0", cy: "0", r: "1", gradientUnits: "userSpaceOnUse", gradientTransform: "translate(2.57143 2.35) rotate(90) scale(1.57143 1.65)", children: [jsxRuntime.jsx("stop", { offset: "0.380208", stopColor: "white" }), jsxRuntime.jsx("stop", { offset: "1", stopColor: "#EBEBEB", stopOpacity: "0" })] })] })] }) }));
}

///-----------------------------------------
/// Componente
/**
 *
 * @componente
 */
function VectorCross(props) {
    return (jsxRuntime.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M12.2051 1.53845V22.8718", stroke: "#EBEBEB", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M1.53809 12.2051H22.8714", stroke: "#EBEBEB", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })] }));
}

function Thumbnails({ variant, src, showSwitch, handleClickCourse, handleClickNew, handleSwitchAtivar, handleClickPopOverDelete, handleClickPopOverEdit, title, provided, isDisabled, isLoading, txtButtonLabel, txtCriarNovoCurso, txtCriarNovoCurso2, txtAtivarCurso, txtPopOverDeleteContent, txtPopOverMoveToTrails, txtPopOverEditContent, isActive }) {
    const defaultImg = "https://i.gyazo.com/35d9c18bbdc6a48d843b0aa24ab2499e.png";
    const [ativo, setAtivo] = React.useState(isDisabled);
    const [showModules, setShowModules] = React.useState(false);
    const [ElementPopover, setElementPopover] = React.useState(null);
    const [Loading, setLoading] = React.useState(isLoading);
    React.useEffect(() => {
        setAtivo(isDisabled);
    }, [isDisabled]);
    React.useEffect(() => {
        setLoading(isLoading);
    }, [isLoading]);
    const handleChangeCheck = (checkedValue) => {
        setAtivo(checkedValue);
        handleSwitchAtivar(checkedValue);
    };
    const handleHoverImage = () => {
        if (!showModules) {
            setShowModules(true);
        }
    };
    const handleHoverImageOut = () => {
        if (showModules) {
            setShowModules(false);
        }
    };
    const LightTooltip = styles.styled(({ className, ...props }) => (jsxRuntime.jsx(Tooltip__default["default"], { ...props, classes: { popper: className } })))(({ theme }) => ({
        [`& .${Tooltip$3.tooltipClasses.tooltip}`]: {
            backgroundColor: theme.palette.common.white,
            color: 'rgba(0, 0, 0, 0.87)',
            boxShadow: theme.shadows[1],
            fontSize: 11,
        },
    }));
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs(styled.ThemeProvider, { theme: FRSTTheme, children: [variant === 'default' ?
                    jsxRuntime.jsx(jsxRuntime.Fragment, { children: Loading ?
                            jsxRuntime.jsxs(LoadingContainer, { children: [jsxRuntime.jsx(LoadingImage, {}), jsxRuntime.jsx(LoadingContent, {}), jsxRuntime.jsx(LoadingContent, { style: { width: '50%' } })] })
                            :
                                jsxRuntime.jsxs(ContainerThumbnails, { showSwitchIndividual: showSwitch, className: variant = 'default', ref: provided ? provided.innerRef : null, ...provided ? provided.draggableProps : null, children: [jsxRuntime.jsx(ContainerButton, { onMouseOut: handleHoverImageOut, className: 'buttonVisible', active: showModules, children: jsxRuntime.jsx(Button$3, { label: txtButtonLabel ? txtButtonLabel : 'Ver conteúdo', variant: 'primary', handleClick: handleClickCourse }) }), jsxRuntime.jsxs(GeralThumbnails, { ref: provided ? provided.innerRef : null, ...provided ? provided.dragHandleProps : null, children: [jsxRuntime.jsxs(Thumbnails$1, { children: [jsxRuntime.jsx(VectorEllipse, {}), jsxRuntime.jsx(VectorEllipse, {}), jsxRuntime.jsx(VectorEllipse, {}), jsxRuntime.jsx(VectorEllipse, {}), jsxRuntime.jsx(VectorEllipse, {}), jsxRuntime.jsx(VectorEllipse, {}), jsxRuntime.jsx(VectorEllipse, {}), jsxRuntime.jsx(VectorEllipse, {}), jsxRuntime.jsx(VectorEllipse, {}), jsxRuntime.jsx(VectorEllipse, {})] }), jsxRuntime.jsxs(Thumbnails$1, { children: [jsxRuntime.jsx(VectorEllipse, {}), jsxRuntime.jsx(VectorEllipse, {}), jsxRuntime.jsx(VectorEllipse, {}), jsxRuntime.jsx(VectorEllipse, {}), jsxRuntime.jsx(VectorEllipse, {}), jsxRuntime.jsx(VectorEllipse, {}), jsxRuntime.jsx(VectorEllipse, {}), jsxRuntime.jsx(VectorEllipse, {}), jsxRuntime.jsx(VectorEllipse, {}), jsxRuntime.jsx(VectorEllipse, {})] }), jsxRuntime.jsxs(Thumbnails$1, { children: [jsxRuntime.jsx(VectorEllipse, {}), jsxRuntime.jsx(VectorEllipse, {}), jsxRuntime.jsx(VectorEllipse, {}), jsxRuntime.jsx(VectorEllipse, {}), jsxRuntime.jsx(VectorEllipse, {}), jsxRuntime.jsx(VectorEllipse, {}), jsxRuntime.jsx(VectorEllipse, {}), jsxRuntime.jsx(VectorEllipse, {}), jsxRuntime.jsx(VectorEllipse, {}), jsxRuntime.jsx(VectorEllipse, {})] })] }), jsxRuntime.jsx(Image, { onMouseEnter: handleHoverImage, className: 'imageHover', src: src || defaultImg, active: ativo }), jsxRuntime.jsxs(ContainerMain, { children: [jsxRuntime.jsx(LightTooltip, { title: title, children: jsxRuntime.jsx(Typography$2, { style: { color: ativo ? '#000000' : '#bdbdbd' }, children: title && title?.length > 17 ? `${title.substring(0, 17)}...` : title }) }), jsxRuntime.jsx(IconVertical, { onClick: (element) => {
                                                        setElementPopover(element.currentTarget);
                                                    }, children: jsxRuntime.jsx(MoreVertical, { fill: ativo ? '#000000' : '#bdbdbd' }) })] }), showSwitch &&
                                            jsxRuntime.jsxs(ContainerAtivar, { children: [jsxRuntime.jsx(TypographyAtivar, { active: ativo, style: { fontWeight: ativo ? 700 : 400 }, children: txtAtivarCurso ? txtAtivarCurso : 'Ativar Curso' }), jsxRuntime.jsx(Switch__default["default"], { onChange: handleChangeCheck, checked: ativo, height: 16, width: 35, checkedIcon: false, uncheckedIcon: false, handleDiameter: 20, onHandleColor: '#ffffff', offHandleColor: '#ffffff', onColor: '#FF4D0D', offColor: '#ebebeb', activeBoxShadow: ativo ? '0 0 2px 2px #FF4D0D' : '0 0 2px 2px #757575', boxShadow: ativo ? '0 0 2px 2px #FF4D0D' : '0 0 2px 2px #757575' })] })] }) })
                    : variant === 'add' ?
                        jsxRuntime.jsx(jsxRuntime.Fragment, { children: Loading ?
                                jsxRuntime.jsxs(LoadingContainer, { children: [jsxRuntime.jsx(LoadingImage, {}), jsxRuntime.jsx(LoadingContent, {}), jsxRuntime.jsx(LoadingContent, { style: { width: '50%' } })] })
                                :
                                    jsxRuntime.jsxs(ContainerThumbnailsAdd, { children: [jsxRuntime.jsx(ContainerEllipse, { onClick: handleClickNew, children: jsxRuntime.jsx(VectorCross, {}) }), jsxRuntime.jsx(TypographyAdd, { children: txtCriarNovoCurso ? txtCriarNovoCurso : 'Criar novo conteúdo' })] }) })
                        : null, jsxRuntime.jsx(PopOver, { element: ElementPopover, onClosePopover: () => {
                        setElementPopover(null);
                    }, variant: 'upRight', children: jsxRuntime.jsxs("div", { style: { display: 'flex', flexDirection: 'column', padding: 0 }, children: [jsxRuntime.jsx(PopOverItem, { label: txtPopOverEditContent ? txtPopOverEditContent : "Editar Conteúdo", onClick: () => {
                                    handleClickPopOverEdit();
                                    setElementPopover(null);
                                }, style: {
                                    borderBottom: '1px black solid'
                                } }), jsxRuntime.jsx(PopOverItem, { label: txtPopOverDeleteContent ? txtPopOverDeleteContent : "Excluir Conteúdo", onClick: () => {
                                    handleClickPopOverDelete();
                                    setElementPopover(null);
                                }, icon: jsxRuntime.jsx(Trash, { fill: '#C00F00' }), noBorder: true, isFontBold: true, color: '#C00F00' })] }) })] }) }));
}

// import { Draggable } from 'react-beautiful-dnd'
function ThumbnailsDraggable({ variant, src, handleClickCourse, handleClickNew, handleClickContent, handleSwitchAtivar, title, id, index, isDisabled, isLoading, txtButtonLabel, txtAtivarCurso, showSwitch, txtCriarNovoCurso, txtCriarNovoCurso2, handleClickPopOverDelete, handleClickPopOverEdit, handleClickPopOverMove, txtPopOverDeleteContent, txtPopOverEditContent, isActive, txtPopOverMoveToTrails }) {
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx(dnd.Draggable, { index: parseInt(index), draggableId: id, children: (provided) => {
                return (jsxRuntime.jsx(Thumbnails, { src: src, isDisabled: isDisabled, handleClickCourse: handleClickCourse, handleSwitchAtivar: handleSwitchAtivar, handleClickNew: handleClickNew, handleClickContent: handleClickContent, variant: variant, title: title, id: id, isActive: isActive, isLoading: isLoading, showSwitch: showSwitch, index: index, provided: provided, txtButtonLabel: txtButtonLabel, txtAtivarCurso: txtAtivarCurso, txtCriarNovoCurso: txtCriarNovoCurso, txtCriarNovoCurso2: txtCriarNovoCurso2, handleClickPopOverDelete: handleClickPopOverDelete, handleClickPopOverEdit: handleClickPopOverEdit, handleClickPopOverMove: handleClickPopOverMove, txtPopOverDeleteContent: txtPopOverDeleteContent, txtPopOverEditContent: txtPopOverEditContent, txtPopOverMoveToTrails: txtPopOverMoveToTrails }));
            } }, id) }));
}

///-----------------------------------------
/// Componente
/**
 *
 * @componente
 */
function VectorDown(props) {
    return (jsxRuntime.jsx("svg", { width: "18", height: "10", viewBox: "0 0 18 10", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M17 1L9 9L1 0.999999", stroke: "#FF4D0D", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }) }));
}

///-----------------------------------------
/// Componente
/**
 *
 * @componente
 */
function VectorUp(props) {
    return (jsxRuntime.jsx("svg", { width: "18", height: "10", viewBox: "0 0 18 10", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M1 9L9 1L17 9", stroke: "#FF4D0D", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }) }));
}

const useStyles = core.makeStyles((theme) => {
    const color = theme.palette.background.paper; // Feel free to customise this like they do in Tooltip
    return {
        popoverRoot: {
            backgroundColor: color,
            maxWidth: 200,
        },
        content: {
            padding: theme.spacing(2),
            textAlign: 'center'
        },
        // Stolen from https://github.com/mui-org/material-ui/blob/next/packages/material-ui/src/Tooltip/Tooltip.js and https://github.com/mui-org/material-ui/blob/4f2a07e140c954b478a6670c009c23a59ec3e2d4/docs/src/pages/components/popper/ScrollPlayground.js
        popper: {
            zIndex: 2000,
            margin: 12,
            '&[x-placement*="bottom"] $arrow': {
                top: 0,
                left: 0,
                marginTop: "-0.71em",
                marginLeft: 4,
                marginRight: 4,
                "&::before": {
                    transformOrigin: "0 100%"
                }
            },
            '&[x-placement*="top"] $arrow': {
                bottom: 0,
                left: 0,
                marginBottom: "-0.71em",
                marginLeft: 4,
                marginRight: 4,
                "&::before": {
                    transformOrigin: "100% 0"
                }
            },
            '&[x-placement*="right"] $arrow': {
                left: 0,
                marginLeft: "-0.71em",
                height: "1em",
                width: "0.71em",
                marginTop: 4,
                marginBottom: 4,
                "&::before": {
                    transformOrigin: "100% 100%"
                }
            },
            '&[x-placement*="left"] $arrow': {
                right: 0,
                marginRight: "-0.71em",
                height: "1em",
                width: "0.71em",
                marginTop: 4,
                marginBottom: 4,
                "&::before": {
                    transformOrigin: "0 0"
                }
            }
        },
        // Stolen from https://github.com/mui-org/material-ui/blob/next/packages/material-ui/src/Tooltip/Tooltip.js
        arrow: {
            overflow: "hidden",
            position: "absolute",
            width: "1em",
            height: "0.71em" /* = width / sqrt(2) = (length of the hypotenuse) */,
            boxSizing: "border-box",
            color,
            "&::before": {
                content: '""',
                margin: "auto",
                display: "block",
                width: "100%",
                height: "100%",
                boxShadow: theme.shadows[2],
                backgroundColor: "currentColor",
                transform: "rotate(45deg)"
            },
        }
    };
});
function ContentCoursesTrails(props) {
    const [checked, setChecked] = React.useState(true);
    const [up, setUp] = React.useState(true);
    const [ElementPopover, setElementPopover] = React.useState(null);
    const [ElementPopoverPublish, setElementPopoverPublish] = React.useState(null);
    const [active, setActive] = React.useState(false);
    const [nameTrail, setNameTrail] = React.useState('');
    const [Publishing, setPublishing] = React.useState(false);
    const [CanPublishing, setCanPublishing] = React.useState(true);
    const [arrowRef, setArrowRef] = React__default["default"].useState(null);
    const classes = useStyles();
    // const refContainer = useRef(null);
    const handleChange = (checkedValue) => {
        setChecked(checkedValue);
        props.handleChangeCheck(checkedValue);
    };
    const changeSelect = () => {
        {
            if (up) {
                setUp(false);
                props.handleChangeShow(false);
            }
            else {
                setUp(true);
                props.handleChangeShow(true);
            }
        }
    };
    const handleClickActiveNameTrail = () => {
        setNameTrail('');
        if (active) {
            return setActive(false);
        }
        else {
            setActive(true);
        }
    };
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs(ContainerHeader, { className: "opened", active: props.ativo, children: [jsxRuntime.jsx(ContentTrailName, { active: active, children: !active ?
                            jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(TypographyTrailName, { children: props.TrailName }), jsxRuntime.jsx(Select, { onClick: changeSelect, children: props.show ? jsxRuntime.jsx(VectorUp, {}) : jsxRuntime.jsx(VectorDown, {}) })] })
                            :
                                jsxRuntime.jsx(ContainerInputNameTrail, { children: jsxRuntime.jsx("input", { placeholder: props.txtPlacerolderInputNameTrail ? props.txtPlacerolderInputNameTrail : 'Digite o nome da trilha', value: nameTrail, onChange: (e) => {
                                            setNameTrail(e.target.value);
                                        }, onKeyPress: (event) => {
                                            if (event.key === 'Enter') {
                                                if (nameTrail) {
                                                    setActive(false);
                                                    props.handleChangeTrailName(nameTrail);
                                                }
                                            }
                                        } }) }) }), props.showButtonActive &&
                        jsxRuntime.jsxs(ContentActiveHeader, { children: [jsxRuntime.jsxs(TypographyActiveHeader, { active: props.ativo, style: { fontWeight: props.ativo ? 700 : 400 }, children: [props.txtAtivarTrilha ? props.txtAtivarTrilha : 'Ativar trilha', jsxRuntime.jsx(Switch__default["default"], { onChange: handleChange, checked: props.ativo, height: 16, width: 40, checkedIcon: false, uncheckedIcon: false, handleDiameter: 24, onHandleColor: '#ffffff', offHandleColor: '#ffffff', onColor: '#FF4D0D', offColor: '#757575', activeBoxShadow: props.ativo ? '0 0 2px 2px #FF4D0D' : '0 0 2px 2px #757575', boxShadow: props.ativo ? '0 0 2px 2px #FF4D0D' : '0 0 2px 2px #757575' })] }), jsxRuntime.jsxs(TypographyActiveHeader, { active: props.ativo, style: { fontWeight: props.ativo ? 700 : 400 }, children: [jsxRuntime.jsx(Button$3, { id: `btnPublish${props.id}`, handleMount: (element) => {
                                                let el = document.getElementById(element);
                                                setElementPopoverPublish(el ? el : null);
                                            }, handleClick: () => {
                                                setCanPublishing(false);
                                                setPublishing(true);
                                                props.handlePublicarTrilha(props);
                                            }, startIcon: Publishing && jsxRuntime.jsx(Loading, { sizeLoading: 'small', loadColor: '#bdbdbd', style: { width: 40 } }), label: Publishing ? 'Publicando...' : 'Publicar', variant: 'secondary', disabled: !CanPublishing }), jsxRuntime.jsx(core.Popper, { id: CanPublishing ? `btnPublishPopper${props.id}` : undefined, open: CanPublishing, anchorEl: ElementPopoverPublish, placement: 'top', className: classes.popper, transition: true, modifiers: {
                                                preventOverflow: {
                                                    enabled: true,
                                                    boundariesElement: "window"
                                                },
                                                arrow: {
                                                    enabled: true,
                                                    element: arrowRef
                                                }
                                            }, children: ({ TransitionProps }) => (jsxRuntime.jsx(core.Fade, { ...TransitionProps, timeout: 350, children: jsxRuntime.jsx(core.Paper, { children: jsxRuntime.jsx(core.ClickAwayListener, { onClickAway: () => { }, children: jsxRuntime.jsxs(core.Paper, { className: classes.popoverRoot, children: [jsxRuntime.jsx("span", { className: classes.arrow, ref: setArrowRef }), jsxRuntime.jsx(core.Box, { className: classes.content, children: "Ap\u00F3s realizar todas as altera\u00E7\u00F5es na trilha, \u00E9 necess\u00E1rio clicar em publicar para que o conte\u00FAdo editado esteja dispon\u00EDvel" })] }) }) }) })) })] }), jsxRuntime.jsx(IconVerticalHeader, { onClick: (element) => {
                                        setElementPopover(element.currentTarget);
                                    }, children: jsxRuntime.jsx("div", { style: { marginRight: 8 }, children: jsxRuntime.jsx(MoreVertical, { fill: props.ativo ? '#000000' : '#bdbdbd' }) }) })] }), jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx(PopOver, { element: ElementPopover, onClosePopover: () => {
                                setElementPopover(null);
                            }, variant: 'upRight', children: jsxRuntime.jsxs("div", { style: { display: 'flex', flexDirection: 'column', padding: 0 }, children: [jsxRuntime.jsx(PopOverItem, { label: props.txtTrailsPopOverEdit ? props.txtTrailsPopOverEdit : "Editar nome da trilha", onClick: () => {
                                            //props.handlePopOverTrailEdit(props.id)
                                            handleClickActiveNameTrail();
                                            setElementPopover(null);
                                        } }), jsxRuntime.jsx(PopOverItem, { label: props.txtTrailsPopOverDelete ? props.txtTrailsPopOverDelete : "Excluir trilha", onClick: () => {
                                            props.handlePopOverTrailDelete(props.id);
                                            setElementPopover(null);
                                        }, icon: jsxRuntime.jsx(Trash, { fill: '#C00F00' }), noBorder: true, isFontBold: true, color: '#C00F00' })] }) }) })] }), up && props.children] }));
}

function ContentCourses(data) {
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: data.children }));
}

function AccordionTrack(props) {
    const [trails, setTrail] = React.useState(props.trailsData);
    const [ShowTrail, setShowTrail] = React.useState([]);
    const [ShowIndividual, setShowIndividual] = React.useState(true);
    const [IsLoading, setIsLoading] = React.useState(props.isLoading);
    const MEUS_CONTEUDOS_CONTENT = '0';
    const CONTEUDO_INDIVIDUAL_CONTENT = '1';
    React.useEffect(() => {
        if (Array.isArray(props.trailsData)) {
            setTrail(props.trailsData);
            let showHideTrail = [];
            props.trailsData.map((item) => {
                showHideTrail.push(true);
            });
            setShowTrail(showHideTrail);
        }
    }, [props.trailsData]);
    React.useEffect(() => {
        setIsLoading(props.isLoading);
    }, [props.isLoading]);
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs(React__default["default"].StrictMode, { children: [jsxRuntime.jsxs(ContentCourses, { TrailName: '', children: [jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx(TypographyMyContents, { children: props.textMeusConteudos ? props.textMeusConteudos : 'Meus Conteúdos' }), jsxRuntime.jsx("h2", { style: { fontFamily: 'PT Sans', fontWeight: 700, fontSize: 16, color: '#000000' }, children: IsLoading ?
                                        jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx(LoadingContent$1, { style: { width: 200, height: 20 } }) })
                                        :
                                            jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [props.textTotalDe ? props.textTotalDe : 'Total de', " ", props.courseData.length, " ", props.textRegistros ? props.textRegistros : 'registros'] }) })] }), jsxRuntime.jsx(dnd.Droppable, { droppableId: MEUS_CONTEUDOS_CONTENT, direction: "horizontal", children: (provided) => {
                                return (jsxRuntime.jsxs(ContainerTrailsEmpty, { children: [jsxRuntime.jsx(ScrollContainer, { stepMove: 380, isVisibleControlsButtons: true, sizeArrowButton: 80, marginsArrowButton: 10, horizontalMarginInternScroll: '5px', styles: { justifyContent: 'flex-start', width: '100%' }, refreshResize: props.updateScrollSize, children: jsxRuntime.jsx(ContainerCard, { ref: provided.innerRef, ...provided.droppableProps, children: IsLoading ?
                                                    jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(Thumbnails, { variant: 'default', isDisabled: false, isLoading: true }), jsxRuntime.jsx(Thumbnails, { variant: 'default', isDisabled: false, isLoading: true }), jsxRuntime.jsx(Thumbnails, { variant: 'default', isDisabled: false, isLoading: true }), jsxRuntime.jsx(Thumbnails, { variant: 'default', isDisabled: false, isLoading: true })] })
                                                    :
                                                        jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", { onClick: () => {
                                                                        props.onNewTrail && props.onNewTrail();
                                                                    }, style: { wordWrap: 'break-word' }, children: jsxRuntime.jsx(Thumbnails, { variant: 'add', isDisabled: false, txtCriarNovoCurso: props.txtCriarNovoCurso }) }), props.courseData.map((el, contentIndex) => {
                                                                    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx(ThumbnailsDraggable, { isDisabled: el.active, id: `content${contentIndex}`, index: contentIndex, title: el.title, variant: 'default', handleSwitchAtivar: (checked) => {
                                                                                props.handleSwitchAtivarConteudo(el.id, checked);
                                                                            }, isActive: el.active_individual, showSwitch: true, src: el.settings.cover_thumb_url, txtButtonLabel: props.txtButtonLabel, txtAtivarCurso: props.txtAtivarCurso, txtCriarNovoCurso: props.txtCriarNovoCurso, handleClickCourse: () => { props.handleEditCourse(el.id); }, handleClickPopOverEdit: () => { props.handlePopOverEdit(el.id); }, handleClickPopOverMove: () => { props.handlePopOverMove(el.id); }, handleClickPopOverDelete: () => {
                                                                                props.handleDeleteCourse(el.id);
                                                                            }, txtPopOverEditContent: props.txtPopOverEditContent, txtPopOverMoveToTrails: props.txtPopOverMoveToTrails, txtPopOverDeleteContent: props.txtPopOverDeleteContent }, `content${contentIndex}`) }));
                                                                })] }) }) }), provided.placeholder] }));
                            } }, MEUS_CONTEUDOS_CONTENT)] }), !IsLoading &&
                    jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx(ContentCoursesTrails, { TrailName: props.txtCursoIndividual ? props.txtCursoIndividual : 'Conteúdo individual', ativo: true, show: ShowIndividual, handleChangeCheck: (bActive) => {
                                // if (props.handleSwitchActiveTrail) {
                                //   props.handleSwitchActiveTrail(trailIndex, bActive)
                                // }
                            }, handleChangeTrailName: (name) => {
                                // if (props.onSetNameTrail) {
                                //   props.onSetNameTrail(name, trailIndex)
                                // }
                            }, handleChangeShow: (bShow) => {
                                console.log(bShow);
                                setShowIndividual(bShow);
                            }, txtAtivarTrilha: props.txtAtivarTrilha, handlePopOverTrailEdit: (id) => { props.handlePopOverTrailEdit(id); }, handlePopOverTrailDelete: (id) => { props.handlePopOverTrailDelete(id); }, children: jsxRuntime.jsx(dnd.Droppable, { droppableId: CONTEUDO_INDIVIDUAL_CONTENT, direction: "horizontal", children: (provided) => {
                                    return (jsxRuntime.jsxs(ContainerTrailsNormal, { style: {}, children: [jsxRuntime.jsx(ScrollContainer, { stepMove: 380, isVisibleControlsButtons: true, sizeArrowButton: 80, marginsArrowButton: 10, horizontalMarginInternScroll: '5px', refreshResize: props.updateScrollSize, styles: { backgroundColor: '#ebebeb', justifyContent: 'flex-start', width: '100%' }, children: jsxRuntime.jsx(ContainerCard, { ref: provided.innerRef, ...provided.droppableProps, children: props.courseIndividualData.map((individual, individualIndex) => {
                                                        return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx(ThumbnailsDraggable, { id: `contentTrails${1}_individual${individualIndex}`, index: `${individualIndex}`, isDisabled: individual.active === false ? false : individual.active, title: individual.title, variant: 'default', showSwitch: true, handleClickCourse: () => {
                                                                    props.handleEditCourse(individual.id);
                                                                }, handleSwitchAtivar: (checked) => {
                                                                    props.handleSwitchAtivarConteudo(individual.id, checked);
                                                                }, src: individual.settings.cover_thumb_url, txtButtonLabel: props.txtButtonLabel, txtAtivarCurso: props.txtAtivarCurso, txtCriarNovoCurso: props.txtCriarNovoCurso, handleClickPopOverEdit: () => { props.handlePopOverEdit(individual.id); }, handleClickPopOverMove: () => { props.handlePopOverMove(individual.id); }, handleClickPopOverDelete: () => {
                                                                    props.handleDeleteCourseTrail(individual.id);
                                                                }, txtPopOverEditContent: props.txtPopOverEditContent, txtPopOverMoveToTrails: props.txtPopOverMoveToTrails, txtPopOverDeleteContent: props.txtPopOverDeleteContent }, `contentTrails${1}_individual${individualIndex}`) }));
                                                    }) }) }), provided.placeholder] }));
                                } }, CONTEUDO_INDIVIDUAL_CONTENT) }) }), !IsLoading &&
                    jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(TypographyMyTrails, { style: { marginTop: 20 }, children: props.textMinhasTrihas ? props.textMinhasTrihas : 'Minhas Trilhas' }), trails && trails.map((trail, trailIndex) => {
                                return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx(ContentCoursesTrails, { showButtonActive: true, id: `${3000}${trailIndex}`, TrailName: trail.name, ativo: trail.active, handleChangeCheck: (bActive) => {
                                            if (props.handleSwitchActiveTrail) {
                                                props.handleSwitchActiveTrail(trailIndex, bActive);
                                            }
                                        }, handleChangeTrailName: (name) => {
                                            if (props.onSetNameTrail) {
                                                props.onSetNameTrail(name, trailIndex);
                                            }
                                        }, handleChangeShow: (bShow) => {
                                            setShowTrail((prev) => {
                                                prev = { ...prev };
                                                prev[trailIndex] = bShow;
                                                return prev;
                                            });
                                        }, showButtonPublish: true, txtAtivarTrilha: props.txtAtivarTrilha, handlePopOverTrailEdit: (id) => { props.handlePopOverTrailEdit(id); }, handlePopOverTrailDelete: (id) => { props.handlePopOverTrailDelete(id); }, children: ShowTrail.length === 0 || ShowTrail[trailIndex] &&
                                            jsxRuntime.jsx(dnd.Droppable, { droppableId: (trailIndex + 2).toString(), direction: "horizontal", children: (provided) => {
                                                    return (jsxRuntime.jsxs(ContainerTrailsNormal, { children: [jsxRuntime.jsx(ScrollContainer, { stepMove: 380, isVisibleControlsButtons: true, sizeArrowButton: 80, marginsArrowButton: 10, horizontalMarginInternScroll: '5px', refreshResize: props.updateScrollSize, styles: { backgroundColor: '#ebebeb', justifyContent: 'flex-start', width: '100%' }, children: jsxRuntime.jsx(ContainerCard, { ref: provided.innerRef, ...provided.droppableProps, children: trail.trail_course && trail.trail_course.map((el, courseTrailIndex) => {
                                                                        return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx(ThumbnailsDraggable, { id: `trail_${trailIndex}_course_${courseTrailIndex}`, index: `${courseTrailIndex}`, isDisabled: trail.active === false ? false : el.course.active, title: el.course.title, variant: 'default', handleClickCourse: () => {
                                                                                    props.handleEditCourse(el.course.id);
                                                                                }, showSwitch: true, src: el.course.settings.cover_thumb_url, txtButtonLabel: props.txtButtonLabel, txtAtivarCurso: props.txtAtivarCurso, txtCriarNovoCurso: props.txtCriarNovoCurso, handleClickPopOverEdit: () => { props.handlePopOverEdit(el.course.id); }, handleClickPopOverMove: () => { props.handlePopOverMove(el.course.id); }, handleClickPopOverDelete: () => {
                                                                                    props.handleDeleteCourseTrail(el.course.id);
                                                                                }, txtPopOverEditContent: props.txtPopOverEditContent, txtPopOverMoveToTrails: props.txtPopOverMoveToTrails, txtPopOverDeleteContent: props.txtPopOverDeleteContent }) }));
                                                                    }) }) }), provided.placeholder] }, `contentTrailsDrop${trailIndex}`));
                                                } }, trailIndex + 2) }, `contentTrails${trailIndex}`) }));
                            })] })] }) }));
}

function AccordionTrackList({ trailsData, courseData, handleChange, onNewTrail, handleEditCourse, 
// handlePopOverDelete,
handlePopOverMove, handlePopOverEdit, handlePopOverTrailEdit, handlePopOverTrailDelete, handleSwitchActiveTrail, onSetNameTrail, handleSwitchAtivar, handleDeleteCourse, handleDeleteCourseTrail, handleMessageError, handleUpdateTrail, txtPopOverDeleteContent, txtPopOverEditContent, txtPopOverMoveToTrails, textMeusConteudos, textTotalDe, textRegistros, textMinhasTrihas, txtAtivarCurso, txtButtonLabel, txtCriarNovoCurso, txtAtivarTrilha, isLoading }) {
    const [trails, setTrails] = React.useState(trailsData);
    const [courses, setCourses] = React.useState(courseData);
    const [ConteudoIndividual, setConteudoIndividual] = React.useState([]);
    const [MeusConteudosData, setMeusConteudosData] = React.useState([]);
    const [updateScrollSize, setUpdateScrollSize] = React.useState(0);
    const MEUS_CONTEUDOS_CONTENT = '0';
    const CONTEUDO_INDIVIDUAL_CONTENT = '1';
    const create_UUID = () => {
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (dt + Math.random() * 16) % 16 | 0;
            dt = Math.floor(dt / 16);
            return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
        });
        return uuid;
    };
    React.useEffect(() => {
        if (handleChange) {
            handleChange({ courses: courses, trails: trails });
        }
    }, [trails]);
    React.useEffect(() => {
        setMeusConteudosData(courses ? courses.filter(item => !item.active_individual) : []);
        setConteudoIndividual(courses ? courses.filter(item => item.active_individual) : []);
    }, [courses]);
    React.useEffect(() => {
        setTrails(trailsData);
    }, [trailsData]);
    const handleDragEnd = ({ destination, source }) => {
        if (!destination) {
            return;
        }
        if (destination.index === source.index && destination.droppableId === source.droppableId) {
            return;
        }
        if ((destination.droppableId === MEUS_CONTEUDOS_CONTENT) && (source.droppableId !== CONTEUDO_INDIVIDUAL_CONTENT)) {
            if (handleMessageError) {
                handleMessageError('ERROR_COPY_TO_CONTENTS');
            }
            return;
        }
        if ((destination.droppableId !== source.droppableId) &&
            ((destination.droppableId !== MEUS_CONTEUDOS_CONTENT) && (destination.droppableId !== CONTEUDO_INDIVIDUAL_CONTENT))) {
            let idVerification = 0;
            if ((source.droppableId === MEUS_CONTEUDOS_CONTENT) || (source.droppableId === CONTEUDO_INDIVIDUAL_CONTENT)) {
                let uuidConteudo = source.droppableId === MEUS_CONTEUDOS_CONTENT ? MeusConteudosData[source.index].uuid : ConteudoIndividual[source.index].uuid;
                let indexTrail = courses.findIndex(item => item.uuid === uuidConteudo);
                idVerification = courseData[indexTrail].id;
            }
            else {
                idVerification = trails[source.droppableId - 2].trail_course[source.index].course.id;
            }
            let filterCourses = trails[destination.droppableId - 2].trail_course.find((element) => element.course.id === idVerification);
            if (filterCourses !== undefined) {
                if (handleMessageError) {
                    handleMessageError('ERROR_DUPLICATE_CONTENTS');
                }
                return;
            }
        }
        /// Copiando do Meus conteúdos para Individual ou Individual para conteúdos
        if (((source.droppableId === MEUS_CONTEUDOS_CONTENT) && (destination.droppableId === CONTEUDO_INDIVIDUAL_CONTENT)) ||
            ((source.droppableId === CONTEUDO_INDIVIDUAL_CONTENT) && (destination.droppableId === MEUS_CONTEUDOS_CONTENT))) {
            /// Selecionando o UUID do conteúdo (se é individual ou não)
            let uuidConteudo = source.droppableId === MEUS_CONTEUDOS_CONTENT ? MeusConteudosData[source.index].uuid : ConteudoIndividual[source.index].uuid;
            let indexTrail = courses.findIndex(item => item.uuid === uuidConteudo);
            if (indexTrail >= 0) {
                setCourses((prev) => {
                    prev = [...prev];
                    prev[indexTrail].active_individual = destination.droppableId === CONTEUDO_INDIVIDUAL_CONTENT;
                    return prev;
                });
            }
        }
        else {
            var itemCopy;
            if (source.droppableId === MEUS_CONTEUDOS_CONTENT) {
                itemCopy = { ...MeusConteudosData[source.index] };
            }
            else if (source.droppableId === CONTEUDO_INDIVIDUAL_CONTENT) {
                itemCopy = { ...ConteudoIndividual[source.index] };
            }
            else {
                itemCopy = { ...trails[source.droppableId - 2].trail_course[source.index].course };
            }
            let trailId = trails[destination.droppableId - 2].id;
            itemCopy = {
                id: create_UUID(),
                trail_id: trailId,
                course: itemCopy,
                course_id: itemCopy.id,
                order: 0
            };
            setTrails((prev) => {
                prev = [...prev];
                /// Armazendo o dado da trilha que será deletada
                let deletedItem = null;
                if (source.droppableId !== MEUS_CONTEUDOS_CONTENT && source.droppableId !== CONTEUDO_INDIVIDUAL_CONTENT && source.droppableId !== destination.droppableId) {
                    deletedItem = prev[source.droppableId - 2].trail_course[source.index];
                }
                /// Verificando se a movimentação vai ser do conteúdo ou das trilhas
                if (source.droppableId !== MEUS_CONTEUDOS_CONTENT && source.droppableId !== CONTEUDO_INDIVIDUAL_CONTENT) {
                    prev[source.droppableId - 2].trail_course.splice(source.index, 1);
                }
                prev[destination.droppableId - 2].trail_course.splice(destination.index, 0, itemCopy);
                /// Atualizando a saida
                handleUpdateTrail(deletedItem, itemCopy, prev[destination.droppableId - 2]);
                return prev;
            });
        }
        setUpdateScrollSize(updateScrollSize + 1);
    };
    const setActiveTrail = (index, active) => {
        setTrails((prev) => {
            prev = { ...prev };
            prev[index].active = active;
            handleSwitchActiveTrail(prev[index].id, active);
            return prev;
        });
    };
    const setActiveContent = (id, active) => {
        let indexTrail = courses.findIndex(item => item.id === id);
        setCourses((prev) => {
            prev = [...prev];
            prev[indexTrail].active = active;
            handleSwitchAtivar(id, active);
            return prev;
        });
    };
    const setNameTrail = (name, id) => {
        ({ ...trails[id] });
        setTrails((prev) => {
            prev = { ...prev };
            prev[id].name = name;
            return prev;
        });
        onSetNameTrail(name, trails[id].id);
    };
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsx(dnd.DragDropContext, { onDragEnd: handleDragEnd, children: jsxRuntime.jsx(jsxRuntime.Fragment, { children: trails && (jsxRuntime.jsx(AccordionTrack, { trailsData: trails, courseData: MeusConteudosData, courseIndividualData: ConteudoIndividual, handleSwitchActiveTrail: (index, active) => {
                        setActiveTrail(index, active);
                    }, onSetNameTrail: (name, id) => {
                        setNameTrail(name, id);
                    }, onNewTrail: () => {
                        if (onNewTrail) {
                            onNewTrail();
                        }
                    }, handleSwitchAtivarConteudo: setActiveContent, handleSwitchAtivar: handleSwitchAtivar, handleEditCourse: handleEditCourse, textMeusConteudos: textMeusConteudos, textTotalDe: textTotalDe, textRegistros: textRegistros, textMinhasTrihas: textMinhasTrihas, txtAtivarCurso: txtAtivarCurso, txtAtivarTrilha: txtAtivarTrilha, txtButtonLabel: txtButtonLabel, txtCriarNovoCurso: txtCriarNovoCurso, isLoading: isLoading, updateScrollSize: updateScrollSize, handleDeleteCourse: handleDeleteCourse, handleDeleteCourseTrail: handleDeleteCourseTrail, handlePopOverEdit: handlePopOverEdit, handlePopOverTrailDelete: handlePopOverTrailDelete, handlePopOverTrailEdit: handlePopOverTrailEdit, handlePopOverMove: handlePopOverMove, txtPopOverDeleteContent: txtPopOverDeleteContent, txtPopOverEditContent: txtPopOverEditContent, txtPopOverMoveToTrails: txtPopOverMoveToTrails })) }) }) }));
}

const Container$4 = styled__default["default"].div `
    width: 24.188rem;    
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey5};
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    positon: relative;
    ${(props) => props.isOpen &&
    styled.css `
        background-color: #D3D3D3;
    `}
    
`;
const TypographyDefinition = styled__default["default"].p `
    font-family: 'Work Sans';
    font-Weight: 700;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.borderSecondary4};
    margin-top: 2rem;
    margin-left: 1.6rem;
`;
const Date$1 = styled__default["default"].p `
    font-family: 'PT Sans';
    font-Weight: 400;
    font-size: 0.6rem;
    color: ${({ theme }) => theme.colors.neutralsGrey3};
    margin-left: 1.6rem;
`;
const ContetsName = styled__default["default"].div `
    margin-left: 1.6rem;
    margin-top: 1.5rem;    
`;
const TypographyContentsName = styled__default["default"].p `
    font-family: 'PT Sans';
    font-Weight: 400;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.neutralsGrey3};
`;
const ContainerIcon = styled__default["default"].div `
    display: flex;
    flex-direction: column;
    margin-left: 1.6rem;
    margin-top: 1.5rem;    
    position: relative;    
`;
const SelectIcon = styled__default["default"].select `
    font-family: 'PT Sans';
    font-Weight: 400;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.neutralsGrey4};
    border: none;
    background: none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;    
    padding-left: 20px;
    position: absolute;    
`;
const GroupName = styled__default["default"].div `
    width: 24.1rem;
    height: 78.63px;
    background-color: #F7F9FC;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;    
    margin-top: 62px;
    ${(props) => props.isOpen &&
    styled.css `
        background-color: ${({ theme }) => theme.colors.borderPrimary};        
    `}

    p{
        margin-left: 1.6rem; 
    }

    div{
        margin-right: 2rem;
        cursor: pointer;
    }  
`;

function ManageLearningCicles({ variant, label, disabled, style, handleClick, handleChange }) {
    const dateAtual = moment__default["default"]().subtract(10, 'days').calendar();
    const [individualContent, setIdividualContent] = React.useState([
        { title: 'individualContents1' },
        { title: 'individualContents2' },
        { title: 'individualContents3' },
    ]);
    const [listTrails, setListTrails] = React.useState([
        { id: '1', name: 'trails' },
        { id: '2', name: 'trails' },
        { id: '3', name: 'trails' },
    ]);
    const [isOpen, setIsOpen] = React.useState(false);
    const [counterRender, setCounterRender] = React.useState(0);
    function handleClickCheck() {
        !isOpen ? setIsOpen(true) : setIsOpen(false);
    }
    React.useEffect(() => {
        if (counterRender > 0 && isOpen) {
            handleClick();
        }
        else {
            setCounterRender(1);
        }
    }, [isOpen]);
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsxs(Container$4, { isOpen: isOpen, children: [jsxRuntime.jsx(TypographyDefinition, { children: label }), jsxRuntime.jsx(Date$1, { children: dateAtual }), jsxRuntime.jsx(ContetsName, { children: individualContent.length !== 0 ?
                        individualContent.map((item, index) => jsxRuntime.jsx(TypographyContentsName, { children: item.title }, index))
                        : jsxRuntime.jsx(TypographyContentsName, { children: "Introdu\u00E7\u00E3o a blockchain" }) }), jsxRuntime.jsxs(ContainerIcon, { children: [jsxRuntime.jsx("p", { children: jsxRuntime.jsx(DropdownIconWhite, { fill: '#000000' }) }), jsxRuntime.jsx(SelectIcon, { onChange: handleChange, children: listTrails.map((item, index) => jsxRuntime.jsx("option", { value: item.id, children: item.name }, index)) })] }), jsxRuntime.jsxs(GroupName, { isOpen: isOpen, children: [jsxRuntime.jsx("p", { children: "Group name" }), jsxRuntime.jsx("div", { onClick: handleClickCheck, children: jsxRuntime.jsx(MoreHorizontal, {}) })] })] }) }));
}

// Create react context to share data between components
const SelectLXPContext = React__default["default"].createContext(null);

const DropDownContainer = styled__default["default"]("div") `
    width: 100%;
    height: 48px;
    background: #FFFFFF;
    border: 1px solid #E8E8E8;
    border-radius: 4px;
    position: relative;
`;
const EventOverlay = styled__default["default"].div `
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: transparent;
    cursor: pointer;
    z-index: 2;
`;
const DropDownHeader = styled__default["default"]("div") `
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 16px;
  border-radius: 4px;

  p {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #A6A6A6;
  }
`;
const DropDownListContainer = styled__default["default"]("div") ``;
const DropDownList = styled__default["default"]("ul") `
  padding: 0;
  margin: 0;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  position: absolute;
  width: 100%;
  z-index: 5;

  &:first-child {
    padding-top: 0.8em;
  }

`;
const DropDownHeaderIcon = styled__default["default"]('div') `
  position: absolute;
  right: 16.48px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.1s ease-in-out;

  ${({ open }) => open === true && styled.css `
    transform: rotate(180deg);
  `}
`;
const SelectedOption = styled__default["default"]('p') `
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #222222 !important;
`;
function ArrowIcon() {
    return (jsxRuntime.jsx("svg", { width: "14", height: "7", viewBox: "0 0 14 7", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M7.1736 6.64904L13.521 0.992188H0.826172L7.1736 6.64904Z", fill: "#222222" }) }));
}
function SelectLXP$1({ placeholder, defaultValue, children, onChange, loading }) {
    const wrapperRef = React.useRef(null);
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedOption, setSelectedOption] = React.useState(null);
    const [selectedOptionValue, setSelectedOptionValue] = React.useState();
    React.useEffect(() => {
        function handleClickOutside(event) {
            // @ts-ignore
            if (wrapperRef.current && !wrapperRef.current.contains(event.target) && isOpen)
                setIsOpen(false);
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef, isOpen]);
    React.useEffect(() => {
        let param = false;
        children && children.length && children.forEach((child) => {
            if (child.props.value == defaultValue) {
                param = true;
                setSelectedOption(child.props.label);
                setSelectedOptionValue(child.props.value);
            }
        });
        if (!param) {
            setSelectedOption(null);
            setSelectedOptionValue(false);
        }
    }, [children, defaultValue]);
    const toggle = () => setIsOpen(!isOpen);
    const handleChange = (e) => {
        onChange(e);
        toggle();
    };
    return (jsxRuntime.jsx("div", { children: jsxRuntime.jsxs(DropDownContainer, { ref: wrapperRef, children: [jsxRuntime.jsx(EventOverlay, { onClick: toggle }), jsxRuntime.jsxs(DropDownHeader, { children: [loading ?
                            jsxRuntime.jsx("p", { children: "Carregando dados..." })
                            :
                                selectedOption ? jsxRuntime.jsx(SelectedOption, { children: selectedOption }) : jsxRuntime.jsx("p", { children: placeholder }), jsxRuntime.jsx(DropDownHeaderIcon, { open: isOpen, children: jsxRuntime.jsx(ArrowIcon, {}) })] }), isOpen && (jsxRuntime.jsx(DropDownListContainer, { children: jsxRuntime.jsx(DropDownList, { children: jsxRuntime.jsx("div", { onClick: handleChange, children: jsxRuntime.jsx(SelectLXPContext.Provider, { value: { selected: selectedOptionValue }, children: children }) }) }) }))] }) }));
}

const ListItem = styled__default["default"]("li") `
    list-style: none;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000;
    height: 38px;
    margin: 0;
    padding-left: 16px;
    display: flex;
    align-items: center;
    cursor: pointer;

    ${props => props.disabled === true && styled.css `
        cursor: not-allowed;
        background-color: #e5e5e5;
        opacity: 0.3;
    `}

    ${props => props.selected === true && styled.css `
        background-color: #e5e5e5;
        cursor: pointer;
        opacity: 1;
    `}

    &:hover {
        background-color: #e5e5e5;
    }
`;
function SelectLXPItem({ value, label, selected, handleSelect, disabled }) {
    return (jsxRuntime.jsx(SelectLXPContext.Consumer, { children: ({ selected }) => (jsxRuntime.jsx(ListItem, { disabled: disabled, selected: selected === value, value: value, onClick: handleSelect, children: label })) }));
}

function SelectLXP({ placeholder, valueSelect, handleValueSelect, listItems }) {
    return (jsxRuntime.jsx(SelectLXP$1, { placeholder: placeholder, defaultValue: valueSelect, onChange: (e) => handleValueSelect(e.target?.attributes?.value?.value), children: listItems.map((item, index) => (jsxRuntime.jsx(SelectLXPItem, { label: item.label, value: item.id }, index))) }));
}

const CardThumbnails = styled__default["default"].div `
  cursor: pointer;
  display: flex;
  flex-direction: column;
  color: #000;
  width: 11rem;
  margin: 1rem 1.1rem;
  position: relative;
  transition: transform 1s;
  border-radius: 8px;

  h1 {
    font-family: ${({ theme }) => theme.fonts.textMessageComponentsCardTitle.fontFamily};
    font-weight: ${({ theme }) => theme.fonts.textMessageComponentsCardTitle.fontWeight};
    padding-top: 0.5rem;
    font-size: ${({ theme }) => theme.fonts.textMessageComponentsCardTitle.fontSize};
    line-height: 23px;
    word-break: break-word;
    width: 11rem;
    white-space: normal;
    color: ${({ theme }) => theme.fonts.neutralsGrey1};
  }
`;
const ThumbnailHeaderImage = styled__default["default"].div `
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 14.9rem;
  flex-direction: column;
  position: relative;
  width: 12rem;
  color: #fff;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
`;
const CardThumbnailsHove = styled__default["default"].div `
  cursor: pointer;
  width: 17rem;
  height: 27.3rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;
const ThumbnailImageHover = styled__default["default"].div `
  width: 17rem;
  height: 14.9rem;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 8px 8px 0px 0px;
  box-shadow: 0px 15px 10px -10px rgba(0, 0, 0, 0.15), 0px 35px 25px -20px rgba(34, 34, 34, 0.2);
`;
const DescriptionThumbnails = styled__default["default"].div `
  width: 17.8rem;
  height: 15.1rem;
  background-color: #000;
  border-radius: 0px 0px 8px 8px;
  display: flex;
  flex-direction: column;
  margin-top: -1px;
  padding: 8px 16px 16px 16px;

  h2 {
    font-family: ${({ theme }) => theme.fonts.textMessageComponentsCardTitle.fontFamily};
    font-weight: ${({ theme }) => theme.fonts.textMessageComponentsCardTitle.fontWeight};
    font-size: ${({ theme }) => theme.fonts.textMessageComponentsCardTitle.fontSize};
    line-height: 23px;
    word-break: break-word;
    white-space: normal;
    color: ${({ theme }) => theme.colors.shadeWhite};
    padding-bottom: 8px;
  }
  p {
    color: ${({ theme }) => theme.colors.shadeWhite};
    font-weight: ${({ theme }) => theme.fonts.textMessageComponentsBodyRegular.fontWeight};
    font-size: 14px;
    line-height: 18px;
    padding-right: 16px;
    word-break: break-word;
    font-family: 'PT Sans';
    font-family: ${({ theme }) => theme.fonts.textMessageComponentsBodyRegular.fontFamily};
    white-space: normal;
  }
`;
styled__default["default"].div `
  display: flex;
  height: 35vh;
  overflow: hidden;
  max-width: 100%;
  cursor: grab;
  @media (max-width: 414px) {
    height: 45vh;
  }
  @media (max-width: 320px) {
    height: 65vh;
  }
  .motionThumbnails {
    display: flex;
  }
`;

function ParticipantThumbnails(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [itemSelected, setItemSelected] = React.useState(null);
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(Popover__default["default"], { id: id, open: open, anchorEl: anchorEl, onClose: handleClose, anchorOrigin: {
                    vertical: 'center',
                    horizontal: 'center'
                }, transformOrigin: {
                    vertical: 'center',
                    horizontal: 'center'
                }, PaperProps: {
                    style: {
                        backgroundColor: '#FFF',
                        boxShadow: 'none',
                        borderRadius: 8,
                        marginTop: '-1rem'
                    }
                }, style: {
                    borderRadius: 8
                }, children: jsxRuntime.jsx(CardThumbnailsHove, { onMouseLeave: (event) => {
                        setAnchorEl(null);
                        setItemSelected(null);
                    }, children: jsxRuntime.jsxs(CardThumbnailsHove, { theme: FRSTTheme, onClick: props.handleFunctionThumbnail, children: [jsxRuntime.jsx(ThumbnailImageHover, { img: props.imgThumbnails ? props.imgThumbnails : '/img/NoUploaded.png' }), jsxRuntime.jsxs(DescriptionThumbnails, { theme: FRSTTheme, children: [jsxRuntime.jsx("h2", { children: props.titleThumbnail }), jsxRuntime.jsx("p", { children: props.descpThumbnail })] })] }) }) }), jsxRuntime.jsxs(CardThumbnails, { theme: FRSTTheme, onClick: props.handleFunctionThumbnail, onMouseOver: (event) => {
                    setAnchorEl(event.currentTarget);
                    setItemSelected(props);
                    props.handleFunctionThumbnail;
                }, children: [jsxRuntime.jsx(ThumbnailHeaderImage, { img: props.imgThumbnails ? props.imgThumbnails : '/img/NoUploaded.png' }), jsxRuntime.jsx("h1", { children: props.titleThumbnail })] })] }));
}

function handleThumbnails(listThumbnails, isVisibleControlsButtons) {
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx(ScrollContainer, { type: 'horizontal', stepMove: 100, isVisibleControlsButtons: isVisibleControlsButtons, sizeArrowButton: 80, marginsArrowButton: 1, horizontalMarginInternScroll: '0', marginTopArrrowButton: '-5rem', className: 'scrollThumbnail', children: listThumbnails.map((item, index) => {
                return (jsxRuntime.jsx(ParticipantThumbnails, { imgThumbnails: item.imgThumbnails, titleThumbnail: item.titleThumbnail, descpThumbnail: item.descpThumbnail, handleFunctionThumbnail: item.handleFunctionThumbnail }));
            }) }) }));
}
function ParticipantThumbnailsList({ listThumbnails }) {
    const [width, setWidth] = React.useState(typeof window !== "undefined" && window.innerWidth);
    function handleWindowSizeChange() {
        setWidth(typeof window !== "undefined" && window.innerWidth);
    }
    React.useEffect(() => {
        typeof window !== "undefined" && window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            typeof window !== "undefined" && window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);
    if (width <= 834) {
        return handleThumbnails(listThumbnails, false);
    }
    else {
        return handleThumbnails(listThumbnails, true);
    }
}

const ProgressBox = styled__default["default"](_.Box) `
  z-index: 1 !important;
  float: right !important;
  padding-left: 10% !important;
  padding-right: 10% !important;
  margin-top: 160px !important;
  position: relative !important;
`;
const ProgressBar = styled__default["default"](_.LinearProgress) `
  width: 128px !important;
  height: 13px !important;
  border-radius: 100px !important;
  background-color: rgba(245, 94, 14, 0.5) !important;
  & .MuiLinearProgress-bar{
    padding-left: 10px !important;
    background-color: ${({ theme }) => theme.colors.primary1} !important;
  }
`;
const ProgressLabel = styled__default["default"].label `
  display: inline-block !important;
  width: 32px !important;
  height: 16px !important;
  font-size: 16px !important;
  color: white !important;
`;
const GridNameMentoring = styled__default["default"](_.Grid) `
  padding: 0 !important;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
styled__default["default"](_.Grid) `
  padding: 0 !important;
`;
const GridFooter = styled__default["default"](_.Grid) `
  display: flex;
  align-items: center;
  height: 50px;
  margin: 0;
  gap: 5px;
`;
const NameMentoring = styled__default["default"].span `
  font-size: 14px !important;
`;
const TitleMentoring = styled__default["default"].span `
  display: block !important;
  font-size: 14px !important;
  font-weight: 500 !important;
`;
const TextDescription = styled__default["default"](_.Typography) `
  margin-top: 10px !important;
  white-space: normal !important;
  height: 101px !important;
  overflow: hidden !important;
  display: -webkit-box;
  -webkit-line-clamp: 6; 
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  font-size: 15px !important;
  line-height: 1.1 !important;
`;
const TitleCard = styled__default["default"].div `
  height: 32px !important;
  font-size: 16px !important;
  font-weight: bold !important;
  white-space: normal !important;
`;
const CardContainer = styled__default["default"](_.Card) `
  max-width: 345px !important;
  height: 445px !important;
  width: 282px !important;
  box-shadow: none !important;
  border: 1px solid #c4c4c4;

  background: #FBFBFB;
  border: 1px solid #E8E8E8;
  box-sizing: border-box !important;
  border-radius: 4px !important;
  display: inline-block !important;
  margin-right: 24px !important;
  margin-bottom: 24px !important;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.secondary2} !important;
  }
`;

const HeaderImage = styled__default["default"](_.Box) `
    width: 320px;
    height: 200px;
    cursor: ${({ notstarted }) => notstarted ? 'no-drop' : 'pointer'};
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url('${({ image }) => image}');
    filter: grayscale(${({ notstarted }) => notstarted ? '1' : '0'});
    background-size: contain;
`;
const MyBox = styled__default["default"](_.Box) `
    padding: 0px;
    height: 245px;
    padding-top: 12px;
`;
const MyCardContent = styled__default["default"](_.CardContent) `
    cursor: ${({ notstarted }) => notstarted ? 'no-drop' : 'pointer'};
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: ${({ hasmentor }) => hasmentor ? 'space-between' : 'flex-start'};
`;
const WrapperDate = styled__default["default"].div `
    display: ${({ notstarted }) => notstarted ? 'flex' : 'none'};
    margin-bottom: 7px;
`;

function CardTrail(props) {
    const redirectToD2L = async () => {
        if (props?.notStarted)
            return;
        let URL = await props.action();
        return window.open(URL);
    };
    const getAlign = () => {
        if (props.variant == 'primary' && props.notStarted) {
            if (props.start || props.mentor?.name)
                return +true;
            if (!props.start || !props.mentor?.name)
                return +false;
        }
        if (props.variant == 'primary' && !props.notStarted) {
            if (props.start && !props.mentor?.name)
                return +false;
            if (!props.start && props.mentor?.name)
                return +false;
            if (!props.start && !props.mentor?.name)
                return +false;
        }
        return +true;
    };
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsxs(CardContainer, { children: [!props?.notStarted && props.variant == 'primary' &&
                    jsxRuntime.jsx(PercentageProgress, { progress: props.progress }), jsxRuntime.jsx(HeaderImage, { onClick: redirectToD2L, image: props.bannerImage, notstarted: +props?.notStarted }), jsxRuntime.jsx(MyBox, { children: jsxRuntime.jsxs(MyCardContent, { notstarted: +props?.notStarted, hasmentor: getAlign(), children: [jsxRuntime.jsx(TitleCard, { onClick: redirectToD2L, children: props.name }), jsxRuntime.jsx(TextDescription, { onClick: redirectToD2L, children: props.description }), props.variant == 'primary' ?
                                jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [props.start &&
                                            jsxRuntime.jsxs(WrapperDate, { onClick: redirectToD2L, notstarted: +props?.notStarted, children: [jsxRuntime.jsxs("b", { children: [props.labels?.dateStart ? props.labels?.dateStart : 'Data de início', ":\u00A0"] }), props.start] }), props.mentor?.name &&
                                            jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(TitleMentoring, { onClick: redirectToD2L, children: props.labels?.mentor ? props.labels?.mentor : 'Mentor(a)' }), jsxRuntime.jsx(MentorComponent, { mentor: props.mentor, notstarted: +props?.notStarted })] })] })
                                :
                                    jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs(WrapperDate, { onClick: redirectToD2L, notstarted: +true, style: { margin: '0px' }, children: [jsxRuntime.jsxs("b", { children: [props.labels?.dateStart ? props.labels?.dateStart : 'Data de início', ":\u00A0"] }), props.start] }) })] }) })] }) }));
}
function MentorComponent(props) {
    return jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs(GridFooter, { container: true, spacing: 2, onClick: () => { props.mentor.linkedin && window.open(`${props.mentor.linkedin}`, '_blank'); }, style: { margin: '0px', cursor: 'pointer' }, children: [jsxRuntime.jsx(Avatar, { size: "32px", alt: "Mentoring", src: props.mentor?.avatar ? props.mentor.avatar : "https://certificates-mentor.s3.amazonaws.com/frst-avatar-default.png", disabled: props?.notStarted }), jsxRuntime.jsx(GridNameMentoring, { item: true, children: jsxRuntime.jsx(NameMentoring, { children: props.mentor?.name }) }), props.mentor.linkedin && jsxRuntime.jsx(LinkedinIconMentor, {})] }) });
}
function PercentageProgress({ progress }) {
    return jsxRuntime.jsx(jsxRuntime.Fragment, { children: progress && (jsxRuntime.jsx(ProgressBox, { children: jsxRuntime.jsx(_.Grid, { container: true, spacing: 0, alignItems: "center", children: progress > 0 &&
                    jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(_.Grid, { item: true, xs: 10, children: jsxRuntime.jsx(ProgressBar, { variant: "determinate", value: progress }) }), jsxRuntime.jsx(_.Grid, { item: true, xs: 2, children: jsxRuntime.jsxs(ProgressLabel, { children: [progress, "%"] }) })] }) }) })) });
}

function CardTrailCarousel({ objectCards, marginsArrowButton, move, isVisibleButtons, sizeArrowButton, horizontalMarginInternScroll, positionArrowButton, marginTopArrrowButton, label }) {
    function renderCard(item, index) {
        return jsxRuntime.jsx(CardTrail, { variant: item.variant, name: item.name, progress: item.progress, start: item.start, description: item.description, mentor: item.mentor, action: item.action, notStarted: item.notStarted, bannerImage: item.bannerImage, labels: label ? label : { mentor: 'Mentor(a)', dateStart: "Data de Início" } }, index);
    }
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsx(ScrollContainer, { stepMove: move ? move : 380, isVisibleControlsButtons: isVisibleButtons, sizeArrowButton: sizeArrowButton, marginsArrowButton: marginsArrowButton, horizontalMarginInternScroll: horizontalMarginInternScroll, positionArrowButton: positionArrowButton ? positionArrowButton : '', marginTopArrrowButton: marginTopArrrowButton ? marginTopArrrowButton : '20px', children: jsxRuntime.jsx("div", { children: objectCards.map(renderCard) }) }) }));
}

const WrapperCard$4 = styled__default["default"].div `
    display: flex;
    flex-direction: column;
    width: 282px;
    height: 445px;
    background: ${({ theme, active }) => active ? theme.colors.neutralsGrey9 : theme.colors.shadeWhite};
    border-radius: 8px;

    overflow: hidden;

    &:hover{
        // background: ${({ theme }) => theme.colors.neutralsGrey9};
        // border: 1px solid ${({ theme }) => theme.colors.neutralsGrey5};

        box-shadow: 0px 10px 20px 7px rgb(255 255 255 / 20%);
        cursor: pointer;
    }
`;
const TagText = styled__default["default"].span `
    border-radius: 0px 8px;
    /* margin-bottom: -24px; */

    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    white-space: nowrap;
    color: #FFFFFF;
`;
const WrapperBanner = styled__default["default"].div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 200px;
    max-height: 200px;
`;
const TagStep = styled__default["default"].div `
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: flex-end;
        padding: 4px 15px;
        border-radius: 0px 8px;
        
        height: 24px;
        z-index: 2 ;
        ${({ variant, theme }) => getVariantTagStyle(variant, theme)};
    `;
const BannerCard = styled__default["default"].img `
        margin-top: -24px;

        margin-bottom: 0px;
        height: fit-content;
    `;
const StepName = styled__default["default"].div `
        font-family: 'VT323', monospace;
        font-size: 40px;
        color: white;
        -webkit-text-stroke: 0.5px black;
        text-shadow: 2px 0 0 black, 0 2px 0 black,-2px 0 0 black,0 -2px 0 black;
        
        display: flex;
        justify-content: center;
        border: 2px dashed #FFF;

        z-index: 2;
        ${({ variant }) => variant != 'completed' && variant != 'srg' &&
    `margin-top: -60px;
            margin-bottom: 16px;`}
        padding: 0px 12px 0px 12px;
    `;
const ContentCard = styled__default["default"].div `
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 282px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey5};
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-top: 0px;
`;
const WrapperHeader$1 = styled__default["default"].div `
    width: 100%;   
    display: flex;
    flex-direction: row;
    padding-right: 10px;
`;
const TitleProject = styled__default["default"].p `
    flex: 1;
    padding: 17px;
    padding-left: 24px;
    padding-bottom: 0px;
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
`;
const Dots = styled__default["default"].div `
    margin-top: 5px;

    height: fit-content;
`;
const DescriptionProject = styled__default["default"].span `
    flex: 1;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    
    color: ${({ theme }) => theme.colors.primary1};
    padding: 24px;
    padding-top: 16px;

    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4; /** número de linhas que você quer exibir */
    -webkit-box-orient: vertical;
    word-wrap: break-word;
`;
const DescriptionSRG$1 = styled__default["default"].span `
    flex: 1;
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    
    /* neutrals/grey_1 */
    
    color: #222222;
    
    color: ${({ theme }) => theme.colors.neutralsGrey1};
    padding: 24px;
    padding-right: 25px;
    padding-top: 16px;
`;
const ButtonActionWrapper = styled__default["default"].div `
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;
const ButtonAction = styled__default["default"].div `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 47px;
    padding: 12px;
    width: 100%;

    border-top: 1px solid ${({ theme }) => theme.colors.neutralsGrey5};

    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;

    color: ${({ theme }) => theme.colors.linkOnfocus};

    &:nth-child(1) {
        ${({ variant, theme }) => variant != 'completed' && variant != 'srg' && `
            border-right: 1px solid ${theme.colors.neutralsGrey5};
        `}
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors.neutralsGrey8};
        color: ${({ theme }) => theme.colors.linkHover};
    }
`;
styled__default["default"].div `
    position: absolute;
    width: 130px;
    background: ${({ theme }) => theme.colors.shadeWhite};

    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey5};
    border-radius: 4px;

    margin-left: -100px;

`;
function getVariantTagStyle(variant, theme) {
    switch (variant) {
        case 'incompleteMars':
            return `
                background: rgb(117, 117, 117);
                & > span {
                    color: #FFF !important;
                }
            `;
        case 'mars':
            return `
                background: ${theme.colors.linkHover};
                & > span {
                    color: #FFF !important;
                }
            `;
        case 'jupiter':
            return `
                background: #F8B911;
                & > span {
                    color: #222222!important;
                }
            `;
        case 'saturn':
            return `
            background: #663366;
            & > span {
                color: #FFF !important;
            }
        `;
        case 'uranus':
            return `
            background: #AD005C;
            & > span {
                color: #FFF !important;
            }
        `;
        case 'neptune':
            return `
                background: #222222;
                & > span {
                    color: #FFF !important;
                }
            `;
        case 'completed':
            return `
                background: #158214;
                & > span {
                    color: #FFF !important;
                }
            `;
    }
}

styled__default["default"].p `
  color: white;
  padding-left: 5px;
  font-size: 16px;
`;
const MenuCustom = styled__default["default"](Menu__default["default"]) `
  margin-left: ${({ step }) => step == 'completed' ? '-64px' : '-84px'} ;
  margin-top: 10px;

  & .MuiPaper-root {
    border-radius: 0px;
    box-shadow: none !important;
    overflow: visible;

    &:before {
      content: "";
      position: absolute;
      top: -17px;
      right: 19.5px;
      border-top: 7px solid transparent;
      border-bottom: 10px solid #BDBDBD;
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
    }
  
    &:after {
        content: "";
        position: absolute;
        top: -16px;
        right: 19.5px;
        border-top: 7px solid transparent;
        border-bottom: 10px solid #FFF;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
    }
  }
  ul {
    box-shadow: -3px 16px 12px -12px #BDBDBD;
    padding-top: 0px;
    padding-bottom: 0px;
    border: 1px solid #BDBDBD !important;
    border-radius: 4px !important;
    overflow: hidden;
  }
`;
const MenuItemCustom = styled__default["default"](MenuItem__default["default"]) `
  background-color: ${({ theme }) => theme.colors.shadeWhite} !important;
  margin: 1px !important;

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutralsGrey8} !important;
    color: ${({ theme }) => theme.colors.linkHover} !important;
  }

  &:last-child {
    &:hover {
      color: ${({ theme }) => theme.colors.linkError} !important;
    }
  }
`;
styled__default["default"](MenuItem__default["default"]) `
  color: white !important;
  background-color: #F5792A !important;

  display: flex;
  flex-direction: row;
  &:hover {
    background-color: #FD9350 !important;
  }
`;
const TextOption = styled__default["default"].div `
  margin-left: 10px;
  padding-top: 1px;
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
`;

function ChallengeCard({ variant, description, language, onClickView, onClickNewProject, onClickContinue, onClickDelete, onClickEdit, style }) {
    const [label, setLabel] = React.useState(labels['ptBR']);
    const [activeClick, setActiveClick] = React.useState(false);
    React.useEffect(() => {
        let valuesTranslate = language?.replace(/\-/g, "");
        setLabel(utilAssign(labels[valuesTranslate], labels['ptBR']));
    }, [language]);
    const handleClick = () => {
        if (variant == 'srg')
            onClickNewProject();
        else
            onClickView();
        setActiveClick(true);
        setTimeout(() => {
            setActiveClick(false);
        }, 700);
    };
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsxs(WrapperCard$4, { style: { ...style }, active: activeClick, children: [jsxRuntime.jsxs(TagStep, { onClick: () => handleClick(), variant: variant, children: [jsxRuntime.jsx(TagText, { children: label.tagStep[variant] }), variant == 'completed' &&
                            jsxRuntime.jsx("span", { style: { marginLeft: '10px', height: '100%' }, children: jsxRuntime.jsx(CheckInCicle, { customColor_1: "transparent", height: '16', width: '16' }) })] }), jsxRuntime.jsxs(WrapperBanner, { onClick: () => handleClick(), children: [jsxRuntime.jsx(BannerCard, { src: BannersSRC[variant] }), jsxRuntime.jsx(StepName, { variant: variant, children: label.nameStep[variant] })] }), jsxRuntime.jsxs(ContentCard, { children: [jsxRuntime.jsxs(WrapperHeader$1, { children: [jsxRuntime.jsx(TitleProject, { onClick: () => handleClick(), children: variant == 'srg' ? 'Space Race Game' : label.project }), variant != 'srg' && onClickContinue && onClickDelete &&
                                    jsxRuntime.jsx(Dots, { children: jsxRuntime.jsx(MoreVerticalMenu, { textContinue: label.continue, textDelete: label.delete, textEdit: label.edit, handleContinue: () => onClickContinue(), handleDelete: () => onClickDelete(), handleEdit: () => onClickEdit(), variant: variant }) })] }), variant != 'srg' ?
                            jsxRuntime.jsx(DescriptionProject, { onClick: () => handleClick(), children: resumeString(description, 73) })
                            :
                                jsxRuntime.jsx(DescriptionSRG$1, { onClick: () => handleClick(), children: label.srgDecription }), jsxRuntime.jsxs(ButtonActionWrapper, { children: [jsxRuntime.jsx(ButtonAction, { onClick: () => handleClick(), variant: variant, children: variant == 'srg' ?
                                        jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(Plus, {}), jsxRuntime.jsx("span", { style: { marginLeft: '12px' }, children: label.newProject })] })
                                        :
                                            label.view }), variant !== 'srg' && variant !== 'completed' && onClickContinue &&
                                    jsxRuntime.jsx(ButtonAction, { onClick: () => onClickContinue(), variant: variant, children: jsxRuntime.jsx("span", { style: { marginLeft: '12px' }, children: label.continue }) })] })] })] }) }));
}
const resumeString = (str, limit) => {
    if (!str)
        return str;
    if (str?.length < limit)
        return str;
    return `${str.substr(0, limit)}...`;
};
const utilAssign = (value, optional) => {
    return value ? value : optional;
};
const BannersSRC = {
    srg: 'https://api-deimos.s3.amazonaws.com/srg.png',
    incompleteMars: 'https://api-deimos.s3.amazonaws.com/step1Mars.png',
    mars: 'https://api-deimos.s3.amazonaws.com/step1Mars.png',
    jupiter: 'https://api-deimos.s3.amazonaws.com/step2Jupiter.png',
    saturn: 'https://api-deimos.s3.amazonaws.com/step3Saturn.png',
    uranus: 'https://api-deimos.s3.amazonaws.com/step4Uranus.png',
    neptune: 'https://api-deimos.s3.amazonaws.com/step4Neptune.png',
    completed: 'https://api-deimos.s3.amazonaws.com/completed.png'
};
const labels = {
    ptBR: {
        srgDecription: 'Nossa ferramenta ágil para atingir resultados e garantir aprendizados reais com ciclos de colaboração e experimentação.',
        project: 'Desafio',
        delete: 'Excluir',
        edit: 'Editar',
        continue: 'Continuar',
        view: 'Visualizar',
        newProject: 'Criar desafio',
        tagStep: {
            incompleteMars: 'Problema criado',
            mars: 'Definição do desafio',
            jupiter: 'Hipóteses e plano de ação',
            saturn: 'Testes e experimentos',
            uranus: 'Resultados e aprendizados',
            neptune: 'Próximos passos',
            completed: 'Finalizado'
        },
        nameStep: {
            incompleteMars: 'Marte',
            mars: 'Marte',
            jupiter: 'Júpiter',
            saturn: 'Saturno',
            uranus: 'Urano',
            neptune: 'Netuno'
        }
    },
    enUS: {
        srgDecription: 'Our agile tool to achieve results and ensure real learning with cycles of collaboration and experimentation.',
        project: 'Challenge',
        delete: 'Delete',
        edit: 'Edit',
        continue: 'Continue',
        view: 'View',
        newProject: 'Create challenge',
        tagStep: {
            incompleteMars: 'Created problem',
            mars: 'Challenge definition',
            jupiter: 'Hypotheses and action plan',
            saturn: 'Tests and experiment',
            uranus: 'Results and learnings',
            neptune: 'Next steps',
            completed: 'Completed'
        },
        nameStep: {
            incompleteMars: 'Mars',
            mars: 'Mars',
            jupiter: 'Jupiter',
            saturn: 'Saturn',
            uranus: 'Uranus',
            neptune: 'Neptune'
        }
    },
    es: {
        srgDecription: 'Nuestra herramienta ágil para lograr resultados y asegurar un aprendizaje real con ciclos de colaboración y experimentación.',
        project: 'Desafio',
        delete: 'Elimina',
        edit: 'Edita',
        continue: 'Continúa',
        view: 'Para ver',
        newProject: 'Crear desafio',
        tagStep: {
            incompleteMars: 'Problema creado',
            mars: 'Definición del desafío',
            jupiter: 'Hipótesis y plan de acción',
            saturn: 'Pruebas y Experimentos',
            uranus: 'Resultados y aprendizajes',
            neptune: 'Próximos pasos',
            completed: 'Terminado'
        },
        nameStep: {
            incompleteMars: 'Marte',
            mars: 'Marte',
            jupiter: 'Júpiter',
            saturn: 'Saturno',
            uranus: 'Urano',
            neptune: 'Neptuno'
        }
    },
};
function MoreVerticalMenu({ textContinue, textDelete, textEdit, handleContinue, handleDelete, handleEdit, variant }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [activeClick, setActiveClick] = React.useState([false, false]);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleSelect = (value) => {
        setActiveClick(value);
        setTimeout(() => {
            if (value[0])
                handleContinue();
            if (value[1])
                handleEdit();
            if (value[2])
                handleDelete();
            setActiveClick([false, false]);
            setAnchorEl(null);
        }, 600);
    };
    return (jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx(Button__default["default"], { id: "basic-button", "aria-controls": "basic-menu", "aria-haspopup": "true", "aria-expanded": open ? 'true' : undefined, onClick: handleClick, style: {
                    width: '51px',
                    minWidth: '30px',
                    height: '47px',
                    margin: 0,
                    padding: 0,
                    display: 'flex',
                    justifyContent: 'center'
                }, children: jsxRuntime.jsx(MoreDotsVertical, {}) }), jsxRuntime.jsxs(MenuCustom, { id: "basic-menu", anchorOrigin: { vertical: 'bottom', horizontal: 'left' }, transformOrigin: { vertical: 'top', horizontal: 'left' }, anchorEl: anchorEl, open: open, onClose: handleClose, step: variant, children: [variant !== 'completed' &&
                        jsxRuntime.jsxs(MenuItemCustom, { onClick: () => handleSelect([true, false, false]), style: { color: activeClick[0] ? '#663366' : '#0645AD', borderBottom: '1px solid #EBEBEB' }, children: [jsxRuntime.jsx(FowardArrow, { width: '16', height: '16', fill: activeClick[0] ? '#663366' : '#0645AD' }), jsxRuntime.jsx(TextOption, { children: textContinue })] }), jsxRuntime.jsxs(MenuItemCustom, { onClick: () => handleSelect([false, true, false]), style: { color: activeClick[0] ? '#663366' : '#0645AD', borderBottom: '1px solid #EBEBEB' }, children: [jsxRuntime.jsx(EditIcon, { width: '16', height: '16', fill: activeClick[0] ? '#663366' : '#0645AD' }), jsxRuntime.jsx(TextOption, { children: textEdit })] }), jsxRuntime.jsxs(MenuItemCustom, { onClick: () => handleSelect([false, false, true]), style: { color: activeClick[1] ? '#C00F00' : '#FF0000' }, children: [jsxRuntime.jsx(TrashIcon, { fill: activeClick[1] ? '#C00F00' : '#FF0000', width: '13', height: '16' }), jsxRuntime.jsx(TextOption, { children: textDelete })] })] })] }));
}

const Container$3 = styled__default["default"].div `
    width: 100%;
    min-height: 127px;
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey5};
    border-radius: 8px;
`;
const Typography$1 = styled__default["default"].div `
    font-family: Work Sans;
    font-size: 20px;
    font-weight: 500;
    line-height: 23px;
    color: ${({ theme }) => theme.colors.primary1};
    margin-top: 16px;
    margin-left: 16px;
`;
const ContainerSearch = styled__default["default"].div `
    margin: 24px 16px 16px 16px;
`;

function SearchBox(props) {
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsxs(Container$3, { style: { ...props.style }, children: [jsxRuntime.jsx(Typography$1, { children: props.textTitle ? props.textTitle : props.textTitle }), jsxRuntime.jsx(ContainerSearch, { children: jsxRuntime.jsx(SearchField, { hasSearchIcon: true, textButton: props.textButton ? props.textButton : '', placeholder: props.textPlaceholder ? props.textPlaceholder : '', handleClickButton: props.handleClickSearchButton, onChange: props.onChange }) })] }) }));
}

const WrapperCard$3 = styled__default["default"].div `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 0px 12px;

    position: relative;
    width: 282px;
    height: auto;

    background: ${({ theme }) => theme.colors.shadeWhite};

    border: 1px solid #BDBDBD;
    border-radius: 8px;
`;
const WrapperHeader = styled__default["default"].div `
    width: 100%;
    padding-left: 24px;
    padding-right: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const NameProfile = styled__default["default"].span `
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-align: center;

    color: ${({ theme }) => theme.colors.neutralsGrey1};

    margin-top: 16px;
`;
const Channel = styled__default["default"].span `
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    display: flex;
    align-items: center;
    text-align: center;

    color: ${({ theme }) => theme.colors.neutralsGrey1};

    margin-top: 4px;
`;
const WrapperButton$1 = styled__default["default"].div `
margin-top: 10px;

`;
const HR = styled__default["default"].hr `
    border-top: 1px solid #BDBDBD;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
`;

const WrapperItem = styled__default["default"].div `
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    padding: 8px;
    background: ${({ theme }) => theme.colors.shadeWhite};
    border-left: 4px solid ${({ active, theme }) => active ? theme.colors.primary1 : 'transparent'};

    &:hover {
        background: ${({ theme }) => theme.colors.neutralsGrey8};
    }
`;
const WrapperMainLabel = styled__default["default"].span `
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: ${({ active }) => active ? '700' : '400'};
    font-size: 18px;
    line-height: 23px;
    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: 8px;

    color: ${({ theme, active }) => active ? theme.colors.primary1 : theme.colors.neutralsGrey1};
`;
const WrapperComponent = styled__default["default"].div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    & > svg {
        width: 24px;
        height: 24px;
    }
`;
// & > path {
//     fill: ${({ theme, active }) => active ? theme.colors.primary1 : theme.colors.neutralsGrey1};
// }
const WrapperButton = styled__default["default"].div `
    margin-right: 8px;
    
    & > button {
        display: flex;
        height: 24px;
        flex-direction: row;
        align-items: flex-start;
        padding: 6px 8px;
        gap: 10px;
        border-radius: 4px;
        
        font-family: 'Work Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 12px;
        z-index: 2;
    }
`;
const WrapperIconDrop = styled__default["default"].div `
    margin-right: 24px;
    & > svg {
        transition: all 0.3s ease-out;
        transform: rotate(${({ isOpen }) => isOpen ? '0' : '0.5turn'});
        & > path {
            stroke: ${({ theme, isOpen }) => isOpen ? theme.colors.primary1 : theme.colors.neutralsGrey1};
        }
    }
`;
const WrapperCompound = styled__default["default"].div `
    display: flex;
    transition: max-height 0.3s ease-in-out;
    flex-direction: column;
`;
const WrapperSubItems = styled__default["default"].div `
    display: flex;
    flex-direction: column;
    height: auto;
    transform-origin:top;
    transform:scaleY(${({ isOpen }) => isOpen ? '1' : '0'});
    transition: transform 0.3s ease-in-out;
    overflow: hidden;
`;
const SubItem = styled__default["default"].div `
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    padding: 10px;
    padding-left: 16px;
    background: ${({ theme }) => theme.colors.neutralsGrey8};
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutralsGrey5};

    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    display: flex;
    align-items: center;

    &:hover {
        background: ${({ theme }) => theme.colors.neutralsGrey6};
    }
`;

function LateralMenu$1({ label, onClick, button, beginComponent, activeBeginIcon, selected, subItems, hiddenIconDropArrow, style }) {
    const [isActive, setIsActive] = React.useState(selected);
    React.useEffect(() => {
        setIsActive(selected);
    }, [selected]);
    const getSizeCompound = () => {
        if (!subItems.length)
            return '40px';
        let size = (subItems.length + 1) * 42;
        return size + 'px';
    };
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: subItems && subItems.length > 0 ?
            jsxRuntime.jsxs(WrapperCompound, { isOpen: isActive, style: { ...style, maxHeight: isActive ? getSizeCompound() : '40px' }, children: [jsxRuntime.jsxs(WrapperItem, { active: isActive, onClick: (e) => setIsActive(!isActive), style: { ...style, margin: 0, padding: 0, justifyContent: 'space-between' }, children: [jsxRuntime.jsxs(WrapperItem, { style: { background: 'transparent', width: '100%' }, children: [beginComponent &&
                                        jsxRuntime.jsx(WrapperComponent, { active: isActive, children: isActive ? activeBeginIcon ? activeBeginIcon : beginComponent : beginComponent }), jsxRuntime.jsx(WrapperMainLabel, { active: isActive, style: { marginLeft: beginComponent ? '8px' : '0px' }, children: label })] }), button && button?.label &&
                                jsxRuntime.jsx(WrapperButton, { children: jsxRuntime.jsx(Button$3, { label: button.label, handleClick: (e) => button.onClick(e), variant: button?.variant ? button.variant : 'primary' }) }), !hiddenIconDropArrow &&
                                jsxRuntime.jsx(WrapperIconDrop, { isOpen: isActive, children: jsxRuntime.jsx(DropdownIconLine, { fill: '#000' }) })] }), jsxRuntime.jsx(WrapperSubItems, { isOpen: isActive, children: subItems.map((item, index) => {
                            return jsxRuntime.jsx(SubItem, { onClick: () => item.onClick(item.id), children: item.label }, index);
                        }) })] })
            :
                jsxRuntime.jsxs(WrapperItem, { active: isActive, style: { ...style, margin: 0, padding: 0, justifyContent: 'space-between' }, children: [jsxRuntime.jsxs(WrapperItem, { style: { background: 'transparent', width: '100%' }, onClick: (e) => onClick(e), children: [beginComponent &&
                                    jsxRuntime.jsx(WrapperComponent, { active: isActive, children: isActive ? activeBeginIcon ? activeBeginIcon : beginComponent : beginComponent }), jsxRuntime.jsx(WrapperMainLabel, { active: isActive, style: { marginLeft: beginComponent ? '8px' : '0px' }, children: label })] }), button && button?.label &&
                            jsxRuntime.jsx(WrapperButton, { children: jsxRuntime.jsx(Button$3, { label: button.label, handleClick: (e) => button.onClick(e), variant: button?.variant ? button.variant : 'primary' }) })] }) }));
}

function LateralMenu({ variant, hiddenButtonHeader, avatar, name, channel, button, listOptions, style }) {
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsxs(WrapperCard$3, { style: { ...style }, children: [jsxRuntime.jsxs(WrapperHeader, { children: [jsxRuntime.jsx(Avatar, { src: avatar.src, alt: avatar.alt ? avatar.alt : 'Image profile avatar', size: avatar.size ? avatar.size : '80px' }), jsxRuntime.jsx(NameProfile, { children: name }), channel &&
                            jsxRuntime.jsx(Channel, { children: channel }), !hiddenButtonHeader &&
                            jsxRuntime.jsx(WrapperButton$1, { children: !channel ?
                                    jsxRuntime.jsx(Button$3, { variant: 'primary', label: button.label, handleClick: (e) => button.onClick(e) })
                                    :
                                        jsxRuntime.jsx(Button$3, { variant: 'link', label: button.label, handleClick: (e) => button.onClick(e) }) }), jsxRuntime.jsx(HR, {})] }), listOptions && listOptions.length > 0 && listOptions.map((item, index) => {
                    return (jsxRuntime.jsx(LateralMenu$1, { label: item.label, button: item.button, beginComponent: item.beginComponent, activeBeginIcon: item.activeBeginIcon, hiddenIconDropArrow: item.hiddenIconDropArrow, onClick: (e) => item.onClick(e), selected: item.selected, subItems: item.subItems, style: { width: '100%' } }, index));
                })] }) }));
}

const ContainerTotal = styled__default["default"].div `
    width: 100%;
    min-height: 508px;
    background-image: url("${({ bannerNormal, bannerLarge, isExtendedVersion }) => isExtendedVersion ? bannerLarge : bannerNormal}");
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;

    display: flex;
    flex-direction: column;

    @media (max-width: 870px) {
        background-image: url("${({ bannerResponsive }) => bannerResponsive}");
        height: 745px;
    }
`;
const VersionExtended = styled__default["default"].div `
    height: ${({ isExtendedVersion, heightExtended }) => isExtendedVersion ? heightExtended ? heightExtended : '508px' : '0px'};
    @media (max-width: 870px) {
        display: none;
    }
`;
const ContainerBanner = styled__default["default"].div `
    width: 100%;
    height: 508px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    & > div:nth-child(5) {
        display: none;
    }
    @media (max-width: 1500px) {
        padding: 20px !important;
    }

    @media (max-width: 1200px) {
        & > div:nth-child(1) {
            display: none !important;
        }
    }

    @media (max-width: 870px) {
        height: 745px;

        & > div:nth-child(2) {
            min-width: 100%;
        }
        & > div:nth-child(3) {
            min-width: 360px;
            max-width: 360px;

            & > div:nth-child(2) {
                margin-bottom: 0px;
            }
            & > button {
                display: none;
            }
        }
        & > div:nth-child(4) {
            min-width: 100%;
            max-width: 100%;
            display: flex;
            justify-content: center;

            & > div:nth-child(1) {
                width: 270px;
                margin-left: 0px;

                & > div:nth-child(1) {

                }
            }
        }
        & > div:nth-child(5) {
            min-width: 100%;
            min-width: 360px;
            display: flex;
            align-self: flex-end;
            margin-bottom: 40px;
            & > button {
                width: 360px;
                max-width: 100%;
            }
        }
    }
`;
const WrapperContent = styled__default["default"].div `
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const WrapperContentMain = styled__default["default"].div `
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    & button {
        width: fit-content;
        white-space:  nowrap;
    }
`;
const WrapperContentHelper = styled__default["default"].div `
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    flex-direction: row;
`;
const TitleSRG = styled__default["default"].div `
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    white-space:  nowrap;

    display: flex;
    align-items: center;
    letter-spacing: 0.01em;

    color: ${({ theme }) => theme.colors.shadeWhite};
    margin-bottom: 24px;
    
`;
const DescriptionSRG = styled__default["default"].div `
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.colors.shadeWhite};
    margin-bottom: 24px;
`;
const SpeechBubble = styled__default["default"].div `
    flex-direction: column;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    background: ${({ theme }) => theme.colors.messageAlert2};
    border: 1.5px solid ${({ theme }) => theme.colors.borderSecondary2};
    border-radius: 8px;
    padding: 16px;
    
    width: 160px;
    margin-right: 22px;
    margin-left: 50px;

    &:before {
        content: "";
        position: absolute;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 20px solid ${({ theme }) => theme.colors.borderSecondary2}; 
        border-right: 10px solid transparent;
        margin-right: -46px;
        margin-bottom: 0px;
    }

    &:after {
        content: "";
        position: absolute;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 20px solid ${({ theme }) => theme.colors.messageAlert2}; 
        border-right: 10px solid transparent;
        margin-right: -44px;
        margin-bottom: 0px;
    }

    & a {
        align-self: flex-start;
    }
`;
const HelperText = styled__default["default"].div `
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    color: ${({ theme }) => theme.colors.neutralsGrey1};
    margin-bottom: 8px;
`;
const FrstSocials = styled__default["default"].div `
    display:flex;
    justify-content: center;
    align-center: center;
    flex-direction: row;
    margin-top: 24px;
    margin-bottom: 32px;
    position: absolute;
    right: 120px;
    top: 60px;
    @media (max-width: 1500px) {
        right: 40px;
    }
`;
const ItemFrstSocials = styled__default["default"].button `
    border: none;
    background: none;
    cursor: pointer;
    margin-left: 11px;
`;

function BannerSRG(props) {
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsxs(ContainerTotal, { isExtendedVersion: props?.isExtendedVersion, bannerLarge: props?.bannerSRG?.large, bannerNormal: props?.bannerSRG?.normal, bannerResponsive: props?.bannerSRG?.responsive, style: { ...props.style }, children: [jsxRuntime.jsxs(ContainerBanner, { children: [jsxRuntime.jsxs(WrapperContent, { style: { maxHeight: '240px', height: '240px', display: 'flex', alignItems: 'flex-start', marginTop: '-100px' }, children: [props && props.social &&
                                    jsxRuntime.jsxs(FrstSocials, { children: [props.social.onClickSite && jsxRuntime.jsxs(ItemFrstSocials, { onClick: () => props.social.onClickSite(), children: [" ", jsxRuntime.jsx(SiteIcon, {}), " "] }), props.social.onClickLinkedin && jsxRuntime.jsxs(ItemFrstSocials, { onClick: () => props.social.onClickLinkedin(), children: [" ", jsxRuntime.jsx(LinkedinIcon, {}), " "] }), props.social.onClickInstagram && jsxRuntime.jsxs(ItemFrstSocials, { onClick: () => props.social.onClickInstagram(), children: [" ", jsxRuntime.jsx(InstagramIcon, {}), " "] }), props.social.onClickYoutube && jsxRuntime.jsxs(ItemFrstSocials, { onClick: () => props.social.onClickYoutube(), children: [" ", jsxRuntime.jsx(YoutubeIcon, {}), " "] }), props.social.onClickSpotify && jsxRuntime.jsxs(ItemFrstSocials, { onClick: () => props.social.onClickSpotify(), children: [" ", jsxRuntime.jsx(SpotifyIcon, {}), " "] }), props.social.onClickPodCast && jsxRuntime.jsxs(ItemFrstSocials, { onClick: () => props.social.onClickPodCast(), children: [" ", jsxRuntime.jsx(PodCastIcon, {}), " "] })] }), jsxRuntime.jsx(LateralMenu, { variant: 'primary', channel: '', name: props.lateralMenu.name, hiddenButtonHeader: true, avatar: props.lateralMenu.avatar, button: props.lateralMenu.button, listOptions: props.lateralMenu.listOptions })] }), jsxRuntime.jsx(WrapperContent, { children: jsxRuntime.jsx("img", { src: props.logoSRG }) }), jsxRuntime.jsxs(WrapperContentMain, { children: [jsxRuntime.jsx(TitleSRG, { children: props?.labels?.textTitle ? props?.labels?.textTitle : 'Space Race Game' }), jsxRuntime.jsx(DescriptionSRG, { children: props?.labels?.textDescription }), jsxRuntime.jsx(Button$3, { variant: 'primary', label: props?.newProject?.label ? props.newProject?.label : 'Criar novo projeto', handleClick: () => props.newProject.action(), startIcon: jsxRuntime.jsx(AddIcon, { fill: '#FFFFFF' }) })] }), jsxRuntime.jsxs(WrapperContentHelper, { children: [jsxRuntime.jsxs(SpeechBubble, { children: [jsxRuntime.jsx(HelperText, { children: props.labels.textHelperDescription }), jsxRuntime.jsx(Button$3, { variant: 'link', label: props?.acessHere?.label ? props.acessHere.label : 'Acesse aqui', handleClick: () => props.acessHere.action(), style: { color: '#21bffc' } })] }), jsxRuntime.jsx("img", { src: props.avatarSRG })] }), jsxRuntime.jsx(WrapperContent, { children: jsxRuntime.jsx(Button$3, { variant: 'primary', label: props?.newProject?.label ? props.newProject?.label : 'Criar novo projeto', handleClick: () => props.newProject.action(), startIcon: jsxRuntime.jsx(AddIcon, { fill: '#FFFFFF' }) }) })] }), jsxRuntime.jsx(VersionExtended, { isExtendedVersion: props.isExtendedVersion, heightExtended: props.heightExtended })] }) }));
}

const achievementHeader = styled__default["default"].div `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    
    height: 96px;
    padding: 20px 32px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    word-wrap: break-word;

    ${({ theme }) => theme.fonts.textMessageComponentsBodyBold};
    color: ${({ theme }) => theme.colors.shadeWhite};
`;
const bannerContainer = styled__default["default"].div `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    border: 1px solid ${({ theme }) => theme.colors.borderPrimary}; 
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    padding: 24px;
    position: relative;
`;
const headerContent = styled__default["default"].div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;
const userInfo = styled__default["default"].div `
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    font-family: 'Work Sans';
    color: ${({ theme }) => theme.colors.neutralsGrey1};
    margin-left: 16px;
`;
const problemTitle = styled__default["default"].div `
    font-family: 'Work Sans';
    color: ${({ theme }) => theme.colors.primary1};
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    margin-top: 24px;
    word-wrap: break-word;
`;
const tagContent = styled__default["default"].div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 24px;
    gap: 8px;
`;
const lastUpdatedText = styled__default["default"].div `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    ${({ theme }) => theme.fonts.textMessageComponentsBodySmall};
    margin-top: 16px;
`;
const stepsContainer = styled__default["default"].div `
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.borderPrimary}; 
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    padding: 24px;
    margin-bottom: 24px;
`;
const stepsTitle = styled__default["default"].span `
    ${({ theme }) => theme.fonts.header2};
    font-size: 24px !important;
`;
const stepsLabel = styled__default["default"].span `
    font-family: 'Work Sans';
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.neutralsGrey1};
    margin-top: 16px;
    word-wrap: break-word;
`;
const stepsValueText = styled__default["default"].span `
    font-family: 'Work Sans';
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.neutralsGrey1};
    margin-top: 8px;
    word-wrap: break-word;
`;
const topHeaderTag = styled__default["default"].span `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 16px;
    gap: 10px;

    position: absolute;
    right: -1px;
    top: -1px;

    background: ${({ background }) => background || '#940059'};
    color: ${({ color }) => color || '#FFFFFF'};
    border-radius: 0px 8px;

`;

const Container$2 = styled__default["default"].div `
    padding: 1px 24px 0px 24px;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
    border-top: 0px !important;
`;
const infoContent = styled__default["default"].div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderPrimary};
    font-family: 'Work Sans';
    font-size: 16px;
    font-weight: 400;
    padding: 12px;
    padding-top: 24px;
`;
const infoContentWithView = styled__default["default"].div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderPrimary};
    font-family: 'Work Sans';
    font-size: 16px;
    font-weight: 400;
    padding-top: 12px;
`;
const info = styled__default["default"].div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    position: absolute;
    margin-bottom: 12px;
    ${({ theme }) => theme.fonts.textMessageComponentsBodyRegular};
`;
const infoWithView = styled__default["default"].div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-bottom: 12px;
    ${({ theme }) => theme.fonts.textMessageComponentsBodyRegular};
`;
const buttonsContent = styled__default["default"].div `
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 16px;
`;
const buttons = styled__default["default"].button `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    border: none;
    background-color: inherit;
    ${({ theme }) => theme.fonts.textMessageComponentsBodyBold};
    color: ${({ theme }) => theme.colors.linkOnfocus};
    
    cursor: pointer;
    gap: 8px;

    &:hover{
        color: ${({ theme }) => theme.colors.linkHover};
    }

`;
const reviewContainer = styled__default["default"].div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 28px;
    ${({ theme }) => theme.fonts.textMessageComponentsBodyBold};
`;
const reviewContent = styled__default["default"].div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    margin-top: 16px;
    margin-bottom: 32px;
`;
const commentsContainer = styled__default["default"].div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 32px;
`;
const comment = styled__default["default"].div `
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row;
    width: 100%;
    margin-top: 28px;
`;
const inputComment = styled__default["default"].div `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    width: 100%;
    margin-top: 12px;
`;
const submitButton = styled__default["default"].div `
    border: none;
    background: none;
    margin-left: 8px;
`;
const commentList = styled__default["default"].div `
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    margin-top: 16px;
`;

function FeedInteraction(props) {
    const [openReview, setOpenReview] = React.useState(false);
    const [openComments, setOpenComments] = React.useState(false);
    const [loadCommentsText, setLoadCommentsText] = React.useState(props.commentList?.length < 2 ? false : true);
    const [showMoreComments, setShowMoreComments] = React.useState(false);
    const [focusComment, setFocusComment] = React.useState(false);
    const [commentData, setCommentData] = React.useState('');
    const [isVisibleComments, setIsVisibleComments] = React.useState(!props?.hideComments);
    React.useEffect(() => {
        setIsVisibleComments(!props?.hideComments);
    }, [props?.hideComments]);
    const [stateLatestComment, setStateLatestComment] = React.useState(props.latestComment);
    React.useEffect(() => {
        setStateLatestComment(props.latestComment);
    }, [props.latestComment]);
    const OnReviewClick = () => {
        setOpenReview(!openReview);
        setOpenComments(false);
    };
    const OnCommentsClick = () => {
        setOpenComments(!openComments);
        setOpenReview(false);
    };
    const OnLoadCommentsClick = () => {
        setLoadCommentsText(false);
        setShowMoreComments(true);
    };
    const OnChangeComment = (e) => {
        setCommentData(e.target.value);
        setFocusComment(true);
    };
    const HandleSaveComment = () => {
        props.handleSaveCommentBtn(commentData);
        setCommentData('');
        setFocusComment(false);
    };
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsxs(Container$2, { style: { ...props.style }, id: props.id, children: [!props.textTotalView && (props.qtdLikes || props.qtdComments) ?
                    jsxRuntime.jsxs(infoContent, { children: [props.qtdLikes ?
                                jsxRuntime.jsxs(info, { style: { left: 0 }, children: [" ", jsxRuntime.jsx(ThumbsUpCovered, {}), " \u00A0", props.qtdLikes] })
                                : null, props.qtdComments ?
                                jsxRuntime.jsx(info, { style: { right: 0 }, children: props.qtdComments })
                                : null] })
                    : jsxRuntime.jsx(jsxRuntime.Fragment, { children: (props.textTotalView || props.qtdLikes || props.qtdComments) &&
                            jsxRuntime.jsxs(infoContentWithView, { children: [jsxRuntime.jsxs("div", { style: { display: 'flex', flexDirection: 'row', gap: '5px' }, children: [props.qtdLikes && jsxRuntime.jsxs(infoWithView, { children: [" ", jsxRuntime.jsx(ThumbsUpCovered, {}), " \u00A0", props.qtdLikes] }), props.qtdLikes && props.qtdComments && jsxRuntime.jsx("div", { children: "\u2022" }), props.qtdComments && jsxRuntime.jsxs(infoWithView, { children: [" ", props.qtdComments, " "] })] }), props.textTotalView && jsxRuntime.jsx(infoWithView, { style: { color: '#0645AD', fontWeight: 700, cursor: 'pointer' }, onClick: () => props.handleClickTextTotalViews(), children: props.textTotalView })] }) }), jsxRuntime.jsxs(buttonsContent, { children: [props.isLiked ?
                            jsxRuntime.jsx(buttons, { children: jsxRuntime.jsx(Button$3, { startIcon: jsxRuntime.jsx(ThumbsUpIcon, { fill: 'currentColor' }), label: props.textDeslike, variant: 'link', handleClick: props.handleLikeClick }) })
                            :
                                jsxRuntime.jsx(buttons, { children: jsxRuntime.jsx(Button$3, { startIcon: jsxRuntime.jsx(ThumbsUpIcon, { fill: 'currentColor' }), label: props.textLikes, variant: 'link', handleClick: props.handleLikeClick }) }), isVisibleComments &&
                            jsxRuntime.jsxs(buttons, { onClick: OnCommentsClick, style: { color: openComments && FRSTTheme['colors'].linkPressed }, children: [jsxRuntime.jsx(TalkIcon, { fill: 'currentColor' }), " ", props.textComments] }), jsxRuntime.jsxs(buttons, { onClick: OnReviewClick, style: { color: openReview && FRSTTheme['colors'].linkPressed }, children: [jsxRuntime.jsx(StarOutlined, { fill: 'currentColor' }), " ", props.textAvaluation] })] }), openReview &&
                    jsxRuntime.jsxs(reviewContainer, { children: [props.textAvaluationTitle, jsxRuntime.jsxs(reviewContent, { children: [props.isChallengeReview &&
                                        jsxRuntime.jsxs("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }, children: [jsxRuntime.jsx(Rating, { isVisibleNumberRating: false, orientation: 'horizontal', qtdStars: 5, sizeStars: 20, marginStars: '3.5px', disabled: props.isDisabledAvaluation, rating: props.ratingImpacto, handleRating: props?.handleImpactoChange }), jsxRuntime.jsx("span", { children: props.textImpacto })] }), props.isChallengeReview &&
                                        jsxRuntime.jsxs("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginLeft: 24 }, children: [jsxRuntime.jsx(Rating, { isVisibleNumberRating: false, orientation: 'horizontal', qtdStars: 5, sizeStars: 20, marginStars: '3.5px', disabled: props.isDisabledAvaluation, rating: props.ratingRelevancia, handleRating: props?.handleRelevanciaChange }), jsxRuntime.jsx("span", { children: props.textRelevancia })] }), props.isPostReview &&
                                        jsxRuntime.jsx("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }, children: jsxRuntime.jsx(Rating, { isVisibleNumberRating: false, orientation: 'horizontal', qtdStars: 5, sizeStars: 20, marginStars: '3.5px', disabled: props.isDisabledAvaluation, rating: props.ratingPostReview, handleRating: props?.handlePostReviewChange }) })] })] }), openComments &&
                    jsxRuntime.jsxs(commentsContainer, { children: [jsxRuntime.jsxs(inputComment, { children: [jsxRuntime.jsx(Avatar, { size: '40px', src: props.userAvatar }), jsxRuntime.jsx(InputComment, { styles: { width: '100%', marginLeft: 8 }, IDInput: 'userComment', showCharacterCounter: false, className: 'userComment', hasEmoji: true, emojiWindowlanguage: 'pt', placeholder: props.userCommentPlaceholder ? props.userCommentPlaceholder : '', onChange: OnChangeComment, value: commentData }), jsxRuntime.jsx(submitButton, { style: { display: focusComment ? 'block' : 'none' }, children: jsxRuntime.jsx(Button$3, { variant: 'primary', label: props.textSaveCommentBtn, handleClick: HandleSaveComment }) })] }), props.isChallengeReview ?
                                stateLatestComment ?
                                    jsxRuntime.jsxs(commentList, { children: [props.textLatestComment, jsxRuntime.jsxs(comment, { children: [jsxRuntime.jsx(Avatar, { size: '40px', src: stateLatestComment.avatar }), jsxRuntime.jsx(CommentaryBox, { styles: { width: '100%', marginLeft: 8 }, name: stateLatestComment.name, date: stateLatestComment.date, position: stateLatestComment.position, value: stateLatestComment.value, className: stateLatestComment.className, onChange: stateLatestComment.onChange, actionLike: stateLatestComment.actionLike, textLiked: stateLatestComment.textLike, textUnliked: stateLatestComment.textDeslike, isLiked: stateLatestComment.isLiked, totalLikes: stateLatestComment.totalLikes, hasDropdown: stateLatestComment.hasDropdown, isAuthor: stateLatestComment.isAuthor, isMe: stateLatestComment.isMe, actionDeleteComment: stateLatestComment.actionDeleteComment, actionEditComment: stateLatestComment.actionEditComment, actionAnswer: stateLatestComment.actionAnswer, actionMakePrivate: stateLatestComment.actionMakePrivate, actionUpdateValue: stateLatestComment.actionUpdateValue, detectLinks: stateLatestComment.detectLinks, hasAnswer: stateLatestComment.hasAnswer, isPrivateAuthor: stateLatestComment.isPrivateAuthor, isPrivateMe: stateLatestComment.isPrivateMe, idTextComment: stateLatestComment.idTextComment, textAnswer: stateLatestComment.textAnswer, textCancelButton: stateLatestComment.textCancelButton, textDeleteComment: stateLatestComment.textDeleteComment, textEditComment: stateLatestComment.textEditComment, textEdited: stateLatestComment.textEdited, textMakePrivate: stateLatestComment.textMakePrivate, textMakePublic: stateLatestComment.textMakePublic, textPrivateComment: stateLatestComment.textPrivateComment, textSaveButton: stateLatestComment.textSaveButton, textSaveButtonMobile: stateLatestComment.textSaveButtonMobile, textYou: stateLatestComment.textYou, wasEdited: stateLatestComment.wasEdited })] })] })
                                    : null
                                :
                                    props.commentList ?
                                        jsxRuntime.jsxs(commentList, { children: [jsxRuntime.jsxs(comment, { children: [jsxRuntime.jsx(Avatar, { size: '40px', src: props.commentList[0].avatar }), jsxRuntime.jsx(CommentaryBox, { styles: { width: '100%' }, name: props.commentList[0].name, date: props.commentList[0].date, position: props.commentList[0].position, value: props.commentList[0].value, className: props.commentList[0].className, onChange: props.commentList[0].onChange, actionLike: props.commentList[0].actionLike, textLiked: props.commentList[0].textLike, textUnliked: props.commentList[0].textDeslike, isLiked: props.commentList[0].isLiked, totalLikes: props.commentList[0].totalLikes, hasDropdown: props.commentList[0].hasDropdown, isAuthor: props.commentList[0].isAuthor, isMe: props.commentList[0].isMe, actionDeleteComment: props.commentList[0].actionDeleteComment, actionEditComment: props.commentList[0].actionEditComment, actionAnswer: props.commentList[0].actionAnswer, actionMakePrivate: props.commentList[0].actionMakePrivate, actionUpdateValue: props.commentList[0].actionUpdateValue, detectLinks: props.commentList[0].detectLinks, hasAnswer: props.commentList[0].hasAnswer, isPrivateAuthor: props.commentList[0].isPrivateAuthor, isPrivateMe: props.commentList[0].isPrivateMe, idTextComment: props.commentList[0].idTextComment, textAnswer: props.commentList[0].textAnswer, textCancelButton: props.commentList[0].textCancelButton, textDeleteComment: props.commentList[0].textDeleteComment, textEditComment: props.commentList[0].textEditComment, textEdited: props.commentList[0].textEdited, textMakePrivate: props.commentList[0].textMakePrivate, textMakePublic: props.commentList[0].textMakePublic, textPrivateComment: props.commentList[0].textPrivateComment, textSaveButton: props.commentList[0].textSaveButton, textSaveButtonMobile: props.commentList[0].textSaveButtonMobile, textYou: props.commentList[0].textYou, wasEdited: props.commentList[0].wasEdited })] }), loadCommentsText &&
                                                    jsxRuntime.jsx("span", { style: { color: FRSTTheme['colors'].linkOnfocus, marginTop: 12, cursor: 'pointer' }, onClick: OnLoadCommentsClick, children: props.textLoadMoreComments }), showMoreComments &&
                                                    jsxRuntime.jsxs(comment, { children: [jsxRuntime.jsx(Avatar, { size: '40px', src: props.commentList[1].avatar }), jsxRuntime.jsx(CommentaryBox, { styles: { width: '100%' }, name: props.commentList[1].name, date: props.commentList[1].date, position: props.commentList[1].position, value: props.commentList[1].value, className: props.commentList[1].className, onChange: props.commentList[1].onChange, actionLike: props.commentList[1].actionLike, textLiked: props.commentList[1].textLike, textUnliked: props.commentList[1].textDeslike, isLiked: props.commentList[1].isLiked, totalLikes: props.commentList[1].totalLikes, hasDropdown: props.commentList[1].hasDropdown, isAuthor: props.commentList[1].isAuthor, isMe: props.commentList[1].isMe, actionDeleteComment: props.commentList[1].actionDeleteComment, actionEditComment: props.commentList[1].actionEditComment, actionAnswer: props.commentList[1].actionAnswer, actionMakePrivate: props.commentList[1].actionMakePrivate, actionUpdateValue: props.commentList[1].actionUpdateValue, detectLinks: props.commentList[1].detectLinks, hasAnswer: props.commentList[1].hasAnswer, isPrivateAuthor: props.commentList[1].isPrivateAuthor, isPrivateMe: props.commentList[1].isPrivateMe, idTextComment: props.commentList[1].idTextComment, textAnswer: props.commentList[1].textAnswer, textCancelButton: props.commentList[1].textCancelButton, textDeleteComment: props.commentList[1].textDeleteComment, textEditComment: props.commentList[1].textEditComment, textEdited: props.commentList[1].textEdited, textMakePrivate: props.commentList[1].textMakePrivate, textMakePublic: props.commentList[1].textMakePublic, textPrivateComment: props.commentList[1].textPrivateComment, textSaveButton: props.commentList[1].textSaveButton, textSaveButtonMobile: props.commentList[1].textSaveButtonMobile, textYou: props.commentList[1].textYou, wasEdited: props.commentList[1].wasEdited })] })] })
                                        : null] })] }) }));
}

function BannerProblemFeed(props) {
    const [selectedStep, setSelectedStep] = React.useState(props.stepActive);
    const learningIcon = 'https://i.gyazo.com/4e0807b581bf9780f07a27516a809a21.png';
    const achievementIcon = 'https://i.gyazo.com/9b192733f4947946a3f47080ae12727f.png';
    const [stateLatestComment, setStateLatestComment] = React.useState(props.latestComment);
    React.useEffect(() => {
        setStateLatestComment(props.latestComment);
    }, [props.latestComment]);
    const CustomSlider = styles$1.withStyles({
        root: {
            color: "#FF4D0D",
            height: 3,
            padding: "13px 0",
        },
        track: {
            color: "#FF4D0D",
        },
        disabled: {
            color: '#FF4D0D',
        }
    })(Slider__default["default"]);
    const marks = [
        {
            value: 1,
            label: '1'
        },
        {
            value: 2,
            label: '2'
        },
        {
            value: 3,
            label: '3'
        },
        {
            value: 4,
            label: '4'
        },
        {
            value: 5,
            label: '5'
        }
    ];
    const RenderSteps = () => {
        return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: selectedStep === 1 ?
                jsxRuntime.jsxs(stepsContainer, { children: [jsxRuntime.jsx(stepsTitle, { children: props.step1Title }), jsxRuntime.jsxs(stepsLabel, { children: [props.textIndicator, ":"] }), jsxRuntime.jsx(stepsValueText, { children: props.indicatorValue }), jsxRuntime.jsxs(stepsLabel, { children: [props.textIndicatorSituation, ":"] }), jsxRuntime.jsx(stepsValueText, { children: props.indicatorSituationValue }), jsxRuntime.jsxs(stepsLabel, { children: [props.textIndicatorObjective, ":"] }), jsxRuntime.jsx(stepsValueText, { children: props.indicatorObjectiveValue }), jsxRuntime.jsxs(stepsLabel, { children: [props.textResultsFuture, ":"] }), jsxRuntime.jsx(stepsValueText, { children: props.resultsFutureValue })] })
                : selectedStep === 2 ?
                    jsxRuntime.jsxs(stepsContainer, { children: [jsxRuntime.jsx(stepsTitle, { children: props.step2Title }), jsxRuntime.jsxs(stepsLabel, { style: { color: FRSTTheme['colors'].primary1 }, children: [props.textHypotheses, ":"] }), jsxRuntime.jsx(stepsValueText, { children: props.hypothesesValue }), jsxRuntime.jsxs(stepsLabel, { style: { color: FRSTTheme['colors'].primary1 }, children: [" ", props.language === 'en-US' ? 'Action 1' : 'Ação 1', " "] }), jsxRuntime.jsxs(stepsLabel, { children: [props.textResponsableAction, ":"] }), jsxRuntime.jsx(stepsValueText, { children: props.ResponsableActionValue }), jsxRuntime.jsxs(stepsLabel, { children: [props.textDate, ":"] }), jsxRuntime.jsx(stepsValueText, { children: props.dateValue }), jsxRuntime.jsxs(stepsLabel, { children: [props.textWhatToDo, ":"] }), jsxRuntime.jsx(stepsValueText, { children: props.whatToDoValue }), jsxRuntime.jsxs(stepsLabel, { children: [props.textSuccessAction, ":"] }), jsxRuntime.jsx(stepsValueText, { children: props.successActionValue })] })
                    : selectedStep === 3 ?
                        jsxRuntime.jsxs(stepsContainer, { children: [jsxRuntime.jsx(stepsTitle, { children: props.step3Title }), jsxRuntime.jsxs(stepsLabel, { style: { color: FRSTTheme['colors'].primary1 }, children: [props.textTestMade, ":"] }), jsxRuntime.jsx(stepsValueText, { children: props.testMadeValue }), jsxRuntime.jsxs(stepsLabel, { children: [props.textSuccessTest, ":"] }), jsxRuntime.jsx("div", { style: { width: '100%', marginBottom: 32, marginTop: 12 }, children: jsxRuntime.jsx(CustomSlider, { value: props.successTestValue, min: 1, max: 5, marks: marks, disabled: true }) })] })
                        : selectedStep === 4 ?
                            jsxRuntime.jsxs(stepsContainer, { children: [jsxRuntime.jsx(stepsTitle, { children: props.step4Title }), props.textMainAchievement ?
                                        jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs(stepsLabel, { style: { color: FRSTTheme['colors'].primary1 }, children: [props.textMainAchievement, ":"] }), jsxRuntime.jsx(stepsValueText, { children: props.mainAchievementValue })] })
                                        : props.textMainLearning ?
                                            jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs(stepsLabel, { style: { color: FRSTTheme['colors'].primary1 }, children: [props.textMainLearning, ":"] }), jsxRuntime.jsx(stepsValueText, { children: props.mainLearningValue })] })
                                            : null] })
                            : selectedStep === 5 ?
                                jsxRuntime.jsxs(stepsContainer, { children: [jsxRuntime.jsx(stepsTitle, { children: props.step5Title }), jsxRuntime.jsxs(stepsLabel, { style: { color: FRSTTheme['colors'].primary1 }, children: [props.textNextSteps, ":"] }), jsxRuntime.jsx(stepsValueText, { children: props.nextStepsValue })] })
                                : null }));
    };
    return (jsxRuntime.jsxs(styled.ThemeProvider, { theme: FRSTTheme, children: [props.mainAchievementValue || props.mainLearningValue ?
                jsxRuntime.jsxs(achievementHeader, { style: { backgroundColor: props.isSuccessCase ? '#444' : '#4B2961' }, children: [jsxRuntime.jsx("img", { src: props.mainAchievementValue ? achievementIcon : learningIcon, width: '56', height: '56' }), jsxRuntime.jsx("span", { style: { marginLeft: 16, wordBreak: 'break-word', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }, children: props.mainAchievementValue ? props.mainAchievementValue : props.mainLearningValue })] })
                : null, jsxRuntime.jsxs(bannerContainer, { style: { borderTopLeftRadius: props.mainAchievementValue || props.mainLearningValue ? 0 : 8, borderTopRightRadius: props.mainAchievementValue || props.mainLearningValue ? 0 : 8 }, children: [props.topHeaderTagText &&
                        jsxRuntime.jsx(topHeaderTag, { background: props.topHeaderTagBgColor, color: props.topHeaderTagColor, children: props.topHeaderTagText }), jsxRuntime.jsxs(headerContent, { children: [jsxRuntime.jsx(Avatar, { size: "54px", src: props.isSuccessCase ? 'https://i.gyazo.com/e9608cb76d36242de07661bee9da60dd.png' : props.userAvatar }), jsxRuntime.jsxs(userInfo, { children: [jsxRuntime.jsx("span", { style: { fontWeight: 600, fontSize: 20 }, children: props.isSuccessCase ?
                                            (props.language === 'pt-BR' ? 'Case de sucesso'
                                                : props.language === 'en-US' ? 'Success case'
                                                    : props.language === 'es' ? 'Caso de exito'
                                                        : props.language === 'pt-PT' ? 'Case de sucesso'
                                                            : null)
                                            : props.userName }), jsxRuntime.jsx("span", { style: { fontWeight: 400, fontSize: 16 }, children: props.userPosition }), jsxRuntime.jsx("span", { style: { fontWeight: 400, fontSize: 16 }, children: props.userCompany })] })] }), jsxRuntime.jsxs(problemTitle, { children: [" ", props.problemTitle, " "] }), jsxRuntime.jsx(tagContent, { children: props.problemTags?.map((item, index) => (item &&
                            jsxRuntime.jsx(Tag, { style: { color: '#000 !important' }, title: item, color: "#E4E1FF", selected: false, inverted: false }, index))) }), jsxRuntime.jsxs(lastUpdatedText, { children: [jsxRuntime.jsxs("span", { style: { fontWeight: 700 }, children: [props.lastUpdated, ":"] }), jsxRuntime.jsxs("span", { children: ["\u00A0", props.lastUpdatedStep] })] }), jsxRuntime.jsx("div", { style: { width: '100%', marginTop: 16, borderTop: `1px solid ${FRSTTheme['colors'].borderPrimary}` }, children: jsxRuntime.jsx(MissionSteps, { stepProblem: props.stepProblem, stepActive: props.stepActive, onSelected: (step) => {
                                props.onSelectedStep(step);
                                setSelectedStep(step);
                            }, idioma: props.language }) }), jsxRuntime.jsx(RenderSteps, {}), jsxRuntime.jsx(Button$3, { label: props.textButton, variant: 'expandedPrimary', handleClick: props.onClickButton, startIcon: jsxRuntime.jsx(AddIcon, { fill: FRSTTheme['colors'].shadeWhite }) })] }), jsxRuntime.jsx(FeedInteraction, { isChallengeReview: true, id: props.id, isLiked: props.isLiked, qtdComments: props.qtdComments, qtdLikes: props.qtdLikes, textAvaluation: props.textAvaluation, textAvaluationTitle: props.textAvaluationTitle, isDisabledAvaluation: props.isDisabledAvaluation, textComments: props.textComments, textDeslike: props.textDeslike, textLikes: props.textLikes, latestComment: stateLatestComment, textLatestComment: props.textLatestComment, textImpacto: props.textImpacto, ratingImpacto: props.ratingImpacto, textRelevancia: props.textRelevancia, ratingRelevancia: props.ratingRelevancia, userCommentPlaceholder: props.userCommentPlaceholder, onCommentChange: props.onCommentChange, handleLikeClick: props.handleLikeClick, handleImpactoChange: props.handleImpactoChange, handleRelevanciaChange: props.handleRelevanciaChange, textSaveCommentBtn: props.textSaveCommentBtn, handleSaveCommentBtn: props.handleSaveCommentBtn, userAvatar: props.avatar, textTotalView: props.textTotalView, handleClickTextTotalViews: props.handleClickTextTotalViews })] }));
}

const ButtonSessionFilters = styled__default["default"].button `
    max-width: 180px;
    height: 72px;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 19px;
    background-color: ${(props) => props.active ? props.theme.colors.primary1 : props.theme.colors.shadeWhite};
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey5};
    border-radius: 8px;
    font-family: PT Sans;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    cursor: pointer;
    color: ${(props) => props.active ? props.theme.colors.shadeWhite : props.theme.colors.neutralsGrey1};

`;
const ContainerFilter = styled__default["default"].div `
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: fit-content;

    color: ${({ theme }) => theme.colors.neutralsGrey1};
    ${({ theme }) => theme.fonts.textMessageComponentsBodyRegular};
    
`;
const ButtonList = styled__default["default"].div `
    display:flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    margin-top: 8px;
    margin-bottom: 24px;
`;
const SelectedItens = styled__default["default"].div `
    display:flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    width: 100%;


    ${({ theme }) => theme.fonts.textMessageComponentsBodyBold};

    margin-top: 8px;
    margin-bottom: 24px;

    & :nth-child(1) {
      z-index: 1;
    }

    & :nth-child(3) {
        z-index: 1;
      }

    & :nth-child(4) {
        background: #FFF;
    }
`;
const LabelSelect = styled__default["default"].div `
    padding-left: 20px;
    margin-right: -115px;

    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    color: #9C9C9C;

`;

const MenuProps = {
    PaperProps: {
        style: {
            overflow: 'auto',
            maxHeight: 255,
            borderRadius: 8,
        },
    },
};
function SessionFilters(props) {
    const [selectedFilter, setSelectedFilter] = React.useState(props.selectedFilter);
    const [selectFilterContent, setSelectFilterContent] = React.useState([]);
    const [isVisibleSelect, setIsVisibleSelect] = React.useState(false);
    const [isVisiblePlaceholderSelect, setIsVisiblePlaceholderSelect] = React.useState(true);
    React.useEffect(() => {
        setSelectedFilter(props.selectedFilter);
    }, [props.selectedFilter]);
    React.useEffect(() => {
        setIsVisiblePlaceholderSelect(props.isVisiblePlaceholderSelect);
    }, [props.isVisiblePlaceholderSelect]);
    React.useEffect(() => {
        setIsVisibleSelect(props.isVisibleSelect);
    }, [props.isVisibleSelect]);
    const selectItem = (item) => {
        let index = selectFilterContent.indexOf(item.title);
        let newArray = [].concat(selectFilterContent);
        if (selectFilterContent.includes(item.title)) {
            newArray.splice(index, 1);
            setSelectFilterContent(currentValue => newArray);
        }
        else {
            newArray.push(item.title);
            setSelectFilterContent(currentValue => newArray);
        }
    };
    function FilterButton(props) {
        return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: props.variant === 'myBusiness' ?
                jsxRuntime.jsxs(ButtonSessionFilters, { active: selectedFilter === props.id, onClick: props.handleClick, children: [jsxRuntime.jsx(Handshake, {}), props.label] })
                : props.variant === 'mission' ?
                    jsxRuntime.jsxs(ButtonSessionFilters, { active: selectedFilter === props.id, onClick: props.handleClick, children: [jsxRuntime.jsx(Mission, {}), props.label] })
                    : props.variant === 'trail' ?
                        jsxRuntime.jsxs(ButtonSessionFilters, { active: selectedFilter === props.id, onClick: props.handleClick, children: [jsxRuntime.jsx(Lamp, {}), props.label] })
                        : null }));
    }
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsxs(ContainerFilter, { style: { ...props.style }, children: [props.labelFilters, jsxRuntime.jsx(ButtonList, { children: props.filterList.map((item, index) => {
                        return (jsxRuntime.jsx("div", { style: { marginRight: 24 }, children: FilterButton({ variant: item.variant, label: item.label, id: item.id, handleClick: item.handleClick }) }, index));
                    }) }), props.selectedFilterContentList ?
                    jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [isVisibleSelect && jsxRuntime.jsx(jsxRuntime.Fragment, { children: props.labelSelectItens }), jsxRuntime.jsxs(SelectedItens, { children: [isVisibleSelect ?
                                        jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [isVisiblePlaceholderSelect && jsxRuntime.jsx(LabelSelect, { isVisible: true, children: props.textLabelSelect }), jsxRuntime.jsx(material.Select, { multiple: true, labelId: 'selectedFilterInfoLabel', id: 'selectedFilterInfo', value: selectFilterContent, 
                                                    // renderValue={(selected) =>`${selected.length} ${selected.length > 1 ? props.textMultipleSelected : props.textSingleSelected}`}
                                                    renderValue: () => props.textSelectedItems, style: { height: 48, width: 384 }, MenuProps: MenuProps, onChange: props.handleSelectedFilterData(selectFilterContent), children: props.selectedFilterContentList.map((item) => (jsxRuntime.jsxs(material.MenuItem, { onClick: () => selectItem(item), defaultValue: item.title, style: { borderBottom: `1px solid ${FRSTTheme['colors'].neutralsGrey7}` }, children: [jsxRuntime.jsx(material.Checkbox, { checked: selectFilterContent.indexOf(item.title) > -1, sx: {
                                                                    color: FRSTTheme['colors'].neutralsGrey5,
                                                                    '&.Mui-checked': {
                                                                        color: FRSTTheme['colors'].primary1,
                                                                    },
                                                                } }), jsxRuntime.jsx(material.ListItemText, { style: { color: FRSTTheme['colors'].neutralsGrey1, fontSize: 16, fontWeight: 400 }, primary: item.title })] }, item.id))) })] })
                                        :
                                            jsxRuntime.jsx("div", {}), jsxRuntime.jsxs("div", { style: { color: FRSTTheme['colors'].linkOnfocus, marginRight: 24, cursor: 'pointer', display: 'flex', justifyContent: 'flex-end' }, 
                                        // onClick={props.handleDeleteFilter}
                                        onClick: () => setSelectFilterContent(currentValue => []), children: [jsxRuntime.jsx(Trash, { fill: FRSTTheme['colors'].linkOnfocus }), "\u00A0", props.textDeleteFilter] })] })] })
                    : null] }) }));
}

const Container$1 = styled__default["default"].div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    border-radius: 8px;
    width: 282px;
    height: 336px;
    background: url('https://i.gyazo.com/bc4a52062b79d16e1840ed274b436684.png');
    
`;
const mask = styled__default["default"].div `
    background: linear-gradient(180deg, rgba(17, 17, 17, 0.6) 0%, #111111 100%);
    width: 100%;
    height: 100%;
    padding: 48px 32px;
    border-radius: 8px;
`;
const SrgLogo = styled__default["default"].div `
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Button$1 = styled__default["default"].div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
`;

function SmallSRGBanner(props) {
    return (jsxRuntime.jsx(Container$1, { style: { ...props.style }, onClick: props.handleClick, children: jsxRuntime.jsxs(mask, { children: [jsxRuntime.jsx(SrgLogo, { children: jsxRuntime.jsx("img", { src: 'https://i.gyazo.com/eb084ab35cbd9ad52b24148afba59950.png', alt: 'SRG Logo' }) }), jsxRuntime.jsx(Button$1, { children: jsxRuntime.jsx(Button$3, { variant: 'primary', label: props.textButton, startIcon: jsxRuntime.jsx(AddIcon, { fill: '#FFF' }) }) })] }) }));
}

const Wrapper = styled__default["default"].div `
  opacity: ${({ isCompletePost }) => isCompletePost ? '0' : '1'};
  transition: opacity 0.5s ease-in-out;
`;
const postContainer = styled__default["default"].div `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    padding-top: 24px;
    padding-bottom: 24px;
    
    &>img{
        max-width: 100%;
        max-height: 100%;
    }

`;
const postHeader = styled__default["default"].div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;
const postTitle = styled__default["default"].span `
    font-family: 'Work Sans';
    font-weight: 600;
    font-size: 24px;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary1};
    margin-top: 32px;
    padding-left: 22px;
    padding-right: 22px;
`;
const postDescription = styled__default["default"].span `
    font-family: 'PT Sans';
    font-weight: 400;
    font-size: 16px;
    text-align: left;
    color: ${({ theme }) => theme.colors.neutralsGrey1};
    margin-top: 32px;
    width: 100% !important;
`;
const postImage = styled__default["default"].div `
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 32px;
    width: 100%;
    object-fit: cover;

    & img{
        max-width: 100%;
        width: 100%;
        max-height: 100%;
    }
`;
const postVideo = styled__default["default"].div `
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 32px;
    width: 100%;
`;
const buttonCheck = styled__default["default"].span `
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 110%;
    /* identical to box height, or 18px */

    display: flex;
    align-items: center;

    /* link/onfocus */

    color: #0645AD;
`;
const TooltipText = styled__default["default"].div `
  color: #757575;
  text-align: center;
  line-height: 44px;
  border-radius: 3px;
  cursor: pointer;
`;
const TooltipBox = styled__default["default"].div `
  position: absolute;
  top: calc(100% + 10px);
  left: -10px;
  visibility: hidden;
  
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #757575;

  background-color: #FFF;
  width: 150px;
  padding: 5px 5px;
  border-radius: 4px;
  border: 1px solid #BDBDBD;
  -webkit-box-shadow: 10px 35px 40px -8px rgba(0,0,0,0.31);
  -moz-box-shadow: 10px 35px 40px -8px rgba(0,0,0,0.31);
  box-shadow: 10px 35px 40px -8px rgba(0,0,0,0.31);

  &:after {
    content: "";
    width: 0;
    height: 0;
    left: 40px;
    top: -7px;
    position: absolute;

    border: 7px solid #fff;
    transform: rotate(135deg);
    transition: border 0.3s ease-in-out;
  }

  &:before {
    content: "";
    width: 0;
    height: 0;
    left: 40px;
    top: -8px;
    position: absolute;

    border: 7px solid #BDBDBD;
    transform: rotate(135deg);
  }
  
`;
const TooltipCard = styled__default["default"].div `
  position: relative;
  & ${TooltipText}:hover + ${TooltipBox} {
    visibility: visible;
    color: #757575;
    background-color: #FFFFFF;
    width: 230px;
    padding: 8px 8px;


    &:after {
        content: "";
        width: 0;
        height: 0;
        left: 40px;
        top: -7px;
        position: absolute;
    
        border-color: transparent transparent #FFF #FFF;
        transform: rotate(135deg);
      }
    
      &:before {
        content: "";
        width: 0;
        height: 0;
        left: 40px;
        top: -8px;
        position: absolute;
    
        border-color: transparent transparent #BDBDBD #BDBDBD;
        transform: rotate(135deg);
      }
    
  }
`;

function PostFeed(props) {
    const FRSTAvatar = 'https://api-deimos-cdn.frstfalconi.cloud/logo_first.png';
    const [isVisibleComments, setIsVisibleComments] = React.useState(props.isVisibleComments);
    const [actionArea, setActionArea] = React.useState(false);
    React.useEffect(() => {
        setIsVisibleComments(props.isVisibleComments);
    }, [props.isVisibleComments]);
    return (jsxRuntime.jsx(Wrapper, { isCompletePost: props.isCompletePost, children: jsxRuntime.jsxs(styled.ThemeProvider, { theme: FRSTTheme, children: [jsxRuntime.jsxs(postContainer, { style: { ...props.style }, children: [jsxRuntime.jsxs(postHeader, { style: { width: '100%', justifyContent: 'space-between' }, children: [jsxRuntime.jsx("div", { style: { width: props?.fixPostButton && props?.fixPostButton?.isVisibleButton ? '105px' : '0px' } }), jsxRuntime.jsxs("div", { style: { display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }, children: [jsxRuntime.jsxs("div", { style: { marginRight: 16, paddingTop: '18px' }, children: [" ", jsxRuntime.jsx(Avatar, { src: FRSTAvatar, size: '40px' }), " "] }), jsxRuntime.jsx("span", { style: { fontFamily: 'Work Sans', fontWeight: 600, fontSize: 20, color: FRSTTheme['colors'].neutralsGrey1, paddingTop: '18px' }, children: " FRST Falconi " })] }), props?.fixPostButton && props?.fixPostButton?.isVisibleButton ?
                                    jsxRuntime.jsxs(TooltipCard, { children: [jsxRuntime.jsx(TooltipText, { children: jsxRuntime.jsxs("div", { onClick: () => props?.fixPostButton?.actionClick(), onMouseOver: () => setActionArea(true), onMouseOut: () => setActionArea(false), style: {
                                                        width: '105px',
                                                        fontSize: '18px',
                                                        color: '#0645ad',
                                                        cursor: 'pointer',
                                                        justifySelf: 'end',
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                        paddingRight: '22px',
                                                        marginTop: '-30px'
                                                    }, children: [jsxRuntime.jsx(IconPin, { fill: actionArea ? '#0645ad' : '#ff4d0d' }), jsxRuntime.jsx(buttonCheck, { children: props.fixPostButton?.textFixed })] }) }), jsxRuntime.jsx(TooltipBox, { children: jsxRuntime.jsx("p", { children: props.fixPostButton?.textTooltip }) })] })
                                    : jsxRuntime.jsx("div", {})] }), jsxRuntime.jsxs(postTitle, { children: [" ", props.title, " "] }), props.postImage ?
                            jsxRuntime.jsx(postImage, { children: jsxRuntime.jsx("img", { src: props.postImage }) })
                            : null, jsxRuntime.jsx(postDescription, { style: { paddingLeft: '24px', paddingRight: '24px', width: '100%' }, children: jsxRuntime.jsx(Markdown__default["default"], { children: props.description }) }), props.postVideoId ?
                            jsxRuntime.jsxs(postVideo, { children: [props.videoSource == 'youtube' &&
                                        jsxRuntime.jsx("iframe", { src: `https://www.youtube.com/embed/${props.postVideoId}`, frameBorder: "0", allow: "autoplay; fullscreen; picture-in-picture", width: props.videoWidth ? props.videoWidth : '100%', height: props.videoHeight ? props.videoHeight : 430 }), props.videoSource == 'vimeo' &&
                                        jsxRuntime.jsx("iframe", { src: `https://player.vimeo.com/video/${props.postVideoId}?autoplay=0`, width: props.videoWidth ? props.videoWidth : '100%', height: props.videoHeight ? props.videoHeight : 430, allow: "autoplay; fullscreen" })] })
                            : null, props.handlePostButtonClick ?
                            jsxRuntime.jsx("div", { style: { marginTop: 32, width: '100%', paddingLeft: '24px', paddingRight: '24px' }, children: jsxRuntime.jsx(Button$3, { variant: 'expandedPrimary', label: props.textPostButton, handleClick: props.handlePostButtonClick }) })
                            : null] }), jsxRuntime.jsx(FeedInteraction, { hideComments: isVisibleComments, isPostReview: true, userAvatar: props.userAvatar, id: props.postId, isLiked: props.isPostLiked, qtdComments: props.qtdComments, qtdLikes: props.qtdLikes, textAvaluation: props.textAvaluation, textAvaluationTitle: props.textAvaluationTitle, textComments: props.textComments, textDeslike: props.textDeslike, textLikes: props.textLikes, commentList: props.commentList, userCommentPlaceholder: props.userCommentPlaceholder, textLoadMoreComments: props.textLoadMoreComments, textSaveCommentBtn: props.textSaveCommentBtn, ratingPostReview: props.ratingPostReview, handleLikeClick: props.handleLikeClick, handlePostReviewChange: props.handlePostReviewChange, handleSaveCommentBtn: props.handleSaveCommentBtn, onCommentChange: props.onCommentChange, isDisabledAvaluation: props.isDisabledAvaluation })] }) }));
}
function IconPin({ fill }) {
    return jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx("svg", { width: "18", height: "13", viewBox: "0 0 18 13", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M17 1L6 12L1 7", stroke: "#0645AD", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) });
}

// <{image, notstarted}>
const Container = styled__default["default"](material.Box) `
    background-color: #FFF;
    width: 488px !important;
    max-width: 80%;
    height: 488px !important;
    max-height: 80%;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    position: relative;

    border-radius: 16px;

    font-family: 'Work Sans';
    overflow: hidden;
`;
const Typography = styled__default["default"].div `
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;

    /* neutrals/neutral_1 */

    color: ${({ theme }) => theme.colors.neutral_1};
    margin-left: 25px;
`;
const CloseButton = styled__default["default"].div `
    cursor: pointer;    
    align-self: flex-end;
    width: 20px;
    margin-top: 20px;
    margin-right: 15px;
`;
const HeaderDiv = styled__default["default"].div `
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    border-bottom: 1px solid #BDBDBD;
    padding-bottom: 24px;
`;
const ContentDiv = styled__default["default"].div `
    width: 100%;
    heigth: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;

    ::-webkit-scrollbar {
        width: 7px;
    }
    
    /* Track */
    ::-webkit-scrollbar-track {
        background: #0000;
        border-radius: 10px;
        margin: 16px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #BDBDBD; 
        border-radius: 10px;
    }
    
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #888; 
    }

`;
styled__default["default"].div `
    position: relative;
`;
const ContentScroll = styled__default["default"].div `
    width: 100%;
    heigth: fit-content;
`;
const CardItemUser = styled__default["default"].div `
    width: calc(100% + 10px);
    height: 86px;
    border-bottom: 1px solid #BDBDBD;
    padding: 16px;
    padding-left: 24px;

    display: flex;
    flex-direction: row;
`;
const UserInfoContainer = styled__default["default"].div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 16px;
`;
const NameUser$2 = styled__default["default"].div `
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 110%;
    /* or 18px */

    display: flex;
    align-items: center;

    /* neutrals/neutral_1 */

    color: #222222;
`;
const PositionUser = styled__default["default"].div `
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 110%;
    /* or 18px */

    display: flex;
    align-items: center;

    /* neutrals/neutral_1 */

    color: #222222;

`;
const OrgUser = styled__default["default"].div `
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 110%;
    /* or 18px */

    display: flex;
    align-items: center;

    /* neutrals/neutral_1 */

    color: #222222;
`;

function InteractionsModal({ textTitle, textSubtitle, listUsers, isOpen, handleClickClose, newListUsers, checkScrollEnd, trackClick, style }) {
    const scrollContainerRef = React.useRef(null);
    const handleScroll = (e) => {
        const { scrollTop, scrollHeight, clientHeight } = e.target;
        if (scrollTop + clientHeight >= scrollHeight) {
            if (checkScrollEnd)
                checkScrollEnd();
        }
    };
    React.useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll);
        }
        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);
    const [listUsersState, setListUsersState] = React.useState(listUsers);
    React.useEffect(() => {
        if (newListUsers) {
            setListUsersState((listUsersState) => [...listUsersState, ...newListUsers]);
        }
    }, [newListUsers]);
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsx(material.Modal, { open: isOpen, onClose: () => handleClickClose(), children: jsxRuntime.jsxs(Container, { style: {
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    ...style
                }, children: [jsxRuntime.jsxs(HeaderDiv, { children: [jsxRuntime.jsx("div", { style: { width: '100%', display: 'flex', justifyContent: 'flex-end' }, children: jsxRuntime.jsx(CloseButton, { onClick: () => handleClickClose(), children: jsxRuntime.jsx(CloseIcon, { width: '11' }) }) }), jsxRuntime.jsx(Typography, { children: textTitle }), jsxRuntime.jsx(Typography, { children: textSubtitle })] }), jsxRuntime.jsx(ContentDiv, { ref: scrollContainerRef, onScroll: handleScroll, onClick: trackClick ? () => trackClick() : () => { }, children: jsxRuntime.jsx(ContentScroll, { children: listUsersState && listUsersState.map((item) => {
                                return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs(CardItemUser, { children: [jsxRuntime.jsx(Avatar, { size: '50px', src: item?.avatar }), jsxRuntime.jsxs(UserInfoContainer, { children: [jsxRuntime.jsxs(NameUser$2, { children: [" ", item?.name, " "] }), jsxRuntime.jsxs(PositionUser, { children: [" ", item?.position, "  "] }), jsxRuntime.jsxs(OrgUser, { children: [" ", item?.organization, " "] })] })] }, item?.id) }));
                            }) }) })] }) }) }));
}

const containerPagination = styled__default["default"].div `
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
`;
const contentPagination = styled__default["default"].div `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding-bottom: 12px;
`;
const pageButtonList = styled__default["default"].div `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    gap: 8px;
`;
const buttonPage = styled__default["default"].div `
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 40px;
    height: 40px;

    padding: 12px;
    border-radius: 6px;
    cursor: pointer;

    user-select: none;
    font-family: 'PT Sans';
    font-size: 16px;
    font-weight: 700;
    color: ${(props) => props.selected ? props.theme.colors.shadeWhite : props.theme.colors.neutralsGrey1};
    background-color: ${(props) => props.selected ? props.theme.colors.primary1 : props.theme.colors.neutralsGrey6};
    
    ${(props) => !props.disabled && styled.css `
        &:hover{
            color: ${({ theme }) => theme.colors.shadeWhite};
            background-color: ${({ theme }) => theme.colors.primary3};
        }
    `};

    ${(props) => props.disabled && styled.css `
        color: ${({ theme }) => theme.colors.linkDisabled};
        cursor: not-allowed
    `};
    
`;

function Pagination(props) {
    const [activePage, setActivePage] = React.useState(0);
    const [TotalRegistry, setTotalRegistry] = React.useState(props.totalRegistry);
    const [totalPages, setTotalPages] = React.useState(Math.ceil(props.totalRegistry / props.registryPerPage));
    const [paginationElements, setPaginationElements] = React.useState([]);
    const [IsLoading, setIsLoading] = React.useState(props.isLoading);
    const [Refresh, setRefresh] = React.useState(0);
    const handleSwitchPage = (page) => {
        if (page < 0) {
            setActivePage(0);
            props.onLoadPage(0);
        }
        else if (page > totalPages - 1) {
            setActivePage(totalPages - 1);
            if (page === 0) {
                props.onLoadPage(totalPages - 1);
            }
        }
        else {
            setActivePage(page);
            props.onLoadPage(page);
        }
    };
    React.useEffect(() => {
        setIsLoading(props.isLoading);
    }, [props.isLoading]);
    React.useEffect(() => {
        if (props.totalRegistry === 0) {
            setActivePage(0);
        }
        setTotalRegistry(props.totalRegistry);
        setTotalPages(Math.ceil(props.totalRegistry / props.registryPerPage));
        CalcPaginations(Math.ceil(props.totalRegistry / props.registryPerPage));
        setRefresh(Refresh + 1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.totalRegistry]);
    React.useEffect(() => {
        CalcPaginations(totalPages);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activePage]);
    const CalcPaginations = (totalPages) => {
        let elements = [];
        let start = 1;
        let finish = 0;
        let showEllipsis = true;
        if (totalPages <= props.qtdNumberShowPagination) {
            start = 1;
            finish = totalPages;
        }
        else {
            if (activePage + props.qtdNumberShowPagination + 1 > totalPages) {
                start = totalPages - props.qtdNumberShowPagination + 1;
                finish = totalPages;
                showEllipsis = false;
            }
            else {
                start = activePage + 1;
                finish = activePage + props.qtdNumberShowPagination;
            }
        }
        for (let i = start; i <= finish; i++) {
            if (showEllipsis && i === finish) {
                elements.push('...');
                elements.push(totalPages);
            }
            else {
                elements.push(i);
            }
        }
        setPaginationElements(elements);
    };
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsxs(containerPagination, { style: { ...props.style }, children: [jsxRuntime.jsx(contentPagination, { children: props.children }), !IsLoading && Refresh > 0 &&
                    jsxRuntime.jsxs(pageButtonList, { children: [props.showFirstLastButton ?
                                jsxRuntime.jsx(buttonPage, { disabled: activePage === 0, onClick: () => activePage > 0 && handleSwitchPage(0), selected: false, children: props.textFirstButton ? props.textFirstButton : 'Primeiro' })
                                : null, jsxRuntime.jsx(buttonPage, { disabled: activePage === 0, onClick: () => activePage > 0 && handleSwitchPage(activePage - 1), selected: false, children: jsxRuntime.jsx(BackArrow, { width: '16', height: '16', fill: 'currentColor' }) }), paginationElements.map((item, index) => jsxRuntime.jsx(buttonPage, { disabled: item === '...', onClick: () => item != '...' && handleSwitchPage(item - 1), selected: activePage === item - 1, children: item }, index)), jsxRuntime.jsx(buttonPage, { disabled: activePage === totalPages - 1, onClick: () => activePage < totalPages - 1 && handleSwitchPage(activePage + 1), selected: false, children: jsxRuntime.jsx(FowardArrow, { width: '18', height: '18', fill: 'currentColor' }) }), props.showFirstLastButton ?
                                jsxRuntime.jsx(buttonPage, { disabled: activePage === totalPages - 1, onClick: () => activePage < totalPages - 1 && handleSwitchPage(totalPages - 1), selected: false, children: props.textLastButton ? props.textLastButton : 'Último' })
                                : null] })] }) }));
}

const containerThumbContent = styled__default["default"].div `
  display: grid;
  grid-template-columns: 0.75fr 1fr;
  position: relative;
  min-width: 250px;
  height: auto;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.shadeWhite};
`;
const loadingImageThumb = styled__default["default"].div `
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, rgba(123, 129, 136, 0) 6.43%, rgba(123, 129, 136, 0.2) 22.38%), #d9d9d9;
  -webkit-animation-duration: 4s;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: placeholderShimmer;
  -webkit-animation-timing-function: linear;
`;
const iconsThumbAndProgress = styled__default["default"].div `
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #ee8736;
  flex-direction: column;
`;
const iconsThumb = styled__default["default"].div `
  display: flex;
  height: 100%;
  min-height: 144px;
  background-color: #ee8736;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const imageThumbContent = styled__default["default"].div `
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const loadingThumbContent = styled__default["default"].div `
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 16px 16px 16px 16px;
  gap: 4px;
`;
const loadingContent = styled__default["default"].div `
  background: linear-gradient(90deg, rgba(123, 129, 136, 0) 6.43%, rgba(123, 129, 136, 0.2) 22.38%), #d9d9d9;
  color: transparent;
  border-radius: 16px;
  width: 100%;
  height: 0.45em;

  -webkit-animation-duration: 4s;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: placeholderShimmer;
  -webkit-animation-timing-function: linear;

  &:first-child {
    width: 50%;
    margin-bottom: 8px;
  }
  &:last-child {
    width: 30%;
  }
`;
const infoThumbContent = styled__default["default"].div `
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  font-size: 16px;
  padding: 0px 0px 32px 0px;
  gap: 4px;
  font-family: 'PT Sans';
  word-wrap: break-word;
  span {
    color: ${({ theme }) => theme.colors.primary1};
    font-size: 16px;
    font-weight: 700;
    padding-top: ${(props) => (props.tagVisualized === 'notVisualized' ? '16px' : '0px')};
    padding-right: 16px;
    padding-bottom: 0px;
    padding-left: 16px;
  }
`;
const tagThumbContentContainer = styled__default["default"].div `
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: end;
`;
const tagThumbContent = styled__default["default"].div `
  height: 24px;
  background: ${(props) => (props.tagVisualized === 'vizualized' ? '#2ca92a' : '#851F41')};
  width: 91px;
  border-radius: 0px 0px 0px 8px;
  color: #ffff;
  text-align: center;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const descriptionThumbContent = styled__default["default"].div `
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.shadeBlack};
  padding: 0px 16px 0px 16px;

  overflow: hidden;
  text-overflow: ${(props) => (props.showText ? 'none' : 'ellipsis')};
  display: ${(props) => (props.showText ? 'flex' : '-webkit-box')};
  -webkit-line-clamp: ${(props) => (props.showText ? 'none' : 3)};
  -webkit-box-orient: ${(props) => (props.showText ? 'none' : 'vertical')};
`;
const viewMoreContent$1 = styled__default["default"].div `
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 0px 16px 12px 0px;
  user-select: none;
`;
const shadedThumb = styled__default["default"].div `
  position: relative;  
  height: 100%;
  :after {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: '';
    background: linear-gradient(360deg, #2d2c2c 7.86%, rgba(117, 117, 117, 0) 61.43%);
    z-index: 1;
  }
`;
const ProgressAndImg = styled__default["default"].div `
  padding: 0.3rem 0.5rem;
  z-index: 9999;
  position: absolute;
  width: 100%;
`;
const ProgressIcon = styled__default["default"].div `
  position: absolute;
  bottom: 2px;
  display: flex;
  width: 100%;
  flex-direction: column;
  z-index: 999;
  padding-bottom: 0.3rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;
const IconAndProgress = styled__default["default"].div `
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

function ThumbListContent(props) {
    const [showMore, setShowMore] = React.useState(false);
    const [tagVisualized, setTagVisualized] = React.useState(props.valueProgress);
    React.useEffect(() => {
        setTagVisualized(props.valueProgress);
    }, [props.valueProgress]);
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: props.isLoading ? (jsxRuntime.jsxs(containerThumbContent, { style: { ...props.style }, children: [jsxRuntime.jsx(loadingImageThumb, {}), jsxRuntime.jsxs(loadingThumbContent, { children: [props.title && jsxRuntime.jsx(loadingContent, { children: "a" }), jsxRuntime.jsx(loadingContent, { children: "a" }), jsxRuntime.jsx(loadingContent, { children: "a" }), jsxRuntime.jsx(loadingContent, { children: "a" }), jsxRuntime.jsx(loadingContent, { children: "a" })] })] })) : (jsxRuntime.jsxs(containerThumbContent, { style: { ...props.style }, children: [props.imageSrc ? (tagVisualized > 0 ? (jsxRuntime.jsx(shadedThumb, { children: jsxRuntime.jsx(imageThumbContent, { style: { backgroundImage: `url(${props.imageSrc})` }, onClick: props.onClickThumb, children: jsxRuntime.jsx(ProgressAndImg, { children: jsxRuntime.jsx(ProgressBar$1, { label: "", value: props.valueProgress }) }) }) })) : (jsxRuntime.jsx(imageThumbContent, { style: { backgroundImage: `url(${props.imageSrc})` }, onClick: props.onClickThumb }))) : tagVisualized > 0 ? (jsxRuntime.jsx(shadedThumb, { children: jsxRuntime.jsxs(iconsThumbAndProgress, { onClick: props.onClickThumb, children: [props.typeThumbContent === 'video' ? jsxRuntime.jsx(ThumbVideo, { width: "74", height: "74" }) : null, props.typeThumbContent === 'podcast' ? (jsxRuntime.jsx(IconAndProgress, { children: jsxRuntime.jsx(ThumbPodcast, { width: "74", height: "74" }) })) : null, props.typeThumbContent === 'question' ? jsxRuntime.jsx(ThumbTexto, { width: "74", height: "74" }) : null, props.typeThumbContent === 'textual' ? jsxRuntime.jsx(ThumbTexto, { width: "74", height: "74" }) : null, jsxRuntime.jsx(ProgressIcon, { children: jsxRuntime.jsx(ProgressBar$1, { label: "", value: props.valueProgress }) })] }) })) : (jsxRuntime.jsxs(iconsThumb, { onClick: props.onClickThumb, children: [props.typeThumbContent === 'video' ? jsxRuntime.jsx("div", { children: jsxRuntime.jsx(ThumbVideo, { width: "74", height: "74" }) }) : null, props.typeThumbContent === 'podcast' ? jsxRuntime.jsx("div", { children: jsxRuntime.jsx(ThumbPodcast, { width: "74", height: "74" }) }) : null, props.typeThumbContent === 'question' ? jsxRuntime.jsx("div", { children: jsxRuntime.jsx(ThumbTexto, { width: "74", height: "74" }) }) : null, props.typeThumbContent === 'textual' ? jsxRuntime.jsx("div", { children: jsxRuntime.jsx(ThumbTexto, { width: "74", height: "74" }) }) : null] })), jsxRuntime.jsxs(infoThumbContent, { onClick: props.onClickThumb, tagVisualized: props.tagValue, children: [props.tagValue !== 'notVisualized' ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [props.tagValue === 'vizualized' ? (jsxRuntime.jsx(tagThumbContentContainer, { children: jsxRuntime.jsx(tagThumbContent, { tagVisualized: props.tagValue, children: props.textProgressVisualized }) })) : null, props.tagValue === 'inProgress' ? (jsxRuntime.jsx(tagThumbContentContainer, { children: jsxRuntime.jsx(tagThumbContent, { tagVisualized: props.tagValue, children: props.textProgressInProgress }) })) : null] })) : null, props.title ? jsxRuntime.jsx("span", { children: props.title }) : null, jsxRuntime.jsxs(descriptionThumbContent, { showText: showMore, children: [" ", props.description, " "] })] }), jsxRuntime.jsx(viewMoreContent$1, { children: jsxRuntime.jsx(Button$3, { variant: "link", label: showMore ? props.textViewLessButton : props.textViewMoreButton, handleClick: () => setShowMore(!showMore), style: { fontSize: 12 } }) })] })) }));
}

const containerList = styled__default["default"].div `
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 12px;
    padding: 8px;
    
`;
const titleList = styled__default["default"].span `
    font-family: 'PT Sans';
    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.neutralsGrey1};
`;
const listContent = styled__default["default"].div `
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    flex-direction: column;
`;
const itemList = styled__default["default"].div `
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row;
    gap: 8px;

    font-family: 'PT Sans';
    font-weight: 400;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.neutralsGrey1};
`;
const viewMoreContent = styled__default["default"].div `
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    width: 100%;
    user-select: none;
`;

function ListSelector(props) {
    const [selectedItens, setSelectedItens] = React.useState([]);
    const [showSize, setShowSize] = React.useState(props.minShowList);
    React.useEffect(() => {
        props.selectedItens(selectedItens);
    }, [selectedItens]);
    const handleSelect = (id) => {
        let indexId = selectedItens.indexOf(id);
        if (indexId === -1) {
            setSelectedItens(value => [...value, id]);
        }
        else {
            setSelectedItens(selectedItens.filter(item => item !== id));
        }
    };
    const handleView = () => {
        if (showSize === props.minShowList)
            setShowSize(props.contentList.length);
        else
            setShowSize(props.minShowList);
    };
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsxs(containerList, { style: { ...props.style }, children: [jsxRuntime.jsxs(titleList, { children: [" ", props.listTitle, " "] }), jsxRuntime.jsx(listContent, { children: props.contentList.map((item, index) => {
                        return (index < showSize ?
                            jsxRuntime.jsxs(itemList, { children: [jsxRuntime.jsx("div", { onClick: () => handleSelect(item.id), children: selectedItens.includes(item.id) ? jsxRuntime.jsx(CheckboxChecked, {}) : jsxRuntime.jsx(CheckboxEmpty, {}) }), item.description] }, index)
                            : null);
                    }) }), props.minShowList < props.contentList.length ?
                    jsxRuntime.jsx(viewMoreContent, { children: jsxRuntime.jsx(Button$3, { variant: 'link', label: showSize === props.minShowList ? props.textViewMore : props.textViewLess, handleClick: handleView }) })
                    : null] }) }));
}

const WrapperCard$2 = styled__default["default"].div `
    display: flex;
    flex-direction: column;
    width: 282px;
    height: fit-content;

    padding: 17px;
    padding-top: 14px;

    background: ${({ theme }) => theme.colors.shadeWhite};
    border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
    border-radius: 8px;
`;
styled__default["default"].div `
    width: 100%;
    display: flex;
    flex-direction: column;
`;
const UserInfo$1 = styled__default["default"].div `
    display: flex;
    flex-direction: row;
`;
const DescriptionUser$1 = styled__default["default"].div `
        display: flex;
        flex-direction: column;
        margin-left: 13px;
    `;
const NameUser$1 = styled__default["default"].div `
            font-family: 'PT Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 110%;

            display: flex;
            align-items: center;

            color: #222222;
            word-break: normal;
            
            max-width: 100%;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            word-wrap: break-word;

        `;
const EmailUser$1 = styled__default["default"].div `
            font-family: 'PT Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 16px;
            display: flex;
            align-items: center;

            color: #9C9C9C;
            margin-top: 5px;
            word-break: normal;
            
            max-width: 100%;
            
            max-width: 100%;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            word-wrap: break-word;
        `;
const UserAdditionalInfo$1 = styled__default["default"].div `
    display: flex;
    flex-direction: column;
    margin-top: 15px;
`;
const Area$1 = styled__default["default"].div `
        font-family: 'PT Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 110%;
        /* or 18px */

        display: flex;
        align-items: center;

        /* neutrals/grey_1 */

        color: #222222;
        max-width: 100%;
            
        max-width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        word-wrap: break-word;
    `;
const Position$1 = styled__default["default"].div `
        font-family: 'PT Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 110%;
        /* or 18px */
        
        display: flex;
        align-items: center;
        
        /* neutrals/grey_1 */
        
        color: #222222;
            
        max-width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        word-wrap: break-word;
    `;
const FooterButton = styled__default["default"].div `
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    justify-content: space-around;
    align-items: center;
`;
const ButtonSend = styled__default["default"].div `
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 0px;
    padding: 4px 16px;
    gap: 8px;

    width: 149px;
    height: 32px;

    /* primary_1 */

    background: ${({ theme }) => theme.colors.primary1};
    border-radius: 8px;

    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: ${({ theme }) => theme.colors.shadeWhite};
    cursor: pointer;
    margin-left: -13px;
`;
const ButtonRemove = styled__default["default"].div `
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #0645AD;
    cursor: pointer;
`;
const ButtonSuccess = styled__default["default"].div `
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 4px 16px;
    gap: 8px;

    width: 159px;
    height: 32px;

    /* message/success_2 */

    background: #D1F6D1;
    /* message/success_1 */

    border: 1px solid #1BA853;
    border-radius: 8px;

    width: 163px;
    height: 32px;
    cursor: default;
    white-space: nowrap;

    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    /* identical to box height */

    display: flex;
    align-items: center;

    /* neutrals/grey_1 */

    color: #222222;
`;

function ParticipantCardOld({ userInfo, labels, successfullInvite, style, handleSendInvitation, handleClickRemove }) {
    const [userName, setUserName] = React.useState(userInfo?.name);
    const [userEmail, setUserEmail] = React.useState(userInfo?.email);
    const [area, setArea] = React.useState(`${labels?.area ? labels?.area : 'Área'}: ${userInfo?.area}`);
    const [position, setPosition] = React.useState(`${labels?.position ? labels?.position : 'Cargo'}: ${userInfo?.position}`);
    const [statusSend, setStatusSend] = React.useState(successfullInvite ? 'success' : 'default');
    React.useEffect(() => {
        setUserName(userInfo?.name);
        setUserEmail(userInfo?.email);
        setArea(`${labels?.area ? labels?.area : 'Área'}: ${userInfo?.area}`);
        setPosition(`${labels?.position ? labels?.position : 'Cargo'}: ${userInfo?.position}`);
        setStatusSend(successfullInvite ? 'success' : 'default');
    }, [userInfo, labels, successfullInvite]);
    const clickSendInvitation = () => {
        setStatusSend('success');
        handleSendInvitation(userInfo?.id);
    };
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsxs(WrapperCard$2, { style: { ...style }, children: [jsxRuntime.jsxs(UserInfo$1, { children: [jsxRuntime.jsx(Avatar, { size: "40px", src: userInfo?.avatar }), jsxRuntime.jsxs(DescriptionUser$1, { children: [userName && userName?.length > 25 ? (jsxRuntime.jsx(Tooltip, { position: "top", textTooltip: userName, children: jsxRuntime.jsx(NameUser$1, { children: userName }) })) : (jsxRuntime.jsx(NameUser$1, { children: userName })), userEmail && userEmail?.length > 30 ? (jsxRuntime.jsx(Tooltip, { position: "top", textTooltip: userEmail, children: jsxRuntime.jsx(EmailUser$1, { children: userEmail }) })) : (jsxRuntime.jsx(EmailUser$1, { children: userEmail }))] })] }), jsxRuntime.jsxs(UserAdditionalInfo$1, { children: [area && area?.length > 31 ? (jsxRuntime.jsx(Tooltip, { position: "top", textTooltip: userInfo?.area, children: jsxRuntime.jsx(Area$1, { children: area }) })) : (jsxRuntime.jsx(Area$1, { children: area })), position && position?.length > 33 ? (jsxRuntime.jsx(Tooltip, { position: "top", textTooltip: userInfo?.position, children: jsxRuntime.jsx(Position$1, { children: position }) })) : (jsxRuntime.jsx(Position$1, { children: position }))] }), jsxRuntime.jsxs(FooterButton, { children: [statusSend == 'default' ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [clickSendInvitation ? (jsxRuntime.jsxs(ButtonSend, { onClick: () => clickSendInvitation(), children: [jsxRuntime.jsx(AddPeople, {}), labels?.sendInvitation ? labels?.sendInvitation : 'Enviar convite'] })) : null, handleClickRemove ? (jsxRuntime.jsx(ButtonRemove, { onClick: () => handleClickRemove(userInfo?.id), children: labels?.remove ? labels?.remove : 'Remover' })) : null] })) : null, statusSend == 'success' ? (jsxRuntime.jsx("div", { style: { width: '100%', justifyContent: 'flex-start' }, children: jsxRuntime.jsxs(ButtonSuccess, { children: [jsxRuntime.jsx(MessageCheckLine, { width: "14" }), labels?.invitationSuccess ? labels?.invitationSuccess : 'Convite enviado'] }) })) : null] })] }) }));
}

const activeStatus = 'Cadastrado';
const inactiveStatus = 'Inativado';
const WrapperCard$1 = styled__default["default"].div `
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;

  background: ${(props) => (props.status == activeStatus ? '#fff' : '#BDBDBD')};

  border-radius: 10px;
  padding-bottom: ${(props) => (props.status == inactiveStatus ? '30px' : '7px')};

  :hover {
    cursor: pointer;
  }
`;
const TagArea$1 = styled__default["default"].div `
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 8px 8px 0px 5px;
`;
const ClickArea = styled__default["default"].div `
  background-color: ${(props) => props.status !== inactiveStatus && props.isPressed && '#FCE4CC'};
  border-radius: 10px 10px 0px 0px;
  padding-bottom: 10px;
  min-height: 150px;
`;
const TagStatus$1 = styled__default["default"].div `
  background-color: ${(props) => (props.isPressed && props.status === activeStatus && '#2CA92A') ||
    (props.status === activeStatus && '#398787') ||
    (props.status === inactiveStatus && '#222222')};
  color: ${(props) => (props.status !== inactiveStatus && '#fff') || '#D3D3D3'};
  font-weight: 300;
  border-radius: 4px;
  max-width: 120px !important;
  padding: 2px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const AccordionList$1 = styled__default["default"].div `
  .css-1elwnq4-MuiPaper-root-MuiAccordion-root {
    box-shadow: none !important;
    border-top: 1px solid ${({ theme }) => theme.colors.borderPrimary};
    border-radius: 0px !important;
    padding: 0px 10px;
  }

  #panel1bh-content {
    margin-top: -5px;
  }

  .Mui-expanded {
    margin: 0px !important;
    background-color: #f7f9fc !important;
  }
`;
const AccortionTitle$1 = styled__default["default"].span `
  color: #0645ad;
  font-weight: 600;
  display: flex;
  align-items: center;
  font-size: 16px;
  svg {
    margin-right: 5px;
  }
`;
styled__default["default"].div `
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const UserInfo = styled__default["default"].div `
  display: flex;
  flex-direction: row;
  padding: 0px 25px;
`;
const DescriptionUser = styled__default["default"].div `
  display: flex;
  flex-direction: column;
  margin-left: 13px;
`;
const NameUser = styled__default["default"].div `
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 110%;

  display: flex;
  align-items: center;

  color: #222222;
  word-break: normal;

  max-width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;
const EmailUser = styled__default["default"].div `
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  display: flex;
  align-items: center;

  color: #9c9c9c;
  word-break: normal;

  max-width: 100%;

  max-width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;
const UserAdditionalInfo = styled__default["default"].div `
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  padding: 0px 25px;
`;
const Area = styled__default["default"].div `
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 110%;
  /* or 18px */

  display: flex;
  align-items: center;

  /* neutrals/grey_1 */

  color: #222222;
  max-width: 100%;

  max-width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;
const Position = styled__default["default"].div `
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 110%;
  /* or 18px */

  display: flex;
  align-items: center;

  /* neutrals/grey_1 */

  color: #222222;

  max-width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;
styled__default["default"].div `
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  justify-content: space-around;
  align-items: center;
`;
styled__default["default"].div `
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 0px;
  padding: 4px 16px;
  gap: 8px;

  width: 149px;
  height: 32px;

  /* primary_1 */

  background: ${({ theme }) => theme.colors.primary1};
  border-radius: 8px;

  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.colors.shadeWhite};
  cursor: pointer;
  margin-left: -13px;
`;
styled__default["default"].div `
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #0645ad;
  cursor: pointer;
`;
styled__default["default"].div `
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 16px;
  gap: 8px;

  width: 159px;
  height: 32px;

  /* message/success_2 */

  background: #d1f6d1;
  /* message/success_1 */

  border: 1px solid #1ba853;
  border-radius: 8px;

  width: 163px;
  height: 32px;
  cursor: default;
  white-space: nowrap;

  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height */

  display: flex;
  align-items: center;

  /* neutrals/grey_1 */

  color: #222222;
`;
const DataList$1 = styled__default["default"].ul `
  list-style-type: none;
  padding: 0;
  margin-top: 0 !important;
  line-height: 25px;
`;
const DataListItem$1 = styled__default["default"].li `
  list-style-type: none;
  margin: 0;
  font-weight: 400;
`;

function ParticipantCard({ userInfo, labels, competencesList, modulesList, disabled, style }) {
    const [selectedItem, setSelectedItem] = React.useState(null);
    const [typeDetails, setTypeDetails] = React.useState(null);
    const [isAccordionOpen, setIsAccordionOpen] = React.useState(false);
    const [isPressed, setIsPressed] = React.useState(false);
    const [accordionState, setAccordionState] = React.useState({
        competences: false,
        modules: false
    });
    const IS_TYPE_COMPETENCES = typeDetails === 'competences';
    const IS_TYPE_MODULES = typeDetails === 'modules';
    const handleSelectedItem = (id, type) => {
        setIsAccordionOpen(!isAccordionOpen);
        setSelectedItem(id);
        setTypeDetails(type);
        handleAccordionState(type, !accordionState[type]);
    };
    const handleAccordionState = (type, value) => {
        setAccordionState({
            ...accordionState,
            [type]: value
        });
    };
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsxs(WrapperCard$1, { status: labels?.tag, style: { ...style }, children: [jsxRuntime.jsxs(ClickArea, { status: labels?.tag, isPressed: isPressed, onClick: () => setIsPressed(true), children: [jsxRuntime.jsx(TagArea$1, { children: jsxRuntime.jsx(TagStatus$1, { isPressed: isPressed, status: labels?.tag, children: labels?.tag }) }), jsxRuntime.jsxs(UserInfo, { children: [jsxRuntime.jsx(Avatar, { size: "40px", src: userInfo?.avatar }), jsxRuntime.jsxs(DescriptionUser, { children: [jsxRuntime.jsx(NameUser, { children: userInfo?.name }), jsxRuntime.jsx(EmailUser, { children: userInfo?.email })] })] }), jsxRuntime.jsxs(UserAdditionalInfo, { children: [jsxRuntime.jsx(Area, { children: `${labels?.area}: ${userInfo?.area}` }), jsxRuntime.jsx(Position, { children: `${labels?.position}: ${userInfo?.position}` })] })] }), !disabled && (jsxRuntime.jsxs(AccordionList$1, { children: [jsxRuntime.jsxs(material.Accordion, { expanded: selectedItem === userInfo?.id && IS_TYPE_COMPETENCES && isAccordionOpen, onChange: () => handleSelectedItem(userInfo?.id, 'competences'), children: [jsxRuntime.jsx(material.AccordionSummary, { expandIcon: jsxRuntime.jsx(IconUp, {}), "aria-controls": "panel1bh-content", id: "panel1bh-header", children: jsxRuntime.jsxs(AccortionTitle$1, { children: [jsxRuntime.jsx(IconGaps, {}), labels?.competences] }) }), jsxRuntime.jsx(material.AccordionDetails, { children: jsxRuntime.jsx(DataList$1, { children: competencesList?.map((item, index) => (jsxRuntime.jsx(DataListItem$1, { children: item.name }, index))) }) })] }), jsxRuntime.jsxs(material.Accordion, { expanded: selectedItem === userInfo?.id && IS_TYPE_MODULES && isAccordionOpen, onChange: () => handleSelectedItem(userInfo?.id, 'modules'), children: [jsxRuntime.jsx(material.AccordionSummary, { expandIcon: jsxRuntime.jsx(IconUp, {}), "aria-controls": "panel2bh-content", id: "panel2bh-header", children: jsxRuntime.jsxs(AccortionTitle$1, { children: [jsxRuntime.jsx(IconModules, {}), labels?.modules] }) }), jsxRuntime.jsx(material.AccordionDetails, { children: jsxRuntime.jsx(DataList$1, { children: modulesList?.map((item, index) => (jsxRuntime.jsx(DataListItem$1, { children: item.name }, index))) }) })] })] }))] }) }));
}

const WrapperCard = styled__default["default"].div `
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;

  background: ${(props) => (props.disabled ? '#E0E0E0' : '#fff')};

  border-radius: 10px;

  padding: 20px;

  :hover {
    cursor: pointer;
  }
`;
const TagArea = styled__default["default"].div `
  display: flex;
  justify-content: space-between;
`;
const TagStatus = styled__default["default"].div `
  background-color: ${(props) => (props.disabled ? '#757575' : '#398787')};
  color: #fff;
  font-weight: 300;
  border-radius: 4px;
  width: 100%;
  max-width: 160px !important;
  padding: 4px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Actions = styled__default["default"].div `
  display: flex;

  .MuiMenu-root {
    position: relative;
    border: 1px solid red !important;
  }

  #long-menu::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 0;
    height: 0;
    border-top: solid 10px #fff;
    border-right: solid 10px transparent;
  }

  #long-menu {
    border: 1px solid red !important;
  }

  .MuiMenu-paper {
    border: 1px solid red !important;
  }
`;
const AccordionList = styled__default["default"].div `
  border: none;

  .MuiAccordion-root {
    border: none;
    box-shadow: none;
    margin-top: 0;
    background: ${(props) => (props.disabled ? '#E0E0E0' : '#fff')};
  }
  .MuiButtonBase-root {
    padding: 0;
  }
  .MuiAccordionDetails-root {
    padding: 0;
  }
  #panel1bh-content {
    margin-top: -5px;
    box-shadow: none;
    padding: 0 !important;
  }
`;
const AccortionTitle = styled__default["default"].span `
  color: #222222;

  display: flex;
  align-items: center;
  font-size: 16px;

  span {
    font-weight: 600;
  }

  span:last-child {
    margin-right: 5px;
    margin-left: 5px;
  }
`;
const CycleName = styled__default["default"].div `
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  font-weight: 600;
  font-size: 25px;
  color: #222222;
`;
styled__default["default"].div `
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  justify-content: space-around;
  align-items: center;
`;
const DataList = styled__default["default"].ul `
  list-style-type: none;
  padding: 0;
  margin-top: 0 !important;
  line-height: 35px;
  overflow-y: scroll;
  height: 194px;
  color: #222222;

  ::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
  -moz-scrollbars-none: none;
`;
const DataListItem = styled__default["default"].li `
  list-style-type: none;
  margin: 0;
  font-weight: 400;
`;
const Button = styled__default["default"].button `
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px auto;

  border: none;
  font-size: 16px;
  color: #64748b;

  :hover {
    cursor: pointer;
  }
`;

const MenuIconOpen = styled__default["default"].div `
  width: 13.64px;
  height: 13.64px;
  position: fixed;
  margin: -7px 0 32px 27px;

  top: 71px;
  right: 40px;
  box-sizing: border-box;
  background-color: #ffffff;
  border: 1px solid #9c9c9c;
  border-right-color: rgb(156, 156, 156);
  border-right-style: solid;
  border-right-width: 1px;
  border-bottom-color: rgb(156, 156, 156);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom: none;
  border-right: none;
  -webkit-transform: matrix(0.71, 0.97, -0.51, 0.91, 0, 0);
  -ms-transform: matrix(0.71, 0.97, -0.51, 0.91, 0, 0);
  transform: matrix(0.71, 0.97, -0.51, 0.91, 0, 0);
  z-index: 999999;
`;

function CardMenu({ id, menuOptions }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (option) => {
        setAnchorEl(null);
        option?.action(id, option);
    };
    return (jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx(IconButton__default["default"], { "aria-label": "more", "aria-controls": open ? 'long-menu' : undefined, "aria-expanded": open ? 'true' : undefined, "aria-haspopup": "true", onClick: handleClick, sx: { padding: '0px' }, children: jsxRuntime.jsx(MoreVertIcon__default["default"], {}) }), open && (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(MenuIconOpen, {}), jsxRuntime.jsx(Menu__default["default"], { id: "long-menu", MenuListProps: {
                            'aria-labelledby': 'long-button'
                        }, anchorEl: anchorEl, open: open, onClose: handleClose, PaperProps: {
                            style: {
                                width: '300px',
                                position: 'relative',
                                marginTop: '10px'
                            }
                        }, sx: {
                            '& .MuiMenu-paper': {
                                padding: '1px',
                                border: '1px solid #BDBDBD',
                                borderRadius: '10px',
                                '& ul': {
                                    padding: '0px',
                                    position: 'relative'
                                },
                                '& li': {
                                    padding: '10px 10px 0px 20px',
                                    fontFamily: 'pt sans'
                                }
                            }
                        }, children: menuOptions?.map((option, index) => (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs(MenuItem__default["default"], { onClick: () => {
                                        handleClose(option);
                                    }, sx: {
                                        color: option?.type === 'delete' ? '#923534' : '#000000',
                                        fontWeight: option?.type === 'delete' ? 600 : 400,
                                        '&:hover': {
                                            backgroundColor: 'transparent'
                                        }
                                    }, children: [option?.type === 'delete' ? jsxRuntime.jsx(TrashDelete, { fill: "#923534", width: "30px" }) : option?.icon, ' ', option?.label] }, index), jsxRuntime.jsx(material.Divider, { sx: {
                                        marginTop: '5px',
                                        marginBottom: '0px!important'
                                    } })] }))) })] }))] }));
}

function LearningCycleCard({ id, tag, name, favorite, labels, modulesList, handleClick, handleFavorite, disabled, menuOptions, style }) {
    const [selectedItem, setSelectedItem] = React.useState(null);
    const [isAccordionOpen, setIsAccordionOpen] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(favorite || false);
    const handleSelectedItem = (id) => {
        setIsAccordionOpen(!isAccordionOpen);
        setSelectedItem(id);
    };
    const handleQuantityGroups = (quantity) => {
        if (Number(quantity) < 10) {
            return `0${quantity}`;
        }
        else {
            return quantity;
        }
    };
    const FavoriteStar = () => {
        return (jsxRuntime.jsx(material.Rating, { id: "favoriteStar", value: isFavorite ? 1 : 0, max: 1, onChange: () => {
                setIsFavorite(!isFavorite);
                handleFavorite(!isFavorite);
            } }));
    };
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: jsxRuntime.jsxs(WrapperCard, { disabled: disabled, status: tag, style: { ...style }, children: [jsxRuntime.jsxs(TagArea, { children: [jsxRuntime.jsx(TagStatus, { disabled: disabled, children: tag }), jsxRuntime.jsxs(Actions, { children: [jsxRuntime.jsx(FavoriteStar, {}), jsxRuntime.jsx(CardMenu, { id: id, menuOptions: menuOptions })] })] }), jsxRuntime.jsx(CycleName, { children: name }), jsxRuntime.jsx(AccordionList, { disabled: disabled, children: jsxRuntime.jsxs(material.Accordion, { expanded: selectedItem === id && isAccordionOpen, onChange: () => handleSelectedItem(id), children: [jsxRuntime.jsx(material.AccordionSummary, { expandIcon: jsxRuntime.jsx(IconUp, {}), "aria-controls": "panel1bh-content", id: "panel1bh-header", children: jsxRuntime.jsxs(AccortionTitle, { children: [jsxRuntime.jsx("span", { children: handleQuantityGroups(modulesList?.length) }), " ", jsxRuntime.jsxs("span", { children: [" ", labels?.groupsLabel, " "] }), labels?.groupsQuantityDescription] }) }), !disabled && isAccordionOpen && jsxRuntime.jsx(material.Divider, { sx: { marginBottom: '5px' } }), jsxRuntime.jsx(material.AccordionDetails, { children: jsxRuntime.jsx(DataList, { children: modulesList?.map((item, index) => (jsxRuntime.jsx(DataListItem, { children: item.name }, index))) }) }), isAccordionOpen && jsxRuntime.jsx(material.Divider, { sx: { marginTop: '5px' } }), jsxRuntime.jsx(Button, { onClick: () => handleClick(id), children: labels?.actionButton })] }) })] }) }));
}

const Div = styled__default["default"].div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 300px;
    background-color: #fff;
    padding: 50px 50px 50px 124px;
    margin: 0;
    background-image: ${props => `url(${props.desktopBackgroundProps})`};
    background-position: bottom 0px right 0px; 
    background-repeat: no-repeat;
    h1 {
        font-size: 3.25rem;
        line-height: 67.6px;
        font-weight: 700;
        background-image: linear-gradient(to right, rgb(255, 98, 0), rgb(255, 176, 0));
        background: linear-gradient(-45deg, rgb(255, 98, 0), rgb(255, 176, 0), rgb(255, 98, 0), rgb(255, 176, 0));
	    background-size: 400% 400%;
	    animation: gradient 10s ease infinite;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        @keyframes gradient {
            0% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
            100% {
                background-position: 0% 50%;
            }
        }
    }
    @media (max-width: 1880px) {
        background-position: bottom 0px right -220px;
        h1 {
            font-size: 3.0rem;
            line-height: 60px;
            }
    }
    @media (max-width: 1650px) {
        padding: 50px 50px 50px 130px;
        background-position: bottom 0px right -280px; 
        h1 {
            font-size: 2.4rem;
            line-height: 50px;
        }
    }
    @media (max-width: 1400px) {
        padding: 50px 50px 50px 40px;
    }
    @media (max-width: 1350px) {
        height: 250px;
        background-size:contain;
        background-position: bottom 0px right -220px; 
    }
    @media (max-width: 1230px) {
        background-size:contain;
        background-position: bottom 0px right -250px; 
        h1 {
           font-size: 1.8rem;
           line-height: 36px;
        }
    }
    @media (max-width: 1100px) {
        height: 200px;
        background-size:contain;
        background-position: bottom 0px right -220px;
    }
    @media (max-width: 860px) {
        background-position: bottom 0px right -250px;
        h1 {
           font-size: 1.4rem;
           line-height: 30px;
        }
    }
    @media (max-width: 750px) {
        background-image:  ${props => `url(${props.mobileBackgroundProps})`};
        background-position: top -20px right 0px;
        h1 {
           max-width: 345px;
           font-size: 1.5rem;
           line-height: 31.2px;
        }
    }
    @media (max-width: 520px) {
        padding: 10px;
        background-size:unset;
        height: 200px;
        h1 {
           max-width: 260px;
           font-size: 16px;
           line-height: 21.11px;
        }
    }
    @media (max-width: 410px) {
        background-position: top 0px right -20px;
        height: 180px
    }
`;

function HeaderChallenge({ firstLine, secondLine, desktopBackground, mobileBackground }) {
    return (jsxRuntime.jsx(Div, { desktopBackgroundProps: desktopBackground, mobileBackgroundProps: mobileBackground, children: jsxRuntime.jsxs("h1", { children: [firstLine, jsxRuntime.jsx("br", {}), " ", secondLine] }) }));
}

var css_248z = "\n.logoFRST-module_containerLight__WYpD6 img{\n    margin-bottom: 10px;\n}\n\n.logoFRST-module_containerLight__WYpD6 p {\n    font-family: PT Sans;\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 16px;\n    letter-spacing: 0em;\n    text-align: left;\n    color: #fff\n}\n\n.logoFRST-module_containerDark__9V-x- img{\n    margin-bottom: 10px;\n}\n\n.logoFRST-module_containerDark__9V-x- p {\n    font-family: PT Sans;\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 16px;\n    letter-spacing: 0em;\n    text-align: left;\n}\n";
var style = {"containerLight":"logoFRST-module_containerLight__WYpD6","containerDark":"logoFRST-module_containerDark__9V-x-"};
styleInject(css_248z);

function LogoFRST(props) {
    return (jsxRuntime.jsx(styled.ThemeProvider, { theme: FRSTTheme, children: props.variant === 'light' ? (jsxRuntime.jsxs("div", { className: style.containerLight, children: [jsxRuntime.jsx("img", { src: "https://api-deimos-cdn.frstfalconi.cloud/frst_branco_1.png", alt: 'LogoFRST', width: 198, height: 64 }), jsxRuntime.jsx("p", { children: props.title1Logo ? props.title1Logo : 'Pessoas transformam o jogo,' }), jsxRuntime.jsx("p", { children: props.title2Logo ? props.title2Logo : 'Resultados transformam as pessoas.' })] }))
            : props.variant === 'dark' ? (jsxRuntime.jsxs("div", { className: style.containerDark, children: [jsxRuntime.jsx("img", { src: "https://api-deimos-cdn.frstfalconi.cloud/logofrst_black.png", alt: 'LogoFRST', width: 198, height: 64 }), jsxRuntime.jsx("p", { children: props.title1Logo ? props.title1Logo : 'Pessoas transformam o jogo,' }), jsxRuntime.jsx("p", { children: props.title2Logo ? props.title2Logo : 'Resultados transformam as pessoas.' })] }))
                : null }));
}

const ContainerStepController = styled__default["default"].div `
  width: 100%;
  height: 51px;
  background: #efeded;
  padding: 10px;
  position: relative;
  top: 25px;
  display: flex;
  justify-content: space-between;
  color: #272727;
  font-weight: lighter;
  border-radius: 0 0 10px 10px;
  border-top: 1px solid #bdbdbd;
  font-size: 14px;
  font-weight: 600;
  > div {
    font-size: 0.8rem;
    cursor: pointer;
    display: inline-flex;
    vertical-align: text-bottom;
    box-sizing: inherit;
    text-align: center;
    align-items: center;
  }
`;
const StepControllerArrow = styled__default["default"].span `
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  color: #272727;
  transition: all 0.2s;
  margin: 5px;

  :hover {
    opacity: 0.5;
    background-color: #272727;
    color: #bdbdbd;
  }
`;

function StepController({ top = '25px', numberCurrentStep, numberTotalSteps, labelHome, labelContact, prevStep, nextStep, goToStart, goToContact }) {
    return (jsxRuntime.jsxs(ContainerStepController, { style: { top: top }, children: [jsxRuntime.jsxs("div", { onClick: goToStart, children: [jsxRuntime.jsx(ComputerIcon__default["default"], { sx: { color: '#242424', fontSize: '0.9rem', marginRight: '8px' } }), labelHome] }), jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx(StepControllerArrow, { onClick: prevStep, children: jsxRuntime.jsx(ArrowBackIosIcon__default["default"], { sx: { fontSize: '0.8rem', marginLeft: '2px' } }) }), jsxRuntime.jsx("span", { style: { fontSize: '0.8rem', margin: '0 3px' }, children: numberCurrentStep }), jsxRuntime.jsx("span", { style: { fontSize: '0.8rem', margin: '0 3px' }, children: "de" }), jsxRuntime.jsx("span", { style: { fontSize: '0.8rem', margin: '0 3px' }, children: numberTotalSteps }), jsxRuntime.jsx(StepControllerArrow, { onClick: nextStep, children: jsxRuntime.jsx(ArrowForwardIosIcon__default["default"], { sx: { fontSize: '0.8rem' } }) })] }), jsxRuntime.jsxs("div", { onClick: goToContact, children: [jsxRuntime.jsx(PersonAddIcon__default["default"], { sx: { color: 'inherit', fontSize: '0.8rem', marginRight: '8px' } }), labelContact] })] }));
}

exports.AccordionTrackList = AccordionTrackList;
exports.AddIcon = AddIcon;
exports.AlertCicle = AlertCicle;
exports.AudioPlayer = AudioPlayer;
exports.Avatar = Avatar;
exports.AvatarAssociatedChannel = AvatarAssociatedChannel;
exports.AvatarChannel = AvatarChannel$1;
exports.BannerLxp = BannerLxp;
exports.BannerProblem = BannerProblem;
exports.BannerProblemFeed = BannerProblemFeed;
exports.BannerSRG = BannerSRG;
exports.BaseCard = EmptyCard;
exports.Books = Books;
exports.Button = Button$3;
exports.ButtonContent = ButtonContent;
exports.ButtonGroup = ButtonGroup;
exports.CalendarCard = CalendarCard;
exports.CalendarFilledIcon = CalendarFilledIcon;
exports.CalendarLineIcon = CalendarLineIcon;
exports.CalendarLxp = CalendarLxp;
exports.CardDefinicaoProblema = CardDefinicaoProblema;
exports.CardProblem = CardProblem;
exports.CardProblemGestor = CardProblemGestor;
exports.CardResultConquista = CardResultConquista;
exports.CardTrail = CardTrail;
exports.CardsTrailsCarousel = CardTrailCarousel;
exports.Challenge = Challenge;
exports.ChallengeCard = ChallengeCard;
exports.ChangeAccount = ChangeAccount;
exports.Channel = Channel$3;
exports.CheckInCicle = CheckInCicle;
exports.Checkmark = Checkmark;
exports.ColorPicker = Colorpicker;
exports.CommentaryBox = CommentaryBox;
exports.ConquistaCarrossel = ConquistaCarrossel;
exports.Content = Content$3;
exports.ContentCycle = ContentCycle;
exports.ContentSwitcher = ContentSwitcher;
exports.ContentThumbnails = ContentThumbnails;
exports.Diamond = Diamond;
exports.DoubleCheck = DoubleCheck;
exports.ExclusiveClassCard = ExclusiveClassCard;
exports.ExitArrow = ExitArrow;
exports.ExtraContent = ExtraContent;
exports.EyeOff = EyeOff;
exports.Favorite = Favorite;
exports.FeedInteraction = FeedInteraction;
exports.FileUpload = FileUpload;
exports.FilterAccordionCheckbox = FilterAccordionCheckbox;
exports.GlobalMenu = GlobalMenu;
exports.GroupStatistics = TotalizerCard;
exports.HeaderChallenge = HeaderChallenge;
exports.HeaderContent = HeaderContent;
exports.HomeFilledIcon = HomeFilledIcon;
exports.HomeLineIcon = HomeLineIcon;
exports.IconNotification = IconNotification;
exports.InputComment = InputComment;
exports.InstagramIcon = InstagramIcon;
exports.InteractionsModal = InteractionsModal;
exports.LampFilledIcon = LampFilledIcon;
exports.LampLineIcon = LampLineIcon;
exports.LateralMenu = LateralMenu;
exports.LearningCycleCard = LearningCycleCard;
exports.LearningSteps = LearningSteps;
exports.LinkedinIcon = LinkedinIcon;
exports.ListContentCycle = ListContentCycle;
exports.ListSelector = ListSelector;
exports.Loading = Loading;
exports.LoginLxp = Login;
exports.LogoFRST = LogoFRST;
exports.ManageLearningCicles = ManageLearningCicles;
exports.MedalFilledIcon = MedalFilledIcon;
exports.MedalLineIcon = MedalLineIcon;
exports.MessageBox = MessageBox;
exports.Modal = Modal;
exports.ModalLearningTech = ModalLearningTech;
exports.ModalStatusProblema = ModalStatusProblema;
exports.ModalVideo = ModalVideo;
exports.MoreDotsHorizontal = MoreDotsHorizontal;
exports.NotificationCard = NotificationCard;
exports.NotificationPopOver = NotificationPopOver;
exports.ObjectiveStep = ObjectiveStep;
exports.OpenedEye = OpenedEye;
exports.Pagination = Pagination;
exports.ParticipantCard = ParticipantCardOld;
exports.ParticipantCardNew = ParticipantCard;
exports.ParticipantThumbnails = ParticipantThumbnails;
exports.ParticipantThumbnailsList = ParticipantThumbnailsList;
exports.PencilFilledIcon = PencilFilledIcon;
exports.PencilLineIcon = PencilLineIcon;
exports.PlayFilledIcon = PlayFilledIcon;
exports.PlayLineIcon = PlayLineIcon;
exports.PodCastIcon = PodCastIcon;
exports.PopOver = PopOver;
exports.PopOverLXP = PopOverLXP;
exports.PostFeed = PostFeed;
exports.ProgressBar = ProgressBar$1;
exports.QuantidadeDesafios = QuantidadeDesafios;
exports.Rating = Rating;
exports.ScrollContainer = ScrollContainer;
exports.SearchBox = SearchBox;
exports.SearchField = SearchField;
exports.SearchResults = SearchResults;
exports.Select = SelectFRST;
exports.SelectLXP = SelectLXP;
exports.SessionFilters = SessionFilters;
exports.SiteIcon = SiteIcon;
exports.SmallSRGBanner = SmallSRGBanner;
exports.SpecialistContact = SpecialistContact;
exports.SpotifyIcon = SpotifyIcon;
exports.StarFavorite = StarFavorite;
exports.StarMetric = StarMetric;
exports.StepCheckInCicle = StepCheckInCicle;
exports.StepCicleFour = StepCicleFour;
exports.StepCicleOne = StepCicleOne;
exports.StepCicleThree = StepCicleThree;
exports.StepCicleTwo = StepCicleTwo;
exports.StepController = StepController;
exports.Stepper = Stepper;
exports.StepperItem = StepperItem;
exports.Steps = Steps;
exports.StepsMission = MissionSteps;
exports.Tag = Tag;
exports.TextArea = Textarea;
exports.TextField = TextField;
exports.ThumbListContent = ThumbListContent;
exports.Thumbnails = Thumbnails;
exports.ThumbnailsDraggable = ThumbnailsDraggable;
exports.Tooltip = Tooltip$2;
exports.TotalizerCard = TotalizerCard$1;
exports.TrailList = TrailList;
exports.TrashIcon = TrashIcon;
exports.UserCard = CalendarCard$1;
exports.Video = Video;
exports.YoutubeIcon = YoutubeIcon;
