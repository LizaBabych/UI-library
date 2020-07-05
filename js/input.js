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
		},
		value: {
			type: String,
			default: '',
			required: true
		},
		pattern: {
			type: RegExp,
			required: false,
		},
		errormessage: {
			type: String,
			default: "It's required",
			required: false
		},
	},
	data() {
		return {
			errInput: false,
			errExpression: false,
		}
	},
	methods: {
		correctMessage: function (event) {
			this.errInput = this.required && event.target.value == "";
			this.errExpression = !event.target.value.match(this.pattern)
		},
		setValid: function (val) {
			this.errInput = this.errExpression = false;
      this.$emit('input', val);
    },
	},
	computed: {
		dangerInput: function () {
			return {
				'input-danger': this.errInput || this.errExpression
			};
		},
	},
	template: `
	<div class="my-input-form">
		<label class="my-label"> {{title}} <span v-if="required">*</span>
			<input class="my-input"
			@blur="correctMessage"
			@input="setValid($event.target.value)"
			:class="dangerInput"
	    :placeholder="placeholder"
			:required="required"
			:type="type"
			:value="value"
			></input>
		<span v-if="errExpression" class="invalidExpression"> {{errormessage}} </span>
		</label>
	</div>
`
});
