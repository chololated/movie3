<template>
    <div id="main">
      <Header title="我的影院"></Header>
      <div id="content">
        <Login></Login>
      </div>
      <Tabar></Tabar>
    </div>
</template>
<script>
import Header from '@/components/Header'
import Tabar from '@/components/Tabar'
import  Login from '@/components/Login'
export default {
  name:'Mine',
  components:{
    Header,
    Tabar,
    Login
  }
}
</script>x  
<style scoped>
#content .login_body{  width:100%;}
</style>

    