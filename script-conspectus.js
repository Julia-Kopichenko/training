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
    //создаем временный объект, с названиями команд в качестве ключей
    const temp = arr.reduce((acc, player) => {
        const team = player.team;
        //если ключа-команды еще нет в объекте, записываем туда пустой массив
        if (!acc[team]) {
            acc[team] = [];
        }
        // помещаем текущего игрока в соответствующий массив
        acc[team].push(player);
        return acc;
    }, {});

    // вариант1:
    // извлекаем все ключи получившегося временного объекта в массив
    // и преобразуем массив ключей в массив значений
    // return Object.getOwnPropertyNames(temp).map(key => temp[key])

    // вариант 2
    // с помощью метода Object.values
    return Object.values(temp)
};

console.log(groupByTeam(footballPlayers));

// Метод  Object.values() возвращает массив значений перечисляемых свойств объекта

// const object = {
//  a: 'somestring',
//  b: 42,
//  c: false
//};

// console.log(Object.values(object));
// expected output: Array ["somestring", 42, false]
