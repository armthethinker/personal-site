# Andrew's personal site
> It's my personal site! 😲

http://andrewrmchugh.rocks

Built from Bootstrap, Jekyll, a couple JS libraries, and hacks here and there.

## How to build
- To serve the site: `$ bundle exec jekyll serve`
- To update the bundle: `$ bundle update`

## Project hierarchy
```
root
|-- _data/:       .yml data structures
|-- _includes/:   partial page templates
|-- _layouts/:    page layouts
|-- _sass/:       source styling
|-- _site/:       compiled version of the site
|-- archive/:     older pages
|-- assets/:      imgs, css, JS
|-- projects/:    my various project pages
|-- Various root files and pages
```

## Partial page templates for content

### blockquote
- quote
- source

### media-img-xl
Fullscrene image, but probably needs some work
- url
- caption

### media-img
- url
- caption
- url2 (adds second image)
- caption2
- header
- subheader
- style: `anything | lg`
- captionSide (puts the given caption on the side)

### media-youtube
- urlCode
- caption
- header
- subheader
- style: `anything | lg`
- aspect: `21by9 | 16by9 | 4by3 | 1by1`

### timeline-entry
- date
- emoji
- description1 (first paragraph)
- description2 (second paragraph)
