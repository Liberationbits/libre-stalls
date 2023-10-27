<script lang="ts">
    import { products } from "$stores/nip15";
</script>

<svelte:head>
	<title>Libre Markt - Ein souveräner Marktplatzt</title>
</svelte:head>

<div class="flex flex-col gap-12">
	<section
		class="mx-2 flex flex-col items-center justify-center gap-8 md:h-[50vh] md:flex-row lg:mx-auto">
		<img
			src="/favicon.png"
			alt="Stall"
			class="rounded-box h-full"
		/>

		<div class="flex flex-col items-start gap-3 lg:w-1/2 lg:gap-0">
			<h1
				class="text-center text-5xl md:text-7xl font-extrabold tracking-wider sm:text-start sm:text-6xl lg:text-8xl"
			>
				<span class="bg">Libre</span>
				<br class="hidden md:block" />
				<span class="bg">Markt</span>
			</h1>
			<h2 class="text-center text-3xl font-thin sm:text-start text-orange-400">
				Ein souveräner Marktplatz
			</h2>
		</div>
	</section>

	<section class="flex flex-col gap-8">
		<h1 class="flex flex-col items-center gap-4 text-center text-3xl md:text-5xl font-black">
			<!---div class="text-2xl md:text-3xl font-bold opacity-80">Aktuele Angebote</div--->
			<div class="bg">Aktuele Angebote</div>
		</h1>

		<div class="grid md:grid-cols-3 px-2 md:px-0 gap-4 mt-10">
            {#each $products as prod}
                <div>{prod}</div>
            {/each}
        </div>

		<div class="relative mx-auto flex flex-col gap-8 px-4 lg:flex-row">
			<div class="text-base-300-content prose rounded-box py-8 text-lg lg:w-2/3 lg:p-8">
				<div class="sticky top-20">
					
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	h1 span.bg {
		background: linear-gradient(50deg, #fff 0%, #817eff 100%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
