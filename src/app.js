import './css/styles.css';
import { format } from 'date-fns';

const getToday = () => (
    format(new Date(), 'EEEE, MMMM do yyyy G')
);

const getTheTime = () => (
    `${format(new Date(), 'hh:mm:ss aaaaa')}m`
);

const getMarkup = (todaysDate, time) => `
    <h1>Yo!</h1>
    <p>Today's date is <br /> ${todaysDate}</p>
    <p>The current time is <br />${time}</p>
`;

const setMarkup = (markup) => {
    document.getElementById('app').innerHTML = markup;
};

setInterval(() => (
    setMarkup(getMarkup(getToday(), getTheTime()))
), 1000);

setMarkup(getMarkup(getToday(), getTheTime()))

if (__DEV__) {
    console.log('we logging');
}
