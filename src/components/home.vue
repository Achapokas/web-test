<template>
  <div class="home">
    <h1>{{ title }}</h1>
    <div class="row">
      <div class="product-cards">
        <div class="product" :style="[styleObject, styleObject2]" v-on:click="showImage" v-for="(data,index) in products" :key="index">
          <img :src="data.imageCheatsheet" class="img-fluid">
          <p class="product-title">{{ data.productTitle }} </p>
          <p class="product-text">{{ data.productText }}</p>
           <a class="logo-link" href="../assets/10510_Corelight_Bro_Zeek__Logs_Combined_Version_2.6.pdf" download>
            <img :src="data.imageDownload" v-on:click="pdfgen">
          </a>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
require("pdfmake/build/pdfmake.js");
require("pdfmake/build/vfs_fonts.js");
export default {
  name: 'home',
  data () {
    return {
      products:[{
        productTitle: 'conn',
        productText: 'IP, TCP, UDP, ICMP connection details',
        styleObject: {
          background: 'red'
        }
      },
      {
        productTitle: 'conn history',
        productText: 'Orig UPPERCASE, Resp lowercase, compressed'
      },
      {
        productTitle: 'conn state',
        productText: 'A summarized state for each connection'
      },
      {
        productTitle: 'dns',
        productText: 'DNS query/response details',
        //image: require('../assets/dns-log.png'),
      },
      {
        productTitle: 'http',
        productText: 'HTTP request/replay details'
      },
      {
        imageCheatsheet: require('../assets/zeek-logs.jpg'),
        productText: 'Get all the cheatsheets in one PDF.',
        imageDownload: require('../assets/download_icon.svg')
      }
      ],
    }
  },
  methods: {
    showImage: function (event) {
      // `this` inside methods points to the Vue instance
      alert('Hello ' + this.name + '!')
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName)
      }
    },
    pdfgen: function() {
      var docDefinition = { 
        content: [
          {
            image: './assets/10510_Corelight_Bro_Zeek__Logs_Combined_Version_2.6.pdf'
          }
        ]
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">

/* Global Variables */

 /* Colors */
 //Text
 $body:                #ffffff;  
 $label:               #2e3438;
 $inactive-nav:        #9b9b9b;

 //Utility
 $green-hightlight:    #00ff17;
 $conn-log:            #3DB8C2;
 $conn-history:        #A8DFE4;
 $conn-state:          #A8DFE4;
 $dns:                 #45559C;
 $http:                #003D71;
 $dce-rpc:             #939393;
 $ntlm:                #6785A0;
 $rdp:                 #002562;
 $smb-files:           #00AEC4;
 $smb-mappings:        #004EA2;
 $dns-card:            #d8d8d8;
 $x-icon:              #979797;

 //Font-Family:
 $font-family-primary:   "Droid Sans Regular", sans-serif;
 $font-family-secondary: "Open Sand Regular", sans-serif;

 //Font Size
 $font-size-xl:             36pt;
 $font-size-lg:             18pt;
 $font-size-md:             14pt;
 $font-size-small:          10pt;

 //Font Weight 
 $font-weight-thin:         200;
 $font-weight-extra-thin:   100;

 // Line spacing/leading multiplier
 $spacer: 1.3;

 .product-cards {

  .product {
    background-color: $body;
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.5);
    color: $label;
    font-size: $font-size-lg;
    //height: 200px;
    margin-bottom: 10px;
    margin-right: 10px;
    //overflow: hidden;
    padding-left: 14px;
    padding-top: 15px;

    .row img{
      max-height: 15em;
      width: 100%;
    }
  }
}
</style>