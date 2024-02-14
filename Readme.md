# Namaste React
# Parcel
- It created a Dev Build
- It created a local server
- Automatically refreshing the page. HMR.
- Hot Module Replacement.
- Parcel uses a File Watching Algorithm which is written in C++.
- Parcel gives faster builds because of caching.
- Parcel caching is done in .parcel-cache folder.
- Most expensive thing in web browser is to load images in to your pages.
- Parcel does image optimization as well.
- Parcel will bundle the files also.
- Parcel will also compress the files of the project.
- Consistent Hashing.
- Code splitting.
- Does differential bundling - support older browsers.
- Diagnostic.
- Error handling.
- HTTPS.
- Tree shaking - removes unused code.
- Different dev and production bundles.





# Tree Shaking:-
Like a tree which is having both green and brown leaves, our code also contains used and unused codes.
Unused code on production should not be pushed because this will slow down the performance of the code.
To avoid this, we use tree shaking technique.
suppose we have two files, Math.js and index.js.
-------------------------
Math.js:-
export const square = (a) => {
    return a*a;
};

export const cube = (a) => {
    return a*a*a;
};

index.js:-
import {square} from './math';

console.log(square(3));
--------------------------
Here, cube function is not being used in index.js file, so we have to remove this when it goes to production.
For this, in webpack.config.js file we have to use mode: 'production' under module.export and type npm run build.
When the build is created, the unused code will be removed from the bundle.js file which makes the code optimized.
Tree shaking will not work for commonModule.js. It will only work for ES6 static imports and exports.

# Side Effects

let numbers = [1,2,3];
const addNumber = () => {
    number.push(num);
};

this addNumber function is having a side effects because it is modifying one variable numbers which is not in its scope. The main problem of this side effect is that tree shaking can not identify which code to use or which to remove. Other example is polyfills.
If you think that in your application you are not using any function which is having side effects, every function is pure function, then in package.json file, add 
"sideEffects": false

Tree shaking will not work with the below code:
var module;
if(condition) {
    module = require("cube");
} else {
    module = require("square");
}

because this code will run on the runtime and there tree shaking cannot be achieved.




/*
  Header
    Logo
    Nav Items
  Body
    Search
    Restaurant Container
      Img
      Name of Res, Star Rating, cuisines, delivery time
  Footer
    Copyright
    Links
    Address
    Contact
*/


# 2 type of routing in React
- Client side routing
- Server side routing

# Redux Toolkit
- Install Redux Toolkit and React Redux
- Build our store
- Connect our store to our App
- Slice (Cart Slice)
- Dispatch (action)
- Read data using Selector