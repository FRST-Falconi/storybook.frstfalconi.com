import React from 'react'

import * as Icons from './shared/icons'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Icons',
  component: IconsStories,
}


function IconsStories(props: any) {
  return (
    <div>
      {props.children}
    </div>
  )
}

const Template = (args) => <IconsStories >{args} </IconsStories>

export const BackArrow = Template.bind({})
BackArrow.args = Icons.BackArrow({})

export const Trash = Template.bind({})
Trash.args = Icons.Trash({})

export const ChangeAccount = Template.bind({})
ChangeAccount.args = Icons.ChangeAccount({})

export const CheckboxChecked = Template.bind({})
CheckboxChecked.args = Icons.CheckboxChecked({})

export const CheckboxEmpty = Template.bind({})
CheckboxEmpty.args = Icons.CheckboxEmpty({})

export const DownloadIcon = Template.bind({})
DownloadIcon.args = Icons.DownloadIcon({})

export const DropdownIconWhite = Template.bind({})
DropdownIconWhite.args = Icons.DropdownIconWhite({})

export const DropdownSideIconWhite = Template.bind({})
DropdownSideIconWhite.args = Icons.DropdownSideIconWhite({})

export const EditIcon = Template.bind({})
EditIcon.args = Icons.EditIcon({})

export const ExitArrow = Template.bind({})
ExitArrow.args = Icons.ExitArrow({})

export const FRSTLogo = Template.bind({})
FRSTLogo.args = Icons.FRSTLogo({})

export const FRSTLogoBig = Template.bind({})
FRSTLogoBig.args = Icons.FRSTLogoBig({})

export const WarningIcon = Template.bind({})
WarningIcon.args = Icons.WarningIcon({})

export const WhiteFilter = Template.bind({})
WhiteFilter.args = Icons.WhiteFilter({})

export const AlertCicle = Template.bind({})
AlertCicle.args = Icons.AlertCicle({})

export const WithoutTrail = Template.bind({})
WithoutTrail.args = Icons.WithoutTrail({})

export const Mail = Template.bind({})
Mail.args = Icons.Mail({})

export const Brain = Template.bind({})
Brain.args = Icons.Brain({})

export const WithTrail = Template.bind({})
WithTrail.args = Icons.WithTrail({})

export const RocketIcon = Template.bind({})
RocketIcon.args = Icons.RocketIcon({})

export const SmileOutlined = Template.bind({})
SmileOutlined.args = Icons.SmileOutlined({})

export const CheckInCicle = Template.bind({})
CheckInCicle.args = Icons.CheckInCicle({})

export const ArrowScrollLeft = Template.bind({})
ArrowScrollLeft.args = Icons.ArrowScrollLeft({})

export const ArrowScrollRight = Template.bind({})
ArrowScrollRight.args = Icons.ArrowScrollRight({})

export const CloseIcon = Template.bind({})
CloseIcon.args = Icons.CloseIcon({})

export const SaveIcon = Template.bind({})
SaveIcon.args = Icons.SaveIcon({})

export const CopyPaste = Template.bind({})
CopyPaste.args = Icons.CopyPaste({})

export const Channel = Template.bind({})
Channel.args = Icons.Channel({})

export const Share = Template.bind({})
Share.args = Icons.Share({})

export const Cam = Template.bind({})
Cam.args = Icons.Cam({})

export const Content = Template.bind({})
Content.args = Icons.Content({})

export const Certificate = Template.bind({})
Certificate.args = Icons.Certificate({})

export const Quiz = Template.bind({})
Quiz.args = Icons.Quiz({})

export const File = Template.bind({})
File.args = Icons.File({})

export const Link = Template.bind({})
Link.args = Icons.Link({})

export const Dollar = Template.bind({})
Dollar.args = Icons.Dollar({})

export const PodCast = Template.bind({})
PodCast.args = Icons.PodCast({})

export const WhitePaper = Template.bind({})
WhitePaper.args = Icons.WhitePaper({})

export const QuizSucessError = Template.bind({})
QuizSucessError.args = Icons.QuizSucessError({})

export const Code = Template.bind({})
Code.args = Icons.Code({})

export const BarChart = Template.bind({})
BarChart.args = Icons.BarChart({})

export const Course = Template.bind({})
Course.args = Icons.Course({})

export const Palette = Template.bind({})
Palette.args = Icons.Palette({})

export const MoreVertical = Template.bind({})
MoreVertical.args = Icons.MoreVertical({})

export const MoreHorizontal = Template.bind({})
MoreHorizontal.args = Icons.MoreHorizontal({})

export const UploadIcon = Template.bind({})
UploadIcon.args = Icons.UploadIcon({})

export const Video = Template.bind({})
Video.args = Icons.Video({})

export const Noun = Template.bind({})
Noun.args = Icons.Noun({})

export const EyeOff = Template.bind({})
EyeOff.args = Icons.EyeOff({})

export const AddIcon = Template.bind({})
AddIcon.args = Icons.AddIcon({})

export const Handshake = Template.bind({})
Handshake.args = Icons.Handshake({})

export const Mission = Template.bind({})
Mission.args = Icons.Mission({})

export const Lamp = Template.bind({})
Lamp.args = Icons.Lamp({})

export const IconNotification = Template.bind({})
IconNotification.args = Icons.IconNotification({})

export const SiteIcon = Template.bind({})
SiteIcon.args = Icons.SiteIcon({})

export const LinkedinIcon = Template.bind({})
LinkedinIcon.args = Icons.LinkedinIcon({})

export const InstagramIcon = Template.bind({})
InstagramIcon.args = Icons.InstagramIcon({})

export const YoutubeIcon = Template.bind({})
YoutubeIcon.args = Icons.YoutubeIcon({})

export const SpotifyIcon = Template.bind({})
SpotifyIcon.args = Icons.SpotifyIcon({})

export const PodCastIcon = Template.bind({})
PodCastIcon.args = Icons.PodCastIcon({})

export const CalendarIcon = Template.bind({})
CalendarIcon.args = Icons.CalendarIcon({})

export const WriteIcon = Template.bind({})
WriteIcon.args = Icons.WriteIcon({})

export const HomeIcon = Template.bind({})
HomeIcon.args = Icons.HomeIcon({})

export const PlayFilledIcon = Template.bind({})
PlayFilledIcon.args = Icons.PlayFilledIcon({})

export const PlayLineIcon = Template.bind({})
PlayLineIcon.args = Icons.PlayLineIcon({})

export const MedalFilledIcon = Template.bind({})
MedalFilledIcon.args = Icons.MedalFilledIcon({})

export const MedalLineIcon = Template.bind({})
MedalLineIcon.args = Icons.MedalLineIcon({})

export const LampFilledIcon = Template.bind({})
LampFilledIcon.args = Icons.LampFilledIcon({})

export const LampLineIcon = Template.bind({})
LampLineIcon.args = Icons.LampLineIcon({})

export const PencilFilledIcon = Template.bind({})
PencilFilledIcon.args = Icons.PencilFilledIcon({})

export const PencilLineIcon = Template.bind({})
PencilLineIcon.args = Icons.PencilLineIcon({})

export const CalendarFilledIcon = Template.bind({})
CalendarFilledIcon.args = Icons.CalendarFilledIcon({})

export const CalendarLineIcon = Template.bind({})
CalendarLineIcon.args = Icons.CalendarLineIcon({})

export const HomeFilledIcon = Template.bind({})
HomeFilledIcon.args = Icons.HomeFilledIcon({})

export const HomeLineIcon = Template.bind({})
HomeLineIcon.args = Icons.HomeLineIcon({})

export const RocketButton = Template.bind({})
RocketButton.args = Icons.RocketButton({})

export const StarRating = Template.bind({})
StarRating.args = Icons.StarRating({})

export const StarOutlined = Template.bind({})
StarOutlined.args = Icons.StarOutlined({})

export const TalkIcon = Template.bind({})
TalkIcon.args = Icons.TalkIcon({})

export const ThumbsUpIcon = Template.bind({})
ThumbsUpIcon.args = Icons.ThumbsUpIcon({})

export const ThumbsUpCovered = Template.bind({})
ThumbsUpCovered.args = Icons.ThumbsUpCovered({})

export const StepCicleOne = Template.bind({})
StepCicleOne.args = Icons.StepCicleOne({})

export const StepCheckInCicle = Template.bind({})
StepCheckInCicle.args = Icons.StepCheckInCicle({})

export const StepCicleTwo = Template.bind({})
StepCicleTwo.args = Icons.StepCicleTwo({})

export const StepCicleThree = Template.bind({})
StepCicleThree.args = Icons.StepCicleThree({})

export const StepCicleFour = Template.bind({})
StepCicleFour.args = Icons.StepCicleFour({})

export const FowardArrow = Template.bind({})
FowardArrow.args = Icons.FowardArrow({})