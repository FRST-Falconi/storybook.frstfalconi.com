import { IExtraContent } from "./extraContent";
import React, { useState } from "react";
import { Tab, Tabs } from "@mui/material";
import style from './extraContent.module.css'
import TextArea from '../../form-elements/textarea'
import FileUpload from "../fileUpload";
import TextField from "@components/form-elements/textfield";
import Button from "@components/buttons";
import { AddIcon } from "@shared/icons";



export default function AdminExtraContent ( props : IExtraContent) {
    const [valueTabs, setValueTabs] = useState(0)
    const [transcriptionText, setTranscriptionText] = useState('')

    const handleChangeTabs = ( e, newTab ) => {
        setValueTabs(newTab)
    }
    const [books, setBooks] = useState([])
    
    function BooksInfo ( books : any[] ) {
        let bookInfo : { 
            name: string
            autor: string
            link: string
            file: any
        }
        
        return(
            <div style={{marginTop: 16}}>
                
                <TextField label="Nome do livro" onChange={(e)=> bookInfo.name = e.target.value} />
                
                <TextField label="Nome do autor" onChange={(e)=> bookInfo.autor = e.target.value} />
                
                <TextField label="Link para compra" onChange={(e)=> bookInfo.link = e.target.value} />
                <div style={{marginBottom: 8}}>
                    <span > Faça upload da capa do livro abaixo</span>
                </div>
                <FileUpload  variant="landscape" />
                    
               
            </div>
        )
    }
    return (
        <div className={style.container}>
            <span style={{fontSize: 18, fontWeight: 700}}>Material extra</span>
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
                    <Tab label='Transcrição' value={0} />
                    
                    <Tab label='Material de apoio' value={1} />

                    <Tab label='Livros' value={2} />

                </Tabs>
            </div>
            <div className={style.contentInfo}>
                {valueTabs === 0 &&
                    <div>
                        <div>
                            <span style={{fontSize: 16, fontWeight: 400}}>
                                Para ajudar as pessoas com algum problema auditivo ou que somente desejam revisar de forma rápida o conteúdo, transcreva abaixo o que foi dito durante o vídeo.
                            </span>
                        </div>
                        
                        <TextArea  label="Transcrição" style={{marginTop: 24}} height='150px' 
                            onChange={(e) => {
                                setTranscriptionText(e.target.value)
                            }} />
                    </div>
                }
                {valueTabs === 1 &&
                    <div>
                        <div>
                            <span style={{fontSize: 16, fontWeight: 400}}>
                                Adicone materiais extras como PDFs e PPTs que ajudem seus alunos a se desenvolverem neste assunto.
                            </span>
                        </div>
                        <div style={{marginTop: 24, marginBottom: 8}}>
                            <span style={{fontSize: 16, fontWeight: 400}}>
                                Faça o upload dos arquivos abaixo
                            </span>
                        </div>
                        <FileUpload variant="landscape"  />
                    </div>
                }
                {valueTabs === 2 &&
                    <div>

                        <span style={{fontSize: 16, fontWeight: 400}}>Adicione abaixo links de compra dos livros que podem ajudar seus alunos a se desenvolverem nesta área.</span>
                        
                        {BooksInfo(books)}
                        
                        <div style={{marginTop: 24}} >
                            <Button 
                                variant="expandedSecondary"
                                label="Adicionar"
                                startIcon={<AddIcon fill="#FF4D0D"/>} 
                                handleClick={() => {  }}
                            />              
                        </div>
                    </div>
                }
            </div>

        </div>
    )
}