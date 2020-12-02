function getJSON (url: string): any {
  return new Promise(function (resolve, reject) {
    const req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function () {
      if (req.status === 200) {
        resolve(JSON.parse(req.response));
      } else {
        reject(Error(req.statusText));
      }
    };
    req.onerror = function () {
      reject(Error('Network Error'));
    };
    req.send();
  });
}

export interface EnvConfig {
  API_URL: string;
  ENV: string;
  SENTRY_DSN: string | null;
  GTM_ID: string | null;
}

export const getEnvVariables = async () => {
  let envConfig: EnvConfig = {
    API_URL: '',
    ENV: 'DEV',
    SENTRY_DSN: null,
    GTM_ID: null
  };
  try {
    envConfig = (await getJSON('/env.json'));
  } catch (e) {}
  return envConfig;
};
