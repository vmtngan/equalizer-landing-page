<script>
	import Button from './Button.svelte';
</script>

<section
	class="relative mx-auto h-[600px] max-w-[375px] rounded-xl bg-very-dark-blue md:max-w-[696px] lg:max-w-[1110px]"
>
	<img
		class="absolute left-1/2 w-[280px] translate-x-[-50%] md:left-[229px] md:top-[-31px] md:translate-x-0 lg:left-[336px] lg:top-[-40px] lg:w-[312px]"
		src="/images/bg-pattern-2.svg"
		alt="pattern 2"
	/>
	<img
		class="absolute left-1/2 top-[-98px] h-[430px] translate-x-[-50%] md:left-[64px] md:top-[-138px] md:h-[556px] md:translate-x-0 lg:left-[102px] lg:top-[-213px] lg:h-[642px]"
		src="/images/illustration-app.png"
		alt="illustration app"
	/>
	<div
		class="absolute top-[380px] rounded-xl bg-soft-red px-9 py-12 text-very-light-gray md:right-[58px] md:top-[150px] md:max-w-[399px] md:px-12 lg:right-[95px] lg:top-[90px] lg:max-w-[446px] lg:p-14"
	>
		<h2 class="mb-3 text-[32px] font-bold leading-[40px] lg:mb-5 lg:text-[40px] lg:leading-[52px]">
			Premium EQ
		</h2>
		<p class="mb-9 text-lg font-normal lg:mb-10 lg:text-[20px] lg:leading-[34px]">
			Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take your
			listening experience to a whole new level and access all our incredible features!
		</p>
		<div class="mb-8 flex items-center lg:mb-11">
			<span class="text-[65px] font-bold leading-[52px]">$4&nbsp;</span>
			<span class="text-[20px] font-normal leading-[32px]">/ month</span>
		</div>
		<div class="mb-4">
			<Button variant="ios"
				><img src="/images/icon-apple.svg" alt="icon Apple" />
				&nbsp; Download</Button
			>
		</div>
		<div>
			<Button variant="android"
				><img src="/images/icon-android.svg" alt="icon Android" />
				&nbsp; Android Download</Button
			>
		</div>
	</div>
</section>
