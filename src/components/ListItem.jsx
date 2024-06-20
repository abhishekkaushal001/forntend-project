import React, { useState } from 'react';

const ListItem = ({heading}) => {
    const [selected, setSelected] = useState(false);
    
  return (
    <div class="container" onClick={() => setSelected(!selected)}>
        <div class="heading"> {heading} </div>
        <div class={"blue-checkbox " + (selected ? "selected" : "")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="16"
            viewBox="0 0 17 13"
            fill="none"
            stroke={selected ? "#fff" : "currentColor"}
          >
            <path
              d="M0.68 6.59199L6.22879 11.5271C6.24925 11.5453 6.28055 11.5437 6.29899 11.5235L16.32 0.519989"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
  )
}

export default ListItem