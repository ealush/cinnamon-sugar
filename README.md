# Cinnamon Sugar
Cinnamon sugar is a companion package for [Butter-Toast](https://ealush.github.io/butter-toast/#!).
While Butter Toast provides a smooth toast stacking interface, Cinnamon-sugar is intended to be used as a styling library, fully compatible with Butter-Toast.

[Live Demo](https://ealush.github.io/cinnamon-sugar)

## How to use?
To use Cinnamon-Sugar you need to import it alongside Butter-Toast, and add your custom config whenever you want to show a toast.

```js
import React, { Component } from 'react';
import cinnamonSugar from '../../src';
import ButterToast from 'butter-toast';

class ShowOff extends Component {

    handleClick() {
        // in this example, I am using a `fresh` toast
        // since it has all the possible options
        const toast = cinnamonSugar({
            kind: 'fresh',
            theme: 'lite',
            picture: 'http://lorempixel.com/150/150/people',
            title: 'Amazing!', // you can also add jsx code here!
            message: 'Just showing off here...', // you can also add jsx code here!
            icon: 'bath' // literally any font awesome 4.7 icon
        });

        ButterToast.raise(toast)
    }

    render() {
        <span>
            <a href="#!" onClick={this.handleClick.bind(this)}>Click me to pop a toast</a>
            <ButterToast trayPosition="bottom-right"/>
        </span>
    }
}

export default ShowOff;
```

## Kinds
There are currently four different kinds of styles:

* **crisp**
    Bright, clean looking toast notification, featuring an icon on the left (optional) and a close button on the right. Appears with a satisfying animation, and has hover effects both for the close button and for the whole tost itself.

    crisp accepts the following options:
        `message`: (optional) Either a string or jsx/react component
        `title`: (optional) Either a string or jsx/react component
        `icon`: (optional) Any of font-awesome 4.7 icon names
        `noClose`: hides the `x` button
        `theme`: any of the supported themes

    The following themes are supported by default. Choosing one will paint the icon accordingly.
    * success (green)
    * error (red)
    * info (blue)
    * danger (orange)
    * golden
    * dark
    * default // no need to specify. light grey
![alt tag](https://raw.githubusercontent.com/ealush/cinnamon-sugar/master/assets/rec0.gif)

* **crunch**
    Plain, colored toast notifications. With an icon on the left, and an optional close button on the top right. The icon appears with a sliding animation.

    crunch accepts the following options:
        `message`: (optional) Either a string or jsx/react component
        `title`: (optional) Either a string or jsx/react component
        `icon`: (optional) Any of font-awesome 4.7 icon names
        `noClose`: hides the `x` button
        `theme`: any of the supported themes

    The following themes are supported by default. Others may be added using custom CSS.
    * grey
    * red
    * blue
    * purple
    * orange
    * green

    ![alt tag](https://raw.githubusercontent.com/ealush/cinnamon-sugar/master/assets/rec3.gif)

* **fresh**
    Toast notifications that allow adding an image, an icon and a close button. Good especially for social media or live notification for messages.

    fresh accepts the following options:
        `message`: (optional) Either a string or jsx/react component
        `title`: (optional) Either a string or jsx/react component
        `icon`: (optional) Any of font-awesome 4.7 icon names
        `picture`: (optional) image url
        `noClose`: hides the `x` button
        `theme`: any of the supported themes

    The following themes are supported by default. Others may be added using custom CSS.
    * lite
    * dark

    ![alt tag](https://raw.githubusercontent.com/ealush/cinnamon-sugar/master/assets/rec4.gif)
    ![alt tag](https://raw.githubusercontent.com/ealush/cinnamon-sugar/master/assets/rec5.gif)

* **slim**
    Thin, simple toast notifications. Goot for status updates, and action confirmations.

    slim accepts the following options:
        `message`: Either a string or jsx/react component
        `theme`: any of the supported themes

    The following themes are supported by default. Others may be added using custom CSS.
    * lite
    * dark

    ![alt tag](https://raw.githubusercontent.com/ealush/cinnamon-sugar/master/assets/rec1.gif)
