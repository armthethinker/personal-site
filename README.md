# Andrew's personal site
> It's my personal site! 😲

http://andrewrmchugh.rocks

Built from Bootstrap, Jekyll, a couple JS libraries, and hacks here and there.

## How to build
- To serve the site: `$ bundle exec jekyll serve`
- To serve and allow all incoming requests `$ bundle exec jekyll serve --host 0.0.0.0`
- To update the bundle: `$ bundle update`
- To optimize all images `$ npm run imgoptim`

- **To build for prod** `$ npm run build`

Served over `:4000`.

_`Grunt` isn't really set up, but is ready to be worked on._

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
Fullscreen image, but probably needs some work
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
- loop: `bool`
- style: `anything | lg`
- aspect: `21by9 | 16by9 | 4by3 | 1by1`

### timeline-entry
- date
- emoji
- description1 (first paragraph)
- description2 (second paragraph)

### model viewer
```
{% include model-viewer.html
   model="hiking/hiking.glb"
   modeliOS="hiking.usdz"
   caption="Hiking with the wife."
   cameraControls=true
   cameraOrbit="8deg 80deg 50%"
   cameraOrbitMin="-30deg 60deg auto"
   cameraOrbitMax="30deg 120deg auto"
   cameraTarget=".1m 1.3m 0m"
   arPlacement="floor"
%}
```


# Transition plan and notes

```json
  "devDependencies": {
    "grunt": "^1.0.4",
    "grunt-autoprefixer": "^3.0.4",
    "grunt-contrib-clean": "^2.0.0",
    "grunt-contrib-concat": "^1.0.0",
    "grunt-contrib-copy": "^1.0.0",
    "grunt-contrib-cssmin": "^3.0.0",
    "grunt-contrib-uglify": "^4.0.0",
    "grunt-contrib-watch": "^1.0.0",
    "grunt-jekyll": "^1.0.0",
    "grunt-text-replace": "^0.4.0"
  },
  "dependencies": {
    "bootstrap": "^4.3.1",
    "jquery": "^3.4.1",
    "popper.js": "^1.15.0",
    "zoom.js": "git+https://git@github.com/fat/zoom.js.git"
  }


    "jquery": "^3.4.1",
    "popper.js": "^1.15.0",
    "zoom.js": "git+https://git@github.com/fat/zoom.js.git"


    "bootstrap": "^5.3.0",
    "anchor-js": "^5.0.0",
    "is_js": "^0.9.0",
    "jquery.scrollto": "^2.1.3",
    "jquery.fitvids": "fitvids#^1.1.0"

```