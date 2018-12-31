<template>
  <div id="app">
    <div class="nav-container container">
      <!-- logo -->
      <div class="logo-secton">
        <div class="logo-image">
          <a class="logo-link" href="https://www.corelight.com" target="_blank">
            <img :src="require('./assets/corelight_logo.svg')">
          </a>
        </div>
        <div class="zeek-text">{{ zeek }}</div>
      </div>
      <!-- navbar -->
      <div class="navbar-wrapper">
        <ul class="navbar-nav">
          <div class="container">
            <li class="nav-item first">
              <router-link class="nav-link" v-on:click="setActive()" v-bind:class="{ active: isActive }" v-bind:style="{ color: activeColor }" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" v-on:click="setActive()" v-bind:class="{ active: isActive }" to="/smb">SMB</router-link>
            </li>
            <li class="nav-item last">
              <router-link class="nav-link" v-on:click="setActive()" v-bind:class="{ active: isActive }" to="/all">All</router-link>
            </li>
          </div>
        </ul>
      </div>
    </div>


    <div class="container">
      <transition name="moveInUp">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      zeek: 'Zeek cheatsheets',
      activeColor: '#fff',
      isActive: 'false'
    }
  },
  methods: {
    setActive: function() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="scss">
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

 //Global Styles

 body {
   margin: 0;

  #app {
    color: $label;
    font-family: $font-family-primary;
    font-size: $font-size-md;
  

      .nav-container {
        background: linear-gradient(#000000, #2e3438);
        height: auto;
        margin-bottom: 15px;
        width: 100%;

        .zeek-text {
          color: $body;
          font-size:   7pt;
          font-weight: $font-weight-thin;
          line-height: $spacer;
          padding-top: 33px;

          @media screen and (min-width: 360px) { 
            float: right;
            font-size: 8pt;
          }

          @media screen and (min-width: 406px) { 
            font-size:  10pt;
            padding-top: 32px;
          }

          @media screen and (min-width: 530px) { 
            font-size:   16pt;
            padding-top: 37px;
          }

          @media screen and (min-width: 768px) { 
            font-size: 22pt;
            padding-top: 30px;
          }
        }

        .navbar-wrapper {
          clear: both;
          padding-top: 2px;

        ul {
          padding: 20px 0;
          text-align: center;
          width: auto;
          

          @media screen and (min-width: 530px) { 
            text-align: initial;
          }

          li {
            border-left: 2px solid #2e3438;
            display: inline;
            font-weight: $font-weight-thin;
            padding: 15px 28px;

            .nav-link {
              //color: $body;
              text-decoration: none;
            }

            &.first {
              border-left: none;
              padding-left: 0.5em;

              @media screen and (min-width: 360px) { 
                //padding: 15px 40px;
              }

              @media screen and (min-width: 530px) { 
                border-left: 2px solid #2e3438;
              }
            }

            @media screen and (min-width: 530px) { 
              padding: 15px 40px;
            }

            &.last {

              @media screen and (min-width: 530px) {
                border-right: 2px solid #2e3438;
              }
            }
          }
        }
      }
    }  
  }
 }
</style>
