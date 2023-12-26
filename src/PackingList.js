import { useState } from "react";
import { Item } from "./Item";
export function PackingList({
  items,
  handleDelete,
  handleToggle,
  handleClear,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description.localeCompare));
  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item
              item={item}
              key={item.id}
              handleDelete={handleDelete}
              handleToggle={handleToggle}
            />
          ))}
        </ul>
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by input</option>
            <option value="description">Sort by description </option>
            <option value="packed">Sort by packed status</option>
          </select>
          <button onClick={handleClear}>Clear List</button>
        </div>
      </div>
    </>
  );
}
