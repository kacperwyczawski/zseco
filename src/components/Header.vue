<script setup lang="ts">
import HeaderButtons from "@/components/HeaderButtons.vue";
const commitHash = __COMMIT_HASH__;
</script>
<template>
  <header class="navbar border-b border-base-300">
    <div class="navbar-start gap-2">
      <RouterLink to="/" class="text-3xl font-bold tracking-tight">
        ZSEco
      </RouterLink>
      <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
      <svg fill="currentColor" class="text-primary" width="800px" height="800px" viewBox="0 -8 72 72" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><title>leaf</title><path d="M48.68,38.71c8.06-8.06,10-34.59,10-34.59A40.94,40.94,0,0,1,44.41,7.73C36.16,8.43,28.52,9.6,24,14.08,17.13,21,15.4,30.82,19.34,37.77,23.66,31,41.47,21.29,41.47,21.29,28.69,30.43,14,47.78,13.41,50s3.64,2.3,4.3,1.15,3.2-5.78,6-8.57C30.68,47.53,41.33,46.07,48.68,38.71Z"/></svg>
      <a
        href="https://github.com/kacperwyczawski/autocut/commits/main/"
        class="badge"
        >ekologiczna utylizacja materiałów drukarskich</a
      >
    </div>
    <div class="navbar-end hidden md:flex gap-2">
      <HeaderButtons :extended-themes="true" />
    </div>
    <div class="navbar-end box md:hidden">
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 flex flex-col gap-2 items-stretch"
        >
          <HeaderButtons :extended-themes="false" />
        </ul>
      </div>
    </div>
  </header>
</template>
