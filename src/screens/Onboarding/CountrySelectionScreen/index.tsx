import React, { useContext } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";

import SafeArea from "../../../components/layout/SafeArea";
import Spacer from "../../../components/layout/Spacer";
import Typography from "../../../components/text/Typography";
import { CountryContext } from "../../../context/Country.context";

import { countries } from "../../../data/countries";
import { OnboardingStackNavProps } from "../../../navigation/OnboardingStack";

import { styles } from "./styles";
import CountryPickerTile from "../../../components/misc/CountryPickerTile";

const CountrySelectionScreen = ({
  navigation,
}: OnboardingStackNavProps<"CountrySelectionScreen">) => {
  const { colors } = useTheme();
  const { selectedCountry } = useContext(CountryContext);
  return (
    <SafeArea>
      <View style={styles.page}>
        <View style={styles.topWrapper}>
          <Typography variant="xl">Select your country</Typography>
          <Spacer y={5} />
          <Typography>
            To get your best experience out of this app select a country of
            interest and its corresponding language{" "}
          </Typography>
          <Spacer y={10} />
          <FlatList
            data={countries}
            renderItem={({ item }) => <CountryPickerTile country={item} />}
            keyExtractor={(item) => item.iso}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <View style={styles.bottomWrapper}>
          <TouchableOpacity
            style={[
              styles.fab,
              {
                backgroundColor:
                  selectedCountry === "" ? "grey" : colors.primary,
              },
            ]}
            onPress={() => navigation.push("CategoriesSelectionScreen")}
          >
            <Typography>Next</Typography>
          </TouchableOpacity>
        </View>
      </View>
    </SafeArea>
  );
};

export default CountrySelectionScreen;
