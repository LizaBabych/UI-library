Vue.component('my-input', {
	props: {
    title: {
			type: String,
			default: 'Text',
			required: true
		},
		type: {
			type: String,
			default: 'Text',
			required: false
		},
		placeholder: {
			type: String,
			default: 'Text',
			required: false
		},
		required: {
			type: Boolean,
			default: false,
			required: true
		}
	},
	template: `
	<div class="my-input-form">
		<label class="my-label"> {{title}} <span v-if="required">*</span>
		<input class="my-input"
		:placeholder="placeholder"
		:required="required"
		:type="type"
		>
		</label>
	</div>
`
});
