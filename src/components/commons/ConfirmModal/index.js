import React from 'react';
import PropTypes from 'prop-types';
import {Modal, View, Text} from 'react-native';
import {Button} from 'react-native-elements';

import styles from './styles';

const ConfirmModal = ({onAccept, onDismiss, text}) => (
    <Modal
        animationType="fade"
        transparent
        visible
        onRequestClose={onDismiss}
    >
        <View style={styles.modal.wrapper}>
            <View style={styles.modal.content}>
                <Text style={styles.modal.messages.textDanger}>
                    {text}
                </Text>
            </View>
            <View style={styles.modal.footer}>
                <Button
                    onPress={onDismiss}
                    raised
                    title="Cancelar"
                    color="#eb3437"
                    backgroundColor="#fff"
                    borderRadius={6}
                />
                <Button
                    onPress={onAccept}
                    raised
                    title="Aceptar"
                    backgroundColor="#0295cf"
                    borderRadius={6}
                />
            </View>
        </View>
    </Modal>
);

ConfirmModal.propTypes = {
    onAccept: PropTypes.func.isRequired,
    onDismiss: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
};

export default ConfirmModal;
