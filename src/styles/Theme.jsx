import {createMuiTheme, makeStyles} from '@material-ui/core/styles';

/**
 *  Defines the style theme for each component
 */
export const THEME = createMuiTheme({
    body: {
        text: 'cyan',
    },

    header: {
        background: 'none',
        color: '',
    },
    masthead: {
        position: 'absolute',
        background: '#1b3a3a8c',
        height: '45vh',
    },

    home:{
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
        },

        home: {
            paddingTop: home.paddingTop,
            paddingRight : home.paddingRight
        }
    })
});


