<script>
	import { isItAroWeek } from '../date';

	let isAroWeek = $state(isItAroWeek(new Date()));
</script>

<h1>Is it Aromantic Spectrum Awareness Week</h1>
{isAroWeek ? 'Yes!' : 'No...'}
