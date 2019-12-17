<template>
  <div class="home" id="home" name="home">
    <b-container fluid class="verticalCenter">
      <b-row>
        <b-col>
          <b-row class="top-space">
            <b-col class="container" align="center">
              <!-- https://vue-particles.netlify.com/ to customize -->
              <vue-particles
                color="#31e0ff"
                :particleOpacity="1"
                :particlesNumber="150"
                shapeType="circle"
                :particleSize="4"
                linesColor="#FFFFFF"
                :linesWidth="1"
                :lineLinked="true"
                :lineOpacity="0.4"
                :linesDistance="120"
                :moveSpeed="6"
                :hoverEffect="true"
                hoverMode="grab"
                :clickEffect="true"
                clickMode="repulse"
              >
              </vue-particles>

              <div class='intro'>
                <!-- <div class="deconstructed" style='margin-top: 14vh'>
                  Hi!
                  <div>Hi!</div>
                  <div>Hi!</div>
                  <div>Hi!</div>
                  <div>Hi!</div>
                </div> -->
                <div class="deconstructed">
                  I am Andrew Drury.
                  <div>I am Andrew Drury.</div>
                  <div>I am Andrew Drury.</div>
                  <div>I am Andrew Drury.</div>
                  <div>I am Andrew Drury.</div>
                </div>
                <h5 class='text-shadow' style='margin-top:60px'>I am a
                    <div class="slidingHorizontal">
                      <span>creative thinker.</span>
                      <span>excited innovator.</span>
                      <span>engineering student.</span>
                      <span>passionate creator.</span>
                      <span>Full Stack Developer.</span>
                  </div>
                </h5>
                <div class='view-more'>
                  <!-- <router-link :to="{ name: 'home', hash: '#experiences' }"><span></span><h6>View My Experiences</h6></router-link> -->
                  <router-link :to="{ name: 'home', hash: '#experiences' }"><span></span></router-link>
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
    // margin-top: 80px;
    // @media (max-width: $screen-sm) {
    //   margin-top: 80px;
    // }
    margin-bottom: 30px;
  }
  .container {
    position: relative;
    padding-left: 0px;
    padding-right: 0px;

    .particles-js-canvas-el {
      border-bottom: 1px solid $primary;
    }
  }
  .intro {
    margin-top: 10vh;
    width: 100vw;
    top:0px;
    position: absolute;
    text-align: center;
    pointer-events: none;
  }
  .view-more {
      color: #FFF;
      margin-top: 70px;
      pointer-events: auto;
    }

    h5 {
      font-size: 30px !important;

      span {
        font-size: 30px !important;
        font-weight: 500 !important;
      }
    }
}

// DECONSTRUCTED TEXT
.deconstructed {
  position: relative;
  margin-top: 180px;
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
  text-shadow: 3px 3px 2px $blue;
}

.deconstructed > div:nth-child(1) {
  -webkit-mask-image: linear-gradient(black 25%, transparent 25%);
  mask-image: linear-gradient(black 25%, transparent 25%);
  animation: deconstructed1 10s infinite;
}

.deconstructed > div:nth-child(2) {
  -webkit-mask-image: linear-gradient(transparent 25%, black 25%, black 50%, transparent 50%);
  mask-image: linear-gradient(transparent 25%, black 25%, black 50%, transparent 50%);
  animation: deconstructed2 10s infinite;
}

.deconstructed > div:nth-child(3) {
   -webkit-mask-image: linear-gradient(transparent 50%, black 50%, black 75%, transparent 75%);
  mask-image: linear-gradient(transparent 50%, black 50%, black 75%, transparent 75%);
  animation: deconstructed3 10s infinite;
}

.deconstructed > div:nth-child(4) {
   -webkit-mask-image: linear-gradient(transparent 75%, black 75%);
  mask-image: linear-gradient(transparent 75%, black 75%);
  animation: deconstructed4 10s infinite;
}

@keyframes deconstructed1 {
  0% {
    transform: translateX(100%);
  }
  16% {
    transform: translateX(0%);
  }
  93% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-120%);
  }
}

@keyframes deconstructed2 {
  0% {
    transform: translateX(100%);
  }
  14% {
    transform: translateX(0.5%);
  }
  50% {
    transform: translateX(0%);
  }
  92% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-125%);
  }
}

@keyframes deconstructed3 {
  0% {
    transform: translateX(100%);
  }
  12% {
    transform: translateX(0%);
  }
  91% {
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
  10% {
    transform: translateX(0%);
  }
  90% {
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
    -webkit-animation: sdb03 8s infinite;
    animation: sdb03 8s infinite;
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
    // box-shadow: 0 0 0 0 rgba(255,255,255,.1);
    border-radius: 100%;
    opacity: 0;
    // -webkit-animation: sdb03 3s infinite;
    // animation: sdb03 3s infinite;
    box-sizing: border-box;
  }
}
.view-more a:hover {
  opacity: .5;
}
@-webkit-keyframes sdb03 {
  0% {
    box-shadow: 0 0 0 0px rgba(255,255,255,.05);
  }
  23% {
    box-shadow: 0 0 0 30px rgba(255,255,255,.1);
  }
  100% {
    box-shadow: 0 0 0 0px rgba(255,255,255,.05);
  }
}
@keyframes sdb03 {
  0% {
    box-shadow: 0 0 0 0px rgba(255,255,255,.05);
  }
  23% {
    box-shadow: 0 0 0 30px rgba(255,255,255,.1);
  }
  100% {
    box-shadow: 0 0 0 0px rgba(255,255,255,.05);
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

/*Horizontal Sliding*/
.slidingHorizontal{
	display: inline;
  text-indent: 0.5em;
}
.slidingHorizontal span{
	animation: leftToRight 12.5s linear infinite 0s;
	-ms-animation: leftToRight 12.5s linear infinite 0s;
	-webkit-animation: leftToRight 12.5s linear infinite 0s;
	opacity: 0;
	overflow: hidden;
  position: absolute;
  padding-top: 5px;
  height: 1em;
}
.slidingHorizontal span:nth-child(2){
	animation-delay: 2.5s;
	-ms-animation-delay: 2.5s;
	-webkit-animation-delay: 2.5s;
}
.slidingHorizontal span:nth-child(3){
	animation-delay: 5s;
	-ms-animation-delay: 5s;
	-webkit-animation-delay: 5s;
}
.slidingHorizontal span:nth-child(4){
	animation-delay: 7.5s;
	-ms-animation-delay: 7.5s;
	-webkit-animation-delay: 7.5s;
}
.slidingHorizontal span:nth-child(5){
	animation-delay: 10s;
	-ms-animation-delay: 10s;
	-webkit-animation-delay: 10s;
}

/*leftToRight Animation*/
@-moz-keyframes leftToRight{
	0% { opacity: 0; }
	5% { opacity: 0; -moz-transform: translateX(50px); }
	10% { opacity: 1; -moz-transform: translateX(0px); }
	25% { opacity: 1; -moz-transform: translateX(0px); }
	30% { opacity: 0; -moz-transform: translateX(-50px); }
	80% { opacity: 0; }
	100% { opacity: 0; }
}
@-webkit-keyframes leftToRight{
	0% { opacity: 0; }
	5% { opacity: 0; -webkit-transform: translateX(50px); }
	10% { opacity: 1; -webkit-transform: translateX(0px); }
	25% { opacity: 1; -webkit-transform: translateX(0px); }
	30% { opacity: 0; -webkit-transform: translateX(-50px); }
	80% { opacity: 0; }
	100% { opacity: 0; }
}
@-ms-keyframes leftToRight{
	0% { opacity: 0; }
	5% { opacity: 0; -ms-transform: translateX(50px); }
	10% { opacity: 1; -ms-transform: translateX(0px); }
	25% { opacity: 1; -ms-transform: translateX(0px); }
	30% { opacity: 0; -ms-transform: translateX(-50px); }
	80% { opacity: 0; }
	100% { opacity: 0; }
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
