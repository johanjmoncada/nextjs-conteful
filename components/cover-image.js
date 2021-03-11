import cn from 'classnames'
import Link from 'next/link'

export default function CoverImage({ title, url, slug }) {
  const image = (
    <img
      src={url}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200 h-96': slug,
      })}
      style={{ height: '500px', width: '100%', objectFit: 'cover' }}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
