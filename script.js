<!DOCTYPE html>
<html lang="en-us">
<head>
    <!-- title and standard meta usage -->
    <title>Password Generator</title>
    <meta charset="UTF-8" />
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    <!-- link to our style sheet -->
    <link rel="stylesheet" href="" />
</head>

<body>
    <script type="text/javascript">


String[] symbols = { "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"};
int length = 10;
Random random = SecureRandom.getInstanceStrong();    // as of JDK 8, this should return the strongest algorithm available to the JVM
StringBuilder sb = new StringBuilder(length);
for (int i = 0; i < length; i++) {
    int indexRandom = random.nextInt(symbols.length);
    sb.append(symbols[indexRandom]);
}
String password = sb.toString();

function generate(length = 12) {
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var numbers = '0123456789';
    var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
    var all = uppercase + lowercase + numbers + symbols;
    var password = '';
    for (var index = 0; index < length; index++) {
        var character = Math.floor(Math.random() * all.length);
        password += all.substring(character, character + 1);
    }
    return password;
}

    <script> 
</body>
</html>

