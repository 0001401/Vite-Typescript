import { useState } from "react";

export const SignUp = () => {
  const userInformation = useState({
    ID: "",
    Password: "",
    PasswordCheck: "",
    nickName: "",
  });

  return (
    <div>
      <form>
        <input name="ID" />
        <input name="Password" />
        <input name="PasswordCheck" />
        <input name="nickName" />
        <input name="profile" type="file" />
      </form>
    </div>
  );
};
