<template>
    <div class="bg">
        <div class="login-wrap animated flipInY" v-title="'Auto Vue'">
            <h3>Auto Vue</h3>
            <h3>{{$t('m.login.introduction')}}</h3>
            <el-form ref="form" :model="form" :rules="rules" label-width="0px">
                <el-form-item prop="name">
                    <el-input :placeholder="$t('m.login.name_holder')" v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input :placeholder="$t('m.login.password_holder')" v-model="form.password" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-row type="flex" justify="space-between">
                        <el-checkbox v-model="isMemery" style="color:#eee">{{$t('m.login.remember')}}</el-checkbox>
                        <a href="" @click.prevent="openMsg"  style="color:#eee">{{$t('m.login.forget')}}</a>
                    </el-row>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="Login('form')">{{$t('m.login.button')}}</el-button>
                </el-form-item>
            </el-form>
        </div>
        <!-- 粒子漂浮物 -->
        <vue-particles
            color="#fff"
            :particleOpacity="0.7"
            :particlesNumber="30"
            shapeType="star"
            :particleSize="5"
            linesColor="#fff"
            :linesWidth="2"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="3"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
        >
        </vue-particles>
    </div>
</template>
<script>
import "mock/login.js";
import Cookies from "js-cookie";
export default {
  name: "signin",
  data() {
    // var checkone = (rule, value, callback) => {
    //   let regphone = /(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
    //   let regmail = /^[_\.0-9a-z-]+@([0-9a-z][0-9a-z-]+\.){1,4}[a-z]{2,3}$/;
    //   if (value === "") {
    //     callback(new Error("请输入手机号/邮箱"));
    //   } else {
    //     if (!isNaN(value)) {dfa
    //       if (!regphone.test(value)) {
    //         callback(new Error("请输入正确手机号"));
    //         return false;
    //       }
    //       callback();
    //     }
    //     if (value.indexOf("@") != -1) {
    //       if (!regmail.test(value)) {
    //         callback(new Error("请输入正确邮箱"));
    //         return false;
    //       }
    //       callback();
    //     }
    //     callback(new Error("请输入正确手机/邮箱"));
    //   }
    // };
    return {
      form: {
        name: Cookies.get("userInfo") || "admin",
        password: Cookies.get("passwordInfo") || "654321"
      },
      isMemery: false,
      rules: {
        name: [
          {
            required: true,
            message: this.$t('m.login.name_tip'),
            trigger: "blur",
            // validator: checkone
          }
        ],
        password: [
          {
            required: true,
            message: this.$t('m.login.password_tip'),
            trigger: "blur"
          }
        ]
      }
    };
  },
  created() {
    // Cookies.set("XSRF-TOKEN", "thisistoken", { expires: 7 });
    Cookies.set("isLogin", "0", { expires: 7 });
  },
  methods: {
    Login(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios({
            url: "login",
            method: "POST",
            data: {
              username: this.form.name,
              password: this.form.password
            }
          }).then(res => {
            localStorage.userName = res.data.data.userName;
            localStorage.userId = res.data.data.userId;
            Cookies.set("isLogin", "1", { expires: 7 });
            this.getMenu();
          });
        } else {
          return false;
        }
      });
    },
    getMenu() {
      this.$axios({
        url: "getMenu",
        method: "GET"
      }).then(res => {
        // 提取菜单数组，交给本地存储
        let menu = res.data.data.menu;
        localStorage.menu = JSON.stringify(menu);
        this.$router.push("project-info");
      });
    },
    openMsg() {
      // 注意这里使用了国际化
      this.$message.warning(this.$t('m.login.info'));
    }
  },
  watch: {
    isMemery(n, o) {
      if (n) {
        Cookies.set("userInfo", this.form.name, { expires: 7 });
        Cookies.set("passwordInfo", this.form.password, { expires: 7 });
      } else {
        Cookies.remove("userInfo");
        Cookies.remove("passwordInfo");
      }
    }
  }
};
</script>
<style scoped lang="less">
.bg {
    position: relative;
    overflow: hidden;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('../../assets/img/sky.jpg');
    background-position: -20% 10%;
    background-size: contain;
    #particles-js {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
}
.login-wrap {
  width: 330px;
  border-radius: 5px;
  padding: 20px;
  z-index: 3;
  margin-right: -37%;
  background: rgba(216,220,229,0.5);
  .el-form-item {
    margin-bottom: 25px !important;
  }
  h3 {
    text-align: center;
    color: #ebedef;
    margin-top: 0px;
    margin-bottom: 5px;
    span {
        color: #20a0ff;
    }
  }
  form {
    margin-top: 25px;
    .el-form-item {
      margin-bottom: 15px;
    }
  }
  a {
    text-decoration: none;
    color: #1f2d3d;
  }
  button {
    width: 100%;
    font-weight: 600;
  }
}
</style>
