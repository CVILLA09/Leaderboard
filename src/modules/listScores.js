export default (list) => {
  const container = document.querySelector('.scores-container');
  // Reset score items
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  list.forEach((item) => {
    const scoreItem = document.createElement('li');
    scoreItem.textContent = `${item.user}: ${item.score}`;
    container.appendChild(scoreItem);
  });
};
