import React from "react";
import { FlatList, View, StyleSheet, RefreshControl } from "react-native";
import AppLoadingAnimation from "../components/AppLoadingAnimation";
import HomeCustomHeader from "../components/HomeCustomHeader";

import Post from "../components/Post";
import Stories from "../components/Stories/Stories";

const posts = [
	{
		user: {
			imageUrl:
				"https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg",
			username: "abubakarMana01",
		},
		imageUrl:
			"https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg",
		caption: "Beautiful city #instagram",
		likes: 421,
		postedAt: "8 minutes ago",
		key: 1,
	},
	{
		user: {
			imageUrl:
				"https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg",
			username: "memphisdepay",
		},
		imageUrl:
			"https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg",
		caption: "Beautiful city #instagram",
		likes: 1323423,
		postedAt: "10 minutes ago",
		key: 2,
	},
	{
		user: {
			imageUrl:
				"https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg",
			username: "abubakarMana01",
		},
		imageUrl:
			"https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg",
		caption: "Beautiful city #instagram",
		likes: 421,
		postedAt: "8 minutes ago",
		key: 3,
	},
	{
		user: {
			imageUrl:
				"https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg",
			username: "memphisdepay",
		},
		imageUrl:
			"https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg",
		caption: "Beautiful city #instagram",
		likes: 1323423,
		postedAt: "10 minutes ago",
		key: 4,
	},
	{
		user: {
			imageUrl:
				"https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg",
			username: "abubakarMana01",
		},
		imageUrl:
			"https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg",
		caption: "Beautiful city #instagram",
		likes: 421,
		postedAt: "8 minutes ago",
		key: 5,
	},
	{
		user: {
			imageUrl:
				"https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg",
			username: "memphisdepay",
		},
		imageUrl:
			"https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg",
		caption: "Beautiful city #instagram",
		likes: 1323423,
		postedAt: "10 minutes ago",
		key: 6,
	},
	{
		user: {
			imageUrl:
				"https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg",
			username: "abubakarMana01",
		},
		imageUrl:
			"https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg",
		caption: "Beautiful city #instagram",
		likes: 421,
		postedAt: "8 minutes ago",
		key: 7,
	},
	{
		user: {
			imageUrl:
				"https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg",
			username: "memphisdepay",
		},
		imageUrl:
			"https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg",
		caption: "Beautiful city #instagram",
		likes: 1323423,
		postedAt: "10 minutes ago",
		key: 8,
	},
	{
		user: {
			imageUrl:
				"https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg",
			username: "abubakarMana01",
		},
		imageUrl:
			"https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg",
		caption: "Beautiful city #instagram",
		likes: 421,
		postedAt: "8 minutes ago",
		key: 9,
	},
	{
		user: {
			imageUrl:
				"https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg",
			username: "memphisdepay",
		},
		imageUrl:
			"https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg",
		caption: "Beautiful city #instagram",
		likes: 1323423,
		postedAt: "10 minutes ago",
		key: 10,
	},
	{
		user: {
			imageUrl:
				"https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg",
			username: "abubakarMana01",
		},
		imageUrl:
			"https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg",
		caption: "Beautiful city #instagram",
		likes: 421,
		postedAt: "8 minutes ago",
		key: 11,
	},
	{
		user: {
			imageUrl:
				"https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg",
			username: "memphisdepay",
		},
		imageUrl:
			"https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg",
		caption: "Beautiful city #instagram",
		likes: 1323423,
		postedAt: "10 minutes ago",
		key: 12,
	},
];

const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<HomeCustomHeader messagePress={() => navigation.navigate("Messages")} />
			{!posts.length ? (
				<View style={{ flex: 1 }}>
					<Stories />
					<AppLoadingAnimation />
				</View>
			) : (
				<FlatList
					refreshControl={
						<RefreshControl
							onRefresh={() => console.log("Refreshed")}
							refreshing={false}
						/>
					}
					showsVerticalScrollIndicator={false}
					keyExtractor={item => item.key.toString()}
					data={posts}
					renderItem={({ item }) => <Post post={item} />}
					ListHeaderComponent={Stories}
				/>
			)}
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: { flex: 1 },
});
