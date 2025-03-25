var nuevoId;
var db=openDatabase("itemDB","1.0","itemDB",65535)

function limpiar() {
    document.getElementById("item").value="";
    document.getElementById("precio").value="";
}

//Funcionalidad de los botones

$(function) {
$("#crear").click(function(){
    db.transaction(function(transaction){
        var sql="CREATE TABLE productos "+
        "(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, "+
        "item VARCHAR(100) NOT NULL, "+
        "precio DECIMAL(5,2) NOT NULL");
        transaction.executeSql(sql,undefined, function(){
			alert("Tabla creada satisfactoriamente");
		}, function(transaction,err){	
            alert(err.message);
        })
	    });		
    });
	
$("#crear").click(function(){
    cargarDatos();	
})

function cargarDatos(){
    $("listaProductos").children().remove;
	db.transaction(function(transaction){
		var sql="SELECT * FROM productos ORDER BY id DESC";
		transaction.executeSql(sql,undefined,function(transaction,result)){
			
		)	
    })		
} 
  
})