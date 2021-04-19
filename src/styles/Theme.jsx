import { createMuiTheme, makeStyles} from '@material-ui/core/styles';

/**
 *  Defines the style theme for each component
 */
export const THEME = createMuiTheme({
    body: {
        text: 'cyan',
    },
    header: {
        background: 'none',
    },
    masthead: {
        position: 'absolute',
        background: `url("https://i.ibb.co/Vv6WFyC/qik-Seek-landing-hero.jpg")`,
        backgroundRepeat: 'no-repeat',
        height: '65vh',
        width: '100vh'
    },
    home:{
        color: 'aliceblue',
        paddingTop: '5rem',
        paddingRight: '2rem',
    }
});

/**
 * Export the themes created above
 */
export const useStyles = makeStyles((theme) => {
    const {body ,header , masthead, home} = theme

    return ({
        header: {
            color: body.text,
            background: header.background,
        },

        masthead:{
            position: masthead.position,
            background: masthead.background,
            height: masthead.height,
            backgroundRepeat: masthead.backgroundRepeat
        },

        home: {
            color: home.color,
            paddingTop: home.paddingTop,
            paddingRight : home.paddingRight
        }
    })
});


