"""SCSS parser and compiler using libsass."""

import re

import sass


def compile_scss(scss_content: str) -> str:
    """
    Compile SCSS to CSS using libsass.

    Args:
        scss_content: SCSS string to compile

    Returns:
        Compiled CSS string
    """
    if not scss_content or scss_content.strip() == "":
        return ""

    try:
        css = sass.compile(string=scss_content)
        return css
    except sass.CompileError as e:
        raise RuntimeError(f"SCSS compilation failed: {e}") from e


def extract_scss_variables(scss_content: str) -> dict[str, str]:
    """
    Extract SCSS variables from SCSS content.

    Extracts variables in the format: $variable-name: value;

    Args:
        scss_content: SCSS string to parse

    Returns:
        Dictionary mapping variable names (without $) to their values
    """
    if not scss_content:
        return {}

    variables = {}

    # Remove single-line comments
    scss_no_single_comments = re.sub(r"//.*$", "", scss_content, flags=re.MULTILINE)

    # Remove multi-line comments
    scss_no_comments = re.sub(r"/\*.*?\*/", "", scss_no_single_comments, flags=re.DOTALL)

    # Pattern to match SCSS variables: $variable-name: value;
    # Handles simple values, calculations, and maps
    variable_pattern = r"\$([a-zA-Z0-9_-]+)\s*:\s*([^;]+);"

    matches = re.finditer(variable_pattern, scss_no_comments)

    for match in matches:
        var_name = match.group(1)
        var_value = match.group(2).strip()
        variables[var_name] = var_value

    return variables
