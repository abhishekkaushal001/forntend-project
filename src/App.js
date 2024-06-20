import React, { useState } from 'react';
import './App.css';
import ListItem from './components/ListItem';

const items = [
  "Page 1", "Page 2", "Page 3", "Page 4"
]

function App() {
  const [allSelected, setAllSelected] = useState(false);

  return (
    <div class="card">
      {/* All Pages */}
      <div class="container" onClick={() => setAllSelected(!allSelected)}>
        <div> All pages </div>
        <div class={"blue-checkbox " + (allSelected ? "selected" : "")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="16"
            viewBox="0 0 17 13"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M0.68 6.59199L6.22879 11.5271C6.24925 11.5453 6.28055 11.5437 6.29899 11.5235L16.32 0.519989"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>

      <hr class="divider" />

      {/* Page 1-4 */}
      {items.map((item, index) =>
        <ListItem key={item + index} heading={item} />
      )}

      <hr class="divider" />

      <button class="btn-yellow">Done</button>
    </div>
  );
}

export default App;
