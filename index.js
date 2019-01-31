function loadIssues() {
  var template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
var result = template(issues.slice(0, 100));
document.getElementsByTagName("main")[0].innerHTML += result;
  }
}
