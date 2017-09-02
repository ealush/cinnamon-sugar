import wrapper from './wrapper';
import crisp from './crisp';
import slim from './slim';

const kinds = {
    slim,
    crisp
};

export default (props) => wrapper(kinds, props);