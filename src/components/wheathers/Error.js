import Modal from "../UI/Modal";

import classes from "./Error.module.css";

const Error = (props) => {
  const resetModalHandler = () => {
    // user clicked then disappear modal
    props.setError(false);
  };

  return (
    <Modal>
      <div className={classes.main}>
        <div className={classes.content}>
          <p>Please Enter Valid City</p>
        </div>
        <div className={classes.actions}>
          <button onClick={resetModalHandler}>Okay</button>
        </div>
      </div>
    </Modal>
  );
};

export default Error;
