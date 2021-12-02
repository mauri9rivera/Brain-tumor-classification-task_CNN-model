import * as React from 'react';
import {Box, Card, CardContent, Typography} from "@mui/material";
import img1 from "../utils/SVM_performance.png";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ( {
    cardContent: {
        paddingTop: "5px",
        paddingBottom: "30px",
        justifyContent: "flex-start"
    },
    image: {
        justifyContent: "flex-start",
    },
    text: {
        textAlign: "left",
        paddingBottom: "10px",
        paddingTop: "10px",
    }
}));


export default function SVMModel () {

    const classes = useStyles();

    return(

        <Box sx={{width: "100%"}}>

            <Box>
                <Card variant="outlined" className={classes.cardContent}>
                    <CardContent>
                        <Typography variant="h5" className={classes.text}>
                            Description
                        </Typography>
                        <Typography variant="overline"> Implementation of
                        a simple multi-class SVM classifier
                        </Typography>
                    </CardContent>
                </Card>
            </Box> 

            <Box>
                <Card variant="outlined" className={classes.cardContent}>
                    <CardContent>
                        <Typography variant="h5" className={classes.text}> Performance</Typography>                       
                        <img src={img1} alt="performance"/>
                    </CardContent>
                </Card>    
            </Box>  

        </Box>
    )
}