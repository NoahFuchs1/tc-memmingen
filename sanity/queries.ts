import groq from "groq"


export const sponsorsQurey = groq`*[_type == "sponsorsListDocument"][0].sponsorsList[] -> {
    _id,
    name, 
    "imageUrl": image.asset->url, 
    url,
  }`

export const homepageHeroQuery = groq`*[_type == "homepage"][0].heroSection {
    h1Hero,
    buttonLinksHero,
    buttonRechtsHero, 
    "videoHero": videoHero.asset->url,
}
`


export const homepageNewsQuery = groq`*[_type == "homepage"][0].newsSection{
      h1NewsSection,
      subHeadlineNewsSection,
      newsNewsSection[] -> {
        _id, 
        title, 
        date, 
        category -> {
          _id, 
          category,
        }, 
        content, 
        gallery[]{
          "url": asset->url,
          alt,
          featured
        }
      }
    }
`

export const newsQuery = groq`*[_type == "news"] {
    _id, 
    title, 
    date, 
    category -> {
      _id, 
      category,
    }, 
    content, 
    gallery[]{
      "url": asset->url,
      alt,
      featured
    }
}
`

export const getNewsItemWithId = groq`*[_type == "news" && _id == $id][0] {
    _id, 
    title, 
    date, 
    category -> {
      _id, 
      category,
    }, 
    content, 
}
`

export const homepageIntroductionQuery = groq`*[_type == "homepage"][0].introductionSection{
      h1IntroductionSection,
      textIntroductionSection,
      "image": imageIntroductionSection.asset->url,
    }
`
