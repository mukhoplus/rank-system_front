import React from "react";

function AddGamer() {
  return (
    <div id="addgamer">
      <h4 className="text-center">선수 추가</h4>
      <form
        className="form"
        id="AddGamerFormDto"
        name="AddGamerFormDto"
        action="/addgamer"
        method="post"
      >
        <div className="field">
          <label for="name">
            <b>이름</b>
          </label>
          <input
            className="input"
            name="name"
            id="name"
            required
            minlength="1"
            maxlength="10"
            type="text"
            placeholder="Name"
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
}

export default AddGamer;
