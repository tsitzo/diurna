import React, { useContext } from "react";
import { FlatList } from "react-native";

import SafeArea from "../../../components/layout/SafeArea";
import CategoryPickerTile from "../../../components/misc/CategoryPickerTile";

import { SettingsContext } from "../../../context/Settings.context";

import { styles } from "./styles";

const SettingsSelectCategoriesScreen = () => {
  const { categories } = useContext(SettingsContext);
  return (
    <SafeArea>
      <FlatList
        style={styles.list}
        data={categories}
        renderItem={({ item }) => <CategoryPickerTile category={item} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

export default SettingsSelectCategoriesScreen;
