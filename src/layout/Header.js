import * as React from 'react';
import {
    AppBar,
    Box,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const pages = ['Home', 'Team', 'Contact'];

export default function Header () { 
    const [anchorElNav, setAnchorElNav] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    return (
        <AppBar position="static" sx={{ boxShadow: 'none', bgcolor: '#111111' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    <Link to="/" style={{ display: 'flex' }}>
                        <Box component="img" src="/img/logo.png" sx={{ mr: 1, maxWidth: 192 }} />
                    </Link>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            '& .MuiPaper-root' : {
                                position: 'static',
                                display: 'flex',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                width: '100%',
                                height: '100%',
                                maxHeight: '100%',
                                maxWidth: '100%',
                                left: '0px !important',
                                top: '0px !important',
                                bgcolor: '#111111',
                                '& ul': {
                                    position: 'static',
                                    '& li': {
                                        justifyContent: 'flex-end'
                                    }
                                }
                            }
                        }}
                    >
                        <CloseIcon fontSize="small" 
                            sx={{
                                position: 'absolute',
                                top: 20,
                                right: 20,
                                cursor: 'pointer',
                                color: '#E8E6D9'
                            }}
                            onClick={handleCloseNavMenu}
                        />
                    {pages.map((page) => (
                        <MenuItem 
                            key={page} 
                            onClick={handleCloseNavMenu}
                            sx={{
                                '& h1:first-of-type': {
                                    display: 'block'
                                },
                                '& h1:last-child': {
                                    display: 'none'
                                },
                                '&:hover': {
                                    bgcolor: '#111111',
                                    '& h1:first-of-type': {
                                        display: 'none',
                                    },
                                    '& h1:last-child': {
                                        display: 'block'
                                    },
                                }
                            }}
                        >
                            <Link to={"/" + page.toLowerCase()} style={{ color: 'inherit', textDecoration: 'none' }}>
                                <Typography 
                                    variant="h1" 
                                    sx={{ color: '#729BF5' }} 
                                    textAlign="center"
                                >{page}</Typography>
                                <Typography 
                                    variant="h1" 
                                    sx={{ color: '#F4F2ED', display: 'none' }} 
                                    textAlign="center"
                                >&lt;{page}&gt;</Typography>
                            </Link>
                        </MenuItem>
                    ))}
                    </Menu>
                </Toolbar>
            </Container>
        </AppBar>

    );
}