/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * Provides necessary block editor functionalities like useBlockProps, RichText,
 * InspectorControls, MediaUpload, MediaUploadCheck, etc.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/
 */


/**
 * Import components from WordPress components package, such as PanelBody,
 * Button, and ColorPicker.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-components/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function defines how the block appears and behaves in the editor.
 *
 * @param {Object} props - Properties passed to the block, including attributes and
 * setAttributes function to update the block's state.
 *
 * @return {JSX.Element} - JSX to render in the block editor.
 */
function Edit(props) {
  const {
    attributes,
    setAttributes
  } = props; // Destructure props
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
    backgroundColor
  } = attributes; // Destructure block attributes

  /**
   * Handles changes to the background color attribute.
   *
   * @param {string} newColor - New background color value.
   */
  const handleBackgroundColorChange = newColor => {
    setAttributes({
      backgroundColor: newColor
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)(),
    className: "container",
    style: {
      backgroundColor: backgroundColor
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background Color"),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
    color: backgroundColor,
    onChange: color => handleBackgroundColorChange(color)
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Project-1 Image"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => setAttributes({
      section1Image1: media.url
    }),
    allowedTypes: ["image"],
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open,
      variant: "secondary"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select Project-1 Image"))
  }), section1Image1 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: section1Image1,
    alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Project-1 Image Preview"),
    style: {
      width: "40%",
      marginTop: "10px",
      marginLeft: "30px"
    } // Simple preview styling
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Project-2 Image"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => setAttributes({
      section1Image2: media.url
    }),
    allowedTypes: ["image"],
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open,
      variant: "secondary"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select Project-2 Image"))
  }), section1Image2 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: section1Image2,
    alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Project-2 Image Preview"),
    style: {
      width: "40%",
      marginTop: "10px",
      marginLeft: "30px"
    } // Simple preview styling
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Project-3 Image"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => setAttributes({
      section1Image3: media.url
    }),
    allowedTypes: ["image"],
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open,
      variant: "secondary"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select Project-3 Image"))
  }), section1Image3 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: section1Image3,
    alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Project-3 Image Preview"),
    style: {
      width: "40%",
      marginTop: "10px",
      marginLeft: "30px"
    } // Simple preview styling
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("User-1 Image"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => setAttributes({
      section2Image1: media.url
    }),
    allowedTypes: ["image"],
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open,
      variant: "secondary"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select User-1 Image"))
  }), section2Image1 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: section2Image1,
    alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("User-1 Image Preview"),
    style: {
      width: "40%",
      marginTop: "10px",
      marginLeft: "30px"
    } // Simple preview styling
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("User-2 Image"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => setAttributes({
      section2Image2: media.url
    }),
    allowedTypes: ["image"],
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open,
      variant: "secondary"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select User-2 Image"))
  }), section2Image2 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: section2Image2,
    alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("User-2 Image Preview"),
    style: {
      width: "40%",
      marginTop: "10px",
      marginLeft: "30px"
    } // Simple preview styling
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("User-3 Image"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => setAttributes({
      section2Image3: media.url
    }),
    allowedTypes: ["image"],
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open,
      variant: "secondary"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select User-3 Image"))
  }), section2Image3 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: section2Image3,
    alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("User-3 Image Preview"),
    style: {
      width: "40%",
      marginTop: "10px",
      marginLeft: "30px"
    } // Simple preview styling
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("main", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: "container__section"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container__header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: "container__subtitle",
    value: section1SubTitle,
    onChange: newSection1SubTitle => setAttributes({
      section1SubTitle: newSection1SubTitle
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Section 1 Subtitle")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: "container__title",
    value: section1Title,
    onChange: newSection1Title => setAttributes({
      section1Title: newSection1Title
    }),
    placeholder: "Section 1 Title"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: "container__description",
    value: section1Description,
    onChange: newSection1Description => setAttributes({
      section1Description: newSection1Description
    }),
    placeholder: "Section 1 Description"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "image-row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "image-card"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: section1Image1,
    alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Project 1")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: "card-title",
    value: section1Image1Title,
    onChange: newSection1Image1Title => setAttributes({
      section1Image1Title: newSection1Image1Title
    }),
    placeholder: "Section 1 Description"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: "card-subtitle",
    value: section1Image1SubTitle,
    onChange: newSection1Image1SubTitle => setAttributes({
      section1Image1SubTitle: newSection1Image1SubTitle
    }),
    placeholder: "Section 1 Description"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: "card-description",
    value: section1Image1Description,
    onChange: newSection1Image1Description => setAttributes({
      section1Image1Description: newSection1Image1Description
    }),
    placeholder: "Section 1 Description"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "image-card"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: section1Image2,
    alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Project 2")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: "card-title",
    value: section1Image2Title,
    onChange: newSection1Image2Title => setAttributes({
      section1Image2Title: newSection1Image2Title
    }),
    placeholder: "Section 1 Description"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: "card-subtitle",
    value: section1Image2SubTitle,
    onChange: newSection1Image2SubTitle => setAttributes({
      section1Image2SubTitle: newSection1Image2SubTitle
    }),
    placeholder: "Section 1 Description"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: "card-description",
    value: section1Image2Description,
    onChange: newSection1Image2Description => setAttributes({
      section1Image2Description: newSection1Image2Description
    }),
    placeholder: "Section 1 Description"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "image-card"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: section1Image3,
    alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Project 3")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: "card-title",
    value: section1Image3Title,
    onChange: newSection1Image3Title => setAttributes({
      section1Image3Title: newSection1Image3Title
    }),
    placeholder: "Section 1 Description"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: "card-subtitle",
    value: section1Image3SubTitle,
    onChange: newSection1Image3SubTitle => setAttributes({
      section1Image3SubTitle: newSection1Image3SubTitle
    }),
    placeholder: "Section 1 Description"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: "card-description",
    value: section1Image3Description,
    onChange: newSection1Image3Description => setAttributes({
      section1Image3Description: newSection1Image3Description
    }),
    placeholder: "Section 1 Description"
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "section-break"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: sectionBreak,
    alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Section Break")
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: "container__section"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container__header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: "container__subtitle",
    value: section2SubTitle,
    onChange: newSection2SubTitle => setAttributes({
      section2SubTitle: newSection2SubTitle
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Section 1 Subtitle")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: "container__title",
    value: section2Title,
    onChange: newSection2Title => setAttributes({
      section2Title: newSection2Title
    }),
    placeholder: "Section 1 Title"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: "container__description",
    value: section2Description,
    onChange: newSection2Description => setAttributes({
      section2Description: newSection2Description
    }),
    placeholder: "Section 1 Description"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "image-row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "image-card"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: section2Image1,
    alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("User 1")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "social-bar"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: socialImages,
    alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Social icons")
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: "card-title",
    value: section2Image1Title,
    onChange: newSection2Image1Title => setAttributes({
      section2Image1Title: newSection2Image1Title
    }),
    placeholder: "Section 1 Description"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: "card-subtitle",
    value: section2Image1SubTitle,
    onChange: newSection2Image1SubTitle => setAttributes({
      section2Image1SubTitle: newSection2Image1SubTitle
    }),
    placeholder: "Section 1 Description"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: "card-description",
    value: section2Image1Description,
    onChange: newSection2Image1Description => setAttributes({
      section2Image1Description: newSection2Image1Description
    }),
    placeholder: "Section 1 Description"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "image-card"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: section2Image2,
    alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("User 2")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "social-bar"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: socialImages,
    alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Social icons")
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: "card-title",
    value: section2Image2Title,
    onChange: newSection2Image2Title => setAttributes({
      section2Image2Title: newSection2Image2Title
    }),
    placeholder: "Section 1 Description"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: "card-subtitle",
    value: section2Image2SubTitle,
    onChange: newSection2Image2SubTitle => setAttributes({
      section2Image2SubTitle: newSection2Image2SubTitle
    }),
    placeholder: "Section 1 Description"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: "card-description",
    value: section2Image2Description,
    onChange: newSection2Image2Description => setAttributes({
      section2Image2Description: newSection2Image2Description
    }),
    placeholder: "Section 1 Description"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "image-card"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: section2Image3,
    alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("User 3")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "social-bar"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: socialImages,
    alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Social icons")
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: "card-title",
    value: section2Image3Title,
    onChange: newSection2Image3Title => setAttributes({
      section2Image3Title: newSection2Image3Title
    }),
    placeholder: "Section 1 Description"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: "card-subtitle",
    value: section2Image3SubTitle,
    onChange: newSection2Image3SubTitle => setAttributes({
      section2Image3SubTitle: newSection2Image3SubTitle
    }),
    placeholder: "Section 1 Description"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: "card-description",
    value: section2Image3Description,
    onChange: newSection2Image3Description => setAttributes({
      section2Image3Description: newSection2Image3Description
    }),
    placeholder: "Section 1 Description"
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "section-break"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: sectionBreak,
    alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Section Break")
  }))));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Dynamic plugin URL provided by PHP
 * This is used to get a relative path to the plugin assets
 */
const PLUGIN_URL = ReusableStaticBlockData.pluginUrl;

/**
 * Define the block attributes and their default values.
 * Attributes represent the state data that is stored with the block content.
 */
const blockAttributes = {
  section1SubTitle: {
    type: 'string',
    // Data type for this attribute
    default: 'our work' // Default value
  },
  section1Title: {
    type: 'string',
    default: 'Finished Project'
  },
  section1Description: {
    type: 'string',
    default: 'Passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don`t look even slightly believable. If you are going to use a passage of Lorem Ipsum. you need to be sure.'
  },
  section1Image1: {
    type: 'string',
    default: `${PLUGIN_URL}/assets/image-1.jpg`
  },
  section1Image1Title: {
    type: 'string',
    default: 'Uses a dictionary'
  },
  section1Image1SubTitle: {
    type: 'string',
    default: 'Look words which'
  },
  section1Image1Description: {
    type: 'string',
    default: 'Passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.'
  },
  section1Image2: {
    type: 'string',
    default: `${PLUGIN_URL}/assets/image-2.jpg`
  },
  section1Image2Title: {
    type: 'string',
    default: 'Randomised Words'
  },
  section1Image2SubTitle: {
    type: 'string',
    default: 'Words which don'
  },
  section1Image2Description: {
    type: 'string',
    default: 'Lorem Ipsum available, but theajority have suffered alteration in some form, by injected humour.'
  },
  section1Image3: {
    type: 'string',
    default: `${PLUGIN_URL}/assets/image-3.jpg`
  },
  section1Image3Title: {
    type: 'string',
    default: 'Suffered Alteration'
  },
  section1Image3SubTitle: {
    type: 'string',
    default: 'Don`t look words which'
  },
  section1Image3Description: {
    type: 'string',
    default: 'Suffered alteration in some form, by injected humour, or randomised words which don`t look alteration in some form.'
  },
  // (Repeat similar blocks for section-2)
  section2SubTitle: {
    type: 'string',
    default: 'our team'
  },
  section2Title: {
    type: 'string',
    default: 'Excellent Expert Advisor'
  },
  section2Description: {
    type: 'string',
    default: 'Passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don`t look even slightly believable. If you are going to use a passage of Lorem Ipsum. you need to be sure.'
  },
  section2Image1: {
    type: 'string',
    default: `${PLUGIN_URL}/assets/image-4.jpg`
  },
  section2Image1Title: {
    type: 'string',
    default: 'Dr. Danial'
  },
  section2Image1SubTitle: {
    type: 'string',
    default: 'Slightly believable'
  },
  section2Image1Description: {
    type: 'string',
    default: 'Passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.'
  },
  section2Image2: {
    type: 'string',
    default: `${PLUGIN_URL}/assets/image-5.jpg`
  },
  section2Image2Title: {
    type: 'string',
    default: 'Dan O`Brien'
  },
  section2Image2SubTitle: {
    type: 'string',
    default: 'Words which don`t look'
  },
  section2Image2Description: {
    type: 'string',
    default: 'Lorem Ipsum available, but theajority have suffered alteration in some form, by injected humour.'
  },
  section2Image3: {
    type: 'string',
    default: `${PLUGIN_URL}/assets/image-6.jpg`
  },
  section2Image3Title: {
    type: 'string',
    default: 'Amanda Seyfried'
  },
  section2Image3SubTitle: {
    type: 'string',
    default: 'randomised words'
  },
  section2Image3Description: {
    type: 'string',
    default: 'Suffered alteration in some form, by injected humour, or randomised words which don`t look alteration in some form.x'
  },
  // (Additional attributes for common)
  socialImages: {
    type: 'string',
    default: `${PLUGIN_URL}/assets/socials.png`
  },
  sectionBreak: {
    type: 'string',
    default: `${PLUGIN_URL}/assets/section-break.png`
  },
  backgroundColor: {
    type: 'string',
    default: '#ffffff' // Default background color (white)
  }
};

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  attributes: blockAttributes,
  // The block attributes defined above
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The `save` function defines the block's structure for the front-end. This represents
 * what is rendered when the block is displayed in a post or page.
 *
 * @param {Object} attributes - Block attributes passed to the function.
 *
 * @return {JSX.Element} - JSX to render the block content on the front-end.
 */
function Save({
  attributes
}) {
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
    backgroundColor
  } = attributes; // Destructure the block attributes

  // Render the block content for the front-end
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(),
    className: "container",
    style: {
      backgroundColor
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("main", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: "container__section"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container__header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "div",
    className: "container__subtitle",
    value: section1SubTitle
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "div",
    className: "container__title",
    value: section1Title
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "div",
    className: "container__description",
    value: section1Description
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "image-row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "image-card"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: section1Image1,
    alt: "Project 1"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "div",
    className: "card-title",
    value: section1Image1Title
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "div",
    className: "card-subtitle",
    value: section1Image1SubTitle
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "div",
    className: "card-description",
    value: section1Image1Description
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "image-card"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: section1Image2,
    alt: "Project 2"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "div",
    className: "card-title",
    value: section1Image2Title
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "div",
    className: "card-subtitle",
    value: section1Image2SubTitle
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "div",
    className: "card-description",
    value: section1Image2Description
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "image-card"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: section1Image3,
    alt: "Project 3"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "div",
    className: "card-title",
    value: section1Image3Title
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "div",
    className: "card-subtitle",
    value: section1Image3SubTitle
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "div",
    className: "card-description",
    value: section1Image3Description
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "section-break"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: sectionBreak,
    alt: "Section Break"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: "container__section"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container__header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "div",
    className: "container__subtitle",
    value: section2SubTitle
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "div",
    className: "container__title",
    value: section2Title
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "div",
    className: "container__description",
    value: section2Description
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "image-row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "image-card"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: section2Image1,
    alt: "User 1"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "social-bar"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: socialImages,
    alt: "Social icons"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "div",
    className: "card-title",
    value: section2Image1Title
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "div",
    className: "card-subtitle",
    value: section2Image1SubTitle
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "div",
    className: "card-description",
    value: section2Image1Description
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "image-card"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: section2Image2,
    alt: "User 2"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "social-bar"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: socialImages,
    alt: "Social icons"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "div",
    className: "card-title",
    value: section2Image2Title
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "div",
    className: "card-subtitle",
    value: section2Image2SubTitle
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "div",
    className: "card-description",
    value: section2Image2Description
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "image-card"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: section2Image3,
    alt: "User 3"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "social-bar"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: socialImages,
    alt: "Social icons"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "div",
    className: "card-title",
    value: section2Image3Title
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "div",
    className: "card-subtitle",
    value: section2Image3SubTitle
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "div",
    className: "card-description",
    value: section2Image3Description
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "section-break"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: sectionBreak,
    alt: "Section Break"
  }))));
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/reusable-static-block","version":"0.1.0","title":"Reusable Static Block","category":"common","icon":"excerpt-view","description":"A reusable static block that will achieve the `Finished Projects` and `Our Team` sections functionality and layout with fully customizable from backend UI.","example":{},"supports":{"html":false},"textdomain":"reusable-static-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkreusable_static_block"] = globalThis["webpackChunkreusable_static_block"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map