// import React from 'react'
// import Tilt from "react-tilt";
// import { motion } from "framer-motion";
// import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";
// import { styles } from '../styles';
// const Stats = () => {
//   return (
//     <motion.div variants={textVariant()}>
//         <h3 className={`${styles.heroHeadText}`}>My Stats !</h3>
        
//     </motion.div>
//   )
// }

import React, { useState, useEffect } from 'react';

const LeetCodeData=()=>{
  const [ratings, setRatings] = useState([]);
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://leetcode.com/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            query userProblemsSolved($username: String!) {
              allQuestionsCount {
                difficulty
                count
              }
              matchedUser(username: $username) {
                problemsSolvedBeatsStats {
                  difficulty
                  percentage
                }
                submitStatsGlobal {
                  acSubmissionNum {
                    difficulty
                    count
                  }
                }
              }
            }
          `,
          variables: {
            username: 'adityag15',
          },
        }),
      });

      const { data } = await response.json();
      const { problemsSolvedBeatsStats, submitStatsGlobal } = data.matchedUser;
      
      setRatings(problemsSolvedBeatsStats);
      setNumbers(submitStatsGlobal.acSubmissionNum);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Ratings:</h2>
      <ul>
        {ratings.map((rating) => (
          <li key={rating.difficulty}>
            {rating.difficulty}: {rating.percentage}
          </li>
        ))}
      </ul>

      <h2>Numbers:</h2>
      <ul>
        {numbers.map((number) => (
          <li key={number.difficulty}>
            {number.difficulty}: {number.count}
          </li>
        ))}
      </ul>
    </div>
  );
}

// export default LeetCodeData;


// export default SectionWrapper(Stats, "stats");
export default LeetCodeData;