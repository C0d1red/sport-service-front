import {makeStyles} from '@material-ui/core/styles';

const styles = () => ({
    leftToolBar: {
        flex: 1,
    },
    shortArticleCard: {
        height: 400,
        width: 400,
        display:'block',
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
    profileLargeIcon: {
        fontSize: 200,
        textAlign: 'center'
    },
    bottomButton: {
        position: 'absolute',
        bottom: 0
    },
    maxSize: {
        width: '100%',
        height: '100%'
    },
    tagCard: {
        "& > *":{
            height: '2vw',
            padding: '10px',
            textAlign: 'center',
            backgroundColor: '#d1d1d1',
            display:'flex',
            justifyContent:'center'
        }
    }
});

export const useStyles = makeStyles(styles, {index: 1, name: 'Default'});
