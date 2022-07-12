import { relative } from 'path';
import { ReactNode, useEffect, useState, useLayoutEffect } from 'react'

import TextIcon from '../TextIcon/index'
import MessageBox from '../MessageBox/index'
import Rating from '../Rating/index'
import RatingCurtidas from '../RatingCurtidas/index'
import Select from 'react-select'

import StepMission from '../StepsMission/StepMission'
import { Brain, Mail, WithoutTrail, WithTrail, EditIcon, SaveIcon } from '../../../shared/icons'
import Tag from '../../tag/index'
import AvatarWithInfo from '../AvatarWithInfo/index'
import Button from '@components/buttons'

import style from './BannerProblem.module.css'
import TextField from '@components/form-elements/textfield'
import { PropaneSharp } from '@mui/icons-material';

///-----------------------------------------
/// Interface do Componente
interface BannerProblemParams {
  /**
   * @prop {React.CSSProperties} style: Styles de CSS adicional
   */  
  style?: React.CSSProperties
  problema: string
  cargo: string
  nome: string
  avatar: string
  area: string
  email: string
  tags?: string[]
  typeMessagem: number
  message: string
  dataCriacao: string
  qtdeAvaliacao: number
  notaAvaliacao: number
  descriptionImpacto: string
  qtdeRelevancia: number
  notaRelevancia: number
  descriptionRelevancia: string
  curtidas: number
  stepProblem: number
  stepActive: number
  onSelectedStep: (step: number) => void
  onClickSave:([]) => void 
  /**
   * @prop {object} trilhaData: A listagem de Trilhas no Select [{label: 'trilha1', value: 'id1'}]
   */  
  trilhaData?: any
  /**
   * @prop {string} trilha: Descrição da Trilha Selecionada
   */  
  trilha: string
  /**
   * @prop {string} trilhaId: Id da Trilha Selecionada, que será usado para selecionar o select quando for editar
   */    
  trilhaId?: any
  isEditable?: boolean
  /**
   * @prop {object} tagData: A listagem de Tags no Select [{label: 'TAG1', value: 'id1'}]
   */    
  tagData?: any
  children: React.ReactNode
  onClickMessage: () => void
}

///-----------------------------------------
/// Componente



/**
 * 
 * @componente 
 */
export default function BannerProblem(props: BannerProblemParams) {

  const [Edit, setEdit] = useState(false)
  /// States para controle de Edição
  const [TrilhaId, setTrilhaId] = useState(props.trilhaId ? props.trilhaId : null)
  const [TrilhaDescricaoSelecionada, setTrilhaDescricaoSelecionada] = useState(props.trilha ? props.trilha : '')
  const [Tag1, setTag1] = useState(props.tags && props.tags.length >=1 ? props.tags[0] : '')
  const [Tag2, setTag2] = useState(props.tags && props.tags.length >=2 ? props.tags[1] : '')
  const [Tag3, setTag3] = useState(props.tags && props.tags.length >=3 ? props.tags[2] : '')
  const [TituloProblema, setTituloProblema] = useState(props.problema ? props.problema : '')
  /// States para controle de elementos do Banner
  const [TrilhaBanner, setTrilhaBanner] = useState(props.trilha ? props.trilha : '')
  const [Tags, setTags] = useState(props.tags ? props.tags : [])
  const [problema, setProblema] = useState(props.problema ? props.problema : '')

  const customStyles = {
    option: (styles, {isFocused, isSelected}) => ({
      ...styles,
      background: isFocused
          ? '	#FFC6B7'            
          : isSelected
              ? '#FF4D0D'
              : undefined,
      color: isFocused
          ? '#000'
          : isSelected
              ? '#fff'
              : undefined,
      zIndex: 1
    }),
    menu: base => ({
        ...base,
        zIndex: 100
    }),
    control: (styles) => ({
      ...styles,
      marginTop: 12
    }),   
  }

  // Função para pegar o width da tela
  const [size, setSize] = useState([0, 0])
    useLayoutEffect(() => {
        function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    const MOBILEWIDTH = 650;

  return (

    <>    
      <div className={style.container} style={{...props.style }}>
        <div style={{width: '100%', display: 'flex', justifyContent:'space-between', flexDirection: 'row', alignItems:'center'}}>
          <span className={style.titleProblem}>Problema</span>
          {
            props.isEditable &&
            <Button 
              label={Edit ? "Salvar Alterações" : "Editar"}
              variant='link' 
              handleClick={() => {
                {
                  Edit && 
                    setProblema(TituloProblema)
                    setTrilhaBanner(TrilhaDescricaoSelecionada)
                    setTags([Tag1, Tag2, Tag3])
                    props.onClickSave([TituloProblema, TrilhaDescricaoSelecionada, [Tag1, Tag2, Tag3]]) 
                }
                setEdit(!Edit)
              }}
              startIcon={<EditIcon />}
            />
          }
        </div>
        {
          Edit ?
            <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginTop: 8}}>
              <TextField
                width='300px'
                type = 'text'
                multiline = {true}
                value = {TituloProblema}
                onChange = {e => {
                  setTituloProblema(e.target.value)
                }}
              />
            </div>
          :
            <h1 className={style.description}>{problema}</h1>

        }
        <div style={{display: 'flex', justifyContent: 'space-between', position: 'relative', width: '100%', borderBottom: '1px solid #CCCCCC', paddingBottom: 32}}>
          <div style={{display: 'inline-flex', width: '100%'}}>
            <div style={{width:'100%', maxWidth: 600}}>
              <AvatarWithInfo cargo={props.cargo} nomeCompleto={props.nome} fotoAvatar={props.avatar} />
              <TextIcon description={props.area} svg={<Brain />}/>
              <TextIcon description={props.email} svg={<Mail />}/>
              {
                Edit ? 
                <>
                  <div style={{marginTop: 12, backgroundColor: '#F2F2F2', borderWidth: 1, borderRadius: 4, padding: '24px 16px 24px 16px', border: '1px solid #BDBDBD'}}>
                    <h3 style={{marginBottom: 12, textAlign: 'left', width: '100%', fontSize: 16}}>Deseja vincular este novo problema a uma Trilha de Aprendizagem?</h3>
                    <Select 
                      id={"select"}
                      styles={customStyles}
                      options={props.trilhaData ? props.trilhaData : []} 
                      value={props.trilhaData.filter(function(temp) {return temp.value === TrilhaId})} 
                      placeholder={'Selecione uma trilha'}    
                      onChange={e => {
                        setTrilhaId(e.value)
                        setTrilhaDescricaoSelecionada(e.label)
                      }}               
                    /> 
                  </div>
                </>
                :
                <>
                {
                  TrilhaBanner === '' ?
                    <TextIcon description={'Ainda não está vinculado a uma trilha'} svg={<WithoutTrail />}/> 
                  :
                    <TextIcon description={TrilhaBanner} svg={<WithTrail />}/>   
                }
                </>
              }
              
              <div style={{ marginTop: 16, marginBottom: 16}}>
                {
                  Edit ? 
                  <>
                    <div className={style.contentInput}>
                      <h3 style={{marginBottom: 12, textAlign: 'left', width: '100%', fontSize: 16}}>Busque e selecione até três palavras-chave:</h3>
                      
                      <Select 
                        id={"select"}
                        styles={customStyles}
                        options={props.tagData ? props.tagData : []} 
                        value={props.tagData.filter(function(temp) {return temp.value === Tag1})} 
                        placeholder={'Selecione uma Tag'}    
                        onChange={e => {
                          setTag1(e.value)
                          
                        }}               
                      /> 
                      <Select 
                        id={"select"}
                        styles={customStyles}
                        options={props.tagData ? props.tagData : []} 
                        value={props.tagData.filter(function(temp) {return temp.value === Tag2})} 
                        placeholder={'Selecione uma Tag'}    
                        onChange={e => {
                          setTag2(e.value)
                          
                        }}     
                                  
                      />                       
                      <Select 
                        id={"select"}
                        styles={customStyles}
                        options={props.tagData ? props.tagData : []} 
                        value={props.tagData.filter(function(temp) {return temp.value === Tag3})} 
                        placeholder={'Selecione uma Tag'}    
                        onChange={e => {
                          setTag3(e.value)
                        }}               
                      />                       
                    </div>
                  </>
                  :
                  <>
                      {
                        Tags?.map((item, key) => (
                           <Tag title={item} color={"#222"} style={{marginRight: 8, marginTop: 8}} selected={false} inverted={false} key={key}/>  
                        ))
                      }
                  </>
                }

              </div>
              { size[0] <= MOBILEWIDTH || Edit ? 
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', flexWrap: 'wrap', width: '100%'}}>
                    <Rating 
                      titulo='Impacto'
                      descricaoAvaliacao={props.descriptionImpacto}
                      qtdeAvaliacao={props.qtdeAvaliacao}
                      nota={props.notaAvaliacao}
                      tipoVisualizacao={1}
                      style={{margin: 0}}
                    />
                    <Rating 
                      titulo='Relevância'
                      descricaoAvaliacao={props.descriptionRelevancia}
                      qtdeAvaliacao={props.qtdeRelevancia}
                      nota={props.notaRelevancia}
                      tipoVisualizacao={1}
                      style={{margin: 0}}
                    />            
                    <RatingCurtidas 
                      titulo='Curtidas'
                      qtdeCurtidas={props.curtidas}
                      tipoBotao={2}
                      style={{margin:0}}
                    />
                  </div>
                : null
              }

              <MessageBox texto={props.message} tipoVisualizacao={props.typeMessagem} onClick={props.onClickMessage} hasHover={true} style={{marginBottom: 16, maxWidth:400}}/>

              <span className={style.created}>{props.dataCriacao}</span>
            </div>

            { size[0] > MOBILEWIDTH && Edit === false ?
              <div style={{position: 'absolute', right: 0, flexFlow: 'column', justifyContent: 'flex-end', width: '20%'}}>
                <Rating 
                  titulo='Impacto'
                  descricaoAvaliacao={props.descriptionImpacto}
                  qtdeAvaliacao={props.qtdeAvaliacao}
                  nota={props.notaAvaliacao}
                  tipoVisualizacao={1}
                />
                <Rating 
                  titulo='Relevância'
                  descricaoAvaliacao={props.descriptionRelevancia}
                  qtdeAvaliacao={props.qtdeRelevancia}
                  nota={props.notaRelevancia}
                  tipoVisualizacao={1}
                />            
                <RatingCurtidas 
                  titulo='Curtidas'
                  qtdeCurtidas={props.curtidas}
                  tipoBotao={2}
                />
              </div> 
              : null
            }       
          </div>
        </div>
        <StepMission 
          stepProblem={props.stepProblem}
          stepActive={props.stepActive}
          onSelected={(step: number)=>{
            props.onSelectedStep(step)
          }}
                
        />
        <div style={{marginTop: 18, width: '100%', borderRadius: 8, border: '1px solid #BDBDBD', padding: 16, paddingLeft: 32, paddingRight: 32}}>
          {props.children}
        </div>        

      </div>
    </>
  )


}

