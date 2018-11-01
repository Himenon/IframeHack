# LocalStorage on Iframe

## これはなに

Iframe内のローカルストレージにアクセスするサンプルプログラムです

## 何につかう

ドメインが変わったときや、httpからhttpsへ変更にlocalStorageが消えてしまう問題を解決するときに使います。

## 試し方

```sh
yarn start
```

### httpsサーバーを用意する


```sh
openssl genrsa -out server_key.pem 2048
openssl req -batch -new -key server_key.pem -out server_csr.pem -subj "/C=JP/ST=Tokyo/L=Musashino-shi/O=Foo/OU=Bar/CN=local.hack.com"
openssl x509 -in server_csr.pem -out server_crt.pem -req -signkey server_key.pem -days 73000 -sha256
```

## 構成

```
http://localhost:8003/sub.html       # read
https://localhost:8004/index.html    # write 
https://localhost:8005/inner.html    # localStorage
```
