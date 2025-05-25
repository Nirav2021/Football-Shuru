import moment from "moment";

// Get yesterday's date
const dayBeforeYesterday = moment().subtract(2, 'days').format('YYYY-MM-DD');
const dayBeforeYesterdayFormatted = moment().subtract(2, 'days').format('DD MMMM YYYY');
const dayBeforeYesterdayName = moment().subtract(2, 'days').format('dddd');

// Get yesterday's date
const yesterday = moment().subtract(1, 'days').format('YYYY-MM-DD');
const yesterdayFormatted = moment().subtract(1, 'days').format('DD MMMM YYYY');

// Get today's date
const today = moment().format('YYYY-MM-DD');
const todayFormatted = moment().format('DD MMMM YYYY');

// Get tomorrow's date
const tomorrow = moment().add(1, 'days').format('YYYY-MM-DD');
const tomorrowFormatted = moment().add(1, 'days').format('DD MMMM YYYY');

// Get tomorrow's date
const dayAfterTomorrow = moment().add(2, 'days').format('YYYY-MM-DD');
const dayAfterTomorrowFormatted = moment().add(2, 'days').format('DD MMMM YYYY');
const dayAfterTomorrowName = moment().add(2, 'days').format('dddd');

// Get tomorrow's date
const secondDayAfterTomorrow = moment().add(3, 'days').format('YYYY-MM-DD');
const secondDayAfterTomorrowFormatted = moment().add(3, 'days').format('DD MMMM YYYY');
const secondDayAfterTomorrowName = moment().add(3, 'days').format('dddd');

export const dateFilter = [
    {
        day: dayBeforeYesterdayName,
        date: dayBeforeYesterdayFormatted,
        value: dayBeforeYesterday,
    },
    {
        day: "Yesterday",
        date: yesterdayFormatted,
        value: yesterday,
    },
    {
        day: "Today",
        date: todayFormatted,
        value: today,
    },
    {
        day: "Tomorrow",
        date: tomorrowFormatted,
        value: tomorrow,
    },
    {
        day: dayAfterTomorrowName,
        date: dayAfterTomorrowFormatted,
        value: dayAfterTomorrow,
    },
    {
        day: secondDayAfterTomorrowName,
        date: secondDayAfterTomorrowFormatted,
        value: secondDayAfterTomorrow,
    },
];