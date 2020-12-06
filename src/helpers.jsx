export const revisarPressupuest = (pressupost, restant)=>{
    let classe;

    if((pressupost/4)>restant){ // 25%
        classe = "alert alert-danger"
    }else if((pressupost/2)>restant){
        classe="alert alert-warning"
    }else{
        classe = "alert alert-success"
    }

    return classe;    
}