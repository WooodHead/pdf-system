<template>
  <div class="buttonG">
    <div class="searchInput">
      <input
        icon="search"
        v-model="searchVal"
        :on-icon-click="handleIconClick">
      </input>
    </div>
    <el-button-group v-if="plus">
      <i class="el-icon-plus" @click="toAdd" title="添加书本"></i>
    </el-button-group>
  </div>
</template>

<script>
export default {
  props: ['plus'],
  data () {
    return {
      searchVal: '',
    }
  },
  methods: {
    toAdd(){
      this.$router.push({ path: '/addBook' })
    },
    handleIconClick(){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.buttonG{
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-grow: row wrap;
  margin-bottom: 30px;
}
.searchInput{
  width: 200px;
}
.el-button-group{
  margin-left: auto;
}
.searchInput input{
  outline: none;
  width: 100%;
  height: 28px;
  border-radius: 28px;
  border: 1px solid #e3e3e3;
  transition: border .2s linear;
  padding: 3px 10px 3px 36px;
  color: #444;
  font-size: 14px;
  font-family: 'Microsoft Yahei';
  background-repeat: no-repeat;
  background-size: 20px;
  background-position: left 10px top 8px;
  background-image: url("./../assets/search.png");
}
.searchInput input:hover{
    border-color: #8391a5;
}
.searchInput input:focus{
    border-color: #20a0ff;
}
.buttonG i{
  /*color: #1d8ce0;*/
  font-size: 20px;
  cursor: pointer;
  transition: color .3s;
}
.buttonG i:hover{
  color:#1d8ce0;
}
</style>
