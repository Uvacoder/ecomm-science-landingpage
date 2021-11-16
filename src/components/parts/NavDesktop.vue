<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton class="justify-center flex items-center hover:text-[#2f55d4] duration-150 space-x-1">
      <span class="font-semibold">{{ title }}</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="currentColor" viewBox="0 0 16 16">
        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
      </svg>
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <MenuItems :class="[ title == 'Products' ? 'w-72' : 'w-44', 'absolute left-0 mt-2 origin-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none']">
      <div class="px-1 py-1">
        <MenuItem v-for="(item, index) in data" :key="index" v-slot="{ active }">
          <a :href="item.link" :class="[ active ? 'bg-gray-100' : '', 'group flex rounded-md items-center w-full px-2 py-2 text-sm']">
            {{ item.name }}
          </a>
        </MenuItem>
      </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

export default {
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
  },

  props: {
    title: String,
    data: Object,
  }
}
</script>

<style>

</style>