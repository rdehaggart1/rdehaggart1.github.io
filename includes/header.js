document.write("<img src = \"images/drawerIcon.ico\" class = \"menuToggle\" onClick = \"toggleNav()\"></img>");
document.write("<a href = \"index.html\"><img class = \"headerImg\" src = \"images/logo.png\"></img></a>");
document.write("<input id = \"searchBar\" type = \"text\" placeholder = \"Search..\" onfocus = \"this.placeholder = ''\" onblur = \"this.placeholder = 'Search..'\"></input>");
document.write("<a href = \"about.html\" class = \"headerTab\" id = \"aboutTab\">About</a>");

document.write("<script>");
document.write("function toggleNav()");
document.write("{");
document.write("sideNav = document.getElementsByClassName(\"sidenav\").item(0);");
document.write("main = document.getElementsByClassName(\"main\").item(0);");
document.write("if(sideNav.style.width == \"0%\")");
document.write("{");
document.write("sideNav.style.width = \"15%\";");
document.write("main.style.marginLeft = \"25%\";");
document.write("}");
document.write("else");
document.write("{");
document.write("sideNav.style.width = \"0%\";");
document.write("main.style.marginLeft = \"10%\";");
document.write("}");
document.write("}");
document.write("</script>");