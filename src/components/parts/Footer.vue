<template>
  <footer class="bg-[#f1f4f8] px-7 md:px-20 lg:px-36 text-sm lg:text-base">
    <div class="max-w-[1200px] mx-auto">
      <!-- Top Footer -->
      <div class="grid grid-cols-2 gap-5 md:flex md:justify-between md:space-x-5 pt-10 md:pt-20 pb-5">
        <div class="w-full md:w-[25%]">
          <h3 class="font-bold">About the Digita Scientia Indonesia</h3>
          <p class="mt-4 pr-10 leading-2 lg:leading-7 text-black/50">
            Is an Innovative national Company that lead digital transformation
            by providing digital products and services (Information Management
            System, Internet of Things and Artificial Intelligence).
          </p>
        </div>

        <!-- <div class="w-[25%]">
              <h3 class="font-bold">Company</h3>
              <ul class="mt-4 space-y-4 text-black/50">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Our Brand</a></li>
                  <li><a href="#">Career</a></li>
                  <li><a href="#">Contact Us</a></li>
              </ul>
          </div> -->

        <div class="w-full md:w-[25%]">
          <h3 class="font-bold">Products</h3>
          <ul class="mt-4 space-y-2">
            <li>
              <a
                href="#"
                class="
                  text-opacity-50
                  hover:text-opacity-100
                  text-black
                  duration-150
                "
                >Laboratory Information</a
              >
            </li>
            <li>
              <a
                href="#"
                class="
                  text-opacity-50
                  hover:text-opacity-100
                  text-black
                  duration-150
                "
                >Management System (LIMS)</a
              >
            </li>
            <li>
              <a
                href="#"
                class="
                  text-opacity-50
                  hover:text-opacity-100
                  text-black
                  duration-150
                "
                >Enterprise Resource Planning (ERP)</a
              >
            </li>
            <li>
              <a
                href="#"
                class="
                  text-opacity-50
                  hover:text-opacity-100
                  text-black
                  duration-150
                "
                >Internet Of Things (IOT)</a
              >
            </li>
            <li>
              <a
                href="#"
                class="
                  text-opacity-50
                  hover:text-opacity-100
                  text-black
                  duration-150
                "
                >School Information Management System (SIMS)</a
              >
            </li>
            <li>
              <a
                href="#"
                class="
                  text-opacity-50
                  hover:text-opacity-100
                  text-black
                  duration-150
                "
                >Waste Water Treatment Plant (WWTP)</a
              >
            </li>
          </ul>
        </div>

        <div class="w-full md:w-[25%]">
          <h3 class="font-bold">Address</h3>
          <p class="text-black/50">
            My Republic Plaza, Wing A, Jl. BSD Green Office Park, Sempora,
            Cisauk, Tangerang, Banten 15345
          </p>
        </div>

        <!-- Contacts -->
        <div class="w-full md:w-[25%] text-right flex flex-col items-end">
          <img
            src="@/assets/images/logodigita.png"
            alt="Logo"
            class="w-24 flex"
          />
          <p>Call us now at:</p>
          <a
            href="https://wa.me/622129491925"
            class="text-blue-400 hover:text-blue-600 duration-100"
            >+622129491925</a
          >

          <!-- Social media -->
          <div class="flex mt-2 space-x-3 items-center">
            <a
              href="https://www.linkedin.com/company/pt-digita-scientia-indonesia"
              class="hover:text-blue-600 duration-150"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="w-5"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/digita_scientia/"
              class="hover:text-purple-600 duration-150"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="w-5"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                />
              </svg>
            </a>
            <a
              href="https://web.facebook.com/Digitascientia"
              class="hover:text-blue-600 duration-150"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="w-5"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/channel/UCGdeHnAhqeCMSolzXEyQRiw"
              class="hover:text-red-600 duration-150"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="w-5"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
                />
              </svg>
            </a>
          </div>
          <!-- End Social media -->
        </div>
      </div>
      <!-- End Top Footer -->

      <!-- Copyright -->
      <div class="text-center font-semibold py-5 text-black/50">
        2021 Hello Digi.PT Digita Scientia Indonesia
      </div>
      <!-- End Copyright -->

      <!-- Bottom Footer -->
      <!-- <div class="flex justify-between space-x-10 pt-10 pb-20">
          <div class="flex w-1/3 items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span>My Republic Plaza, BSD Green Park Office, Level GF Jalan Grand Boulevard BSD, Cisauk, Tangerang Selatan</span>
          </div>
          <div class="flex w-1/3 items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Jl. Taman Pasadena Utara No.12, Sumur Batu, Kec. Babakan Madang, Bogor, Jawa Barat 16810</span>
          </div>
          <div class="flex flex-col w-1/3 items-start pl-20 space-y-5">
              <div class="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-heading" viewBox="0 0 16 16">
                      <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                      <path d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1z"/>
                  </svg>
                  <span>info@digitascientia.co.id</span>
              </div>
              <div class="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>+6221 2949 1925</span>
              </div>
          </div>
      </div> -->
      <!-- End Bottom Footer -->
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
</style>