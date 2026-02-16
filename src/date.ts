/**
 * Check if a date occurs within that year's Aromantic Spectrum Awareness Week (ASAW).
 *
 * The week occurs after that year's Valentine's Day (Feb. 14), starting on the next Sunday.
 *
 * @param date the date to check
 * @returns whether the current date is within that year's Aromantic Spectrum Awareness Week
 */
export function isItAroWeek(date: Date): boolean {
	const year = date.getFullYear();
	const valentinesDay = new Date(year, 1, 14);
	const startOfAsaw = valentinesDay.getDate() + 1 + (6 - valentinesDay.getDay());
	const endOfAsaw = startOfAsaw + 7;

	return new Date(year, 1, startOfAsaw) <= date && new Date(year, 1, endOfAsaw) > date;
}
