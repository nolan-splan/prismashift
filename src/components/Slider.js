import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

function valuetext(value) {
  return `${value}`;
}

export default function SlideBar(props) {
	const { onChange, label, max, id, current, currentState } = props
	const marks = [
		{
			value: 0,
			label: '0',
		},
		{
			value: max,
			label: max,
		},
	];
  const classes = useStyles();

	const handleOnChange = (event, value) => {
		console.log(`setting ${id} to ${value}`)
		const stateObject = {}
		stateObject[id] = value
		onChange(
			{
				...currentState,
				[id]: value
			}
		)
	}
  return (
    <div className={classes.root}>
      <Typography className="slider-label" id="discrete-slider-always" gutterBottom>
        {label}
      </Typography>
      <Slider
				name={label.toLowerCase()}
				defaultValue={100}
				value={current}
				max={max}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={1}
        marks={marks}
        valueLabelDisplay="auto"
        onChange={(e, val) => handleOnChange(e, val)}
      />
    </div>
  );
}