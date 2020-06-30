function main(){
var uri = window.location;
var mission_name = "";
var payload = "";
 if(uri.toString().includes("?")){
  payload = uri.toString().split('?')[1].toString();
   if(payload.includes("mission_name=")){
     mission_name = payload.replace("mission_name=")
     fetch('https://spacextelemetry.cf/spacexdb/analysed.json')
    .then(response => response.json())
    .then(data => {
     var result = data;
       for(var index in result.pages){
        mission_name = payload.substring(13)
         if(result.pages[index].mission_name == mission_name){
         var resp = `{"mission_name":\"${mission_name}\","spacexdb_link":\"${result.pages[index].spacexdb_link}\","published":${result.pages[index].published }}`
         document.documentElement.innerHTML = resp;
         }
       }
     });
   }
 }else{

fetch('https://spacextelemetry.cf/spacexdb/analysed.json')
  .then(response => response.json())
  .then(data => {
    document.documentElement.innerHTML = JSON.stringify(data);
    });
  }
}
main()

