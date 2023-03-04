//  previous search data function
function load() {
  var rows = document.getElementById("rows");
  var container = document.getElementById("container");
  var line;
//   getting stored data from local storage;
  var MySearchdata = JSON.parse(localStorage.getItem("emptyarr"));
    // console.log(MySearchdata);
  if (MySearchdata == null) {
    rows.innerHTML = "No history";
  } else {
   
    MySearchdata.map((item) => {
      line = `<div id='para'>
            <div id='searchText'>${item.search}</div> 
            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 
            <div id='dateTime'> ${item.time}</div>
            </div>`;
    });
    rows.innerHTML = line;
  }
}
load();

// code for clear button
var clearbtn = document
  .getElementById("clearbtn")
  .addEventListener("click", () => {
    var currentdata = localStorage.removeItem("emptyarr");
    document.getElementById("rows").className = "hide";
  });
