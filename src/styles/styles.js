import { createUseStyles } from "react-jss";

export const styles = createUseStyles({
    app: {
        display: 'flex',
        width: '100%',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',

    },
    calcDiv: {
        width: '30%',
        height: '85%',
        border: '4px solid grey',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center', 
        borderRadius: '10px'
    },
    inputDiv: {
        width: '90%',
        height: '17%',
        border: 'solid 4px grey',
        borderRadius: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '35px'
    },
    buttonsDiv: {
        width: '90%',
        height: '65%',
        border: 'solid 2px grey',
        borderRadius: '15px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
    },
    numsDiv: {
        width: '100%',
        height: '80%',
        display: 'flex',
    },
    signDiv: {
        width: '100%',
        height: '20%',
        display: 'flex',
    },
    nums: {
        width: '80%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
    },
    signs: {
        width: '21%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',    
    },
    one: {
        width: '33.3%',
        height: '25%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px grey solid',
        borderTopLeftRadius: '12px',
        '&:hover': {
            color: 'white',
            backgroundColor: 'grey'
        }
    },
    
    two: {
        width: '33.3%',
        height: '25%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px grey solid',
        '&:hover': {
            color: 'white',
            backgroundColor: 'grey'
        }
    },
    three: {
        width: '33.4%',
        height: '25%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px grey solid',
        '&:hover': {
            color: 'white',
            backgroundColor: 'grey'
        }
    },
    four: {
        width: '33.3%',
        height: '25%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px grey solid',
        '&:hover': {
            color: 'white',
            backgroundColor: 'grey'
        }
    },
    five: {
        width: '33.3%',
        height: '25%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px grey solid',
        '&:hover': {
            color: 'white',
            backgroundColor: 'grey'
        }
    },
    six: {
        width: '33.4%',
        height: '25%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px grey solid',
        '&:hover': {
            color: 'white',
            backgroundColor: 'grey'
        }
    },
    seven: {
        width: '33.3%',
        height: '25%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px grey solid',
        '&:hover': {
            color: 'white',
            backgroundColor: 'grey'
        }
    },
    eigth: {
        width: '33.3%',
        height: '25%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px grey solid',
        '&:hover': {
            color: 'white',
            backgroundColor: 'grey'
        }
    },
    nine: {
        width: '33.4%',
        height: '25%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px grey solid',
        '&:hover': {
            color: 'white',
            backgroundColor: 'grey'
        }
    },
    zero: {
        width: '100%',
        height: '25%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px grey solid',
        '&:hover': {
            color: 'white',
            backgroundColor: 'grey'
        }
    },
    plus: {
        width: '100%',
        height: '25%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid grey',
        fontSize: '30px',
        borderTopRightRadius: '12px',
        '&:hover': {
            color: 'black',
            backgroundColor: 'orange'
        }
    },
    mult: {
        width: '100%',
        height: '25%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid grey',
        fontSize: '35px',
        '&:hover': {
            color: 'black',
            backgroundColor: 'orange'
        }
    },
    divide: {
        width: '100%',
        height: '25%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid grey',
        fontSize: '30px',
        '&:hover': {
            color: 'black',
            backgroundColor: 'orange'
        }
    },
    minus: {
        width: '100%',
        height: '25%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid grey',
        fontSize: '45px',
        '&:hover': {
            color: 'black',
            backgroundColor: 'orange'
        }
    },
    del: {
        width: '50%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid grey',
        borderBottomLeftRadius: '12px',
        '&:hover': {
            color: 'black',
            backgroundColor: 'red'
        }
    },
    equals: {
        width: '50%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid grey',
        borderBottomRightRadius: '12px',
        '&:hover': {
            color: 'white',
            backgroundColor: 'green'
        },
    }
})