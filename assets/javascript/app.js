$(document).ready(() =>
{
    // Buttons rendered on page load
    const renderedBtns = ['Goku', 'Vegeta', 'Gohan', 'Piccolo', 'Krillin', 'Android 18', 'Yamcha', 'Master Roshi', 'Tien', 'Chiaotzu', 'Trunks', 'Bulma', 'Chi-Chi', 'Vegito', 'Gogeta', 'Beerus', 'Whis']

    function displaysTheImage () {

        $("#imgArea").empty();
        const input = $(this).attr("data-name");
        const limit = 10;
        const queryURL = `https://api.giphy.com/v1/gifs/search?q=${input}&limit=${limit}&api_key=CbbsagthcBtNxTU5V5qKcyY6EkyJyYix`;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).done((res) => {

            for (let j = 0; j < limit; j++) {

                var displayToDiv = $("<div>");
                displayToDiv.addClass("holder");

                let image = $("<img>");
                image.attr("src", res.data[j].images.original_still.url);
                image.attr("data-still", res.data[j].images.original_still.url);
                image.attr("data-animate", res.data[j].images.original.url);
                image.attr("data-state", "still");
                image.attr("class", "gif");
                displayToDiv.append(image);

                const rating = res.data[j].rating;
                
                const pRating = $("<p>").text(`Rating: ${rating}`);
                displayToDiv.append(pRating)

                $("#imgArea").append(displayToDiv);
            }
        });
    }

   

    var renderButtons = () => 
    {

        $("#display-Btns").empty();

        for (let i = 0; i < renderedBtns.length; i++) {

            let newBtn = $("<button>")
            newBtn.attr("class", "btn btn-default");
            newBtn.attr("id", "input")
            newBtn.attr("data-name", renderedBtns[i]);
            newBtn.text(renderedBtns[i]);
            $("#display-Btns").append(newBtn);
        }
    }

    $("#submitBtn").on("click", () => {

        var input = $("#user-input").val().trim();
        form.reset();
        renderedBtns.push(input);

        renderButtons();

        return false;
    })

    function imageChangeState ()
    {

        var state = $(this).attr("data-state");
        var animateImage = $(this).attr("data-animate");
        var stillImage = $(this).attr("data-still");

        if (state == "still") {
            $(this).attr("src", animateImage);
            $(this).attr("data-state", "animate");
        }

        else if (state == "animate") {
            $(this).attr("src", stillImage);
            $(this).attr("data-state", "still");
        }
    }
    
    renderButtons();

    $(document).on("click", "#input", displaysTheImage);
    $(document).on("click", ".gif", imageChangeState);
});