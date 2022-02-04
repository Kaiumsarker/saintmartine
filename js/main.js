// jquery codd
$(document).ready(function(){

    $('#hotel_form').show();
    $('#tricket_form').hide();
    $('#place_form').hide();

    $('#Hotel_btn span').addClass('line');

    //if clicked on tricket
    $('#tricket_btn').click(function(){
        $('#hotel_form').hide();
        $('#tricket_form').show();
        $('#place_form').hide();
        
        $('#Hotel_btn span').removeClass('line');
        $('#tricket_btn span').addClass('line');
        $('#place_btn span').removeClass('line');
        
    });

        //if clicked on place
        $('#place_btn').click(function(){
            $('#hotel_form').hide();
            $('#tricket_form').hide();
            $('#place_form').show();

            $('#Hotel_btn span').removeClass('line');
            $('#tricket_btn span').removeClass('line');
            $('#place_btn span').addClass('line');
        });

              //if clicked on hotel
              $('#Hotel_btn').click(function(){
                $('#hotel_form').show();
                $('#tricket_form').hide();
                $('#place_form').hide();

                
            $('#Hotel_btn span').addClass('line');
            $('#tricket_btn span').removeClass('line');
            $('#place_btn span').removeClass('line');
            });
    

});