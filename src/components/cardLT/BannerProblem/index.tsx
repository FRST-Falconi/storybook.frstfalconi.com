import { useEffect, useState, useLayoutEffect } from 'react'

import TextIcon from '../TextIcon/index'
import MessageBox from '../MessageBox/index'
import Rating from '../Rating/index'
import RatingCurtidas from '../RatingCurtidas/index'
import Select from 'react-select'
import { Tooltip } from '../../../../index'

import StepMission from '../StepsMission/StepMission'
import StepsProgress from "./../../DS/steps-progress";
import {
  Brain,
  Mail,
  WithoutTrail,
  WithTrail,
  EditIcon,
  CompanyIcon,
  SawBadgeIcon,
  GoalInviteIcon,
  GoalViewsIcon,
} from '../../../shared/icons'
import Tag from '../../tag/index'
import AvatarWithInfo from '../AvatarWithInfo/index'
import Button from '@components/buttons'
import { IBannerProgressTranslate } from './BannerProblem'
import style from './BannerProblem.module.css'
import { SpanHeaderTag } from './styles'


export default function BannerProblem(props: IBannerProgressTranslate) {

  const [Idioma, setIdioma] = useState(props.missionIdioma ? props.missionIdioma : 'pt-BR');

  const [Edit, setEdit] = useState(false)
  const [ tagListShow, setTagListShow ] = useState(props.tagData ? props.tagData : [])
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

  // const [selectedTags, setSelectedTags] = useState([{label: '', value:''},{label: '', value:''},{label: '', value:''}]);
  const [selectedTags, setSelectedTags] = useState([
    props.tags && props.tags.length >=1 ? props.tags[0] : '',
    props.tags && props.tags.length >=2 ? props.tags[1] : '',
    props.tags && props.tags.length >=3 ? props.tags[2] : ''
  ]);

  const hasContinueProps = props?.onClickContinue?.name !== 'actionHandler'

  const customStyles = {
    option: (styles, {isFocused, isSelected, isDisabled}) => ({
      ...styles,
      background: isFocused
          ? '	#FFC6B7'            
          : isSelected
              ? '#FF4D0D'
              : undefined,
      color: isFocused  ? '#000' 
           : isSelected ? '#fff'
           : isDisabled ? '#ccc' 
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

  useEffect(()=>{
    setTrilhaId(props.trilhaId ? props.trilhaId : null)
    setTrilhaDescricaoSelecionada(props.trilha ? props.trilha : '')
    setTag1(props.tags && props.tags.length >=1 ? props.tags[0] : '')
    setTag2(props.tags && props.tags.length >=2 ? props.tags[1] : '')
    setTag3(props.tags && props.tags.length >=3 ? props.tags[2] : '')

    setTituloProblema(props.problema ? props.problema : '')
    /// States para controle de elementos do Banner
    setTrilhaBanner(props.trilha ? props.trilha : '')
    setTags(props.tags ? props.tags : [])
  }, [props]);

  useEffect(()=>{
    setIdioma(props.missionIdioma ? props.missionIdioma : 'pt-BR')
  },[props.missionIdioma])

  const handleEdit = () => {
    if(Edit === true) {
      let titleInEditing = TituloProblema;

      (document.getElementById("idEdit-fieldTitleProblem")) && 
      (titleInEditing = document.getElementById("idEdit-fieldTitleProblem").innerText);


      setTituloProblema(titleInEditing)
      setTrilhaBanner(TrilhaDescricaoSelecionada)
      setTags([Tag1, Tag2, Tag3])
      console.log(`Titulo: ${TituloProblema}`)
      props.onClickSave([titleInEditing, TrilhaDescricaoSelecionada, [Tag1, Tag2, Tag3]])
    }
    setEdit(!Edit)
  };

  useEffect(() => {
    setTagListShow(props.tagData ? filterTagsSelected(props.tagData, [Tag1, Tag2, Tag3]) : [])
  },[Tag1, Tag2, Tag3])

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

  const showChallengeTitle = () => {
    let title = props.textTitleProblem ? props.textTitleProblem : 'Desafio'
    title = props.isVerified ? 'Desafio verificado' : title
    return title
  }

  const [selectedStep, setSelectedStep] = useState(props?.stepActive);
  const [ definedSteps, setDefinedSteps ] = useState(
      getStepsChallenge(Idioma, props?.stepProblem, setSelectedStep, props?.onSelectedStep) || []
  );

  useEffect(() => {
      setDefinedSteps(getStepsChallenge(Idioma, props?.stepProblem, setSelectedStep, props?.onSelectedStep))
  }, [Idioma, props.stepProblem, props.onSelectedStep])

  useEffect(() => {
      setSelectedStep(props.stepActive)
  },[props.stepActive])

  const MOBILEWIDTH = 650;

  return (

    <>    
      <div className={style.container} style={{...props.style }}>
        {props.topHeaderTagText &&
          <SpanHeaderTag background={props.topHeaderTagBgColor} color={props.topHeaderTagColor}>
              {props.topHeaderTagText}
          </SpanHeaderTag>
        }
        <div style={{width: '100%', display: 'flex', justifyContent:'space-between', flexDirection: 'row', alignItems:'center'}}>
          <span className={style.titleProblem}>
            {showChallengeTitle()}
            {props.isVerified &&
              <Tooltip
                direction="bottom"
                content={props.verifiedTooltipContent}
                trigger='hover'
                width='361px'
                height='54px'
                style={{ top: '10px', textAlign: 'center' }}
              >
                <SawBadgeIcon/>
              </Tooltip>
            }
          </span>
          {
            props.isEditable &&
            <Button 
              label={Edit ? (props.textButtonLinkEditSave ? props.textButtonLinkEditSave : "Salvar Alterações"): (props.textButtonLinkEdit ? props.textButtonLinkEdit : "Editar")}
              variant='link' 
              handleClick={() => handleEdit()}
              startIcon={<EditIcon />}
            />
          }
        </div>
        {
          Edit ?
            <div
            style={{
              marginTop: '8px',
              marginBottom: '8px',
              backgroundColor: 'rgb(242, 242, 242)',
              border: '1px solid rgb(189, 189, 189)',
              borderRadius: '8px',
              padding: '24px 16px',
              width: '100%'
            }}>
              <div
                id={"idEdit-fieldTitleProblem"}
                data-gramm="false" 
                contentEditable="true" 
                role="textbox" 
                aria-multiline="true"
                suppressContentEditableWarning={true}
                style={{              
                  fontStyle: 'normal',
                  fontWeight: '600',
                  fontSize: '32px',
                  textAlign: 'left',
                  display: 'flex',
                  width: '100%',
                  color: '#FF4D0D',
                  backgroundColor: 'rgb(242, 242, 242)',
                  border: 'none',
                  wordBreak: 'break-word',
                }}
                >
                  {TituloProblema}
              </div>
            </div>
          :
            <h1 className={style.description}>{TituloProblema}</h1>

        }
        <div style={{display: 'flex', justifyContent: 'space-between', position: 'relative', width: '100%', borderBottom: '1px solid #CCCCCC'}}>
          <div style={{display: 'inline-flex', width: '100%'}}>
            <div style={{width:'100%', maxWidth: 600}}>
              <div style={{display: 'flex', flexDirection: 'column', width: 'fit-content', paddingTop: '16px'}}>
                <span className={style.created}>{props.dataCriacao}</span>
                <AvatarWithInfo cargo={props.cargo} nomeCompleto={props.nome} fotoAvatar={props.avatar} style={{marginBottom: 8, marginTop:24}} />
              </div>
              <TextIcon description={props.area} svg={<Brain />}/>
              
              {props.company && <TextIcon style={{width: '80%'}} description={props.company} svg={<CompanyIcon />} />}

              <TextIcon description={adapterEmail(props.email, size[0])} svg={<Mail />}/>
              {
                Edit && props.isVisibleEditTrail ? 
                <>
                  <div style={{marginTop: 12, backgroundColor: '#F2F2F2', borderWidth: 1, borderRadius: 4, padding: '24px 16px 24px 16px', border: '1px solid #BDBDBD'}}>
                    <h3 style={{marginBottom: 12, textAlign: 'left', width: '100%', fontSize: 16}}>{props.textTrailLabel ? props.textTrailLabel : 'Deseja vincular este novo problema a uma Trilha de Aprendizagem?'}</h3>
                    <Select 
                      id={"select"}
                      styles={customStyles}
                      options={props.trilhaData ? props.trilhaData : []} 
                      value={props.trilhaData.filter(function(temp) {return temp.value === TrilhaId})} 
                      placeholder={props.placeholderSelectTrail ? props.placeholderSelectTrail : 'Selecione uma trilha'}    
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
                    <TextIcon description={props.textIconDescription ? props.textIconDescription : 'Ainda não está vinculado a uma trilha'} svg={<WithoutTrail />}/> 
                  :
                    <TextIcon description={TrilhaBanner} svg={<WithTrail />}/>   
                }
                </>
              }
              
              <div style={{ marginTop: 16, marginBottom: 26, maxWidth: !Edit ? '400px': '100%'}}>
                {
                  Edit && props.isVisibleEditTags ? 
                  <>
                    <div className={style.contentInput}>
                      <h3 style={{marginBottom: 12, textAlign: 'left', width: '100%', fontSize: 16}}>{props.textContentInput ? props.textContentInput : 'Busque e selecione até três palavras-chave:'}</h3>
                      
                      <Select 
                        id={"select"}
                        styles={customStyles}
                        options={tagListShow}
                        value={tagListShow.filter(function(temp) {return temp.value === Tag1})} 
                        placeholder={props.placeholderSelectTag ? props.placeholderSelectTag : 'Selecione uma Tag'}    
                        onChange={e => {setTag1(e.value) }}
                      /> 
                      <Select 
                        id={"select"}
                        styles={customStyles}
                        options={tagListShow}
                        value={tagListShow.filter(function(temp) {return temp.value === Tag2})} 
                        placeholder={props.placeholderSelectTag ? props.placeholderSelectTag : 'Selecione uma Tag'}    
                        onChange={e => {setTag2(e.value)}}               
                      />       
                      <Select 
                        id={"select"}
                        styles={customStyles}
                        options={tagListShow}
                        value={tagListShow.filter(function(temp) {return temp.value === Tag3})} 
                        placeholder={props.placeholderSelectTag ? props.placeholderSelectTag : 'Selecione uma Tag'}    
                        onChange={e => {setTag3(e.value)}}
                      />                       
                    </div>
                  </>
                  :
                  <>
                      {
                        Tags?.map((item, key) => (
                          item &&
                           <Tag title={item} style={{ color: '#000 !important', marginRight: 8, marginTop: 8 }} color={"#E4E1FF"} selected={false} inverted={false} key={key}/>  
                        ))
                      }
                  </>
                }

              </div>
              { size[0] <= MOBILEWIDTH || Edit ? 
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', flexWrap: 'wrap', width: '100%'}} >
                    <Rating 
                      titulo={props.ratingTitleImpact ? props.ratingTitleImpact : 'Impacto'}
                      descricaoAvaliacao={props.descriptionImpacto}
                      qtdeAvaliacao={props.qtdeAvaliacao}
                      nota={props.notaAvaliacao}
                      tipoVisualizacao={1}
                      style={{margin: 0}}
                      nomeAvaliacao={props.ratingLikesEvaluation ? props.ratingLikesEvaluation : 'avaliação'}
                    />
                    <Rating 
                      titulo={props.ratingTitleRelevance ? props.ratingTitleRelevance : 'Relevância'}
                      descricaoAvaliacao={props.descriptionRelevancia}
                      qtdeAvaliacao={props.qtdeRelevancia}
                      nota={props.notaRelevancia}
                      tipoVisualizacao={1}
                      style={{margin: 0}}
                      nomeAvaliacao={props.ratingLikesEvaluation ? props.ratingLikesEvaluation : 'avaliação'}
                    />            
                    {props.curtidas &&
                      <RatingCurtidas 
                        titulo={props.ratingTitleLikes ? props.ratingTitleLikes : 'Curtidas'}
                        qtdeCurtidas={props.curtidas}
                        tipoBotao={2}
                        style={{margin:0}}
                        descricaoCurtida={props.ratingLikesDescription ? props.ratingLikesDescription : 'pessoas'}
                      />
                    }
                  </div>
                : null
              }
              <div style={{display: 'flex', flexDirection: 'row', gap: '32px'}}>
                {props.showButtonInvite &&
                    <Button
                      variant='link'
                      label={props.textGoalInviteBtn}
                      startIcon={
                        <div style={{width: '26px', marginBottom:'-2px', marginRight: '8px'}}>
                          <GoalInviteIcon width='26px' height='26px'/>
                        </div>
                      }
                      handleClick={props.onClickMessage}
                      style={{paddingTop: '0px', paddingBottom: '16px'}}
                    />
                }
                {props.showButtonViews &&
                    <Button
                      variant='link'
                      label={props.textGoalViewsBtn}
                      startIcon={
                        <div style={{width: '20px', marginBottom:'-1px', marginRight: '8px'}}>
                          <GoalViewsIcon width='20px'/>
                        </div>
                      }
                      handleClick={props.onClickViewsBtn}
                      style={{paddingTop: '0px', paddingBottom: '16px'}}
                    />
                }
              </div>
            </div>

            { size[0] > MOBILEWIDTH && Edit === false ?
              <div style={{position: 'absolute', right: 0, flexFlow: 'column', justifyContent: 'flex-end', width: '20%'}} id='avaliations-banner-problem'>
                <Rating 
                  titulo={props.ratingTitleImpact ? props.ratingTitleImpact :'Impacto'}
                  descricaoAvaliacao={props.descriptionImpacto}
                  qtdeAvaliacao={props.qtdeAvaliacao}
                  nota={props.notaAvaliacao}
                  tipoVisualizacao={1}
                  nomeAvaliacao={props.ratingLikesEvaluation ? props.ratingLikesEvaluation : 'avaliação'}
                />
                <Rating 
                  titulo={props.ratingTitleRelevance ? props.ratingTitleRelevance : 'Relevância'}
                  descricaoAvaliacao={props.descriptionRelevancia}
                  qtdeAvaliacao={props.qtdeRelevancia}
                  nota={props.notaRelevancia}
                  tipoVisualizacao={1}
                  nomeAvaliacao={props.ratingLikesEvaluation ? props.ratingLikesEvaluation : 'avaliação'}
                />            
                {props.curtidas &&
                  <RatingCurtidas 
                    titulo={props.ratingTitleLikes ? props.ratingTitleLikes : 'Curtidas'}
                    qtdeCurtidas={props.curtidas}
                    tipoBotao={2}
                    descricaoCurtida={props.ratingLikesDescription ? props.ratingLikesDescription : 'pessoas'}
                  />
                }
              </div> 
              : null
            }       
          </div>
        </div>
        
        {/* <StepMission 
          stepProblem={props.stepProblem}
          stepActive={props.stepActive}
          onClickContinue={hasContinueProps ? props.onClickContinue : null}
          onSelected={(step: number)=>{
            props.onSelectedStep(step)
          }}
          idioma={Idioma}
          
        /> */}
        <div  style={{ width:'100%', display: 'flex', flexDirection: 'column'}}>
          <div style={{ marginTop:'20px'}}>
            <ButtonsProcessSteps 
                idioma={Idioma}
                definedSteps={props?.stepProblem}
                selectedStep={selectedStep}
                setSelectedStep={(e) => {
                  setSelectedStep(e)
                  props?.onSelectedStep(e)
                }}
                onClickContinue={() => props.onClickContinue()}
            />
          </div>
          <div  style={{ width:'100%', paddingLeft: '5%', paddingRight: '5%', paddingTop: '30px'}}>
            <StepsProgress
                definedSteps={definedSteps}
                stepSelected={selectedStep}
            />
          </div>
            {/* <Button
                handleClick={() => {}}
                label={'Continue'}
                variant="link"
                // endIcon={<FowardArrow fill="#fff" />}
                style={{ height: '40px'}}
              /> */}
        </div>
        <div style={{marginTop: 18, width: '100%', borderRadius: 8, border: '1px solid #BDBDBD', padding: 16, paddingLeft: 32, paddingRight: 32}}>
          {props.children}
        </div>        

      </div>
    </>
  )
  
  function adapterEmail(email, widthScreen) {
    let newEmail = email;
    if(widthScreen < 450) {
      let indexBreak = email.indexOf("@");
      newEmail = `${email.slice(0, indexBreak-1)} 
${email.slice(indexBreak)}`
    }
    return newEmail;
  }
  
  function filterTagsSelected(dataOrigin, selectedsTags) {
    let optFiltered = dataOrigin.map((item) => {
      
      if(selectedsTags.includes(item.label)) {
        item.isDisabled = true;
      } else {
        item.isDisabled = false;
      }
      return item;
    });
    
    return optFiltered;
  }

}


function getStepsChallenge(language, stepProblem, setSelectedStep, onSelectedStep) {
  let translate = {
      "pt-BR": [ "Definição", "Hipóteses", "Testes", "Resultados", "Próximos Passos" ],
      "es":    [ "Definición", "Hipótesis", "Pruebas", "Resultados", "Próximos pasos" ],
      "en-US": [ "Definition", "Hypotheses", "Tests", "Results", "Next Steps" ],
      "pt-PT": [ "Definição", "Hipóteses", "Testes", "Resultados", "Próximos Passos" ],
  };

  let steps = [
      { step: 1, active: false, name: translate[language][0], action: () => { 
          onSelectedStep(1);
          setSelectedStep(1);
      }},
      { step: 2, active: false, name: translate[language][1], action: () => { 
          onSelectedStep(2);
          setSelectedStep(2);
      }},
      { step: 3, active: false, name: translate[language][2], action: () => { 
          onSelectedStep(3);
          setSelectedStep(3);
      }},
      { step: 4, active: false, name: translate[language][3], action: () => { 
          onSelectedStep(4);
          setSelectedStep(4);
      }},
      { step: 5, active: false, name: translate[language][4], action: () => { 
          onSelectedStep(5);
          setSelectedStep(5);
      }},
  ];
  let maxStep = Math.min(stepProblem, steps.length);

  for (let i = 0; i < maxStep; i++) {
      steps[i].active = true;
  }
  return steps;

}

function ButtonsProcessSteps({selectedStep, definedSteps, setSelectedStep, idioma, onClickContinue}) {
  const [anhorsBtn, setAnchorsBtn ] = useState(getTranslateBtnNextPrevSteps()['pt-BR']);

  useEffect(() => {
    try {
        setAnchorsBtn(getTranslateBtnNextPrevSteps()[idioma]);
    } catch(e) {
      setAnchorsBtn(getTranslateBtnNextPrevSteps()['pt-BR']);
    }
  }, [idioma])
  return <>
    { selectedStep == 1 && definedSteps > 1 &&    
      <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
        <Button
          handleClick={() => setSelectedStep(2)}
          label={anhorsBtn.next}
          variant="link"
          style={{ height: '40px'}}/>
      </div>
    }
    { selectedStep > 1 && selectedStep < definedSteps &&
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between'}}>
        <Button
          handleClick={() => setSelectedStep(selectedStep - 1)}
          label={anhorsBtn.previous}
          variant="link"
          style={{ height: '40px'}}/>
        <Button
          handleClick={() => setSelectedStep(selectedStep + 1)}
          label={anhorsBtn.next}
          variant="link"
          style={{ height: '40px'}}/>
      </div>
    }
    { selectedStep == definedSteps && definedSteps != 5 &&
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between'}}>
        <Button
          handleClick={() => setSelectedStep(selectedStep - 1)}
          label={anhorsBtn.previous}
          variant="link"
          style={{ height: '40px'}}/>
        <Button
          handleClick={() => onClickContinue()}
          label={anhorsBtn.continueChallenge}
          variant="primary"
          style={{ height: '40px'}}/>
      </div>
    }
    { selectedStep == definedSteps && definedSteps == 5 &&
      <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start'}}>
        <Button
          handleClick={() => setSelectedStep(selectedStep - 1)}
          label={anhorsBtn.previous}
          variant="link"
          style={{ height: '40px'}}/>
        </div>
    }
  </>
}

function getTranslateBtnNextPrevSteps() {
  const traducaoPTBR = {
    next: "Ver fase seguinte >",
    nextShort: "Próx. >",
    previous: "< Ver fase anterior",
    previousShort: "< Ant.",
    continueChallenge: "Continuar desafio"
  }

  const traducaoES = {
    next: "Ver fase siguiente >",
    nextShort: "Próx. >",
    previous: "< Ver fase anterior",
    previousShort: "< Ant.",
    continueChallenge: "Continuar desafío"
  }

  const traducaoENUS = {
    next: "View next phase >",
    nextShort: "Next >",
    previous: "< View previous phase",
    previousShort: "< Previous",
    continueChallenge: "Continue challenge"
  }

  const traducaoPT = {
    next: "Ver fase seguinte >",
    nextShort: "Próx. >",
    previous: "< Ver fase anterior",
    previousShort: "< Ant.",
    continueChallenge: "Continuar desafio"
  }

  return {
    "pt-BR": traducaoPTBR,
    "es": traducaoES,
    "en-US": traducaoENUS,
    "pt-PT": traducaoPT
  }
}