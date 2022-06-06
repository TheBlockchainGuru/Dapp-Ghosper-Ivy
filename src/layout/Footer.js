import { useTheme } from '@mui/material/styles';
import { Box, Stack, Link, Typography, useMediaQuery } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer () {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'))
    return (
        <Stack 
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
                position: 'absolute',
                width: '100%',
                bottom: 0,
                bgcolor: '#111111',
                py: 2,
                px: matchUpMd ? 4 : 2

            }}
        >
            <Typography variant="caption" sx={{ color: '#729BF5', fontFamily: 'Apercu-Light' }}>© 2023 by Ghost Ivy Development Studio AG</Typography>
            <Link href="https://ch.linkedin.com/company/ghost-ivy-development-studios-ag" target="_blank">
                <Box 
                    src="/img/icons/linkedin.png" 
                    component="img" 
                    sx={{ 
                        width: 16, 
                        height: 16,
                        cursor: 'pointer'
                    }}
                />
            </Link>
        </Stack>
    );
}