<template>
  <div class="login">
    <main>
      <div class="loginBox">
        <h2><a>未开放</a><a class="active">登录</a></h2>
        <div class="input-groups">
          <div class="input-wrap"><input v-model="form.userName" placeholder="用户名"></div>
          <div class="input-wrap"><input v-model="form.pass" placeholder="密码" type="password"></div>

        </div>
        <el-button type="primary" @click="loginFunc">登陆</el-button>
      </div>
    </main>
  </div>
</template>

<script>
import myHeader from './components/myHeader'
import axios from 'axios'
import api from './config/api'
import { mapActions, dispatch } from 'vuex'
import { USER_SIGNIN } from 'store/user'
import store from './store/'
export default {
  components: {
    myHeader
  },
  data(){
    return {
      URL: api.TESTURL,
      form: {
        userName: '',
        pass: ''
      }
    }
  },
  methods: {
    // ...mapActions([USER_SIGNIN]),
    loginFunc(){
      let self = this;
      let param = {
        userName: self.form.userName,
        password: self.form.pass
      }
      axios.post( self.URL + '/user/login',  param )
        .then((res) => {
          if(res.data.status) {

            store.dispatch({
              type: 'USER_SIGNIN',
              user: {
                form: {
                  userName: self.form.userName,
                  pass: api.base64encode(self.form.pass)
                }
              }
            })

            self.$router.push({ path: '/admin' });
            self.$message.success("登录成功！");

          } else {
            self.$message.error(res.data.error);
          }
        })
        .catch((err) => {
          console.error(err);
        })

    },

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
  padding: 15px 10px;
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
  height: 44px;
  /*padding-top: 10px;
  padding-bottom: 10px;*/
  font-size: 15px;
  background-color: #0f88eb;
  transition: background .15s;
}
.loginBox .el-button:hover{
  background-color: #55abed;
}
</style>
