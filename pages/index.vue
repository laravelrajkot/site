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
            <li><a class="md:p-3 text-white font-medium opacity-75 hover:opacity-100" href="/past-events">Past Events</a></li>
            <li><a class="md:p-3 text-white font-medium opacity-75 hover:opacity-100" href="https://forms.gle/DHHBgtPjTd5Gm4hL6" target="_blank">Submit a Talk</a></li>
            <li><a class="md:p-3 text-white font-medium opacity-75 hover:opacity-100" href="https://forms.gle/R1P5nUsSZVWVThwx7" target="_blank">Request a Talk / Workshop</a></li>
            </li>
            <!-- <li><a class="md:p-3 text-white font-medium opacity-75 hover:opacity-100 lg:mb-0 mb-2" href="#">Contact Us</a></li> -->
            <!-- <li class="hidden xl:block"><a
                class="font-semibold bg-laracolor hover:bg-laracolor text-white px-3 py-2 rounded-lg shadow-md hover:shadow-lg ml-4"
                href="https://allevents.in/rajkot/docker-from-scratch/80001055575168" target="_blank">Book Tickets</a></li> -->
          </ul>
        </nav>
      </div>
    </div>
  </header>
  <section class="relative bg-blue-700 px-4 lg:px-20 overflow-hidden h-screen flex items-center content-center">
      <div class="bg-cover absolute top-0 left-0 z-0 w-full h-full" style="background-image: url('images/cover-bg.jpg')"></div>
      <!-- <div class="flex items-center content-center">
        <div class="relative z-10 md:max-w-2xl px-6 py-4 rounded-lg text-center shadow-lg" style="background-color: rgba(252, 50, 43, .8)">
          <h4 class="font-normal text-white text-xl leading-relaxed tracking-wider">Our next meetup</h4>

          <span class="text-white text-3xl lg:text-4xl leading-relaxed tracking-wider">October'19
          </span>
         <br/>
          <span class="font-normal text-white text-sm lg:text-base mt-8 tracking-none"> on <span class="inline-block bg-white pl-4 pr-2 py-2 text-headerdark rounded-lg font-bold"> 20th October 2019 </span>
          <br/>
          at
          <span class="inline-block bg-white pl-4 pr-2 py-2 mt-2 text-headerdark rounded-lg font-bold">
           <a href="https://www.google.com/maps?ll=22.262051,70.752845&z=13&t=m&hl=en-US&gl=US&mapclient=embed&cid=10308873938467859809" target="_blank" class="tracking-wider">R. K. University City Campus
           </a>
         </span>
          <br/>
          from <span class="inline-block bg-white pl-4 pr-2 py-2 mt-2 text-headerdark rounded-lg font-bold">10:00 am</span>
          </span>
          <br/>
          <a href="https://allevents.in/rajkot/laravel-rajkot-meetup-october-2019/80002416250362"
            class="inline-block bg-white hover:bg-white text-laracolor pl-4 pr-2 py-2 lg:py-3 lg:pl-5 lg:pr-4 font-bold rounded-lg mt-8 shadow-md hover:shadow-lg" target="_blank">
            <div class="flex items-center">
              <span>Book your seat(s) now (Limited Seats)</span>
              <div class="w-8 h-8 bg-laracolor text-white text-center rounded-lg p-1 ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path
                    d="M11.293 17.293L12.707 18.707 19.414 12 12.707 5.293 11.293 6.707 15.586 11 6 11 6 13 15.586 13z" />
                </svg>
              </div>
            </div>
          </a>
        </div>
      </div>  -->
      <div class="flex items-center content-center">
        <div class="relative z-10 md:max-w-2xl px-6 py-4 rounded-lg text-center shadow-lg" style="background-color: rgba(252, 50, 43, .8)">
          <h4 class="font-normal text-white text-xl leading-relaxed tracking-wider">We will be announcing our next meetup / workshop soon.</h4>

          <br/>
          <span class="font-normal text-white text-base lg:text-xl mt-6 mb-4"> Meanwhile, if you want to speak on a topic or want to take workshop, <a href="https://forms.gle/DHHBgtPjTd5Gm4hL6" target="_blank"><span class="inline-block bg-white pl-4 pr-2 py-2 text-headerdark rounded-lg font-bold">submit your proposal here</span></a></span>
          <br/>
          <br/>
          <span class="font-normal text-white text-base lg:text-xl mt-6 mb-4">Else if you want to request a workshop or a talk on a specific topic, <a href="https://forms.gle/R1P5nUsSZVWVThwx7" target="_blank"> <span class="inline-block bg-white pl-4 pr-2 py-2 text-headerdark rounded-lg font-bold">let us know</span></a></span>
          <br/>
        </div>
      </div> 
  </section>
   <!-- <section class="relative flex flex-col lg:flex-row">
    <div class="w-full lg:w-3/4 flex flex-wrap bg-headerdark text-white py-20 px-4 lg:px-20 lg:flex-row ">
      <div class="w-full lg:w-1/2 lg:px-16">
        <h6 class="uppercase text-sm text-gray-700 font-semibold tracking-wider">Our Next <span class="text-laracolor">Meetup</span></h6>
        <h2 class="text-3xl font-semibold leading-tight mt-6">Laravel Core: Dependency Injections and Containers</h2>
        <h2 class="text-xl font-medium leading-tight mt-6">
          <img slot="icon" src="https://avatars.io/twitter/hardikdangar" class="avatar rounded">
          by
          <a href="https://twitter.com/hardikdangar" target="_blank">
           Hardik Dangar
          </a>
        </h2>

        <p class="text-gray-700 mt-2 leading-relaxed text-justify">He is co-founder of SphereRays Technolabs Pvt. Ltd. He has 10+ years of experience of shaping core ideas into architectural development and implementation.He as authored a book called Learning Laravel 4 Application Development which includes the best practices in the Laravel application development.</p>
      </div>

      <div class="w-full lg:w-1/2 lg:px-16 mt-16 lg:mt-0">
      <h6 class="uppercase text-sm text-gray-700 font-semibold tracking-wider">&nbsp;</h6>
        <div class="w-full md:flex md:flex-row lg:flex-col md:-mx-4 lg:mx-0">
                 <h2 class="text-3xl font-semibold leading-tight mt-6">Laravel Vapor: Serverless magic for PHP</h2>
        <h2 class="text-xl font-medium leading-tight mt-6">
          <img slot="icon" src="https://avatars.io/twitter/diku_patel" class="avatar rounded">
          by
          <a href="https://twitter.com/diku_patel" target="_blank">
           Chintan Banugaria
          </a>
        </h2>

        <p class="text-gray-700 mt-2 leading-relaxed text-justify">He is full stack developer / director at Emrys Technologies having experience of more than 8+ years. He will talk about the newly introduce Laravel Vapor, a serverless platform for the Laravel applications. He will briefly introduce the core concepts of Serverless and deploy a demo application on the vapor.
        </p>
      </div>
      </div>
      <div class="flex w-full md:w-1/2 lg:w-full md:mx-4 lg:mx-0 mt-12 md:mt-0 lg:mt-12 text-center justify-center">
          <a href="https://allevents.in/rajkot/laravel-rajkot-meetup-october-2019/80002416250362"
          class="inline-block bg-laracolor hover:bg-laracolor text-white pl-4 pr-2 py-2 lg:py-3 lg:pl-5 lg:pr-4 font-bold rounded-lg mt-8 shadow-md hover:shadow-lg" style="height:max-content;" target="_blank">
          <div class="flex items-center">
            <span>Book Tickets</span>
            <div class="w-8 h-8 bg-white text-laracolor text-center rounded-lg p-1 ml-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path
                  d="M11.293 17.293L12.707 18.707 19.414 12 12.707 5.293 11.293 6.707 15.586 11 6 11 6 13 15.586 13z" />
              </svg>
            </div>
          </div>
        </a>
        </div>
    </div>
    <div class="w-full lg:w-1/4 flex flex-wrap bg-laracolor text-white py-20 px-4 lg:px-10 lg:flex-row justify-center text-center ">
        <div class="w-full  flex flex-col">
          <h4 class="font-normal font-bold text-white text-xl leading-relaxed tracking-wider">Schedule</h4>
            <div class="flex items-center inline-block bg-white hover:bg-white text-laracolor py-3 pl-4 pr-2 lg:py-3 lg:pl-5 lg:pr-4 font-bold rounded-lg mt-6  shadow-md hover:shadow-lg text-center justify-center dotted">
              <span>
              09:00 am - 09:30 am 
              <br/>
              <span class="text-headerdark">Registration</span>
              </span>
            </div>
            
            <div class="flex items-center inline-block bg-white hover:bg-white text-laracolor py-3 pl-4 pr-2 lg:py-3 lg:pl-5 lg:pr-4 font-bold rounded-lg mt-6 shadow-md hover:shadow-lg text-center justify-center">
              <span>
              10:00 am - 11:00 am 
              <br/>
              <span class="text-headerdark">Laravel Core: Dependency Injections and Containers</span>
              </span>
            </div>
            <div class="flex items-center inline-block bg-white hover:bg-white text-laracolor py-3 pl-4 pr-2 lg:py-3 lg:pl-5 lg:pr-4 font-bold rounded-lg mt-6 shadow-md hover:shadow-lg text-center justify-center">
              <span>
              11:00 am - 11:30 am 
              <br/>
              <span class="text-headerdark">Break</span>
              </span>
            </div>
            <div class="flex items-center inline-block bg-white hover:bg-white text-laracolor py-3 pl-4 pr-2 lg:py-3 lg:pl-5 lg:pr-4 font-bold rounded-lg mt-6 shadow-md hover:shadow-lg text-center justify-center">
              <span>
              11:30 am - 12:30 am 
              <br/>
              <span class="text-headerdark">Laravel Vapor: Serverless magic for PHP</span>
              </span>
            </div>
            <div class="flex items-center inline-block bg-white hover:bg-white text-laracolor py-3 pl-4 pr-2 lg:py-3 lg:pl-5 lg:pr-4 font-bold rounded-lg mt-6 shadow-md hover:shadow-lg text-center justify-center">
              <span>
              12:30 am - 1:30 am 
              <br/>
              <span class="text-headerdark">Q and A (open house)</span>
              </span>
            </div>
            <div class="flex flex-col items-center inline-block text-white py-3 pl-4 pr-2 lg:py-3 lg:pl-5 lg:pr-4 font-bold rounded-lg mt-6 text-center justify-center">
             <span class="pl-2 flex-row flex"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin align-text-top pr-2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              
                RKU City Campus
              </span>
              2nd Ring Rd,<br/> Mota Mava,<br/> Rajkot, Gujarat 360005
            </div>
            <div class="flex flex-col items-center inline-block text-white py-3 pl-4 pr-2 lg:py-3 lg:pl-5 lg:pr-4 font-bold rounded-lg mt-6 text-center justify-center">
             <span class="pl-2 flex-row flex"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin align-text-top pr-2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
               Sunday, 20 October 2019
              </span>
              
            </div>
            
        </div>
    </div>
  </section> -->
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
   head () {
    return {
      title: 'Laravel Rajkot',
    }
   },
  components: {
    Logo
  }
}
</script>

<style>
    #menu-toggle:checked+#menu {
      display: block;
    }
    #dropdown-toggle:checked+#dropdown {
      display: block;
    }
    a,
    span {
      position: relative;
      text-decoration: none;
      transition: all 0.3s ease;
    }
    a.arrow,
    span.arrow {
      display: flex;
      align-items: center;
      font-weight: 600;
      line-height: 1.5;
    }
    a.arrow .arrow_icon,
    span.arrow .arrow_icon {
      position: relative;
      margin-left: 0.5em;
    }
    a.arrow .arrow_icon svg,
    span.arrow .arrow_icon svg {
      transition: transform 0.3s 0.02s ease;
      margin-right: 1em;
    }
    a.arrow .arrow_icon::before,
    span.arrow .arrow_icon::before {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      left: 0;
      width: 0;
      height: 2px;
      background: #38b2ac;
      transform: translateY(-50%);
      transition: width 0.3s ease;
    }
    a.arrow:hover .arrow_icon::before,
    span.arrow:hover .arrow_icon::before {
      width: 1em;
    }
    a.arrow:hover .arrow_icon svg,
    span.arrow:hover .arrow_icon svg {
      transform: translateX(0.75em);
    }
  .avatar {
    height: 5rem !important;
    width: 5rem !important;
  }
  .dotted:after {
    content:"";
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 50%;
    height: 100%;
    height: inherit;
    border-left: 2px dotted white;
}

.dotted {
    position: relative;
}
  </style>
