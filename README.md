## Get started
This app is a starting point to setup your own trevend project. Before you start you need to create a trevend account at [Trevend.com](https://trevend.com)

## Setup environment
After you created an account you can get your API key from the merchant backend. Copy the `env.local.example` file in this project to `env.local` and fill in you own API key appropriately. It should look like this: 
```
REACT_APP_TREVEND_API_KEY=<YOUR_API_KEY_HERE>
```

## Start the app
You can run the app with the help of npm. First install the packages:
```
npm install
```

If this is finished you can run the app with: 
```
npm run start
``` 

The browser should open and present you a failure message. Please go to the `App.js` file at line 19 and fill in the ID of your first product:

```
const product = useProduct('YOUR_FIRST_PRODUCT_ID');
```

You can find this ID in the quick start section in your merchant backend. After you saved the `App.js` file with the right product ID you should see "My first Trevend product" and the json structure of your first product.

You are good to go from here and work throw the examples of the trevend documentation: [Docs](https://docs.trevend.com) 

Have fun! :)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
