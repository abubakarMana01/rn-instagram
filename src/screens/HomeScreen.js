import React from "react";
import { SafeAreaView, FlatList, View, StyleSheet } from "react-native";

import Post from "../components/Post";
import Stories from "../components/Stories/Stories";

const posts = [
	{
		user: {
			imageUri:
				"https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg",
			username: "abubakarMana01",
		},
		imageUri:
			"https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg",
		caption: "Beautiful city #instagram",
		likes: 421,
		postedAt: "8 minutes ago",
		key: 1,
	},
	{
		user: {
			imageUri:
				"https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg",
			username: "memphisdepay",
		},
		imageUri:
			"https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg",
		caption: "Beautiful city #instagram",
		likes: 1323423,
		postedAt: "10 minutes ago",
		key: 2,
	},
];

const HomeScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View>
				<FlatList
					keyExtractor={item => item.key.toString()}
					data={posts}
					renderItem={({ item }) => <Post post={item} />}
					ListHeaderComponent={Stories}
				/>
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: { backgroundColor: "#fff" },
});
