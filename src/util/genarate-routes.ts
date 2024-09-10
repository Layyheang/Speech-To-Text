import type { RouteRecordRaw } from "vue-router";
const modules: any = import.meta.glob('../views/**/*.routes.ts',{import: 'default',eager: true});  // check all file in view folder that have routes.ts and call to use  

const routes: RouteRecordRaw[] =[]; // This defines a constant variable named routes
console.log(modules);

for (const path in modules){ //This is a for...in loop that iterates over the keys of the modules object. The path variable will represent each key (property) in the modules object.
    const route = modules[path] //For each key (path) in the modules object and  expected an individual route record or an array of route records 
    routes.push(...route) //The push(...route) method is used to add the contents of route into the routes array. and (...) is Spread operator
}

export default routes; // this array can be used elsewhere in project (for example, in the Vue Router configuration) to define the routes for in project.

//note: for more detail can check on document vue-router and chatGPT