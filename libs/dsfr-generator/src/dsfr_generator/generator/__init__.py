"""DSFR web component generator."""

from .storybook import generate_storybook_story
from .web_component import generate_web_component, render_template

__all__ = [
    "generate_web_component",
    "generate_storybook_story",
    "render_template",
]
