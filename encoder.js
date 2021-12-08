function coding(str) {

    let res = Array.from (

  str [str.length - 1 ] + str.slice (0,str.length - 1 )) .map (item
    => { if ( item === 'z') return 'a' ;
        return String.fromCharCode ( item.charCodeAt(0) + 1);});

        return res.join('') ;
    
}

export default function encoder ({inputString,repeatCount}) {

    let res = Array.from ( {length : repeatCount}) .reduce (
        pro => coding (pro), inputString
    );
    return res
    
}

       