import React from 'react';
import { Button, makeStyles, Theme, createStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

interface Props {
  text: string;
  startIcon?: JSX.Element;
  disabled?: boolean;
  color?: 'inherit' | 'primary' | 'secondary' | 'default' | undefined;
  size?: 'small' | 'medium' | 'large' | undefined;
  onClick?(): void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  }),
);

export const ButtonWithIcon = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  
  return (
    <Button 
      className={classes.button} 
      variant="contained" 
      color={props.color}
      size={props.size ? props.size : 'large'}
      startIcon={props.startIcon} 
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {t(props.text)}
    </Button>
  );
};
