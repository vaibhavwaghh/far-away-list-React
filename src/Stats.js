export function Stats({ items }) {
  if (items.length === 0) {
    return (
      <footer className="stats">
        <em>Start adding items to your packing list</em>
      </footer>
    );
  }
  const numOfItems = items.length;
  const numOfPackedItems = items.filter((el) => el.packed).length;
  const percentage = Math.round((numOfPackedItems / numOfItems) * 100);
  return (
    <>
      <footer className="stats">
        <em>
          {percentage === 100
            ? "You got everything! Ready to go ✈️ "
            : `You have ${numOfItems} items on your list and you have already packed ${numOfPackedItems} (${percentage}%)`}
        </em>
      </footer>
    </>
  );
}
