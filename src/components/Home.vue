<template>
  <!-- Hero Section -->
  <section class="text-center pb-10">
    <h3 class="font-bold text-lg md:text-2xl text-gray-400">DIGITA SCIENTIA INDONESIA</h3>
    <h2 class="font-bold text-2xl md:text-4xl mt-3">We Provide Creative <span class="text-[#2f55d4]">Solutions</span></h2>
    <p class="my-5 text-sm md:text-base">Is an Innovative national Company that lead digital transformation by providing digital products and services <br> (Information Management System, Internet of Things and Artificial Intelligence).</p>
    <button @click="showModal = true" class="bg-[#2f55d4] p-2 px-5 mt-5 rounded-md text-white font-semibold duration-200 hover:-translate-y-1.5 hover:shadow-blue">Learn More</button>
    <div class="flex justify-center px-7 md:px-20 lg:px-36">
      <img src="@/assets/images/svgs/biologist-bro.svg" alt="Hero Image" class="max-w-[800px]">
    </div>
  </section>  
  <!-- End Hero Section -->

  <!-- Products Section -->
  <section class="text-center">
    <h3 class="font-bold text-xl md:text-3xl mt-3 pb-10">The answer to all your business needs</h3>

    <!-- Grid Container-->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[1200px] mx-auto">

      <!-- Grid item -->
      <div v-for="(item, index) in productsGridData" :key="index" class="border-2 border-gray-100 text-center py-10">
        <img :src="item.image" :alt="item.title + ' Image'" class="h-[250px] mx-auto">
        <h2 class="px-10 font-bold text-xl">{{ item.title }}</h2>
        <h3 class="px-5 mt-3 text-black/50">{{ item.caption }}</h3>
      </div>
      <!-- End Grid item -->

    </div>
    <!-- End Grid Container-->

  </section>
  <!-- End Products Section -->

  <!-- Learn More Section -->
  <section class="flex flex-col md:flex-row md:justify-between items-center space-x-2 my-10 p-5 md:p-10 max-w-[1200px] mx-auto">
    <div class="w-full md:w-1/2 space-y-5">
      <h2 class="font-bold text-2xl">Why We <br>Need OribitaLIMS</h2>
      <p>ISO 17025:2017 states that the laboratory must have access to data and information management ranging from storing, recording, retrieving, collecting data to reporting test results are managed digitally</p>
      <button class="uppercase bg-black/80 text-gray-100 p-3 px-7 font-semibold text-sm">Learn More About us</button>
    </div>
    <div class="w-full md:w-1/2">
      <img src="@/assets/images/svgs/biologist-bro.svg" alt="LearnMorePoster">
    </div>
  </section>
  <!-- End Learn More Section -->

  <!-- Sukses Section -->
  <!-- <section class="text-center">
      <div class="max-w-[1200px] mx-auto text-center py-20">
        <h3 class="text-[#2f55d4] font-semibold uppercase">Sukses</h3>
        <h2 class="text-3xl font-bold">Kami sukses bersama Anda</h2>
        <p class="text-black/50 mt-3">Berikan peluang kenapa kami untuk mewujudkan prestasi Anda.</p>
        <div class="flex justify-between items-center mt-10"> -->
        <!-- Left Section -->
        <!-- <div class="w-1/2 text-left">
          <h2 class="font-semibold text-2xl">Terus berkembang <br> bersama bisnis-bisnis di Indonesia</h2>
          <p class="text-black/50 mt-3">Kami hadir untuk memudahkan semua bisnis dan perusahaan di Indonesia untuk dapat terus berkembang.</p>

          <div class="flex items-center space-x-5 mt-5">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-[#34d1bf]" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <div>
              <p class="font-bold text-xl">300+</p>
              <p class="text-black/50">Bisnis berkembang bersama Kami</p>
            </div>
          </div>
          <div class="flex items-center space-x-5 mt-5">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-[#34d1bf]" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <div>
              <p class="font-bold text-xl">5000+</p>
              <p class="text-black/50">Pengguna terdaftar aktif</p>
            </div>
          </div>
          <div class="flex items-center space-x-5 mt-5">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-[#34d1bf]" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <div>
              <p class="font-bold text-xl">3500+</p>
              <p class="text-black/50">sangat puas dengan produk kami</p>
            </div>
          </div>

        </div> -->
        <!-- End Left Section -->

        <!-- Right Section -->
        <!-- <div class="w-1/2">
          <img src="@/assets/images/svgs/career.svg" alt="Sukses Poster">
        </div> -->
        <!-- End Right Section -->

        <!-- </div>
      </div>
  </section> -->
  <!-- Sukses Section -->

  <!-- Image Slider -->
  <section>
    <h2 class="text-2xl text-center py-5 z-10">Our <span class="font-bold">Customers</span></h2>
    <vueper-slides 
      class="no-shadow mt-10 max-w-[1200px] mx-auto"
      :breakpoints="sliderBreakpoint"
      :touchable="false"
      :pauseOnHover="false"
      :slideRatio="1/5"
      fixedHeight= "200px"
      :visible-slides=3
      :gap=3
      autoplay
      infinite
      lazy 
      lazy-load-on-drag
      :arrows="false"
      :bullets="false"
      :duration= 3000
    >
      <vueper-slide 
        v-for="slide in slides" 
        :key="slide.id"
        class="object-fill"
      >

      <template #content>
        <div class="flex flex-col justify-between items-center">
          <img :src="slide.gambar" class="max-w-40 max-h-20">
          <span class="font-semibold">{{ slide.title ? slide.title : '' }}</span>
        </div>
      </template>
      </vueper-slide>

    </vueper-slides>
  </section>
  <!-- End Image Slider  -->

  <!-- Video Modal -->
  <div v-show="showModal == true">
    <div @click="showModal = false" class="z-50 fixed inset-0 w-full h-full flex justify-center items-center pt-5 bg-black/80">
      <button @click="showModal = showModal = false" class="absolute top-[26%] md:top-[30%] lg:top-28 right-[5%] md:right-[10%] lg:right-1/4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 hover:opacity-60 duration-150 text-white" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
      <iframe src="https://www.youtube.com/embed/f6DZ_dwC5_0" title="Company Profile" frameborder="0" allowfullscreen class="rounded-lg bg-trueGray-800 p-3 shadow-xl mx-20 w-[530px] h-[285px] md:w-[630px] md:h-[385px]"></iframe>
    </div>
  </div>
  <!-- End Video Modal -->

</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

// import {
//     Dialog,
//     DialogOverlay,
//     DialogDescription,
//   } from "@headlessui/vue";

export default {
  components: { 
    VueperSlides, 
    VueperSlide,
  },

  data() {
    return {
      productsGridData:[
        {
          title: 'Laboratory Information Management System (LIMS) ',
          image: require('@/assets/images/svgs/laboratory.svg'),
          caption: 'Managing all data, documents, laboratory activities and resources comply with all regulatory compliances (ISO 17025 & FDA 21 CFR 11) in single LIMS platform. Get easy access anytime and anywhere. ',
        },
        {
          title: ' School Information Management System (SIMS)',
          image: require('@/assets/images/svgs/career.svg'),
          caption: '  Improve quality of the education management system that is integrated, easy and quick to access both internally (across departments) of the school organization and external to the school (students and parents).',
        },
        {
          title: 'Enterprise Resource Planning (ERP)',
          image: require('@/assets/images/svgs/deadline.svg'),
          caption: '  Integrated system for planning and managing all resources in the organization to increase efficiency and productivity for the company to achieve the goals',
        },
        {
          title: 'Training',
          image: require('@/assets/images/svgs/certifications.svg'),
          caption: 'We provide a variety of Training services to answer the needs of the industrial world today with speakers who are very skilled in their fields and training concepts that are different from training in general.',
        },
        {
          title: 'IoT',
          image: require('@/assets/images/svgs/drone.svg'),
          caption: 'Innovative IoT Solution for; Environment, Agriculture, Mining, Energy to accelerate to be world class institution with high efficiency and productivity.',
        },
        {
          title: 'Consulting',
          image: require('@/assets/images/svgs/consulting.svg'),
          caption: 'We provide Mentoring services to obtain ISO Certification by  having certified and experienced expert consultants, in collaboration with many  ISO Certification Bodies from various Accreditations such as KAN, JAS-ANZ, UKAS, IASCB, ANAB, IAS and others.',
        },
      ],

      slides: [
        {
          title: 'Politeknik AKA Bogor',
          gambar: require('@/assets/images/partner-aka.png')
        },
        {
          title: '',
          gambar: require('@/assets/images/partner-sky.png')
        },
        {
          title: 'Institut Teknologi Padang',
          gambar: require('@/assets/images/partner-itppadang-min.jpeg')
        },
        {
          title: 'DLHK Karawang',
          gambar: require('@/assets/images/partner-karawang.png')
        },
        {
          title: 'DLHP Sumatera Selatan',
          gambar: require('@/assets/images/partner-sumsel.png')
        },
        {
          title: 'DLHK Tanah Bumbu',
          gambar: require('@/assets/images/partner-tanahbumbu.png')
        },
        {
          title: '',
          gambar: require('@/assets/images/partner-sbi.png')
        },
        {
          title: 'Pertamina Hulu Energi Jambi Merang',
          gambar: require('@/assets/images/partner-pertamina.png')
        },
      ],

      sliderBreakpoint: {
        640: {
          slideRatio: 1/2,
          visibleSlides:2,
          gap:1 
        },
      },

      showModal: false
    }
  },
}
</script>