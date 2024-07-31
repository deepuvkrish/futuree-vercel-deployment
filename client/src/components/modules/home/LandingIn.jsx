import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { SignedOut, SignOutButton, useUser } from '@clerk/clerk-react'
import { Outlet, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-brands-svg-icons';
import { faPersonWalkingArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import Profiles from "../profile/Profiles";




import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';


const LandingIn = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };




    const { loggedIn, email } = props
    const navigate = useNavigate()
    // Use the useUser hook to get the details about the logged in user
    const { user } = useUser()
    const [profile, setProfile] = useState('menu');
    const menuToggle = () => {
        if (profile == 'menu') setProfile('menu active')
        else setProfile('menu')
    }
    const menuHide = () => {
        if (profile == 'menu active') setProfile('menu')
    }

    return (
        <div className="bodyContent" >
            <div className="navSection">


                <React.Fragment>
                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                        <Typography sx={{ minWidth: 100 }}>
                            <NavLink to='/homein' className="navSectionLinks">Home</NavLink>
                        </Typography>
                        <Typography sx={{ minWidth: 100 }}>
                            <NavLink to='/wed' className="navSectionLinks">Wedding</NavLink>
                        </Typography>
                        <Typography sx={{ minWidth: 100 }}>
                            <NavLink to='/shop' className="navSectionLinks">Shop</NavLink>
                        </Typography>

                        <Tooltip title="Account settings">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <img src={user.imageUrl} className="useravatar" />

                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&::before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >

                        <NavLink to='/profile'>
                            <MenuItem onClick={handleClose}>
                                <FontAwesomeIcon icon={faCircleUser} /> My Profile
                            </MenuItem>
                        </NavLink>
                        <MenuItem onClick={handleClose}>
                            <Avatar /> My account
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <PersonAdd fontSize="small" />
                            </ListItemIcon>
                            Add another account
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <Settings fontSize="small" />
                            </ListItemIcon>
                            Settings
                        </MenuItem>
                        <MenuItem onClick={handleClose} type="button" value={'Log out'}>
                            <ListItemIcon>
                                <Logout fontSize="small" />
                            </ListItemIcon>
                            <SignOutButton>
                                <input className='signout' type="button" value={'Log out'} />
                            </SignOutButton>
                        </MenuItem>
                    </Menu>
                </React.Fragment>


            </div>


            <Outlet />
        </div>
    )
}

export default LandingIn