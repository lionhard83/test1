$.ajax({
    url: "https://jsonplaceholder.typicode.com/comments/1",
    success: function(result){
        console.log(result);
        document.getElementById("paragrafo1").innerHTML = result.body;
    }
});
