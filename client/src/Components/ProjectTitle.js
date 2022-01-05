import React from "react";
import Typography from '@mui/material/Typography';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ( {
    title: {
        margin: "10px 60px",
        paddingTop: "50px",
        paddingBottom: "40px"
    }
}));

export default function ProjectTitle() {

    const classes = useStyles();

    return(

        <Typography variant="h3" component="div" 
        className={classes.title} gutterBottom>
            MAIS 202: Brain Tumor Classification
        </Typography>
    )

}
