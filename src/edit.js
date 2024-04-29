/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { 
	useBlockProps,
	RichText 
} from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit(attributes,setAttributes) {
	return (
		<div {...useBlockProps()} className="container">
			<main>
				<section className="container__section">
					<div className="container__header">
						<div className="container__subtitle">OUR WORK</div>
						<div className="container__title">Finished Project</div>
						<div className="container__description">This section showcases some of our completed projects. Each project demonstrates our commitment to quality and excellence.</div>
					</div>
					<div className="image-row">
						<div className="image-card">
							<img src="http://localhost:1234/wp-test/wp-content/plugins/reusable-static-block/assets/image-1.jpg" alt="Project 1" />

							<div className="card-title">Project 1</div>
							<div className="card-subtitle">Completed</div>
							<div className="card-description">This project involved renovating an old building into a modern office space.</div>
						</div>
						<div className="image-card">
							<img src="http://localhost:1234/wp-test/wp-content/plugins/reusable-static-block/assets/image-2.jpg" alt="Project 1" />

							<div className="card-title">Project 1</div>
							<div className="card-subtitle">Completed</div>
							<div className="card-description">This project involved renovating an old building into a modern office space.</div>
						</div>
						<div className="image-card">
							<img src="http://localhost:1234/wp-test/wp-content/plugins/reusable-static-block/assets/image-3.jpg" alt="Project 1" />

							<div className="card-title">Project 1</div>
							<div className="card-subtitle">Completed</div>
							<div className="card-description">This project involved renovating an old building into a modern office space.</div>
						</div>
					</div>
					<div class="section-break">
						<img src="http://localhost:1234/wp-test/wp-content/plugins/reusable-static-block/assets/section-break.png" alt=""/>
					</div>
				</section>

				<section className="container__section">
					<div className="container__header">
						<div className="container__subtitle">OUR WORK</div>
						<div className="container__title">Finished Project</div>
						<div className="container__description">This section showcases some of our completed projects. Each project demonstrates our commitment to quality and excellence.</div>
					</div>
					<div className="image-row">
						<div className="image-card">
							<img src="http://localhost:1234/wp-test/wp-content/plugins/reusable-static-block/assets/image-4.jpg" alt="Project 1" />

							<div className="social-bar">
								<img src="http://localhost:1234/wp-test/wp-content/plugins/reusable-static-block/assets/socials.png" alt="Socials"/>
							</div>

							<div className="card-title">Project 1</div>
							<div className="card-subtitle">Completed</div>
							<div className="card-description">This project involved renovating an old building into a modern office space.</div>
						</div>
						<div className="image-card">
							<img src="http://localhost:1234/wp-test/wp-content/plugins/reusable-static-block/assets/image-5.jpg" alt="Project 1" />

							<div className="social-bar">
								<img src="http://localhost:1234/wp-test/wp-content/plugins/reusable-static-block/assets/socials.png" alt="Socials"/>
							</div>

							<div className="card-title">Project 1</div>
							<div className="card-subtitle">Completed</div>
							<div className="card-description">This project involved renovating an old building into a modern office space.</div>
						</div>
						<div className="image-card">
							<img src="http://localhost:1234/wp-test/wp-content/plugins/reusable-static-block/assets/image-6.jpg" alt="Project 1" />

							<div className="social-bar">
								<img src="http://localhost:1234/wp-test/wp-content/plugins/reusable-static-block/assets/socials.png" alt="Socials"/>
							</div>

							<div className="card-title">Project 1</div>
							<div className="card-subtitle">Completed</div>
							<div className="card-description">This project involved renovating an old building into a modern office space.</div>
						</div>
					</div>
					<div class="section-break">
						<img src="http://localhost:1234/wp-test/wp-content/plugins/reusable-static-block/assets/section-break.png" alt=""/>
					</div>
				</section>

			</main>
			
		</div>
	);
}
