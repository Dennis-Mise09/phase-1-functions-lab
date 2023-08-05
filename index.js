function distanceFromHqInBlocks(distance){ 
    
    let x = distance > 42 ? distance - 42 : 42 - distance
    return x
}
function distanceFromHqInFeet(x)
   {
    let y = distanceFromHqInBlocks(x)
    return y * 264
    
   }

function distanceTravelledInFeet(start,destination ) {
    if (start > destination) {
        return (start - destination) * 264
    } else {
        return (destination - start) * 264
    }
}

function calculatesFarePrice(start,destination){
    let pricing = distanceTravelledInFeet(start,destination )
     if (pricing <= 400 ) {
       return 0
     } else if( pricing > 400 && pricing < 2000 ) {
        return 2.56
    }else if( pricing > 2000) {
        if (pricing > 2500) {
            return 'cannot travel that far'
        } 
     return 25 
    }
        
}