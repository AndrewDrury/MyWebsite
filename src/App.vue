<template>
  <div id="app" class="app">
    <!-- Navbar -->
    <b-navbar toggleable="md" class="fixed-top navbar-dark" id="navbar">
      <div class="mobile">
        <b-navbar-brand :to="{ name: 'home', hash: '' }">
          <img src="@/assets/logo.png" style="width: 50px" />
        </b-navbar-brand>
      </div>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto top-nav">
          <b-nav-item class="tab" :to="{ name: 'home', hash: '#experiences' }"
            >Experiences</b-nav-item
          >
          <b-nav-item class="tab" :to="{ name: 'home', hash: '#projects' }"
            >Projects</b-nav-item
          >
          <b-nav-item
            class="tab desktop-router"
            :to="{ name: 'home', hash: '' }"
            ><img src="@/assets/logo.png" style="width: 50px"
          /></b-nav-item>
          <b-nav-item class="tab" :to="{ name: 'home', hash: '#contact' }"
            >Contact</b-nav-item
          >
          <b-nav-item class="tab" href="" target="_blank">Resume</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

	<div id="margin-wrap">
		<div id="main">
		<!-- Dynamic Content -->
		<transition name="fade">
			<router-view></router-view>
		</transition>
		</div>
		<Experiences />
		<div style="height:500px"></div>
		<Projects />
		<div style="height:500px"></div>
		<Contact />
		<div style="height:500px"></div>
	</div>


    <!-- Footer -->
    <section id="footer">
      <div class="container">
        <b-row class="text-center" style="margin-bottom:24px">
          <b-col>
            <h3>Let's Get In Touch!</h3>
          </b-col>
        </b-row>
        <b-row style="margin-bottom: 10px">
          <b-col class="col-xs-12 col-sm-12 col-md-12">
            <ul class="list-unstyled list-inline social text-center">
              <li class="list-inline-item">
                <a
                  href="https://www.linkedin.com/in/andrew-drury"
                  target="_blank"
                >
                  <i class="fa fa-linkedin"></i>
                  <!-- <img
						srcset="
						@/assets/homepage/linkedin-logo.png,
						@/assets/homepage/linkedin-logo@2x.png 2x,
						@/assets/homepage/linkedin-logo@3x.png 3x
						"
						style="width:1em"
					/> -->
                </a>
              </li>
              <li class="list-inline-item">
                <a href="mailto:andrew.drury@waterloo.com" target="_blank">
                  <i class="fa fa-envelope"></i>
                  <!-- <img
						srcset="
						@/assets/homepage/envelope.png,
						@/assets/homepage/envelope@2x.png 2x,
						@/assets/homepage/envelope@3x.png 3x
						"
						style="width:1.25em"
					/> -->
                </a>
              </li>
              <li class="list-inline-item">
                <a href="" target="_blank">
                  <i class="fa fa-github"></i>
                  <!-- <img
						srcset="
						@/assets/homepage/medium/Shape.png,
						@/assets/homepage/medium/Shape@2x.png 2x,
						@/assets/homepage/medium/Shape@3x.png 3x
						"
						style="width:1.25em"
					/> -->
                </a>
              </li>
            </ul>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p>
              Designed &amp; Built by Andrew Drury
            </p>
          </b-col>
        </b-row>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
@import "/assets/variables.scss";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: $grey;

  #margin-wrap {
    @media (min-width: $screen-md) {
		margin-left: 9.86%;
		margin-right: 9.86%;
    }

    @media (max-width: $screen-md) {
		margin-left: 5%;
		margin-right: 5%;
    }
  }
}

.btn {
  outline: none !important;
}
.btn.btn-primary {
  background-color: $primary;
  border-color: $primary;
  outline: none;
  &:hover {
    background-color: darken($primary, 10%);
    border-color: darken($primary, 10%);
  }
  &:active,
  &:focus {
    background-color: lighten($primary, 5%);
    border-color: lighten($primary, 5%);
  }
}
.btn.btn-default {
  &:hover {
    background-color: darken($primary, 10%);
    border-color: darken($primary, 10%);
    color: #fff;
  }
  &:active,
  &:focus {
    background-color: lighten($primary, 5%);
    border-color: lighten($primary, 5%);
    color: #fff;
  }
}

// Navbar
#navbar {
  background-color: $grey-opac;
  @media (min-width: $screen-md) {
    background-color: $grey;
    height: 80px;
  }

  /* change the link color */
  .navbar-nav .nav-link {
    color: $primary;
    width: 140px;
  }
  /* change the color of active or hovered links */
  .nav-link:hover {
    color: darken($primary, 17%);
  }
  .nav-link:active {
    color: white;
  }

  .nav-link {
    @media (max-width: $screen-sm) {
      margin: 0 auto;
    }
  }

  .nav-item.tab {
    @media (max-width: $screen-sm) {
      float: none;
      margin: 0 auto;
      display: block;
      text-align: center;
    }
  }

  .navbar-nav {
    float: none;
    margin: 0 auto;
    display: block;
    text-align: center;
  }

  .navbar-nav > li {
    display: inline-block;
    float: none;
  }

  .navbar-collapse {
    text-align: center;
  }
}

// Footer
section {
  padding: 30px 0;
}
#footer {
  background: $dark-grey !important;
  z-index: 99;
}
#footer ul.social li a i {
  margin-right: 15px;
  margin-left: 15px;
  font-size: 25px;
  -webkit-transition: 0.5s all ease;
  -moz-transition: 0.5s all ease;
  transition: 0.5s all ease;
  color: $primary;
}
#footer ul.social li:hover a i {
  font-size: 30px;
  margin-top: -10px;
  color: white;
}
#footer ul.social li a img {
  margin-right: 15px;
  margin-left: 15px;
  font-size: 25px;
  -webkit-transition: 0.5s all ease;
  -moz-transition: 0.5s all ease;
  transition: 0.5s all ease;
  color: $primary;
}
#footer ul.social li:hover a img {
  font-size: 30px;
  margin-top: -10px;
  color: white;
}
#footer h3 {
  font-size: 24px;
  font-weight: 500;
}
// #footer .copyright {
//   color: $primary;
//   font-size: 22px;
// }

.navbar-dark .navbar-toggler {
  color: white !important;
  border-color: white !important;
}

.desktop-router a {
  display: inline;
  @media (max-width: $screen-sm) {
    display: none;
  }
}
</style>

<script lang="ts">
import Vue from "vue";
import Experiences from "./views/Experiences.vue";
import Projects from "./views/Projects.vue";
import Contact from "./views/Contact.vue";
// @ is an alias to /src

export default Vue.extend({
  name: "home",
  components: {
    Experiences,
    Projects,
    Contact
  }
});
</script>
