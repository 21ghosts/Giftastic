$(document).ready(function()
{
    // Need starter initial topics
    var topics = ['Goku', 'Vegeta', 'Gohan', 'Piccolo', 'Krillin', 'Android 18', 'Yamcha', 'Master Roshi', 'Tien', 'Chiaotzu', 'Trunks', 'Bulma', 'Chi-Chi', 'Vegito', 'Gogeta', 'Beerus', 'Whis']

    // Need to create additional buttons(function)
    var buttonFunctions =
    {
        //-Make button-holder div a property
        buttonHolder: $('.dynamic-button-holder'),

        // Create button for each item
        listToButtons: function(list)
        {
            buttonFuntions.buttonHolder.empty();

            list.map(buttonFunctions.stringToButton);
        },

        // Need to take one string and creat button for it
        stringToButton: function(str)
        {
            var span = $('<span>');
            var button = $('<button>');

            span.text(str);
            button.addClass('btn btn-info gif-button');
            button.attr('data-topic', str);
            button.append(span);
            buttonFunctions.buttonHolder.append(button);
            console.log(span);
        }
    }
})