# Code

The Predix UI Code module provides styling for code snippets.

## Dependencies

Predix UI's Code module depends on two other Px modules:

* [px-colors-design](https://github.com/PredixDev/px-colors-design)
* [px-defaults-design](https://github.com/PredixDev/px-defaults-design)

## Installation

Install this module and its dependencies using bower:

    bower install --save px-code-design

Once installed, `@import` into your project's Sass file in its Base layer:

    @import "px-code-design/_base.code.scss";

## Usage

This flag is available and, if needed, should be set to `true` prior to importing the module:

    $inuit-enable-code--inline

The following color variables can be customized:

    $inuit-code-color
    $inuit-code-background
    $inuit-code-border-color

Basic usage of the Code object uses a required class:

    <figure class="code">
      <code>
        &hellip;
      </code>
    </figure>

## Options

Another, optional class can supplement the required base class. This class is available if the variable flag listed above is set to `true`:

* `code--inline`: style for inline code snippets.

view the full API [here](http://predixdev.github.io/px-code-design/)
