import React from "react";
import { LampHelpBoxInput } from '../../../shared/icons';
import * as Styles from "./styles"

export default function HelperTextBox({helperTextBox}: {helperTextBox: any}){
  return (
    <Styles.HelperTextBox><LampHelpBoxInput/>{helperTextBox}</Styles.HelperTextBox>
  )
}