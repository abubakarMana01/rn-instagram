import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import AccountCustomHeader from "../components/Account/AccountCustomHeader";
import AccountSocialInfo from "../components/Account/AccountSocialInfo";
import AccountBio from "../components/Account/AccountBio";
import AccountChooseOptions from "../components/Account/AccountChooseOptions";
import AccountTopTabNavigator from "../navigators/AccountTopTabs";

const AccountScreen = () => {
	return (
		<View style={styles.container}>
			<AccountCustomHeader />
			<AccountSocialInfo />
			<AccountBio />
			<AccountChooseOptions />
			<AccountTopTabNavigator />
		</View>
	);
};

export default AccountScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
