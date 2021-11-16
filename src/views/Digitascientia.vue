<template>
    <!-- Navbar -->
    <Header />
    <!-- End navbar -->
    
    <main class="px-7 md:px-20 lg:px-36 min-w-full max-w-[1200px] mx-auto pt-28">
        <!-- Main section -->
        <router-view></router-view>
        <!-- Main section -->
    </main>

    <!-- Subscribe Section -->
    <section class="bg-[#f8fafe] px-7 md:px-20 lg:px-36">
        <div class="max-w-[1200px] mx-auto text-center py-10 md:py-20">
            <h3 class="text-[#2f55d4] font-semibold uppercase">Subscribe</h3>
            <h2 class="text-3xl font-bold">Subscribe to our Newslatter</h2>
            <div class="flex flex-col md:flex-row justify-center md:space-x-5 mt-5 px-10">
                <input type="email" name="email" placeholder="Enter your E-mail address" class="bg-white p-1.5 px-3 ring-2 ring-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2f55d4] md:w-[400px]" autocomplete="none">
                <button class="bg-[#2f55d4] p-2 px-5 rounded-md text-white font-semibold duration-200 hover:-translate-y-1.5 hover:shadow-blue mt-4 md:mt-0">Subscribe Us</button>
            </div>
        </div>
    </section>
    <!-- Subscribe Section -->

    <!-- Footer -->
    <Footer />
    <!-- Footer -->

</template>

<script>
import Header from '@/components/parts/Header.vue'
import Footer from '@/components/parts/Footer.vue'

export default {
    components: {
        Header,
        Footer,
    },
}
</script>

<style>

</style>