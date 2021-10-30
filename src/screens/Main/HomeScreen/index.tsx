import React, { useContext, useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import axios from "axios";

import Loading from "../../../components/layout/Loading";
import SafeArea from "../../../components/layout/SafeArea";
import NewsPanel from "../../../components/misc/NewsPanel";
import Typography from "../../../components/text/Typography";

import { SettingsContext } from "../../../context/Settings.context";
import { News } from "../../../types/types";

import { styles } from "./styles";
import { API_KEY } from "@env";

const HomeScreen = () => {
  const { selectedCountry } = useContext(SettingsContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [news, setNews] = useState<News[] | null>(null);

  useEffect(() => {
    const fetchNews = async (country: string) => {
      setIsLoading(true);
      setError(false);
      try {
        const response: any = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=${country}&pageSize=100&apiKey=${API_KEY}`
        );

        setNews(response.data.articles);
      } catch (error) {
        setError(true);
      }
      setIsLoading(false);
    };

    fetchNews(selectedCountry);
  }, [selectedCountry]);

  if (isLoading) {
    return (
      <SafeArea>
        <Loading />
      </SafeArea>
    );
  }

  if (error) {
    return (
      <SafeArea>
        <View style={styles.centeredPage}>
          <Typography variant="md">Error fetching data.</Typography>
          <Typography variant="md">Go back and search again..</Typography>
        </View>
      </SafeArea>
    );
  }

  if (!isLoading && !error && news?.length === 0) {
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
        data={news}
        renderItem={({ item }) => <NewsPanel news={item} />}
        keyExtractor={(item) => item.url}
        pagingEnabled
      />
    </SafeArea>
  );
};

export default HomeScreen;
