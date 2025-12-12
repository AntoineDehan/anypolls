<script>
  import Answer from "$lib/components/answer.svelte";
  import List from "$lib/components/list.svelte";
  import PollCard from "$lib/components/pollCard.svelte";
  import { db } from "../database/db";

  async function deleteDB() {
    try {
      await db.delete();
      console.log("deleted");
    } catch (error) {
      console.log("delete fail", error);
    }
  }
</script>

<h1>Welcome bo goss</h1>

<div class="w-[20rem]">
  <List />
  <button onclick={deleteDB}>delete db</button>
</div>
