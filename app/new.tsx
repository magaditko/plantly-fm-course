import { Text, View, StyleSheet, TextInput, Alert } from "react-native";
import { theme } from "@/theme";
import { PlantlyButton } from "@/components/PlantlyButton";
import { PlantlyImage } from "@/components/PlantlyImage";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useRouter } from "expo-router";
import { usePlantStore } from "@/store/plantsStore";

export default function NewScreen() {
  const router = useRouter();
  const addPlant = usePlantStore((state) => state.addPlant);

  const [name, setName] = useState<string>();
  const [days, setDays] = useState<string>();

  const handleSubmit = () => {
    if (!name) {
      return Alert.alert("ValidationError", "Give your plant a name");
    }
    if (!days) {
      return Alert.alert(
        "Validation Error",
        `How often does ${name} need to be watered?`,
      );
    }

    if (Number.isNaN(Number(days))) {
      return Alert.alert(
        "Validation Error",
        "Watering frequency must be a be a number",
      );
    }

    addPlant(name, Number(days));
    router.navigate("/");
  };

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.centered}>
        <PlantlyImage />
      </View>
      <Text style={styles.label}>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="E.g. Casper the Cactus"
        style={styles.input}
        autoCapitalize="words"
      />
      <Text style={styles.label}>Watering Frequency (every x days)</Text>
      <TextInput
        value={days}
        keyboardType="number-pad"
        onChangeText={setDays}
        placeholder="E.g. 6"
        style={styles.input}
      />
      <PlantlyButton title="Add plant" onPress={handleSubmit} />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  contentContainer: {
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 100,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    borderColor: theme.colorLightGrey,
    borderWidth: 2,
    borderRadius: 6,
    padding: 12,
    marginBottom: 24,
    fontSize: 18,
  },
  centered: {
    alignItems: "center",
  },
});
