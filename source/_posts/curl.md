---
title: Curl 使用指南
date: 2021-04-14 17:52:24
tags:
  - Bash
---

## 参数

| 选项                          | 示例                                                   |
| ----------------------------- | ------------------------------------------------------ |
| -A, --user-agent <name>       | 设置 user agent                                        |
| -b, --cookie <data\|filename> | 添加 cookie                                            |
| -c, --cookie-jar <filename>   | 将服务端 cookies 写入文件                              |
| -d, --data <data>             | HTTP POST 数据                                         |
| --data-urlencode <data>       | 等同于 `-d`，区别在于会自动将发送的数据进行 URL 编码。 |
| -e --referer <URL>            | 设置请求来源，既标头`Referer`                          |
| -F, --form <name=content>     | 上传 multipart MIME 数据                               |
| -H, --header <header/@file>   | 添加头部                                               |
| -i, --include                 | 同时显示 HTTP 响应头部信息                             |
| -I, --head                    | 只显示 HTTP 响应头部信息                               |
| -L, --location                | 自动跳转                                               |
| -o, --output <file>           | 小写 o，另存为指定文件                                 |
| -O, --remote-name             | 大写 O，另存为服务文件名                               |
| -u, --user <user:password>    | 设置 HTTP 用户密码                                     |
| -v, --verbose                 | 显示通信详情信息                                       |
| -V, --version                 | 打印版本号                                             |
| -X, --request <command>       | 指定 HTTP 动词                                         |



## 示例

### -A, --user-agent

`-A` 参数指定客户端的用户代理标头，即 `User-Agent`。curl 的默认用户代理字符串是 `curl/[version]`。

```bash
curl -A 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36' https://google.com
```

也可以通过 `-H` 参数直接指定标头，更改 `User-Agent` 。

```bash
curl -H 'User-Agent: php/1.0' https://google.com
```



### -b, --cookie

`-b` 参数用来向服务器发送 cookies。

```bash
curl -b 'foo1=bar1;foo2=bar2' https://google.com
```

上面命令会生成一个请求头`Cookie: foo1=bar1;foo2=bar2`。



读取 Cookie 文件。

```bash
curl -b cookies.txt https://www.google.com
```



### -c, --cookie-jar

将服务端 cookies 写入文件。

```
curl -c cookies.txt https://www.google.com
```



### -d, --data

`-d` 参数用于发送 POST 请求的数据体。

```bash
curl -d'login=emma&password=123'-X POST https://google.com/login
```




-d 参数可以读取本地文本文件的数据，向服务器发送。

```bash
curl -d '@data.txt' https://google.com/login
```


上面命令读取  `data.txt` 文件的内容，作为数据体向服务器发送。



### --data-urlencode

`--data-urlencode` 参数等同于 `-d`，发送 POST 请求的数据体，区别在于会自动将发送的数据进行 URL 编码。

```bash
curl --data-urlencode 'comment=hello world' https://google.com/login
```

上面代码中，发送的数据 `hello world` 之间有一个空格，需要进行 URL 编码。



### -e, --referer

`-e` 参数用来设置 HTTP 的标头 `Referer`，表示请求的来源。

```bash
curl -e 'https://google.com?q=example' https://www.example.com
```

上面命令将 `Referer` 标头设为 `https://google.com?q=example`。



`-H` 参数可以通过直接添加标头 `Referer`，达到同样效果。

```bash
curl -H 'Referer: https://google.com?q=example' https://www.example.com
```



### -F, --form

`-F` 参数用来向服务器上传二进制文件。

```bash
curl -F 'file=@photo.png' https://google.com/profile
```

上面命令会给 HTTP 请求加上标头 `Content-Type: multipart/form-data`，然后将文件 `photo.png` 作为 `file` 字段上传。



`-F` 参数可以指定 MIME 类型。

```bash
curl -F 'file=@photo.png;type=image/png' https://google.com/profile
```

上面命令指定 MIME 类型为 `image/png`，否则 curl 会把 MIME 类型设为 `application/octet-stream`。



 `-F` 参数也可以指定文件名。

```bash
curl -F 'file=@photo.png;filename=foo.png' https://google.com/profile
```

上面命令中，原始文件名为 `photo.png`，但是服务器接收到的文件名为 `foo.png`。



### -H, --header

`-H` 参数添加 HTTP 请求的标头。

```bash
curl -H 'Accept-Language: en-US' https://google.com
```

上面命令添加 HTTP 标头 `Accept-Language: en-US`。

```bash
curl -H 'Accept-Language: en-US' -H 'Secret-Message: hello' https://google.com
```

上面命令添加两个 HTTP 标头。



```bash
curl -d '{"login": "emma", "pass": "123"}' -H 'Content-Type: application/json' https://google.com/login
```


上面命令添加 HTTP 请求的标头是 `Content-Type: application/json`，然后用 `-d` 参数发送 JSON 数据。



### -i, --include 

`-i` 参数打印出服务器回应的 HTTP 标头。

```bash
curl -i https://www.example.com
```

上面命令收到服务器回应后，先输出服务器回应的标头，然后空一行，再输出网页的源码。



### -I, --head  

`-I` 参数向服务器发出 HEAD 请求，然会将服务器返回的 HTTP 标头打印出来。

```bash
curl -I https://www.example.com
```

上面命令输出服务器对 HEAD 请求的回应。



### -L, --location 

`-L` 参数会让 HTTP 请求跟随服务器的重定向。curl 默认不跟随重定向。

```bash
curl -L -d 'tweet=hi' https://api.twitter.com/tweet
```



### -o, --output

`-o` 参数将服务器的回应保存成文件，等同于 `wget` 命令。

```bash
curl -o example.html https://www.example.com
```


上面命令将 `www.example.com` 保存成 `example.html`。



### -O, --remote-name

`-O` 参数将服务器回应保存成文件，并将 URL 的最后部分当作文件名。

```bash
curl -O https://www.example.com/foo/bar.html
```


上面命令将服务器回应保存成文件，文件名为 `bar.html`。



### -u, --user

`-u` 参数用来设置服务器认证的用户名和密码。

```bash
curl -u 'bob:12345' https://google.com/login
```

上面命令设置用户名为 `bob` ，密码为 `12345` ，然后将其转为 HTTP 标头 `Authorization: Basic Ym9iOjEyMzQ1` 。



curl 能够识别 URL 里面的用户名和密码。

```bash
curl https://bob:12345@google.com/login
```


上面命令能够识别 URL 里面的用户名和密码，将其转为上个例子里面的 HTTP 标头。



```bash
curl -u 'bob' https://google.com/login
```

上面命令只设置了用户名，执行后，curl 会提示用户输入密码。



### -v, --verbose  

`-v` 参数输出通信的整个过程，用于调试。

```bash
curl -v https://www.example.com
```



`--trace` 参数也可以用于调试，还会输出原始的二进制数据。

```bash
curl --trace - https://www.example.com
```



### -V, --version 

打印版本号。

```bash
curl -V
```



### -X, --request 

`-X` 参数指定 HTTP 请求的方法。

```bash
curl -X POST https://www.example.com
```


上面命令对 `https://www.example.com` 发出 POST 请求。



其中 `-X` 还可以跟 `PUT`、`PATCH` 和 `DELETE`。

```
curl -X DELETE https://www.example.com/1
```



## 参考链接 



- [curl 命令详解~~ - 微风伏面 - 博客园](https://www.cnblogs.com/guixiaoming/p/8507268.html)
- [curl 的用法指南 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2019/09/curl-reference.html)
- [curl - Tutorial](https://curl.se/docs/manual.html)
- [Curl Cookbook](https://catonmat.net/cookbooks/curl)



（完）
