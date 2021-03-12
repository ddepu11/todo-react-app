import { useEffect } from "react";

const Alert = ({ msg, styleClass, setAlert }) => {
  useEffect(() => {
    setTimeout(() => setAlert({ show: false, msg: "", styleClass: "" }), 3000);
  }, []);
  return (
    <div className={styleClass ? `alert ${styleClass}` : "alert"}>
      <h6>{msg}</h6>
    </div>
  );
};

export default Alert;
