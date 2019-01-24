
var AWS = require('aws-sdk');
var dynamoDB = new AWS.DynamoDB({region:'us-east-2', apiVersion:'2012-08-10'});

exports.handler = (event,context,callback)=>{
    // TODO implement
    const params = {
        
        Item : {
            
        "StationId": {
           S : ""+Math.random() 
                
            },
        "Target": {
          N : ""+event.target
        },
       
        "Aktual" : {
            
         N: ""+event.aktual 
        },
           "varianz" : {
            
         N: ""+event.varianz
        } 
         
        
        } , 
        TableName:"Station"
    } ; 
 
   dynamoDB.putItem(params,function(error,data){
       
       if(error){console.log(error); callback(error);}
       else {console.log(data);(data)} 
       
   });
    
    };
   
 
