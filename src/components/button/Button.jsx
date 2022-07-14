import React, { useState } from "react";

export function Button() {
  const [dogs, setDogs] = useState(() => {});

  function deleteDogFromList({ target }) {
    let newList = { ...dogs };
    delete newList[target.id];

    setDogs(() => newList);
  }
  function fetchDogsFromAPI() {
    return window
      .fetch("https://dog.ceo/api/breeds/list/all")
      .then((dogs) => {
        return dogs.json();
      })
      .then((data) => {
        console.log("data", data.message);
        setDogs(() => data.message);
      });
  }

  return (
    <div>
      <button onClick={fetchDogsFromAPI}>get dogs</button>

      <ul>
        {dogs &&
          Object.keys(dogs).map((dog) => {
            return (
              <li key={dog} id={dog} onClick={deleteDogFromList}>
                {dog}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
