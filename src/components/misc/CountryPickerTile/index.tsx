import React, { FC, useContext } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

import Typography from "../../text/Typography";

import { Country } from "../../../types/types";
import { styles } from "./styles";
import { SettingsContext } from "../../../context/Settings.context";

interface ICountryPickerTileProps {
  country: Country;
}

const CountryPickerTile: FC<ICountryPickerTileProps> = ({ country }) => {
  const { colors } = useTheme();
  const { selectedCountry, selectCountry } = useContext(SettingsContext);

  return (
    <TouchableOpacity onPress={() => selectCountry(country.iso)}>
      <View style={styles.row}>
        <View style={styles.leftContainer}>
          {/* <Image source={{ uri: country.flag }} style={styles.flag} /> */}
          <Image
            source={country.flag}
            style={styles.flag}
            resizeMode="contain"
          />
          <View>
            <Typography variant="selectionTile">{country.name}</Typography>
            <Typography color="subtext">{country.name}</Typography>
          </View>
        </View>

        {selectedCountry === country.iso && (
          <View>
            <Ionicons
              name="md-checkmark-sharp"
              size={15}
              color={colors.primary}
            />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CountryPickerTile;
