(function () {
    'use strict';

    fetch('recipes.json')
        .then(response => {
            if (!response.ok) {

                throw new Error(`${response.status} ${response.statusText}`);
            }
            return response.json();

        })

        .then(recipes => {

            recipes.forEach(recipe => {

                $("#list").append($(`<li value="${recipe.name}">${recipe.name}</li>`)


                    .append($('<input type="radio"/>').attr("class", "radio")));
            });
        })
        .catch(err => console.error('OOPS, ERROR', err));


    const list = $("li");

    // console.log(list);

    list.change(() => {
        console.log(5);
    }); 

        /*fetch('recipes.json')
            .then(response => {

                if (!response.ok) {
                    throw new Error(`${response.status} ${response.statusText}`);
                }
                return response.json();
            })
            .then(recipes => {

                recipes.forEach(recipe => {

                    // $("#list li").forEach( x => {
                    //     console.log(x);
                    // });

                    for (let i = 0; i < $("#list li").length; i++) {
                        // console.log($("#list li")[i].innerText);
                        
                        if (recipe.name === $("#list li")[i].innerText) {
                            console.log('got', $("#list li")[i].innerText);
                            // }
                        }

                        // console.log($("#list li"));
                        //   if (recipe.name === $("#list li").text()){
                        //     console.log(recipe); 
                        //   }
                        //   console.log($("#list li").text());

                    }
                    });




            })
            .catch(err => console.error("errrrorrrr", err));




    });*/




}());