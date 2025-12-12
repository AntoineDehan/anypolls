<script>
  import { db } from "../../database/db";

  let { answer, id } = $props();
  let count = $state(answer.count);

  console.log("id", id);
  console.log("answer", answer);

  async function handleVote() {
    try {
      answer.count++;
      count = answer.count;

      const poll = await db.polls.get(id);
      if (!poll) {
        console.error("Sondage non trouvé");
        return;
      }

      // 3. Mettre à jour uniquement la réponse concernée
      const updatedAnswers = poll.answers.map((a) => {
        if (a.title === answer.title) {
          return { ...a, count: answer.count };
        }
        return a;
      });
      await db.polls.update(id, { answers: updatedAnswers });
      console.log("update");
    } catch (error) {
      console.log("update fail", error);
    }
  }
</script>

<div
  class="answer-bar flex gap-2 items-center w-[80%] border-2 border-gray-300 rounded-[20%]"
>
  <input type="checkbox" onclick={handleVote} />
  <p>{answer.title}</p>
  <p>{count}</p>
</div>
