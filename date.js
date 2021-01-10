exports.getDate= function (){
    const today = new Date();
        const options = {
            weekday: "long",
            day: "numeric",
            month: "long"
        }
    return  today.toLocaleDateString("ro-RO", options);
     
}
exports.getDay= function(){
    const today = new Date();
        let options = {
            weekday: "long"
        } 
        return  today.toLocaleDateString("ro-RO", options);
    
}