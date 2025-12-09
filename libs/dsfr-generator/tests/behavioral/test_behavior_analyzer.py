import pytest
from pathlib import Path
from dsfr_generator.parsers.js_analyzer import analyze_javascript_file, BehaviorPattern, is_analyzer_available

# Skip tests if analyzer is not available (e.g. not built)
pytestmark = pytest.mark.skipif(
    not is_analyzer_available(),
    reason="TypeScript analyzer not available"
)

@pytest.fixture
def sample_js_file():
    return Path(__file__).parent.parent / "fixtures" / "behavior_sample.js"

def test_analyze_javascript_file(sample_js_file):
    """Test full analysis of a sample JavaScript file."""
    assert sample_js_file.exists()

    result = analyze_javascript_file(sample_js_file)
    assert isinstance(result, BehaviorPattern)
    assert result.component_name == "behavior_sample"
    assert result.file_path == str(sample_js_file)

def test_event_listener_detection(sample_js_file):
    """Test detection of event listeners."""
    result = analyze_javascript_file(sample_js_file)

    listeners = result.event_listeners
    assert len(listeners) >= 2

    # Check addEventListener
    click_listener = next((l for l in listeners if l["eventType"] == "click" and l["action"] == "add"), None)
    assert click_listener is not None
    assert "handleClick" in click_listener["handler"]

    # Check onfocus
    focus_listener = next((l for l in listeners if l["eventType"] == "focus" and l["action"] == "add"), None)
    assert focus_listener is not None
    assert focus_listener["handler"] == "inline"

    # Check removeEventListener
    remove_listener = next((l for l in listeners if l["eventType"] == "click" and l["action"] == "remove"), None)
    assert remove_listener is not None

def test_state_variable_detection(sample_js_file):
    """Test detection of state variables."""
    result = analyze_javascript_file(sample_js_file)

    variables = result.state_variables
    assert len(variables) >= 2

    is_open = next((v for v in variables if v["name"] == "isOpen"), None)
    assert is_open is not None
    assert is_open["initialValue"] == "false"

    state = next((v for v in variables if v["name"] == "state"), None)
    assert state is not None
    assert state["initialValue"] == "'idle'"

def test_dom_manipulation_detection(sample_js_file):
    """Test detection of DOM manipulations."""
    result = analyze_javascript_file(sample_js_file)

    ops = result.dom_manipulations
    assert len(ops) >= 3

    # Check classList.toggle
    toggle = next((op for op in ops if op["type"] == "classList.toggle"), None)
    assert toggle is not None
    assert toggle["value"] == "active"

    # Check setAttribute
    set_attr = next((op for op in ops if op["type"] == "setAttribute"), None)
    assert set_attr is not None
    assert set_attr["property"] == "aria-expanded"
    assert set_attr["value"] == "true"

    # Check property assignment
    prop_assign = next((op for op in ops if op["type"] == "propertyAssignment"), None)
    assert prop_assign is not None
    assert prop_assign["property"] == "textContent"
    assert "Clicked" in prop_assign["value"]

def test_aria_changes(sample_js_file):
    """Test detection of ARIA attribute changes."""
    result = analyze_javascript_file(sample_js_file)

    aria_changes = result.aria_changes
    assert len(aria_changes) >= 1

    change = aria_changes[0]
    assert change["attribute"] == "aria-expanded"
    assert change["value"] == "true"

def test_state_transition_detection(sample_js_file):
    """Test detection of state transitions."""
    result = analyze_javascript_file(sample_js_file)

    transitions = result.state_transitions
    # We expect at least one transition for 'state' and one for 'isOpen'
    assert len(transitions) >= 1

    # Check state transition
    state_transition = next((t for t in transitions if "state" in t["to"]), None)
    assert state_transition is not None
    assert "active" in state_transition["to"]
    assert "trigger" in state_transition
    assert state_transition["trigger"] == "conditional"

def test_missing_file():
    """Test error handling for missing file."""
    with pytest.raises(FileNotFoundError):
        analyze_javascript_file(Path("/non/existent/file.js"))
