本文件夹旨在搜集别的项目中有用的代码片段：

```javascript
1）借助隐藏表单实现文件下载：
<form method="POST" action="/v2/down" id="hiddenForm" ref="hiddenForm">
    <input type="text" name="dsl" :value="JSON.stringify(this.$store.state.contrast.queryParamBkp)" />
</form>

downloadData() {
  this.$refs.hiddenForm.submit()
}

2）验证码：
<el-form-item prop="authcode" class="custom-item">
    <el-input placeholder="请输入验证码" v-model="form.authcode" name="authcode" @keyup.native.enter="onLogin"></el-input>
    <img src="api/v1/xxx/get" ref="codeImg" @click="updateImg()"/>
</el-form-item>

updateImg() {
  this.$refs.codeImg.src = 'api/v1/xxx/get?' + Math.random()
}

3）定义公共函数：
function indexOf(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == val) return i;
    }
    return -1;
}
export { postDataToString, getDateStr, postDataToObj, arrRemove }

在main.js文件中引进来
import * as mylib from '@/utils/mylib'

4)读取excel文件：
import XLSX from "xlsx/xlsx.js"

getDataFromFile(file, fileList) {
  var Fr = new FileReader();
  // 讲文件读取成二进制码
  Fr.readAsBinaryString(file.raw);
  // 创建空数组
  let data_arr = [];
  // 一旦文件阅读者读取文件完毕，就执行回调函数
  Fr.onload = e => {
    let data = e.target.result;
    // 拿到工作簿
    let workbook = XLSX.read(data, { type: "binary" });
    // 拿到工作簿第一个工作表的名字
    var first_sheet_name = workbook.SheetNames[0];
    /* 拿到第一个工作表 */
    var worksheet = workbook.Sheets[first_sheet_name];
    // 将第一个工作表变成数组
    let arr = XLSX.utils.sheet_to_json(worksheet);
    // 将arr的每一项中的value值push到空数组中
    arr.forEach((v, k) => {
      data_arr.push(Object.values(v)[0]);
    });
    // 再将第一项的key，unshift到data_arr，这样才能补上第一行的数据
    data_arr.unshift(Object.keys(arr[0])[0]);
    this.form.adplacement = data_arr.join("\n");
  };
}


```
