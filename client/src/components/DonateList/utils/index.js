import l1 from '../assets/01.png';
import l2 from '../assets/02.png';
import l3 from '../assets/03.png';
import l4 from '../assets/04.png';
import l5 from '../assets/05.png';
import l6 from '../assets/06.png';
import l7 from '../assets/07.png';
import l8 from '../assets/08.png'; 

const icons = {
    l1, l2, l3, l4, l5, l6, l7, l8
}

export const identifyIcon = (index) => icons[`l${index}`] || icons.l8;