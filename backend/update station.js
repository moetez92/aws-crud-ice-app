
var AWS = require('aws-sdk');
var dynamoDB = new AWS.DynamoDB({region:'us-east-2', apiVersion:'2012-08-10'});
var docClient = new AWS.DynamoDB.DocumentClient();
exports.handler = (event,context,callback)=>{
    // TODO implement
    const params = {
      TableName:"Station" ,
      Key :{
         "StationId": ""+event.id
          
      },
     UpdateExpression: "set Aktual = :a,varianz =:v",
    ExpressionAttributeValues:{
        ":a":event.actual,
        ":v":event.varianz
    
    },
    ReturnValues:"UPDATED_NEW"
};
  
 
   docClient.update(params,function(error,data){
       
       if(error){console.log(error); callback(error);}
       else {console.log(data);(data)} 
       
   });
    
    };
   
 
