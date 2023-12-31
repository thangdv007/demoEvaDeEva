import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    type,
    text = false,
    small = false,
    large = false,
    pay = false,
    signinup = false,
    store = false,
    seemore = false,
    seemore2 = false,
    blurred = false,
    complete = false,
    children,
    className,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    // // Remove event listener when btn is disabled
    // if (disabled) {
    //     Object.keys(props).forEach((key) => {
    //         if (key.startsWith('on') && typeof props[key] === 'function') {
    //             delete props[key];
    //         }
    //     });
    // }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    // else if (type) {
    //     props.type = type;
    //     Comp = 'input';
    // }

    const classes = cx('wrapper', {
        [className]: className,
        text,
        seemore,
        seemore2,
        signinup,
        blurred,
        complete,
        store,
        small,
        large,
        pay,
    });

    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
