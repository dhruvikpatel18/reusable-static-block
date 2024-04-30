/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Provides necessary block editor functionalities like useBlockProps, RichText,
 * InspectorControls, MediaUpload, MediaUploadCheck, etc.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/
 */
import { 
	useBlockProps,
	RichText, 
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';

/**
 * Import components from WordPress components package, such as PanelBody,
 * Button, and ColorPicker.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-components/
 */
import { PanelBody, Button, ColorPicker } from "@wordpress/components";


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function defines how the block appears and behaves in the editor.
 *
 * @param {Object} props - Properties passed to the block, including attributes and
 * setAttributes function to update the block's state.
 *
 * @return {JSX.Element} - JSX to render in the block editor.
 */
export default function Edit(props) {
    const { attributes, setAttributes } = props; // Destructure props
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
	} = attributes; // Destructure block attributes

    /**
     * Handles changes to the background color attribute.
     *
     * @param {string} newColor - New background color value.
     */
	const handleBackgroundColorChange = (newColor) => {
		setAttributes({backgroundColor: newColor });
	}

	return (
		<div {...useBlockProps()} className="container" style={{backgroundColor: backgroundColor}}>
			{/* Inspector controls for block settings in the sidebar */}
			<InspectorControls>

				{/* Background Color controls for full block */}
				<PanelBody title={__("Background Color")} initialOpen={true}>
					<ColorPicker
						color={backgroundColor}
						onChange={(color) => handleBackgroundColorChange(color)}
					/>
				</PanelBody>
				
				{/* Media upload controls for section 1 and section 2 */}
				<PanelBody title={__("Project-1 Image")} initialOpen={false}>
					{/* Media upload control for selecting the Project-1 image */}
					<MediaUploadCheck>
						<div>
							<MediaUpload
								onSelect={(media) =>
									setAttributes({ section1Image1: media.url })
								}
								allowedTypes={["image"]}
								render={({ open }) => (
									<Button onClick={open} variant="secondary">
										{__("Select Project-1 Image")}
									</Button>
								)}
							/>
							{/* Display a preview of the selected Project-1 image */}
							{section1Image1 && (
								<img
									src={section1Image1}
									alt={__("Project-1 Image Preview")}
									style={{ width: "40%", marginTop: "10px", marginLeft: "30px" }} // Simple preview styling
								/>
							)}
						</div>
					</MediaUploadCheck>
				</PanelBody>

				<PanelBody title={__("Project-2 Image")} initialOpen={false}>
					{/* Media upload control for selecting the Project-2 image */}
					<MediaUploadCheck>
						<div>
							<MediaUpload
								onSelect={(media) =>
									setAttributes({ section1Image2: media.url })
								}
								allowedTypes={["image"]}
								render={({ open }) => (
									<Button onClick={open} variant="secondary">
										{__("Select Project-2 Image")}
									</Button>
								)}
							/>
							{/* Display a preview of the selected Project-2 image */}
							{section1Image2 && (
								<img
									src={section1Image2}
									alt={__("Project-2 Image Preview")}
									style={{ width: "40%", marginTop: "10px", marginLeft: "30px" }} // Simple preview styling
								/>
							)}
						</div>
					</MediaUploadCheck>
				</PanelBody>

				<PanelBody title={__("Project-3 Image")} initialOpen={false}>
					{/* Media upload control for selecting the Project-3 image */}
					<MediaUploadCheck>
						<div>
							<MediaUpload
								onSelect={(media) =>
									setAttributes({ section1Image3: media.url })
								}
								allowedTypes={["image"]}
								render={({ open }) => (
									<Button onClick={open} variant="secondary">
										{__("Select Project-3 Image")}
									</Button>
								)}
							/>
							{/* Display a preview of the selected Project-1 image */}
							{section1Image3 && (
								<img
									src={section1Image3}
									alt={__("Project-3 Image Preview")}
									style={{ width: "40%", marginTop: "10px", marginLeft: "30px" }} // Simple preview styling
								/>
							)}
						</div>
					</MediaUploadCheck>
				</PanelBody>

				<PanelBody title={__("User-1 Image")} initialOpen={false}>
					{/* Media upload control for selecting the User-1 image */}
					<MediaUploadCheck>
						<div>
							<MediaUpload
								onSelect={(media) =>
									setAttributes({ section2Image1: media.url })
								}
								allowedTypes={["image"]}
								render={({ open }) => (
									<Button onClick={open} variant="secondary">
										{__("Select User-1 Image")}
									</Button>
								)}
							/>
							{/* Display a preview of the selected Project-1 image */}
							{section2Image1 && (
								<img
									src={section2Image1}
									alt={__("User-1 Image Preview")}
									style={{ width: "40%", marginTop: "10px", marginLeft: "30px" }} // Simple preview styling
								/>
							)}
						</div>
					</MediaUploadCheck>
				</PanelBody>

				<PanelBody title={__("User-2 Image")} initialOpen={false}>
					{/* Media upload control for selecting the User-2 image */}
					<MediaUploadCheck>
						<div>
							<MediaUpload
								onSelect={(media) =>
									setAttributes({ section2Image2: media.url })
								}
								allowedTypes={["image"]}
								render={({ open }) => (
									<Button onClick={open} variant="secondary">
										{__("Select User-2 Image")}
									</Button>
								)}
							/>
							{/* Display a preview of the selected Project-1 image */}
							{section2Image2 && (
								<img
									src={section2Image2}
									alt={__("User-2 Image Preview")}
									style={{ width: "40%", marginTop: "10px", marginLeft: "30px" }} // Simple preview styling
								/>
							)}
						</div>
					</MediaUploadCheck>
				</PanelBody>

				<PanelBody title={__("User-3 Image")} initialOpen={false}>
					{/* Media upload control for selecting the User-3 image */}
					<MediaUploadCheck>
						<div>
							<MediaUpload
								onSelect={(media) =>
									setAttributes({ section2Image3: media.url })
								}
								allowedTypes={["image"]}
								render={({ open }) => (
									<Button onClick={open} variant="secondary">
										{__("Select User-3 Image")}
									</Button>
								)}
							/>
							{/* Display a preview of the selected Project-1 image */}
							{section2Image3 && (
								<img
									src={section2Image3}
									alt={__("User-3 Image Preview")}
									style={{ width: "40%", marginTop: "10px", marginLeft: "30px" }} // Simple preview styling
								/>
							)}
						</div>
					</MediaUploadCheck>
				</PanelBody>
			</InspectorControls>

			{/* Main content of the block */}
			<main>
				{/* Section 1 with projects details */}
				<section className="container__section">
					<div className="container__header">
						<RichText
							tagName="div"
							className="container__subtitle"
							value={section1SubTitle}
							onChange={(newSection1SubTitle) => setAttributes({section1SubTitle: newSection1SubTitle})}
							placeholder={__("Section 1 Subtitle")}
						/>
						<RichText
							tagName="div"
							className="container__title"
							value={section1Title}
							onChange={(newSection1Title) => setAttributes({section1Title: newSection1Title})}
							placeholder="Section 1 Title"
						/>
						<RichText
							tagName="div"
							className="container__description"
							value={section1Description}
							onChange={(newSection1Description) => setAttributes({section1Description: newSection1Description})}
							placeholder="Section 1 Description"
						/>
					</div>
					
					{/* Image cards representing Project images */}
					<div className="image-row">
						<div className="image-card">
							<img src={section1Image1} alt={__("Project 1")} />
							
							<RichText
								tagName="div"
								className="card-title"
								value={section1Image1Title}
								onChange={(newSection1Image1Title) => setAttributes({section1Image1Title: newSection1Image1Title})}
								placeholder="Section 1 Description"
							/>
							
							<RichText
								tagName="div"
								className="card-subtitle"
								value={section1Image1SubTitle}
								onChange={(newSection1Image1SubTitle) => setAttributes({section1Image1SubTitle: newSection1Image1SubTitle})}
								placeholder="Section 1 Description"
							/>
							
							<RichText
								tagName="div"
								className="card-description"
								value={section1Image1Description}
								onChange={(newSection1Image1Description) => setAttributes({section1Image1Description: newSection1Image1Description})}
								placeholder="Section 1 Description"
							/>
						</div>
						<div className="image-card">
							<img src={section1Image2} alt={__("Project 2")} />

							<RichText
								tagName="div"
								className="card-title"
								value={section1Image2Title}
								onChange={(newSection1Image2Title) => setAttributes({section1Image2Title: newSection1Image2Title})}
								placeholder="Section 1 Description"
							/>
							
							<RichText
								tagName="div"
								className="card-subtitle"
								value={section1Image2SubTitle}
								onChange={(newSection1Image2SubTitle) => setAttributes({section1Image2SubTitle: newSection1Image2SubTitle})}
								placeholder="Section 1 Description"
							/>
							
							<RichText
								tagName="div"
								className="card-description"
								value={section1Image2Description}
								onChange={(newSection1Image2Description) => setAttributes({section1Image2Description: newSection1Image2Description})}
								placeholder="Section 1 Description"
							/>
						</div>
						<div className="image-card">
							<img src={section1Image3} alt={__("Project 3")} />

							<RichText
								tagName="div"
								className="card-title"
								value={section1Image3Title}
								onChange={(newSection1Image3Title) => setAttributes({section1Image3Title: newSection1Image3Title})}
								placeholder="Section 1 Description"
							/>
							
							<RichText
								tagName="div"
								className="card-subtitle"
								value={section1Image3SubTitle}
								onChange={(newSection1Image3SubTitle) => setAttributes({section1Image3SubTitle: newSection1Image3SubTitle})}
								placeholder="Section 1 Description"
							/>
							
							<RichText
								tagName="div"
								className="card-description"
								value={section1Image3Description}
								onChange={(newSection1Image3Description) => setAttributes({section1Image3Description: newSection1Image3Description})}
								placeholder="Section 1 Description"
							/>
						</div>
					</div>
				</section>

			    {/* Section break */}
				<div class="section-break">
					<img src={sectionBreak} alt={__("Section Break")}/>
				</div>
				
				{/* Section 2 with user details */}
				<section className="container__section">
				<div className="container__header">
						<RichText
							tagName="div"
							className="container__subtitle"
							value={section2SubTitle}
							onChange={(newSection2SubTitle) => setAttributes({section2SubTitle: newSection2SubTitle})}
							placeholder={__("Section 1 Subtitle")}
						/>
						<RichText
							tagName="div"
							className="container__title"
							value={section2Title}
							onChange={(newSection2Title) => setAttributes({section2Title: newSection2Title})}
							placeholder="Section 1 Title"
						/>
						<RichText
							tagName="div"
							className="container__description"
							value={section2Description}
							onChange={(newSection2Description) => setAttributes({section2Description: newSection2Description})}
							placeholder="Section 1 Description"
						/>
					</div>

					<div className="image-row">
						<div className="image-card">
							<img src={section2Image1} alt={__("User 1")} />

							<div className="social-bar">
								<img src={socialImages} alt={__("Social icons")}/>
							</div>

							<RichText
								tagName="div"
								className="card-title"
								value={section2Image1Title}
								onChange={(newSection2Image1Title) => setAttributes({section2Image1Title: newSection2Image1Title})}
								placeholder="Section 1 Description"
							/>
							
							<RichText
								tagName="div"
								className="card-subtitle"
								value={section2Image1SubTitle}
								onChange={(newSection2Image1SubTitle) => setAttributes({section2Image1SubTitle: newSection2Image1SubTitle})}
								placeholder="Section 1 Description"
							/>
							
							<RichText
								tagName="div"
								className="card-description"
								value={section2Image1Description}
								onChange={(newSection2Image1Description) => setAttributes({section2Image1Description: newSection2Image1Description})}
								placeholder="Section 1 Description"
							/>
						</div>
						<div className="image-card">
							<img src={section2Image2} alt={__("User 2")} />

							<div className="social-bar">
								<img src={socialImages} alt={__("Social icons")}/>
							</div>

							<RichText
								tagName="div"
								className="card-title"
								value={section2Image2Title}
								onChange={(newSection2Image2Title) => setAttributes({section2Image2Title: newSection2Image2Title})}
								placeholder="Section 1 Description"
							/>
							
							<RichText
								tagName="div"
								className="card-subtitle"
								value={section2Image2SubTitle}
								onChange={(newSection2Image2SubTitle) => setAttributes({section2Image2SubTitle: newSection2Image2SubTitle})}
								placeholder="Section 1 Description"
							/>
							
							<RichText
								tagName="div"
								className="card-description"
								value={section2Image2Description}
								onChange={(newSection2Image2Description) => setAttributes({section2Image2Description: newSection2Image2Description})}
								placeholder="Section 1 Description"
							/>
						</div>
						<div className="image-card">
							<img src={section2Image3} alt={__("User 3")}/>

							<div className="social-bar">
								<img src={socialImages} alt={__("Social icons")}/>
							</div>

							<RichText
								tagName="div"
								className="card-title"
								value={section2Image3Title}
								onChange={(newSection2Image3Title) => setAttributes({section2Image3Title: newSection2Image3Title})}
								placeholder="Section 1 Description"
							/>
							
							<RichText
								tagName="div"
								className="card-subtitle"
								value={section2Image3SubTitle}
								onChange={(newSection2Image3SubTitle) => setAttributes({section2Image3SubTitle: newSection2Image3SubTitle})}
								placeholder="Section 1 Description"
							/>
							
							<RichText
								tagName="div"
								className="card-description"
								value={section2Image3Description}
								onChange={(newSection2Image3Description) => setAttributes({section2Image3Description: newSection2Image3Description})}
								placeholder="Section 1 Description"
							/>
						</div>
					</div>
				</section>
				
				{/* Final section break */}
				<div class="section-break">
					<img src={sectionBreak} alt={__("Section Break")}/>
				</div>

			</main>
			
		</div>
	);
}
