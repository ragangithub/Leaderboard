export const setTasksToStorage = (scores) => {
  localStorage.setItem('scores', JSON.stringify(scores));
};

export const getTasksFromStorage = () => {
  const storedScores = localStorage.getItem('scores');
  if (storedScores) {
    return JSON.parse(storedScores);
  }
  return [];
};
