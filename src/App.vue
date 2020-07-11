<template>
  <div id="app">
    <Header id="header" />
    <div id="wrapper">
      <SideBar id="side-bar" />
      <keep-alive>
        <router-view id="main" />
      </keep-alive>
    </div>
    <Footer id="footer" />
  </div>
</template>

<script>
import Header from '@/components/Header'
import SideBar from '@/components/SideBar'
import Footer from '@/components/Footer'


export default {
  name: 'App',
  components: {
    Header,
    SideBar,
    Footer,
  }
}
</script>

<style lang="sass">
#app 
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center

#header
    background: #eee
    color: red
    height: 55px
    line-height: 55px
    font-size: 30px

#wrapper
  position: relative
  height: 720px

  #side-bar
    position: absolute
    width: 50px
    top: 0
    left: 0
    background: #efe0e0
    height: 720px
    color: green

  #main
    margin-left: 30px
    background: #efefd0
    height: 720px

#footer
    background: #eee
    color: blue
    height: 55px
    line-height: 55px
    font-size: 30px
</style>
