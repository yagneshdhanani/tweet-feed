import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Image from "./Image";
import Text from "./Text";
import Time from "./Time";

export default function Tweet({ tweets }) {
  return (
    <div className="tweet-container">
      <Header user={tweets.user} />
      <Text tweet={tweets.tweet} />
      <Image feedImage={tweets.tweet.images} />
      <Time timeDetail={tweets.tweet.times} />
      <Footer />
    </div>
  );
}
