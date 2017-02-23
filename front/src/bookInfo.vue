<template>
  <div class="bookInfo">
    <myHeader></myHeader>
    <main>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="书名">
          <el-input v-model="form.title" :readonly="ReadOnly"></el-input>
        </el-form-item>
        <el-form-item label="作者">
          <el-input v-model="form.author" :readonly="ReadOnly"></el-input>
        </el-form-item>
        <el-form-item label="出版时间" >
          <el-date-picker
          v-model="form.publishTime"
          type="date"
          placeholder="选择日期"
          :picker-options="pickerOptions0" style="width:520px;" :readonly="ReadOnly">
        </el-date-picker>
        </el-form-item>
        <el-form-item label="封面图片">
          <div class="imgPreview">
            <img :src="form.imgURL">
          </div>
        </el-form-item>
        <el-form-item>
          <el-button @click="back">返回</el-button>
        </el-form-item>
      </el-form>
    </main>
  </div>
</template>

<script>
import axios from "axios"
import api from './config/api'
import myHeader from './components/myHeader'
export default {
  components:{
    myHeader
  },
  data: () => ({
    URL: api.TESTURL,
    ReadOnly: true,
    fileList: [

    ],
    form: {
      id: '',
      title: '',
      author: '',
      publishTime: '',
      imgURL: '',
    },
  }),
  methods: {
    pickerOptions0: {
      disabledDate(time) {
        return time.getTime() < Date.now() - 8.64e7;
      }
    },
    back(){
      this.$router.push({ path: '/' });
    },
    getList(){
      let self = this;
      // console.log(this.$route.params.id);
      var param = {
        id: this.$route.params.id
      }
      axios.post( self.URL + '/book/getBookById', param )
        .then((res) => {
          self.form.id = res.data.data[0].id;
          self.form.title = res.data.data[0].title;
          self.form.author = res.data.data[0].author;
          self.form.publishTime = res.data.data[0].publishTime;
          if(res.data.data[0].imgURL == undefined || res.data.data[0].imgURL == null || res.data.data[0].imgURL == "") {
            self.form.imgURL = "http://ok5zjclbl.bkt.clouddn.com/620e418ajw8f8vg376k4mj20dx0e8t9j.jpg";
          }else {
            self.form.imgURL = res.data.data[0].imgURL;
          }
        })
        .catch((err) => {
          console.error(err);
        })
    }

  },
  created(){
    let self = this;
    if(this.$route.name == 'bookEdit'){
      this.ReadOnly = false;
    }else{
      this.ReadOnly = true;
    }
    this.getList();
  },
}
</script>

<style scoped>
.bookInfo{

}
.el-form{
  width: 600px;
}
.imgPreview{
  width: 300px;
}
.imgPreview img{
  width: 100%;
}
</style>
