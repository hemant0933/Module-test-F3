//  previous search data function
let rows = document.getElementById("rows");
function load() {
  rows.innerHTML = ''
  var line;
//   getting stored data from local storage;
  var MySearchdata = JSON.parse(localStorage.getItem("emptyarr"))||[];
    // console.log(MySearchdata);
  if (MySearchdata == null) {
    rows.innerHTML = "No history";
  } else{
    
    MySearchdata.map((item) => {
        let i=0;
      line = `<div id='para'>
            <div id='searchText'>${i+1}.  ${item.search}</div> 
            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 
            <div id='dateTime'>Search on : ${item.date} at ${item.time}</div>
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
