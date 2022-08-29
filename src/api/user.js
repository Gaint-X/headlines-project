import request from "@/utils/request"

//user login request
const loginAPI = data => {
  return request({
    url: "/v1_0/authorizations",
    method: "POST",
    data,
  })
}

export { loginAPI }
