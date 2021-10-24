import React, { useContext } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";

import SafeArea from "../../../components/layout/SafeArea";
import Spacer from "../../../components/layout/Spacer";
import Typography from "../../../components/text/Typography";
import CategoryPickerTile from "../../../components/misc/CategoryPickerTile";

import { OnboardingStackNavProps } from "../../../navigation/OnboardingStack";
import { SettingsContext } from "../../../context/Settings.context";
import { styles } from "./styles";

const CategoriesSelectionScreen = ({
  navigation,
}: OnboardingStackNavProps<"CategoriesSelectionScreen">) => {
  const { colors } = useTheme();
  const { categories, selectedCategories, setFirstVisitFalse } =
    useContext(SettingsContext);
  return (
    <SafeArea>
      <View style={styles.page}>
        <View style={styles.topWrapper}>
          <Typography variant="xl">Select your interests</Typography>
          <Spacer y={5} />
          <Typography>
            Choose some of your favourites categories of interest for an easy
            access to related news.
          </Typography>
          <Spacer y={10} />
          <FlatList
            data={categories}
            renderItem={({ item }) => <CategoryPickerTile category={item} />}
            keyExtractor={(item) => item.name}
          />
        </View>

        <View style={styles.bottomWrapper}>
          <TouchableOpacity
            style={[
              styles.fab,
              {
                backgroundColor:
                  selectedCategories.length === 0 ? "grey" : colors.primary,
              },
            ]}
            onPress={() =>
              selectedCategories.length > 0 && setFirstVisitFalse()
            }
          >
            <Typography variant="fabText">Done</Typography>
          </TouchableOpacity>
        </View>
      </View>
    </SafeArea>
  );
};

export default CategoriesSelectionScreen;
