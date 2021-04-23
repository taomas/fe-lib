import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

export default class Ajax {
  private baseUrl = "/"

  private request(params: AxiosRequestConfig): Promise<any> {
    return new Promise((resolve, reject) => {
      axios(params)
        .then((res: AxiosResponse) => {
          if (res && res.status === 400) {
            console.log("前端传参异常了~")
          } else if (res.data) {
            if (res.data?.code === 0 || res.data?.ret === 0) {
              resolve(res.data.data)
            } else {
              reject(res.data.msg)
            }
          }
        })
        .catch((err) => {
          const error = err?.response
          if (error.status === 400) {
            console.log("前端传参异常了~")
          }
          reject(err)
        })
    })
  }

  private queryString(url: string, query?: Record<string, string>): string {
    const str = []
    for (const key in query) {
      str.push(key + "=" + query[key])
    }
    const paramStr = str.join("&")
    return paramStr ? `${url}?${paramStr}` : url
  }

  public get(url = "", params?: Record<string, string>): Promise<any> {
    return this.request({
      method: "get",
      url: this.queryString(`${this.baseUrl}${url}`, params),
    })
  }

  public post(url: string, params?: Record<string, any>): Promise<any> {
    return this.request({
      method: "post",
      url: `${this.baseUrl}${url}`,
      data: params,
    })
  }
}
