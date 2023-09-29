<script lang="ts">
	export let variant: 'ios' | 'android';
</script>

<button
	class={`${
		variant === 'ios'
			? 'bg-very-dark-blue hover:bg-turquoise-blue'
			: 'bg-very-light-gray text-very-dark-blue hover:bg-light-orange'
	} flex w-full items-center justify-center rounded-xl py-4 text-[18px] font-bold leading-[32px]`}
>
	<slot />
</button>
