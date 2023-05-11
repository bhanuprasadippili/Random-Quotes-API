var quote = document.getElementById("quote");
var author = document.getElementById("author");
var btnn = document.getElementById("btn");

btnn.addEventListener("click", ()=>
{
    var url = `https://type.fit/api/quotes`;
    fetch(url).then(result=>result.json())
    .then((data)=>
    {
        console.log(data);
        var arrayIndex = Math.floor(Math.random() * data.length);
        quote.innerHTML = "Quote: "  +  data[arrayIndex].text;
        author.innerHTML = "Author: " + data[arrayIndex].author;
    
    })
})