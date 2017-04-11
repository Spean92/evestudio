/**
 * Created by Spean on 27.03.2017.
 */
jQuery(document).ready(function($) {
    $("#form").submit(function() {
        var str = $(this).serialize();

        $.ajax({
            type: "POST",
            url: "./form/contact-form.php",
            data: str,
            success: function(msg) {
              // if (msg == 'OK') {
              //
              // } else {
              //   result = msg;
                $('#form').fadeOut(100);
                $('.thx').fadeIn(300);
                var someName = $('#senderName').val();
                $('.thx h2').text('Спасибо ' + someName+', открытка вскоре будет доставлена получателю!');
                console.log('hi hi');
                  console.log('hi hi');
              // }

            }
        });
        $.ajax({
            type: "POST",
            url: "./form/contact-form-test.php",
            data: str,
            success: function(msg) {

            }
            // ,
            // error: function(){
            // alert ("Ошибка отправки ajax");
            // }

            });
        return false;
    });
    $("#hunter form").submit(function() {
        var str = $(this).serialize();

        $.ajax({
            type: "POST",
            url: "./form/super-form.php",
            data: str,
            success: function (msg) {
                // if (msg == 'OK') {
                //
                // } else {
                //   result = msg;
                $('#hunter form').fadeOut(100);
                $('#hunter .thx').fadeIn(300);
                // }

            }
        });
        return false;
        });
});
