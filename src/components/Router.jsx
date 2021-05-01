import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {MenuBar} from "./menu/MenuBar";
import {MainPage} from "./MainPage";
import {ProfilePage} from "./profile/ProfilePage";
import {CreateArticlePage} from "./article/CreateArticlePage";
import {ArticlePage} from "./article/ArticlePage";

export const Router = () => {
    return (
        <BrowserRouter>
            <MenuBar/>
            <Route exact path={"/"} component={MainPage}/>
            <Route path={"/profile"} component={ProfilePage}/>
            <Route path={"/create-article"} component={CreateArticlePage}/>
            <Route path={"/article/:id"} component={ArticlePage}/>
        </BrowserRouter>
    );
}
