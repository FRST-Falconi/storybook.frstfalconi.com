import { useRef, useState } from 'react'
import { Tab, Tabs, Box, Typography, Grid } from '@mui/material';
import style from './extraContent.module.css'
import { IExtraContent } from './extraContent'
import Avatar from '@components/avatar';
import InputComment from '@components/input-comment';
import CommentaryBox from '@components/commentary-box';
import AdminExtraContent from './adminExtraContent'
import StudentExtraContent from './studentExtraContent'
// import RichTextEditor from './richTextEditor'






export default function ExtraContent( props : IExtraContent) {
    return(
        <div>
            {props.typeExhibition === 1 ?
                AdminExtraContent(props)
                :
                StudentExtraContent(props)
            }
        </div>
    )
}