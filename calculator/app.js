console.log('hello');

$(()=>{

    //When a button is clicked, display the value of that button in the display
    //I've tried doing this several different ways and I'm not sure why when I click
    //a button, the button disappears. I also tried using append so that when you click another
    //button, the value of the previous click doesn't go away. Still having a hard time with this!!
    //Will try and spend some more time this week practicing.
    $('.btn').click(function() {
        if($('.display').text(''))
       $('.display').html($(this));
           else $('.display').append($(this).text());
           $('.display') == ($(this).val())
       
    })
//I know we need to create functions for each of the function keys on the calculator
//(+, -, *, /, =) and also create a clear button to clear the display    


})