import { useState } from "react";
export function Form({ handleItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    handleItems(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your 😍 trip</h3>
        <select
          name=""
          id=""
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item .."
          value={
            description
          } /**BIND THE INITIAL VALUE OF DESCRIPTION TO THE INPUT FIELD */
          onChange={(e) => setDescription(e.target.value)}
          /**By providing a value without an onChange event to update it, the input becomes read-only and doesn't allow the user to modify its content.
The value={description} attribute binds the value of the input field to the description state. However, if you don't include an onChange event that updates the description state when the input changes, the value of the input field will be stuck with whatever value the description state initially holds, and the user won't be able to modify it. */
        />
        <button>Add</button>
      </form>
    </>
  );
}
