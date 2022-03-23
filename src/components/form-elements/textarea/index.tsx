import TextField from '../textfield'
import { TextFieldProps } from '../textfield'

export default function Textarea(props: TextFieldProps) {
    return <TextField {...props} multiline />
}
