
# React Native Firebase Login Screen

## Introduction
The best way to start your React Native application with **Firebase** authentication.

**Works both with expo and react-native init.**

*All screens are made only with native components.*

Folder **FirebaseLogin** contains:
1. Login screen
2. Register screen
3. Forgot password screen




## Preview

### Login 
![Preview](https://raw.githubusercontent.com/venits/react-native-router-flux/master/login.jpg)
### Create Account
![Preview](https://raw.githubusercontent.com/venits/react-native-router-flux/master/register.jpg)
### Forgot Password
![Preview](https://raw.githubusercontent.com/venits/react-native-router-flux/master/forgot.jpg)

## How to use?
1. Download **FirebaseLogin** from this repo. 
2. Add **firebase** module to your project:
```js
npm i -s firebase
```
3.  Configure your application with firebase. You can find some information [here](https://firebase.google.com/docs/web/setup).

Basically all you have to do is to add config file in your main application file and initialize firebase.
Your code should look this:
```js
import firebase from "firebase";    
const config = {  
  apiKey: "xyz",  
  authDomain: "xyz",  
  databaseURL: "xyz",  
  projectId: "xyz",  
  storageBucket: "xyz",  
  messagingSenderId: "xyz"  
};  
firebase.initializeApp(config);
```
4. Copy/Paste **FirebaseLogin** and put it in your project.
5. Import **FirebaseLogin** component and put it in you render method. (**Make sure you reserved whole screen for this component!**)
```js
import FirebaseLogin from "./FirebaseLogin";

render() {
  retrun (
    <FirebaseLogin/>
  )
}
```

Component comes with few props:
```js
<FirebaseLogin  
  login={user => console.warn(user)}  
  background={path_to_your_background_image}  
/>
```
**Login** - this props will be invoked when user successfully log in. In return you receive basic information about user.

**Background** - path to image you want to use as background.
## Summary 

I hope this module will save you several hours of work ;)

In case of any problems or suggestions you can email me at:
tomasz.przybyl.it@gmail.com

**Happy Coding!**
