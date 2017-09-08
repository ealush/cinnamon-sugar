import wrapper from './wrapper';
import crisp from './kinds/crisp';
import crunch from './kinds/crunch';
import slim from './kinds/slim';

const kinds = {
    slim,
    crunch,
    crisp
};

export default (props) => wrapper(kinds, props);