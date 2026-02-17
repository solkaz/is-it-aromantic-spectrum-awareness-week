import { describe, test, expect } from 'vitest';
import { getAsawDateRange, getState } from './date';

describe('date utils', () => {
	test('getAsawDateRange', () => {
		expect(getAsawDateRange(2026)).toEqual([new Date(2026, 1, 15), new Date(2026, 1, 22)]);
	});

	test('getState', () => {
		expect(getState(new Date(2026, 1, 15))).toEqual({
			currentYear: 2026,
			asawDateRange: [new Date(2026, 1, 15), new Date(2026, 1, 22)],
			isAsawUpcomingThisYear: false,
			isItAsaw: true,
			didAsawOccurThisYear: false
		});
		expect(getState(new Date(2026, 1, 21))).toEqual({
			currentYear: 2026,
			asawDateRange: [new Date(2026, 1, 15), new Date(2026, 1, 22)],
			isAsawUpcomingThisYear: false,
			isItAsaw: true,
			didAsawOccurThisYear: false
		});
		expect(getState(new Date(2025, 1, 16))).toEqual({
			currentYear: 2025,
			asawDateRange: [new Date(2025, 1, 16), new Date(2025, 1, 23)],
			isAsawUpcomingThisYear: false,
			isItAsaw: true,
			didAsawOccurThisYear: false
		});
		expect(getState(new Date(2025, 1, 22))).toEqual({
			currentYear: 2025,
			asawDateRange: [new Date(2025, 1, 16), new Date(2025, 1, 23)],
			isAsawUpcomingThisYear: false,
			isItAsaw: true,
			didAsawOccurThisYear: false
		});
		expect(getState(new Date(2027, 1, 21))).toEqual({
			currentYear: 2027,
			asawDateRange: [new Date(2027, 1, 21), new Date(2027, 1, 28)],
			isAsawUpcomingThisYear: false,
			isItAsaw: true,
			didAsawOccurThisYear: false
		});
		expect(getState(new Date(2027, 1, 27))).toEqual({
			currentYear: 2027,
			asawDateRange: [new Date(2027, 1, 21), new Date(2027, 1, 28)],
			isAsawUpcomingThisYear: false,
			isItAsaw: true,
			didAsawOccurThisYear: false
		});
		// After ASAW
		expect(getState(new Date(2026, 1, 22))).toEqual({
			currentYear: 2026,
			asawDateRange: [new Date(2026, 1, 15), new Date(2026, 1, 22)],
			isAsawUpcomingThisYear: false,
			isItAsaw: false,
			didAsawOccurThisYear: true
		});
		// On Valentine's Day
		expect(getState(new Date(2026, 1, 14))).toEqual({
			currentYear: 2026,
			asawDateRange: [new Date(2026, 1, 15), new Date(2026, 1, 22)],
			isAsawUpcomingThisYear: true,
			isItAsaw: false,
			didAsawOccurThisYear: false
		});
		// Before Valentine's Day
		expect(getState(new Date(2026, 1, 12))).toEqual({
			currentYear: 2026,
			asawDateRange: [new Date(2026, 1, 15), new Date(2026, 1, 22)],
			isAsawUpcomingThisYear: true,
			isItAsaw: false,
			didAsawOccurThisYear: false
		});
		// Completely different month (before Valentine's Day)
		expect(getState(new Date(2026, 0, 14))).toEqual({
			currentYear: 2026,
			asawDateRange: [new Date(2026, 1, 15), new Date(2026, 1, 22)],
			isAsawUpcomingThisYear: true,
			isItAsaw: false,
			didAsawOccurThisYear: false
		});
		// Completely different month (after Valentine's Day)
		expect(getState(new Date(2026, 2, 14))).toEqual({
			currentYear: 2026,
			asawDateRange: [new Date(2026, 1, 15), new Date(2026, 1, 22)],
			isAsawUpcomingThisYear: false,
			isItAsaw: false,
			didAsawOccurThisYear: true
		});
	});
});
