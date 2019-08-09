import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback, Easing, Animated, NativeModules } from 'react-native';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);

class AnimatedButton extends Component {

    state = {
        spinValue: new Animated.Value(0),
        width: new Animated.Value(this.props.beforShrunkWidth),
        short: false,
        counter: 0
    }
    shrinkButton = () => {
        Animated.timing(this.state.width, {
            toValue: this.props.afterShrunkWidth,
            easing: Easing.bezier(0.075, 0.82, 0.365, 1),
            duration: this.props.shrinkDuration,
        }).start(
            () => {
                    Animated.timing(
                        this.state.spinValue,
                        {
                            toValue: 1,
                            duration: this.props.rotationDuration,
                            easing:  Easing.bezier(0.75, 0, 0.25, 1),
                        }
                    ).start();
            }
        );
        this.state.spinValue.setValue(0);
        this.setState({ counter: this.state.counter + 1, short: true });
    }
    spreadButton = () => {

        Animated.timing(this.state.width, {
            toValue: this.props.beforShrunkWidth,
            easing: Easing.bezier(0.075, 0.82, 0.365, 1),
            duration: this.props.spreadDuration,
        }).start();
        this.setState({  counter: this.state.counter + 1, short: false });
    }

    spin = this.state.spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '720deg']
    })
    render() {
        return (
            <TouchableWithoutFeedback
                style={{
                    height: this.props.height,
                    width: this.state.width
                }
                }
                onPress={this.state.short ? this.spreadButton : this.shrinkButton}>
                <Animated.View
                    style={{
                        NativeModules: true,
                        width: this.state.width,
                        transform: [{ rotate: this.spin }],
                        height: this.props.height,
                        borderRadius: this.props.borderRadius,
                        backgroundColor: this.props.backgroundColor,
                    }}>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: 1
                    }}>
                        {this.state.short ?
                            (<Image
                                resizeMode='cover'
                                style={{
                                    width: this.props.imageWidth,
                                    height: this.props.height / 2,
                                }}
                                source={this.props.image} />) :
                            (<Text style={{
                                fontSize: this.props.fontSize,
                                fontWeight: this.props.fontWeight,
                                textAlign: 'center',
                                color: this.props.textColor
                            }}>{this.props.text}</Text>)
                        }
                    </View>
                </Animated.View>
            </TouchableWithoutFeedback >
        );
    }
}

export default AnimatedButton;
