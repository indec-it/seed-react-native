import {Dimensions} from 'react-native';

const getWindowSize = () => ({
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
});

const styles = {
    container: [
        {
            flex: 1,
            flexDirection: 'column'
        },
        getWindowSize()
    ],
    content: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20
    }
};

export default styles;
