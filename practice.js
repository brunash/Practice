< !DOCTYPE html >
    <html lang="en">

        <head>
            <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>How many fingers</title>

                    </head>

                    <body>
                        <p>How many fingers am I holding up?</p>
                        <p><input type="text" id="input1"> <button id="dugme1">Guess!</button></p>


                        <script type="text/javascript">

                            var y = Math.floor(Math.random() * 6);

                            document.getElementById("dugme1").onclick = function () {
            var x = document.getElementById("input1").value;

                            if (x == y) {
                                alert("Cestitam, pogodili ste!")
                            } else {
                                alert("Nazalost niste pogodili")
                            }


        }





                        </script>
                    </body>

                </html>