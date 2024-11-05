import { Text, View, StyleSheet } from "react-native";
import { theme } from "@/theme";

export default function NewScreen() {
  return (
    <View style={styles.container}>
      <Text>New plant</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
  },
});
