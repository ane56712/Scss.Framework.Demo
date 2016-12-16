# 前台SCSS架構
建立此示範專案以實作新的SCSS開發架構

## 目標
* 多版型，Layout切版不同
* 多色系，其中又可分為亮版及暗版
* desktop、mobile分離

## 目錄
* SCSS
	* Animation：動畫
    * Common：全域設定、共用Mixin
        * Mixin
        * reset
        * gridSystem
    * State：共用狀態
    * Vendors：第三方元件
    * Theme
        * ThemeA
        	* Desktop
        		* Color：顏色設定檔
        		* Model：其他設定檔，ex:mediaQeury,z-index
        		* Core：無法再被拆分的元素，ex: button,tag
        		* Component：由元素組成的獨立模組，可被移植
        		* Widget：由元件組成的區塊，範圍較大，相依性強
        		* Layout：大框架，各頁面都會出現，ex:header,footer
        		* Page：各別頁面的特殊調整
        			* OfficialIndex
        			* ..	
        	* Mobile

    
    
## 開發工具
1. Gulp
2. Compass
3. BrowserSync

## 操作
1.  瀏覽器開啟頁面或開啟browserSync並瀏覽到/Views/OfficialIndex/Desktop.html
2.  使用query string操作色系及樣板，
ex: /Views/OfficialIndex/desktop.html?color=Pink&theme=A

Parameter | value
----------| -------------
color     | Pink、Green、Black
theme     | A、B

* 各樣板對照

Theme|Device         | Color
-----|---------------| -------------
A    |Desktop、Mobile| Pink、Green、Black
B    |Desktop        | Pink

## Coding Style
1. 註解使用```// ```，輸出css不會出現
2. scss 變數命名，使用小寫加dash```$footer-height```
3. scss map命名，使用小寫開頭加大寫```$component-zindex: (
        modal:1050, 
        modalBack:1040
);```