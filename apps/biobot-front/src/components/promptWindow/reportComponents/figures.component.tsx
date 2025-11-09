import type { Figure } from "../../../hooks/ai/useAi.definition";

interface FiguresProps {
  figures: Figure[];
}

export const Figures = (props: FiguresProps) => {
  const { figures } = props;

  return (
    <div>
      {figures?.map((figure, idx) => (
        <div key={figure.image_url + idx} style={{ marginBottom: "20px" }}>
          <img
            src={figure.image_url}
            alt={figure.image_caption}
            style={{
              maxWidth: "100%",
              height: "auto",
              display: "block",
              margin: "0 auto",
            }}
          />
          <p style={{ textAlign: "center", fontStyle: "italic" }}>
            {figure.image_caption}
          </p>
        </div>
      ))}
    </div>
  );
};
