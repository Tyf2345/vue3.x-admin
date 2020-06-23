<template>
  <div>
    <h3>前端解析xlsx 、删除、下载</h3>
    <div class="_inp-wrap w120px positionR ovflowHide">
          <button class="base-btn ontline border4px w100" @click="handleSubmit">文件上传</button>
          <input class="positionA opacity0 TRBL" type="file" accept=".xlsx, .xlx" @change="handleFile" />
        </div>
    
    <div class="mb15" v-for="(item,i) in tables" :key="i">
      <h3>
        {{item.fileName}}
         <a href="#" @click="delTable(i)">删除</a> 
      <a class="down" :href="item.url" :download="item.fileName">文件下载</a> </h3>
      <table cellspacing="0" cellpadding="0" border="0" width="100%">
        <thead>
          <tr>
            <th class="is-leaf" v-for="(thItem,th_i) in item.heads" :key="th_i">
              <div class="cell">{{thItem}}</div>
            </th>
            <th class="is-leaf">
              <div class="cell">操作</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(w,_i) in item.tBody" :key="_i">
            <td class="is-leaf" v-for="(_w,_wi) in w" :key="_wi">
              <div class="cell">{{_w}}</div>
            </td>

            <td class="is-leaf">
              <a href="#" class="cell" @click="handleDel(i,_i)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
// 解析xlsx 辅助工具函数
import handleHeads from "./components/handleHeads";
import handleXlsx from "./components/handleXlsx";
import handleTbody from "./components/handleTbody";
export default {
  setup() {
    let tables = ref([]);

    //上传数据
    function handleFile(e) {
      const f = e.target.files[0];
      let name = f.name;
      let fileName = name.slice(0,name.lastIndexOf('.'))
      let reader = new FileReader();
      reader.readAsArrayBuffer(f);
      reader.onload = function(e) {
        //  处理数据==> [{},{}]
        let json = handleXlsx(e).json;
        let csv = handleXlsx(e).csv;
        let _blob = new Blob([csv],{type:"text/csv;charset=UTF-8"})
        let url = URL.createObjectURL(_blob)
        let heads = handleHeads(json); // 表头数据 ==>['',''] number
        let tBody = handleTbody(json, heads); //表格数据 ==》[{},{}]
        tables.value.push({
          fileName,
          url,
          heads,
          tBody
        });
      };
    }
    //删除数据 item
    function handleDel(i1, i2) {
      tables.value[i1].tBody.splice(i2, 1);
    }
    //删除表格
    function delTable(i){
      tables.value.splice(i,1)
    }
    return {
      tables,
      handleFile,
      handleDel,
      delTable
    };
  }
};
</script>
<style lang="less" scoped>
.down{
  margin-left: 20px;
}
table {
  background-color: #fff;
}
thead {
  color: #909399;
}
tbody {
  color: #606266;
}
th,
td {
  padding: 12px 0;
}
.is-leaf {
  border-bottom: 1px solid #ebeef5;
}
.cell {
  text-align: left;
  padding-left: 10px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-break: break-all;
  line-height: 23px;
  padding-right: 10px;
}

     ._inp-wrap {
        display: flex;
        margin-bottom: 22px;
        ._inp {
          display: inline-block;
          width: 100%;
          height: 40px;
          height: 40px;
          padding: 0 15px;
          border: 1px solid #dcdfe6;
          background-color: #fff;
          &:hover {
            border-color: #c0c4cc;
          }
        }
        .base-btn {
          display: inline-block;
          padding: 12px 20px;
          background: #66b1ff;
          border-color: #66b1ff;
          color: #fff;
          border: 1px solid #dcdfe6;
          transition: 0.1s;
          cursor: pointer;
          &:hover {
            opacity: 0.9;
          }
        }
        .ghost {
          background-color: #fff;
          border: 1px solid #dcdfe6;
          color: #606266;
        }
      }
</style>