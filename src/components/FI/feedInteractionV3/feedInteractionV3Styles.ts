import styled from 'styled-components'

export const Container = styled.div`
  padding: 16px 24px 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  background: ${({ theme }) => theme.colors.shadeWhite};
`

export const InteractionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`

export const InteractionButton = styled.button<{ $active?: boolean; $primaryColor: string }>`
  border: 0;
  background: transparent;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 0;
  color: ${({ theme, $active, $primaryColor }) => ($active ? $primaryColor : theme.colors.neutralsGrey3)};
  transition: transform 150ms ease-in-out;

  &:hover {
    transform: scale(1.04);
  }
`

export const InteractionItem = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.neutralsGrey3};
`

export const IconBubble = styled.div<{ $active?: boolean; $primaryColor?: string }>`
  width: 34px;
  height: 34px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme, $active, $primaryColor }) =>
    $active ? `${($primaryColor || theme.colors.primary1)}1a` : theme.colors.neutralsGrey6};
`

export const InteractionValue = styled.span`
  font-family: 'Work Sans';
  font-weight: 600;
  font-size: 14px;
`
