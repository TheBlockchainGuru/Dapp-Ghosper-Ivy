import React from 'react';
import {
    Box,
    Button,
    FormControl,
    Link,
    Input,
    InputLabel,
    Modal,
    OutlinedInput,
    Stack,
    TextareaAutosize,
    Typography,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkedinIcon from '../components/LinkedinIcon';

const style = {
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 600,
    width: '100%',
    bgcolor: '#729BF5',
    boxShadow: 24,
    py: 10,
    px: 2
};

export default function Contact () {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const matchUpLg = useMediaQuery(theme.breakpoints.up('lg'));
    const matchUpXl = useMediaQuery(theme.breakpoints.up('xl'));

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box>
            <Box
                sx={{
                    pt: matchUpMd ? 10 :6,
                    pb: matchUpXl ? 10 : matchUpLg ? 7 : matchUpMd ? 4 : 2,
                    px: matchUpMd ? 8 : 2
                }}
            >
                <Typography variant="h3">Contact Us</Typography>
            </Box>
            <Stack flexDirection={ matchUpMd ? "row" : "column-reverse"}
                gap={7}
                sx={{
                    px: matchUpMd ? 8 : 2,
                    pb: 7
                }}
            >
                <Stack flex={5} justifyContent="space-between">
                    <Box>
                        <Typography sx={{ fontFamily: 'Apercu-Bold' }}>
                            info@ghost-ivy.com
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                pt: 4
                            }}
                        >
                            <address style={{ fontFamily: 'Apercu-Light-Italic' }}>
                                Am Mattenhof 2D<br />
                                6010 Kriens,<br />
                                Luzern<br />
                                Switzerland<br />
                            </address>
                        </Typography>
                    </Box>
                    <Box sx={{
                        pt: matchUpMd ? 0 : 8,
                        pb: matchUpMd ? 8 : 2
                    }}>
                        <Typography variant="body2" sx={{ fontFamily: 'Apercu-Light-Italic' }}>Follow our socials for more!</Typography>
                        <Stack flexDirection="row" gap={1} sx={{ pt: 1 }}>
                            <Stack 
                                justifyContent="center"
                                alignItems="center"
                                sx={{
                                    borderRadius: '50%',
                                    width: 28,
                                    height: 28,
                                    bgcolor: '#000',
                                }}
                            >
                                <Link 
                                    href="https://ch.linkedin.com/company/ghost-ivy-development-studios-ag" 
                                    target="_blank"
                                    sx={{
                                        display: 'flex'
                                    }}
                                >
                                    {/* <Box src="/img/icons/linkedin-small.png" component="img" /> */}
                                    {/* <Typography sx={{ color: '#F4F2ED', fontFamily: 'Apercu-Bold', fontSize: '1.125rem !important' }}>in</Typography> */}
                                    <LinkedinIcon color="#F4F2ED" size="1.5rem" />
                                    {/* <Box src="/img/icons/linkedin.png" component="img" sx={{ width: 16, height: 16 }} /> */}
                                </Link>
                            </Stack>
                            <Stack 
                                justifyContent="center"
                                alignItems="center"
                                sx={{
                                    borderRadius: '50%',
                                    width: 28,
                                    height: 28,
                                    bgcolor: '#000',
                                }}
                            >
                                <Link href="https://www.instagram.com/ghost_ivy_dev/" target="_blank" sx={{ display: 'flex' }}>
                                    {/* <Box src="/img/icons/instagram.png" component="img" /> */}
                                    <InstagramIcon sx={{ color: '#F4F2ED', fontSize: '1.25rem' }} />
                                </Link>
                            </Stack>
                            <Stack 
                                justifyContent="center"
                                alignItems="center"
                                sx={{
                                    borderRadius: '50%',
                                    width: 28,
                                    height: 28,
                                    bgcolor: '#000',
                                }}
                            >
                                <Link href="" target="_blank" sx={{ display: 'flex' }}>
                                    {/* <Box src="/img/icons/twitter.png" component="img" /> */}
                                    <TwitterIcon sx={{ color: '#F4F2ED', fontSize: '1.25rem' }} />
                                </Link>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
                <Stack flex={7}>
                    <Stack flexDirection="row"
                        gap={matchUpMd ? 7 : 0}>
                        <Stack flex={5} sx={{ maxWidth: '100%' }}>
                            <FormControl variant="standard" fullWidth>
                                <Input
                                    placeholder="LAST NAME"
                                    sx={{
                                        p: 1,
                                        borderTop: '1px solid #8e8d8a',
                                        '& input::placeholder': {
                                            fontFamily: 'Apercu-Light'
                                        }
                                    }}
                                />
                            </FormControl>
                            <FormControl variant="standard" fullWidth>
                                <Input 
                                    placeholder='E-MAIL'
                                    sx={{
                                        p: 1,
                                        '& input::placeholder': {
                                            fontFamily: 'Apercu-Light'
                                        }
                                    }}
                                />
                            </FormControl>
                            <FormControl variant="standard" fullWidth>
                                <Input
                                    placeholder="SUBJECT"
                                    sx={{
                                        p: 1,
                                        '& input::placeholder': {
                                            fontFamily: 'Apercu-Light'
                                        }
                                    }}
                                />
                            </FormControl>
                            <FormControl variant="standard" fullWidth
                                sx={{
                                    '& textarea': {
                                        bgcolor: 'transparent',
                                        p: 1,
                                        border: 0,
                                        borderBottomWidth: 1,
                                        borderBottomColor: '#8e8d8a',
                                        '&::placeholder': {
                                            color: '#949390',
                                            fontWeight: 400,
                                            fontFamily: 'Apercu-Light'
                                        },
                                        '&:focus-visible': {
                                            outline: 0
                                        }
                                    }
                                }}
                            >
                                <TextareaAutosize
                                    aria-label="empty textarea"
                                    placeholder="YOUR MESSAGE"
                                    minRows={5}
                                    style={{
                                        font: 'inherit',
                                    }}
                                />
                            </FormControl>
                            <Stack flexDirection="row" 
                                justifyContent="flex-end" 
                                sx={{ py : 3 }}
                            >
                                <Button 
                                    size="large" 
                                    variant="contained" 
                                    fullWidth={matchUpMd ? false : true}
                                    onClick={handleOpen}
                                    sx={{
                                        px: 4
                                    }}
                                >
                                    <Typography>&lt;Send&gt;</Typography>
                                </Button>
                            </Stack>
                        </Stack>
                        <Stack flex={2} sx={{ display: matchUpMd ? 'flex' : 'none' }}></Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Modal
                open={open}
                // onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <CloseIcon fontSize="small" 
                        sx={{
                            position: 'absolute',
                            top: 20,
                            right: 20,
                            cursor: 'pointer'
                        }}
                        onClick={handleClose}
                    />
                    <Typography 
                        sx={{ 
                            fontFamily: 'Apercu-Light',
                            textAlign: 'center', 
                            color: '#F4F2ED' 
                        }}
                    >Your message was successfully sent!</Typography>
                    <Typography 
                        sx={{ 
                            fontFamily: 'Apercu-Light',
                            fontStyle: 'italic', 
                            textAlign: 'center', 
                            color: '#F4F2ED' 
                        }}
                    >We will get back to you very soon..</Typography>
                </Box>
            </Modal>
        </Box>
    );
}