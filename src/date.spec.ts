import { describe, test, expect } from 'vitest';
import { isItAroWeek } from './date';

describe('date utils', () => {
	describe('isItAroWeek', () => {
		test("when Valentine's Day is on a Monday", () => {
			expect(isItAroWeek(new Date(2026, 1, 15))).toBeTruthy();
			expect(isItAroWeek(new Date(2026, 1, 21))).toBeTruthy();
			expect(isItAroWeek(new Date(2025, 1, 16))).toBeTruthy();
			expect(isItAroWeek(new Date(2025, 1, 22))).toBeTruthy();
			expect(isItAroWeek(new Date(2027, 1, 21))).toBeTruthy();
			expect(isItAroWeek(new Date(2027, 1, 27))).toBeTruthy();
			// After ASAW
			expect(isItAroWeek(new Date(2026, 1, 22))).toBeFalsy();
			// On Valentine's Day
			expect(isItAroWeek(new Date(2026, 1, 14))).toBeFalsy();
			// Before Valentine's Day
			expect(isItAroWeek(new Date(2026, 1, 12))).toBeFalsy();
			// Completely different month (before Valentine's Day)
			expect(isItAroWeek(new Date(2026, 0, 14))).toBeFalsy();
			// Completely different month (after Valentine's Day)
			expect(isItAroWeek(new Date(2026, 2, 14))).toBeFalsy();
		});
	});
});
