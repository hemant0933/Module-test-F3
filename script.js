// alert('Search book by their name, and if you the directly clicked on search button the all books will be loaded');
 var input = document.getElementById('search-bar');
 let url = "https://www.googleapis.com/books/v1/volumes?q="
   
  var emptyarr = []
  var books;
  function search(){   
  

    var filter = input.value.toUpperCase();
    var bookcontainer = document.getElementById('bookcontainer');
   
   
    fetch(`${url}+${input.value}`)
    .then((response) => response.json())
    .then((data) => {
        let bookdata = data.items;
        
        // console.log(bookdata);
        books = bookdata.map((book) => {
            
            if (book.volumeInfo.title.toUpperCase().indexOf(filter) > -1) {
                let booktitle=book.volumeInfo.title;  
                let obj = {
                    search: filter,
                    date:new Date().toLocaleDateString(),
                    time:new Date().toLocaleDateString('en-us',{
                        hour:'2-digit',
                        minute:'2-digit',
                    }),
                    bookName: booktitle,  
                }
                 emptyarr.push(obj)
            //  console.log("INSIDE MAP");
            return `<div class="card" id="card">
                    <img src=${book.imageLinks.thumbnail}  width="100%" alt="img" srcset="">
                    <div class="book-title" data-header><strong>Title</strong> : ${book.volumeInfo.title}</div>
                    <div class="author" data-author><strong>Author </strong>: ${book.volumeInfo.authors}</div>
                    <div class="pagecount"><strong>Page Count </strong>: ${book.volumeInfo.pageCount}</div>
                    <div class="publisher"><strong>Publisher </strong>: ${book.volumeInfo.publisher}</div>
                    <div><button id="buynow">Buy Now</button></div>
                    </div>`

              }
          
        });
        localStorage.setItem('emptyarr' , JSON.stringify(emptyarr))
        bookcontainer.innerHTML = books;
    })
    
    }
// this function will take me to the history page
    function historydata(){
            window.location.href = "./history/history.html"
    }