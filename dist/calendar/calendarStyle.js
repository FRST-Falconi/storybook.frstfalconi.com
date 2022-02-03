"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorlibStepIconRoot = exports.ColorlibConnector = exports.ActionContainer = exports.LabelScheduleClick = exports.LabelSchedule = exports.BoxLabelTimeMentoring = exports.LabelTimeMentoring = exports.BoxStepper = exports.CustomStep = exports.CustomStepper = exports.ContainerStepper = exports.LabelTitleStepper = exports.LabelDateStepper = exports.DropDownList = exports.FormControlSelect = exports.LoginIconCustom = exports.CheckIconCustom = exports.ContainerText = exports.ContainerDescription = exports.TextDescription = exports.Title = exports.Container = void 0;
const styled_components_1 = require("styled-components");
const Card_1 = require("@mui/material/Card");
const Stepper_1 = require("@mui/material/Stepper");
const FormControl_1 = require("@mui/material/FormControl");
const Select_1 = require("@mui/material/Select");
const Check_1 = require("@mui/icons-material/Check");
const Login_1 = require("@mui/icons-material/Login");
const Box_1 = require("@mui/material/Box");
const Step_1 = require("@mui/material/Step");
const CardActions_1 = require("@mui/material/CardActions");
const StepConnector_1 = require("@mui/material/StepConnector");
const styles_1 = require("@mui/material/styles");
exports.Container = (0, styled_components_1.default)(Card_1.default) `
  height: 420px !important;
  box-shadow: none !important;
  border: 1px solid #c4c4c4 !important;
  box-sizing: border-box !important;
  border-radius: 4px !important;
  padding: 24px !important;
`;
exports.Title = styled_components_1.default.span `
  font-size: 20px !important;
  color: #ff4d0d !important;
`;
exports.TextDescription = styled_components_1.default.span `
  font-size: 14px !important;
  color: #222222 !important;
`;
exports.ContainerDescription = styled_components_1.default.div `
  padding-top: 26px !important;
`;
exports.ContainerText = styled_components_1.default.div `
  padding-top: 35px !important;
`;
exports.CheckIconCustom = (0, styled_components_1.default)(Check_1.default) `
  color: white !important;
  font-size: 19px !important;
`;
exports.LoginIconCustom = (0, styled_components_1.default)(Login_1.default) `
  color: white !important;
  font-size: 20px !important;
`;
exports.FormControlSelect = (0, styled_components_1.default)(FormControl_1.default) `
  .MuiInputLabel-formControl {
    color: rgba(0, 0, 0, 0.6) !important;
    margin-top: 5px !important;
  }
`;
exports.DropDownList = (0, styled_components_1.default)(Select_1.default) `
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
exports.LabelDateStepper = styled_components_1.default.label `
  font-size: 14px !important;
  line-height: 14px !important;
`;
exports.LabelTitleStepper = styled_components_1.default.label `
  overflow: hidden; !important;
  display: block !important;
  max-height: 1.33rem !important;
;
`;
exports.ContainerStepper = styled_components_1.default.div `
  margin-top: 10px !important;
`;
exports.CustomStepper = (0, styled_components_1.default)(Stepper_1.default) `
  height: 100px !important;
  overflow-x: auto !important;
  overflow-y: hidden !important;
  box-sizing: content-box !important;
  scroll-behavior: smooth !important;
  padding-bottom: 30px !important;
`;
exports.CustomStep = (0, styled_components_1.default)(Step_1.default) `
  padding: 0px !important;
  min-width: 150px !important;
`;
exports.BoxStepper = (0, styled_components_1.default)(Box_1.default) `
  width: 100% !important;
  margin-top: 20px !important;
  text-align: center !important;
  overflow: hidden !important;
  height: 110px !important;
`;
exports.LabelTimeMentoring = styled_components_1.default.label `
  font-size: 16px !important;
  color: #ff4d0d !important;
  font-weight: bolder !important;
`;
exports.BoxLabelTimeMentoring = styled_components_1.default.div `
  padding-top: 30px !important;
  padding-bottom: 16px !important;
`;
exports.LabelSchedule = styled_components_1.default.span `
  font-size: 16px !important;
`;
exports.LabelScheduleClick = styled_components_1.default.span `
  color: #0645ad !important;
  font-size: 16px !important;
  font-weight: bolder !important;
  cursor: pointer !important;
`;
exports.ActionContainer = (0, styled_components_1.default)(CardActions_1.default) `
  padding: 0px !important;
`;
exports.ColorlibConnector = (0, styles_1.styled)(StepConnector_1.default)(({ theme }) => ({
    [`&.${StepConnector_1.stepConnectorClasses.alternativeLabel}`]: {
        top: 40,
        left: 'calc(-54% + 7px)',
        right: 'calc(40% + 20px)',
        [`&.MuiStepLabel-labelContainer`]: {
            [`&.Mui-active`]: {
                backgroundColor: 'red'
            }
        }
    },
    [`&.${StepConnector_1.stepConnectorClasses.active}`]: {
        [`& .${StepConnector_1.stepConnectorClasses.line}`]: {
            backgroundColor: '#ff4d0d'
        }
    },
    [`&.${StepConnector_1.stepConnectorClasses.completed}`]: {
        [`& .${StepConnector_1.stepConnectorClasses.line}`]: {
            backgroundColor: '#000'
        }
    },
    [`& .${StepConnector_1.stepConnectorClasses.line}`]: {
        height: 1,
        border: 0,
        backgroundColor: '#000',
        borderRadius: 1
    }
}));
exports.ColorlibStepIconRoot = (0, styles_1.styled)('div')(({ ownerState }) => (Object.assign(Object.assign(Object.assign(Object.assign({ backgroundColor: '#000', zIndex: 1, color: '#fff', display: 'flex', borderRadius: '50%', justifyContent: 'center', alignItems: 'center', boxShadow: 'none !important' }, (ownerState.active && {
    backgroundColor: '#ff4d0d',
    width: 32,
    height: 32,
    boxShadow: 'none !important'
})), (ownerState.completed && {
    backgroundColor: '#000',
    width: 24,
    height: 24,
    boxShadow: 'none !important'
})), (!ownerState.active &&
    !ownerState.completed && {
    backgroundColor: '#ff4d0d',
    width: 24,
    height: 24,
    boxShadow: 'none !important'
})), (ownerState.active &&
    ownerState.completed && {
    backgroundColor: '#000',
    width: 24,
    height: 24,
    boxShadow: 'none !important'
}))));
