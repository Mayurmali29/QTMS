import {
  LogLevel,
  Configuration,
  BrowserCacheLocation,
} from "@azure/msal-browser";

const isIE =
  window.navigator.userAgent.indexOf("MSIE ") > -1 ||
  window.navigator.userAgent.indexOf("Trident/") > -1;

export const b2cPolicies = {
  names: {
    signIn: "B2C_1_qtms_signIn",
  },
  authorities: {
    // signIn: {
    //   authority:
    //     "https://zingqtmsb2c.b2clogin.com/zingqtmsb2c.onmicrosoft.com/B2C_1_qtms_signIn",
    // },
    signIn: {
      authority:
        "https://zingqtmsb2c.b2clogin.com/zingqtmsb2c.onmicrosoft.com/B2C_1_zingqtms_signUp_SignIn",
    },
  },
  authorityDomain: "zingqtmsb2c.b2clogin.com",
};

export const msalConfig: Configuration = {
  auth: {
    clientId: "e83ed604-cd89-4dec-832d-3dcfc3017173",
    authority: b2cPolicies.authorities.signIn.authority,
    knownAuthorities: [b2cPolicies.authorityDomain],
    redirectUri: "/",
  },
  cache: {
    cacheLocation: BrowserCacheLocation.LocalStorage,
    storeAuthStateInCookie: isIE,
  },
  system: {
    loggerOptions: {
      loggerCallback: (logLevel, message, containsPii) => {
        console.log(message);
      },
      logLevel: LogLevel.Verbose,
      piiLoggingEnabled: false,
    },
  },
};

export const protectedResources = {
  todoListApi: {
    endpoint: "https://qtmswebapi.azurewebsites.net/api/",
    scopes: ["https://zingqtmsb2c.onmicrosoft.com/qtmsscope/myscope"],
  },
};
export const loginRequest = {
  scopes: ["https://zingqtmsb2c.onmicrosoft.com/qtmsscope/myscope"],
};
