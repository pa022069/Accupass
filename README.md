# Accupass 面試測驗
[測試連結](ttp://www.our-work.com.tw/creative/jeffrey/homework/)

## 1. 環境設定

```
● 編輯器使用 visual studio code
● 安裝環境：
    ○ SwiperJS
        ■ npm i swiper
        ■ yarn add node-sass@4.14.
    ○ jQuery
        ■ npm i jquery
    ○ React Router
        ■ npm i react-router-dom
    ○ Redux
        ■ npm install --save react-redux
        ■ npm install --save redux
● css 樣式使用scss 格式撰寫，命名為BEM模式，使用Bootstrap套件
● 專案使用create-react-app 建置
    ○ npx create-react-app www
● 使用sourcetree 做 github 版控
```
## 2. 切版

```
● List 頁面架構 (main)
    ○ 標題 main__title
    ○ 清單 main__list
        ■ 項目 group
            ● 圖片 group__img
            ● 資訊 group__info
                ○ 標題 title
                ○ 地址 address
● Content 頁面架構 (content)
    ○ 標題 content__title
        ■ 標題 title
        ■ 園區開放 open
        ■ 收費入場 pay
        ■ 提醒 remind
```
```
    ○ 資訊內容 content__info
        ■ 圖片輪播展示 (SwiperJS) img
        ■ 景點介紹 intro
```
```
    ○ 聯絡方式 content__contact
        ■ 地址 address
        ■ 電話 tel
        ■ 信箱 email
        ■ 官網 website
        ■ 紛絲團 facebook
        ■ 地圖 (Google map api)
```
3. 撰寫React
    ● 架構：
       ○ Layout.js
          ■ 列表頁 List.js
             ● 景點卡 ListGroup.js
          ■ 資訊頁 Content.js

```
    ● 頁面連結 (Router)：
        ○ / 為列表頁
        ○ /:id 為指定id的資訊頁
```
```
    ● 變數：
        ○ data: 利用AJAX抓取台北旅遊資訊
        ○ loading: 載入狀態，當AJAX尚未取得data時，顯示正在載入
        ○ content: 資訊頁內容，當使用者選取所要前往的景點資訊，從
        data 抓取該景點資訊指定給content
```
```
    ● 函式：
        ○ setList：當Layout 成功執行componentDidMount，執行AJAX取
        得API 資料，建立列表頁
        ○ loadingDone：當API 成功取得時，關閉讀取畫面
        ○ setContent：當使用者點擊列表前往景點資訊頁時，抓取連結中
        的id，從data 中找出該景點資訊，並指定給content
```

