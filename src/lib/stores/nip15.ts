import { NDKUser, NDKKind, NDKEvent } from "@nostr-dev-kit/ndk";
import type { NDKEventStore } from "@nostr-dev-kit/ndk-svelte";
import { get as getStore } from "svelte/store";
import ndk from './ndk';

const $ndk = getStore(ndk);
let knownMerchantPubs: string[] = [
    "a7e8069e57ec8ff359d994621e8a492930f1a2ea3f862629e54e2ed627d182e8",
    "44cc3b7496ee576f021c29c4e9b983ca73612e516559f301fbb820e6e9a1eb1c",
    "9a83779e75080556c656d4d418d02a4d7edbe288a2f9e6dd2b48799ec935184c"
  ];

let relevantEvents: NDKEventStore<NDKEvent> | undefined = undefined;

export let products: NDKEventStore<NDKEvent> | undefined = undefined;

export function initMerchantData() {
    console.log('initMerchantData');

    products = $ndk.storeSubscribe<NDKEvent>(
        { kinds: [ NDKKind.Metadata, NDKKind.EventDeletion, NDKKind.MarketStall, NDKKind.MarketProduct ],
            authors: knownMerchantPubs, since: 1, limit: 100 },
        { closeOnEose: false, subId: 'merchants-data' }
    );
}