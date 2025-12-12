<script>
  import { db } from "../../database/db";
  import { v4 as uuidv4 } from "uuid";

  let inputValueTest = "test";

  let answerlist = $state([
    {
      title: "placeholder",
      count: 0,
      users: [{}],
    },
    {
      title: "placeholder",
      count: 0,
      users: [{}],
    },
  ]);

  let poll = $state([]);

  function addAnswer() {
    answerlist = [...answerlist, { title: "Réponse", count: 0, users: [{}] }];
  }

  function sumbitHandler(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);

    const answers = answerlist.map((_, index) => ({
      title: data[`answer${index}`] || "",
      count: 0,
      users: [],
    }));

    addPoll(data, answers);
  }

  async function addPoll(data, answers) {
    try {
      const id = await db.polls.add({
        id: uuidv4(),
        title: data.question,
        createdAt: Date.now(),
        answers,
        endTimestamp: Date.now() + Number(data.time) * 3600 * 1000,
      });
      status = `Ajout polls`;
      console.log("ok db polls");
    } catch (error) {
      status = `Pas ajout polls`;
      console.log("pas ok db polls", error);
    }
  }
</script>

<div>
  <h1>Créer votre sondage</h1>
  <form action="" onsubmit={sumbitHandler}>
    <label for="title">Votre question</label>
    <input type="text" name="question" />
    {#each answerlist as item, index}
      <label for="answer{index}">Réponse n°{index + 1}</label>
      <input type="text" name="answer{index}" />
    {/each}
    <button onclick={addAnswer}>Ajouter une réponse</button>
    <label for="time">Temps</label>
    <input type="number" name="time" />
    <p>heures</p>
    <button type="submit">Confirmer</button>
  </form>
</div>
