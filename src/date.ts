/**
 * Get the date range of when ASAW is supposed to happen for a given year
 * Start is inclusive, end is exclusive
 */
export function getAsawDateRange(year: number): [Date, Date] {
	const valentinesDay = new Date(year, 1, 14);
	const startOfAsaw = valentinesDay.getDate() + 1 + (6 - valentinesDay.getDay());
	const endOfAsaw = startOfAsaw + 7;
	return [new Date(year, 1, startOfAsaw), new Date(year, 1, endOfAsaw)];
}

export type State = {
	currentYear: number;
	asawDateRange: [Date, Date];
	isAsawUpcomingThisYear: boolean;
	isItAsaw: boolean;
	didAsawOccurThisYear: boolean;
};

export function getState(today: Date): State {
	const asawDateRange = getAsawDateRange(today.getFullYear());

	const isAsawUpcomingThisYear = today < asawDateRange[0];
	const didAsawOccurThisYear = today >= asawDateRange[1];
	return {
		currentYear: today.getFullYear(),
		asawDateRange,
		isAsawUpcomingThisYear,
		didAsawOccurThisYear,
		isItAsaw: !isAsawUpcomingThisYear && !didAsawOccurThisYear
	};
}
