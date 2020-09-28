import React, { Component } from 'react';
import { Text, Animated, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

const { height, width } = Dimensions.get('window');
const DURATION = {
    LONG: 3000,
    SHORT: 1500
}
const POSTION = {
    BOTTOM: 'bottom',
    TOP: 'top',
    CENTER: 'center'
}

class Toast extends Component {
    static defaultProps = {
        duration: this.SHORT_DURATION,
        position: POSTION.BOTTOM,
        positionOffset: 64,
        containerStyle: {
            paddingVertical: 12, paddingHorizontal: 16, borderRadius: 8,
            position: 'absolute', alignSelf: 'center', zIndex: 1000,
            minWidth: 250, maxWidth: width - 16 * 2
        },
        textStyle: {
            fontSize: 14, color: '#fff', textAlign: 'center'
        }
    }

    state = {
        isShow: false,
        title: '',
        color: ''
    }

    animatedOpacity = new Animated.Value(0);

    show = (title, color = '#28a25d', duration = DURATION.SHORT) => {
        this.setState({ isShow: true, title, color }, () => {
            Animated.timing(this.animatedOpacity, {
                toValue: 0.9,
                duration: 500,
                useNativeDriver: false,
            }).start(() => {
                setTimeout(() => {
                    Animated.timing(this.animatedOpacity, {
                        toValue: 0,
                        duration: 500,
                        useNativeDriver: false,
                    }).start(() => {
                        this.setState({ isShow: false });
                    });
                }, duration);
            });
        })
    }
    get positionStyle() {
        let { position, positionOffset } = this.props;
        const { BOTTOM, TOP, CENTER } = POSTION;
        switch (position) {
            case TOP:
                return {
                    top: positionOffset
                }
            case CENTER:
                return {
                    top: height / 2
                }
            case BOTTOM:
            default:
                return {
                    bottom: positionOffset
                }
        }
    }
    render() {
        let { isShow, color, title } = this.state;
        return isShow
            ? <Animated.View style={[this.props.containerStyle, {
                opacity: this.animatedOpacity,
                backgroundColor: color
            }, this.positionStyle]}>
                <Text style={{ fontSize: 14, color: '#fff', textAlign: 'center' }}>
                    {title}
                </Text>
            </Animated.View>
            : null
    }
}

Toast.propTypes = {
    duration: PropTypes.number,
    containerStyle: PropTypes.object,
    textStyle: PropTypes.object,
    position: PropTypes.string,
    positionOffset: PropTypes.number
}

export {
    Toast,
    DURATION,
    POSTION
}
