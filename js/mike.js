var box = document.querySelectorAll(".new_box");
var new_btn = document.getElementById("new_btn");
var li = new_btn.getElementsByTagName("li");
console.log(new_btn);
console.log(li);
function change(index) {
  for (var i in box) {
    if (i == index) {
      box[i].style.display = "block";
      li[i].style.cssText =
        "wdith:13px;height:13px;background-color:#f8ce38;margin: 0 4px;";
    } else {
      box[i].style.display = "none";
      li[i].style.cssText = "";
    }
  }
}
