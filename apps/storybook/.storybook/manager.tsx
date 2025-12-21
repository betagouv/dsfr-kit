import { CameraIcon } from "@storybook/icons";
import React, { useCallback } from "react";
import { IconButton } from "storybook/internal/components";
import { addons, types, useStorybookApi } from "storybook/internal/manager-api";

const ADDON_ID = "comparison/snapshot";
const TOOL_ID = `${ADDON_ID}/tool`;
const EVENTS = {
  SNAPSHOT_REQUESTED: "COMPARISON_SNAPSHOT_REQUESTED",
  SNAPSHOT_TAKEN: "COMPARISON_SNAPSHOT_TAKEN",
};

const SnapshotTool = () => {
  const api = useStorybookApi();
  const [isProcessing, setIsProcessing] = React.useState(false);

  const handleClick = useCallback(() => {
    setIsProcessing(true);
    api.emit(EVENTS.SNAPSHOT_REQUESTED);
  }, [api]);

  React.useEffect(() => {
    const handleSnapshotTaken = async (dataUri: string) => {
      try {
        const res = await fetch(dataUri);
        const blob = await res.blob();
        await navigator.clipboard.write([
          new ClipboardItem({ [blob.type]: blob }),
        ]);
        api.emit(EVENTS.SNAPSHOT_COPY_SUCCESS);
      } catch (e) {
        console.error("Failed to copy snapshot to clipboard", e);
        api.emit(EVENTS.SNAPSHOT_COPY_ERROR);
      } finally {
        setIsProcessing(false);
      }
    };

    api.on(EVENTS.SNAPSHOT_TAKEN, handleSnapshotTaken);
    return () => {
      api.off(EVENTS.SNAPSHOT_TAKEN, handleSnapshotTaken);
    };
  }, [api]);

  return (
    <IconButton
      key={TOOL_ID}
      active={isProcessing}
      title="Take Comparison Snapshot"
      onClick={handleClick}
      disabled={isProcessing}
    >
      <CameraIcon />
    </IconButton>
  );
};

addons.register(ADDON_ID, () => {
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: "Comparison Snapshot",
    match: ({ viewMode }) => !!viewMode?.match(/^(story|docs)$/),
    render: () => <SnapshotTool />,
  });
});
