'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var styled = require('styled-components');
var Button = require('@mui/material/Button');
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
var reactI18next = require('react-i18next');
var material = require('@mui/material');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button);
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

var css_248z = "/* DEFAULTS */\n@import url('https://fonts.googleapis.com/css?family=Work+Sans:regular,bold,italic&subset=latin,latin-ext');\n\nhtml,\nbody {\n  padding: 0;\n  margin: 0;\n  font-family: Work Sans !important;\n  font-weight: 500 !important;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.shimmer {\n  background: #f6f7f8;\n  background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #c4c4c4 40%, #c4c4c4 100%);\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  position: relative;\n  color: transparent;\n\n  -webkit-animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-animation-name: placeholderShimmer;\n  -webkit-animation-timing-function: linear;\n}\n\n@keyframes placeholderShimmer {\n  0% {\n    background-position: -468px 0;\n  }\n\n  100% {\n    background-position: 468px 0;\n  }\n}\n";
styleInject(css_248z);

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
  box-shadow: none !important;
  border: 1px solid #c4c4c4 !important;
  box-sizing: border-box !important;
  border-radius: 4px !important;
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

function WarningIcon() {
    return (jsxRuntime.jsx("svg", { width: "24", height: "20", viewBox: "0 0 24 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M22.9209 17.2636L12.8305 0.814496C12.1589 -0.281702 11.0604 -0.266316 10.3889 0.829881L0.298445 17.2567C-0.37312 18.3537 0.128439 19.2006 1.41311 19.2006H21.8055C23.0909 19.2006 23.5925 18.359 22.9209 17.2636ZM11.6012 4.45541C12.2474 4.45541 12.7474 5.16929 12.7143 6.04163L12.5097 11.2988C12.4766 12.1703 12.0666 12.8842 11.5989 12.8842C11.1312 12.8842 10.7204 12.1703 10.6873 11.2988L10.485 6.04163C10.4519 5.16929 10.9535 4.45541 11.6012 4.45541ZM11.6012 16.8444C10.7858 16.8444 10.2265 16.2482 10.2435 15.4335C10.2435 14.6012 10.8043 14.0227 11.6012 14.0227C12.432 14.0227 12.9574 14.6012 12.9751 15.4335C12.9751 16.2482 12.432 16.8444 11.6012 16.8444Z", fill: "#F3D224" }, void 0) }, void 0));
}

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
    const [module, setModule] = react.useState(null);
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
            setModule(0);
            if (props.trails[0].events)
                setModuleEvents(props.trails[0].events);
            if (props.trails.length > 1)
                setModuleSelector(true);
        }
    }, [props.trails]);
    return (jsxRuntime.jsx("div", { children: props.loading ?
            jsxRuntime.jsx(Container, { className: 'shimmer' }, void 0)
            :
                jsxRuntime.jsx(Container, { children: jsxRuntime.jsxs(material.CardContent, { style: { padding: '0px' }, children: [jsxRuntime.jsx(Title, { children: t('calendar.title') }, void 0), jsxRuntime.jsxs(ContainerDescription, { hidden: !moduleSelector, children: [jsxRuntime.jsx(TextDescription, { children: t('calendar.card.description') }, void 0), jsxRuntime.jsx(FormControlSelect, { fullWidth: true, children: jsxRuntime.jsx(DropDownList, { id: "module-id", value: module, onChange: handleChange, children: props.trails?.map((item, index) => {
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

exports.CalendarCard = CalendarCard;
