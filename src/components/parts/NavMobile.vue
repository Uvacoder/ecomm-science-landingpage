<template>
  <Disclosure v-slot="{ open }">
    <DisclosureButton
      class="flex items-center space-x-2 w-full text-left rounded-lg"
    >
      <span class="font-semibold"> {{ title }} </span>
      <svg xmlns="http://www.w3.org/2000/svg" :class="[open ? 'rotate-180' : '' ,'transition-all duration-200 w-3 h-3']" fill="currentColor" viewBox="0 0 16 16">
        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
      </svg>
    </DisclosureButton>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform -translate-y-5 opacity-100"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="transform translate-y-0 opacity-75"
      leave-to-class="transform -translate-y-5 opacity-25"
    >
      <DisclosurePanel class="px-4 pt-4 pb-2 ">
        <ul class="space-y-3 font-medium">
          <li v-for="(data, index) in datas" :key="index">
            <a :href="data.link">{{ data.name }}</a>
          </li>
        </ul>
      </DisclosurePanel>
    </transition>
  </Disclosure>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  },

  props: {
    title: String,
    datas: Object
  }
}
</script>

<style>

</style>