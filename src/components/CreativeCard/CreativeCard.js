import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import AddIcon from '@mui/icons-material/Add';

import { useTheme } from '@mui/material'




const CreativeCard = ({image}) => {

    const theme = useTheme()

   return (
      <Card sx={{ maxWidth: 345, p: 2, borderRadius: '10px', minWidth: '345px' }}>
         <CardMedia
            component='img'
            height='190'
            image={image}
            alt='green iguana'
            style={{
               borderRadius: '10px',
            
            }}
         />
         <CardContent
            sx={{
               p: 0,
               pb: 0,
               pt: 4,
               '&:last-child': {
                  pb: 0,
               },
               display: 'flex',
               justifyContent: 'space-between',
               alignItems: 'center',
            }}
         >
            <Box>
               <Typography
                  gutterBottom
                  variant='body'
                  component='div'
                  color='text.secondary'
               >
                  Web design
               </Typography>
               <Typography
                  variant='body2'
                  color='primary.main'
                  fontWeight={600}
                  fontSize={20}
               >
                  Web design research
               </Typography>
            </Box>
            <IconButton sx={{
                border: `1px solid ${theme.palette.primary.main}`,
                height: '30px',
                width: '30px',
                '& svg': {
                    color: 'primary.main'
                }
            }}>
               <AddIcon />
            </IconButton>
         </CardContent>
      </Card>
   );
};

export default CreativeCard;
