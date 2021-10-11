import React, { useEffect } from "react";
import { StyleSheet, SafeAreaView, ScrollView, LogBox } from "react-native";

import { Colors } from "../config";
import MessagesCustomHeader from "../components/Messages/MessagesCustomHeader";
import MessagesTopTabs from "../navigators/MessagesTopTabs";

const MessagesScreen = ({ navigation }) => {
	useEffect(() => {
		LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<MessagesCustomHeader handleBackNavigation={() => navigation.goBack()} />
			<ScrollView>
				<MessagesTopTabs />
			</ScrollView>
		</SafeAreaView>
	);
};

export default MessagesScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
