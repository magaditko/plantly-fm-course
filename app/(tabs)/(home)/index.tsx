import { FlatList, StyleSheet } from "react-native";
import { theme } from "@/theme";
import { useRouter } from "expo-router";
import { usePlantStore } from "@/store/plantsStore";
import { PlantCard } from "@/components/PlantCard";
import { PlantlyButton } from "@/components/PlantlyButton";

export default function App() {
  const router = useRouter();
  const plants = usePlantStore((state) => state.plants);
  return (
    <FlatList
      data={plants}
      renderItem={({ item }) => <PlantCard plant={item} />}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      ListEmptyComponent={
        <PlantlyButton
          title="Add your first plant"
          onPress={() => {
            router.navigate("/new");
          }}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  contentContainer: {
    padding: 12,
  },
});
