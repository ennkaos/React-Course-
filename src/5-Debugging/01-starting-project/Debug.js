import React, { useState } from 'react';

import DebugList from './debug_components/DebugComponent/DebugList/DebugList';
import DebugInput from './debug_components/DebugComponent/DebugInput/DebugInput';
import './Debug.css';


const Debug = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);

  const addGoalHandler = enteredText => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: 'goal1' });
      return updatedGoals;
    });
  };

  const deleteItemHandler = goalId => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <DebugList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
        <div>
      <section id="goal-form">
        <DebugInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
      </section>
      </div>
  );
};

export default Debug;
