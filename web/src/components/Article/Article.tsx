function prettyDate(date: string): string {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const dateObj: Date = new Date(Date.parse(date))
  const day: string = dateObj.getDate().toString()
  const month: string = months[dateObj.getMonth()]
  const year: string = dateObj.getFullYear().toString()
  return `${day}-${month}-${year}`
}

const Article = ({ article }) => {
  return (
    <article
      style={{
        border: '1px solid #dddddd',
        backgroundColor: '#eeeeee',
        padding: '1rem',
        margin: '1rem 0',
      }}
    >
      <header>
        <h2 style={{ color: 'crimson', margin: 0 }}>{article.title}</h2>
      </header>
      <p style={{ color: 'black' }}>{article.body}</p>
      <div style={{ color: 'black' }}>
        Posted at: {prettyDate(article.createdAt)}
      </div>
    </article>
  )
}

export default Article
