<script>
  import Answer from "./answer.svelte";
  import BottomCard from "./bottomCard.svelte";

  let { poll } = $props();
  let answers = poll.answers;
</script>

<div>
  {#if poll}
    <div
      class="poll-card flex flex-col gap-2 border-2 border-gray-400 rounded-[5%] w-[400px] h-[200px]"
    >
      <h2>{poll.title}</h2>
      <div
        class="card-container flex flex-col gap-2 justify-center items-center"
      >
        {#each answers as answer}
          <Answer {answer} id={poll.id} />
        {/each}
      </div>
      <BottomCard endTime={poll.endTimestamp} startTime={poll.createdAt} />
    </div>
  {/if}
</div>
