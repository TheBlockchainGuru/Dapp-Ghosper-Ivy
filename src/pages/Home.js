import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {
    Box,
    CardMedia,
    Typography,
    Stack,
    useMediaQuery,
    Link,
} from '@mui/material';
import Typewriter from 'typewriter-effect';
import styled, { keyframes } from 'styled-components';
import { Fade } from 'react-reveal';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import HoverVideoPlayer from 'react-hover-video-player';

export default function Home () {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const matchUp390 = useMediaQuery('(max-width: 390px)');
    const matchUp411 = useMediaQuery('(max-width: 411px)');
    const matchUp575 = useMediaQuery('(max-width: 575px)');
    const matchUp608 = useMediaQuery('(max-width: 608px)');
    const matchUp641 = useMediaQuery('(max-width: 641px)');
    const matchUp991 = useMediaQuery('(max-width: 991px)');

    const arrow = keyframes`
        0%   {transform: translateY(-20px)}
        100% {transform: translateY( 20px)}
    `

    const ArrowImage = styled.div`
        display: flex;
        width: 100%;
        justify-content: center;
        animation: ${arrow} .5s infinite linear alternate;
    `

    return (
        <Box>
            <Stack 
                justifyContent="center"
                sx={{ 
                    px: matchUpMd ? 9 : 2, 
                    py: matchUpMd ? 0 : 6,
                    height: matchUpMd ? 'calc(50vh - 64px)': 'none'
                }}
            >
                <Stack
                    flexDirection="row"
                    alignItems="center"
                >
                    <Typography variant="h3" 
                        flex={2} id="typedtext1" 
                        sx={{ 
                            lineHeight: 1.2, 
                            fontFamily: 'Apercu-Medium',
                            height: matchUp390
                                    ? 168
                                    : matchUp411
                                    ? 140 
                                    : matchUp575
                                    ? 101
                                    : matchUp608
                                    ? 272
                                    : matchUp641
                                    ? 218
                                    : matchUp991
                                    ? 163
                                    : 'none'
                        }}>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString('We’re an <span style="font-family:Apercu-Bold-Italic;">uber-cool</span> <br /><span style="text-decoration:underline">game development<br />studio.</span>')
                                .callFunction(() => {
                                    console.log('String typed out!');
                                })
                                .pauseFor(2500)
                                // .deleteAll()
                                .callFunction(() => {
                                    console.log('All strings were deleted');
                                })
                                .start();
                            }}
                        />
                    </Typography>
                    <Stack flex={1} flexDirection="row" justifyContent="center">
                        <Box component="img" src="/img/mark.png" sx={{ maxWidth: 162, width: '30%' }} />
                    </Stack>
                </Stack>
            </Stack>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: matchUpMd ? '1fr 1fr 1fr 1fr 1fr' : '1fr 1fr 1fr',
                    gridTemplateRows: matchUpMd ? 'repeat(3, 50vh)' : 'repeat(6, 1fr)'
                }}
            >
                <Stack 
                    flex={1} 
                    flexDirection="row" 
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        bgcolor: '#010001',
                        gridColumn: 1,
                        gridRow: matchUpMd ? 1 : 2
                    }}
                >
                    <Box
                        sx={{
                            width: '65%'
                        }}
                    >
                        <HoverVideoPlayer
                            videoSrc="/img/compass.webm"
                            type='video/webm'
                            playsinline
                            style={{
                                cursor: 'pointer'
                            }}
                        />
                        {/* <CardMedia 
                            component="video"
                            image="/img/news.webm"
                            autoPlay
                            muted
                            loop="infinite"
                            sx={{
                                // position:"absolute",
                                // top: 0,
                                width: '100%',
                            }}
                        /> */}
                    </Box>
                </Stack>
                <Stack 
                    alignItems="center"
                    flex={1} 
                    flexDirection="row" 
                    justifyContent="center"
                    sx={{
                        position: 'relative',
                        gridColumn: matchUpMd ? '2 / span 1' : '2 / span 2',
                        gridRow: matchUpMd ? 1 : 2
                    }}
                >
                    <ArrowImage>
                        <Box component="img" src="/img/arrow.png" 
                            sx={{
                                // maxWidth: 90,
                                width: matchUpMd ? '25%' : '15%'
                            }}
                        />
                    </ArrowImage>
                </Stack>
                <Stack
                    flexDirection="row"
                    sx={{
                        gridColumn: matchUpMd ? '3 / span 3' : '1 / span 3',
                    }}
                >
                    {/* <Box 
                        component="img" 
                        src="/img/video.png" 
                        sx={{ width: '100%' }} 
                    /> */}
                    
                    <CardMedia 
                        component="video"
                        image="/img/video.webm"
                        autoPlay
                        muted
                        loop="infinite"
                        playsinline
                        type='video/webm'
                        sx={{
                            // position:"absolute",
                            // top: 0,
                            objectFit: 'fill',
                            width: '100%',
                        }}
                    />
                </Stack>
                <Stack 
                    flex={1} 
                    flexDirection="row" 
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        bgcolor: '#010001',
                        gridColumn: 1,
                        gridRow: matchUpMd ? 2 : 3
                    }}
                >
                    <Typography variant="h4" 
                        sx={{ 
                            pl: matchUpMd ? 8 : 2, 
                            color: '#F4F2ED', 
                            textDecoration: 'underline',
                            fontSize: useMediaQuery('(min-width:280px)') ? 'inherit' : "24px !important"
                        }}
                    >Our Vision</Typography>
                </Stack>
                <Stack 
                    alignItems="center"
                    flex={1} 
                    flexDirection="row" 
                    justifyContent="center"
                    sx={{
                        gridColumn: matchUpMd ? 2 : '2 / span 2',
                        gridRow: matchUpMd ? 2 : 3
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: 'Apercu',
                            fontWeight: 600,
                            px: matchUpMd ? 12 : 2,
                            pl: matchUpMd ? 4 : 2
                        }}
                    >We’re Changing the Way the World Thinks About &lt;Gaming&gt;.</Typography>
                </Stack>
                <Stack
                    flexDirection="row"
                    alignItems="center"
                    sx={{ 
                        px: matchUpMd ? 8 : 2,
                        gridRow: matchUpMd ? 2 : 4,
                        gridColumn: matchUpMd ? '3 / span 3' : '1 / span 3',
                        bgcolor: '#010001',
                    }}
                >
                    <Typography 
                        variant="body1" 
                        sx={{ 
                            color: '#F4F2ED', 
                            fontWeight: 400,
                            fontFamily: 'Apercu-Light'
                        }}
                    >
                        The future of gaming will change your idea of socialization & entertainment.
                        <br />Our projects are developed for gamers by gamers from all around the globe.
                        <br /><br />
                        Join us on our adventure of unlimited possibilities.
                    </Typography>
                </Stack>
                <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                    <Stack
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            bgcolor: '#729BF5',
                            color: '#F4F2ED',
                            gridRow: matchUpMd ? 3 : 5,
                        }}
                    >
                        <Box>
                            <Typography variant="h5" sx={{ textAlign: 'center', lineHeight: 1 }}>
                                {isVisible ? <CountUp duration={.2} end={2} /> : 0}
                            </Typography>
                            <Typography variant="subtitle1">locations</Typography>
                        </Box>
                    </Stack>
                )}
                </VisibilitySensor>
                            
                <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                    <Stack
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            color: '#0C0C0C',
                            gridRow: matchUpMd ? 3 : 5,
                        }}
                    >
                        <Box>
                            <Typography variant="h5" sx={{ textAlign: 'center', lineHeight: 1 }}>
                                {isVisible ? <CountUp duration={1.3} end={13} /> : 0}
                            </Typography>
                            <Typography variant="subtitle1">employees</Typography>
                        </Box>
                    </Stack>
                )}
                </VisibilitySensor>
                <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                    <Stack
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            bgcolor: '#010001',
                            color: '#F4F2ED',
                            gridRow: matchUpMd ? 3 : 5,
                        }}
                    >
                        <Box>
                            <Typography variant="h5" sx={{ textAlign: 'center', lineHeight: 1 }}>
                                {/* <CountUp end={2} duration={1}/> */}
                                {isVisible ? <CountUp duration={.2} end={2} /> : 0}
                            </Typography>
                            <Typography variant="subtitle1">core teams</Typography>
                        </Box>
                    </Stack>
                )}
                </VisibilitySensor>
                <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                    <Stack
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            color: '#0C0C0C',
                            gridColumn: matchUpMd ? 4 : 3,
                            gridRow: matchUpMd ? 3 : 6,
                        }}
                    >
                        <Box>
                            <Typography variant="h5" sx={{ textAlign: 'center', lineHeight: 1 }}>
                                {isVisible ? <CountUp duration={.2} end={2} /> : 0}
                            </Typography>
                            <Typography variant="subtitle1">projects</Typography>
                        </Box>
                    </Stack>
                )}
                </VisibilitySensor>
                <Stack 
                    alignItems="center"
                    flex={1} 
                    flexDirection="row" 
                    justifyContent="center"
                    sx={{
                        position: 'relative',
                        display: matchUpMd ? 'none' : 'flex',
                        gridColumn: 2,
                        gridRow: matchUpMd ? 3 : 6,
                    }}
                >
                    <ArrowImage>
                        <Box component="img" src="/img/arrow.png" 
                            sx={{
                                // maxWidth: 90,
                                width: matchUpMd ? '25%' : '30%'
                                // width:
                            }}
                        />
                    </ArrowImage>
                </Stack>
                <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                    <Stack
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            bgcolor: '#010001',
                            color: '#F4F2ED',
                            gridColumn: matchUpMd ? 5 : 1,
                            gridRow: matchUpMd ? 3 : 6,
                        }}
                    >
                        <Box>
                            <Typography variant="h5" sx={{ textAlign: 'center', lineHeight: 1 }}>
                                {isVisible ? <CountUp duration={.4} end={4} /> : 0}
                            </Typography>
                            <Typography variant="subtitle1">collaborations</Typography>
                        </Box>
                    </Stack>
                )}
                </VisibilitySensor>
            </Box>
            <Box sx={{
                py: matchUpMd ? 15 : 2,
                px: matchUpMd ? 8 : 2,
                pb: matchUpMd ? 26 : 8
            }}>
                <Typography variant="h2" sx={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>Introducing the <br /> Future.</Typography>
                <Stack
                    gap={15}
                    sx={{
                        pt: matchUpMd ? 9 : 2
                    }}
                >
                    <Fade right>
                        <Box sx={{
                            display: 'grid',
                            gridTemplateColumns: matchUpMd ? '1fr 1fr' : '2fr 1fr'
                        }}>
                            <Box>
                                <Typography variant="h3" sx={{ color: '#729BF5', fontFamily: 'Apercu-Medium' }}>01</Typography>
                                <Typography variant="h3" sx={{ fontFamily: 'Apercu-Medium' }}>Ghospers</Typography>
                                <Typography sx={{ maxWidth: 615, pt: 4, pr: 1 }}>
                                    Ghospers is a free to play PvP and PvE game, based on the Ghost characters we have created. 
                                    It is launching on PC & Mobile in Summer 2022. 
                                    The characters are NFT based and the game can be used to Play to Earn for everyone that would like to enjoy that ranked gameplay.
                                </Typography>
                                <Box sx={{ pt: 4 }}>
                                    <Typography>
                                        <Link 
                                            href="https://www.ghospers.com" 
                                            sx={{ color: '#729BF5', textDecorationColor: '#729BF5' }} 
                                            target="_blank"
                                        >&lt;learn more&gt;</Link>
                                    </Typography>
                                </Box>
                            </Box>
                            <Stack alignItems="center">
                                <Stack sx={{ height: '100%', bgcolor: '#010001', px: 0 }} justifyContent="center">
                                    <CardMedia 
                                        component="video"
                                        image="/img/ghost.webm"
                                        autoPlay
                                        type='video/webm'
                                        muted
                                        playsinline
                                        loop="infinite"
                                        sx={{
                                            // position:"absolute",
                                            // top: 0,
                                            // width: '100%',
                                            maxWidth:  matchUpMd ? 312 : '100%',
                                        }}
                                    />                                
                                </Stack>
                            </Stack>
                        </Box>
                    </Fade>
                    <Fade left>
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: matchUpMd ? '1fr 1fr' : '1fr 2fr',
                            }}
                        >
                            <Stack flex={1} alignItems="center">
                                <Stack sx={{ height: '100%', bgcolor: '#010001', px: matchUpMd ? 3 : 1 }} justifyContent="center">
                                    <Box component="img" src="/img/haven.png" sx={{ maxWidth: matchUpMd ? 264 : '100%' }} />
                                </Stack>
                            </Stack>
                            <Stack flex={1} alignItems="flex-end" sx={{ py: matchUpMd ? 4 : 0, pb: 8 }}>
                                <Typography variant="h3" sx={{ color: '#729BF5',fontFamily: 'Apercu-Medium', textAlign: 'right' }}>02</Typography>
                                <Typography variant="h3" sx={{ textAlign: 'right', fontFamily: 'Apercu-Medium' }}>Haven’s Compass</Typography>
                                <Typography sx={{ textAlign: 'right', maxWidth: 615, pt: 4, pl: 1 }}>
                                    One of the first FPS Hero Shooters on the Blockchain, the world is ending, and your Hero will need to survive and find the way to their safe place. 
                                    Built on Unreal Engine 5 and will be available on both PC & Mobile.
                                </Typography>
                                <Box sx={{ pt: 4 }}>
                                    <Typography sx={{ textAlign: 'right' }}>
                                        <Link 
                                            href="https://havenscompass.com/" 
                                            sx={{ color: '#729BF5', textDecorationColor: '#729BF5' }} 
                                            target="_blank"
                                        >&lt;learn more&gt;
                                        </Link>
                                    </Typography>
                                </Box>
                            </Stack>
                        </Box>
                    </Fade>
                </Stack>
            </Box>
        </Box>
    );
}