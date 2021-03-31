<template>
  <a
    :href="href"
    :class="[
      'inline-block w-full py-2 mx-6 font-medium text-left md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center',
      { 'text-indigo-600 font-bold': isActive, 'text-gray-600': !isActive },
    ]"
  >
    <slot></slot>
  </a>
</template>

<script setup>
import { defineProps, reactive } from "vue";

defineProps({
  href: {
    type: String,
    required: true,
  },
  isActive: Boolean,
});
</script>
