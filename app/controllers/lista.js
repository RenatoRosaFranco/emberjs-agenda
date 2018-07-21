import Controller from '@ember/controller';

export default Controller.extend({

	nome: null,
	queryParams: ['nome'],

	pessoa: {
	 nome: 'Renato',
	 sobrenome: 'Franco'
	}
});
