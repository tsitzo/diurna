import React, { useContext } from "react";
import { View, Text, FlatList } from "react-native";
import SafeArea from "../../../components/layout/SafeArea";
import NewsPanel from "../../../components/misc/NewsPanel";
import { BookmarksContext } from "../../../context/Bookmarks.context";

import { styles } from "./styles";

const HomeScreen = () => {
  const { bookmarks } = useContext(BookmarksContext);
  return (
    <SafeArea>
      <FlatList
        data={bookmarks}
        renderItem={({ item }) => <NewsPanel news={item} />}
        pagingEnabled
      />
    </SafeArea>
  );
};

export default HomeScreen;
