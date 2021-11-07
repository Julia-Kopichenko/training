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
const rico = new FootballPlayer('Rico', 'psg');

const footballPlayers = [messi, ronaldo, suarez, buffon, gonsalo, pedro, zuma, rico];

function groupByTeam(arr) {
    const temp = arr.reduce((acc, player) => {
        const team = player.team;

        if (!acc[team]) {
            acc[team] = [];
        }

        acc[team].push(player);
        return acc;
    }, {});

    return Object.values(temp)
};

console.log(groupByTeam(footballPlayers));