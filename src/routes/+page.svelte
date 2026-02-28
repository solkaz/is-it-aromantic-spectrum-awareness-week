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

	{#if state.isItAsaw}
		<p>
			ASAW is currently running this year from {dateFormat.formatRange(...state.asawDateRange)}
		</p>
	{:else if state.isAsawUpcomingThisYear}
		<p>ASAW will run this year from {dateFormat.formatRange(...state.asawDateRange)}</p>
	{:else}
		<p>
			ASAW ran this year {dateFormat.formatRange(...state.asawDateRange)}. Next year it will run
			from {dateFormatWithYear.formatRange(...getAsawDateRange(state.currentYear + 1))}
		</p>
	{/if}
</main>

<footer>
	<p>
		Made with 💚🤍🩶🖤 by
		<a href="https://github.com/solkaz" rel="_noopener" target="_blank" class="monospace">solkaz</a>
	</p>
</footer>

<style>
	:global(body, html) {
		margin: 0;
		padding: 0;
	}
	:global(*) {
		box-sizing: border-box;
	}

	:global(body) {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	main {
		flex: 1 1 auto;

		max-height: 800px;
		width: 80%;
		margin: 2rem auto;
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		justify-content: center;
	}

	@media screen and (width >= 500px) {
		main {
			flex: 1 1 auto;

			max-height: 800px;
			width: 80%;
			margin: 2rem auto;
			border: 1px solid black;
			display: flex;
			flex-flow: column nowrap;
			align-items: center;
			justify-content: center;
		}
	}

	footer {
		background-color: #f1f1f1;
		padding: 1rem;
		text-align: center;
	}

	a.monospace {
		font-family: monospace;
	}
</style>
