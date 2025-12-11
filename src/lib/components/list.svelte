<script>
  import PollCard from "./pollCard.svelte";

  import { liveQuery } from "dexie";
  import { db } from "../../database/db.js";
  let test = $state([]);
  let polls = liveQuery(() => db.polls.toArray());
  polls.subscribe((value) => {
    test = value;
  });
</script>

<div>
  {#if $polls}
    {#each $polls as poll}
      <PollCard {poll} />
    {/each}
  {/if}
</div>
