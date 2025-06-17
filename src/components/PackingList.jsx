import Item from "./Item";
import { useState } from "react";
//Packing list Component
export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  //Select changes order use state
  const [sortBy, setSortBy] = useState("input");

  // Sorting logic
  let sortedItems;

  //Inputs
  if (sortBy === "input") {
    sortedItems = items;
  }

  //Description
  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  //Packed
  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            key={item.id}
            onToggleItem={onToggleItem}
            onClearList={onClearList}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>

        {/* Clearing a list  */}
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
