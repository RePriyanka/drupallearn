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

/* themes/basic/templates/page.html.twig */
class __TwigTemplate_d7eb6c56387d5d59db2d74484fab607c83842dd1fb6353aff1f0cc378df3a605 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["set" => 1, "include" => 11, "if" => 12];
        $filters = ["render" => 1, "escape" => 3];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['set', 'include', 'if'],
                ['render', 'escape'],
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
        $context["main_menu"] = $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "primary_menu", [])));
        // line 2
        $context["secondary_menu"] = $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "secondary_menu", [])));
        // line 3
        echo "<div";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["attributes"] ?? null), "addClass", [0 => "layout-container", 1 => (((        // line 5
($context["main_menu"] ?? null) || ($context["secondary_menu"] ?? null))) ? ("with-navigation") : ("")), 2 => ((        // line 6
($context["secondary_menu"] ?? null)) ? ("with-subnav") : (""))], "method")), "html", null, true);
        // line 7
        echo ">

  <!-- ______________________ HEADER _______________________ -->

  ";
        // line 11
        $this->loadTemplate((($context["directory"] ?? null) . "/templates/header.html.twig"), "themes/basic/templates/page.html.twig", 11)->display($context);
        // line 12
        echo "  ";
        if ($this->getAttribute(($context["page"] ?? null), "header", [])) {
            // line 13
            echo "    <header id=\"header\">
      <div class=\"container\">
        <div id=\"header-region\">
          ";
            // line 16
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "header", [])), "html", null, true);
            echo "
        </div>
      </div>
    </header><!-- /#header -->
  ";
        }
        // line 21
        echo "  
  ";
        // line 22
        $this->loadTemplate((($context["directory"] ?? null) . "/templates/content.html.twig"), "themes/basic/templates/page.html.twig", 22)->display($context);
        // line 23
        echo "
  ";
        // line 24
        if ((($context["main_menu"] ?? null) || ($context["secondary_menu"] ?? null))) {
            // line 25
            echo "    <nav id=\"navigation\" class=\"menu";
            if (($context["main_menu"] ?? null)) {
                echo " with-primary";
            }
            if (($context["secondary_menu"] ?? null)) {
                echo " with-secondary";
            }
            echo "\">
      <div class=\"container\">
        ";
            // line 27
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["main_menu"] ?? null)), "html", null, true);
            echo "
        ";
            // line 28
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["secondary_menu"] ?? null)), "html", null, true);
            echo "
      </div>
    </nav><!-- /#navigation -->
  ";
        }
        // line 32
        echo "
  <!-- ______________________ MAIN _______________________ -->

  <div id=\"main\">
    <div class=\"container\">
      <div id=\"content-wrapper\">
        <section id=\"content\">

          <div id=\"content-header\">

            ";
        // line 42
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "breadcrumb", [])), "html", null, true);
        echo "

            ";
        // line 44
        if ($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["page"] ?? null), "highlighted", []))) {
            // line 45
            echo "              <div id=\"highlighted\">";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "highlighted", [])), "html", null, true);
            echo "</div>
            ";
        }
        // line 47
        echo "
            ";
        // line 48
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_prefix"] ?? null)), "html", null, true);
        echo "

            ";
        // line 50
        if (($context["title"] ?? null)) {
            // line 51
            echo "              <h1 class=\"title\">";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title"] ?? null)), "html", null, true);
            echo "</h1>
            ";
        }
        // line 53
        echo "
            ";
        // line 54
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_suffix"] ?? null)), "html", null, true);
        echo "
            ";
        // line 55
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "help", [])), "html", null, true);
        echo "

            ";
        // line 57
        if (($context["tabs"] ?? null)) {
            // line 58
            echo "              <div class=\"tabs\">";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["tabs"] ?? null)), "html", null, true);
            echo "</div>
            ";
        }
        // line 60
        echo "
            ";
        // line 61
        if (($context["action_links"] ?? null)) {
            // line 62
            echo "              <ul class=\"action-links\">";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["action_links"] ?? null)), "html", null, true);
            echo "</ul>
            ";
        }
        // line 64
        echo "
          </div><!-- /#content-header -->
\t\t";
        // line 66
        if ( !($context["is_front"] ?? null)) {
            // line 67
            echo "          <div id=\"content-area\">
            ";
            // line 68
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "content", [])), "html", null, true);
            echo "
          </div>
\t\t  ";
        }
        // line 71
        echo "
        </section><!-- /#content -->

        ";
        // line 74
        if ($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["page"] ?? null), "sidebar_first", []))) {
            // line 75
            echo "          <aside id=\"sidebar-first\" class=\"column sidebar first\">
            ";
            // line 76
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "sidebar_first", [])), "html", null, true);
            echo "
          </aside><!-- /#sidebar-first -->
        ";
        }
        // line 79
        echo "
        ";
        // line 80
        if ($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["page"] ?? null), "sidebar_second", []))) {
            // line 81
            echo "          <aside id=\"sidebar-second\" class=\"column sidebar second\">
            ";
            // line 82
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "sidebar_second", [])), "html", null, true);
            echo "
          </aside><!-- /#sidebar-second -->
        ";
        }
        // line 85
        echo "
      </div><!-- /#content-wrapper -->
    </div><!-- /.container -->
  </div><!-- /#main -->

  <!-- ______________________ FOOTER _______________________ -->

  ";
        // line 92
        if ($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["page"] ?? null), "footer", []))) {
            // line 93
            echo "    <footer id=\"footer\">
      <div class=\"container\">
        <div id=\"footer-region\">
          ";
            // line 96
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "footer", [])), "html", null, true);
            echo "
        </div>
      </div>
    </footer><!-- /#footer -->
  ";
        }
        // line 101
        echo "
</div><!-- /.layout-container -->
";
    }

    public function getTemplateName()
    {
        return "themes/basic/templates/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  261 => 101,  253 => 96,  248 => 93,  246 => 92,  237 => 85,  231 => 82,  228 => 81,  226 => 80,  223 => 79,  217 => 76,  214 => 75,  212 => 74,  207 => 71,  201 => 68,  198 => 67,  196 => 66,  192 => 64,  186 => 62,  184 => 61,  181 => 60,  175 => 58,  173 => 57,  168 => 55,  164 => 54,  161 => 53,  155 => 51,  153 => 50,  148 => 48,  145 => 47,  139 => 45,  137 => 44,  132 => 42,  120 => 32,  113 => 28,  109 => 27,  98 => 25,  96 => 24,  93 => 23,  91 => 22,  88 => 21,  80 => 16,  75 => 13,  72 => 12,  70 => 11,  64 => 7,  62 => 6,  61 => 5,  59 => 3,  57 => 2,  55 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "themes/basic/templates/page.html.twig", "C:\\wamp64\\www\\drupallearn\\themes\\basic\\templates\\page.html.twig");
    }
}
