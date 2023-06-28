import React from "react";
const styles = {
  wrapper: "p-10 ",
  instructions: "max-w-3xl text-secondary",
  paymentCardContainer:
    "flex items-center justify-center mt-[7rem] bg-[#d9d9d9] rounded-[25px]",
  paymentCard: "",
  options: "flex gap-5",
  buttons: "px-3 py-1.5 bg-[#d5d5d5] text-black rounded-full",
  or:" flex items-center justify-center text-black",
  line:"bg-black w-5px"
};
const Payments = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.instructions}>
          <p>
            Welcome to my membership page! As an individual web developer and
            programmer, you'll gain access to exclusive resources, including:
            <br></br>
            1. Tutorials and guides: Enhance your skills with our comprehensive
            collection of learning materials.<br></br>
            2. Coding challenges: Sharpen your problem-solving abilities through
            interactive challenges.<br></br> 3. Expert-led webinars: Learn from
            industry professionals and stay updated on the latest trends.
            <br></br>
            4. Thriving community: Connect with like-minded individuals,
            collaborate, and seek advice.<br></br> 5. Job opportunities: Get
            notified about exclusive freelance gigs and job openings.
          </p>
        </div>
        <div className={styles.paymentCardContainer}>
          <div className={styles.paymentCard}>
            <div className={styles.options}>
              <button className={styles.buttons}>
                <a href="#">Google Pay</a>
              </button>
              <button className={styles.buttons}>
                <a href="#">Apple Pay</a>
              </button>
              <button className={styles.buttons}>
                <a href="#">Cards UPI & More</a>
              </button>
            </div><br></br>
            <hr className={styles.line}></hr>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
