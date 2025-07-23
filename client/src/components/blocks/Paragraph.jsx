import ReactMarkdown from 'react-markdown'

export function Paragraph({ content }) {
  return (
    <div className="copy article-paragraph">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}