import React from "react";
import {Routes, Route} from "react-router-dom";
import Game from "./Game";
import LandingPage from "./LandingPage";
import ModelPresent from "./ModelPresent";
import {ROUTES} from "../utils/enums"

export default function Home() {

    return(

      <Routes>

        <Route exact path={ROUTES.INIT} element={<LandingPage/>} />

        <Route exact path={ROUTES.LANDING} element={<LandingPage/>}/>
            
        <Route exact path={ROUTES.GAME} element={<Game/>}/> 

        <Route exact path={ROUTES.MODEL} element={<ModelPresent/>} />

      </Routes>


    )

}