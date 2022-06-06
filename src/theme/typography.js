// ----------------------------------------------------------------------

function pxToRem(value) {
    return `${value / 16}rem`;
}
    
function responsiveFontSizes({ xs, sm, md, lg, xl }) {
    return {
        "@media (min-width:0px)": {
            fontSize: pxToRem(xs),
        },
        "@media (min-width:576px)": {
            fontSize: pxToRem(sm),
        },
        "@media (min-width:992px)": {
            fontSize: pxToRem(md),
        },
        "@media (min-width:1440px)": {
            fontSize: pxToRem(lg),
        },
        "@media (min-width:1728px)": {
            fontSize: pxToRem(xl),
        },
    };
}
    
// const FONT_PRIMARY = "BRLNSR"; // Google Font
// const FONT_PRIMARY = "Mochiy Pop P One, sans-serif"; // Google Font
const FONT_PRIMARY = "Apercu"; // Local Font
// const FONT_SECONDARY = "American";

const typography = {
    fontFamily: FONT_PRIMARY,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
        fontWeight: 700,
        fontSize: pxToRem(45),
        ...responsiveFontSizes({ xs: 100, sm: 120, md: 140, lg: 160, xl: 200 }),
    },
    h2: {
        fontWeight: 700,
        lineHeight: 1.2,
        fontSize: pxToRem(35),
        ...responsiveFontSizes({ xs: 45, sm: 65, md: 90, lg: 115, xl: 140 }),
    },
    h3: {
        fontWeight: 500,
        lineHeight: 1.2,
        fontSize: pxToRem(28),
        ...responsiveFontSizes({ xs: 28, sm: 45, md: 60, lg: 75, xl: 90 }),
    },
    h4: {
        // fontFamily: FONT_SECONDARY,
        fontWeight: 700,
        lineHeight: 1.2,
        fontSize: pxToRem(20),
        ...responsiveFontSizes({ xs: 35, sm: 45, md: 52, lg: 60, xl: 70 }),
    },
    h5: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(18),
        fontFamily: 'Apercu-Bold',
        ...responsiveFontSizes({ xs: 80, sm: 90, md: 100, lg: 110, xl: 120 }),
    },
    h6: {
        fontWeight: 700,
        lineHeight: 28 / 18,
        fontSize: pxToRem(17),
        ...responsiveFontSizes({ sm: 14, md: 16, lg: 18 }),
    },
    subtitle1: {
        fontWeight: 400,
        lineHeight: 1.5,
        fontSize: pxToRem(16),
        fontFamily: 'Apercu-Light',
        ...responsiveFontSizes({ xs: 16, sm: 22, md: 28, lg: 34, xl: 40 })
    },
    subtitle2: {
        fontWeight: 600,
        lineHeight: 22 / 14,
        fontSize: pxToRem(14),
        ...responsiveFontSizes({ sm: 10, md: 12, lg: 14 })
    },
    body1: {
        lineHeight: 1.2,
        fontSize: pxToRem(15),
        fontFamily: 'Apercu-Light',
        ...responsiveFontSizes({ xs: 15, sm: 18, md: 20, lg: 22, xl: 25 })
    },
    body2: {
        fontSize: pxToRem(16),
        ...responsiveFontSizes({ xs: 12, sm: 14, md: 15, lg: 17, xl: 19 })
    },
    caption: {
        lineHeight: 1.5,
        fontSize: pxToRem(12),
        ...responsiveFontSizes({ xs: 8, sm: 10, md: 12, lg: 14, xl: 16 })
    },
    overline: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(12),
        letterSpacing: 1.1,
        textTransform: "uppercase",
    },
    button: {
        fontWeight: 700,
        lineHeight: 24 / 14,
        fontSize: pxToRem(14),
        textTransform: "capitalize",
    },
};

export default typography;
    