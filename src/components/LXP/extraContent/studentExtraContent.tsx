import { IExtraContent } from "./extraContent";
import React, { useRef, useState, useMemo } from "react";
import { Grid, Tab, Tabs } from "@mui/material";
import style from './extraContent.module.css';
import Avatar from '../../avatar'
import CommentaryBox from '../../commentary-box';
import InputComment from '../../input-comment';
import {DownloadIcon} from '@shared/icons'
import RichTextEditor from './richTextEditor/index'
import Button from "@components/buttons";


export default function StudentExtraContent(props: IExtraContent) {
    const [valueTabs, setValueTabs] = useState(0)
    const [comments, setComments] = useState('')
    const [note, setNote] = useState('')

    const handleChangeTabs = ( e, newTab ) => {
        setValueTabs(newTab)
    }

    const handleComments = (e) => {
        setComments(e.target.value)
    }

    return (
        <div className={style.container} >
            <div className={style.contentTabs}> 
                <Tabs value={valueTabs}  
                    onChange={handleChangeTabs}
                    sx={{
                        '& .Mui-selected ' : {
                            color: '#FF4D0D !important',
                            fontWeight: '700 !important'
                        },
                        '& .MuiTab-root' : {
                            fontFamily: 'PT Sans !important',
                            textTransform: 'none !important',
                            fontWeight: '400 !important',
                        },
                        '& .MuiTabs-indicator' : {
                            backgroundColor: '#FF5427 !important',
                        }}
                    }
                >
                    <Tab label='Anotações' value={0} />
                    
                    <Tab label='Livros recomendados' value={1} />
                    
                    <Tab label='Material de apoio' value={2} />

                    <Tab label='Transcrição' value={3} />

                    <Tab label='Comentários' value={4} />

                    
                </Tabs>
            </div>
            <div className={style.contentInfo} >
                {valueTabs === 0 &&
                    <div className={style.notes}>

                        <span style={{fontSize:16, fontWeight:400, color:'#000'}}> Escreva e faça suas anotações aqui para rever depois, este espaço é seu.</span>
                        <div style={{marginTop:12}}>
                            <RichTextEditor  />
                        </div>
                        <div className={style.saveNotes}>
                            <Button label="Salvar" variant="primary" handleClick={ () => { }} />
                        </div>
                    </div>
                }
                {valueTabs === 1 &&
                    <Grid container spacing={0}>
                        
                        {props.bookList?.map((item: any , index: any) => {
                            return(
                                <Grid item key={index} 
                                    style={{position: 'relative', width: 200, height: 310, backgroundColor: '#FFF', display:'flex', flexDirection:'column', alignItems: 'center', justifyContent:'flex-start', padding: '16px 32px 8px 32px', border: '1px solid #BDBDBD', cursor: 'pointer'} }
                                    onClick={ () => { props.onClickBook(item.id)}} 
                                >
                                    
                                    <img src={item.img} width={130} height={185} />
                                    <span style={{fontSize:16, fontWeight:400, color:'#000', marginTop: 12}}> {item.title} </span>
                                    <span style={{fontSize:12, fontWeight:400, color:'#000', position: 'absolute', bottom: 0, marginBottom: 8}}> {item.autor} </span>
                                </Grid>
                            )
                        })}
                    </Grid>
                }
                {valueTabs === 2 &&
                    <Grid container spacing={0} >
                        {props.suportMaterial?.map((item : any, index: number) => {
                            return(
                                <Grid item  key={index} 
                                    style={{width: 200, height: 240, backgroundColor: '#FFF', display:'flex', flexDirection:'column', alignItems: 'center', justifyContent:'space-between', padding: '16px 32px 8px 32px', border: '1px solid #BDBDBD'}} >
                                    <img src={item.img} width={65} height={70} />
                                    <span style={{fontSize:16, fontWeight:400, color:'#000', marginTop: 12}}>{item.description}</span>
                                    <label htmlFor="downloadBtn" onClick={ () => { props.onClickSuportMaterial(item.id) }} style={{color: '#0645AD', fontWeight: 700, cursor: 'pointer'}} > <DownloadIcon fill="#0645AD" /> &nbsp; Download</label>
                                    
                                </Grid>
                            )
                        })}
                    </Grid>
                }
                {valueTabs === 3 &&
                    <div style={{fontSize: 16, fontWeight:400, textAlign:'justify'}}>
                        <span>{props.transcription}</span>
                    </div>
                }

                {valueTabs === 4 &&
                    <div style={{display:'flex', flexDirection: 'column'}}>
                        <div style={{display: 'flex', flexDirection:'row'}}>

                        <Avatar size={'40px'} src={props.userAvatar} />
                        {/* <InputComment
                            className={''}
                            showCharacterCounter={false}
                            IDInput='1'
                            emojiWindowlanguage='pt'
                            placeholder={'Comente aqui sobre o seu problema'}
                            value={comments}
                            onChange={(e) => handleComments(e)}
                            remain={1000 - comments.length}
                            limit={1000}
                            hasEmoji={true}
                            styles={{ marginLeft: '8px', width: '80%' }}
                            /> */}
                        </div>
                        <div>
                            {props.commentList?.map( ( item : any, index: number) => {
                                return(
                                    <div key={index} style={{display: 'flex', flexDirection:'row', marginTop: 20}}>
                                        <Avatar size={'40px'} src={item?.userAvatar} />
                                        <CommentaryBox 
                                            className={''}
                                            name={item.userName}
                                            position={item.userPosition}
                                            value={item.comments}
                                            date={item.date}
                                            onChange={()=> {}}
                                            styles={{marginRight: 8, width: '80%'}}
                                            textLiked='Curtir'
                                            actionLike={() => {item.isLiked = true}}
                                            isLiked={item?.isLiked}

                                        /> 
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                }
                
            </div>
            

        </div>
    );
}