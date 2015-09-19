var mysql      = require('mysql');
 var connection = mysql.createConnection({
   host     : 'localhost',
   user     : 'root',
   password : '',
   database : 'jsontest',
   port     : '3307',
   socket   : 'tmp/mysql.sock'
 });


/*
// Expects id to be a string
function get_name_from_id(connection, id) {
    connection.query('SELECT * from Players where id = ' + id, function(err, rows, fields) {
    if(!err) {
        return rows[0].name;
        //console.log(rows[0].name);
    }
    else
        console.log("Query failed, printing error: ", err);
    });
}
*/

// Expect player_name to be a string
// Rows is returned as a json array i believe
function get_territories_from_name(connection, player_name) {
    connection.query('SELECT * from player_to_territories where id = ' + "'"+player_name+"'", function(err, rows, fields) {
    if(!err) {
        //console.log("The terriories are: ", rows);
            //console.log(rows[0].id);
    }
    else {
        console.log('ERROR!', err);
    }
    });

    return temp;
}

//Expect territory to be a string
// Returns the number
function get_infrantry_from_territory(connection, territory) {
    connection.query('SELECT * from territories_to_infrantry where id = ' + "'"+territory+"'", function(err, rows, fields) {
    if(!err) {
        //console.log("The number of infrantries are: ", rows[0].infrantry);
            //console.log(rows[0].id);
        return rows[0].infrantry;
    }
    else {
        console.log('ERROR!', err);
    }
    });
}


// Expects territory as a string
function get_cavalry_from_territory(connection, territory) {
    connection.query('SELECT * from territories_to_cavalry where id = ' + "'"+territory+"'", function(err, rows, fields) {
    if(!err) {
        //console.log("The number of calvaries are: ", rows[0].cavalry);
            //console.log(rows[0].id);
        return rows[0].cavalry;
    }
    else {
        console.log('ERROR!', err);
    }
    });
}

//Expects territory as a string
function get_artillery_from_territory(connection, territory) {
    connection.query('SELECT * from territories_to_artillery where id = ' + "'"+territory+"'", function(err, rows, fields) {
    if(!err) {
        //console.log("The number of artilleries are: ", rows[0].artillery);
            //console.log(rows[0].id);
        return rows[0].artillery;
    }
    else {
        console.log('ERROR!', err);
    }
    });
}



// function get_name_from_id(id, callback) {

function get_name_from_id(id, callback) {
    connection.query('SELECT * from Players where id = ' + id, function(err, results) {
    if(!err) {
        callback(null, results);
    }
    else
        callback(err, null);
    });
}

var p1 = new Promise({
    function(resolve, reject) {
        
    }
});

get_name_from_id("1" function (err, results){
    if(err) {
        console.log(err);
    }
    else {
        temp = results;

    }
})


/*
var temp;
function end(data)
 {
    if(data[0].id == "Player1")
        temp = 1;
    connection.end();
 }

function asds()
{
    get_name_from_id("1", function(err, data){
    if(err)
        console.log("ERROR : ", err);
    else
        end(data);
    });
}



console.log(temp);
*/

/*
 var promise = new Promise(function (resolve, reject) {
                console.log('kek');
    get_name_from_id('1', function(err, res) {
        if (err) {
            console.log('k');
            reject(err);
        } else {
            temp = res;
            console.log('ok');
            resolve(res);
        }
    });


 })

//
// get_name_from_id('1')
console.log(temp);

*/
connection.end();


