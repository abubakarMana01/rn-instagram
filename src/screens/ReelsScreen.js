import React, { useState, useRef } from "react";
import {
	StyleSheet,
	StatusBar,
	FlatList,
	View,
	Dimensions,
	TouchableOpacity,
	SafeAreaView,
	Platform,
} from "react-native";
import { Video } from "expo-av";
import Vid from "react-native-video";

import { Colors } from "../config";
import ReelsHeader from "../components/Reels/ReelsHeader";
import ReelSideBar from "../components/Reels/ReelSideBar";
import ReelFooterContent from "../components/Reels/ReelFooterContent";
import AppLoadingAnimation from "../components/AppLoadingAnimation";

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
];

export default function ReelsScreen() {
	const video = useRef(null);
	const [shouldPlay, setShouldPlay] = useState(false);

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar
				backgroundColor={Colors.dark}
				animated
				barStyle="light-content"
			/>
			<View style={styles.reelsHeaderContainer}>
				<ReelsHeader />
			</View>
			<FlatList
				pagingEnabled
				data={posts}
				keyExtractor={item => item.key.toString()}
				renderItem={({ item }) => (
					<View style={styles.reelContainer}>
						<View style={styles.reelBackground}>
							<TouchableOpacity
								activeOpacity={0.8}
								style={styles.videoContainer}
								onPress={() => {
									setShouldPlay(!shouldPlay);
								}}
							>
								<Video
									ref={video}
									style={styles.video}
									source={require("../../assets/videos/reel.mp4")}
									resizeMode="contain"
									isLooping={false}
									shouldPlay={shouldPlay}
								/>
							</TouchableOpacity>
							<View style={styles.reelFooterContainer}>
								<ReelFooterContent reel={item} />
							</View>
							<View style={styles.reelSideBarContainer}>
								<ReelSideBar />
							</View>
						</View>
					</View>
				)}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	reelContainer: {
		height:
			Platform.OS === "ios"
				? Dimensions.get("window").height - 70
				: Dimensions.get("window").height - 50,
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

	video: {
		alignSelf: "center",
		flex: 1,
		height: "100%",
		width: "100%",
	},
	videoContainer: {
		position: "absolute",
		width: "100%",
		height: "100%",
	},
});
