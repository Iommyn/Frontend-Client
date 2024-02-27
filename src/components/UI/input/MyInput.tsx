import React, { forwardRef, InputHTMLAttributes, ForwardRefExoticComponent, Ref } from 'react';
import classes from './MyInput.module.css';

interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {
}

const MyInput: ForwardRefExoticComponent<MyInputProps> = forwardRef(
    (
        props: MyInputProps,
        ref: Ref<HTMLInputElement>
    ) => {
        return (
            <input ref={ref} className={classes.myInput} {...props} />
        );
    }
);

export default MyInput;