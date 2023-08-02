export default class Leaderboard {
  constructor() {
    this.list = [];
  }

  addItem(newName, newScore) {
    const newItem = {
      name: newName,
      score: newScore,
    };
    this.list.push(newItem);
  }
}
