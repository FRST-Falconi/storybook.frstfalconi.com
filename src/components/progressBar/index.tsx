import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import { IProgressBar } from './progressBar'
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';

const BorderLinearProgress = withStyles((theme) => ({
    root: {
      width: 289,
      height: 19,
      borderRadius: 8,      
    },
    colorPrimary: {
      backgroundColor: 'rgba(0,0,0,0.6)',
      border: '1px solid #9c9c9c',       
    },
    bar: {
      borderRadius: 8,
      backgroundColor: '#ff4d0d',
    },
  }))(LinearProgress);  

export default function ProgressBar({ value }: IProgressBar) {
   
    return (
        <ThemeProvider theme={FRSTTheme}>
            <>
            <BorderLinearProgress variant="determinate" value={value}/>
            </>
        </ThemeProvider>
    );
}