<template>
  <div class="bookInfo">
    <myHeader></myHeader>
    <main>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="书名">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="作者">
          <el-input v-model="form.author"></el-input>
        </el-form-item>
        <el-form-item label="出版时间" >
          <el-date-picker
          v-model="form.publishTime"
          type="date"
          placeholder="选择日期"
          :picker-options="pickerOptions0" style="width:520px;">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="封面图片">
          <el-upload
            action="http://101.201.69.191:1234/api/img/upload"
            :on-preview="handlePreview"
            :multiple="false"
            :on-success="afterUpload"
            :on-remove="handleRemove"
            :default-file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
          <div class="imgPreview">
            <img :src="form.imgURL" >
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">确定添加</el-button>
          <el-button @click="back">取消</el-button>
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
    fileList: [

    ],
    form: {
      title: '',
      author: '',
      publishTime: '',
      imgURL: '',
    }
  }),
  methods: {
    pickerOptions0: {
      disabledDate(time) {
        return time.getTime() < Date.now() - 8.64e7;
      }
    },
    handlePreview(){
      console.log(this.fileList)
    },
    handleRemove(){
      console.log(this.fileList)
    },
    afterUpload(res){
      this.form.imgURL = res.result.url[0];
    },
    onSubmit(){
      let self = this;
      if(this.form.title != ""){

        if( this.form.imgURL == "" ) {
          this.form.imgURL = "http://ok5zjclbl.bkt.clouddn.com/620e418ajw8f8vg376k4mj20dx0e8t9j.jpg";
        }
        let param = {
          title: self.form.title,
          author: self.form.author,
          publishTime: api.formatDate(self.form.publishTime),
          imgURL: self.form.imgURL
        }

        axios.post( self.URL + "/book/addBook", param)
          .then((res) => {
            if(res.data.status){
              self.$message.success('添加成功！');
              self.$router.push({ path: '/admin' });
            } else {
              self.$message.error('添加失败！');
            }
          })
          .catch((err) => {
            console.error(err);
          })
      }else {
        self.$message.error('信息不能为空！');
      }

    },
    back(){
      this.$router.push({ path: '/admin' });
    },
  },
  created(){

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
