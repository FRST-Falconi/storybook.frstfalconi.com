"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrangeDropdownItem = exports.OrangeDropdown = exports.FRSTButton = exports.OrangeLabelSmall = exports.OrangeLabelSlim = exports.OrangeLabel = exports.ContentTabs = exports.SpanLink = void 0;
const styled_components_1 = require("styled-components");
const Button_1 = require("@mui/material/Button");
const Menu_1 = require("@mui/material/Menu");
const MenuItem_1 = require("@mui/material/MenuItem");
exports.SpanLink = styled_components_1.default.span `
  color: #0645AD !important;
  font-size: 16px !important;
  font-weight: bolder !important;
  cursor: pointer !important;
  &:disabled {
    color: #7C7C7C !important;
  }
`;
exports.ContentTabs = styled_components_1.default.div `
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
exports.OrangeLabel = styled_components_1.default.label `
  font-size: 20px;
  color: #ff4d0d;
  font-weight: bolder;
`;
exports.OrangeLabelSlim = styled_components_1.default.label `
  font-size: 20px;
  color: #ff4d0d;
`;
exports.OrangeLabelSmall = styled_components_1.default.label `
  font-size: 16px;
  color: #ff4d0d;
`;
exports.FRSTButton = (0, styled_components_1.default)(Button_1.default) `
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
exports.OrangeDropdown = (0, styled_components_1.default)(Menu_1.default) `
  & .MuiPaper-root{
    border-radius: 0px;
    box-shadow: none !important;
  }
  ul {
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;
exports.OrangeDropdownItem = (0, styled_components_1.default)(MenuItem_1.default) `
  color: white !important;
  background-color: #FF4D0D !important;
  &:hover {
    background-color: #F5792A !important;
  }
`;
