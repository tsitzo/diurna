import React, { useContext } from "react";
import { FlatList } from "react-native";

import SafeArea from "../../../components/layout/SafeArea";
import NewsCard from "../../../components/misc/NewsCard";

import { BookmarksContext } from "../../../context/Bookmarks.context";
import { styles } from "./styles";

const BookmarksScreen = () => {
  const { bookmarks } = useContext(BookmarksContext);
  return (
    <SafeArea>
      <FlatList
        data={bookmarks}
        keyExtractor={(item) => item.url}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <NewsCard news={item} />}
      />
    </SafeArea>
  );
};

export default BookmarksScreen;
