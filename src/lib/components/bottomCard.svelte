<script>
  let { endTime, startTime } = $props();

  function formatDate(time) {
  const date = new Date(time);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

    const formattedCreatedAt = formatDate(startTime);
    const formattedEndTimestamp = formatDate(endTime);

</script>

<div class="bottom-card flex justify-between p-[5%]">
  <p class="bottom-card-answers">10</p>
  <p class="bottom-card-time">{formattedEndTimestamp}</p>
</div>
