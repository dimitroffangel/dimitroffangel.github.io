function onEnteredText(){
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(SHA1({username:username, password:password})){
        alert("Поздравления, ти реши загадката ^ ^");
    }
    else{
        alert("Грешно име или грешен код. Опитай пак ^ ^");
    }
}

function showPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

function hashFor(input)
{
    var hash = 0xcbf29ce484222325;
    const prime = 0x00010001b3;
    //const sizeOfInput = input.length;
    var i = 0;

    // console.log(a[0].charCodeAt(0) - 'a'.charCodeAt(0));

    while (i < input.length) {
        hash ^= parseInt(input[i].charCodeAt(0) - 'a'.charAt(0));
        hash *= prime;
        ++i;
    }

    return hash;
}

function fooHash(input){
    var hash = 0;
    if (input.length == 0) {
        return hash;
    }
    for (var i = 0; i < input.length; i++) {
        var char = input.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

function SHA1 (input) {
    var msg= input.password;
    const database = [
        {username:'veni_1'		,code:'435dda8afaef821117a4a9cf02f7eba39c920f12'},
        {username:'gabi_1'		,code:'435dda8afaef821117a4a9cf02f7eba39c920f12'},
        {username:'deni_1'		,code:'435dda8afaef821117a4a9cf02f7eba39c920f12'},
        {username:'desi_1'		,code:'435dda8afaef821117a4a9cf02f7eba39c920f12'},
        {username:'zahata_1'	    ,code:'5ed1cabe0624db28b5d4f9aa9929542455d5264c'},
        {username:'ivok_1'		,code:'5ed1cabe0624db28b5d4f9aa9929542455d5264c'},
        {username:'ivog_1'		,code:'5ed1cabe0624db28b5d4f9aa9929542455d5264c'},
        {username:'iliyan_1'	    ,code:'5ed1cabe0624db28b5d4f9aa9929542455d5264c'},
        {username:'yoana_1'		,code:'435dda8afaef821117a4a9cf02f7eba39c920f12'},
        {username:'kosta_1'		,code:'5ed1cabe0624db28b5d4f9aa9929542455d5264c'},
        {username:'metodi_1'	    ,code:'5ed1cabe0624db28b5d4f9aa9929542455d5264c'},
        {username:'niki_1'		,code:'5ed1cabe0624db28b5d4f9aa9929542455d5264c'},
        {username:'veni_2'		,code:'4acfe2c4717fbe34baccca31c2862b62588fee83'},
        {username:'gabi_2'		,code:'66aa1cb9a469f74f6057878a4dcaaf9dbabd9529'},
        {username:'deni_2'		,code:'4af2cf47a70795482e86c67baa60782dd6e68964'},
        {username:'desi_2'		,code:'d0d144a8275a7c67680a2118509b65eea0a13724'},
        {username:'zahata_2'	    ,code:'71ec5fd4f4538ff471beebead96c36ddba6cd86e'},
        {username:'ivok_2'		,code:'1daef81f2332e088da2de18136c7922cde26192d'},
        {username:'ivog_2'		,code:'fe9cfba27320b7bf42256d26ff2979b002274288'},
        {username:'iliyan_2'	    ,code:'647131b7acd95cb79c3dc9f6a30e1ec1161e5ea6'},
        {username:'yoana_2'		,code:'89ee8c25010be60f9e73183063aad24eee982e81'},
        {username:'kosta_2'		,code:'39babe20c3be152b70f15bb8383040d09852d1bb'},
        {username:'metodi_2'	    ,code:'47077c7cdd6c7822a07096245e1a47034c683618'},
        {username:'niki_2'		,code:'cce385db7c9370807c025ad59f98932064d396f0'},
    ];

    var codes = ['2fd4e1c67a2d28fced849ee1bb76e7391b93eb12', 'ab0c290d42bb751ce97adaebd50b2e61d9608ad5', 'd766b8cacafebb5af548c4b63e8e5e3316afd3c2',
    '2c11d616c929b3b6532c2135b9e4bfc4097cf071', '2ebc81c4233f88aaee6b5a8878a1f1e565d4a99c', '30d2c74aecef57860f418c8c0501bc5702daa16e', '6009e0ebedc94f074f1bc01aca91b63086e2161e'];

    function rotate_left(n,s) {
        var t4 = ( n<<s ) | (n>>>(32-s));
        return t4;
    };
    function lsb_hex(val) {
        var str="";
        var i;
        var vh;
        var vl;
        for( i=0; i<=6; i+=2 ) {
            vh = (val>>>(i*4+4))&0x0f;
            vl = (val>>>(i*4))&0x0f;
            str += vh.toString(16) + vl.toString(16);
        }
        return str;
    };
    function cvt_hex(val) {
        var str="";
        var i;
        var v;
        for( i=7; i>=0; i-- ) {
            v = (val>>>(i*4))&0x0f;
            str += v.toString(16);
        }
        return str;
    };
    function Utf8Encode(string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    };
    var blockstart;
    var i, j;
    var W = new Array(msg.length);
    var H0 = 0x67452301;
    var H1 = 0xEFCDAB89;
    var H2 = 0x98BADCFE;
    var H3 = 0x10325476;
    var H4 = 0xC3D2E1F0;
    var A, B, C, D, E;
    var temp;
    msg = Utf8Encode(msg);
    var msg_len = msg.length;
    var word_array = new Array();
    for( i=0; i<msg_len-3; i+=4 ) {
        j = msg.charCodeAt(i)<<24 | msg.charCodeAt(i+1)<<16 |
        msg.charCodeAt(i+2)<<8 | msg.charCodeAt(i+3);
        word_array.push( j );
    }
    switch( msg_len % 4 ) {
        case 0:
            i = 0x080000000;
        break;
        case 1:
            i = msg.charCodeAt(msg_len-1)<<24 | 0x0800000;
        break;
        case 2:
            i = msg.charCodeAt(msg_len-2)<<24 | msg.charCodeAt(msg_len-1)<<16 | 0x08000;
        break;
        case 3:
            i = msg.charCodeAt(msg_len-3)<<24 | msg.charCodeAt(msg_len-2)<<16 | msg.charCodeAt(msg_len-1)<<8    | 0x80;
        break;
    }
    word_array.push( i );
    while( (word_array.length % 16) != 14 ) word_array.push( 0 );
    word_array.push( msg_len>>>29 );
    word_array.push( (msg_len<<3)&0x0ffffffff );
    for ( blockstart=0; blockstart<word_array.length; blockstart+=16 ) {
        for( i=0; i<16; i++ ) W[i] = word_array[blockstart+i];
        for( i=16; i<=79; i++ ) W[i] = rotate_left(W[i-3] ^ W[i-8] ^ W[i-14] ^ W[i-16], 1);
        A = H0;
        B = H1;
        C = H2;
        D = H3;
        E = H4;
        for( i= 0; i<=19; i++ ) {
            temp = (rotate_left(A,5) + ((B&C) | (~B&D)) + E + W[i] + 0x5A827999) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B,30);
            B = A;
            A = temp;
        }
        for( i=20; i<=39; i++ ) {
            temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B,30);
            B = A;
            A = temp;
        }
        for( i=40; i<=59; i++ ) {
            temp = (rotate_left(A,5) + ((B&C) | (B&D) | (C&D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B,30);
            B = A;
            A = temp;
        }
        for( i=60; i<=79; i++ ) {
            temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B,30);
            B = A;
            A = temp;
        }
        H0 = (H0 + A) & 0x0ffffffff;
        H1 = (H1 + B) & 0x0ffffffff;
        H2 = (H2 + C) & 0x0ffffffff;
        H3 = (H3 + D) & 0x0ffffffff;
        H4 = (H4 + E) & 0x0ffffffff;
    }
    var temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);

    for(var i = 0; i < database.length; ++i){
        if(input.username == database[i].username && temp.toLocaleLowerCase() == database[i].code){
            return true;
        }
    }
}