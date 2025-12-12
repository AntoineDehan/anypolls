<script>
  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";
  import { pwaInfo } from "virtual:pwa-info";
  import { onMount } from "svelte";
  import { registerSW } from "virtual:pwa-register";

   onMount(async () => {
    if (pwaInfo) {
      const { registerSW } = await import('virtual:pwa-register')
      registerSW({
        immediate: true,
        onRegistered(r) {
          // uncomment following code if you want check for updates
          // r && setInterval(() => {
          //    console.log('Checking for sw update')
          //    r.update()
          // }, 20000 /* 20s for testing purposes */)
          console.log(`SW Registered: ${r}`)
        },
        onRegisterError(error) {
          console.log('SW registration error', error)
        }
      })
    }
  })

  const webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : ''


  let { children } = $props();
</script>

<svelte:head>

  {@html webManifest}
</svelte:head>
<header>
  <nav>
    <a href="/">acceuil</a>
    <a href="/profile/">profile</a>
    <a href="t">login</a>
  </nav>
</header>

{@render children()}
