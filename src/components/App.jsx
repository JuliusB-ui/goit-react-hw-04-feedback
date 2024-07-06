import { useState } from 'react';
import { CreateFeedback } from './CreateFeedback/CreateFeedback';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const totalFeedback = () => {
   const {good, neutral, bad} = feedback;
    return good + neutral + bad;
  };

  const countPositivePct = () => {
    const {good} = feedback;
    const total = totalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  const handleClick = type => {
    setFeedback(prevFeedback => ({...prevFeedback, [type]: prevFeedback[type]+1}))
  };

  const {good, neutral, bad} = feedback;
    const positivePercentage = countPositivePct();
    const options = ['good', 'neutral', 'bad'];
    const total = totalFeedback();

    return (
      <div>
        <Section title="Please leave a feedback">
          <CreateFeedback options={options} leaveFeedback={handleClick} />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  
};


// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   totalFeedback = () => {
//     return good + neutral + bad;
//   };

//   countPositivePct = () => {
//     const total = this.totalFeedback();
//     return total > 0 ? Math.round((good / total) * 100) : 0;
//   };

//   handleClick = type => {
//     this.setState(prevState => ({ ...prevState, [type]: prevState[type] + 1 }));
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.totalFeedback();
//     const positivePercentage = this.countPositivePct();
//     const options = ['good', 'neutral', 'bad'];

//     return (
//       <div>
//         <Section title="Please leave a feedback">
//           <CreateFeedback options={options} leaveFeedback={this.handleClick} />
//         </Section>
//         <Section title="Statistics">
//           {total > 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positivePercentage}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }
