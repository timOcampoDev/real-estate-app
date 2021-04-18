import {createMuiTheme, makeStyles} from '@material-ui/core/styles';

export const THEME = createMuiTheme({
    body: {
        text: 'cyan',
    },

    header: {
        background: 'navy',
        color: '',
    }
});

export const useStyles = makeStyles((theme) => ({
    header: {
        color: theme.body.text,
        background: theme.header.background,
    },
}));


