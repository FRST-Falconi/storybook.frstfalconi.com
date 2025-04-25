import React from 'react';
import styled, { keyframes } from 'styled-components';
import { X, MapPin, Calendar, Clock, FileText } from 'lucide-react';

interface ClassDetails {
  type: string;
  subtitle: string;
  location: string;
  duration: string;
  description: string;
  instructor: string;
  topics: string[];
  additionalInfo?: string;
}

interface EventDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventDate: string;
  eventTime: string;
  classDetails?: ClassDetails;
}

const BlowUpAnimation = keyframes`
  0% { transform: scale(0) }
  100% { transform: scale(1) }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1100;
`;

const ModalContent = styled.div`
  background-color: #1A1A1A;
  border-radius: 16px;
  padding: 24px;
  width: 90%;
  max-width: 776px;
  position: relative;
  animation: ${BlowUpAnimation} 0.3s ease-in-out;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  color: #fff;
  font-family: "Poppins";
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 24px 0;
`;

const Subtitle = styled.h3`
  color: #fff;
  font-family: "Poppins";
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 16px 0;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #E0E0E0;
  font-family: "PT Sans";
  font-size: 16px;
  margin-bottom: 12px;

  svg {
    color: #F26818;
  }
`;

const Description = styled.p`
  color: #E0E0E0;
  font-family: "PT Sans";
  font-size: 16px;
  line-height: 1.5;
  margin: 16px 0;
`;

const TopicList = styled.ul`
  color: #E0E0E0;
  font-family: "PT Sans";
  font-size: 16px;
  margin: 0;
  padding-left: 20px;
  line-height: 1.5;

  li {
    margin-bottom: 8px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
`;

const AccessButton = styled.button`
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  background-color: #F26818;
  color: #fff;
  font-family: "PT Sans";
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #D95A14;
  }
`;

export const EventDetailsModal: React.FC<EventDetailsModalProps> = ({
  isOpen,
  onClose,
  eventDate,
  eventTime,
  classDetails
}) => {
  if (!isOpen || !classDetails) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <X size={24} />
        </CloseButton>
        <Title>{classDetails.type}</Title>
        <Subtitle>{classDetails.subtitle}</Subtitle>
        
        <InfoItem>
          <MapPin size={20} />
          {classDetails.location}
        </InfoItem>
        <InfoItem>
          <Calendar size={20} />
          {eventDate}
        </InfoItem>
        <InfoItem>
          <Clock size={20} />
          {eventTime}
        </InfoItem>
        <InfoItem>
          <FileText size={20} />
          {classDetails.duration}
        </InfoItem>

        <Description>
          {classDetails.description}
        </Description>

        <Subtitle>O conteúdo da aula será baseado em {classDetails.topics.length} pilares:</Subtitle>
        <TopicList>
          {classDetails.topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </TopicList>

        {classDetails.additionalInfo && (
          <Description>
            {classDetails.additionalInfo}
          </Description>
        )}

        <ButtonContainer>
          <AccessButton onClick={onClose}>
            Acessar aula
          </AccessButton>
        </ButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
}; 