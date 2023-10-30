import NDK, { NDKEvent, type NostrEvent, NDKKind } from "@nostr-dev-kit/ndk"

type Stall = {
    id: string // UUID
    name: string
    description?: string
    currency: string // ISO 4217 alphabetical code e.g. EUR, USD, or sat (satoshi)
    shipping: ShippingZone[]
}

type ShippingZone = {
    id: string // UUID
    name?: string
    cost: number // float
    regions: string[] // ISO 3166 country codes or areas like EU
}

class StallEvent extends NDKEvent {
    constructor(ndk?: NDK, rawEvent?: NostrEvent, stall?: Stall) {
        super(ndk, rawEvent);
        this.kind = NDKKind.MarketStall;
        if (!this.content && !stall) {
            throw new Error("Either rawEvent or stall must be specified!");
        } else {
            this.content ??= JSON.stringify(stall);
        }
      }

    tag(stallId: string) {
        super.tag(this, stallId); //todo: set the d-tag
    }

    /**
     * Creates an StallEvent from an existing NDKEvent.
     * 
     * @param event NDKEvent to create the StallEvent from.
     * @returns StallEvent
     */
    static from(event: NDKEvent) {
        return new StallEvent(event.ndk, event.rawEvent());
    }
}