import React from 'react';
import {View, Button, Linking} from 'react-native';

import styles from './styles';

const FalabellaButton = () => (
    <View style={styles.buttonContainer}>
        <Button
            title="Click aqu&iacute; para ir a Falabella"
            onPress={
                () => { Linking.openURL('https://www.falabella.com'); }
            }
        />
    </View>
);

export default FalabellaButton;
