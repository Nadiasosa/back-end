import{createServer} from 'http'

createServer(function(req, res) {
    res.writehead(200,{'co9ntent-type': 'text/html'});
    res.write('Hola Nadia');
    res.end();
    
}).listen(8080, '127.0.0.1', ()=>{
    console.log("Servidor activo en 127.0.0.1:8080");
});