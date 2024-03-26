export default {
  Region: import.meta.env.VITE_APP_IDP_REGION,
  UserPoolId: import.meta.env.VITE_APP_IDP_USERPOOLID,
  AppClientId: import.meta.env.VITE_APP_IDP_APPCLIENTID,
  ClientSecret: import.meta.env.VITE_APP_IDP_CLIENTSECRET,
  Domain: import.meta.env.VITE_APP_IDP_DOMAIN,
  CallbackUrl: import.meta.env.VITE_APP_IDP_CALLBACKURL,
  LogoutUrl: import.meta.env.VITE_APP_IDP_LOGOUTURL
}
