import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

type LightTooltipProps = TooltipProps & {
  title: React.ReactNode;
};

const StyledTooltip = styled(
  ({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  )
)(({ theme }) => ({
  [`&.${tooltipClasses.popper}`]: {
    zIndex: theme.zIndex.modal + 1,
  },

  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: '#757575',
    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 0px 8px 0px',
    fontSize: '12px',
    fontFamily: 'Poppins',
    borderRadius: '8px',
    border: '1px solid #E0E0E0',
    width: '180px',
  },
}));

export const LightTooltip = ({
  title,
  children,
  ...props
}: LightTooltipProps) => {
  return (
    <StyledTooltip title={title} {...props}>
      {children}
    </StyledTooltip>
  );
};
