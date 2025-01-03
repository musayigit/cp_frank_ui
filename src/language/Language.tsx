import De from './De';
import En from './En';

const lang = (_ln: unknown) => {
  switch (_ln) {
    case 'en':
      return En;
    case 'de':
      return De;
    default:
      return En;
  }
};

export default lang;
