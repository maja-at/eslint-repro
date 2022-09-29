import {B} from 'project1/b';
import foo from 'eslint';

export function X() {
    B();
    console.log('project2/x');
    console.log(typeof foo);
}