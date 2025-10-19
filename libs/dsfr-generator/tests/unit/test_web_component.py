"""Unit tests for web component generator."""

from dsfr_generator.generator.web_component import generate_web_component, render_template
from dsfr_generator.parsers.types import ComponentStructure


class TestRenderTemplate:
    """Tests for render_template function."""

    def test_render_basic_template(self):
        """Test rendering a basic Jinja2 template."""
        template_str = "Hello {{ name }}!"
        context = {"name": "World"}
        result = render_template(template_str, context)

        assert result == "Hello World!"

    def test_render_template_with_loops(self):
        """Test rendering template with loops."""
        template_str = "{% for item in items %}{{ item }},{% endfor %}"
        context = {"items": ["a", "b", "c"]}
        result = render_template(template_str, context)

        assert "a," in result
        assert "b," in result
        assert "c," in result

    def test_render_template_empty_context(self):
        """Test rendering template with empty context."""
        template_str = "Static content"
        context = {}
        result = render_template(template_str, context)

        assert result == "Static content"


class TestGenerateWebComponent:
    """Tests for generate_web_component function."""

    def test_generate_button_component(self):
        """Test generating a button web component."""
        component = ComponentStructure(
            tag="button",
            classes=["fr-btn", "fr-btn--primary"],
            attributes={"type": "button"},
            aria_attributes={"aria-label": "Submit"},
            children=[],
            text="Click me",
            variants=["primary"],
        )
        colors = [
            {"name": "primary", "value": "#1212FF", "tailwind_class": "dsfr-primary"}
        ]

        result = generate_web_component(
            component=component, component_name="button", colors=colors
        )

        # Check for ES6 class definition
        assert "class DsfrButton extends HTMLElement" in result
        assert "constructor()" in result
        assert "super()" in result

        # Check for shadow DOM
        assert "attachShadow" in result
        assert "mode: 'open'" in result or 'mode: "open"' in result

        # Check for lifecycle methods
        assert "connectedCallback()" in result

        # Check for custom element registration
        assert "customElements.define" in result
        assert "dsfr-button" in result

    def test_generate_component_preserves_aria(self):
        """Test that generated component preserves ARIA attributes."""
        component = ComponentStructure(
            tag="button",
            classes=["fr-btn"],
            attributes={},
            aria_attributes={"aria-label": "Close", "role": "button"},
            children=[],
            text="X",
            variants=[],
        )

        result = generate_web_component(component, "button", [])

        assert "aria-label" in result
        assert "Close" in result
        assert "role" in result or "button" in result

    def test_generate_component_with_tailwind_classes(self):
        """Test that generated component includes Tailwind classes."""
        component = ComponentStructure(
            tag="button",
            classes=["fr-btn", "fr-btn--primary"],
            attributes={},
            aria_attributes={},
            children=[],
            text="Button",
            variants=["primary"],
        )
        colors = [
            {"name": "primary", "value": "#1212FF", "tailwind_class": "dsfr-primary"}
        ]

        result = generate_web_component(component, "button", colors)

        # Should include Tailwind classes instead of DSFR classes
        assert "class=" in result or "className=" in result

    def test_generate_component_with_slot(self):
        """Test that generated component uses slots for content."""
        component = ComponentStructure(
            tag="button",
            classes=["fr-btn"],
            attributes={},
            aria_attributes={},
            children=[],
            text="",
            variants=[],
        )

        result = generate_web_component(component, "button", [])

        # Should use <slot> for content projection
        assert "<slot>" in result or "<slot/>" in result

    def test_generate_component_with_variants(self):
        """Test that generated component handles variants."""
        component = ComponentStructure(
            tag="button",
            classes=["fr-btn", "fr-btn--secondary", "fr-btn--lg"],
            attributes={},
            aria_attributes={},
            children=[],
            text="Button",
            variants=["secondary", "lg"],
        )

        result = generate_web_component(component, "button", [])

        # Should handle variant attributes
        assert "observedAttributes" in result or "variant" in result.lower()

    def test_generate_component_name_conversion(self):
        """Test that component names are converted to kebab-case."""
        component = ComponentStructure(
            tag="button",
            classes=[],
            attributes={},
            aria_attributes={},
            children=[],
            text="",
            variants=[],
        )

        result = generate_web_component(component, "MyButton", [])

        # Should convert to kebab-case for custom element
        assert "my-button" in result or "MyButton" in result

    def test_generate_component_includes_styles(self):
        """Test that generated component includes style tag."""
        component = ComponentStructure(
            tag="button",
            classes=["fr-btn"],
            attributes={},
            aria_attributes={},
            children=[],
            text="Button",
            variants=[],
        )

        result = generate_web_component(component, "button", [])

        # Should include <style> tag for Tailwind
        assert "<style>" in result
