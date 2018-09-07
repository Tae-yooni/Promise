
    let Test = (function(){
        
        const btn = document.getElementById("btn");
        const container = document.getElementById("container");
        const image = document.createElement("img");
        
        function click(){
            btn.onclick = function(){
               
                getData().then(function(data){
                    console.log(data);
                    image.src = data.url; 
                    container.appendChild(image); 
                }).catch(function (err){
                    console.error(err);
                });
            }
        }
        
        click();

        function getData(){
            return new Promise(function (resolve, reject){
                $.get('https://jsonplaceholder.typicode.com/photos/99', function (response){
                    setTimeout(function(){
                        if ( response ) {
                            resolve(response);
                        }
                        reject( new Error("Request is failed"));
                    }, 1500);
                    
                });
            });
        }

    })();


// click();





