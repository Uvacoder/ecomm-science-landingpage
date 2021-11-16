<template>
  <header class="px-7 md:px-20 lg:px-36 fixed w-full bg-white z-10 text-gray-500">
    <div class="relative flex max-w-[1200px] mx-auto justify-between items-center">
      <a href="#" class="z-20 bg-white">
        <img
          src="@/assets/images/logodigita.png"
          alt="Logo"
          class="w-20"
        />
      </a>
			<!-- Desktop Navbar -->
      <ul class="space-x-7 hidden lg:flex">
        <li class="hover:text-[#2f55d4] duration-150 font-semibold">
          <a href="#">Home</a>
        </li>
        <li class="hover:text-[#2f55d4] duration-150 font-semibold">
          <a href="#">Works</a>
        </li>
        <li>
          <NavDesktop :title="'Products'" :data="productsData" />
        </li>
        <li>
          <NavDesktop :title="'Solutions'" :data="SolutionsData" />
        </li>
        <li>
          <NavDesktop :title="'Company'" :data="CompanyData" />
        </li>
      </ul>
      <button
        class="
					hidden lg:flex
          bg-[#d6f6f2]
          text-[#34d1bf]
          p-2
          px-4
          rounded-md
          font-semibold
          hover:bg-[#34d1bf] hover:text-white
          duration-200
          hover:-translate-y-1.5 hover:shadow-green
        "
      >
        Contact Sales
      </button>
			<!-- End Desktop Navbar -->

      <!-- Hamburger SVG -->
      <div class="flex lg:hidden ">
        <svg
          @click="menuOpen = !menuOpen"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="cursor-pointer w-8 transition-all"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </div>
      <!-- End Hamburger SVG -->

			<!-- Mobile navbar -->
			<transition 
				enter-active-class="transition duration-100 ease-out"
				enter-from-class="transform -translate-y-4 opacity-0"
				enter-to-class="transform translate-y-0 opacity-100"
				leave-active-class="transition duration-100 ease-in"
				leave-from-class="transform translate-y-0 opacity-100"
				leave-to-class="transform -translate-y-4 opacity-0"
			>
				<div v-show="menuOpen" class="absolute top-20 z-0 bg-white w-full py-5 shadow px-5 font-semibold rounded-b-lg">
					<ul class="space-y-4">
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">Works</a>
						</li>
						<li>
							<NavMobile :title="'Products'" :datas="productsData" />
						</li>
						<li>
							<NavMobile :title="'Solutions'" :datas="SolutionsData" />
						</li>
						<li>
							<NavMobile :title="'Company'" :datas="CompanyData" />
						</li>
					</ul>
				</div>
			</transition>
			<!-- End Mobile navbar -->

    </div>
  </header>

  <header></header>
</template>

<script>
import NavDesktop from "./NavDesktop.vue";
import NavMobile from "./NavMobile.vue";

export default {
  components: {
    NavDesktop,
		NavMobile,
  },

  data() {
    return {
      menuOpen: false,

      productsData: [
        {
          name: "Orbitalism",
          link: "#",
        },
        {
          name: "Enterprise Resource Planning",
          link: "#",
        },
        {
          name: "Internet Of Things",
          link: "#",
        },
        {
          name: "School Information Management System",
          link: "#",
        },
        {
          name: "Waste Water Treatment Plant",
          link: "#",
        },
        {
          name: "Training",
          link: "#",
        },
        {
          name: "Consulting",
          link: "#",
        },
      ],

      SolutionsData: [
        {
          name: "Environment",
          link: "#",
        },
        {
          name: "Mineral & Metal",
          link: "#",
        },
        {
          name: "Food & Agriculture",
          link: "#",
        },
        {
          name: "Research & Education",
          link: "#",
        },
        {
          name: "Energy",
          link: "#",
        },
        {
          name: "Health Care",
          link: "#",
        },
      ],

      CompanyData: [
        {
          name: "About Us",
          link: "#",
        },
        {
          name: "Our Team",
          link: "#",
        },
        {
          name: "Career",
          link: "#",
        },
        {
          name: "Blog",
          link: "#",
        },
        {
          name: "Contact",
          link: "#",
        },
      ],
    };
  },
};
</script>