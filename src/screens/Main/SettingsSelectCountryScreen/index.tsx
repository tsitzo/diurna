import React from "react";
import { View, FlatList } from "react-native";

import SafeArea from "../../../components/layout/SafeArea";
import Spacer from "../../../components/layout/Spacer";
import CountryPickerTile from "../../../components/misc/CountryPickerTile";
import { countries } from "../../../data/countries";

import { styles } from "./styles";

const SettingsSelectCountryScreen = () => {
  return (
    <SafeArea>
      <View style={styles.page}>
        <Spacer y={20} />
        <FlatList
          data={countries}
          renderItem={({ item }) => <CountryPickerTile country={item} />}
          keyExtractor={(item) => item.iso.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeArea>
  );
};

export default SettingsSelectCountryScreen;
