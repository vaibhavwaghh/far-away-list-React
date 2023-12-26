import "./index.css";
import { useState } from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { PackingList } from "./PackingList";

import { Stats } from "./Stats";
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Bag", quantity: 12, packed: true },
// ];
function App() {
  const [items, setItems] = useState([]);
  function handleItems(newItem) {
    setItems((items) => [...items, newItem]);
  }
  function handleDelete(id) {
    setItems((items) => items.filter((el) => el.id !== id));
  }
  function handleToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClear() {
    const confirmed = window.confirm(
      "Are you sure you want to delete the entire list"
    );
    if (confirmed) setItems([]);
  }
  return (
    <>
      <div className="app">
        <Logo />
        <Form handleItems={handleItems} />
        <PackingList
          items={items}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
          handleClear={handleClear}
        />
        <Stats items={items} />
      </div>
    </>
  );
}

export default App;
