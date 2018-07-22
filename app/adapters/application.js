import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
	host: 'http://agenda.clairton.eti.br',
	namespace: null,
	coalesceFindRequests: true
});
