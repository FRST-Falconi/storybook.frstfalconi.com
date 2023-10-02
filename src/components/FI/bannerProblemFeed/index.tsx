import { FRSTTheme } from "../../../theme";
import { ThemeProvider } from "styled-components";
import * as Styles from './bannerProblemFeedStyles'
import Avatar from "@components/avatar";
import Tag from "@components/tag";
import MissionSteps from "@components/cardLT/StepsMission/StepMission";
import StepsProgress from "@components/DS/steps-progress";
import { useState, useEffect } from "react";
import Slider from '@mui/material/Slider';
import { withStyles } from '@material-ui/styles';
import Button from "@components/buttons";
import * as Icons from '@shared/icons'
import FeedInteraction from "../feedInteraction";
import Tooltip from "@components/DS/tooltip";


interface IBannerProblemFeed extends stepsInfo{
    id : string
    onClickUserInfo?: () => void
    textVisitProfile ?: string
    userAvatar ?: string
    userName : string
    userPosition : string
    userCompany ?: string
    problemTitle : string
    problemTags ?: []

    lastUpdated ?: string
    lastUpdatedStep ?: string

    stepProblem : number
    stepActive : number

    textButton : string

    onClickButton : () => void
    onSelectedStep : (step : number) => void

    language : 'pt-BR' | 'pt-PT' | 'en-US' | 'es' 

    isSuccessCase ?: boolean

/** -------------------------------------------------------------------------------- 
*   Interaction Feed params 
-----------------------------------------------------------------------------------*/
    avatar?: string
    qtdLikes: string
    qtdComments: string
    textLikes: string
    textDeslike: string
    textComments: string
    textAvaluation: string
    isLiked: boolean
    textAvaluationTitle: string
    ratingImpacto: number
    textImpacto: string
    ratingRelevancia: number
    textRelevancia: string
    // userCommentPlaceholder: string
    // textLatestComment: string
    // latestComment: any
    // textSaveCommentBtn: string
    // handleSaveCommentBtn?: () => any

    isDisabledAvaluation ?: boolean,

    // onCommentChange ?: () => void
    handleLikeClick ?: () => void
    handleImpactoChange?: any
    handleRelevanciaChange?: any,

    topHeaderTagColor?: string
    topHeaderTagBgColor?: string
    topHeaderTagText?: string

    textTotalView?: string
    handleClickTextTotalViews?: () => void
    
    isCommentV2?: boolean
    childrenCommentV2?: any
    hideInteraction?: boolean
}

interface stepsInfo{
/**
 * Step 1 info
 */
    step1Title ?: string
    textIndicator ?: string
    indicatorValue ?: string
    textIndicatorSituation ?: string
    indicatorSituationValue ?: string
    textIndicatorObjective ?: string
    indicatorObjectiveValue ?: string
    textResultsFuture ?: string
    resultsFutureValue ?: string
/**--------------------------------------------------------
 * Step 2 info
 */
    step2Title ?: string
    textHypotheses ?: string
    hypothesesValue ?: string
    textResponsableAction ?: string
    ResponsableActionValue ?: string
    textDate ?: string
    dateValue ?: string
    textWhatToDo ?: string
    whatToDoValue ?: string
    textSuccessAction ?: string
    successActionValue ?: string
/**------------------------------------------------------------
 * Step 3 info
 */
    step3Title ?: string
    textTestMade ?: string
    testMadeValue ?: string
    textSuccessTest ?: string
    successTestValue ?: number
    textDownloadFiles ?: string
    handleDownloadFiles ?: () => void
/**------------------------------------------------------------
 * Step 4 info
 */
    step4Title ?: string
    textMainAchievement ?: string
    mainAchievementValue ?: string
    textMainLearning ?: string
    mainLearningValue ?: string
/**-------------------------------------------------------------
 * Step 5 info
 */
    step5Title ?: string
    textNextSteps ?: string
    nextStepsValue ?: string

}


export default function BannerProblemFeed(props : IBannerProblemFeed){
    const [selectedStep, setSelectedStep] = useState(props.stepActive);
    const learningIcon = 'https://i.gyazo.com/4e0807b581bf9780f07a27516a809a21.png'
    const achievementIcon = 'https://i.gyazo.com/9b192733f4947946a3f47080ae12727f.png'

    // const [stateLatestComment, setStateLatestComment] = useState(props.latestComment)
    // useEffect(() => {
    //     setStateLatestComment(props.latestComment)
    // }, [props.latestComment]);
    const [stateTotalComments, setStateTotalComments] = useState(props.qtdComments)
    useEffect(()=>{
        setStateTotalComments(props.qtdComments)
    }, [props.qtdComments])

    const [ definedSteps, setDefinedSteps ] = useState(
        getStepsChallenge(props.language, props.stepProblem, setSelectedStep, props.onSelectedStep) || []
    );
    
    useEffect(() => {
        setDefinedSteps(getStepsChallenge(props.language, props.stepProblem, setSelectedStep, props.onSelectedStep))
    }, [props.language, props.stepProblem, props.onSelectedStep])

    useEffect(() => {
        setSelectedStep(props.stepActive)
    },[props.stepActive])
    

    const CustomSlider = withStyles({
        root: {
            color: "#FF4D0D",
            height: 3,
            padding: "13px 0",
        },
        track: {
            color: "#FF4D0D",
        },
        disabled: {
            color: '#FF4D0D',
        }
    })(Slider);
    const marks = [
        {
            value: 1,
            label: '1'
        },
        {
            value: 2,
            label: '2'
        },
        {
            value: 3,
            label: '3'
        },
        {
            value: 4,
            label: '4'
        },
        {
            value: 5,
            label: '5'
        }
    ]
    
    const RenderSteps = () => {
        return(
            <>
                {selectedStep === 1 ?
                    <Styles.stepsContainer>
                        <Styles.stepsTitle>{props.step1Title}</Styles.stepsTitle>

                        <Styles.stepsLabel>{props.textIndicator}:</Styles.stepsLabel>
                        <Styles.stepsValueText>{props.indicatorValue}</Styles.stepsValueText>

                        <Styles.stepsLabel>{props.textIndicatorSituation}:</Styles.stepsLabel>
                        <Styles.stepsValueText>{props.indicatorSituationValue}</Styles.stepsValueText>

                        <Styles.stepsLabel>{props.textIndicatorObjective}:</Styles.stepsLabel>
                        <Styles.stepsValueText>{props.indicatorObjectiveValue}</Styles.stepsValueText>

                        <Styles.stepsLabel>{props.textResultsFuture}:</Styles.stepsLabel>
                        <Styles.stepsValueText>{props.resultsFutureValue}</Styles.stepsValueText>

                    </Styles.stepsContainer>
                    
                    : selectedStep === 2 ?
                        <Styles.stepsContainer>
                            <Styles.stepsTitle>{props.step2Title}</Styles.stepsTitle>

                            <Styles.stepsLabel style={{color: FRSTTheme['colors'].primary1}} >{props.textHypotheses}:</Styles.stepsLabel>
                            <Styles.stepsValueText>{props.hypothesesValue}</Styles.stepsValueText>

                            <Styles.stepsLabel style={{color: FRSTTheme['colors'].primary1}} > {props.language === 'en-US' ? 'Action 1' : 'Ação 1'} </Styles.stepsLabel>

                            <Styles.stepsLabel>{props.textResponsableAction}:</Styles.stepsLabel>
                            <Styles.stepsValueText>{props.ResponsableActionValue}</Styles.stepsValueText>
                            
                            <Styles.stepsLabel>{props.textDate}:</Styles.stepsLabel>
                            <Styles.stepsValueText>{props.dateValue}</Styles.stepsValueText>
                            
                            <Styles.stepsLabel>{props.textWhatToDo}:</Styles.stepsLabel>
                            <Styles.stepsValueText>{props.whatToDoValue}</Styles.stepsValueText>
                            
                            <Styles.stepsLabel>{props.textSuccessAction}:</Styles.stepsLabel>
                            <Styles.stepsValueText>{props.successActionValue}</Styles.stepsValueText>
                            
                        </Styles.stepsContainer>

                        : selectedStep === 3 ?
                            <Styles.stepsContainer>
                                <Styles.stepsTitle>{props.step3Title}</Styles.stepsTitle>

                                <Styles.stepsLabel style={{color: FRSTTheme['colors'].primary1}} >{props.textTestMade}:</Styles.stepsLabel>
                                <Styles.stepsValueText>{props.testMadeValue}</Styles.stepsValueText>

                                <Styles.stepsLabel>{props.textSuccessTest}:</Styles.stepsLabel>
                                <div style={{width: '100%', marginBottom: 32, marginTop: 12}}>
                                    <CustomSlider
                                        value={props.successTestValue}
                                        min={1}
                                        max={5}
                                        marks={marks}
                                        disabled={true}
                                    />
                                </div>
                                {/* {props.handleDownloadFiles ?
                                    <Button 
                                        variant="link" 
                                        startIcon={<Icons.DownloadIcon fill={'currentColor'} width='24px' height='24' />} 
                                        label={props.textDownloadFiles}
                                        handleClick={props.handleDownloadFiles}
                                    />
                                    : null
                                } */}

                            </Styles.stepsContainer>

                            : selectedStep === 4 ?
                                <Styles.stepsContainer>
                                    <Styles.stepsTitle>{props.step4Title}</Styles.stepsTitle>

                                    {props.textMainAchievement ?
                                        <>
                                            <Styles.stepsLabel style={{color: FRSTTheme['colors'].primary1}} >{props.textMainAchievement}:</Styles.stepsLabel>
                                            <Styles.stepsValueText>{props.mainAchievementValue}</Styles.stepsValueText>
                                        </>
                                        : props.textMainLearning ?
                                        <>
                                            <Styles.stepsLabel style={{color: FRSTTheme['colors'].primary1}} >{props.textMainLearning}:</Styles.stepsLabel>
                                            <Styles.stepsValueText>{props.mainLearningValue}</Styles.stepsValueText>
                                        </>
                                        : null
                                    }
                                </Styles.stepsContainer>

                                : selectedStep === 5 ?
                                    <Styles.stepsContainer>
                                        <Styles.stepsTitle>{props.step5Title}</Styles.stepsTitle>

                                        <Styles.stepsLabel style={{color: FRSTTheme['colors'].primary1}} >{props.textNextSteps}:</Styles.stepsLabel>
                                        <Styles.stepsValueText>{props.nextStepsValue}</Styles.stepsValueText>

                                    </Styles.stepsContainer>

                                    : null
                }
            </>
        )
    }
    
    return(
        <ThemeProvider theme={FRSTTheme}>
            { props.mainAchievementValue || props.mainLearningValue ?
                <Styles.achievementHeader style={{backgroundColor: props.isSuccessCase ? '#444' : '#4B2961' }} >
                    <img
                        src={props.mainAchievementValue ? achievementIcon : learningIcon} 
                        width= '56'
                        height= '56'
                    />
                    <span style={{marginLeft: 16, wordBreak: 'break-word', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical'}}>
                        {props.mainAchievementValue ? props.mainAchievementValue : props.mainLearningValue}
                    </span>
                </Styles.achievementHeader>
                : null
            }
            <Styles.bannerContainer style={{borderTopLeftRadius: props.mainAchievementValue || props.mainLearningValue ? 0 : 8, borderTopRightRadius: props.mainAchievementValue || props.mainLearningValue ? 0 : 8}}>
                {props.topHeaderTagText &&
                    <Styles.topHeaderTag background={props.topHeaderTagBgColor} color={props.topHeaderTagColor}>
                        {props.topHeaderTagText}
                    </Styles.topHeaderTag>
                }
                <Styles.headerContent>
                    { props.onClickUserInfo ? 
                        <Tooltip
                            direction="bottom"
                            content={props.textVisitProfile ? props.textVisitProfile : 'Visitar perfil'}
                            trigger='hover'
                            width='101px'
                            height='32px'
                            style={{ top: '10px', textAlign: 'center' }}
                        >
                            <Avatar 
                                isActiveClick={true}
                                onClick={() => props.onClickUserInfo ? props.onClickUserInfo() : {} }
                                size="54px" 
                                src={props.isSuccessCase ? 'https://i.gyazo.com/e9608cb76d36242de07661bee9da60dd.png' : props.userAvatar}
                            />
                            <Styles.userInfo 
                                onClick={() => props.onClickUserInfo ? props.onClickUserInfo() : {} }
                                style={{cursor: 'pointer'}}
                            >
                                <span style={{fontWeight: 600, fontSize: 20}}>
                                    {props.isSuccessCase ?   
                                        (props.language === 'pt-BR' ?  'Case de sucesso'
                                            : props.language === 'en-US' ? 'Success case'
                                                : props.language === 'es' ? 'Caso de exito'
                                                    : props.language === 'pt-PT' ? 'Case de sucesso'
                                                        : null
                                        )
                                        : props.userName
                                    }
                                </span>
                                <span style={{fontWeight: 400, fontSize: 16}}>{props.userPosition}</span>
                                <span style={{fontWeight: 400, fontSize: 16}}>{props.userCompany}</span>
                            </Styles.userInfo>
                        </Tooltip>
                    :
                        <>
                            <Avatar 
                                size="54px" 
                                src={props.isSuccessCase ? 'https://i.gyazo.com/e9608cb76d36242de07661bee9da60dd.png' : props.userAvatar} />
                            <Styles.userInfo>
                                <span style={{fontWeight: 600, fontSize: 20}}>
                                    {props.isSuccessCase ?   
                                        (props.language === 'pt-BR' ?  'Case de sucesso'
                                            : props.language === 'en-US' ? 'Success case'
                                                : props.language === 'es' ? 'Caso de exito'
                                                    : props.language === 'pt-PT' ? 'Case de sucesso'
                                                        : null
                                        )
                                        : props.userName
                                    }
                                </span>
                                <span style={{fontWeight: 400, fontSize: 16}}>{props.userPosition}</span>
                                <span style={{fontWeight: 400, fontSize: 16}}>{props.userCompany}</span>
                            </Styles.userInfo>
                        </>
                    }

                </Styles.headerContent>
                <Styles.problemTitle> {props.problemTitle} </Styles.problemTitle>
                <Styles.tagContent>
                    {
                        props.problemTags?.map((item,index) => (
                            item &&
                                <Tag style={{ color: '#000 !important' }} title={item} color="#E4E1FF" selected={false} inverted={false} key={index} />
                        ))
                    }
                </Styles.tagContent>
                <Styles.lastUpdatedText>
                    <span style={{fontWeight: 700}}>{props.lastUpdated}:</span>
                    <span>&nbsp;{props.lastUpdatedStep}</span>
                </Styles.lastUpdatedText>
                <div style={{
                    width:'100%', 
                    paddingTop: 30, 
                    paddingBottom: 16, 
                    marginTop: 16, 
                    marginBottom: 4, 
                    borderTop: `1px solid ${FRSTTheme['colors'].borderPrimary}`,
                    display: 'flex', justifyContent:'center'}}
                >
                    <div  style={{ width:'95%'}}>
                        <StepsProgress
                            definedSteps={definedSteps}
                            stepSelected={selectedStep}
                        />
                    </div>
                    {/* <MissionSteps
                        stepProblem={props.stepProblem}
                        stepActive={props.stepActive}
                        onSelected={(step: number) => {
                            props.onSelectedStep(step)
                            setSelectedStep(step)
                        }} 
                        idioma={props.language}
                    /> */}
                </div>
                
                <RenderSteps />
                
                <Button
                    label={props.textButton} 
                    variant='expandedPrimary' 
                    handleClick={() => props.onClickButton()} 
                    // startIcon={<Icons.AddIcon fill={FRSTTheme['colors'].shadeWhite} />} 
                />

            </Styles.bannerContainer>
            {!props.hideInteraction &&
                <FeedInteraction
                    isChallengeReview={true}
                    id={props.id}
                    isLiked={props.isLiked}
                    qtdComments={stateTotalComments}
                    qtdLikes={props.qtdLikes}
                    textAvaluation={props.textAvaluation}
                    textAvaluationTitle={props.textAvaluationTitle}
                    isDisabledAvaluation={props.isDisabledAvaluation}
                    textComments={props.textComments}
                    textDeslike={props.textDeslike}
                    textLikes={props.textLikes}
                    // latestComment={stateLatestComment}
                    // textLatestComment={props.textLatestComment} 
                    textImpacto={props.textImpacto}
                    ratingImpacto={props.ratingImpacto}
                    textRelevancia={props.textRelevancia}
                    ratingRelevancia={props.ratingRelevancia}
                    // userCommentPlaceholder={props.userCommentPlaceholder}
                    // onCommentChange={props.onCommentChange}
                    handleLikeClick={props.handleLikeClick}
                    handleImpactoChange={props.handleImpactoChange}
                    handleRelevanciaChange={props.handleRelevanciaChange}
                    // textSaveCommentBtn={props.textSaveCommentBtn}
                    // handleSaveCommentBtn={props.handleSaveCommentBtn}
                    userAvatar={props.avatar}
                    textTotalView={props.textTotalView}
                    handleClickTextTotalViews={props.handleClickTextTotalViews}
                    
                    isCommentV2={props?.isCommentV2}
                    childrenCommentV2={props?.childrenCommentV2}
                />
            }
        </ThemeProvider>
    )
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
