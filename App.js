import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Colors } from "./src/config";
import Navigator from "./src/navigators";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar
				animated
				backgroundColor={Colors.dark}
				barStyle="light-content"
			/>
			<Navigator />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: Colors.dark },
});
