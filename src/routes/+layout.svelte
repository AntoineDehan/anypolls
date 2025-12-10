<script>
  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>
<header>
  <nav>
    <a href="/">acceuil</a>
    <a href="/profile/">profile</a>
    <a href="t">login</a>
  </nav>
</header>

{@render children()}
