import { useTheme } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import {
  View,
  FlatList,
  Keyboard,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import SafeArea from "../../../components/layout/SafeArea";
import Spacer from "../../../components/layout/Spacer";
import Typography from "../../../components/text/Typography";

import { SettingsContext } from "../../../context/Settings.context";
import { getCategoryIcon } from "../../../utils/getCategoryIcon";

import { styles } from "./styles";
import { MainStackNavProps } from "../../../navigation/MainStack";

const ExploreScreen = ({ navigation }: MainStackNavProps<"MainTabs">) => {
  const { colors } = useTheme();
  const { selectedCategories } = useContext(SettingsContext);
  const [query, setQuery] = useState<string>("");

  return (
    <SafeArea>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <Spacer y={10} />
          <View style={[styles.searchBar, { backgroundColor: colors.card }]}>
            <Ionicons name="search-sharp" size={24} color={colors.text} />
            <TextInput
              style={[
                styles.searchInput,
                {
                  color: colors.text,
                  fontSize: 16,
                },
              ]}
              value={query}
              onChangeText={(e) => setQuery(e)}
              placeholderTextColor={colors.text}
              clearButtonMode="always"
              selectionColor={colors.primary}
              underlineColorAndroid={colors.primary}
              placeholder="Search"
              autoCapitalize="none"
              autoCorrect={false}
              onEndEditing={() => {
                if (query === "") return;
                navigation.navigate("SearchResultsScreen", {
                  query: query,
                });
                setQuery("");
              }}
            />
            {query.length > 0 && (
              <Ionicons
                name="close-circle-sharp"
                size={24}
                color={colors.text}
                onPress={() => setQuery("")}
              />
            )}
          </View>
          <Spacer y={10} />
          <FlatList
            style={{ paddingHorizontal: 7.5 }}
            data={selectedCategories}
            keyExtractor={(_, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  flex: 1,
                  aspectRatio: 1.2 / 1,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: colors.card,
                  margin: 7.5,
                  borderRadius: 5,
                }}
              >
                {getCategoryIcon(item.name, colors.primary, 1.5)}
                <Spacer y={10} />
                <Typography variant="selectionTile">{item.name}</Typography>
              </TouchableOpacity>
            )}
          />
        </View>
      </TouchableWithoutFeedback>
    </SafeArea>
  );
};

export default ExploreScreen;
