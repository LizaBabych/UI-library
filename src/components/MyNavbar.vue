<template>
  <div class="header">
    <div class="header-body">
      <slot name="logo">LOGO</slot>
      <nav class="header-menu" :class="{ headerMenuClose: !burgerOpen}" >
        <ul class="header-list">
          <slot name="menu">
            <li><a href="#" class="header-link">Menu 1</a></li>
            <li><a href="#" class="header-link">Menu 2</a></li>
            <li><a href="#" class="header-link">Menu 3</a></li>
          </slot>
        </ul>
      </nav>
      <div class="header-burger">
        <i :class="{'fas fa-bars': burgerOpen, 'fas fa-times': !burgerOpen}" @click="openMobileBurger"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'MyNavbar',
  data() {
    return {
      burgerOpen: true,
    };
  },
  methods: {
    openMobileBurger(): any {
      this.burgerOpen = !this.burgerOpen;
    },
  },
});
</script>

<style lang="less">
@menu-color: rgb(106, 90, 205);
@header-color: rgba(92, 200, 255, 0.6);
@secondary-header-color: rgba(0, 135, 255, 1);
@header-width: 80px;

.header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: @header-color;
  background-image: linear-gradient(to bottom right, @header-color, @secondary-header-color);
  padding-left: 10px;
  z-index: 1;
}

.header-logo {
  width: 60px;
  height: 60px;
}

.header-body {
  position: relative;
  display: flex;
  justify-content: space-between;
  height: @header-width;
  align-items: center;
}

.header-list {
  display: flex;
  & li {
    list-style: none;
    margin: 0px 30px 0px 20px;
  }
}

.header-link {
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 18px;
}

.header-burger {
  display: none;
  padding-right: 30px;
  & i {
    color:white;
  }
}

@media (max-width: 767px) {
  .header-list {
    display: block;
    font-size: 35px;
    text-align: center;
    background-color: @menu-color;
    & li {
      padding: 20px 0;
      left: 0;
    }
  }

  .header-burger {
    display: block;
    position: relative;
  }

  .header-menu {
    display: none;
    position: fixed;
    top: 40px;
    left: 0;
    right: 0;
    width: 100%;
  }

  .headerMenuClose {
    display: block;
    position: fixed;
    top: 40px;
    left: 0;
    right: 0;
    width: 100%;
  }
}
</style>
