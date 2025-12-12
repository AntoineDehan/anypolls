<script>
  import PollCard from "./pollCard.svelte";

  import { liveQuery } from "dexie";
  import { db } from "../../database/db.js";
  let polls = liveQuery(() => db.polls.toArray());
</script>

<div>
  {#if $polls}
    {console.log($polls)}
    {#each $polls as poll}
      <PollCard {poll} />
    {/each}
  {/if}
</div>
