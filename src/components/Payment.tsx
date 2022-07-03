import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import DetailItem from '../interfaces/DetailItem';
import '../styles/Payment.css';

import {FormControl, TextField} from "@mui/material";

const steps = [
  {
    label: 'Coordonnées de livraison',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Paiement',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  // {
  //   label: 'Confirmation',
  //   description: `Try out different ad text to see what brings in the most customers,
  //             and learn how to enhance your ads using features like ad extensions.
  //             If you run into any problems with your ads, find out how to tell if
  //             they're running and how to resolve approval issues.`,
  // },
];

export default function Payment({ cart }: { cart: { item: DetailItem, quantity: number }[] }) {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box className="Payment">
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>

            <StepLabel
            // optional={
            //   index === 1 ? (
            //     <Typography variant="caption">Last step</Typography>
            //   ) : null
            // }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              {
                index === 0 &&

                // <Typography>{step.description}</Typography>

<FormControl>

</FormControl>


              }
              {
                index === 1 &&

                <Typography>{step.description}</Typography>
              }


              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>

          </Step>
        ))}
      </Stepper>



      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>Commande validée !</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Retour à la page d'acceuil
          </Button>
        </Paper>
      )}
    </Box>
  );
}

