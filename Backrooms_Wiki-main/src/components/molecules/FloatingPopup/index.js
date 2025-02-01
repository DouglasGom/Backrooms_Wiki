import React, { useEffect, useState } from "react";
import { Modal, View, Text, StyleSheet, Animated } from "react-native";

export const FloatingPopup = ({ visible, message, onClose }) => {
    const [fadeAnim] = useState(new Animated.Value(0));

    useEffect(() => {
        if (visible) {
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start();

            setTimeout(() => {
                Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }).start(() => onClose());
            }, 1000);
        }
    }, [visible]);

    if (!visible) return null;

    return (
        <Modal transparent animationType="fade" visible={visible}>
            <View style={styles.overlay}>
                <Animated.View style={[styles.popup, { opacity: fadeAnim }]}>
                    <Text style={styles.popupText}>{message}</Text>
                </Animated.View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
    popup: {
        width: 200,
        padding: 16,
        backgroundColor: "#333",
        borderRadius: 10,
        alignItems: "center",
    },
    popupText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});
