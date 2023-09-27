import React from "react";
import emojipedia from "../emojipedia";
import Emoji from "./Emoji";

// method to pass into the map fuction to loop through the emoji array
function displayEmoji(emojiTerm) {
  return (
    <Emoji
      // key is unique indentifier for eack emoji
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(displayEmoji)}</dl>
    </div>
  );
}

export default App;
