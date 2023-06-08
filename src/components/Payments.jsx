import React from "react";
const styles = {
  wrapper: "bg-black p-5",
  headings: "flex flex-1 gap-[45rem] ",
  headingTitle:
    "flex-end justify-between gap-10 py-2 px-3 bg-white text-black rounded-full",
  button: "py-2 px-3 bg-white text-black rounded-full cursor-pointer",
  leftSide: "flex flex-start",
  rightSide:"flex flex-end gap-5"
};
const Payments = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headings}>
        <div className={styles.leftSide}>
          <div className={styles.button}>
            <button>
              <a href="#">Become a member</a>
            </button>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.headingTitle}>
            <h1>Explore Projects</h1>
          </div>
          <div className={styles.headingTitle}>
            <h1>Our Services</h1>
          </div>
          <div className={styles.headingTitle}>
            <h1>Contact</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
