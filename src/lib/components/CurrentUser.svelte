<script lang="ts">
    import { currentUser } from '$stores/current-user';
    import LoginDropdown from '$components/LoginDropdown.svelte';
    import UserDropdown from './UserDropdown.svelte';
</script>

{#if $currentUser}
    <UserDropdown />
{:else}
    <LoginDropdown />
{/if}
