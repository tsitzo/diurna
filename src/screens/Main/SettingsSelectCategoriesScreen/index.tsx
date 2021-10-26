import React, { useContext } from "react";
import { View, FlatList } from "react-native";

import SafeArea from "../../../components/layout/SafeArea";
import Spacer from "../../../components/layout/Spacer";
import CategoryPickerTile from "../../../components/misc/CategoryPickerTile";

import { SettingsContext } from "../../../context/Settings.context";

import { styles } from "./styles";

const SettingsSelectCategoriesScreen = () => {
  const { categories } = useContext(SettingsContext);
  return (
    <SafeArea>
      <View style={styles.page}>
        <Spacer y={20} />
        <FlatList
          data={categories}
          renderItem={({ item }) => <CategoryPickerTile category={item} />}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.name}
        />
      </View>
    </SafeArea>
  );
};

export default SettingsSelectCategoriesScreen;
