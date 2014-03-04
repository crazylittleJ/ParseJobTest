//
Parse.Cloud.job("Delete_All_Posts", function(request, status) {  
var query = new Parse.Query("Comment");
    query.find
    ({
            success:function(results) 
            {
                for (var i = 0, len = results.length; i < len; i++) 
                {
                    var result = results[i];
                    result.destroy();
                }   
            status.success("Delete successfully.");             
            },
            error: function(error) 
            {
            status.error("Uh oh, something went wrong.");
            console.log("Failed!");         
            }
    });

    var query2 = new Parse.Query("Post"); 
    query2.find
    ({
            success:function(results) 
            {
                for (var i = 0, len = results.length; i < len; i++) 
                {
                    var result = results[i];
                    result.destroy();
                }   
            status.success("Delete successfully.");             
            },
            error: function(error) 
            {
            status.error("Uh oh, something went wrong.");
            console.log("Failed!");         
            }
    });
});
//

require('cloud/app.js');
