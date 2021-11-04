function FootballPlayer(name, team) {
  this.name = name;
  this.team = team;
}
const messi = new FootballPlayer('Messi', 'Barcelona');
const suarez = new FootballPlayer('Suarez', 'Barcelona');

const ronaldo = new FootballPlayer('Ronaldo', 'Juventus');
const buffon = new FootballPlayer('Buffon', 'Juventus');
const gonsalo = new FootballPlayer('Gonsalo', 'Juventus');

const pedro = new FootballPlayer('Pedro', 'Chelsea');
const zuma = new FootballPlayer('Zuma', 'Chelsea');

const psg = new FootballPlayer('PSG', 'Rico');

const footballPlayers = [messi, suarez, ronaldo, buffon, gonsalo, pedro, zuma, psg]

console.log(footballPlayers);

function createFootballTeam (count) {
  let team = [];
  for (let i = 0; i < count; i++) {
    team.push(new FootballPlayer('Messi', 'Barcelona'));
  }
  return team;
}

console.log(createFootballTeam(8));





