<template>
  <div id="login">
    <div class="login_logo"></div>
    <div class="login_container">
      <div class="login_content_bg">
        <div class="bg"></div>
      </div>
      <div class="login_content">
        <!-- 登录 -->
        <div v-if="showType == 'login'" class="login_box">
          <div class="login_title">
            <div @click="toggleLoginSate('password')" :class="{ 'name_active': loginType == 'password' }" class="title_name">密码登录</div>
            <el-divider direction="vertical"></el-divider>
            <div @click="toggleLoginSate('code')" :class="{ 'name_active': loginType == 'code' }" class="title_name">验证码登录</div>
          </div>
          <div class="login_form">
            <el-form v-if="loginType == 'password'">
              <el-form-item>
                <el-input placeholder="手机号"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input show-password type="password" placeholder="密码(6-15位数字+字母+字符的两种组合)"></el-input>
              </el-form-item>
              <el-form-item class="last_item">
                <div style="display: flex; justify-content: space-between;">
                  <el-checkbox>记住账号</el-checkbox>
                  <span @click="toggleShowType('retrieve')" class="forget_password">忘记密码?</span>
                </div>
              </el-form-item>
            </el-form>
            <el-form v-if="loginType == 'code'">
              <el-form-item>
                <el-input placeholder="手机号"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input placeholder="验证码"></el-input>
              </el-form-item>
              <el-form-item class="last_item">
                滑动
              </el-form-item>
            </el-form>
            <div class="login_btn">
              <el-button>登录</el-button>
            </div>
            <div class="login_hint">
              登录即代表您同意
              <span>《admin-template服务协议》</span>
              和
              <span>《admin-template隐私政策》</span>
            </div>
          </div>
        </div>
        <!-- 忘记密码 -->
        <div v-if="showType == 'retrieve'" class="retrieve_box">
          <div class="login_title">
            <div @click="toggleRetrieve('phone')" :class="{ 'name_active': retrieveType == 'phone' }" class="title_name">手机号找回</div>
            <el-divider direction="vertical"></el-divider>
            <div @click="toggleRetrieve('email')" :class="{ 'name_active': retrieveType == 'email' }" class="title_name">邮箱找回</div>
          </div>
          <div class="login_form">
            <el-form v-if="retrieveType == 'phone'">
              <el-form-item>
                <el-input placeholder="请输入手机号"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input placeholder="请输入短信验证码"></el-input>
              </el-form-item>
              <el-form-item class="last_item">
                滑动
              </el-form-item>
              <el-form-item>
                <el-input placeholder="6-15位数字/字母和特殊字符至少两种"></el-input>
              </el-form-item>
            </el-form>
            <el-form v-if="retrieveType == 'email'">
              <el-form-item>
                <el-input placeholder="邮箱"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input placeholder="6-15位数字/字母和特殊字符至少两种"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input placeholder="请输入图形验证码"></el-input>
              </el-form-item>
            </el-form>
            <div class="login_btn">
              <el-button>确定</el-button>
            </div>
          </div>
        </div>
        <!-- 注册 -->
        <div v-if="showType == 'register'" class="register_box">
          <div class="login_title">
            <div class="title_name name_active">注册</div>
          </div>
          <div class="login_form register_form">
            <el-form label-width="80px">
              <el-form-item label="姓名">
                <el-input placeholder="请输入您的姓名"></el-input>
              </el-form-item>
              <el-form-item label="手机号">
                <el-input placeholder="请输入您的手机号"></el-input>
              </el-form-item>
              <el-form-item label="验证码">
                <el-input placeholder="请输入短信验证码"></el-input>
              </el-form-item>
              <el-form-item class="last_item">
                滑动
              </el-form-item>
              <el-form-item label="密码">
                <el-input placeholder="6-15位数字/字母和特殊字符至少两种"></el-input>
              </el-form-item>
            </el-form>
            <div class="login_btn">
              <el-button>注册</el-button>
            </div>
            <div class="login_hint">
              <el-checkbox></el-checkbox>
              注册即代表您同意
              <span>《admin-template服务协议》</span>
              和
              <span>《admin-template隐私政策》</span>
            </div>
          </div>
        </div>
        <!-- 切换到登录，注册 -->
        <div class="toggle_mode">
          <div v-if="showType == 'login'" @click="toggleShowType('register')">
            <span class="inquiry">新用户？</span>
            <span class="go_login">去注册 ></span>
          </div>
          <div v-if="showType == 'retrieve' || showType == 'register'" @click="toggleShowType('login')">
            <span v-if="showType == 'register'" class="inquiry">已有账号？</span>
            <span class="go_login">去登录 ></span>
          </div>
        </div>
      </div>
    </div>
    <div class="login_footer">
      <div>admin-template 技术平台</div>
      <div>© 2001 - 2022 admin-template 版权所有 京ICP备1202****号-3</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      showType: 'login', // 页面显示什么
      loginType: 'password', // 登录方式
      retrieveType: 'phone' // 找回方式
    }
  },
  methods: {
    // 切换页面显示
    toggleShowType (type) {
      this.showType = type
    },
    // 切换登录方式
    toggleLoginSate (type) {
      this.loginType = type
    },
    // 切换密码找回方式
    toggleRetrieve (type) {
      this.retrieveType = type
    }
  }
}
</script>

<style lang='less' scoped>
#login {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: url('~@/assets/images/login/sign_bg.jpg') no-repeat center/cover;
  .login_logo {
    flex-shrink: 0;
    height: 80px;
    padding: 15px 30px;
    background-color: #8df;
  }
  .login_container {
    display: flex;
    flex-shrink: 0;
    width: 1000px;
    height: 600px;
    margin: 0 auto;
    background: #fff;
    box-shadow: 1px 1px 30px rgba(21,5,10,.08);
    .login_content_bg {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 100%;
      .bg {
        width: 458px;
        height: 349px;
        background: url('~@/assets/images/login/sign_tu_img.png') no-repeat center/cover;
      }
    }
    .login_content {
      position: relative;
      width: 50%;
      height: 100%;
      padding-top: 136px;
      background-color: pink;
      .login_box,
      .retrieve_box,
      .register_box {
        display: flex;
        flex-direction: column;
        align-items: center;
        .login_title {
          display: flex;
          padding-bottom: 12px;
          border: none;
          margin-bottom: 30px;
          background: none;
          .title_name {
            position: relative;
            cursor: pointer;
          }
          .name_active {
            font-weight: bold;
            &::after {
              content: '';
              border-bottom: 2px solid #e64c65;
              position: absolute;
              width: 60px;
              left: 50%;
              margin-left: -30px;
              top: 26px;
            }
          }
          .el-divider--vertical {
            margin: 0 30px;
          }
        }
        .login_form {
          width: 352px;
          .el-input {
            font-size: 16px;
            color: #333;
            :deep(.el-input__inner) {
              height: 44px;
              line-height: 44px;
              border-radius: 0;
              &:focus {
                border-color: #df2128;
              }
            }
          }
          .el-checkbox {
            :deep(.el-checkbox__input) {
              height: 14px;
            }
            :deep(.el-checkbox__label) {
              line-height: 1;
              font-size: 12px;
            }
            :deep(.el-checkbox__input.is-focus .el-checkbox__inner) {
              border-color: #df2128;
            }
            :deep(.el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner) {
              background-color: #df2128;
              border-color: #df2128;
            }
            :deep(.el-checkbox__inner:hover) {
              border-color: #df2128;
            }
            :deep(.el-checkbox__label) {
              color: #333;
            }
            :deep(.el-checkbox__input.is-checked+.el-checkbox__label) {
              color: #df2128;
            }
          }
          .last_item {
            :deep(.el-form-item__content) {
              line-height: 1;
            }
            .forget_password {
              font-size: 12px;
              color: #df2128;
              cursor: pointer;
            }
          }
          .login_btn {
            :deep(.el-button) {
              width: 100%;
              height: 44px;
              border-color: #df2128;
              background-color: #df2128;
              font-size: 16px;
              color: #fff;
              border-radius: 0;
            }
            .el-button:focus, .el-button:hover {
              border-color: #ca0007;
              background-color: #ca0007;
            }
          }
          .login_hint {
            font-size: 12px;
            color: #999;
            margin-top: 16px;
            span {
              color: #df2128;
              cursor: pointer;
            }
          }
        }
        .register_form {
          width: 380px;
        }
      }

      .toggle_mode {
        position: absolute;
        bottom: 15px;
        right: 15px;
        div {
          font-size: 14px;
          .inquiry {
            padding-right: 10px;
            color: #333;
          }
          .go_login {
            color: #d83a37;
            cursor: pointer;
            &:hover {
              color: #ca0007;
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
  .login_footer {
    flex-shrink: 0;
    padding-bottom: 5px;
    &>div {
      margin-bottom: 5px;
      color: #999;
      font-size: 12px;
      text-align: center;
    }
  }
}
</style>
