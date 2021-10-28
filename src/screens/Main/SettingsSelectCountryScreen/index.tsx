import React from "react";
import { FlatList } from "react-native";

import SafeArea from "../../../components/layout/SafeArea";
import CountryPickerTile from "../../../components/misc/CountryPickerTile";
import { countries } from "../../../data/countries";

import { styles } from "./styles";

const SettingsSelectCountryScreen = () => {
  return (
    <SafeArea>
      <FlatList
        style={styles.list}
        data={countries}
        renderItem={({ item }) => <CountryPickerTile country={item} />}
        keyExtractor={(item) => item.iso.toString()}
        showsVerticalScrollIndicator={false}
      />
    </SafeArea>
  );
};

export default SettingsSelectCountryScreen;
