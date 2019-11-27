/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* Common imports */
/* Common demo imports */
/* Demo DOM module */
/* 6: Handle selectedOptions, update demo */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-sass-doc/px-sass-doc.js';
import '../css/px-code-design-demo-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
  <!-- 0: Import the styles-->
  <style include="px-code-design-demo-styles" is="custom-style"></style>

<!-- 1: Describe Module -->
<px-sass-doc module-name="px-code-design" description="The Predix UI Code module provides styling for block and inline code snippets." layer="base" sassdoc-path="sassdoc.json" dependencies="[
    &quot;https://github.com/PredixDev/px-forms-design&quot;,
    &quot;https://github.com/PredixDev/px-colors-design&quot;
  ]" selected-options="{{selectedOptions}}" tabs="[&quot;Default&quot;,&quot;Inline&quot;]" selected-tab="{{selectedTab}}">

<!-- FOR 'DEFAULT' TAB -->
<template is="dom-if" if="[[_tabIs('Default',selectedTab)]]" restamp="">

<section slot="demo-html">

<figure class="code">
  <code>
    &lt;h1&gt;Heading 1&lt;/h1&gt;
    <br>
    &lt;p&gt;Paragraph&lt;/p&gt;
    <br>
    &lt;ol&gt;
    <br>
    &nbsp;&nbsp;&lt;li&gt;Ordered List Item&lt;/li&gt;
    <br>
    &nbsp;&nbsp;&lt;li&gt;Ordered List Item&lt;/li&gt;
    <br>
    &lt;/ol&gt;
  </code>
</figure>
</section>

<section slot="import">
@import 'px-code-design/_base.code.scss';
</section>

</template>

<!-- FOR 'OTHER' TAB -->
<template is="dom-if" if="[[_tabIs('Inline',selectedTab)]]" restamp="">

<section slot="demo-html">

Flag must be set before <code class="code code--inline">@import</code> in component Sass file.

</section>

<section slot="import">
\$inuit-enable-code--inline  : true;
@import 'px-code-design/_base.code.scss';
</section>

</template>


<!-- 5: Set Usage HTML -->
<section slot="usage">
Use the following HTML to set up your project:
\`\`\`
<!-- Code Block -->
<figure class="code">
  <code>
    …
  </code>
</figure>


<!-- Code Inline -->
<code class="code code--inline">…</code>

\`\`\`
</section>

</px-sass-doc>
`,

  is: 'px-code-design-demo',

  _tabIs : function(tabName) {
    var selected = this.selectedTab || "";
    return selected === tabName;
  }
});
