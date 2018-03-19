import { Pick2 , Pick3, Pick4, Pick5, Pick6, Pick7, Pick8, Pick9} from './index';
import {Shape, testObj} from './test-obj';

const t1 = testObj as Pick<Shape, 'user'>;
const pass1 = t1.user;

const t2 = testObj as Pick2<Shape, 'user', 'name'>;
const pass2 = t2.user.name;

const t3 = testObj as Pick3<Shape, 'user', 'address', 'alternative'>;
const pass3 = t3.user.address.alternative;

const t4 = testObj as Pick4<Shape, 'user', 'address', 'street', 'name'>;
const pass4 = t4.user.address.street.name;

const t5 = testObj as Pick5<Shape, 'user', 'address', 'street', 'city', 'name'>;
const pass5 = t5.user.address.street.city.name;

const t6 = testObj as Pick6<Shape, 'user', 'address', 'street', 'city', 'state', 'name'>;
const pass6 = t6.user.address.street.city.state.name;

const t7 = testObj as Pick7<Shape, 'user', 'address', 'street', 'city', 'state', 'country', 'name'>;
const pass7 = t7.user.address.street.city.state.country.name;

const t8 = testObj as Pick8<Shape, 'user', 'address', 'street', 'city', 'state', 'country', 'continent', 'name'>;
const pass8 = t8.user.address.street.city.state.country.continent.name;

const t9 = testObj as Pick9<Shape, 'user', 'address', 'street', 'city', 'state', 'country', 'continent', 'planet', 'name'>;
const pass9 = t9.user.address.street.city.state.country.continent.planet.name;
