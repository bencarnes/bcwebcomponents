class DayOfWeekComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const dayOfWeek = parseInt(this.getAttribute('day'));

        if (dayOfWeek >= 1 && dayOfWeek <= 7) {
            const date = new Date();
            date.setDate(date.getDate() + (dayOfWeek - date.getDay()));

            const dayName = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);

            this.innerHTML = `${date.toLocaleDateString(undefined, {month: 'long', day: "numeric"})}`;
        } else {
            this.innerHTML = 'Invalid day of the week';
        }
    }
}

customElements.define('day-of-week', DayOfWeekComponent);