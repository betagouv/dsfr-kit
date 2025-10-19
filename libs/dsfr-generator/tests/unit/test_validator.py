"""Unit tests for token validation (T081-T083)."""

from dsfr_generator.token_mapper.validator import (
    detect_token_conflicts,
    suggest_conflict_resolution,
    validate_token_completeness,
)


class TestDetectTokenConflicts:
    """Tests for detect_token_conflicts function (T081)."""

    def test_detect_duplicate_token_names(self):
        """Test detecting duplicate token names with different values."""
        tokens = {
            "--blue-france": "#000091",
            "--red-marianne": "#E1000F",
        }
        # Simulating tokens from different sources
        additional_tokens = {
            "--blue-france": "#0000FF",  # Conflict: different value
            "--grey-200": "#3A3A3A",
        }

        conflicts = detect_token_conflicts(tokens, additional_tokens)

        assert len(conflicts) > 0
        assert any(c["type"] == "duplicate_name" for c in conflicts)
        assert any("--blue-france" in c["token"] for c in conflicts)

    def test_detect_similar_token_names(self):
        """Test detecting similar token names that might be typos."""
        tokens = {
            "--blue-france-sun-113": "#000091",
            "--blue-france-sun-115": "#0000A0",  # Very similar name
        }

        conflicts = detect_token_conflicts(tokens)

        # Should detect potential naming issues
        assert isinstance(conflicts, list)

    def test_detect_conflicting_values(self):
        """Test detecting tokens with same value but different names."""
        tokens = {
            "--primary-blue": "#000091",
            "--brand-blue": "#000091",  # Same value, different name
        }

        conflicts = detect_token_conflicts(tokens)

        # May or may not be a conflict (could be intentional aliases)
        assert isinstance(conflicts, list)

    def test_no_conflicts(self):
        """Test that no conflicts are detected in clean token set."""
        tokens = {
            "--blue-france": "#000091",
            "--red-marianne": "#E1000F",
            "--grey-200": "#3A3A3A",
        }

        conflicts = detect_token_conflicts(tokens)

        assert conflicts == []

    def test_detect_invalid_color_values(self):
        """Test detecting invalid color values."""
        tokens = {
            "--blue-france": "#000091",
            "--invalid-color": "not-a-color",
            "--another-invalid": "#GGGGGG",  # Invalid hex
        }

        conflicts = detect_token_conflicts(tokens)

        assert len(conflicts) > 0
        assert any(c["type"] == "invalid_value" for c in conflicts)

    def test_detect_empty_values(self):
        """Test detecting empty or missing values."""
        tokens = {
            "--blue-france": "#000091",
            "--empty-value": "",
            "--none-value": None,
        }

        conflicts = detect_token_conflicts(tokens)

        assert len(conflicts) > 0
        assert any(c["type"] == "empty_value" for c in conflicts)


class TestSuggestConflictResolution:
    """Tests for suggest_conflict_resolution function (T082)."""

    def test_suggest_resolution_for_duplicate(self):
        """Test suggesting resolution for duplicate token names."""
        conflict = {
            "type": "duplicate_name",
            "token": "--blue-france",
            "values": ["#000091", "#0000FF"],
            "sources": ["core.css", "component.css"],
        }

        suggestions = suggest_conflict_resolution(conflict)

        assert len(suggestions) > 0
        assert any("rename" in s.lower() for s in suggestions)
        assert any("priority" in s.lower() or "override" in s.lower() for s in suggestions)

    def test_suggest_resolution_for_invalid_value(self):
        """Test suggesting resolution for invalid values."""
        conflict = {
            "type": "invalid_value",
            "token": "--invalid-color",
            "value": "not-a-color",
        }

        suggestions = suggest_conflict_resolution(conflict)

        assert len(suggestions) > 0
        assert any("fix" in s.lower() or "correct" in s.lower() for s in suggestions)

    def test_suggest_resolution_for_empty_value(self):
        """Test suggesting resolution for empty values."""
        conflict = {
            "type": "empty_value",
            "token": "--empty-token",
            "value": "",
        }

        suggestions = suggest_conflict_resolution(conflict)

        assert len(suggestions) > 0
        assert any("remove" in s.lower() or "provide" in s.lower() for s in suggestions)

    def test_suggest_resolution_for_similar_names(self):
        """Test suggesting resolution for similar token names."""
        conflict = {
            "type": "similar_names",
            "tokens": ["--blue-france-sun-113", "--blue-france-sun-115"],
        }

        suggestions = suggest_conflict_resolution(conflict)

        assert len(suggestions) > 0
        assert any("consolidate" in s.lower() or "rename" in s.lower() for s in suggestions)

    def test_suggest_resolution_unknown_type(self):
        """Test handling unknown conflict types."""
        conflict = {
            "type": "unknown_conflict_type",
            "token": "--some-token",
        }

        suggestions = suggest_conflict_resolution(conflict)

        # Should return generic suggestions or empty list
        assert isinstance(suggestions, list)


class TestValidateTokenCompleteness:
    """Tests for validate_token_completeness function (T083)."""

    def test_validate_all_tokens_mapped(self):
        """Test validation when all DSFR tokens are mapped."""
        dsfr_tokens = {
            "--blue-france": "#000091",
            "--red-marianne": "#E1000F",
            "--grey-200": "#3A3A3A",
        }
        mapped_tokens = {
            "blue-france": "#000091",
            "red-marianne": "#E1000F",
            "grey-200": "#3A3A3A",
        }

        result = validate_token_completeness(dsfr_tokens, mapped_tokens)

        assert result["is_complete"] is True
        assert result["missing_tokens"] == []
        assert result["coverage_percentage"] == 100.0

    def test_validate_missing_tokens(self):
        """Test validation when some tokens are missing."""
        dsfr_tokens = {
            "--blue-france": "#000091",
            "--red-marianne": "#E1000F",
            "--grey-200": "#3A3A3A",
            "--success-425": "#18753C",
        }
        mapped_tokens = {
            "blue-france": "#000091",
            "red-marianne": "#E1000F",
        }

        result = validate_token_completeness(dsfr_tokens, mapped_tokens)

        assert result["is_complete"] is False
        assert len(result["missing_tokens"]) == 2
        assert "--grey-200" in result["missing_tokens"]
        assert "--success-425" in result["missing_tokens"]
        assert result["coverage_percentage"] == 50.0

    def test_validate_empty_dsfr_tokens(self):
        """Test validation with empty DSFR token set."""
        dsfr_tokens = {}
        mapped_tokens = {"some-token": "#000000"}

        result = validate_token_completeness(dsfr_tokens, mapped_tokens)

        assert result["is_complete"] is True
        assert result["coverage_percentage"] == 100.0

    def test_validate_empty_mapped_tokens(self):
        """Test validation with empty mapped tokens."""
        dsfr_tokens = {
            "--blue-france": "#000091",
            "--red-marianne": "#E1000F",
        }
        mapped_tokens = {}

        result = validate_token_completeness(dsfr_tokens, mapped_tokens)

        assert result["is_complete"] is False
        assert len(result["missing_tokens"]) == 2
        assert result["coverage_percentage"] == 0.0

    def test_validate_partial_coverage(self):
        """Test validation with partial token coverage."""
        dsfr_tokens = {f"--token-{i}": f"#00000{i}" for i in range(10)}
        mapped_tokens = {f"token-{i}": f"#00000{i}" for i in range(7)}

        result = validate_token_completeness(dsfr_tokens, mapped_tokens)

        assert result["is_complete"] is False
        assert len(result["missing_tokens"]) == 3
        assert result["coverage_percentage"] == 70.0

    def test_validate_includes_statistics(self):
        """Test that validation includes useful statistics."""
        dsfr_tokens = {
            "--blue-france": "#000091",
            "--red-marianne": "#E1000F",
            "--grey-200": "#3A3A3A",
        }
        mapped_tokens = {
            "blue-france": "#000091",
            "red-marianne": "#E1000F",
        }

        result = validate_token_completeness(dsfr_tokens, mapped_tokens)

        assert "total_dsfr_tokens" in result
        assert "total_mapped_tokens" in result
        assert "missing_tokens" in result
        assert "coverage_percentage" in result
        assert result["total_dsfr_tokens"] == 3
        assert result["total_mapped_tokens"] == 2
