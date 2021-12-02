import React, {useEffect} from "react";
import {Button} from "@mui/material";
import { ROUTES } from "../utils/enums";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import ProjectTitle from "../Components/ProjectTitle";


const useStyles = makeStyles(() => ( {
    button: {
        margin: "20px 60px",
        display:"flex",
        justifyContent: "space-between",
        
    }
}));

export default function LandingPage() {

    const classes = useStyles();
    const navigate = useNavigate();

    useEffect( ()=> {
        fetch('/data').then(response => {
            if(response.ok){
                return response.json()
            }
        }).then(data => console.log(data))
    }, [])

    const handleModelClick = () => {
        navigate(ROUTES.MODEL);
    }

    const handleGameClick = () => {
        navigate(ROUTES.GAME);
    }

    return(

        <div className="Landing">

        <ProjectTitle/>

        <Button variant= "contained" onClick={handleModelClick}
        className={classes.button} >
            Model presentation
        </Button>

        <Button variant = "contained" onClick={handleGameClick}
        className={classes.button} >
            Game
        </Button>

        </div>
    )

}