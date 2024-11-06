import { PlantType } from "@/store/plantsStore";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { PlantlyImage } from "./PlantlyImage";
import { theme } from "@/theme";
import { Link } from "expo-router";

export function PlantCard({ plant }: { plant: PlantType }) {
  return (
    // to pass parameters between screens we could use
    // href={{pathname: `plants/${plant.id}`, params: {action: "water"} }}
    <Link href={`plants/${plant.id}`} asChild>
      <Pressable style={styles.plantCard}>
        <PlantlyImage size={100} imageUri={plant.imageUri} />
        <View style={styles.details}>
          <Text numberOfLines={1} style={styles.plantName}>
            {plant.name}
          </Text>
          <Text style={styles.subtitle}>
            {plant.wateringFrequencyDays === 1
              ? "Water every day"
              : `Water every ${plant.wateringFrequencyDays} days`}
          </Text>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  plantCard: {
    flexDirection: "row",
    shadowColor: theme.colorBlack,
    backgroundColor: theme.colorWhite,
    borderRadius: 6,
    padding: 12,
    marginBottom: 12,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  details: {
    padding: 14,
    justifyContent: "center",
  },
  plantName: {
    fontSize: 18,
    marginBottom: 4,
  },
  subtitle: {
    color: theme.colorGrey,
  },
});
