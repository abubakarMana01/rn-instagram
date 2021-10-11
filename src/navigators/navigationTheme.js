import { DefaultTheme } from "@react-navigation/native";
import { Colors } from "../config";

export default {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: Colors.dark,
		card: Colors.dark,
		primary: Colors.light,
		text: Colors.light,
	},
};
