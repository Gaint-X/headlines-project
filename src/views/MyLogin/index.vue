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
          :loading="isLoading"
          type="info"
          loading-text="加载中..."
          native-type="submit"
          color="linear-gradient(90deg, #ff6034, #ee0a24)"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { loginAPI } from "@/api/user"
export default {
  methods: {
    async onSubmit() {
      this.isLoading = true
      try {
        const res = await loginAPI(this.info)
        console.log(res)
        this.$toast.success("登录成功")
      } catch {
        this.$toast.fail("验证码错误")
      } finally {
        this.isLoading = false
      }
    },
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
      isLoading: false,
    }
  },
}
</script>

<style></style>
