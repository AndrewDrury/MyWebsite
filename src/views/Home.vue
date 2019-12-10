<template>
  <div class="home" id="home" name="home">
    <b-container fluid class="verticalCenter">
      <b-row>
        <b-col>
          <b-row class="top-space">
            <b-col class="container" align="center">
              <!-- https://vue-particles.netlify.com/ to customize -->
              <vue-particles
                color="#FFCF31"
                :particleOpacity="0.9"
                :particlesNumber="150"
                shapeType="circle"
                :particleSize="5"
                linesColor="#FFFFFF"
                :linesWidth="1"
                :lineLinked="true"
                :lineOpacity="0.4"
                :linesDistance="150"
                :moveSpeed="6"
                :hoverEffect="true"
                hoverMode="grab"
                :clickEffect="true"
                clickMode="repulse"
              >
              </vue-particles>

              <div class='intro'>
                <div class="deconstructed" style='margin-top: 14vh'>
                  Hi!
                  <div>Hi!</div>
                  <div>Hi!</div>
                  <div>Hi!</div>
                  <div>Hi!</div>
                </div>
                <div class="deconstructed">
                  I am Andrew Drury.
                  <div>I am Andrew Drury.</div>
                  <div>I am Andrew Drury.</div>
                  <div>I am Andrew Drury.</div>
                  <div>I am Andrew Drury.</div>
                </div>
                <h5 class='text-shadow' style='margin-top:60px'>I am a Full Stack Developer.</h5>
                <div class='view-more'>
                  <router-link :to="{ name: 'home', hash: '#experiences' }"><span></span><h6>View My Experience</h6></router-link>
                </div>

              </div>

              <!--
    Website ideas



    Establish vision and message
    Pick colours (accents: yellow, orange, red, blue)
    Pick fonts
    Design logo


    Vision

    Full-stack or backend at a medium to large company in Cali
    Min pay: 
    Get more specific with position
    Looking to learn more and be able to contribute to the company, not just do 'coop' projects




    Sections:

    Home
    Experience
    Projects
    Contact(and about)
    Resume




    Ideas:

    have github, LinkedIn, email, and resume (PDF symbol) at bottom left at all times



    Home page or about have Toronto pic of me



    Home page:

    Large text in background
    Graph line mountains
    Trace logo
    Write out 'Hi! I am Andrew Drury" really coolly


    Experience

    company name
    Position
    Location
    Date
    Languages and tools, keywords
    Summary of company
    Summary of what I did


    Project section

    Project name
    Date
    Location
    Awards
    Languages and technologies
    One sentence description
    Some way to hide and show more details, like bullet point list of things done or my contributions
    Github link or project submission link






    Content scroll fast,

    Pic Scroll Slow -->
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss">
@import "../assets/variables.scss";
.home {
  .top-space {
    margin-top: 80px;
    @media (max-width: $screen-sm) {
      margin-top: 80px;
    }
    margin-bottom: 30px;
  }

  .container {
    position: relative;
  }
  .intro {
    height: 100vh;
    width: 100vw;
    top:0px;
    position: absolute;
    text-align: center;
  }

  .view-more {
      color: #FFF;
      margin-top: 70px;
    }
}

// DECONSTRUCTED TEXT
.deconstructed {
  position: relative;
  margin: auto;
  color: transparent;
  font-size: 54px;
  letter-spacing: -0.02em;
  line-height: 1.3em;
}

.deconstructed > div {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: #FFF;
  pointer-events: none;
  font-size: 54px;
  padding-top: 20px;
  text-shadow: 3px 5px 2px $blue;
}

.deconstructed > div:nth-child(1) {
  -webkit-mask-image: linear-gradient(black 25%, transparent 25%);
  mask-image: linear-gradient(black 25%, transparent 25%);
  animation: deconstructed1 5s infinite;
}

.deconstructed > div:nth-child(2) {
  -webkit-mask-image: linear-gradient(transparent 25%, black 25%, black 50%, transparent 50%);
  mask-image: linear-gradient(transparent 25%, black 25%, black 50%, transparent 50%);
  animation: deconstructed2 5s infinite;
}

.deconstructed > div:nth-child(3) {
   -webkit-mask-image: linear-gradient(transparent 50%, black 50%, black 75%, transparent 75%);
  mask-image: linear-gradient(transparent 50%, black 50%, black 75%, transparent 75%);
  animation: deconstructed3 5s infinite;
}

.deconstructed > div:nth-child(4) {
   -webkit-mask-image: linear-gradient(transparent 75%, black 75%);
  mask-image: linear-gradient(transparent 75%, black 75%);
  animation: deconstructed4 5s infinite;
}

@keyframes deconstructed1 {
  0% {
    transform: translateX(100%);
  }
  26% {
    transform: translateX(0%);
  }
  83% {
    transform: translateX(-0.1%);
  }
  100% {
    transform: translateX(-120%);
  }
}

@keyframes deconstructed2 {
  0% {
    transform: translateX(100%);
  }
  24% {
    transform: translateX(0.5%);
  }
  82% {
    transform: translateX(-0.2%);
  }
  100% {
    transform: translateX(-125%);
  }
}

@keyframes deconstructed3 {
  0% {
    transform: translateX(100%);
  }
  22% {
    transform: translateX(0%);
  }
  81% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-130%);
  }
}

@keyframes deconstructed4 {
  0% {
    transform: translateX(100%);
  }
  20% {
    transform: translateX(0%);
  }
  80% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-135%);
  }
}

// VIEW EXPERIENCES
.view-more a {
  position: relative;
  display: inline-block;
  color: #fff;
  text-decoration: none;
  transition: opacity .3s;

  span {
    position: absolute;
    top: 40px;
    left: 50%;
    width: 46px;
    height: 46px;
    margin-left: -23px;
    border: 1px solid $primary;
    border-radius: 100%;
    box-sizing: border-box;
    background-color: rgba(255,255,255,.1);
  }
  span::after {
    position: absolute;
    top: 50%;
    left: 50%;
    content: '';
    width: 16px;
    height: 16px;
    margin: -12px 0 0 -8px;
    border-left: 1px solid $primary;
    border-bottom: 1px solid $primary;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    box-sizing: border-box;
  }
  span::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    content: '';
    width: 44px;
    height: 44px;
    box-shadow: 0 0 0 0 rgba(255,255,255,.1);
    border-radius: 100%;
    opacity: 0;
    -webkit-animation: sdb03 3s infinite;
    animation: sdb03 3s infinite;
    box-sizing: border-box;
  }
}
.view-more a:hover {
  opacity: .5;
}
@-webkit-keyframes sdb03 {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  60% {
    box-shadow: 0 0 0 60px rgba(255,255,255,.1);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes sdb03 {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  60% {
    box-shadow: 0 0 0 60px rgba(255,255,255,.1);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}


// RGB EFFECT
h6 {
    animation: text-shadow 3s ease-in-out infinite;
    animation-delay: 4s;
    font-size: 5em;
    font-weight: 900;
    line-height: 1;
}

h6:hover {
    animation-play-state: paused;
}

a {
    color: #024794;
}

a:hover {
    text-decoration: none;
}

@keyframes text-shadow {
    0% {  
        transform: translateY(0);
        text-shadow: 
            0 0 0 #0c2ffb, 
            0 0 0 #2cfcfd, 
            0 0 0 #fb203b, 
            0 0 0 #fefc4b;
    }

    10% {  
        transform: translateY(-1em);
        text-shadow: 
            0 0.125em 0 #0c2ffb, 
            0 0.25em 0 #2cfcfd, 
            0 -0.125em 0 #fb203b, 
            0 -0.25em 0 #fefc4b;
    }

    20% {  
        transform: translateY(0.5em);
        text-shadow: 
            0 -0.0625em 0 #0c2ffb, 
            0 -0.125em 0 #2cfcfd, 
            0 0.0625em 0 #fb203b, 
            0 0.125em 0 #fefc4b;
    }
    
   30% {
        transform: translateY(-0.25em);
        text-shadow: 
            0 0.03125em 0 #0c2ffb, 
            0 0.0625em 0 #2cfcfd, 
            0 -0.03125em 0 #fb203b, 
            0 -0.0625em 0 #fefc4b;
    }

    40% {  
        transform: translateY(0);
        text-shadow: 
            0 0 0 #0c2ffb, 
            0 0 0 #2cfcfd, 
            0 0 0 #fb203b, 
            0 0 0 #fefc4b;
    }
}

@media (prefers-reduced-motion: reduce) {
    * {
      animation: none !important;
      transition: none !important;
    }
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
// import {ParallaxContainer, ParallaxElement} from "vue-mouse-parallax";
// const ParallaxContainer = require("vue-mouse-parallax");
// const ParallaxElement = require("vue-mouse-parallax");

// Vue.component("parallax-container", ParallaxContainer);
// Vue.component("parallax-element", ParallaxElement);

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
