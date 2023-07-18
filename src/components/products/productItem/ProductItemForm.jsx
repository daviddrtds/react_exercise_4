import { useRef, useState } from "react";
import styles from "./ProductitemForm.module.css";
import Input from "../../ui/Input";

export default function ProductItemForm({ list, onAddToCart }) {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandle = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      !enteredAmount.trim().length ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={styles.form} onSubmit={submitHandle} action="">
      <Input
        ref={amountInputRef}
        label="Qt:"
        input={{
          id: list.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
      {!amountIsValid && <p>Please enter number between 1 and 5.</p>}
    </form>
  );
}
