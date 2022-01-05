import React, {useState} from "react";
import {Button, Typography} from "@mui/material";
import { ROUTES } from "../utils/enums";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import ProjectTitle from "../Components/ProjectTitle";
import GameDescription from "../Components/GameDescription";

const useStyles = makeStyles(() => ( {
    backbutton: {
        paddingBottom: "30px"
    },
    devmessage: {
        paddingTop: "30px",
        paddingBottom: "70px"
    },
}));


export default function Game() {

    const classes = useStyles();
    const navigate = useNavigate();
    const [Predicted, setPredicted] = useState( {prediction: []})


    const handleBackClick = () => {
        navigate(ROUTES.LANDING);
    }

    const handleImage = (event) => {
        let fileElem = document.getElementById("file")
        let file = fileElem.files[0]

        
        fetch('/Game', {method: 'POST', body: file})
        .then(response => response.json())
        .then(data => {
            console.log('Success');
            console.log(data);
            setPredicted({prediction: data})
           
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        
    
    }


    return (
        <div>

            <ProjectTitle/>

            <Button variant= "contained" onClick={handleBackClick}
            className={classes.backbutton} >
                Back
            </Button>

            <GameDescription/>

            <Typography variant="h5" className={classes.devmessage}>
                Not yet developed. Instead, try our model!
            </Typography>
            <input type="file" id="file" onChange={handleImage}/>
            <Typography variant="button"> The type is: </Typography>
            <Typography variant="button">{Predicted.prediction}</Typography>


            
            
        </div>
    )
}