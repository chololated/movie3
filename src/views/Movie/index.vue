<template>
    <div id="main">
      <Header title="喵喵影院"></Header>
      <div id="content">
        <div class="movie_menu">
          <router-link tag="div" to="/movie/city" class="city_name">
            <span>大连</span><i class="iconfont icon-lower-triangle"></i>
          </router-link>
          <div class="hot_swtich">
            <router-link tag="div" to="/movie/nowplaying" class="hot_item">正在热映</router-link>
            <router-link tag="div" to="/movie/comingsoon" class="hot_item">即将上映</router-link>
          </div>
          <router-link tag="div" to="/movie/search" class="search_entry">
            <i class="iconfont icon-sousuo"></i>
          </router-link>
        </div>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
      <Tabar></Tabar>
    </div>
</template>
<script>
import Header from '@/components/Header'
import Tabar from '@/components/Tabar'
export default {
  name:'Movie',
  components:{
    Header,
    Tabar
  }
}
</script>
<style scoped>
.main{
  position:relative;
}
#content .movie_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-between; align-items:center; background:white; z-index:10;position:fixed;top:50px;}
.movie_menu .city_name{ margin-left: 20px; height:100%; line-height: 45px;}

.movie_menu .hot_swtich{ display: flex; height:100%; line-height: 45px;}
.movie_menu .hot_item{ font-size: 15px; color:#666; width:80px; text-align:center; margin:0 12px; font-weight:700;}

.movie_menu div.router-link-active{color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry{ margin-right:20px; height:100%; line-height: 45px;}

.movie_menu .search_entry i{  font-size:24px; }
</style>
