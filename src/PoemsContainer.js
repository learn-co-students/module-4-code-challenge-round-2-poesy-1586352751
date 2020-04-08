import React from "react";
import Poem from "./Poem";

const PoemsContainer = (propsObj) => {

  let {poems} = propsObj

  let renderPoems = poems.map((poem) => {
    return <Poem key={poem.id} poem={poem} />
  })

    return (
      <div className="poems-container">
        {
          renderPoems
        }
      </div>
    );
  }


export default PoemsContainer;
