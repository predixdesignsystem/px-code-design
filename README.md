# Code

The Code module provides styling for code snippets.

## Demo

You can review Code styles and recommended markup here: https://github.build.ge.com/pages/PXd/px-code-design

## Sass Docs

You can review Sass Documentation here: https://github.build.ge.com/pages/PXd/px-code-design/sassdoc

## Dependencies

Px's Code module depends on two other Px and inuitcss modules:

* [px-colors-design](https://github.build.ge.com/PXd/px-colors-design)
* [px-defaults-design](https://github.build.ge.com/PXd/px-defaults-design)

## Installation

Install this module and its dependencies using bower:

    bower install --save https://github.build.ge.com/PXd/px-code-design.git

Once installed, `@import` into your project's Sass file in its Base layer:

    @import "../px-code-design/base.code";

See [px-getting-started](https://github.build.ge.com/PXd/px-getting-started#a-note-about-relative-import-paths) for an explanation of the `../`

## Import once

All rulesets are wrapped in the following `@if` statement:

    @if import-once('base.code') { ... }

## Usage

These flags are available and, if needed, should be set to `true` prior to importing the module:

    $inuit-enable-code--inline

The following color variables can be customized:

    $inuit-code-color
    $inuit-code-background
    $inuit-code-border-color

Basic usage of the Code object uses the required classes:

    <figure class="code">
      <code>
        &hellip;
      </code>
    </figure>

## Options

Other, optional classes can supplement the required base classes. These classes are available if the variable flags listed above are set to `true`:

* `code--inline`: styles for inline code snippets.
