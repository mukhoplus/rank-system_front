import { useEffect, useState, useMemo } from "react";
import axios from "axios";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [selectedPermission, setSelectedPermission] = useState("");

  const convertPermission = {
    master: "운영자",
    special: "관리자",
    normal: "일반 사용자",
  };

  const convertUsers = useMemo(() => {
    const result = {};
    users.forEach((user) => {
      result[user.id] = {
        name: user.name,
        permission: user.permission || "normal",
      };
    });
    result[""] = { name: "", permission: "" };
    return result;
  }, [users]);

  const getUsers = async () => {
    const response = await axios.get("/user");
    setUsers(response.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    setSelectedPermission(convertUsers[selectedId].permission);
  }, [convertUsers, selectedId]);

  const handleButton = () => {
    if (!convertUsers) return false;

    return (
      selectedId &&
      selectedPermission &&
      selectedPermission !== convertUsers[selectedId].permission
    );
  };

  const handleSelect = (cur) => {
    return selectedId && convertUsers[selectedId].permission === cur;
  };

  const handleSubmit = async () => {
    const data = {
      id: selectedId,
      name: convertUsers[selectedId].name,
      permission: selectedPermission === "normal" ? "" : selectedPermission,
    };

    await axios.put("/user", data).then((response) => {
      if (response.status === 200) {
        const before = convertPermission[convertUsers[selectedId].permission];
        const after = convertPermission[selectedPermission];
        alert(
          `${selectedId}(${convertUsers[selectedId].name}) 권한이 변경되었습니다.\n${before} -> ${after}`
        );
      } else {
        alert("사용자 권한 업데이트에 실패했습니다.");
      }

      window.location.reload();
    });
  };

  return (
    <div id="admin">
      <h4 className="text-center">사용자 권한 업데이트</h4>
      <div className="form">
        <select
          value={selectedId}
          onChange={(e) => setSelectedId(e.target.value)}
        >
          <option value="" disabled>
            사용자 선택
          </option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.id}({user.name})
            </option>
          ))}
        </select>
        <select
          value={selectedPermission}
          onChange={(e) => setSelectedPermission(e.target.value)}
        >
          <option value="" disabled>
            권한 선택
          </option>
          <option value="special" disabled={!selectedId}>
            관리자{handleSelect("special") ? "*" : ""}
          </option>
          <option value="normal" disabled={!selectedId}>
            일반 사용자{handleSelect("normal") ? "*" : ""}
          </option>
        </select>
        <button
          className="btn btn-primary"
          type="submit"
          disabled={!handleButton()}
          onClick={handleSubmit}
        >
          업데이트
        </button>
      </div>
    </div>
  );
};

export default Admin;
