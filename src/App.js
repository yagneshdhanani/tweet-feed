import "./App.css";
import Tweet from "./component/Tweet";

import profile from "./assets/profile.jpg";
import poster from "./assets/poster.jpg";

const tweets = {
  user: {
    name: "Tommy Shelby",
    id: "TOMMYOBE",
    image: profile,
  },
  tweet: {
    text: "By order of the Peaky Blinders.",
    tags:
      "#peakybliner #thomas #thommy #tommyshelby #obe #byorderofthepeakyblinder",
    images: poster,
    times: {
      time: "10:25 PM",
      date: "Sep 10, 2013",
    },
  },
};

function App() {
  return (
    <div className="container">
      <Tweet tweets={tweets} />
    </div>
  );
}

export default App;
