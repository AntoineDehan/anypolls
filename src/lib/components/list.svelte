<script>
  import PollCard from "./pollCard.svelte";

  let list = $state([]);
</script>

<div>
  {#each list as item}
    <PollCard {poll} />
  {/each}
</div>
