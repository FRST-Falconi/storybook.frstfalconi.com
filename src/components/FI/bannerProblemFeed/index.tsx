import { FRSTTheme } from "../../../theme";
import { ThemeProvider } from "styled-components";
import * as Styles from './bannerProblemFeedStyles'
import Avatar from "@components/avatar";
import Tag from "@components/tag";
import MissionSteps from "@components/cardLT/StepsMission/StepMission";
import { useState } from "react";
import Slider from '@mui/material/Slider';
import { withStyles } from '@material-ui/styles';
import Button from "@components/buttons";
import * as Icons from '@shared/icons'
import FeedInteraction from "../feedInteraction";

interface IBannerProblemFeed extends stepsInfo{
    id : string
    userAvatar ?: string
    userName : string
    userPosition : string
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

/** -------------------------------------------------------------------------------- 
*   Interaction Feed params 
-----------------------------------------------------------------------------------*/
 
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
    userCommentPlaceholder: string
    textLatestComment: string
    latestComment: any

    onCommentChange ?: () => void
    handleLikeClick ?: () => void
    handleImpactoChange?: any
    handleRelevanciaChange?: any
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

    const CustomSlider = withStyles({
        root: {
            color: "#FF4D0D",
            height: 3,
            padding: "13px 0",
        },
        track: {
            color: "#FF4D0D",
        },
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
                                <div style={{width: '100%'}}>
                                    <CustomSlider
                                        value={props.successTestValue}
                                        min={1}
                                        max={5}
                                        marks={marks}
                                    />
                                </div>

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
                <Styles.achievementHeader>
                    <img
                        src={props.mainAchievementValue ? achievementIcon : learningIcon} 
                        width= '56'
                        height= '56'
                    />
                    <span style={{marginLeft: 16, wordBreak: 'break-all', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical'}}>
                        {props.mainAchievementValue ? props.mainAchievementValue : props.mainLearningValue}
                    </span>
                </Styles.achievementHeader>
                : null
            }
            <Styles.bannerContainer>
                <Styles.headerContent>
                    <Avatar size="40px" src={props.userAvatar} />
                    <Styles.userInfo>
                        <span style={{fontWeight: 600, fontSize: 20}}>{props.userName}</span>
                        <span style={{fontWeight: 400, fontSize: 16}}>{props.userPosition}</span>
                    </Styles.userInfo>
                </Styles.headerContent>
                <Styles.problemTitle> {props.problemTitle} </Styles.problemTitle>
                <Styles.tagContent>
                    {
                        props.problemTags?.map((item,index) => (
                            item &&
                                <Tag title={item} color={FRSTTheme['colors'].neutralsGrey1} selected={false} inverted={false} key={index} />
                        ))
                    }
                </Styles.tagContent>
                <Styles.lastUpdatedText>
                    <span style={{fontWeight: 700}}>{props.lastUpdated}:</span>
                    <span>&nbsp;{props.lastUpdatedStep}</span>
                </Styles.lastUpdatedText>
                <div style={{width:'100%', marginTop: 16, borderTop: `1px solid ${FRSTTheme['colors'].borderPrimary}`}}>

                    <MissionSteps
                        stepProblem={props.stepProblem}
                        stepActive={props.stepActive}
                        onSelected={(step: number) => {
                            props.onSelectedStep(step)
                            setSelectedStep(step)
                        }} 
                        idioma={props.language}
                    />
                </div>
                
                <RenderSteps />
                
                <Button
                    label={props.textButton} 
                    variant='expandedPrimary' 
                    handleClick={props.onClickButton} 
                    startIcon={<Icons.AddIcon fill={FRSTTheme['colors'].shadeWhite} />} 
                />

            </Styles.bannerContainer>
            <FeedInteraction
                isChallengeReview={true}
                id={props.id}
                isLiked={props.isLiked}
                qtdComments={props.qtdComments}
                qtdLikes={props.qtdLikes}
                textAvaluation={props.textAvaluation}
                textAvaluationTitle={props.textAvaluationTitle}
                textComments={props.textComments}
                textDeslike={props.textDeslike}
                textLikes={props.textLikes}
                latestComment={props.latestComment}
                textLatestComment={props.textLatestComment} 
                textImpacto={props.textImpacto}
                ratingImpacto={props.ratingImpacto}
                textRelevancia={props.textRelevancia}
                ratingRelevancia={props.ratingRelevancia}
                userCommentPlaceholder={props.userCommentPlaceholder}
                onCommentChange={props.onCommentChange}
                handleLikeClick={props.handleLikeClick}
                handleImpactoChange={props.handleImpactoChange}
                handleRelevanciaChange={props.handleRelevanciaChange}
            />
        </ThemeProvider>
    )
}