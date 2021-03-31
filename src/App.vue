<template>
  <Nav>
    <NavItem href="/" isActive>Home</NavItem>
    <NavItem href="/movies">Movies</NavItem>
    <NavItem href="/shows">Shows</NavItem>
    <NavItem href="/about">About</NavItem>
  </Nav>
  <router-view></router-view>
  <Footer />
</template>

<script setup>
import Nav from './components/Nav.vue'
import NavItem from './components/NavItem.vue'
import Footer from './components/Footer.vue'
</script>