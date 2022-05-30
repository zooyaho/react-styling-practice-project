import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  // 입력값이 유효한지 체크하는 state
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if(event.target.value.trim().length > 0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    // 입력한 값이 아무것도 없을때 list에 추가하지 않음.
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        {/* 인라인 스타일 props는 값으로 객체를 갖음. */}
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
