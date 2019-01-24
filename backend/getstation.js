var AWS = require('aws-sdk');
var dynamoDB = new AWS.DynamoDB({region:'us-east-2', apiVersion:'2012-08-10'});
exports.handler = (event,context,callback)=>{
    // TODO implement
    
         var params = {
            TableName:'Station'
        } ; 
        dynamoDB.scan(params,function(error,data){
            
     if(error){console.log(error); callback(error);}
            else  {
                
                const items = data.Items.map((datafield)=>{
                    
      return {StationId:datafield.StationId.S ,Aktual:datafield.Aktual.N,Target:datafield.Target.N,Varianz:datafield.varianz.N};
                    
                });
                
           
                callback(null ,items);
            }

        }) 
 
   
    }
   