import * as React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout () {
    return (
        <Box
            sx={{
                position: 'relative',
                minHeight: '100vh',
                height: '100%',
            }}
        >
            <Header />
            <Outlet />
            <Footer />
        </Box>
    );
}