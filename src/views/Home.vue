<template>
  <div class="home">
    <h1>H5-2001就业情况</h1>
    <h3>最高薪资:{{topSalary}}  平均薪资:{{avgSalary}} 就业人数:{{jobStudent}}</h3>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="studentName" label="姓名" width="180"></el-table-column>
      <el-table-column prop="salary" label="薪资" width="180"></el-table-column>
      <el-table-column prop="company" label="企业名称" width="240"></el-table-column>
      <el-table-column prop="studentEducation" label="学历" width="240"></el-table-column>
      <el-table-column prop="studentProfessional" label="专业"></el-table-column>
    </el-table>
  </div>
</template>

<script>
// @ is an alias to /src
import { getStudy } from "@/utils/api.js";
export default {
  name: "Home",
  data(){
    return {
       tableData: [{
          name: '2016-05-02',
          salary: '王小虎',
          company: '上海市普陀区金沙江路 1518 弄'
        }, {
          name: '2016-05-04',
          salary: '王小虎',
          company: '上海市普陀区金沙江路 1517 弄'
        }, {
          name: '2016-05-01',
          salary: '王小虎',
          company: '上海市普陀区金沙江路 1519 弄'
        }, {
          name: '2016-05-03',
          salary: '王小虎',
          company: '上海市普陀区金沙江路 1516 弄'
        }],
        topSalary:'',
        avgSalary:'',
        jobStudent:''
    }
  },
  components: {},
  created() {
    getStudy().then((res) => {
      console.log(res);
      this.tableData =  res.student;
      this.topSalary = res.topSalary;
      this.avgSalary = res.avgSalary;
      this.jobStudent = res.jobStudent;
    });
  },
};
</script>
