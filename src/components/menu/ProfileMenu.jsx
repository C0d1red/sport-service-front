import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {IconButton} from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export const ProfileMenu = (props) => {
    const {handleLogout} = props;
    const [anchorEl, setAnchorEl] = useState(null);
    const history = useHistory();

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleProfileClick = () => {
        history.push('/profile')
        setAnchorEl(null);
    };

    const handleLogoutClick = () => {
        handleLogout();
        history.push('/');
        setAnchorEl(null);
    };

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <div>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleProfileClick}>Профиль</MenuItem>
                <MenuItem onClick={handleLogoutClick}>Выйти</MenuItem>
            </Menu>
            <IconButton onClick={handleMenuClick}>
                <AccountCircleIcon/>
            </IconButton>
        </div>
    );
}
