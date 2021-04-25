import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {IconButton} from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {deleteJWT} from "../../api/util";
import {useHistory} from "react-router-dom";

export const ProfileMenu = (props) => {
    const {setLoggedIn} = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const history = useHistory();

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleProfileClick = () => {
        history.push('/profile')
        setAnchorEl(null);
    };

    const handleExitClick = () => {
        deleteJWT();
        setLoggedIn(false);
        history.push('/');
        setAnchorEl(null);
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
                <MenuItem onClick={handleExitClick}>Выйти</MenuItem>
            </Menu>
            <IconButton onClick={handleMenuClick}>
                <AccountCircleIcon/>
            </IconButton>
        </div>
    );
}
