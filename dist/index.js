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

var css_248z = "/* DEFAULTS */\r\n@import url('https://fonts.googleapis.com/css?family=Work+Sans:regular,bold,italic&subset=latin,latin-ext');\r\n@import url('https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400&family=Work+Sans:wght@700&display=swap');\r\n\r\nhtml,\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family: Work Sans !important;\r\n  font-weight: 500 !important;\r\n}\r\n\r\np {\r\n  margin: 0px;\r\n}\r\n\r\nbr {\r\n  display: block;\r\n  margin: 8px 0;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  outline: none;\r\n}\r\n\r\n.avatar {\r\n  vertical-align: middle;\r\n  width: 50px;\r\n  height: 50px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.ellipsis {\r\n  overflow: hidden !important;\r\n  white-space: nowrap !important;\r\n  text-overflow: ellipsis !important;\r\n  display: inline-block !important;\r\n}\r\n\r\n.tag {\r\n  border-radius: 13px;\r\n  min-height: 24px;\r\n  text-align: center;\r\n  font-size: 14px;\r\n  line-height: 16px;\r\n  display: inline-block;\r\n}\r\n\r\n.content {\r\n  padding: 24px !important;\r\n  border-radius: inherit;\r\n}\r\n\r\n.fixedBottom {\r\n  position: absolute !important;\r\n  bottom: 0px !important;\r\n  right: 0px !important;\r\n}\r\n\r\n.innerContent {\r\n  padding: 0px 24px 0px 24px !important;\r\n  border-radius: inherit;\r\n}\r\n\r\n.centeredVertically {\r\n  display: inline-flex;\r\n  align-items: center;\r\n}\r\n\r\n.cardContent {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  box-shadow: none !important;\r\n  border: 1px solid #c4c4c4;\r\n  background-color: #fff;\r\n  box-sizing: border-box !important;\r\n  border-radius: 8px !important;\r\n  padding: 24px !important;\r\n}\r\n\r\n.cardContentNoMargin {\r\n  position: relative;\r\n  height: 100%;\r\n  width: 100%;\r\n  box-shadow: none !important;\r\n  border: 1px solid #c4c4c4;\r\n  background-color: #fff;\r\n  box-sizing: border-box !important;\r\n  border-radius: 8px !important;\r\n}\r\n\r\n.cardTopRightConner {\r\n  float: right;\r\n  border-radius: 0px 8px;\r\n}\r\n\r\n.frstButton {\r\n  color: #fff;\r\n  font-weight: bold !important;\r\n  background-color: #ff4d0d;\r\n  border-color: #ff4d0d;\r\n  height: 48px !important;\r\n  font-size: 16px !important;\r\n  padding-left: 16px !important;\r\n  padding-right: 16px !important;\r\n  padding-top: 18px !important;\r\n  padding-bottom: 18px !important;\r\n  text-transform: none !important;\r\n  border-radius: 5px 5px 5px 5px !important;\r\n  box-shadow: 0 2px 0 rgb(0 0 0 / 2%) !important;\r\n}\r\n\r\n.blue {\r\n  border: 1px solid #e8e8e8 !important;\r\n  background-color: #fff !important;\r\n  color: #0645ad !important;\r\n}\r\n\r\n.shimmer {\r\n  background: #f6f7f8;\r\n  background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #c4c4c4 40%, #c4c4c4 100%);\r\n  background-repeat: no-repeat;\r\n  background-size: 100% 100%;\r\n  position: relative;\r\n  color: transparent;\r\n\r\n  -webkit-animation-duration: 1s;\r\n  -webkit-animation-fill-mode: forwards;\r\n  -webkit-animation-iteration-count: infinite;\r\n  -webkit-animation-name: placeholderShimmer;\r\n  -webkit-animation-timing-function: linear;\r\n}\r\n\r\n@keyframes placeholderShimmer {\r\n  0% {\r\n    background-position: -468px 0;\r\n  }\r\n\r\n  100% {\r\n    background-position: 468px 0;\r\n  }\r\n}\r\n";
styleInject(css_248z);

function EditIcon() {
    return (jsxRuntime.jsx("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.1788 1.92286C16.3858 1.71638 16.667 1.6 16.9607 1.6C17.2544 1.6 17.5356 1.71638 17.7426 1.92286C17.9496 2.12928 18.0654 2.4088 18.0654 2.69981C18.0654 2.99083 17.9496 3.27034 17.7426 3.47676L9.5855 11.6127C9.4439 11.7539 9.26546 11.8543 9.07141 11.9027C8.26586 12.1036 7.52969 11.3753 7.73154 10.57C7.78007 10.3765 7.88036 10.1997 8.02166 10.0588L16.1788 1.92286ZM16.9607 0C16.244 0 15.5563 0.283939 15.0489 0.790021L6.5187 9.29803C6.41591 9.40055 6.34296 9.52912 6.30766 9.66994L5.40975 13.2523C5.34143 13.5248 5.42113 13.8133 5.61971 14.0121C5.81829 14.2109 6.10663 14.291 6.3793 14.223L9.97094 13.3274C10.1114 13.2924 10.2398 13.2199 10.3423 13.1176L18.8725 4.6096C19.38 4.10345 19.6654 3.41652 19.6654 2.69981C19.6654 1.9831 19.38 1.29617 18.8725 0.790021C18.3651 0.283939 17.6774 0 16.9607 0ZM2.59582 1.89842C1.90804 1.89842 1.24801 2.17091 0.761035 2.65662C0.273994 3.1424 0 3.80169 0 4.48958V17.0277C0 17.7156 0.273995 18.3749 0.761035 18.8607C1.24801 19.3464 1.90804 19.6188 2.59582 19.6188H15.1666C15.8544 19.6188 16.5144 19.3464 17.0014 18.8607C17.4884 18.3749 17.7624 17.7156 17.7624 17.0277V10.7586C17.7624 10.3168 17.4042 9.95864 16.9624 9.95864C16.5206 9.95864 16.1624 10.3168 16.1624 10.7586V17.0277C16.1624 17.2899 16.058 17.5418 15.8715 17.7278C15.6849 17.9139 15.4314 18.0189 15.1666 18.0189H2.59582C2.33104 18.0189 2.07753 17.9139 1.89093 17.7278C1.70441 17.5418 1.6 17.2899 1.6 17.0277V4.48958C1.6 4.22738 1.70441 3.9755 1.89093 3.78946C2.07753 3.60335 2.33104 3.49842 2.59582 3.49842H8.8812C9.32303 3.49842 9.6812 3.14025 9.6812 2.69842C9.6812 2.25659 9.32303 1.89842 8.8812 1.89842H2.59582Z", fill: "#0645AD" }, void 0) }, void 0));
}
function WarningIcon() {
    return (jsxRuntime.jsx("svg", { width: "24", height: "20", viewBox: "0 0 24 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M22.9209 17.2636L12.8305 0.814496C12.1589 -0.281702 11.0604 -0.266316 10.3889 0.829881L0.298445 17.2567C-0.37312 18.3537 0.128439 19.2006 1.41311 19.2006H21.8055C23.0909 19.2006 23.5925 18.359 22.9209 17.2636ZM11.6012 4.45541C12.2474 4.45541 12.7474 5.16929 12.7143 6.04163L12.5097 11.2988C12.4766 12.1703 12.0666 12.8842 11.5989 12.8842C11.1312 12.8842 10.7204 12.1703 10.6873 11.2988L10.485 6.04163C10.4519 5.16929 10.9535 4.45541 11.6012 4.45541ZM11.6012 16.8444C10.7858 16.8444 10.2265 16.2482 10.2435 15.4335C10.2435 14.6012 10.8043 14.0227 11.6012 14.0227C12.432 14.0227 12.9574 14.6012 12.9751 15.4335C12.9751 16.2482 12.432 16.8444 11.6012 16.8444Z", fill: "#F3D224" }, void 0) }, void 0));
}
function CheckboxChecked() {
    return (jsxRuntime.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("rect", { x: "0.5", y: "0.5", width: "15", height: "15", rx: "1.5", fill: "#F35F24", stroke: "#F35F24" }, void 0), jsxRuntime.jsx("path", { d: "M13 4L6.125 11L3 7.81818", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, void 0)] }, void 0));
}
function CheckboxEmpty() {
    return (jsxRuntime.jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("rect", { x: "0.6", y: "0.6", width: "14.8", height: "14.8", rx: "1.4", fill: "white", stroke: "#A6A6A6", strokeWidth: "1.2" }, void 0) }, void 0));
}
function AlertCicle({ fill }) {
    return (jsxRuntime.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", stroke: fill ?? "#FF0000", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, void 0), jsxRuntime.jsx("path", { d: "M12 8V12", stroke: fill ?? "#FF0000", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, void 0), jsxRuntime.jsx("path", { d: "M12 16H12.01", stroke: fill ?? "#FF0000", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, void 0)] }, void 0));
}
function DoubleCheck({ fill }) {
    return (jsxRuntime.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("path", { d: "M1.33301 8L4.83301 11.3333L6.58301 9.33333", stroke: fill ?? "#FFF", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }, void 0), jsxRuntime.jsx("path", { d: "M5.33301 8.00033L8.83301 11.3337L14.6663 4.66699", stroke: fill ?? "#FFF", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }, void 0), jsxRuntime.jsx("path", { d: "M10.6663 4.66699L8.33301 7.33366", stroke: fill ?? "#FFF", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }, void 0)] }, void 0));
}

function Tag(props) {
    function getBG() {
        return props.selected === props.inverted ? props.color : '#fff';
    }
    function getColor() {
        return props.selected === props.inverted ? '#fff' : props.color;
    }
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: props.loading ?
            (jsxRuntime.jsx("div", { className: 'shimmer tag', children: jsxRuntime.jsx("span", { style: { verticalAlign: 'middle', margin: '8px' }, children: "Shimmer Text" }, void 0) }, void 0))
            :
                (jsxRuntime.jsx("div", { className: 'tag', style: { border: `1px solid ${getColor()} `, background: getBG(), color: getColor() }, children: jsxRuntime.jsxs("span", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '24px', margin: '0 8px', gap: '8px' }, children: [props.title, props.iconType === 'warning' && jsxRuntime.jsx(AlertCicle, { fill: getColor() }, void 0), props.iconType === 'checked' && jsxRuntime.jsx(DoubleCheck, { fill: getColor() }, void 0)] }, void 0) }, void 0)) }, void 0));
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
                                jsxRuntime.jsxs("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '140px', paddingBottom: '32px' }, children: [jsxRuntime.jsx(WarningIcon, {}, void 0), jsxRuntime.jsx("span", { style: { paddingLeft: '8px' }, children: t('calendar.notAvailable') }, void 0)] }, void 0), moduleEvents && jsxRuntime.jsx(StepsComponent, { events: moduleEvents, short: props.short }, void 0), moduleEvents && moduleEvents.length > 0 &&
                                jsxRuntime.jsx(BoxLabelTimeMentoring, { children: props.trails[module]?.nextEvent ?
                                        jsxRuntime.jsxs(LabelTimeMentoring, { children: [t('calendar.card.mentoringSchedule'), " ", t(`calendar.weekdays.${props.trails[module].nextEvent.weekday}`), " @ ", props.trails[module]?.nextEvent.hour] }, void 0)
                                        :
                                            jsxRuntime.jsx(LabelTimeMentoring, { children: t(`calendar.noMoreEvents`) }, void 0) }, void 0), jsxRuntime.jsxs(ActionContainer, { children: [props.short &&
                                        jsxRuntime.jsxs(LabelSchedule, { children: [jsxRuntime.jsx(LabelScheduleClick, { onClick: props.showFullPageAction, children: t('globals.clickHere') }, void 0), ' ', t('calendar.card.fullSchedule')] }, void 0), props.trails[module]?.joinEventAction &&
                                        jsxRuntime.jsx(FRSTButton, { style: { marginLeft: 'auto' }, variant: "contained", onClick: props.trails[module]?.joinEventAction, children: t('calendar.card.joinEvent') }, void 0)] }, void 0)] }, void 0) }, void 0) }, void 0));
}

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

const LinkButton = styled__default["default"].a `
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
            jsxRuntime.jsxs(LinkButton, { disabled: disabled, onClick: handleClick, children: [startIcon, label] }, void 0)
            :
                jsxRuntime.jsxs(Button$1, { variant: variant, disabled: disabled, onClick: handleClick, children: [startIcon, label] }, void 0) }, void 0));
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
const HelperText = styled__default["default"].span `
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
                            : jsxRuntime.jsx("span", { children: props.endIcon }, void 0))] }, void 0), props.helperText && jsxRuntime.jsx(HelperText, { children: props.helperText }, void 0)] }, void 0) }, void 0));
}

function Textarea(props) {
    return jsxRuntime.jsx(TextField, { ...props, multiline: true }, void 0);
}

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

exports.AlertCicle = AlertCicle;
exports.Avatar = Avatar;
exports.BaseCard = EmptyCard;
exports.Button = Button;
exports.CalendarCard = CalendarCard;
exports.DoubleCheck = DoubleCheck;
exports.Tag = Tag;
exports.TextArea = Textarea;
exports.TextField = TextField;
exports.UserCard = CalendarCard$1;
