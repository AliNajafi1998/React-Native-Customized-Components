import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
class InputsCard extends Component {

    state = {
        cardDefaultWidth: (3 * Dimensions.get('screen').width) / 4
    }

    render() {
        const {
            width,
            height,
            seperatorsColor,
            marginBottom,
            marginEnd,
            marginStart,
            marginTop,
            borderRadius,
            backgroundColor,
            emailPlaceholderTextColor,
            emailPlaceholder,
            passwordPlaceholderTextColor,
            passwordPlaceholder
        } = this.props;

        return (

            <View style={[styles.container,
            {
                width: width ? width : this.state.cardDefaultWidth,
                height: height,
                marginBottom: marginBottom,
                marginEnd: marginEnd,
                marginStart: marginStart,
                marginTop: marginTop,
                borderRadius: borderRadius,
                backgroundColor: backgroundColor,
            }]
            }>
                <View style={[styles.seperatorLine, {
                    backgroundColor: seperatorsColor
                }]} />
                <View style={[styles.verticalSeperatorTop, {
                    backgroundColor: seperatorsColor
                }]} />
                <View style={[styles.verticalSeperatorBottom, {
                    backgroundColor: seperatorsColor
                }]} />
                <View style={styles.topIconBox} >
                    <Ionicons size={35} name={this.props.topIconImage} color='#fff' />
                </View>
                <View style={styles.bottomIconBox} >
                    <Ionicons size={35} name={this.props.bottomIconImage} color='#fff' />
                </View>
                <View style={styles.topTextInputBox}>
                    <TextInput style={{
                        fontSize: this.props.emailFontSize,
                        textAlign: this.props.emailTextAlign,
                        fontFamily: this.props.emailFontFamily,
                        color: this.props.emailTextColor
                    }}
                        placeholderTextColor={emailPlaceholderTextColor}
                        placeholder={emailPlaceholder}
                    />
                </View>
                <View style={styles.bottomTextInputBox}>
                    <TextInput
                        style={{
                            fontSize: this.props.passwordFontSize,
                            textAlign: this.props.passwordTextAlign,
                            fontFamily: this.props.passwordFontFamily,
                            color: this.props.passwordTextColor
                        }}
                        placeholderTextColor={passwordPlaceholderTextColor}
                        placeholder={passwordPlaceholder}
                        secureTextEntry
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    },
    seperatorLine: {
        position: 'absolute',
        height: 2,
        width: '92%',
        left: '4%',
        right: '4%',
        top: "50%"
    },
    verticalSeperatorTop: {
        position: 'absolute',
        width: 2,
        height: '40%',
        top: '5%',
        left: '25%',
        right: 0,
        bottom: 0
    },
    verticalSeperatorBottom: {
        position: 'absolute',
        width: 2,
        height: '40%',
        top: '55%',
        left: '25%',
        right: 0,
        bottom: 0
    },
    icon: {
        width: 35,
        height: 35,
    },
    topIconBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '25%',
        height: '50%',
        top: 0,
        left: 0
    },
    bottomIconBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '25%',
        height: '50%',
        bottom: 0,
        left: 0
    },

    topTextInputBox: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-start',
        alignContent: 'center',
        paddingEnd: 15,
        paddingStart: 15,
        position: 'absolute',
        width: '75%',
        height: '50%',
        top: 0,
        left: '25%'
    },
    bottomTextInputBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'center',
        paddingEnd: 15,
        paddingStart: 15,
        position: 'absolute',
        width: '75%',
        height: '50%',
        bottom: 0,
        left: '25%'
    }
});

export default InputsCard;
