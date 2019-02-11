export default {
    modal: {
        wrapper: {
            borderWidth: 1,
            borderColor: '#056A8E',
            width: '80%',
            backgroundColor: '#fff',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 50
        },
        header: {
            body: {
                borderWidth: 1,
                borderColor: '#fff',
                backgroundColor: '#056A8E',
                padding: 15
            },
            title: {
                fontSize: 22,
                color: '#fff',
                textAlign: 'center'
            },
            subtitle: {
                color: '#fff',
                textAlign: 'center'
            }
        },
        content: {
            padding: 20
        },
        footer: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            padding: 10,
            borderTopWidth: 1,
            borderColor: '#056A8E'
        },
        messages: {
            error: {
                backgroundColor: '#f01c0c',
                color: '#fff',
                textAlign: 'center',
                fontSize: 16,
                padding: 10
            },
            warning: {
                backgroundColor: '#ffe554',
                color: '#000',
                textAlign: 'center',
                fontSize: 16,
                padding: 10
            },
            textDanger: {
                color: '#f01c0c',
                textAlign: 'center',
                fontSize: 16,
                marginTop: 40
            }
        }
    }
};
