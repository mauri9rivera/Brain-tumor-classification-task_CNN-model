import React, {useState, useEffect} from "react";
import {Button} from "@mui/material";
import { ROUTES } from "../utils/enums";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import ProjectTitle from "../Components/ProjectTitle";
import Tab from "../Components/Tab";

const useStyles = makeStyles(() => ( {
    button: {
        margin: "10px 60px",
        padding: "70px",
        
    }, 

}));

export default function ModelPresent() {

    const classes = useStyles();
    const navigate = useNavigate();

    useEffect( ()=> {
        fetch('/data').then(response => {
            if(response.ok){
                return response.json()
            }
        }).then(data => console.log(data))
    }, [])

    const handleBackClick = () => {
        navigate(ROUTES.LANDING);
    }



    return (

        <div className>

        <ProjectTitle/>

        <Button variant= "contained" className={classes.button} 
        onClick={handleBackClick}>
            Back
        </Button>

        <Tab/>
        
        </div>
    )
}