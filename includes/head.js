document.write("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">");
document.write("<link href=\"StyleSheet.css\" rel=\"stylesheet\">");
document.write("<script src=\"https://polyfill.io/v3/polyfill.min.js?features=es6\"></script>");
document.write("<script id=\"MathJax-script\" async src=\"https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js\"></script>");
document.write("<link rel = \"icon\" href = \"images/icon.ico\">");

document.write("<script src=\"jquery/jquery-3.5.1.min.js\"></script>");
document.write("<script>");
document.write("$(function()");
document.write("{");
document.write("$('a').each(function()");
document.write("{");
document.write("var URL = window.location.href;");
document.write("var re = new RegExp(\/^.*\\\/\/);");
document.write("var rootURL = re.exec(URL);");
document.write("if (URL.indexOf('#') != -1){var pageAddress = URL.substr(0, URL.indexOf('#'));}else{pageAddress = URL}");
document.write("$(document.body).append(pageAddress);");
document.write("if ($(this).prop('href') == pageAddress)");
document.write("{");
document.write("$(this).addClass('current');");
document.write("}");
document.write("if(rootURL == window.location.href)");
document.write("{");
document.write("if ($(this).prop('href') == rootURL + \"index.html\")");
document.write("{");
document.write("$(this).addClass('current');");
document.write("}");
document.write("}");
document.write("});");
document.write("});");
document.write("</script>");