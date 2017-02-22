<template>
  <div class="login">
    <main>
      <div class="loginBox">
        <h2><a>未开放</a><a class="active">登录</a></h2>
        <div class="input-groups">
          <div class="input-wrap"><input v-model="userName" placeholder="用户名"></div>
          <div class="input-wrap"><input v-model="pass" placeholder="密码" type="password"></div>

        </div>
        <el-button type="primary" @click="loginFunc">登陆</el-button>
      </div>
    </main>
  </div>
</template>

<script>
import myHeader from './components/myHeader'
export default {
  components: {
    myHeader
  },
  data: () => ({
    userName: '',
    pass: ''
  }),
  methods: {
    loginFunc(){
      this.$router.push({ path: '/admin' })
    }
  },
  created(){

  },
}
</script>

<style scoped>
html{
  width: 100%;
}
main{
  width: 1200px;
  height: 100%;
  padding-top: 100px;
}
.loginBox{
  width: 300px;
  margin: 0 auto;
}
.loginBox h2{
  text-align: center;
  font-weight: 500;
  margin-bottom: 36px;
  font-size: 18px;
}
.loginBox h2 a{
  margin: 0 10px;
  padding: 8px 4px;
  text-decoration: none;
  cursor: pointer;
  color: #777;
  cursor: default;
}
.loginBox h2 a.active{
  color: #0f88eb;
  cursor: pointer;
  border-bottom: 2px solid #0f88eb;
}

.loginBox .input-groups{
  border: 1px solid #d5d5d5;
  margin-bottom: 20px;
  border-radius: 3px;
  padding: 1px 0;
}
.loginBox .input-groups .input-wrap:nth-child(2){
  border-top: 1px solid #e8e8e8;
}
.loginBox .input-groups .input-wrap input{
  border: none;
  margin: 0;
  padding: 10px 10px;
  width: 276px;
  line-height: 19px;
  color: #555;
  font-size: 14px;
  border-radius: 5px;
}
.loginBox .input-groups .input-wrap input:focus{
  border: none;
  outline: none;
}
.loginBox .el-button{
  width: 100%;
  font-size: 15px;
  background-color: #0f88eb;
  transition: background .15s;
}
.loginBox .el-button:hover{
  background-color: #55abed;
}
</style>
