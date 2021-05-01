import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {useStyles} from "../../styles";
import {LoginCard} from "../register/LoginCard";
import {deleteJWT, isJWTInStorage} from "../../api/util";
import {ProfileMenu} from "./ProfileMenu";

export const MenuBar = () => {
    const classes = useStyles();
    const [isLoginClicked, setLoginClicked] = useState(false);
    const [isLoggedIn, setLoggedIn] = useState(isJWTInStorage());

    const openLoginCard = () => setLoginClicked(true);

    const closeLoginCard = () => setLoginClicked(false);

    const handleLogin = () => {
        setLoginClicked(false);
        setLoggedIn(true);
    };

    const handleLogout = () => {
        deleteJWT();
        setLoggedIn(false);
    };

    useEffect(() => setLoggedIn(isJWTInStorage()), [isLoggedIn])

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <ButtonGroup fullWidth size={"large"} variant="text" className={classes.leftToolBar}>
                        <Button component={NavLink} color="inherit" to={"/"}>
                            Статьи
                        </Button>
                    </ButtonGroup>
                    {isLoggedIn ?
                        <ProfileMenu handleLogout={handleLogout}/>
                        :
                        <Button color="inherit" onClick={openLoginCard}>
                            Войти
                        </Button>
                    }
                </Toolbar>
            </AppBar>
            <LoginCard isOpen={isLoginClicked} handleClose={closeLoginCard} handleLogin={handleLogin}/>
        </div>
    );
}
