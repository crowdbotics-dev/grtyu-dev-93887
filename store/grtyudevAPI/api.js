import axios from "axios"
const grtyudevAPI = axios.create({
  baseURL: "https://grtyu-dev-93887.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return grtyudevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_fhhj_list(payload) {
  return grtyudevAPI.get(`/api/v1/fhhj/`)
}
function api_v1_fhhj_create(payload) {
  return grtyudevAPI.post(`/api/v1/fhhj/`, payload.data)
}
function api_v1_fhhj_retrieve(payload) {
  return grtyudevAPI.get(`/api/v1/fhhj/${payload.id}/`)
}
function api_v1_fhhj_update(payload) {
  return grtyudevAPI.put(`/api/v1/fhhj/${payload.id}/`, payload.data)
}
function api_v1_fhhj_partial_update(payload) {
  return grtyudevAPI.patch(`/api/v1/fhhj/${payload.id}/`, payload.data)
}
function api_v1_fhhj_destroy(payload) {
  return grtyudevAPI.delete(`/api/v1/fhhj/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return grtyudevAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_signup_create(payload) {
  return grtyudevAPI.post(`/api/v1/signup/`, payload.data)
}
function api_v1_xnjui_list(payload) {
  return grtyudevAPI.get(`/api/v1/xnjui/`)
}
function api_v1_xnjui_create(payload) {
  return grtyudevAPI.post(`/api/v1/xnjui/`, payload.data)
}
function api_v1_xnjui_retrieve(payload) {
  return grtyudevAPI.get(`/api/v1/xnjui/${payload.id}/`)
}
function api_v1_xnjui_update(payload) {
  return grtyudevAPI.put(`/api/v1/xnjui/${payload.id}/`, payload.data)
}
function api_v1_xnjui_partial_update(payload) {
  return grtyudevAPI.patch(`/api/v1/xnjui/${payload.id}/`, payload.data)
}
function api_v1_xnjui_destroy(payload) {
  return grtyudevAPI.delete(`/api/v1/xnjui/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return grtyudevAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return grtyudevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return grtyudevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return grtyudevAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return grtyudevAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return grtyudevAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function rest_auth_registration_create(payload) {
  return grtyudevAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return grtyudevAPI.post(`/rest-auth/registration/verify-email/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return grtyudevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return grtyudevAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return grtyudevAPI.patch(`/rest-auth/user/`, payload.data)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_fhhj_list,
  api_v1_fhhj_create,
  api_v1_fhhj_retrieve,
  api_v1_fhhj_update,
  api_v1_fhhj_partial_update,
  api_v1_fhhj_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_xnjui_list,
  api_v1_xnjui_create,
  api_v1_xnjui_retrieve,
  api_v1_xnjui_update,
  api_v1_xnjui_partial_update,
  api_v1_xnjui_destroy,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
