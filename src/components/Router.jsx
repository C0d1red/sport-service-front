import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {MenuBar} from "./menu/MenuBar";
import {MainPage, TYPES} from "./MainPage";
import {ProfilePage} from "./profile/ProfilePage";
import {CreateArticlePage} from "./article/CreateArticlePage";
import {ArticlePage} from "./article/ArticlePage";
import {ChangeArticlePage} from "./article/ChangeArticlePage";

export const Router = () => {
    return (
        <BrowserRouter>
            <MenuBar/>
            <Route path={"(/)"} component={() => <MainPage type={TYPES.all}/>}/>
            <Route path={"(/recommended)"} component={() => <MainPage type={TYPES.recommended}/>}/>
            <Route path={"/tags/:tag"} component={() => <MainPage type={TYPES.byTag}/>}/>
            <Route path={"/profile"} component={ProfilePage}/>
            <Route path={"/create-article"} component={CreateArticlePage}/>
            <Route path={"/article/:id/change"} component={ChangeArticlePage}/>
            <Route exact path={"/article/:id"} component={ArticlePage}/>
        </BrowserRouter>
    );
}
