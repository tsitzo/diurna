import React, { FC, useContext } from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

import Typography from "../../text/Typography";
import { Category } from "../../../types/types";
import { SettingsContext } from "../../../context/Settings.context";
import { getCategoryIcon } from "../../../utils/getCategoryIcon";
import { styles } from "./styles";

interface ICategoryPickerTileProps {
  category: Category;
}
const CategoryPickerTile: FC<ICategoryPickerTileProps> = ({ category }) => {
  const { selectedCategories, addCategory, removeCategory } =
    useContext(SettingsContext);

  const { colors } = useTheme();

  const isChosen = selectedCategories.find((c) => c.name === category.name);

  return (
    <TouchableOpacity
      onPress={() =>
        isChosen ? removeCategory(category) : addCategory(category)
      }
    >
      <View style={styles.row}>
        <View style={styles.leftContainer}>
          <View style={styles.iconWrapper}>
            {getCategoryIcon(category.name, colors.text)}
          </View>
          <Typography variant="selectionTile">{category.name}</Typography>
        </View>

        {isChosen && (
          <View>
            <Ionicons
              name="md-checkmark-sharp"
              size={16}
              color={colors.primary}
            />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CategoryPickerTile;
