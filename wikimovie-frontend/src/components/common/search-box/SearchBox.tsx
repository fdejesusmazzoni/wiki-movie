import React, { useState } from 'react';
import { InputBase, Paper, IconButton, Divider } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import { useStyles } from './SearchBoxStyles';

interface Props {
  placeholder: string;
  initialValue: string;
  disabled?: boolean;
  onChange(value: string): void;
  onClear(): void;
}

export const SearchBox = (props: Props) => {
  const classes = useStyles();
  const [value, setValue] = useState<string>(props.initialValue);
  
  const handleChange = (newText: string) => {
    setValue(newText);
    props.onChange(newText);
  };

  const handleClear = () => {
    setValue('');
    props.onClear();
  };
  
  return (
    <Paper className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="search icon">
        <SearchIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder={props.placeholder}
        inputProps={{ 'aria-label': props.placeholder }}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        disabled={props.disabled}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton color="primary" className={classes.iconButton} aria-label="clear search box" onClick={handleClear}>
        <CloseIcon />
      </IconButton>
    </Paper>
  );
};
