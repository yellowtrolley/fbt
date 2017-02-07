import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
	// name(i) {return `Category ${i}`;}
	name: faker.commerce.department
});
