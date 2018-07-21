import Route from '@ember/routing/route';

export default Route.extend({
	
	model(){
		return this.get('store').createRecord('pessoa'); 
	},

	actions: {
		salvar(pessoa) {
			console.log(pessoa);
			pessoa.save().then(() => {
			  this.transitionTo('lista');
		  })
		},
		salvarAoPressionarEnter(){
		 this.send('salvar', this.get('model'));
		}
	}
});
