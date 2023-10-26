<script lang="ts">
    const dvmPubkeys = new Set<string>();
</script>

<div class="max-w-5xl mx-auto flex flex-col gap-8">

    <div class="mx-auto flex flex-col gap-4">
        <h1 class="
            text-7xl text-center font-black
            bg-clip-text !text-transparent bg-gradient-to-r from-gradient3 to-gradient4
        ">Kioske</h1>
        <div class="text-2xl text-base-100-content font-extralight text-center">
            Bekannte Kioske mit Waren- oder Service-Angebote 
        </div>

        <button class="btn btn-outline btn-accent px-8 !rounded-full text-base-100-content self-center" on:click={() => {}}>
            Ein NIP-15 Anbieter hinzufügen
        </button>
    </div>

    <div class="grid md:grid-cols-3 px-2 md:px-0 gap-4 mt-10">
        {#each dvmPubkeys as npub}
            <div>npub</div>
        {/each}
    </div>
</div>