<script lang="ts">
	import { getAsawDateRange, getState } from '../date';
	const dateFormat = new Intl.DateTimeFormat('en-us', {
		month: 'long',
		day: 'numeric'
	});

	const dateFormatWithYear = new Intl.DateTimeFormat('en-us', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
	const state = $state(getState(new Date()));
</script>

<main id="main-content">
	<h1>{state.isItAsaw ? "Yes, it's Aromantic Spectrum Awareness Week! 💚🤍🩶🖤" : 'No...'}</h1>

	<p>
		Aromantic Spectrum Awareness Week (ASAW) is a week meant to spread awareness about the aromantic
		spectrum.
	</p>

	{#if state.isAsawUpcomingThisYear || state.isItAsaw}
		<p>ASAW runs this year from {dateFormat.formatRange(...state.asawDateRange)}</p>
	{/if}

	{#if state.didAsawOccurThisYear}
		<p>
			ASAW ran this year {dateFormat.formatRange(...state.asawDateRange)}. Next year it will run
			from {dateFormatWithYear.formatRange(...getAsawDateRange(state.currentYear + 1))}
		</p>
	{/if}
</main>
