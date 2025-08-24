export interface Sponsor {
  _id: string
  name: string
  url: string
  imageUrl: string
}

export interface Sponsors {
  sponsors: Sponsor[]
}