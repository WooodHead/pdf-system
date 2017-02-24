<template>
  <div class="myHeader">
    <div class="container">
      <h2 @click="toHome">PDF Hunter</h2>
      <h3 @click="toAdmin">管理后台</h3>
    </div>
  </div>
</template>

<script>
import store from './../store/'
export default {
  data () {
    return {
    }
  },
  methods: {
    toHome(){
      this.$router.push({ path: '/' })
    },
    toAdmin(){
      if(store.state.user.user){
        this.$router.push({ path: '/admin' })
      } else {
        this.$router.push({ path: '/admin/login' })
      }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myHeader{
  margin: 0 0 20px 0 ;
  padding: 0;
  height: 62px;
  line-height: 62px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.container{
  width: 1100px;
  margin: 0 auto;
  display: flex;
}
.myHeader h2{
  font-weight: 500;
  cursor: pointer;
  font-size: 24px;
  color: #333;
}
.myHeader h3{
  margin-left: auto;
  font-weight: normal;
  font-size: 15px;
  cursor: pointer;
  color: #1d8ce0;
}
</style>
