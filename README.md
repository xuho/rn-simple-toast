# rn-simple-toast
React Native Toast component for both iOS and Android

## Add it to your project

1. Insall package
    - Using NPM
    `npm i -S rn-simple-toast` 
    - Using Yarn
    `yarn add rn-simple-toast`
2. Import package
    `import { Toast, DURATION, POSTION  } from 'rn-simple-toast';`

## Usage



```javascript
import React from 'react';
import { Toast, DURATION  } from 'rn-simple-toast';
class App extends React.Component  {
    render() {
        return (
            <View style={styles.container}>
                <Toast ref={_ref => this.toastRef = _ref} />
                <Button
                    onPress={() => {
                        toastRef.show('Some message here', '#3498db', DURATION.LONG);
                    }}
                    title='Show message'
                    style={{ width: 120, backgroundColor: 'darkviolet' }}
                    textColor='#fff'
                />
            </View>
        );
    }
}
```

```
DEMO
```
![iOS](https://raw.githubusercontent.com/xuho/demo-images/master/rn-toast-ios.gif)
![Android](https://raw.githubusercontent.com/xuho/demo-images/master/rn-toast-android.gif)


## Props

- **`duration`** _(String)_ - Duration time to display message.
- **`containerStyle`** _(String)_ Style of toast container.
- **`textStyle`** _(Function)_ - Style of text message
- **`position`** _(String)_ - Message display position 
- **`positionOffset`** _(String)_ - Distance from top or bottom to display message

## Method
- **`show`** - The method to show toast message

**MIT Licensed**
