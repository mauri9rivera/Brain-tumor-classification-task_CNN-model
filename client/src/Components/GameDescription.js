import React from "react";
import {Box, Card, CardContent, Typography} from '@mui/material';

const card = (
    <React.Fragment>
        <CardContent>
            <Typography sx={{fontSize: 16}} variant="h6" gutterBottom>
                Game description
            </Typography>

            <Typography variant="h6" component="div">
                Try to outperform the ML models!
                Guess the type of brain tumor of the following
                MRI scan. 
            </Typography>

            <Typography color="text.secondary">
                Remember: meningioma tumors arise from the meninges,
                pituitary tumors develop in the pituitary gland, whereas
                glioma tumor are mostly located in the cerebral lobes.    
            </Typography>
        </CardContent>
    </React.Fragment>
)

export default function GameDescription() {
    return (
        <Box sx={{minWidth: 275}}>
            <Card variant="outlined">{card}</Card>
        </Box>
    );
}

