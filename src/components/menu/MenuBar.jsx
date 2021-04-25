import React, {useEffect} from 'react';
import {useStyles} from "../../styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {LoginCard} from "../register/LoginCard";
import {NavLink} from "react-router-dom";
import {isJWTInStorage} from "../../api/util";
import {ProfileMenu} from "./ProfileMenu";

export const MenuBar = () => {
    const classes = useStyles();
    const [isLoginClicked, setLoginClicked] = React.useState(false);
    const [isLoggedIn, setLoggedIn] = React.useState(isJWTInStorage());

    useEffect(() => {
        setLoggedIn(isJWTInStorage())
    }, [isLoggedIn])

    const openLoginCard = () => {
        setLoginClicked(true);
    };

    const closeLoginCard = () => {
        setLoginClicked(false);
    };

    const handleLogin = () => {
        setLoginClicked(false);
        setLoggedIn(true);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <ButtonGroup fullWidth size={"large"} variant="text" className={classes.leftToolBar}>
                        <Button component={NavLink} color="inherit" to={"/article"}>Статьи</Button>
                    </ButtonGroup>
                    {isLoggedIn ?
                        <ProfileMenu setLoggedIn={setLoggedIn}/>
                        :
                        <Button color="inherit" onClick={openLoginCard}>Войти</Button>
                    }
                </Toolbar>
            </AppBar>
            <LoginCard open={isLoginClicked} handleClose={closeLoginCard} handleLogin={handleLogin}/>
        </div>
    );
}
