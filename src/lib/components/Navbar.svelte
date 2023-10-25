<script lang="ts">
	import { page } from '$app/stores';
	import { currentUser } from '$stores/current-user';
	import { notificationsEnabled } from '$stores/notifications';
	import CurrentUser from './CurrentUser.svelte';
	import NotificationButton from './NotificationButton.svelte';
	import { MagicWand, ShoppingCart, HouseSimple, ShoppingBagOpen } from 'phosphor-svelte';
</script>

<div class="navbar mb-2 bg-base-100">
	<div class="navbar-start">
		<a href="/" class="btn btn-ghost text-xl normal-case px-0 hover:bg-transparent">
			<ShoppingCart class="h-12 w-12" />
			<h1 class="text-base md:text-xl font-bold">Libre Markt</h1>
		</a>
	</div>

	<div class="navbar-center hidden flex-row gap-8 xl:flex">
		<ul class="menu menu-horizontal !bg-transparent">
			<li>
				<a class:tab-active={$page.url.pathname === '/paradigm'} class="" href="/paradigm">
					<MagicWand class="h-6 w-6" />
					Über uns</a
				>
			</li>
		</ul>

		<ul class="menu menu-horizontal !bg-transparent">
			<li>
				<a class:tab-active={$page.url.pathname === '/stalls'} class="" href="/stalls">
					<HouseSimple class="h-6 w-6" />
					Anbieter
				</a>
			</li>
		</ul>

		<ul class="menu menu-horizontal !bg-transparent">
			{#if $currentUser}
				<li>
					<a class:tab-active={$page.url.pathname === '/orders'} class="" href="/orders">
						<ShoppingBagOpen class="h-6 w-6" />
						Deine Bestellungen</a
					>
				</li>
			{/if}
		</ul>
	</div>
	<div class="navbar-end flex flex-row items-center gap-4">
		{#if $notificationsEnabled && $currentUser}
			<NotificationButton />
		{/if}

		<CurrentUser />
	</div>
</div>
