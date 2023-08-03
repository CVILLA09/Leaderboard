import './styles.css';
import Leaderboard from './modules/leaderBoard.js';
import listScores from './modules/listScores.js';

const leaderboard = new Leaderboard();

document.getElementById('submit').addEventListener('click', () => {
  const newName = document.getElementById('new-name').value;
  const newScore = document.getElementById('new-score').value;
  leaderboard.addItem(newName, newScore);
  listScores(leaderboard.list);
});

window.onload = async () => {
  await leaderboard.createGame('Your Game Name');
  await leaderboard.getScores(); // Fetch the scores when the page is loaded
  listScores(leaderboard.list);
};

document.querySelector('.refresh-buttton').addEventListener('click', async () => { // Corrected class name
  await leaderboard.getScores();
  listScores(leaderboard.list);
});
