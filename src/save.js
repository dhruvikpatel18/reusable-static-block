/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';


/**
 * The `save` function defines the block's structure for the front-end. This represents
 * what is rendered when the block is displayed in a post or page.
 *
 * @param {Object} attributes - Block attributes passed to the function.
 *
 * @return {JSX.Element} - JSX to render the block content on the front-end.
 */
export default function Save({ attributes }) {
	// Extract block attributes to be used in the rendering process
    const {
        section1SubTitle,
        section1Title,
        section1Description,
        section1Image1,
        section1Image1Title,
        section1Image1SubTitle,
        section1Image1Description,
        section1Image2,
        section1Image2Title,
        section1Image2SubTitle,
        section1Image2Description,
        section1Image3,
        section1Image3Title,
        section1Image3SubTitle,
        section1Image3Description,
        section2SubTitle,
        section2Title,
        section2Description,
        section2Image1,
        section2Image1Title,
        section2Image1SubTitle,
        section2Image1Description,
        section2Image2,
        section2Image2Title,
        section2Image2SubTitle,
        section2Image2Description,
        section2Image3,
        section2Image3Title,
        section2Image3SubTitle,
        section2Image3Description,
        socialImages,
        sectionBreak,
        backgroundColor,
    } = attributes; // Destructure the block attributes

	// Render the block content for the front-end
    return (
        <div {...useBlockProps.save()} className="container" style={{ backgroundColor }}>
			{/* Main content */}
            <main>
				{/* First section with its components */}
                <section className="container__section">
                    <div className="container__header">
						{/* Render rich text content for section 1 */}
                        <RichText.Content
                            tagName="div"
                            className="container__subtitle"
                            value={section1SubTitle}
                        />
                        <RichText.Content
                            tagName="div"
                            className="container__title"
                            value={section1Title}
                        />
                        <RichText.Content
                            tagName="div"
                            className="container__description"
                            value={section1Description}
                        />
                    </div>

					{/* Image cards for the first section */}
                    <div className="image-row">
                        <div className="image-card">
                            <img src={section1Image1} alt="Project 1" />
                            <RichText.Content
                                tagName="div"
                                className="card-title"
                                value={section1Image1Title}
                            />
                            <RichText.Content
                                tagName="div"
                                className="card-subtitle"
                                value={section1Image1SubTitle}
                            />
                            <RichText.Content
                                tagName="div"
                                className="card-description"
                                value={section1Image1Description}
                            />
                        </div>
                        <div className="image-card">
                            <img src={section1Image2} alt="Project 2" />
                            <RichText.Content
                                tagName="div"
                                className="card-title"
                                value={section1Image2Title}
                            />
                            <RichText.Content
                                tagName="div"
                                className="card-subtitle"
                                value={section1Image2SubTitle}
                            />
                            <RichText.Content
                                tagName="div"
                                className="card-description"
                                value={section1Image2Description}
                            />
                        </div>
                        <div className="image-card">
                            <img src={section1Image3} alt="Project 3" />
                            <RichText.Content
                                tagName="div"
                                className="card-title"
                                value={section1Image3Title}
                            />
                            <RichText.Content
                                tagName="div"
                                className="card-subtitle"
                                value={section1Image3SubTitle}
                            />
                            <RichText.Content
                                tagName="div"
                                className="card-description"
                                value={section1Image3Description}
                            />
                        </div>
                    </div>
                </section>

				{/* Section break */}
                <div className="section-break">
                    <img src={sectionBreak} alt="Section Break" />
                </div>

				{/* Second section with its components */}
                <section className="container__section">
                    <div className="container__header">
						{/* Render rich text content for section 2 */}
                        <RichText.Content
                            tagName="div"
                            className="container__subtitle"
                            value={section2SubTitle}
                        />
                        <RichText.Content
                            tagName="div"
                            className="container__title"
                            value={section2Title}
                        />
                        <RichText.Content
                            tagName="div"
                            className="container__description"
                            value={section2Description}
                        />
                    </div>

					{/* Image cards for the second section */}
                    <div className="image-row">
                        <div className="image-card">
                            <img src={section2Image1} alt="User 1" />
                            <div className="social-bar">
                                <img src={socialImages} alt="Social icons" />
                            </div>
                            <RichText.Content
                                tagName="div"
                                className="card-title"
                                value={section2Image1Title}
                            />
                            <RichText.Content
                                tagName="div"
                                className="card-subtitle"
                                value={section2Image1SubTitle}
                            />
                            <RichText.Content
                                tagName="div"
                                className="card-description"
                                value={section2Image1Description}
                            />
                        </div>
                        <div className="image-card">
                            <img src={section2Image2} alt="User 2" />
                            <div class="social-bar">
                                <img src={socialImages} alt="Social icons" />
                            </div>
                            <RichText.Content
                                tagName="div"
                                className="card-title"
                                value={section2Image2Title}
                            />
                            <RichText.Content
                                tagName="div"
                                className="card-subtitle"
                                value={section2Image2SubTitle}
                            />
                            <RichText.Content
                                tagName="div"
                                className="card-description"
                                value={section2Image2Description}
                            />
                        </div>
                        <div className="image-card">
                            <img src={section2Image3} alt="User 3" />
                            <div class="social-bar">
                                <img src={socialImages} alt="Social icons" />
                            </div>
                            <RichText.Content
                                tagName="div"
                                className="card-title"
                                value={section2Image3Title}
                            />
                            <RichText.Content
                                tagName="div"
                                className="card-subtitle"
                                value={section2Image3SubTitle}
                            />
                            <RichText.Content
                                tagName="div"
                                className="card-description"
                                value={section2Image3Description}
                            />
                        </div>
                    </div>
                </section>

				{/* Final section break */}
                <div className="section-break">
                    <img src={sectionBreak} alt="Section Break" />
                </div>
            </main>
        </div>
    );
}

