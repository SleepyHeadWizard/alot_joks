import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";

const App = () => {
    const [joke, setJoke] = useState("");

    const getJoke = async () => {
        try {
            const response = await fetch(
                "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,explicit&type=single"
            );
            const data = await response.json();
            setJoke(data.joke);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Alot of jokes
            </Text>
            <View style={styles.jokeContainer}>
                <Text style={styles.jokeText}>{joke}</Text>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={getJoke}>
                
                <Text style={styles.buttonText}>
                    (❁´◡`❁)
                    </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e0f7fa",  // Light blue for calm and fun atmosphere
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#2c3e50",  // Dark navy for trust and attention
        marginBottom: 24,
        textAlign: "center",
    },
    jokeContainer: {
        backgroundColor: "#f9f9f9",  // Light neutral for clean look
        borderRadius: 15,
        padding: 20,
        marginBottom: 24,
        width: "100%",
        alignItems: "center",
        shadowColor: "#b0bec5",  // Subtle shadow for depth
        shadowOffset: { width: 1, height: 2 },
        shadowRadius: 10,
        shadowOpacity: 0.8,
        elevation: 4,
    },
    jokeText: {
        fontSize: 22,
        fontWeight: "300",
        lineHeight: 30,
        color: "#333739",  // Soft dark gray for readability without harshness
        textAlign: "center",
    },
    button: {
        padding: 16,
        backgroundColor: "#ffa726",  // Vibrant orange for action
        borderRadius: 10,
        shadowColor: "#ffa726",
        shadowOffset: { width: 1, height: 2 },
        shadowRadius: 100,
        shadowOpacity: 1,
        elevation: 4,
    },
    buttonText: {
        fontSize: 20,
        color: "#ffffff",  // White for contrast on the orange button
        fontWeight: "bold",
    },
});


export default App;
