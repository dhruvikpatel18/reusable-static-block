/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';

// Use the dynamic plugin URL provided by PHP
const PLUGIN_URL = ReusableStaticBlockData.pluginUrl;

//Define blockAttributes
const blockAttributes = {
	section1SubTitle: {
		type: 'string',
		default: 'our work',
	},
	section1Title: {
		type: 'string',
		default: 'Finished Project',
	},
	section1Description: {
		type: 'string',
		default: 'Passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don`t look even slightly believable. If you are going to use a passage of Lorem Ipsum. you need to be sure.'
	},
	section1Image1:{
		type: 'string',
    	default: `${PLUGIN_URL}/assets/image-1.jpg`,
	},
	section1Image1Title: {
		type: 'string',
		default: 'Uses a dictionary',
	},
	section1Image1SubTitle: {
		type: 'string',
		default: 'Look words which',
	},
	section1Image1Description: {
		type: 'string',
		default: 'Passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.',
	},
	section1Image2:{
		type: 'string',
    	default: `${PLUGIN_URL}/assets/image-2.jpg`,
	},
	section1Image2Title: {
		type: 'string',
		default: 'Randomised Words',
	},
	section1Image2SubTitle: {
		type: 'string',
		default: 'Words which don',
	},
	section1Image2Description: {
		type: 'string',
		default: 'Lorem Ipsum available, but theajority have suffered alteration in some form, by injected humour.',
	},
	section1Image3:{
		type: 'string',
    	default: `${PLUGIN_URL}/assets/image-3.jpg`,
	},
	section1Image3Title: {
		type: 'string',
		default: 'Suffered Alteration',
	},
	section1Image3SubTitle: {
		type: 'string',
		default: 'Don`t look words which',
	},
	section1Image3Description: {
		type: 'string',
		default: 'Suffered alteration in some form, by injected humour, or randomised words which don`t look alteration in some form.',
	},
	///////////////////////////////////////////////////////////////////

	section2SubTitle: {
		type: 'string',
		default: 'our team',
	},
	section2Title: {
		type: 'string',
		default: 'Excellent Expert Advisor',
	},
	section2Description: {
		type: 'string',
		default: 'Passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don`t look even slightly believable. If you are going to use a passage of Lorem Ipsum. you need to be sure.'
	},
	section2Image1:{
		type: 'string',
    	default: `${PLUGIN_URL}/assets/image-4.jpg`,
	},
	section2Image1Title: {
		type: 'string',
		default: 'Dr. Danial',
	},
	section2Image1SubTitle: {
		type: 'string',
		default: 'Slightly believable',
	},
	section2Image1Description: {
		type: 'string',
		default: 'Passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.',
	},
	section2Image2:{
		type: 'string',
    	default: `${PLUGIN_URL}/assets/image-5.jpg`,
	},
	section2Image2Title: {
		type: 'string',
		default: 'Dan O`Brien',
	},
	section2Image2SubTitle: {
		type: 'string',
		default: 'Words which don`t look',
	},
	section2Image2Description: {
		type: 'string',
		default: 'Lorem Ipsum available, but theajority have suffered alteration in some form, by injected humour.',
	},
	section2Image3:{
		type: 'string',
    	default: `${PLUGIN_URL}/assets/image-6.jpg`,
	},
	section2Image3Title: {
		type: 'string',
		default: 'Amanda Seyfried',
	},
	section2Image3SubTitle: {
		type: 'string',
		default: 'randomised words',
	},
	section2Image3Description: {
		type: 'string',
		default: 'Suffered alteration in some form, by injected humour, or randomised words which don`t look alteration in some form.x',
	},
	socialImages:{
		type: 'string',
    	default: `${PLUGIN_URL}/assets/socials.png`,
	},
	sectionBreak:{
		type: 'string',
    	default: `${PLUGIN_URL}/assets/section-break.png`,
	},
}

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {

	attributes: blockAttributes,
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
} );
