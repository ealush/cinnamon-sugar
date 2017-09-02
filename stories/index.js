import React from 'react'; // eslint-disable-line no-unused-vars
import { storiesOf } from '@kadira/storybook';
import { quotes, rand, themes } from './helpers';
import cinnamonSugar from '../src';
import ButterToast from 'butter-toast';
import './style.scss';

function raise(extra) {
    ButterToast.raise(cinnamonSugar({
        title: rand(['Success!', 'Error', 'Danger!', 'FYI']),
        message: rand(quotes),
        theme: rand(themes),
        kind: 'crisp'
    }), extra);
}

function raiseRandomTimeout() {
    raise({toastTimeout: (Math.round(Math.random()*7000) + 3000), name: 't6'});
}

function raiseSticky() {
    raise({
        sticky: true,
        dismissOnClick: true,
        name: 't5'
    });
}

storiesOf('Toast', module) // eslint-disable-line no-undef
    .add('bottom-left', () => (
        <div>
            <ButterToast toastMargin="15" name="t1" trayPosition="bottom-left"/>
            <a href="#!" onClick={() => raise({name: 't1'})}>Raise a toast!</a>
        </div>
    ))
    .add('top-right', () => (
        <div>
            <ButterToast toastMargin="15" name="t2" trayPosition="top-right"/>
            <a href="#!" onClick={() => raise({name: 't2'})}>Raise a toast!</a>
        </div>
    ))
    .add('top-left', () => (
        <div>
            <ButterToast toastMargin="15" name="t3" trayPosition="top-left"/>
            <a href="#!" onClick={() => raise({name: 't3'})}>Raise a toast!</a>
        </div>
    ))
    .add('bottom-center', () => (
        <div>
            <ButterToast toastMargin="15" name="t4" trayPosition="bottom-center"/>
            <a href="#!" onClick={() => raise({name: 't4'})}>Raise a toast!</a>
        </div>
    ))
    .add('top-center: Sticky', () => (
        <div>
            <ButterToast toastMargin="15" name="t5" theme="cinnamon-sugar" trayPosition="top-center"/>
            <a href="#!" onClick={raiseSticky}>Sticky Toast!</a>
        </div>
    ))
    .add('bottom-right: Random Timeout', () => (
        <div>
            <ButterToast toastMargin="15" name="t6" renderInContext={true}/>
            <a href="#!" onClick={raiseRandomTimeout}>Raise a toast!</a>
        </div>
    ));