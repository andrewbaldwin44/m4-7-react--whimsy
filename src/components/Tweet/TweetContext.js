import React, { createContext, useState } from "react";
import moment from 'moment';

import avatar from "../../assets/carmen-sandiego.png";

export const TweetContext = createContext(null);

export function TweetProvider({ children }) {
  const [likes, setLikes] = useState(460);
  const [retweets, setRetweets] = useState(65);
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);

  return (
    <TweetContext.Provider
      value={{
        tweetContents: "Where in the world am I?",
        displayName: "Carmen Sandiego ✨",
        username: "carmen-sandiego",
        avatarSrc: avatar,
        isLikedByCurrentUser: isLiked,
        isRetweetedByCurrentUser: isRetweeted,
        likes,
        retweets,
        date: moment().format("LT - MMM Do, YYYY")
      }}
    >
      {children}
    </TweetContext.Provider>
  );
}
