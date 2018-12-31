<template>
  <div class="home">
    <h1>{{ title }} </h1>
      <!-- Card Log Section -->
      <section class="card-container container">
        <div id="conn">
          <div class="card-row">
            <div class="cards">

              <div class="conn conn-one">
                <div class="card-one">{{ cardOne }}</div>
                <div class="card-footer">
                  <p class="card-footer_text">{{ cardTextOne }}</p>
                </div>
              </div>

              <div class="conn conn-two">
                <div class="card-two">{{ cardTwo }}</div>
                <div class="card-footer">
                  <p class="card-footer_text">{{ cardTextTwo }}</p>
                </div>
              </div>

              <div class="conn conn-three">
                <div class="card-three">{{ cardThree }}</div>
                <div class="card-footer">
                  <p class="card-footer_text">{{ cardTextThree }}</p>
                </div>
              </div>

              <div class="conn conn-four">
                <div class="card-four">{{ cardFour }}</div>
                <div class="card-footer">
                  <p class="card-footer_text">{{ cardTextFour }}</p>
                </div>
              </div>

              <div class="conn conn-five">
                <div class="card-five">{{ cardFive }}</div>
                <div class="card-footer">
                  <p class="card-footer_text">{{ cardTextFive }}</p>
                </div>
              </div>

              <div class="conn-six">
                <div class="cheatsheet-image">
                  <img v-bind:src="cardSix">
                </div>
                <div class="card-footer six">
                  <p class="card-footer_text">{{ cardTextSix }}</p>
                </div>
                <div class="download-image">
                  <a class="logo-link" href="./images/10510_Corelight_Bro_Zeek__Logs_Combined_Version_2.6.pdf" download target="_blank">
                    <img v-bind:src="download">
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  </div>
</template>

<script>
// export default {
//   name: 'home',
//   data () {
//     return {
//       msg: 'Welcome to Your Vue.js App'
//     }
//   }
// }

// export default {
//   name: 'home',
//   data:  {
//     cardOne: 'conn',
//     cardTextOne: 'IP, TCP, UDP, ICMP connection details',
//     cardTwo: 'conn history',
//     cardTextTwo: 'Orig UPPERCASE, Resp lowercase, compressed',
//     cardThree: 'conn state',
//     cardTextThree: 'A summarized state for each connection',
//     cardFour: 'dns',
//     cardTextFour: 'DNS query/response details',
//     cardFive: 'http',
//     cardTextFive: 'HTTP request/replay details',
//     cardSix: './images/zeek-logs.jpg',
//     cardTextSix: 'Get all the cheatsheets in one PDF.',
//     download: './images/download_icon.svg' 
//   }
// }


export default {
  name: 'home',
  data () {
    return {
      title: 'Home',
      products:[
        {
          cardTitle: 'conn',
          cardText: 'IP, TCP, UDP, ICMP connection details',
          productId: 1
        },
        {
          cardTitle: 'conn history',
          cardText: 'Orig UPPERCASE, Resp lowercase, compressed',
          productId: 2
        },
        {
          cardTitle: 'conn state',
          cardText: 'A summarized state for each connection',
          productId: 3
        },
        {
          cardTitle: 'dns',
          cardText: 'DNS query/response details',
          productId: 4
        },
        {
          cardTitle: 'http',
          cardText: 'HTTP request/replay details',
          productId: 5
        },
        {
          cardTitle: './images/zeek-logs.jpg',
          cardText:    './images/zeek-logs.jpg',
          download: './images/download_icon.svg',
          productId: 6
        }
      ]
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.row im g{
  max-height: 15em;
  width: 100%;

}

.row h3 {
  cursor:pointer;
}
</style>