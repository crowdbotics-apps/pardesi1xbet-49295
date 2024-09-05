import axios from "axios"
const pardesixbetAPI = axios.create({
  baseURL: "https://pardesi1xbet-49295.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return pardesixbetAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return pardesixbetAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return pardesixbetAPI.post(`/api/v1/signup/`, payload)
}
function modules_terms_and_conditions_list(payload) {
  return pardesixbetAPI.get(`/modules/terms-and-conditions/`)
}
function modules_terms_and_conditions_create(payload) {
  return pardesixbetAPI.post(`/modules/terms-and-conditions/`, payload)
}
function modules_terms_and_conditions_retrieve(payload) {
  return pardesixbetAPI.get(`/modules/terms-and-conditions/${payload.id}/`)
}
function modules_terms_and_conditions_update(payload) {
  return pardesixbetAPI.put(
    `/modules/terms-and-conditions/${payload.id}/`,
    payload
  )
}
function modules_terms_and_conditions_partial_update(payload) {
  return pardesixbetAPI.patch(
    `/modules/terms-and-conditions/${payload.id}/`,
    payload
  )
}
function modules_terms_and_conditions_destroy(payload) {
  return pardesixbetAPI.delete(`/modules/terms-and-conditions/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return pardesixbetAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return pardesixbetAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return pardesixbetAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return pardesixbetAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return pardesixbetAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return pardesixbetAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return pardesixbetAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return pardesixbetAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return pardesixbetAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return pardesixbetAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return pardesixbetAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  modules_terms_and_conditions_list,
  modules_terms_and_conditions_create,
  modules_terms_and_conditions_retrieve,
  modules_terms_and_conditions_update,
  modules_terms_and_conditions_partial_update,
  modules_terms_and_conditions_destroy,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
