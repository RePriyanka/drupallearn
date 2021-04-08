<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* themes/basic/templates/header.html.twig */
class __TwigTemplate_8f4bfd7b2048402c77b23080af2def82f7dea7806cf00c0617b68dab21b5c311 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = [];
        $filters = ["escape" => 16];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                [],
                ['escape'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 1
        echo "<!-- ______________________ HEADER _______________________ -->
<header class=\"page-header fl-fix\">
\t<div class=\"alert\">
\t\t<span class=\"closebtn\" onclick=\"this.parentElement.style.display='none';\">&times;</span>
\t\t<p>Mitigate the Business and Economic impact of COVID-19 Coronavirus with Strategies from Meridian.</p>
\t\t<p><strong><a href=\"/covid-19\">READ OUR LATEST INSIGHTS</a></strong></p>
\t</div>
\t<style>.alert{background-color:#1570b9;color:#fff}.alert a{color:#fff}.alert .closebtn{color:#fff}</style>

\t<div class=\"head-wrapper d-f a-ic jc-sb w100\">
\t\t<button class=\"nav-toggle no-hover\">
\t\t\t<span></span>
\t   </button>
\t\t<div class=\"logo \">
\t\t\t<a href=\"index.html\">
\t\t\t\t<img alt=\"Meridian\" src=\"";
        // line 16
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null)), "html", null, true);
        echo "/themes/basic/images/meridian-logo.png\">
\t\t\t</a>
\t\t</div>
\t\t<div class=\"header-right d-f ai-c  \">
\t\t\t<div class=\"search-box pos-r\">
\t\t\t\t<input placeholder=\"Lorem Ipsum\" type=\"text\">
\t\t\t\t<input type=\"submit\">
\t\t\t</div>
\t\t\t<a href=\"#\" class=\"mob-search-toggle mobile-only\"></a>
\t\t\t<div class=\"lang-box marR30\">
\t\t\t\t<a class=\"lang-link\" href=\"#\">ENG</a>

\t\t\t</div>
\t\t\t<a class=\"btn btn-orange\" href=\"#\">Get in Touch</a>
\t\t</div>
\t</div>

\t<div class=\"page-menu bg-white\">
\t\t<nav class=\"menu\">
\t\t\t<ul>


\t\t\t\t<li class=\"blue\"><a href=\"#\">Business Challenges</a>

\t\t\t\t\t<ul>
\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t<a href=\"#\">
\t\t\t\t\t\t\t\t<div class=\"icon pos-r\">
\t\t\t\t\t\t\t\t\t<span class=\"icon-normal pos-a w100 h100 ai-c jc-c\">
\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-1-hover.svg\">
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t<span class=\"icon-hover pos-a w100 h100 d-f ai-c jc-c\">
\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-1.svg\">
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</span>

\t\t\t\t\t\t\t\t</div>Losing Revenue to Competition</a>
\t\t\t\t\t\t</li>
\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t<a href=\"#\">
\t\t\t\t\t\t\t\t<div class=\"icon pos-r\">
\t\t\t\t\t\t\t\t\t<span class=\"icon-normal pos-a w100 h100 ai-c jc-c\">
\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-white-2-hover.svg\">
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t<span class=\"icon-hover pos-a w100 h100 d-f ai-c jc-c\">
\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-white-2.svg\">
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</span>

\t\t\t\t\t\t\t\t</div>Seen as Cost Center </a>
\t\t\t\t\t\t</li>
\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t<a href=\"#\">
\t\t\t\t\t\t\t\t<div class=\"icon pos-r\">
\t\t\t\t\t\t\t\t\t<span class=\"icon-normal pos-a w100 h100 ai-c jc-c\">
\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-white-3-hover.svg\">
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t<span class=\"icon-hover pos-a w100 h100 d-f ai-c jc-c\">
\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-white-3.svg\">
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</span>

\t\t\t\t\t\t\t\t</div>No Thought Leaders
\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t</li>
\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t<a href=\"#\">
\t\t\t\t\t\t\t\t<div class=\"icon pos-r\">
\t\t\t\t\t\t\t\t\t<span class=\"icon-normal pos-a w100 h100 ai-c jc-c\">
\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-white-4-hover.svg\">
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t<span class=\"icon-hover pos-a w100 h100 d-f ai-c jc-c\">
\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-white-4.svg\">
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</span>

\t\t\t\t\t\t\t\t</div>Environment Exposed to Risk </a>
\t\t\t\t\t\t</li>
\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t<a href=\"#\">
\t\t\t\t\t\t\t\t<div class=\"icon pos-r\">
\t\t\t\t\t\t\t\t\t<span class=\"icon-normal pos-a w100 h100 ai-c jc-c\">
\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-white-5-hover.svg\">
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t<span class=\"icon-hover pos-a w100 h100 d-f ai-c jc-c\">
\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-white-5.svg\">
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</span>

\t\t\t\t\t\t\t\t</div>Not Using Data for Decisions
\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t</li>

\t\t\t\t\t</ul>



\t\t\t\t</li>
\t\t\t\t<li class=\"red\"><a href=\"#\">Technology Challenges</a>
\t\t\t\t\t<ul>
\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t<a href=\"#\">
\t\t\t\t\t\t\t\t<div class=\"icon pos-r\">
\t\t\t\t\t\t\t\t\t<span class=\"icon-normal pos-a w100 h100 ai-c jc-c\">
\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-white-1-hover2.svg\">
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t<span class=\"icon-hover pos-a w100 h100 d-f ai-c jc-c\">
\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-white-1.svg\">
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</span>

\t\t\t\t\t\t\t\t</div>Tight Budget </a>
\t\t\t\t\t\t</li>
\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t<a href=\"#\">
\t\t\t\t\t\t\t\t<div class=\"icon pos-r\">
\t\t\t\t\t\t\t\t\t<span class=\"icon-normal pos-a w100 h100 ai-c jc-c\">
\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-white-7-hover.svg\">
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t<span class=\"icon-hover pos-a w100 h100 d-f ai-c jc-c\">
\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-white-7.svg\">
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</span>

\t\t\t\t\t\t\t\t</div>Seen as Cost Center </a>
\t\t\t\t\t\t</li>
\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t<a href=\"#\">
\t\t\t\t\t\t\t\t<div class=\"icon pos-r\">
\t\t\t\t\t\t\t\t\t<span class=\"icon-normal pos-a w100 h100 ai-c jc-c\">
\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-white-8-hover.svg\">
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t<span class=\"icon-hover pos-a w100 h100 d-f ai-c jc-c\">
\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-white-8.svg\">
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</span>

\t\t\t\t\t\t\t\t</div>Lack of IT Skills </a>
\t\t\t\t\t\t</li>
\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t<a href=\"#\">
\t\t\t\t\t\t\t\t<div class=\"icon pos-r\">
\t\t\t\t\t\t\t\t\t<span class=\"icon-normal pos-a w100 h100 ai-c jc-c\">
\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-white-9-hover.svg\">
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t<span class=\"icon-hover pos-a w100 h100 d-f ai-c jc-c\">
\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-white-9.svg\">
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</span>

\t\t\t\t\t\t\t\t</div>Environment Exposed to Risk </a>
\t\t\t\t\t\t</li>
\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t<a href=\"#\">
\t\t\t\t\t\t\t\t<div class=\"icon pos-r\">
\t\t\t\t\t\t\t\t\t<span class=\"icon-normal pos-a w100 h100 ai-c jc-c\">
\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-white-10-hover.svg\">
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t<span class=\"icon-hover pos-a w100 h100 d-f ai-c jc-c\">
\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-white-10.svg\">
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</span>

\t\t\t\t\t\t\t\t</div>Legacy Systems </a>
\t\t\t\t\t\t</li>

\t\t\t\t\t</ul>


\t\t\t\t</li>
\t\t\t\t<li class=\"blue\"><a href=\"#\">Services </a>
\t\t\t\t\t<ul>
\t\t\t\t\t\t<li><a href=\"http://www.micrositemeridian.com/services/ibm-power\">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIBM Power Cloud
</a></li>
\t\t\t\t\t\t<li><a href=\"http://www.micrositemeridian.com/services/backup-recovery\">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBackup &amp; Recovery
</a></li>
\t\t\t\t\t\t<li><a href=\"http://www.micrositemeridian.com/services/doc\">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDatabase Optimization
</a></li>
\t\t\t\t\t\t<li><a href=\"http://www.micrositemeridian.com/services/maco\">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMaco
</a></li>
\t\t\t\t\t\t<li><a href=\"http://www.micrositemeridian.com/services/sap\">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSAP
</a></li>
\t\t\t\t\t\t<li><a href=\"http://www.micrositemeridian.com/services/hyperconverged\">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tHyperconverged
</a></li>
\t\t\t\t\t\t<li><a href=\"http://www.micrositemeridian.com/services/security\">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSecurity
</a></li>
\t\t\t\t\t\t<li><a href=\"http://www.micrositemeridian.com/services/contact-center\">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tContact Center
</a></li>
\t\t\t\t\t</ul>

\t\t\t\t</li>
\t\t\t\t<li><a href=\"#\">Customer Success</a></li>
\t\t\t\t<li><a href=\"#\">About </a>
\t\t\t\t\t<ul>
\t\t\t\t\t\t<li><a href=\"http://www.micrositemeridian.com/about-us\">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tOverview
</a></li>
\t\t\t\t\t\t<li><a href=\"http://www.micrositemeridian.com/offices\">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tOffices
</a></li>
\t\t\t\t\t\t<li><a href=\"http://www.micrositemeridian.com/our-partners\">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPartners
</a></li>
\t\t\t\t\t\t<li class=\"\"><a href=\"http://www.micrositemeridian.com/careers\">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCareers
</a></li>
\t\t\t\t\t</ul>
\t\t\t\t</li>
\t\t\t\t<li><a href=\"#\">Blog </a></li>



\t\t\t</ul>

\t\t</nav>


\t</div>
</header>
<!-- Header Section-->";
    }

    public function getTemplateName()
    {
        return "themes/basic/templates/header.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  72 => 16,  55 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "themes/basic/templates/header.html.twig", "C:\\wamp64\\www\\drupallearn\\themes\\basic\\templates\\header.html.twig");
    }
}
