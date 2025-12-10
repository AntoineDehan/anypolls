<script>
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

    const newPoll = {
      createdAt: Date.now(),
      answers,
      endTimestamp: Date.now() + Number(data.time) * 3600 * 1000,
    };

    poll = [...poll, newPoll];

    console.log("POLL AJOUTÉ :", newPoll);
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
