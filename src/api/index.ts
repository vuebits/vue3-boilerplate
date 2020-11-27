import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosInterceptorManager } from 'axios';

export class Api {
    private api: AxiosInstance;
    public interceptors: {
      request: AxiosInterceptorManager<AxiosRequestConfig>;
      response: AxiosInterceptorManager<AxiosResponse>;
    };

    public constructor (config: AxiosRequestConfig) {
      this.api = axios.create(config);
      this.interceptors = this.api.interceptors;
    }

    public getUri (config?: AxiosRequestConfig): string {
      return this.api.getUri(config);
    }

    public request<T, R = AxiosResponse<T>> (config: AxiosRequestConfig): Promise<R> {
      return this.api.request(config);
    }

    public get<T, R = AxiosResponse<T>> (url: string, config?: AxiosRequestConfig): Promise<R> {
      return this.api.get(url, config);
    }

    public delete<T, R = AxiosResponse<T>> (url: string, config?: AxiosRequestConfig): Promise<R> {
      return this.api.delete(url, config);
    }

    public head<T, R = AxiosResponse<T>> (url: string, config?: AxiosRequestConfig): Promise<R> {
      return this.api.head(url, config);
    }

    public post<T, R = AxiosResponse<T>> (url: string, data?: any, config?: AxiosRequestConfig): Promise<R> {
      return this.api.post(url, data, config);
    }

    public put<T, R = AxiosResponse<T>> (url: string, data?: any, config?: AxiosRequestConfig): Promise<R> {
      return this.api.put(url, data, config);
    }

    public patch<T, R = AxiosResponse<T>> (url: string, data?: any, config?: AxiosRequestConfig): Promise<R> {
      return this.api.patch(url, data, config);
    }
}
