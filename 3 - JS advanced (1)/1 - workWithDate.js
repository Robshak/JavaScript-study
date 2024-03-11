'use strict';

const now = new Date();

const date1 = new Date('01-01-2022');
const date2 = new Date(2024, 10, 20);
const date3 = new Date(2024, 11, 20, 10, 5, 3);

console.log(date1);
console.log(date2);
console.log(date3);


console.log(Number(date2));
console.log(Number(date3));
console.log(Number(date3) - Number(date2));

function dateDistOnDays(startDate, finishDate){
    const miliSecDist = Math.abs(Number(finishDate) - Number(startDate));
    const dayDist = miliSecDist / (1000 * 60 * 60 * 24);
    return Math.floor(dayDist);
    // return dayDist;
}

console.log(`day dist: ${dateDistOnDays(date2, date3)}`);

const user = {
    name: 'Vasia',
    birthday: '3/3/2022' // month/day/year
};

function isBirthday(user){
    const userBirthday = new Date(user.birthday);
    const today = new Date();
    return userBirthday.getMonth() == today.getMonth() &&
            userBirthday.getDate() == today.getDate();
}

console.log(isBirthday(user));