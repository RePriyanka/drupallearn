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

/* themes/basic/templates/content.html.twig */
class __TwigTemplate_79c8f57fdf41f0949b01f73e917537b5c71a00a9618e59409d8bcb6e22797a5e extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = [];
        $filters = ["escape" => 5];
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
        echo "<div class=\"main fl-fix \">
<section class=\"home-banner fl-fix w100 h100 pos-r\">
\t<div class=\"home-slider\">
\t\t<div class=\"item pos-r w100\">
\t\t\t<figure class=\"image-box bgp-rc bgsz-cv bgr-n w100 desktop-only\" style=\"background-image: url(";
        // line 5
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null)), "html", null, true);
        echo "/themes/basic/images/home-banner.jpg);\"> </figure>
\t\t\t<figure class=\"image-box bgp-cc bgsz-cv bgr-n w100 mobile-only\" style=\"background-image: url(";
        // line 6
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null)), "html", null, true);
        echo "/themes/basic/images/home-banner-mobile.jpg);\"> </figure>

\t\t\t<div class=\"banner-content w100 h100 ta-c pos-a d-f ai-c \">
\t\t\t\t<div class=\"small-wrapper \">
\t\t\t\t\t<h1 class=\"h1 title\">Let us transform your next challenge into your next promotion.</h1>
\t\t\t\t\t<div class=\"actions d-f ai-c jc-sb\">

\t\t\t\t\t\t<a class=\"btn btn-large\" href=\"#business\">
\t\t\t\t\t\t\t\tBusiness Challenges

\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t<a class=\"btn btn-blue2 btn-large\" href=\"#technology\">
\t\t\t\t\t\t\t\tTechnology Challenges

\t\t\t\t\t\t\t</a>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t</div>
\t\t</div>
\t\t<div class=\"item pos-r w100\">

\t\t\t<figure class=\"image-box bgp-rc bgsz-cv bgr-n w100 desktop-only\" style=\"background-image: url(";
        // line 27
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null)), "html", null, true);
        echo "/themes/basic/images/home-banner.jpg);\"> </figure>
\t\t\t<figure class=\"image-box bgp-cc bgsz-cv bgr-n w100 mobile-only\" style=\"background-image: url(";
        // line 28
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null)), "html", null, true);
        echo "/themes/basic/images/home-banner-mobile.jpg);\"> </figure>


\t\t\t<div class=\"banner-content w100 h100 ta-c pos-a d-f ai-c \">
\t\t\t\t<div class=\"small-wrapper \">
\t\t\t\t\t<h1 class=\"h1 ff-Roboto-Bold title\">Let’s zoom out from
\t\t\t\t\t\t<br> problems to challenges.</h1>
\t\t\t\t\t<div class=\"content\">
\t\t\t\t\t\t<p>It’s time to shift perspective to challenge the status quo.</p>

\t\t\t\t\t</div>

\t\t\t\t\t<div class=\"actions d-f ai-c jc-sb\">

\t\t\t\t\t\t<a class=\"btn btn-large\" href=\"#business\">
\t\t\t\t\t\t\t\tBusiness Challenges

\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t<a class=\"btn btn-blue2 btn-large\" href=\"#technology\">
\t\t\t\t\t\t\t\tTechnology Challenges

\t\t\t\t\t\t\t</a>

\t\t\t\t\t</div>
\t\t\t\t</div>

\t\t\t</div>

\t\t</div>

\t</div>
\t<a href=\"#\" class=\"down-arrow blue\"></a>
</section>
<!-- Home Banner -->


<section class=\"fake-section section snap-section fl-fix\"></section>
<section class=\"home-section snap-section  pos-r ov-h  fl-fix\">
\t<div class=\"circle-wrap pos-r ov-h\">
\t\t<div class=\"circle pos-a\"></div>

\t</div>






\t<section class=\"fl-fix home-tabs\">
\t\t<section class=\"services-tabs fl-fix ov-h\">

\t\t\t<div class=\"tab-list  marB70 to-load\">
\t\t\t\t<div class=\"inner-wrapper\">
\t\t\t\t\t<ul class=\"w100  d-f jc-c ff-Roboto-Medium\">
\t\t\t\t\t\t<li class=\"item  active c-blue\" id=\"business\">Business Challenges</li>
\t\t\t\t\t\t<li class=\"item c-blue2\" id=\"technology\">Technology Challenges</li>
\t\t\t\t\t\t<li class=\"item c-blue2\" id=\"technology\">Technology Challenges</li>

\t\t\t\t\t</ul>
\t\t\t\t</div>


\t\t\t</div>
\t\t\t<div class=\"fl-fix\">
\t\t\t\t<div class=\"tab-content-box fl-fix\">
\t\t\t\t\t<div class=\"tab-content jp-page-items2\">
\t\t\t\t\t\t<div class=\"inner-wrapper\">
\t\t\t\t\t\t\t<ul class=\"services-blocks d-f fxw-w\">
\t\t\t\t\t\t\t\t<li class=\"item to-load\">
\t\t\t\t\t\t\t\t\t<a class=\"box  c-white d-f jc-sb\" href=\"#\">
\t\t\t\t\t\t\t\t\t\t<span class=\"bg-block bg-blue\"></span>
\t\t\t\t\t\t\t\t\t\t<div class=\"w60\">
\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"h4\">Losing Revenue to Competition</h4>
\t\t\t\t\t\t\t\t\t\t\t<p>Get a competitive edge with no compromises.</p>
\t\t\t\t\t\t\t\t\t\t\t<span class=\"learn-more pos-a\">Learn More
\t\t\t\t\t\t\t\t\t\t</span>

\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t<div class=\"w20 ta-r\">
\t\t\t\t\t\t\t\t\t\t\t<div class=\"icon pos-r\">
\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-normal pos-a w100 h100 ai-c jc-c\">

\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-1.svg\">
\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-hover pos-a w100 h100 d-f ai-c jc-c\">

\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-1-hover.svg\">
\t\t\t\t\t\t\t\t\t\t\t</span>

\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t\t<li class=\"item to-load\">
\t\t\t\t\t\t\t\t\t<a class=\"box  c-white d-f jc-sb\" href=\"#\">
\t\t\t\t\t\t\t\t\t\t<span class=\"bg-block bg-blue\"></span>
\t\t\t\t\t\t\t\t\t\t<div class=\"w60\">
\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"h4\">Seen as Cost Center
\t\t\t\t\t\t\t\t\t\t\t</h4>

\t\t\t\t\t\t\t\t\t\t\t<p>A plan and a partner to execute for the future</p>
\t\t\t\t\t\t\t\t\t\t\t<span class=\"learn-more pos-a\">Learn More
\t\t\t\t\t\t\t\t\t\t</span>

\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t<div class=\"w20 ta-r\">

\t\t\t\t\t\t\t\t\t\t\t<div class=\"icon pos-r\">
\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-normal pos-a w100 h100 ai-c jc-c\">

\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-white-2.svg\">
\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-hover pos-a w100 h100 d-f ai-c jc-c\">

\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-white-2-hover.svg\">
\t\t\t\t\t\t\t\t\t\t\t</span>

\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t\t<li class=\"item to-load\">
\t\t\t\t\t\t\t\t\t<a class=\"box  c-white d-f jc-sb\" href=\"#\">
\t\t\t\t\t\t\t\t\t\t<span class=\"bg-block bg-blue\"></span>
\t\t\t\t\t\t\t\t\t\t<div class=\"w60\">
\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"h4\">No Thought Leaders
\t\t\t\t\t\t\t\t\t\t\t</h4>
\t\t\t\t\t\t\t\t\t\t\t<p>Access to thought leaders to build a business strategy.</p>
\t\t\t\t\t\t\t\t\t\t\t<span class=\"learn-more pos-a\">Learn More
\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t<div class=\"w20 ta-r\">

\t\t\t\t\t\t\t\t\t\t\t<div class=\"icon pos-r\">
\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-normal pos-a w100 h100 ai-c jc-c\">

\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-white-3.svg\">
\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-hover pos-a w100 h100 d-f ai-c jc-c\">

\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-white-3-hover.svg\">
\t\t\t\t\t\t\t\t\t\t\t</span>

\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t</li>


\t\t\t\t\t\t\t\t<li class=\"item to-load\">
\t\t\t\t\t\t\t\t\t<a class=\"box  c-white d-f jc-sb\" href=\"#\">
\t\t\t\t\t\t\t\t\t\t<span class=\"bg-block bg-blue\"></span>
\t\t\t\t\t\t\t\t\t\t<div class=\"w60\">
\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"h4\">Environment Exposed to Risk</h4>
\t\t\t\t\t\t\t\t\t\t\t<p>Absolute confidence about protection for your data.</p>
\t\t\t\t\t\t\t\t\t\t\t<span class=\"learn-more pos-a\">Learn More
\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t<div class=\"w20 ta-r\">

\t\t\t\t\t\t\t\t\t\t\t<div class=\"icon pos-r\">
\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-normal pos-a w100 h100 ai-c jc-c\">

\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-white-4.svg\">
\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-hover pos-a w100 h100 d-f ai-c jc-c\">

\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-white-4-hover.svg\">
\t\t\t\t\t\t\t\t\t\t\t</span>

\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t</li>


\t\t\t\t\t\t\t\t<li class=\"item to-load\">
\t\t\t\t\t\t\t\t\t<a class=\"box  c-white d-f jc-sb\" href=\"#\">
\t\t\t\t\t\t\t\t\t\t<span class=\"bg-block bg-blue\"></span>
\t\t\t\t\t\t\t\t\t\t<div class=\"w60\">
\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"h4\">Not Using Data for Decisions
\t\t\t\t\t\t\t\t\t\t\t</h4>
\t\t\t\t\t\t\t\t\t\t\t<p>Get the insights you need for better business decisions.</p>
\t\t\t\t\t\t\t\t\t\t\t<span class=\"learn-more pos-a\">Learn More
\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t<div class=\"w20 ta-r\">

\t\t\t\t\t\t\t\t\t\t\t<div class=\"icon pos-r\">
\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-normal pos-a w100 h100 ai-c jc-c\">

\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-white-5.svg\">
\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-hover pos-a w100 h100 d-f ai-c jc-c\">

\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-white-5-hover.svg\">
\t\t\t\t\t\t\t\t\t\t\t</span>

\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t</li>

\t\t\t\t\t\t\t\t<li class=\"item to-load\">
\t\t\t\t\t\t\t\t\t<div class=\"last-box ta-c d-f ai-c jc-c fxd-c w100\">
\t\t\t\t\t\t\t\t\t\t<h4 class=\"ff-Roboto-Regular\">Have a more<br> specific challenge?</h4>
\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-orange\">GET IN TOUCH</a>

\t\t\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t</ul>

\t\t\t\t\t\t</div>


\t\t\t\t\t</div>
\t\t\t\t\t<div class=\"tab-content jp-page-items2\">
\t\t\t\t\t\t<div class=\"inner-wrapper\">
\t\t\t\t\t\t\t<ul class=\"services-blocks d-f fxw-w\">
\t\t\t\t\t\t\t\t<li class=\"item to-load\">
\t\t\t\t\t\t\t\t\t<a class=\"box  c-white d-f jc-sb\" href=\"#\">
\t\t\t\t\t\t\t\t\t\t<span class=\"bg-block bg-blue\"></span>
\t\t\t\t\t\t\t\t\t\t<div class=\"w60\">
\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"h4\">Losing Revenue to Competition</h4>
\t\t\t\t\t\t\t\t\t\t\t<p>Get a competitive edge with no compromises.</p>
\t\t\t\t\t\t\t\t\t\t\t<span class=\"learn-more pos-a\">Learn More
\t\t\t\t\t\t\t\t\t\t</span>

\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t<div class=\"w20 ta-r\">
\t\t\t\t\t\t\t\t\t\t\t<div class=\"icon pos-r\">
\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-normal pos-a w100 h100 ai-c jc-c\">

\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-1.svg\">
\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-hover pos-a w100 h100 d-f ai-c jc-c\">

\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-1-hover.svg\">
\t\t\t\t\t\t\t\t\t\t\t</span>

\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t\t<li class=\"item to-load\">
\t\t\t\t\t\t\t\t\t<a class=\"box  c-white d-f jc-sb\" href=\"#\">
\t\t\t\t\t\t\t\t\t\t<span class=\"bg-block bg-blue\"></span>
\t\t\t\t\t\t\t\t\t\t<div class=\"w60\">
\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"h4\">Seen as Cost Center
\t\t\t\t\t\t\t\t\t\t\t</h4>

\t\t\t\t\t\t\t\t\t\t\t<p>A plan and a partner to execute for the future</p>
\t\t\t\t\t\t\t\t\t\t\t<span class=\"learn-more pos-a\">Learn More
\t\t\t\t\t\t\t\t\t\t</span>

\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t<div class=\"w20 ta-r\">

\t\t\t\t\t\t\t\t\t\t\t<div class=\"icon pos-r\">
\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-normal pos-a w100 h100 ai-c jc-c\">

\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-white-2.svg\">
\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-hover pos-a w100 h100 d-f ai-c jc-c\">

\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-white-2-hover.svg\">
\t\t\t\t\t\t\t\t\t\t\t</span>

\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t\t<li class=\"item to-load\">
\t\t\t\t\t\t\t\t\t<a class=\"box  c-white d-f jc-sb\" href=\"#\">
\t\t\t\t\t\t\t\t\t\t<span class=\"bg-block bg-blue\"></span>
\t\t\t\t\t\t\t\t\t\t<div class=\"w60\">
\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"h4\">No Thought Leaders
\t\t\t\t\t\t\t\t\t\t\t</h4>
\t\t\t\t\t\t\t\t\t\t\t<p>Access to thought leaders to build a business strategy.</p>
\t\t\t\t\t\t\t\t\t\t\t<span class=\"learn-more pos-a\">Learn More
\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t<div class=\"w20 ta-r\">

\t\t\t\t\t\t\t\t\t\t\t<div class=\"icon pos-r\">
\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-normal pos-a w100 h100 ai-c jc-c\">

\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-white-3.svg\">
\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-hover pos-a w100 h100 d-f ai-c jc-c\">

\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-white-3-hover.svg\">
\t\t\t\t\t\t\t\t\t\t\t</span>

\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t</li>


\t\t\t\t\t\t\t\t<li class=\"item to-load\">
\t\t\t\t\t\t\t\t\t<a class=\"box  c-white d-f jc-sb\" href=\"#\">
\t\t\t\t\t\t\t\t\t\t<span class=\"bg-block bg-blue\"></span>
\t\t\t\t\t\t\t\t\t\t<div class=\"w60\">
\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"h4\">Environment Exposed to Risk</h4>
\t\t\t\t\t\t\t\t\t\t\t<p>Absolute confidence about protection for your data.</p>
\t\t\t\t\t\t\t\t\t\t\t<span class=\"learn-more pos-a\">Learn More
\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t<div class=\"w20 ta-r\">

\t\t\t\t\t\t\t\t\t\t\t<div class=\"icon pos-r\">
\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-normal pos-a w100 h100 ai-c jc-c\">

\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-white-4.svg\">
\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-hover pos-a w100 h100 d-f ai-c jc-c\">

\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-white-4-hover.svg\">
\t\t\t\t\t\t\t\t\t\t\t</span>

\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t</li>


\t\t\t\t\t\t\t\t<li class=\"item to-load\">
\t\t\t\t\t\t\t\t\t<a class=\"box  c-white d-f jc-sb\" href=\"#\">
\t\t\t\t\t\t\t\t\t\t<span class=\"bg-block bg-blue\"></span>
\t\t\t\t\t\t\t\t\t\t<div class=\"w60\">
\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"h4\">Not Using Data for Decisions
\t\t\t\t\t\t\t\t\t\t\t</h4>
\t\t\t\t\t\t\t\t\t\t\t<p>Get the insights you need for better business decisions.</p>
\t\t\t\t\t\t\t\t\t\t\t<span class=\"learn-more pos-a\">Learn More
\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t<div class=\"w20 ta-r\">

\t\t\t\t\t\t\t\t\t\t\t<div class=\"icon pos-r\">
\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-normal pos-a w100 h100 ai-c jc-c\">

\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-white-5.svg\">
\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-hover pos-a w100 h100 d-f ai-c jc-c\">

\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-white-5-hover.svg\">
\t\t\t\t\t\t\t\t\t\t\t</span>

\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t</li>

\t\t\t\t\t\t\t\t<li class=\"item to-load\">
\t\t\t\t\t\t\t\t\t<div class=\"last-box ta-c d-f ai-c jc-c fxd-c w100\">
\t\t\t\t\t\t\t\t\t\t<h4 class=\"ff-Roboto-Regular\">Have a more<br> specific challenge?</h4>
\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-orange\">GET IN TOUCH</a>

\t\t\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t</ul>

\t\t\t\t\t\t</div>


\t\t\t\t\t</div>
\t\t\t\t\t<div class=\"tab-content jp-page-items2\">
\t\t\t\t\t\t<div class=\"inner-wrapper\">
\t\t\t\t\t\t\t<ul class=\"services-blocks d-f fxw-w\">
\t\t\t\t\t\t\t\t<li class=\"item to-load\">
\t\t\t\t\t\t\t\t\t<a class=\"box  c-white d-f jc-sb\" href=\"#\">
\t\t\t\t\t\t\t\t\t\t<span class=\"bg-block bg-blue2\"></span>
\t\t\t\t\t\t\t\t\t\t<div class=\"w60\">
\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"h4\">Tight Budget</h4>
\t\t\t\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet consectetur adipisng elit.</p>
\t\t\t\t\t\t\t\t\t\t\t<span class=\"learn-more pos-a\">Learn More
\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t<div class=\"w20 ta-r\">

\t\t\t\t\t\t\t\t\t\t\t<div class=\"icon pos-r\">
\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-normal pos-a w100 h100 ai-c jc-c\">

\t\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-white-1.svg\">
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-hover pos-a w100 h100 d-f ai-c jc-c\">

\t\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-white-1-hover2.svg\">
\t\t\t\t\t\t\t\t\t\t\t\t</span>

\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t\t<li class=\"item to-load\">
\t\t\t\t\t\t\t\t\t<a class=\"box  c-white d-f jc-sb\" href=\"#\">
\t\t\t\t\t\t\t\t\t\t<span class=\"bg-block bg-blue2\"></span>
\t\t\t\t\t\t\t\t\t\t<div class=\"w60\">
\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"h4\">I don’t have thought leaders to build business strategy
\t\t\t\t\t\t\t\t\t\t\t</h4>
\t\t\t\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet consectetur adipisng elit.</p>
\t\t\t\t\t\t\t\t\t\t\t<span class=\"learn-more pos-a\">Learn More
\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t<div class=\"w20 ta-r\">

\t\t\t\t\t\t\t\t\t\t\t<div class=\"icon pos-r\">
\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-normal pos-a w100 h100 ai-c jc-c\">

\t\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-white-7.svg\">
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-hover pos-a w100 h100 d-f ai-c jc-c\">

\t\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-white-7-hover.svg\">
\t\t\t\t\t\t\t\t\t\t\t\t</span>

\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t\t<li class=\"item to-load\">
\t\t\t\t\t\t\t\t\t<a class=\"box  c-white d-f jc-sb\" href=\"#\">
\t\t\t\t\t\t\t\t\t\t<span class=\"bg-block bg-blue2\"></span>
\t\t\t\t\t\t\t\t\t\t<div class=\"w60\">
\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"h4\">Lack of IT Skills
\t\t\t\t\t\t\t\t\t\t\t</h4>
\t\t\t\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet consectetur adipisng elit.</p>
\t\t\t\t\t\t\t\t\t\t\t<span class=\"learn-more pos-a\">Learn More
\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t<div class=\"w20 ta-r\">

\t\t\t\t\t\t\t\t\t\t\t<div class=\"icon pos-r\">
\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-normal pos-a w100 h100 ai-c jc-c\">

\t\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-white-8.svg\">
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-hover pos-a w100 h100 d-f ai-c jc-c\">

\t\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-white-8-hover.svg\">
\t\t\t\t\t\t\t\t\t\t\t\t</span>

\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t</li>


\t\t\t\t\t\t\t\t<li class=\"item to-load\">
\t\t\t\t\t\t\t\t\t<a class=\"box   c-white d-f jc-sb\" href=\"#\">
\t\t\t\t\t\t\t\t\t\t<span class=\"bg-block bg-blue2\"></span>
\t\t\t\t\t\t\t\t\t\t<div class=\"w60\">
\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"h4\">Environment Exposed to Risk</h4>
\t\t\t\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet consectetur adipisng elit.</p>
\t\t\t\t\t\t\t\t\t\t\t<span class=\"learn-more pos-a\">Learn More
\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t<div class=\"w20 ta-r\">

\t\t\t\t\t\t\t\t\t\t\t<div class=\"icon pos-r\">
\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-normal pos-a w100 h100 ai-c jc-c\">

\t\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-white-9.svg\">
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-hover pos-a w100 h100 d-f ai-c jc-c\">

\t\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-white-9-hover.svg\">
\t\t\t\t\t\t\t\t\t\t\t\t</span>

\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t</li>


\t\t\t\t\t\t\t\t<li class=\"item to-load\">
\t\t\t\t\t\t\t\t\t<a class=\"box  c-white d-f jc-sb\" href=\"#\">
\t\t\t\t\t\t\t\t\t\t<span class=\"bg-block bg-blue2\"></span>
\t\t\t\t\t\t\t\t\t\t<div class=\"w60\">
\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"h4\">Legacy Systems
\t\t\t\t\t\t\t\t\t\t\t</h4>
\t\t\t\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet consectetur adipisng elit.</p>
\t\t\t\t\t\t\t\t\t\t\t<span class=\"learn-more pos-a\">Learn More
\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t<div class=\"w20 ta-r\">

\t\t\t\t\t\t\t\t\t\t\t<div class=\"icon pos-r\">
\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-normal pos-a w100 h100 ai-c jc-c\">

\t\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-white-10.svg\">
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-hover pos-a w100 h100 d-f ai-c jc-c\">

\t\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"dist/images/services-icon-white-10-hover.svg\">
\t\t\t\t\t\t\t\t\t\t\t\t</span>

\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t\t<li class=\"item to-load\">
\t\t\t\t\t\t\t\t\t<div class=\"last-box ta-c d-f ai-c jc-c fxd-c w100\">
\t\t\t\t\t\t\t\t\t\t<h4 class=\"ff-Roboto-Regular\">HI don’t have thought leaders to build business strategy I don’t have thought leaders to build business strategy</h4>
\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-orange\">GET IN TOUCH</a>

\t\t\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t\t</li>

\t\t\t\t\t\t\t</ul>

\t\t\t\t\t\t</div>


\t\t\t\t\t</div>

\t\t\t\t</div>

\t\t\t</div>



\t\t</section>

\t</section>

\t<!-- Services Section -->
\t<div class=\"tracker fl-fix\"></div>
\t<section class=\"home-content fl-fix \">
\t\t<div class=\"planet-wrap\">
\t\t\t<div class=\"planet pos-a\">
\t\t\t\t<span class=\"satellite\" data-lax-preset=\"spin \"></span>

\t\t\t</div>



\t\t</div>


\t\t<div class=\"wrapper\">
\t\t\t<div class=\"d-f w100 jc-sb fxd-rr\">
\t\t\t\t<div class=\"w65 to-load \">
\t\t\t\t\t<div class=\"image-box  round-box ov-h  pos-r video-box\">

\t\t\t\t\t\t<iframe width=\"850\" height=\"480\" src=\"https://www.youtube.com/embed/LAbDZsThFB0\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>

\t\t\t\t\t\t<a href=\"#\" class=\"play-btn\">
\t\t\t\t\t\t\t<figure>


\t\t\t\t\t\t\t\t<picture>
\t\t\t\t\t\t\t\t\t<source media=\"(min-width: 980px)\" srcset=\"dist/images/home-content-img.jpg\">

\t\t\t\t\t\t\t\t\t<!-- img tag for browsers that do not support picture element -->
\t\t\t\t\t\t\t\t\t<img src=\"dist/images/home-content-img.jpg\" alt=\"\">
\t\t\t\t\t\t\t\t</picture>


\t\t\t\t\t\t\t</figure>

\t\t\t\t\t\t</a>




\t\t\t\t\t</div>

\t\t\t\t</div>
\t\t\t\t<div class=\"w35  to-load delay-2 \">
\t\t\t\t\t<h2 class=\"h2 title\">Say NO MORE to the status quo.</h2>
\t\t\t\t\t<div class=\"content\">
\t\t\t\t\t\t<p>Leaders like you need a partner that designs technology solutions and platforms that enable you to dominate your industry. Leaders like you need a partner that can transform the technology tools and resources you already
\t\t\t\t\t\t\thave into undeniable business value.</p>
\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
\t\t\t\t\t\t\tconsequat.
\t\t\t\t\t\t</p>
\t\t\t\t\t\t<h5>Leaders like you choose Meridian.</h5>
\t\t\t\t\t\t<a href=\"#\" class=\"btn\">GET IN TOUCH</a>

\t\t\t\t\t</div>

\t\t\t\t</div>

\t\t\t</div>

\t\t</div>

\t</section>
\t<!-- Home Content Section -->
\t<section class=\"testimonial-section fl-fix ov-h\">
\t\t<div class=\"wrapper\">
\t\t\t<h2 class=\"h2 title marB50 to-load no-anim\">What Our Clients Are Saying</h2>
\t\t\t<div class=\"gray-box\">
\t\t\t\t<div class=\"testimonial-slider pos-r to-load\">
\t\t\t\t\t<div class=\"item  w100\">
\t\t\t\t\t\t<div class=\"d-f w100 jc-sb   \">
\t\t\t\t\t\t\t<div class=\"w60\">

\t\t\t\t\t\t\t\t<div class=\"image-box  round-box ov-h  pos-r video-box\">

\t\t\t\t\t\t\t\t\t<iframe width=\"850\" height=\"480\" src=\"https://www.youtube.com/embed/LAbDZsThFB0\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>

\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"play-btn ov-h\">
\t\t\t\t\t\t\t\t\t\t<figure>

\t\t\t\t\t\t\t\t\t\t\t<picture>
\t\t\t\t\t\t\t\t\t\t\t\t<source media=\"(min-width: 980px)\" srcset=\"dist/images/test-img1.jpg\">

\t\t\t\t\t\t\t\t\t\t\t\t<!-- img tag for browsers that do not support picture element -->
\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"dist/images/test-img1.jpg\" alt=\"\">
\t\t\t\t\t\t\t\t\t\t\t</picture>


\t\t\t\t\t\t\t\t\t\t</figure>

\t\t\t\t\t\t\t\t\t</a>




\t\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t<div class=\"w35 text-box\">
\t\t\t\t\t\t\t\t<h4 class=\"h6 marB60 tt-u\">CONSULTING</h4>
\t\t\t\t\t\t\t\t<div class=\"content\">
\t\t\t\t\t\t\t\t\t<p>Meridian IT knows our entire environment and, from a strategic perspective, they are able to help us roadmap what our environment should look like in the future as well as now.
\t\t\t\t\t\t\t\t\t\t<span class=\"colon right\"></span>
\t\t\t\t\t\t\t\t\t</p>
\t\t\t\t\t\t\t\t\t<p class=\"customer-quote\"><strong>Paul Slager</strong></p>
\t\t\t\t\t\t\t\t\t<p class=\"customer-quote\">Vice President of Technology</p>
\t\t\t\t\t\t\t\t\t<figure>
\t\t\t\t\t\t\t\t\t\t<img src=\"/uploads/images/test-logo.jpg\" alt=\"Customer Success Stories Envista Forensics Logo\">
\t\t\t\t\t\t\t\t\t</figure>
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>

\t\t\t\t\t</div>



\t\t\t\t</div>
\t\t\t\t<a href=\"#\" class=\"btn more-btn\">SEE ALL</a>
\t\t\t</div>


\t\t</div>
\t</section>
\t<!-- Home Testimonial Section -->

\t<section class=\"home-shoutout fl-fix bg-blue c-white ta-c ov-h \">

\t\t<div class=\"small-wrapper\">
\t\t\t
\t\t\t<div class=\"to-load loaded\">
\t\t\t\t<h2>Expect more from your <br> technology partner and focus on <br> the projects that matter.</h2>
\t\t\t\t<div class=\"actions\">
\t\t\t\t\t<a href=\"https://www.meridianitinc.com/contact-us?MIT%20Inbound%20Solution=Home\" class=\"contact-btn btn  no-hover text-35536 \">Get In Touch</a>
\t\t\t\t</div>
\t\t\t</div>
\t\t\t

\t\t</div>

\t</section>
\t<!-- Home Blue Section -->

\t<section class=\"home-blog fl-fix ov-h\">
\t\t<div class=\"inner-wrapper2\">
\t\t\t<div class=\"title marB60 d-f jc-sb ai-c to-load\">
\t\t\t\t<h2 class=\"marB0\"><a href=\"#\">Blog</a></h2>
\t\t\t\t<!-- <a href=\"#\" class=\"btn\">READ ALL</a> -->
\t\t\t</div>

\t\t\t<div class=\"blog-listing\">
\t\t\t\t<ul class=\"list col-3 \">

\t\t\t\t\t<li class=\"item col to-load \">
\t\t\t\t\t\t<article class=\"post featured \">
\t\t\t\t\t\t\t<div class=\"image-box\">
\t\t\t\t\t\t\t\t<a href=\"#\">
\t\t\t\t\t\t\t\t\t<figure class=\"pos-r has-light-overlay bgp-cc bgsz-cv bgr-n\" style=\"background-image: url(dist/images/blog-img1.jpg);\">
\t\t\t\t\t\t\t\t\t</figure>
\t\t\t\t\t\t\t\t</a>

\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t<a class=\"details\">
\t\t\t\t\t\t\t\t<h3> Lorem ipsum dolor sit amet consectetur adipiscing </h3>
\t\t\t\t\t\t\t\t<p>Most organizations are experiencing significant disruption to their business operations ...</p>

\t\t\t\t\t\t\t\t<div class=\"btm-actions d-f jc-sb ai-c w100\">
\t\t\t\t\t\t\t\t\t<span class=\"date\">10.09.2019</span>


\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t</article>

\t\t\t\t\t</li>
\t\t\t\t   <li class=\"item col to-load \">
\t\t\t\t\t\t<article class=\"post featured \">
\t\t\t\t\t\t\t<div class=\"image-box\">
\t\t\t\t\t\t\t\t<a href=\"#\">
\t\t\t\t\t\t\t\t\t<figure class=\"pos-r has-light-overlay bgp-cc bgsz-cv bgr-n\" style=\"background-image: url(dist/images/blog-img1.jpg);\">
\t\t\t\t\t\t\t\t\t</figure>
\t\t\t\t\t\t\t\t</a>

\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t<a class=\"details\">
\t\t\t\t\t\t\t\t<h3> Lorem ipsum dolor sit amet consectetur adipiscing </h3>
\t\t\t\t\t\t\t\t<p>Most organizations are experiencing significant disruption to their business operations ...</p>

\t\t\t\t\t\t\t\t<div class=\"btm-actions d-f jc-sb ai-c w100\">
\t\t\t\t\t\t\t\t\t<span class=\"date\">10.09.2019</span>


\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t</article>

\t\t\t\t\t</li>

\t\t\t\t\t<li class=\"item col to-load \">
\t\t\t\t\t\t<article class=\"post featured \">
\t\t\t\t\t\t\t<div class=\"image-box\">
\t\t\t\t\t\t\t\t<a href=\"#\">
\t\t\t\t\t\t\t\t\t<figure class=\"pos-r has-light-overlay bgp-cc bgsz-cv bgr-n\" style=\"background-image: url(dist/images/blog-img1.jpg);\">
\t\t\t\t\t\t\t\t\t</figure>
\t\t\t\t\t\t\t\t</a>

\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t<a class=\"details\">
\t\t\t\t\t\t\t\t<h3> Lorem ipsum dolor sit amet consectetur adipiscing </h3>
\t\t\t\t\t\t\t\t<p>Most organizations are experiencing significant disruption to their business operations ...</p>

\t\t\t\t\t\t\t\t<div class=\"btm-actions d-f jc-sb ai-c w100\">
\t\t\t\t\t\t\t\t\t<span class=\"date\">10.09.2019</span>


\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t</article>

\t\t\t\t\t</li>


\t\t\t\t</ul>



\t\t\t</div>
\t\t  
\t\t</div>


\t</section>
</section>


</div>
<!-- Main Section -->";
    }

    public function getTemplateName()
    {
        return "themes/basic/templates/content.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  93 => 28,  89 => 27,  65 => 6,  61 => 5,  55 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "themes/basic/templates/content.html.twig", "C:\\wamp64\\www\\drupallearn\\themes\\basic\\templates\\content.html.twig");
    }
}
