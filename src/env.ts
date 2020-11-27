import { Api } from '@/api';

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
  const api = new Api({});
  try {
    envConfig = (await api.get<EnvConfig>('/env.json')).data;
  } catch (e) {}
  return envConfig;
};
