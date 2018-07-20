import Route from '@ember/routing/route';

export default Route.extend({
	
	model(){
		return Ember.Object.create({nome: null})
	},

	actions: {
		salvar(pessoa) {
			console.log(pessoa);
			this.transitionTo('lista');
		},
		salvarAoPressionarEnter(){
			this.send('salvar', this.get('model'));
		}
	}
});
