import React from 'react';
import {MenuBar} from "./menu/MenuBar";
import {BrowserRouter, Route} from "react-router-dom";
import {MainPage} from "./MainPage";
import {ProfilePage} from "./profile/ProfilePage";
import {CreateArticlePage} from "./article/CreateArticlePage";
import {ArticlePage} from "./article/ArticlePage";

export const Router = () => {
    return (
        <BrowserRouter>
            <MenuBar/>
            <Route exact path={"/article"} component={MainPage}/>
            <Route path={"/profile"} component={ProfilePage}/>
            <Route path={"/create-article"} component={CreateArticlePage}/>
            <Route path={"/article/:id"} component={ArticlePage}/>
        </BrowserRouter>
    );
}
