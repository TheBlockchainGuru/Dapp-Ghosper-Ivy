import { 
    Box, 
    Button,
    Stack,
    Typography,
    useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

/* slide Image settings */
const imageCount = [
    { src: 1, name: '<Fares Abu-Taleb>', position: 'CEO & Founder' },
    { src: 2, name: '<Mohammad Basem>', position: 'CTO' },
    { src: 3, name: '<Basim Al-Taher>', position: 'Art Director' },
    { src: 4, name: '<Andrii Lazariev>', position: 'Lead Game Developer' },
    { src: 5, name: '<Nicolas Counil>', position: 'Game Designer' },
    { src: 6, name: '<Mohamad Waheed>', position: '3D Team Leader' },
    { src: 7, name: '<Amer Ghazawi>', position: '3D Artist' },
    { src: 8, name: '<Hamza Warnahli>', position: '3D Intern' },
    { src: 9, name: '<Kier Cagara>', position: 'Junior Game Designer' },
    { src: 10, name: '<Olga Hagenbuch>', position: 'Lead Marketing' },
    { src: 11, name: '<Justin Korenhof>', position: 'Social Media Manager' },
    { src: 12, name: '<Jeton Ballazhi>', position: 'Junior Financial Analyst' },
    { src: 13, name: '<Abdallah Abu-Taleb>', position: 'Partner & Advisor' },
    { src: 14, name: '<Abdelkareem Hatahet>', position: 'Partner & Advisor' },
];

export default function Team () {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const matchUpLg = useMediaQuery(theme.breakpoints.up('lg'))
    const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            <Box
                sx={{
                    pt: matchUpMd ? 10 : 6,
                    pb: matchUpMd ? 10 : 2,
                    px: matchUpLg ? 8 : matchUpMd ? 4 : 2
                }}
            >
                <Typography variant="h3">Meet our &lt;Core&gt; Team</Typography>
            </Box>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 
                        matchUpLg ? '1fr 1fr 1fr 1fr 1fr' : 
                        matchUpMd ? '1fr 1fr 1fr 1fr' : 
                        matchUpSm ? '1fr 1fr 1fr' : '1fr 1fr',
                    // px: matchUpLg ? 8 : matchUpMd ? 4 : 2,
                    pb: 5
                }}
            >
            {imageCount.map((element, key) => 
                <Box key={key} 
                    sx={{
                        py: matchUpMd ? 3 : 1 ,
                        bgcolor: 'transparent',
                        cursor: 'pointer',
                        '&:hover': {
                            bgcolor: '#232323'
                        }
                    }}
                >                        
                    <Typography sx={{ color: '#F4F2ED', textAlign: 'center', fontFamily: 'Apercu-Bold' }}>{element.name}</Typography>
                    <Box
                        sx={{ 
                            px: matchUpMd ? 8 : 2 ,
                            pt: matchUpMd ? 3 : 1
                        }}
                    >
                        <Box component="img" src={'/img/avatars/' + element.src + '.png'} sx={{ width: '100%' }} />
                    </Box>
                    <Typography variant="body2" 
                        sx={{ 
                            pt: 1,
                            textDecoration: 'underline', 
                            color: '#F4F2ED', 
                            textAlign: 'center' 
                        }}
                    >{element.position}</Typography>
                </Box>
            )}
            </Box>
            <Box
                sx={{
                    px: matchUpMd ? 8 : 2,
                    py: matchUpMd ? 10 : 4,
                    pb: matchUpMd ? 18 : 12,
                    bgcolor: '#0C0C0C'
                }}
            >
                <Stack gap={matchUpMd ? 6 : 3}
                    sx={{
                        color: '#F4F2ED'
                    }}
                >
                    <Typography variant="h4">Want to Join The Team?</Typography>
                    <Typography>
                        We’re constantly on the hunt for new talent to <br />join our ever-growing team of creatives!
                    </Typography>
                    <Typography>
                        Think you’re a good fit? Apply now!
                    </Typography>
                    <Box
                        sx={{
                            pt: 2
                        }}
                    >
                        <Button 
                            size="large" 
                            variant="contained" 
                            sx={{ 
                                color: '#F4F2ED', 
                                bgcolor: '#729BF5',
                                px: 4
                            }}
                            onClick={(e) => {
                                window.location.href = "mailto:info@ghost-ivy.com"
                                e.preventDefault()
                            }}
                        ><Typography>&lt;Apply&gt;</Typography></Button>
                    </Box>
                </Stack>

            </Box>
        </Box>
    );
}