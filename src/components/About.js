import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';



const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'Tecnovos Employess1',
    imgPath:
      'https://miro.medium.com/max/559/0*dUcpXuI5Im56Lceq',
  },
  {
    label: 'Spark',
    imgPath:
      'https://apkdl.in/apkimage/C-GyTpqoQWBtKSiGQgE8rJfdeu4pFRvACiUn7caF5r9wkxw6V3tPkaW6FhrCvOL-iAw=rw',
  },
  {
    label: 'Syndicate tech',
    imgPath:
      'https://scontent.fbom19-1.fna.fbcdn.net/v/t1.0-9/p960x960/31230139_229178411161254_7772383306598842368_o.jpg?_nc_cat=103&_nc_sid=a61e81&_nc_ohc=xmHc3eFueDIAX-J8aJw&_nc_ht=scontent.fbom19-1.fna&_nc_tp=6&oh=7f7f6f43df4195935b3c43393f186aea&oe=5EB9F480',
  },
  {
    label: 'Tecnovos Employess',
    imgPath:
      'https://miro.medium.com/max/559/0*dUcpXuI5Im56Lceq',
  },
  {
    label: 'Spark',
    imgPath:
    'https://apkdl.in/apkimage/C-GyTpqoQWBtKSiGQgE8rJfdeu4pFRvACiUn7caF5r9wkxw6V3tPkaW6FhrCvOL-iAw=rw',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth:'100%',
    flexGrow: 2,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 40,
    paddingLeft: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 350,
    display: 'block',
    maxWidth: 2000,
    overflow: 'hidden',
    width: '100%',
  },
}));

function About() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = step => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
}

export default About;
