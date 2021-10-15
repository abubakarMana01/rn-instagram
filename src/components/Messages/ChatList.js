import React, { useState } from "react";
import { StyleSheet, View, FlatList, TextInput, Platform } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Chat from "./Chat";
import { Colors } from "../../config";

const ChatList = () => {
	const [data, setData] = useState([
		{
			id: "1",
			username: "Ahmad Muhammad",
			lastSeen: "Active today",
			imageUri:
				"https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg",
		},
		{
			id: "2",
			username: "SHEIKH MOH",
			lastSeen: "Active yesterday",
			imageUri:
				"https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg",
		},
		{
			id: "3",
			username: "❌Jaafar❌",
			lastSeen: "Active 1w ago",
			imageUri:
				"https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg",
		},
		{
			id: "4",
			username: "FULL-STACK DEVELOPER",
			lastSeen: "Active today",
			imageUri:
				"https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg",
		},
		{
			id: "5",
			username: "davidrakosi",
			lastSeen: "Active yesterday",
			imageUri:
				"https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg",
		},
		{
			id: "6",
			username: "ibn_rabiu_jr7",
			lastSeen: "Active 2months ago",
			imageUri:
				"https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg",
		},
		{
			id: "7",
			username: "hamzax_jr",
			lastSeen: "Active 1w ago",
			imageUri:
				"https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg",
		},
		{
			id: "8",
			username: "Fa_iz",
			lastSeen: "Active yesterday",
			imageUri:
				"https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg",
		},
		{
			id: "9",
			username: "Nanarsh",
			lastSeen: "Active 2days ago",
			imageUri:
				"https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg",
		},
	]);

	const [input, setInput] = useState("");

	const SearchBar = () => (
		<View style={styles.textInputContainer}>
			<AntDesign name="search1" color={Colors.light} size={15} />
			<TextInput
				clearButtonMode="always"
				placeholder="Search"
				placeholderTextColor={Colors.lightgrey}
				style={styles.textInput}
				onChangeText={text => {
					setInput(text);
				}}
				value={input}
			/>
		</View>
	);

	return (
		<View>
			<FlatList
				contentContainerStyle={{ backgroundColor: Colors.dark }}
				ListHeaderComponent={() => <SearchBar />}
				keyExtractor={item => item.id}
				data={data.filter(item => item.username.includes(input))}
				renderItem={({ item }) => (
					<View style={styles.chatContainer}>
						<Chat
							username={item.username}
							lastSeen={item.lastSeen}
							imageUri={item.imageUri}
						/>
					</View>
				)}
			/>
		</View>
	);
};

export default ChatList;

const styles = StyleSheet.create({
	chatContainer: {
		paddingVertical: 15,
		paddingHorizontal: 15,
	},
	textInputContainer: {
		backgroundColor: "#636363",
		paddingLeft: 10,
		paddingVertical: Platform.OS === "ios" ? 10 : 5,
		borderRadius: 10,
		marginVertical: 10,
		marginHorizontal: 15,
		flexDirection: "row",
		alignItems: "center",
	},
	textInput: {
		marginLeft: 10,
		flex: 1,
		color: Colors.light,
	},
});
