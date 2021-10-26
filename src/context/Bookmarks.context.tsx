import React, { FC, useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { News } from "../types/types";

type BookmarksContextState = {
  bookmarks: News[];
  addToBookmarks: (news: News) => void;
  removeFromBookmarks: (news: News) => void;
};

const contextDefaultValue: BookmarksContextState = {
  bookmarks: [],
  addToBookmarks: () => {},
  removeFromBookmarks: () => {},
};

export const BookmarksContext =
  createContext<BookmarksContextState>(contextDefaultValue);

export const BookmarksContextProvider: FC = ({ children }) => {
  const [bookmarks, setBookmarks] = useState<News[]>(
    contextDefaultValue.bookmarks
  );

  const addToBookmarks = (news: News) => {
    setBookmarks([...bookmarks, news]);
  };

  const removeFromBookmarks = (news: News) => {
    setBookmarks(bookmarks.filter((bookmark) => bookmark.url !== news.url));
  };

  const saveBookmarks = async (value: News[]) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@diurna/bookmarks", jsonValue);
    } catch (error) {
      console.log(error);
    }
  };

  const loadBookmarks = async () => {
    try {
      const value = await AsyncStorage.getItem("@diurna/bookmarks");
      if (value !== null) {
        setBookmarks(JSON.parse(value));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadBookmarks();
  }, []);

  useEffect(() => {
    saveBookmarks(bookmarks);
  }, [bookmarks]);

  return (
    <BookmarksContext.Provider
      value={{ bookmarks, addToBookmarks, removeFromBookmarks }}
    >
      {children}
    </BookmarksContext.Provider>
  );
};
