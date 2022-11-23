import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const CustomExpandIcon = () => {
   return (
      <div>
         <div className='expandMoreIcon'>
            <AddIcon />
         </div>
         <div className='removeExpandIcon'>
            <RemoveIcon />
         </div>
      </div>
   );
};

const CreativeAccordion = ({ title, description }) => {
   return (
      <Accordion
         sx={{
            boxShadow: 'none',
            border: '1px solid #E5EAF4',
            p: 2,
            '& .Mui-expanded': {
               '& .expandMoreIcon': {
                  display: 'none',
               },
               '& .removeExpandIcon': {
                  display: 'block',
                  '& svg': {
                     color: 'primary.green',
                  },
               },
            },
         }}
      >
         <AccordionSummary
            sx={{
               '& .removeExpandIcon': {
                  display: 'none',
               },
               '& p': {
                  color: 'primary.main',
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
               },
               '& .Mui-expanded': {
                  '& p': {
                     color: 'primary.green',
                  },
               },
            }}
            expandIcon={<CustomExpandIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
         >
            <Typography>{title}</Typography>
         </AccordionSummary>
         <AccordionDetails>
            <Typography
               sx={{
                  color: '#5A7184',
               }}
            >
               {description}
            </Typography>
         </AccordionDetails>
      </Accordion>
   );
};

export default CreativeAccordion;
