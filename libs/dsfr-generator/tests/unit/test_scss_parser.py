"""Unit tests for SCSS parser module."""

from dsfr_generator.parsers.scss_parser import compile_scss, extract_scss_variables


class TestCompileScss:
    """Tests for compile_scss function."""

    def test_compile_scss_basic(self):
        """Test basic SCSS compilation."""
        scss = """
        $primary-color: #1212FF;
        .button {
            color: $primary-color;
        }
        """
        css = compile_scss(scss)
        assert ".button" in css
        assert "#1212FF" in css or "#1212ff" in css

    def test_compile_scss_with_nesting(self):
        """Test SCSS compilation with nesting."""
        scss = """
        .container {
            .button {
                padding: 1rem;
            }
        }
        """
        css = compile_scss(scss)
        assert ".container .button" in css
        assert "padding: 1rem" in css

    def test_compile_scss_empty_string(self):
        """Test compiling empty SCSS string."""
        scss = ""
        css = compile_scss(scss)
        assert css == ""

    def test_compile_scss_with_imports(self):
        """Test SCSS compilation handles @import statements."""
        scss = """
        $color: blue;
        .test { color: $color; }
        """
        css = compile_scss(scss)
        assert ".test" in css
        assert "blue" in css


class TestExtractScssVariables:
    """Tests for extract_scss_variables function."""

    def test_extract_simple_variables(self):
        """Test extracting simple SCSS variables."""
        scss = """
        $primary-color: #1212FF;
        $secondary-color: #E1000F;
        $font-size: 16px;
        """
        variables = extract_scss_variables(scss)
        assert variables["primary-color"] == "#1212FF"
        assert variables["secondary-color"] == "#E1000F"
        assert variables["font-size"] == "16px"

    def test_extract_variables_with_calculations(self):
        """Test extracting variables with calculations."""
        scss = """
        $base-size: 16px;
        $large-size: $base-size * 1.5;
        """
        variables = extract_scss_variables(scss)
        assert "base-size" in variables
        assert variables["base-size"] == "16px"

    def test_extract_variables_ignores_comments(self):
        """Test that variable extraction ignores comments."""
        scss = """
        // $commented-var: red;
        $active-var: blue;
        /* $block-comment-var: green; */
        """
        variables = extract_scss_variables(scss)
        assert "active-var" in variables
        assert "commented-var" not in variables
        assert "block-comment-var" not in variables

    def test_extract_variables_empty_scss(self):
        """Test extracting variables from empty SCSS."""
        scss = ""
        variables = extract_scss_variables(scss)
        assert variables == {}

    def test_extract_variables_with_maps(self):
        """Test extracting SCSS map variables."""
        scss = """
        $colors: (
            primary: #1212FF,
            secondary: #E1000F
        );
        """
        variables = extract_scss_variables(scss)
        assert "colors" in variables
