import React from "react";

const AddGamer = () => {
  return (
    <div id="addgamer">
      <h4 className="text-center">선수 추가</h4>
      <form
        className="form"
        id="AddGamerForm"
        name="AddGamerForm"
        action="/gamer"
        method="post"
      >
        <div className="field">
          <label htmlFor="name">
            <b>이름</b>
          </label>
          <input
            className="input"
            name="name"
            id="name"
            required
            minLength="1"
            maxLength="10"
            type="text"
            placeholder="이름"
            title="1~10자를 입력하세요."
          />
        </div>
        <div className="field">
          <button className="btn btn-success" type="submit">
            선수 추가
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddGamer;
