<template>
  <div>
    <van-nav-bar title="登录"> </van-nav-bar>
    <van-form @submit="onSubmit">
      <van-field
        v-model="info.mobile"
        label="手机号"
        placeholder="请输入手机号码"
        :rules="rules.mobile"
      />
      <van-field
        v-model="info.code"
        label="验证码"
        placeholder="请输入验证码"
        :rules="rules.code"
      />
      <div style="margin: 16px">
        <van-button
          round
          block
          type="info"
          native-type="submit"
          color="linear-gradient(90deg, #ff6034, #ee0a24)"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  methods: {
    onSubmit() {},
  },
  data() {
    return {
      info: {
        mobile: "",
        code: "",
      },
      rules: {
        mobile: [
          { required: true, message: "请填写手机号码" },
          { pattern: /^1[3-9]\d{9}$/, message: "请填写正确手机号码" },
        ],
        code: [
          { required: true, message: "请填写验证码" },
          { pattern: /^\d{6}$/, message: "请填写6位有效的验证码" },
        ],
      },
    }
  },
}
</script>

<style></style>
