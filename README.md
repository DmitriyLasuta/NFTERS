# NFTERS

### Project Description

NFTERS is a web application with a `responsive design`, allowing it to be displayed correctly on various devices and screen resolutions. The project utilizes `SCSS` to simplify and enhance the development process.

### Key Features of the Project

Responsive Design: The application seamlessly adapts to different screen sizes and orientations, providing an optimal user experience on computers, tablets, and mobile phones.

SCSS: SCSS (Sass) is used to write styles in the project. SCSS provides convenient tools like variables, mixins, and nesting, making the process of creating and maintaining styles easier and more efficient.

Here are some examples of mixins used in the project:

```scss
@mixin flexWrap($mainAxis: flex-start, $crossAxis) {
  display: flex;
  justify-content: $mainAxis;
  align-items: $crossAxis;
}

@mixin pseudo($display: block, $pos: absolute, $content: '') {
  content: $content;
  display: $display;
  position: $pos;
}
```

These mixins enable the easy reuse of styles throughout the project, allowing for flexibility and maintainability.

And here are the variables used in the project:

```scss
$primary-bg-color: #fff;
$secondary-bg-color: rgba(217, 224, 236, 0.2);
$primary-text-color: #000;
$additional-color: #3d00b7;
$secondary-text-color: #696969;
$images-border-radius: 12px;
```

Using variables ensures consistent styling and allows for easy customization of colors and other style properties.

Modular Architecture: The project follows a modular architecture, organizing styles into modules for better usage and reusability. Each module contains its own styles, making it easy to add, modify, and remove components as needed.
Feel free to check out the live project at [NFTERS](https://dmitrylasuta.github.io/nfters/) to experience the responsive design and the utilization of SCSS.
