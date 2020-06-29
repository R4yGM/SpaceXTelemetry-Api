function main(){
var uri = window.location;
 if(uri.includes("?")){
  var payload = uri.split('?')[1];
   if(payload.includes("mission_name=")){
     var mission_name = payload.replace("mission_name=")
     fetch('https://spacextelemetry.cf/spacexdb/analysed.json')
    .then(response => response.json())
    .then(data => {
     var result = JSON.parse(data);
       for(var index in result.pages){
         if(result.pages[index].mission_name == mission_name){
         var resp = `{"mission_name":\"${mission_name}\","spacexdb_link":\"${result.pages[index].spacexdb_link}\","published":${result.pages[index].published}`
         document.documentElement.innerHTML = resp;
         }
       }
     });
   }
 }else{
 
fetch('https://spacextelemetry.cf/spacexdb/analysed.json')
  .then(response => response.json())
  .then(data => {
    document.documentElement.innerHTML = data;
    });
  }  
}
