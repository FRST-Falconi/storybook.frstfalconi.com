import Avatar from '@components/avatar';
import {
    CardContainer,
    CardContent,
    PhasesContent
} from './styles'
import { Box, Typography } from '@mui/material';
import Button from '@components/buttons';

interface mentoringCardProps {
    avatar: string
    first_name: string
    last_name: string
    position: string
    title: string
    subtitle1?: Array<string>
    happenedIn: string
    date: string
    link_recording: string
    handleAvatarClick: () => void
    handleRecordLink: (link: string) => void
}

export default function MentoringCard({
    avatar,
    first_name,
    last_name,
    position,
    title,
    subtitle1,
    happenedIn,
    date,
    link_recording,
    handleAvatarClick,
    handleRecordLink
}: mentoringCardProps) {
    return (
        <CardContainer>
            <CardContent>
                <Box>
                    <Avatar
                        size="67px"
                        src={avatar}
                        isActiveClick
                        onClick={handleAvatarClick}
                        id="avatar-cardSessionConfirmed"
                    />
                </Box>
                <Box>
                    <Typography
                        fontFamily={"PT Sans"}
                        fontWeight={700}
                        color={"#475569"}
                    >
                        {first_name} {last_name}
                    </Typography>
                    <p
                        style={{
                            fontSize: "12px",
                            fontFamily: "PT Sans",
                            fontWeight: 700,
                            color: "#475569",
                            marginBottom: "10.35px",
                            marginTop: "5px",
                        }}
                    >
                        {position}
                    </p>
                    <p
                        style={{
                            fontSize: "12px",
                            fontFamily: "PT Sans",
                            fontWeight: 700,
                            color: "#475569",
                        }}
                    >
                        {title}
                    </p>
                    <PhasesContent>
                        {subtitle1?.map((item, index) => (
                            <div key={index}>{item}</div>
                        ))}
                    </PhasesContent>
                </Box>
            </CardContent>
            <div
                style={{
                    display: "flex",
                    gap: "21px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "6px",
                }}
            >
                <div>
                    <p style={{ fontFamily: "Work Sans", fontSize: "12px" }}>
                        {happenedIn}
                    </p>
                    <p
                        style={{
                            fontFamily: "Work Sans",
                            fontSize: "12px",
                            fontWeight: 700,
                        }}
                        id="date-cardSessionConfirmed-sessionHistory"
                    >
                        {date}
                    </p>
                </div>
                <Button
                    handleClick={() => handleRecordLink(link_recording)}
                    variant="primary"
                    style={{
                        fontSize: "12px",
                        width: "134px",
                        height: "27px",
                        borderRadius: "13.94px",
                    }}
                    label={'Assistir Sessão'}
                    id="watchRecordingBtn-cardSessionConfirmed"
                />
            </div>
        </CardContainer>
    );
}