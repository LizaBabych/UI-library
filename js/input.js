Vue.component('my-input', {
	props: {
    title: {
			type: String,
			default: 'Text',
			required: true
		},
	},
	template: `
  <div>
      <input>
  </div>

`
});
