import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
  firstName: attr('string'),
  lastName: attr('string'),
  age: attr('number'),
  createDate: attr('date')
});
