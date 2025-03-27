import MarkdownIt from "markdown-it";

const MarkDownText = ({ text }: { text: string }) => {
  const md = MarkdownIt();
  const parsedContent = md.render(text);
  return (
    <div>
      {parsedContent ? (
        <article
          className={`markdown-content text-my-text_clr  leading-relaxed`}
          dangerouslySetInnerHTML={{ __html: parsedContent }}
        />
      ) : (
        <p>There is no content</p>
      )}
    </div>
  );
};

export default MarkDownText;
