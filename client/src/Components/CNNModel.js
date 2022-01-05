import * as React from 'react';
import {Box, Card, CardContent, Typography} from "@mui/material";
import img1 from "../utils/CNN_performance.jpg";
import img2 from "../utils/CNN_architecture.png";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles(() => ({
    text: {
        textAlign: "left",
        paddingBottom: "10px",
        paddingTop: "10px",
    }
})); 


export default function CNNModel () {

    const classes = useStyles();

    return(

        <Box sx={{width: "100%"}}>

            <Box>
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h5" className={classes.text}> Description</Typography>
                        <Typography variant="overline" className={classes.text}>
                            Using transfer learning, this model was built from the keras' 
                            EfficientNet B0 model, to which some top layers were added 
                            to best fit the given task. Moreover, this model implemented
                             Dropout, Early stopping and adaptive learning rate as 
                             regularization techniques.</Typography>
                    </CardContent></Card>
            </Box> 

            <Box>
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h5" className={classes.text}>
                             Architecture</Typography>
                             <img src={img2} alt="architecture" />
                    </CardContent>
                </Card>    
            </Box> 

            <Box>
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h5" className={classes.text}> 
                        Performance</Typography>
                        <Typography variant="overline" className={classes.text}>
                        The performance 
                        of the model is: 93% </Typography>
                        <img src={img1} alt="performance" />
                    </CardContent>
                    </Card>    
            </Box>  

        </Box>
    )
}