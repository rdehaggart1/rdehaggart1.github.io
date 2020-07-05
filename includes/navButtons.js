document.write("<div class = \"navButton\">");
document.write("<a class = \"button button-next\"><span></span></a>");
document.write("<a class = \"button button-prev\"><span></span></a>");
document.write("</div>");

document.write("<script src = \"jquery/jquery-3.5.1.min.js\"></script>");
document.write("<script>");
document.write("var URL = window.location.href;");
document.write("var sideNav = $(\".sidenav\");");

document.write("var re = new RegExp(\/^.*\\\/\/);");
document.write("var rootURL = re.exec(URL);");
document.write("if (URL.indexOf('#') != -1)");
document.write("{");
document.write("var pageAddress = URL.substr(0, URL.indexOf('#'));");
document.write("}");
document.write("else");
document.write("{");
document.write("pageAddress = URL;");
document.write("}");

document.write("var sideNavChildren = sideNav.children(\"a\");");
document.write("var numChildren = sideNavChildren.length;");

document.write("if(rootURL == window.location.href){pageAddress = rootURL + \"index.html\";}");

document.write("$(function()");
document.write("{");
document.write("$(sideNavChildren).each(function()");
document.write("{");
document.write("if ($(this).prop('href') == pageAddress)");
document.write("{");
document.write("var sideNavIndex = sideNavChildren.index($(this));");
document.write("var currentPage = $(this).text();");

document.write("nextPage = $(sideNavChildren[sideNavIndex + 1]).text();");
document.write("prevPage = $(sideNavChildren[sideNavIndex - 1]).text();");
document.write("nextPageLink = $(sideNavChildren[sideNavIndex + 1]).prop('href');");
document.write("prevPageLink = $(sideNavChildren[sideNavIndex - 1]).prop('href');");

document.write("if (sideNavIndex - 1 < 1)");
document.write("{");
document.write("prevButton.css({display: 'none'});");
document.write("}");
document.write("else if (sideNavIndex + 1 >= numChildren)");
document.write("{");
document.write("nextButton.css({display: 'none'});");
document.write("}");
document.write("var nextPageString = \"Next | \".concat(nextPage);");
document.write("var prevPageString = \"Prev | \".concat(prevPage);");

document.write("nextButton.children(\"span\").text(nextPageString);");
document.write("prevButton.children(\"span\").text(prevPageString);");

document.write("nextButton.attr(\"href\", nextPageLink);");
document.write("prevButton.attr(\"href\", prevPageLink);");

document.write("}");
document.write("})");
document.write("});	");
document.write("</script>");