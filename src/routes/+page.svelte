<script lang="ts">
	import { isItAroWeek } from '../date';

	const today = $state(new Date());
	const isAroWeek = $derived(isItAroWeek(today));
</script>

<main id="main-content">
	<h1>{isAroWeek ? "Yes, it's Aromantic Spectrum Awareness Week! 💚🤍🩶🖤" : 'No...'}</h1>
</main>
