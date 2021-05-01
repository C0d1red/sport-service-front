import {makeStyles} from '@material-ui/core/styles';

const styles = () => ({
    leftToolBar: {
        flex: 1,
    },
    shortArticleCard: {
        width: '15vw',
        height: '15vw',
        margin: '20px',
        display:'flex',
        justifyContent: 'space-between',
        flexDirection: 'column'
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
    }
});

export const useStyles = makeStyles(styles, {index: 1, name: 'Default'});
