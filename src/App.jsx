//Components
import From from "./components/From.jsx";
import Logo from "./components/Logo.jsx";
import PackingList from "./components/PackingList.jsx";
import Stats from "./components/Stats.jsx";

//useState
import { useState } from "react";

/* Trial Items
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 1, packed: false },
// ];
*/

// Main APP Component
export default function App() {
  const [items, setItems] = useState([]);

  //Add new item handle functions
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  //Handle delete items
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  // Handle the check box
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  //Handel the Clearlist
  function handleClearList() {
    // ---Good---
    // alert("Are you sure you want to delete all Items 🚀");
    // setItems([]);

    // ---Better---
    const confirmClear = window.confirm(
      "Do you really want to delete all item list?🚀"
    );
    if (confirmClear) {
      setItems([]);
    }
    // else {
    //   alert("list was not clear🙂");
    // }
  }
  return (
    <div className="app">
      <Logo />
      <From onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
