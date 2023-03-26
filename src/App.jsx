import { useState } from "react";
import "./App.scss";

function App() {
  const [enteredName, setEnteredName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);

  const nameValid = enteredName.trim() !== "";
  const nameIsInvalid = !nameValid && nameTouched;

  const onChangeNameHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const onBlurNameHandler = () => {
    setNameTouched(true);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    setNameTouched(true);

    if (!nameValid) {
      return;
    }

    setEnteredName("");
    setNameTouched(false);
  };

  const inputClass = nameIsInvalid ? "form__input invalid" : "form__input";

  return (
    <>
      <div className="form-wrapper">
        <div className="form-section">
          <form className="form" onSubmit={submitFormHandler}>
            <label className="form__label" htmlFor="NAME">
              Name
            </label>
            <input
              value={enteredName}
              id="NAME"
              type="text"
              placeholder="name"
              className={inputClass}
              onChange={onChangeNameHandler}
              onBlur={onBlurNameHandler}
            />
            {nameIsInvalid && <p>Name must not be empty</p>}
            {/* <label className="form__label" htmlFor="ADDRESS">
              Email Address
            </label>
            <input
              value={enteredAddress}
              id="ADDRESS"
              type="text"
              placeholder="email"
              className="form__input"
              onChange={onChangeAddressHandler}
            /> */}
            <button className="form__button">Send</button>
          </form>
        </div>

        <div className="picture-section"></div>
      </div>

      {/* <Footer /> */}
    </>
  );
}

export default App;
