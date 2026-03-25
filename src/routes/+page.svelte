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

	const resourceLinks = [
		{
			label: 'ASAW website',
			href: 'https://www.arospecweek.org/'
		},
		{
			label: 'Aromantic-spectrum Union for Recognition, Education, and Advocacy (AUREA)',
			href: 'https://www.aromanticism.org/'
		},
		{
			label: 'r/aromantic',
			href: 'https://www.reddit.com/r/aromantic'
		}
	];
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

	<hr />

	<h2>Resources</h2>
	<p>For more information about ASAW and aromanticism in general, check out these links:</p>
	<ul>
		{#each resourceLinks as link (link.href)}
			<li>
				<a href={link.href} rel="external noopener" target="_blank">
					{link.label}
				</a>
			</li>
		{/each}
	</ul>
</main>

<footer>
	<p>
		Made with 💚🤍🩶🖤 by
		<a href="https://github.com/solkaz" rel="external _noopener" target="_blank" class="monospace"
			>solkaz</a
		>
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
		height: 100vh;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 10fr 1fr;
		grid-column-gap: 0px;
		grid-row-gap: 0px;
	}

	main {
		width: 100%;
		padding: 2rem;
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		justify-content: center;
	}

	@media screen and (width >= 800px) {
		main {
			width: 80%;
			margin: 2rem auto;
			padding: 2rem;
			border: 1px solid black;
			display: flex;
			flex-flow: column nowrap;
			align-items: center;
			justify-content: center;
		}
	}

	hr {
		width: 50%;
		opacity: 50%;
	}

	footer {
		padding: 1rem;
		text-align: center;
	}

	a.monospace {
		font-family: monospace;
	}
</style>
