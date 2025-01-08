const players = [
    { name: 'Messi', goals: 30 },
    undefined,
    { name: 'Ronaldo', goals: 28 },
    { name: 'Neymar', goals: 22 },
    { goals: 2 },
    undefined,
    { name: 'Mbappé', goals: 25 },
    { name: 'Pele', goals: null },
];


const checkPlayer = (player) => {
    return player.filter(infor => infor && infor.name && infor.goals)
}
const result = checkPlayer(players);
console.log(result);

const checkMaxGoals = result.reduce((max, play) => max.goals > play.goals ? max : play, result[0]);
console.log(checkMaxGoals);
