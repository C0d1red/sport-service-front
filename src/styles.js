import {makeStyles} from '@material-ui/core/styles';

const styles = () => ({
    leftToolBar: {
        flex: 1,
    },
    shortArticleCard: {
        width: '30%',
        margin: '20px',
    },
    longArticleCard: {
        margin: '20px',
    },
    form: {
        "& > *":{
            margin: '10px'
        }
    },
    center: {
        textAlign: 'center'
    },
    createArticleIcon: {
        fontSize: 70
    },
    loginCard: {
        textAlign: 'center',
    }
});

export const useStyles = makeStyles(styles, {index: 1, name: 'Default'});
