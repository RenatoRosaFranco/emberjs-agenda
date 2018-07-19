import Component from '@ember/component';

export default Component.extend({
	// atribui tag especifica ao componente
	classNameBindings: ['umaLetra::nome-errado'],

	umaLetra: Ember.computed('pessoa.nome', function(){
		return this.get('pessoa.nome') <= 1;
	}),
});
