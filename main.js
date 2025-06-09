
/* Tom & Jerry */

// const tom = {
//     name: 'Tom',
//     hp: 1000,
//     atk: 50,
//     attack(target) {
//         target.hp -= this.atk;
//         console.log(
//             `${this.name} "Đánh" ${target.name}, gây ${this.atk} sát thương, ${target.name} còn ${target.hp} máu.`
//         );
//     },
//     isAlive() {
//         return this.hp > 0;
//     },
// }

// const jerry = {
//     name: 'Jerry',
//     hp: 500,
//     atk: 20,
//     attack(target) {
//         target.hp -= this.atk;
//         console.log(
//             `${this.name} "Đánh" ${target.name}, gây ${this.atk} sát thương, ${target.name} còn ${target.hp} máu.`
//         );
//     },
//     isAlive() {
//         return this.hp > 0;
//     },
// }

// console.log(tom);
// console.log(jerry);

// // Đánh nhau
// tom.attack(jerry)
// jerry.attack(tom)

// console.log(jerry.isAlive());

// const input = [["name", "Nguyen Van A"], ["age", 18]];

// Convert array to object using reduce
// const outputObject = input.reduce((acc, [key, value]) => {
//   acc[key] = value;
//   return acc;
// }, {});

// console.log('Output 1:', outputObject);

// Convert array to key=value;key=value string using reduce
// const outputString = input.reduce((acc, [key, value], index) => {
//   return acc + (index > 0 ? ';' : '') + `${key}=${value}`;
// }, '');

// console.log('Output 2:', outputString);


