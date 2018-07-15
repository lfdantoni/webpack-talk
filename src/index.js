import '../styles/styles.scss';
import {MDCRipple} from '@material/ripple';

const iconButtonRipple = new MDCRipple(document.querySelector('.mdc-icon-button'));
iconButtonRipple.unbounded = true;

var test123 = () => { console.log('asdasd')}

test123();
test123();