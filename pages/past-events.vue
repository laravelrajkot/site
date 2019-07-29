<template>
	<div>
	<header class="lg:px-20 px-4 absolute top-0 left-0 w-full z-50 bg-headerdark">
    <div class="hidden xl:flex justify-between items-center py-2 border-b text-sm" style="border-color: rgba(255,255,255,.25)">
      <div class="">
        <ul class="flex text-white">
         
        </ul>
      </div>

      <div class="">
        <ul class="flex justify-end text-white">
          <li>
            <a href="https://www.facebook.com/LaravelRajkot/" target="_blank" title="">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
                <path
                  d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325,1.42-3.592,3.5-3.592 c0.699-0.002,1.399,0.034,2.095,0.107v2.42h-1.435c-1.128,0-1.348,0.538-1.348,1.325v1.735h2.697l-0.35,2.725h-2.348V21H20  c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z" />
              </svg>
            </a>
          </li>

          <li class="ml-6">
            <a href="https://twitter.com/LaravelRajkot" target="_blank" title="">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
                <path
                  d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809 c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793 c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05  c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032  c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028 c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22  c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z" />
              </svg>
            </a>
          </li>
          <li class="ml-6">
            <a href="https://www.youtube.com/channel/UCnX28KQf89Yqti-qQCN5f0Q" target="_blank" title="">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
                <path
                  d="M21.593,7.203c-0.23-0.858-0.905-1.535-1.762-1.766C18.265,5.007,12,5,12,5S5.736,4.993,4.169,5.404 c-0.84,0.229-1.534,0.921-1.766,1.778c-0.413,1.566-0.417,4.814-0.417,4.814s-0.004,3.264,0.406,4.814  c0.23,0.857,0.905,1.534,1.763,1.765c1.582,0.43,7.83,0.437,7.83,0.437s6.265,0.007,7.831-0.403c0.856-0.23,1.534-0.906,1.767-1.763 C21.997,15.281,22,12.034,22,12.034S22.02,8.769,21.593,7.203z M9.996,15.005l0.005-6l5.207,3.005L9.996,15.005z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="w-full flex flex-wrap justify-between itmes-center py-4">
      <div class="flex justify-between items-center lg:w-auto">
        <nuxt-link to="/" class="text-white font-bold text-2xl">
          <span class="text-laracolor">Laravel</span> Rajkot
        </nuxt-link>
      </div>

      <label for="menu-toggle" class="pointer-cursor md:hidden block"><svg class="fill-current text-white"
          xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg></label>
      <input class="hidden" type="checkbox" id="menu-toggle" />

      <div class="hidden md:flex md:items-center md:w-auto w-full" id="menu">
        <nav>
          <ul class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
            <li><nuxt-link class="md:p-3 text-white font-medium opacity-75 hover:opacity-100" to="/past-events">Past Events</nuxt-link></li>
            <li><a class="md:p-3 text-white font-medium opacity-75 hover:opacity-100" href="https://forms.gle/DHHBgtPjTd5Gm4hL6" target="_blank">Submit a Talk</a></li>
            <li><a class="md:p-3 text-white font-medium opacity-75 hover:opacity-100" href="https://forms.gle/R1P5nUsSZVWVThwx7" target="_blank">Request a Talk / Workshop</a></li>
            </li>
            <!-- <li><a class="md:p-3 text-white font-medium opacity-75 hover:opacity-100 lg:mb-0 mb-2" href="#">Contact Us</a></li> -->
            <li class="hidden xl:block"><a
                class="font-semibold bg-laracolor hover:bg-laracolor text-white px-3 py-2 rounded-lg shadow-md hover:shadow-lg ml-4"
                href="https://allevents.in/rajkot/docker-from-scratch/80001055575168" target="_blank">Book Tickets</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
	<section class="relative bg-blue-700 px-4 lg:px-20 overflow-hidden h-screen flex items-center text-center justify-center content-center">
				We are currently working on this section. Please check back soon.
	</section>
</div>
</template>
<script>
	export default {
    head () {
    return {
      title: 'Laravel Rajkot',
    }
   },
	}
</script>