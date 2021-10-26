import React, { useContext, useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import axios from "axios";

import Loading from "../../../components/layout/Loading";
import SafeArea from "../../../components/layout/SafeArea";
import NewsCard from "../../../components/misc/NewsCard";
import Typography from "../../../components/text/Typography";

import { API_KEY } from "@env";

import { MainStackNavProps } from "../../../navigation/MainStack";
import { News } from "../../../types/types";

import { styles } from "./styles";
import { SettingsContext } from "../../../context/Settings.context";

const SearchResultsByCategoryScreen = ({
  route,
}: MainStackNavProps<"SearchResultsByCategoryScreen">) => {
  const { category } = route.params;
  const { selectedCountry } = useContext(SettingsContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<News[] | null>(null);

  useEffect(() => {
    const fetchSearchResults = async (country: string, category: string) => {
      setIsLoading(true);
      setError(false);
      try {
        const response: any = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=100&apiKey=${API_KEY}`
        );

        setSearchResults(response.data.articles);
      } catch (error) {
        setError(true);
      }
      setIsLoading(false);
    };

    fetchSearchResults(selectedCountry, category);
  }, [category]);

  if (isLoading) {
    return (
      <SafeArea>
        <Loading />
      </SafeArea>
    );
  }

  if (!!error) {
    return (
      <SafeArea>
        <View style={styles.centeredPage}>
          <Typography variant="md">Error fetching data.</Typography>
          <Typography variant="md">Go back and search again..</Typography>
        </View>
      </SafeArea>
    );
  }

  if (!isLoading && !error && searchResults?.length === 0) {
    return (
      <SafeArea>
        <View style={styles.centeredPage}>
          <Typography variant="md">No results found.</Typography>
        </View>
      </SafeArea>
    );
  }

  return (
    <SafeArea>
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.url}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <NewsCard news={item} />}
      />
    </SafeArea>
  );
};

export default SearchResultsByCategoryScreen;
