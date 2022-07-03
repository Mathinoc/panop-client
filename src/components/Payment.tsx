import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import DetailItem from '../interfaces/DetailItem';
import { Link } from 'react-router-dom';
import '../styles/Payment.css';

import { TextField } from "@mui/material";

const steps = [
  {
    label: 'Coordonnées de livraison',
  },
  {
    label: 'Paiement',
  },
];

export default function Payment({ cart }: { cart: { item: DetailItem, quantity: number }[] }) {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [validation, setValidation] = useState<{ok: boolean, message: string}>({ok: false, message:""});

  const handleNext = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (activeStep === steps.length) {

      // check if items are available at supplier(s)


      // set validation status and set message ("success" or "failure" because of item "x")


    }
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
            <StepLabel>
              {step.label}
            </StepLabel>
            <StepContent>
              {
                index === 0 &&
                <form onSubmit={handleNext}>
                  <div className="Payment__inline-div">
                    <TextField className="Payment__inline-child" type="text" label="Prénom" variant="filled" required />
                    <TextField className="Payment__inline-child" type="text" label="Nom" variant="filled" required />
                  </div>
                  <TextField label="E-mail" type="email" variant="filled" required />
                  <TextField label="Adresse" type="text" variant="filled" required />
                  <TextField label="Code postal" type="number" variant="filled" required />
                  <TextField label="Ville" type="text" variant="filled" required />
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === steps.length - 1 ? 'Finish' : 'Continue'}
                      </Button>
                    </div>
                  </Box>
                </form>
              }
              {
                index === 1 &&
                <form onSubmit={handleNext}>
                  <TextField label="Numéro de carte" type="password" variant="filled" required />
                  <TextField label="Nom du titulaire" type="text" variant="filled" required />
                  <div className="Payment__inline-div">
                    <TextField InputLabelProps={{ shrink: true }} className="Payment__inline-child" defaultValue="f" type="date" label="Date d'expiration" variant="filled" required />
                    <TextField className="Payment__inline-child" type="password" label="Code sécurité" variant="filled" required />
                  </div>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === steps.length - 1 ? 'Finish' : 'Continue'}
                      </Button>
                      <Button
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Back
                      </Button>
                    </div>
                  </Box>
                </form>
              }


            </StepContent>

          </Step>
        ))}
      </Stepper>



      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>{validation.message}</Typography>
          <Button component={Link} to="/" sx={{ mt: 1, mr: 1 }}>
            Retour à la page d'acceuil
          </Button>
        </Paper>
      )}
    </Box>
  );
}

