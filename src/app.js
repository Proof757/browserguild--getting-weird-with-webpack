import { format } from 'date-fns';
import './css/styles.css';
import ClockIcon from './svgs/clock.svg';
import CalendarIcon from './svgs/calendar.svg';

const getToday = () => (
    format(new Date(), 'EEEE, MMMM do yyyy G')
);

const getTheTime = () => (
    `${format(new Date(), 'hh:mm:ss aaaaa')}m`
);

const getMarkup = (todaysDate, time) => `
    <h1>Yo!</h1>
    <p>
        <span class="ico__calendar">${CalendarIcon}</span>
        Today's date is <strong>${todaysDate}</strong>
    </p>
    <p>
        <span class="ico__clock">${ClockIcon}</span>
        The current time is <strong>${time}</strong>
    </p>
`;

const setMarkup = (markup) => {
    document.getElementById('app').innerHTML = markup;
};

setInterval(() => (
    setMarkup(getMarkup(getToday(), getTheTime()))
), 1000);

setMarkup(getMarkup(getToday(), getTheTime()))
