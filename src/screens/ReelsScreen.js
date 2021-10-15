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
				renderItem={({ item }) => <Reel item={item} />}
			/>
		</SafeAreaView>
	);
}

const Reel = ({ item }) => {
	const video = useRef(null);
	const [shouldPlay, setShouldPlay] = useState(false);

	const videos = [
		"https://v16m.tiktokcdn.com/d71f7f6634b4d35e4d3d77fbb68d1cb7/616a5813/video/tos/useast2a/tos-useast2a-ve-0068c002/d6a8eab795954b60aab54f4a98556397/?a=1233&br=3066&bt=1533&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=98Z~oeYh4kag3&l=202110152241330101880612273A179C58&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3dmbzo6Zjl0ODMzNzczM0ApZWQ8N2dpO2U5Nzk3OWYzZWcuXmpkcjQwcGZgLS1kMTZzczQwYTY1My4xLTQ2MTJeYDI6Yw%3D%3D&vl=&vr=",
		"https://v16m.tiktokcdn.com/b811e1dcf623778aa91c08c66715bd47/616a5814/video/tos/useast2a/tos-useast2a-pve-0068/4c76da16c9dc4f62927fa2fc31acaaf5/?a=1233&br=3342&bt=1671&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=98Z~oeYh4kag3&l=202110152241330101880612273A179C58&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=am5raTY6ZjlzODMzNzczM0ApODo1PGRmNmU7Nzs4ZzM4NmczbDJecjRfLmJgLS1kMTZzczYzL2FhYzJjMmJfLzE1YzY6Yw%3D%3D&vl=&vr=",
		"https://v16m.tiktokcdn.com/dacb902adde5344d53596940c3f40788/616a4ef0/video/tos/useast2a/tos-useast2a-ve-0068c003/49a24b3447f24fa99896cd7d70cb7523/?a=1233&br=2092&bt=1046&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=98Z~oeYh4kag3&l=2021101522024001018907316536166607&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3lzeTY6ZjdmODMzNzczM0ApOGllNzo7aGRpN2U4NzQzNWdnXzJscjRfY2JgLS1kMTZzczI0LV41YjIzNGJfYl4xMGA6Yw%3D%3D&vl=&vr=",
		"https://v16m.tiktokcdn.com/1bee40e10c07f6b0fb5e3ac3e463a7e1/616a5c03/video/tos/useast2a/tos-useast2a-ve-0068c002/6dc2ffb9ae8441c891a673dbf9938e33/?a=1233&br=1716&bt=858&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=98Z~oeYh4kag3&l=202110152258330101902090884A19016B&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amY0eTY6ZjdwODMzNzczM0ApNzw2OTs0Ojw7NzY5O2Q5ZWctM2c2cjQwa19gLS1kMTZzc2EvYC5jMC82LjEwMV5fMi06Yw%3D%3D&vl=&vr=",
		"https://v16m.tiktokcdn.com/f7a170f091aa1f7e488a9e0f107e5637/616a5c0a/video/tos/alisg/tos-alisg-pve-0037c001/06d44a1c1abc4938b8fafd59dd46e147/?a=1233&br=3726&bt=1863&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=98Z~oeYh4kag3&l=202110152258330101902090884A19016B&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3h4bjM6Zjo2ODMzODczNEApaGY4Ozk6ODxoN2g1OTZnM2czcWBgcjRnYTNgLS1kMS1zc2EvYmIuNmI2Yi0tMTAxMDQ6Yw%3D%3D&vl=&vr=",
		"https://v16m.tiktokcdn.com/1815f0a98a2c6e37f65c920251e7fed6/616a5c17/video/tos/alisg/tos-alisg-pve-0037c001/1d4b0a9fcf354d09bce0e82e75f39e32/?a=1340&br=1442&bt=721&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=SfCx~eYh4kag3&l=202110152258350101910261530818F8CD&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3NmOjo6Zjc5ODMzODczNEApNGc3NDdoZ2Q0N2lkNTM5ZGdzaHNycjRfMGJgLS1kMS1zczM0YDZeX2A0XjQxNjNeYmE6Yw%3D%3D&vl=&vr=",
		"https://v16m.tiktokcdn.com/74077f15bd579d933c968f08557376db/616a5c09/video/tos/useast2a/tos-useast2a-ve-0068c002/ef7872cdda314e8b8cbffbdeeccbb2af/?a=1233&br=4002&bt=2001&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=98Z~oeYh4kag3&l=202110152258350101910261530818F8CD&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amo8cmU6Zm1qNzMzNzczM0ApODxnNGU3ODs6NzdkOjg1Z2dfL2VkcjRfa3JgLS1kMTZzc2A2XzJfNC1eLV40Y2JgMy06Yw%3D%3D&vl=&vr=",
		"https://v16m.tiktokcdn.com/a77869729664dc7f6d2ff6441beb37ce/616a5c33/video/tos/useast2a/tos-useast2a-ve-0068c003/8571c0d35add4172ac5952e8b039e438/?a=1233&br=1528&bt=764&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=98Z~oeYh4kag3&l=202110152258350101910261530818F8CD&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3ZxZjM6ZjpqNzMzNzczM0ApNTg2N2Y2NTs6N2ZoZGRpO2doZy5tcjRvbWxgLS1kMTZzc2ItNDVeMjMxL15iYzA1L2M6Yw%3D%3D&vl=&vr=",
		"https://v16m.tiktokcdn.com/d2fdca818f698d566f1cfa4f2e32bb69/616a5c07/video/tos/useast2a/tos-useast2a-ve-0068c003/e5304fc307514f95b0662285a684d0f1/?a=1233&br=3520&bt=1760&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=98Z~oeYh4kag3&l=202110152258350101910261530818F8CD&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3V1dGY6ZnRuODMzNzczM0ApODNpOWY4NDxkN2U8ZTM3ZWczY2JmcjRnci9gLS1kMTZzczFfXi00M2FeMS5hNTUwLy86Yw%3D%3D&vl=&vr=",
		"https://v16m.tiktokcdn.com/d94495b5890fff8611ae6af0410f592e/616a5c05/video/tos/useast2a/tos-useast2a-ve-0068c004/ed9c033a9404414881e45f5861c8f3b9/?a=1233&br=2980&bt=1490&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=98Z~oeYh4kag3&l=202110152258350101910261530818F8CD&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M247dTc6ZjRwODMzNzczM0ApaDM4N2ZlOWVnN2c7aWdlZWcvLWJvcjRvcWNgLS1kMTZzczYtYV9hMmNhXjQwMTReLy06Yw%3D%3D&vl=&vr=",
	];

	return (
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
						source={{ uri: videos[Math.floor(Math.random() * 9)] }}
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
	);
};

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
