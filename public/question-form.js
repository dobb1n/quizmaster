import React, { useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { ref, set, push } from 'firebase/database';
import { getDatabase } from 'firebase/database';

function QuestionForm() {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [answer, setAnswer] = useState('');

  const auth = getAuth();
  const database = getDatabase();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Get the current user
    const user = auth.currentUser;
    if (!user) {
      alert('Please log in to submit a question.');
      return;
    }

    // Generate a unique question ID
    const questionId = push(ref(database, 'questions')).key;

    // Store the question in the database
    await set(ref(database, `questions/${questionId}`), {
      question,
      options,
      answer,
    });

    // Clear the form
    setQuestion('');
    setOptions(['', '', '', '']);
    setAnswer('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="question">Question:</label>
        <input
          type="text"
          id="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>
      {/* ... input fields for options and answer */}
      <button type="submit">Submit Question</button>
    </form>
  );
}

export default QuestionForm;
