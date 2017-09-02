import React from 'react'; // eslint-disable-line no-unused-vars
import { storiesOf } from '@kadira/storybook';
import { quotes, rand, themes } from './helpers';
import cinnamonSugar from '../src';
import ButterToast from 'butter-toast';
import './style.scss';

const raise = {
    crisp: (extra) => {
        const toast = cinnamonSugar({
            title: rand(['Success!', 'Error', 'Danger!', 'FYI']),
            message: rand(quotes),
            theme: rand(themes)
        });
        ButterToast.raise(toast, extra);
    },
    slim: (extra) => {
        ButterToast.raise(cinnamonSugar({
            message: rand(quotes),
            kind: 'slim'
        }), extra);
    },
    slimLite: (extra) => {
        ButterToast.raise(cinnamonSugar({
            message: rand(quotes),
            theme: 'lite',
            kind: 'slim'
        }), extra);
    }
};

function raiseRandomTimeout(kind = 'crisp') {
    raise[kind]({toastTimeout: (Math.round(Math.random()*7000) + 3000), name: 't6'});
}

function raiseSticky(kind = 'crisp') {
    raise[kind]({
        sticky: true,
        dismissOnClick: true,
        name: 't5'
    });
}

storiesOf('Toast: Crisp', module) // eslint-disable-line no-undef
    .add('bottom-left', () => (
        <div>
            <ButterToast toastMargin="15" name="t1" trayPosition="bottom-left"/>
            <a href="#!" onClick={() => raise.crisp({name: 't1'})}>Raise a toast!</a>
        </div>
    ))
    .add('top-right', () => (
        <div>
            <ButterToast toastMargin="15" name="t2" trayPosition="top-right"/>
            <a href="#!" onClick={() => raise.crisp({name: 't2'})}>Raise a toast!</a>
        </div>
    ))
    .add('top-left', () => (
        <div>
            <ButterToast toastMargin="15" name="t3" trayPosition="top-left"/>
            <a href="#!" onClick={() => raise.crisp({name: 't3'})}>Raise a toast!</a>
        </div>
    ))
    .add('bottom-center', () => (
        <div>
            <ButterToast toastMargin="15" name="t4" trayPosition="bottom-center"/>
            <a href="#!" onClick={() => raise.crisp({name: 't4'})}>Raise a toast!</a>
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

storiesOf('Toast: Slim', module) // eslint-disable-line no-undef
    .add('bottom-left', () => (
        <div>
            <ButterToast toastMargin="5" name="t1" trayPosition="bottom-left"/>
            <a href="#!" onClick={() => raise.slim({name: 't1'})}>Raise a toast!</a>
        </div>
    ))
    .add('top-right', () => (
        <div>
            <ButterToast toastMargin="5" name="t2" trayPosition="top-right"/>
            <a href="#!" onClick={() => raise.slim({name: 't2'})}>Raise a toast!</a>
        </div>
    ))
    .add('top-left', () => (
        <div>
            <ButterToast toastMargin="5" name="t3" trayPosition="top-left"/>
            <a href="#!" onClick={() => raise.slim({name: 't3'})}>Raise a toast!</a>
        </div>
    ))
    .add('bottom-center', () => (
        <div>
            <ButterToast toastMargin="5" name="t4" trayPosition="bottom-center"/>
            <a href="#!" onClick={() => raise.slim({name: 't4'})}>Raise a toast!</a>
        </div>
    ))
    .add('top-center: Sticky', () => (
        <div>
            <ButterToast toastMargin="5" name="t5" theme="cinnamon-sugar" trayPosition="top-center"/>
            <a href="#!" onClick={() => raiseSticky('slim')}>Sticky Toast!</a>
        </div>
    ))
    .add('bottom-right: Random Timeout', () => (
        <div>
            <ButterToast toastMargin="5" name="t6" renderInContext={true}/>
            <a href="#!" onClick={() => raiseRandomTimeout('slim')}>Raise a toast!</a>
        </div>
    ));

storiesOf('Toast: Slim:Lite', module) // eslint-disable-line no-undef
    .add('bottom-left', () => (
        <div>
            <ButterToast toastMargin="5" name="t1" trayPosition="bottom-left"/>
            <a href="#!" onClick={() => raise.slimLite({name: 't1'})}>Raise a toast!</a>
        </div>
    ))
    .add('top-right', () => (
        <div>
            <ButterToast toastMargin="5" name="t2" trayPosition="top-right"/>
            <a href="#!" onClick={() => raise.slimLite({name: 't2'})}>Raise a toast!</a>
        </div>
    ))
    .add('top-left', () => (
        <div>
            <ButterToast toastMargin="5" name="t3" trayPosition="top-left"/>
            <a href="#!" onClick={() => raise.slimLite({name: 't3'})}>Raise a toast!</a>
        </div>
    ))
    .add('bottom-center', () => (
        <div>
            <ButterToast toastMargin="5" name="t4" trayPosition="bottom-center"/>
            <a href="#!" onClick={() => raise.slimLite({name: 't4'})}>Raise a toast!</a>
        </div>
    ))
    .add('top-center: Sticky', () => (
        <div>
            <ButterToast toastMargin="5" name="t5" theme="cinnamon-sugar" trayPosition="top-center"/>
            <a href="#!" onClick={() => raiseSticky('slimLite')}>Sticky Toast!</a>
        </div>
    ))
    .add('bottom-right: Random Timeout', () => (
        <div>
            <ButterToast toastMargin="5" name="t6" renderInContext={true}/>
            <a href="#!" onClick={() => raiseRandomTimeout('slimLite')}>Raise a toast!</a>
        </div>
    ));