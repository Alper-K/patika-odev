import service from './src/lib/service.js';

const result = service(1);
result.then(function(result) {
    console.log(result) 
 })
