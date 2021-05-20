/* globals describe, afterEach, test, expect */

import {cleanup, render} from '@testing-library/svelte'
import {Select} from '../src/select.js'

describe('Select', () => {
	afterEach(cleanup)

	test('should match snapshot default', () => {
		const {container} = render(Select)
		expect(container).toMatchSnapshot()
	})

	test('should match snapshot props', () => {
		const {container} = render(Select, {
			props: {
				value: 2,
				class: 'customCss',
				required: true,
				first: 'Selecione',
				options: [
					{value: 1, text: 'Tadashi'},
					{value: 2, text: 'Takamoto'}
				]
			}
		})
		expect(container).toMatchSnapshot()
	})
})
