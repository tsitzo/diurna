import React, { FC, useContext } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

import Typography from "../../text/Typography";

import { CountryContext } from "../../../context/Country.context";
import { Country } from "../../../types/types";
import { styles } from "./styles";

interface ICountryPickerTileProps {
  country: Country;
}

const CountryPickerTile: FC<ICountryPickerTileProps> = ({ country }) => {
  const { colors } = useTheme();
  const { selectedCountry, selectCountry } = useContext(CountryContext);

  return (
    <TouchableOpacity onPress={() => selectCountry(country.iso)}>
      <View style={styles.row}>
        <View style={styles.leftContainer}>
          <Image source={{ uri: country.flag }} style={styles.flag} />
          <Typography variant="selectionTile">{country.name}</Typography>
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
