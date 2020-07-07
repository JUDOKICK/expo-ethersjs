# expo-ethersjs

After being really frustrated many times trying to figure this out. I finally stumbled upon the correct package 
combination that ends up working out of the box.

So I decided to template it and make it a boilerplate for anyone looking to build Web PWAs, Android or iOS dApps.

No package shimming and no weird combos to get React Native to work with nodejs libs. 

## Pre Reqs

* ``expo-cli``  has to be installed on your system and available in the terminal
* Correct nodejs version running for expo, I used 12.16.1
* ``secrets.json`` Make sure you put your Infura ID and mnemonic phrase here to test if it works.

1. Install packages required
```javascript
npm install or yarn install
```

2. Run expo
```javascript
expo start -w
```

3. Test on Android, iOS or in the browser using the link in the terminal



