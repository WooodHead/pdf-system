<template>
  <div class="bookInfo">
    <myHeader></myHeader>
    <main>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="书名">
          <el-input v-model="form.name" :readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="作者">
          <el-input v-model="form.author" :readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="出版时间" >
          <el-date-picker
          v-model="form.publishTime"
          type="date"
          placeholder="选择日期"
          :picker-options="pickerOptions0" style="width:520px;" :readonly="true">
        </el-date-picker>
        </el-form-item>
        <el-form-item label="封面图片">
          <!-- <el-upload
            action="//jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :default-file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload> -->
          <div class="imgPreview">
            <img src="http://ok5zjclbl.bkt.clouddn.com/69d4bbd1jw1ermpv7wj7oj21kw2dcqje.jpg">
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
import myHeader from './components/myHeader'
export default {
  components:{
    myHeader
  },
  data: () => ({
    fileList: [

    ],
    form: {
      title: '',
      author: '',
      publishTime: '',

    }
  }),
  methods: {
    pickerOptions0: {
      disabledDate(time) {
        return time.getTime() < Date.now() - 8.64e7;
      }
    },
    back(){
      this.$router.push({ path: '/' });
    }

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
