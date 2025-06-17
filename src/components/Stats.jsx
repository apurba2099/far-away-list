// Stats/Footer Component
export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">Start adding some items to your packing list👜🚀</p>
    );
  }

  //Derived State
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  // console.log(numItems);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go! ✈️"
          : `🛄You have ${numItems} items on your list, and you already packed
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
