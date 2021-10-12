import React from "react";
import {
	StyleSheet,
	Text,
	Image,
	ImageBackground,
	FlatList,
	View,
	Dimensions,
} from "react-native";

import { Colors } from "../config";
import ReelsHeader from "../components/Reels/ReelsHeader";
import ReelSideBar from "../components/Reels/ReelSideBar";
import ReelFooterContent from "../components/Reels/ReelFooterContent";

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
		key: 2,
	},
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
		key: 3,
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
		key: 4,
	},
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
		key: 5,
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
		key: 6,
	},
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
		key: 7,
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
		key: 8,
	},
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
		key: 9,
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
		key: 10,
	},
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
		key: 11,
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
		key: 12,
	},
];

export default function ReelsScreen() {
	return (
		<View style={styles.container}>
			<View style={styles.reelsHeaderContainer}>
				<ReelsHeader />
			</View>
			<FlatList
				pagingEnabled
				data={posts}
				keyExtractor={item => item.key.toString()}
				renderItem={({ item }) => (
					<View style={styles.reelContainer}>
						<ImageBackground
							source={{ uri: item.imageUri }}
							style={styles.reelBackground}
						>
							<View style={styles.reelFooterContainer}>
								<ReelFooterContent reel={item} />
							</View>
							<View style={styles.reelSideBarContainer}>
								<ReelSideBar />
							</View>
						</ImageBackground>
					</View>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	reelContainer: {
		height: Dimensions.get("window").height - 50,
		backgroundColor: Colors.dark,
	},
	reelBackground: {
		width: "100%",
		height: "100%",
		flexDirection: "row",
		alignItems: "flex-end",
		justifyContent: "space-between",
	},
	reelsHeaderContainer: {
		position: "absolute",
		top: 0,
		width: "100%",
		zIndex: 1,
	},
	reelFooterContainer: {
		paddingHorizontal: 15,
		paddingVertical: 20,
		width: "75%",
	},
	reelSideBarContainer: {
		padding: 20,
		position: "absolute",
		right: 0,
		bottom: 0,
	},
});
