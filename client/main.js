import {tiger} from './lib/utils/index.js';
const END_POINT = "https://jsonplaceholder.typicode.com/users";


tiger.get(END_POINT).
then((result) =>{
    result.forEach(element => {
        console.log(element.name);
    });
})

