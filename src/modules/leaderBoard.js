export default class Leaderboard {
  constructor() {
    this.list = [];
    this.gameId = ''; // This will hold the ID of your game
  }

  async createGame(gameName) {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
      method: 'POST',
      body: JSON.stringify({
        name: gameName,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const data = await response.json();
    this.gameId = data.result.slice(14); // Extract the game ID from the response
  }

  addItem(newName, newScore) {
    const newItem = {
      name: newName,
      score: newScore,
    };
    this.list.push(newItem);
  }

  async getScores() {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${this.gameId}/scores/`);
    const data = await response.json();
    this.list = data.result; // Save the scores in your list
  }
}
