import React, { createContext, useState } from "react";
import moment from 'moment';

import avatar from "../../assets/carmen-sandiego.png";

export const TweetContext = createContext(null);

export function TweetProvider({ children }) {
  const [likes, setLikes] = useState(460);
  const [retweets, setRetweets] = useState(65);
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);

  const handleToggleLiked = () => {
    isLiked ? setLikes(likes - 1) : setLikes(likes + 1);
    setIsLiked(!isLiked);
  }

  const handleToggleRetweet = () => {
    isRetweeted ? setRetweets(retweets - 1) : setRetweets(retweets + 1);
    setIsRetweeted(!isRetweeted);
  }


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
        handleToggleLiked,
        handleToggleRetweet,
        date: moment().format("LT - MMM Do, YYYY")
      }}
    >
      {children}
    </TweetContext.Provider>
  );
}
