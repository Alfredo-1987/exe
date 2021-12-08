export default function getRepeateadInfo ( number ) {

        let res =String (number) ;
        let ArrRes = res.split("") ;
        
       
        let element = [] ;

        for (let item of ArrRes ) {

            element.push( [ Number(item) , item.repeat( Number(item) ) ] ) ;
        }
        
        let sortElement = element.sort () ;
        const deletedFirst = []; for ( let i =1; i < sortElement.length; i++){ deletedFirst.push ( sortElement[i] )};
        
        let repeated = [] ;
        
        for (let i of sortElement ) {

            for (let j of deletedFirst ) {

                if ( ( sortElement.indexOf(i)== deletedFirst.indexOf(j) ) && ( i[0]==j[0] && i[1]==j[1]) )
            
                        repeated.push ( i ) ;
                
            };
        
        };
        if (repeated.length!==0 ){
                    let Finally = [] ;
                
                    for (let i of repeated ) {

                        for (let j of sortElement ) {

                            if ( i[0]!==j[0] && i[1]!==j[1]) 
                                    Finally.push ( j ) ;
                            
                                
                        };
                    }
                    for (let i of repeated ){
                        Finally.push (i) ;
                    }
                    let total = [] ;
                    for (let i of Finally ){
                        for (let j of repeated){
                            if (i[0]===j[0] && i[1]===j[1] )
                                total.push ([i[0], i[1]+j[1]] );
                            else if (i!== j)
                                total.push(i)
                        }
                    }

            
                
                    let obj = new Object () ;
                    
                    for (let i of total ) {
                        obj[ i[0] ] = i[1] ;
                    // console.log ( obj );  
                    };
                    console.log ( obj ); 
            }else{
                let obj = new Object () ;
                    
                for (let i of sortElement ) {
                     obj[ i[0] ] = i[1] ;}
                console.log ( obj ); 
                }
                
};
