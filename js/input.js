Vue.component('my-input', {
	props: {
    title: {
			type: String,
			default: 'Text',
			required: true
		},
	},
	template: `
	<div class="my-input-form">
		<label class="my-label">{{title}} <span v-if="required">*</span>
		<input class="my-input"
	  :class="getSpecificInputClass"
		:placeholder="placeholder"
		:required="required"
		:type="type"
		>
		</label>
	</div>
`
});
