import { Label } from "@/components/ui/label";
import { LinkedSlider } from "@/components/ui/linkedslider";

const Settings = ({
  chunkSize,
  setChunkSize,
  chunkOverlap,
  setChunkOverlap,
  setNeedsNewIndex,
}: {
  chunkSize: string;
  setChunkSize: (value: string) => void;
  chunkOverlap: string;
  setChunkOverlap: (value: string) => void;
  setNeedsNewIndex: (value: boolean) => void;
}) => {
  const sliders = [
    {
      label: "Chunk Size:",
      description:
        "The maximum size of the chunks we are searching over, in tokens. " +
        "The bigger the chunk, the more likely that the information you are looking " +
        "for is in the chunk, but also the more likely that the chunk will contain " +
        "irrelevant information.",
      min: 1,
      max: 3000,
      step: 1,
      value: chunkSize,
      onChange: setChunkSize,
    },
    {
      label: "Chunk Overlap:",
      description:
        "The maximum amount of overlap between chunks, in tokens. " +
        "Overlap helps ensure that sufficient contextual information is retained.",
      min: 1,
      max: 600,
      step: 1,
      value: chunkOverlap,
      onChange: setChunkOverlap,
    },
  ];
  return (
    <div className="space-y-2">
      <Label>Settings:</Label>
      {sliders.map(
        ({ label, description, min, max, step, value, onChange }) => (
          <LinkedSlider
            key={label}
            className="my-2"
            label={label}
            description={description}
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(val: string) => {
              onChange(val);
              setNeedsNewIndex(true);
            }}
          />
        ),
      )}
    </div>
  );
};

export { Settings };
