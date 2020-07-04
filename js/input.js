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
	},
	data() {
		return {
			invalidInput: false,
		}
	},
	methods: {
		correctMessage: function (event) {
			this.invalidInput = this.required && event.target.value == "";
		},
		setValid: function (val) {
      this["cl"] = true;
      this.$emit('input', val);
    }
	},
	computed: {
		dangerInput: function () {
			return {
				'input-danger': this.invalidInput
			};
		},
	},
	template: `
	<div class="my-input-form">
		<label class="my-label"> {{title}} <span v-if="required">*</span>
		<input class="my-input"
		:class="dangerInput"
    :placeholder="placeholder"
		:required="required"
		:type="type"
		:value="value"
		@blur="correctMessage"
		@input="setValid($event.target.value)"
		></input>
		</label>
	</div>
`
});
