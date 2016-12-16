function GetQuerystring(name,url) {
    var match = RegExp('[?&]' + name + '=([^&]*)')
        .exec(url?url:document.location.search);
    return match && decodeURIComponent(decodeURIComponent(match[1].replace(/\+/g, ' ')));
}
function LoadBaseStyleSheet(device,theme){
    var linkTag = document.createElement('link');
    linkTag.type = "text/css";
    linkTag.rel = "stylesheet";
    var cssUrl = '../../Styles/Theme/Theme'+ theme +'/'+ device +'/Color/Controller/themeBase.css';
    linkTag.setAttribute('href',cssUrl);
    document.head.appendChild(linkTag);
}
function LoadThemeStyleSheet(colorType,device,theme){
    var linkTag = document.createElement('link');
    linkTag.type = "text/css";
    linkTag.rel = "stylesheet";
    var cssUrl = '../../Styles/Theme/Theme'+ theme +'/'+ device +'/Color/Controller/theme'+colorType+'.css';
    linkTag.setAttribute('href',cssUrl);
    document.head.appendChild(linkTag);
}
function LoadPageStyleSheet(device,theme){
    var linkTag = document.createElement('link');
    linkTag.type = "text/css";
    linkTag.rel = "stylesheet";
    var cssUrl = '../../Styles/Theme/Theme'+ theme +'/'+ device +'/Page/OfficialIndex/officialIndex.css';
    linkTag.setAttribute('href',cssUrl);
    document.head.appendChild(linkTag);
}
var colorType = GetQuerystring('color',window.location) || 'Pink';
var theme = GetQuerystring('theme',window.location) || 'A';
var device = window.innerWidth < 768 ? 'Mobile' : 'Desktop';
LoadBaseStyleSheet(device,theme);
LoadThemeStyleSheet(colorType,device,theme);
LoadPageStyleSheet(device,theme);
