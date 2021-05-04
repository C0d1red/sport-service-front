import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {MenuBar} from "./menu/MenuBar";
import {MainPage} from "./MainPage";
import {ProfilePage} from "./profile/ProfilePage";
import {CreateArticlePage} from "./article/CreateArticlePage";
import {ArticlePage} from "./article/ArticlePage";
import {ChangeArticlePage} from "./article/ChangeArticlePage";

export const Router = () => {
    return (
        <BrowserRouter>
            <MenuBar/>
            <Route path={["(/)", "/tags/:tag"]} component={MainPage}/>
            <Route path={"/profile"} component={ProfilePage}/>
            <Route path={"/create-article"} component={CreateArticlePage}/>
            <Route path={"/article/:id/change"} component={ChangeArticlePage}/>
            <Route exact path={"/article/:id"} component={ArticlePage}/>
        </BrowserRouter>
    );
}
