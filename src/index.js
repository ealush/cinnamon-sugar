import wrapper from './wrapper';
import crisp from './kinds/crisp';
import crunch from './kinds/crunch';
import slim from './kinds/slim';
import fresh from './kinds/fresh';

const kinds = {
    slim,
    fresh,
    crunch,
    crisp
};

export default (props) => wrapper(kinds, props);