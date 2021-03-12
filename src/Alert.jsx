import { useEffect } from "react";

const Alert = ({ alert, setAlert }) => {
  const { msg, styleClass } = alert;

  useEffect(() => {
    const removeAlert = setTimeout(
      () => setAlert({ show: false, msg: "", styleClass: "" }),
      3000
    );

    return () => clearTimeout(removeAlert);
  }, [alert]);

  return (
    <div className={styleClass ? `alert ${styleClass}` : "alert"}>
      <h6>{msg}</h6>
    </div>
  );
};

export default Alert;
